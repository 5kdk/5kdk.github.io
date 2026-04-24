---
title: Next.js 캐싱을 실무에 도입하며 정리한 패턴들
authors: 5kdk
description: Next.js 캐싱을 적극적으로 쓰지 않던 프로젝트에 ISR과 Data Cache를 도입하며, 공개 데이터와 TanStack Query, 개인화 데이터의 경계를 어떻게 나눴는지 정리합니다.
tags: [Next.js, React Query, Architecture, Web Performance]
keywords:
  [
    Next.js caching,
    Next.js cache,
    Next.js Data Cache,
    ISR,
    revalidate,
    React cache,
    TanStack Query,
    React Query hydration,
    HydrationBoundary,
    queryOptions,
    personalized data,
    personal query,
    on-demand revalidation,
    revalidateTag,
    revalidatePath,
  ]
comments: true
---

[Next.js 캐싱 가이드](https://yceffort.kr/2025/12/nextjs-caching-deep-dive)를 읽고 나서, 지금 운영 중인 프로젝트의 캐싱 전략도 한 번 정리해봐야겠다는 생각이 들었습니다.

Next.js App Router의 캐싱은 레이어가 많습니다. Request Memoization, Data Cache, Full Route Cache, Router Cache를 각각 이해하는 것도 중요하지만, 실무에서는 그보다 먼저 물어야 할 질문이 있었습니다.

**이 데이터는 모든 사용자에게 같은 값을 보여줘도 되는가?**

이 질문에 대한 답에 따라 Next.js 캐시에 올릴 데이터, TanStack Query에 남길 데이터, 클라이언트에서만 요청할 개인화 데이터를 나눌 수 있었습니다.

이 글은 Next.js 캐싱 전체를 깊게 설명하는 글이 아닙니다. 원래 Next 캐싱을 적극적으로 쓰지 않던 프로젝트에 일부 캐싱을 도입하면서, 어떤 기준으로 경계를 나눴는지 정리한 실무 기록입니다.

<!--truncate-->

## 왜 이제 Next 캐싱을 도입했나

기존 프로젝트는 대부분의 서버 상태를 TanStack Query 중심으로 다루고 있었습니다.

이 방식의 장점은 명확했습니다. 데이터 흐름이 클라이언트에 모여 있고, 검색, 필터, 무한스크롤, mutation 이후 invalidate 같은 흐름을 일관되게 처리할 수 있었습니다. 사용자 액션에 따라 화면이 계속 바뀌는 모바일 웹뷰 서비스에서는 꽤 자연스러운 선택이었습니다.

하지만 모든 데이터가 그런 성격은 아니었습니다.

- 홈에 노출되는 공개 일정
- 월간 캘린더에 필요한 공개 일정
- 최신 오픈 목록
- 팀/아티스트 상세에 필요한 공개 정보

이런 데이터는 로그인 여부와 무관하게 대부분의 사용자에게 같은 값입니다. 그럼에도 매번 클라이언트에서 요청하면, 같은 공개 데이터를 사용자 수만큼 반복해서 읽게 됩니다.

처음에는 이 단순함이 좋았습니다. 캐시 무효화 문제를 크게 고민하지 않아도 되고, 데이터가 바뀌면 다음 요청에서 바로 새 값을 가져왔습니다. 하지만 트래픽이 늘고, 홈과 캘린더처럼 진입 빈도가 높은 화면의 호출 비용이 보이기 시작하자 생각이 바뀌었습니다.

**모든 데이터를 클라이언트 query로만 두는 것도 하나의 비용**이었습니다.

그래서 일부 공개 데이터부터 Next.js의 ISR과 Data Cache를 도입했습니다. 단, 모든 데이터를 서버 캐시에 올리는 방향은 피했습니다. 캐싱은 성능 최적화이기도 하지만, 잘못 쓰면 데이터 오염과 운영 혼란을 만들기 때문입니다.

<br />

## 캐싱 기준: 이 데이터는 모든 사용자에게 같아도 되는가

캐싱을 도입할 때 가장 먼저 세운 기준은 단순했습니다.

> 모든 사용자에게 같은 데이터라면 서버 캐시 후보이고, 사용자마다 달라지는 데이터라면 서버 캐시에 올리지 않는다.

이 기준으로 보면 데이터는 대략 네 가지로 나뉩니다.

| 데이터 성격 | 예시 | 주로 선택한 방식 |
| --- | --- | --- |
| 공개 + 비교적 안정적 | 홈 일부 영역, 공개 일정, 캘린더 데이터 | Next.js ISR / Data Cache |
| 공개 + 클라이언트 상호작용 중심 | 검색, 필터, 무한스크롤, 월 이동 | TanStack Query |
| 요청 내 중복 가능 | metadata와 page render가 같이 쓰는 상세 데이터 | React `cache()` |
| 개인화 | 관심 목록, 보유 티켓, 주문, 포인트, 추천 | 클라이언트 전용 query |

여기서 중요한 건 "공개 데이터면 무조건 Next 캐시"도 아니고, "React Query를 쓰면 서버 캐시를 쓰면 안 된다"도 아닙니다.

서버 캐시는 **요청 간 재사용**에 강하고, TanStack Query는 **클라이언트 상호작용이 이어지는 상태 그래프**에 강합니다. 둘은 경쟁 관계라기보다, 서로 다른 위치의 캐시입니다.

<br />

## 서버 캐시로 보낸 데이터: 홈, 캘린더, 공개 일정

가장 먼저 Next 캐싱을 적용하기 좋은 영역은 홈과 캘린더였습니다.

홈은 서비스 진입점이라 트래픽이 많고, 캘린더의 월간 일정 데이터도 여러 사용자가 같은 월을 반복해서 조회합니다. 이런 데이터는 몇 분 정도 늦게 반영되어도 서비스 경험에 치명적이지 않았습니다.

그래서 홈 페이지에는 App Router의 route segment `revalidate`를 사용했습니다.

```tsx title="app/page.tsx"
export const revalidate = 1800;

export default function Page() {
  return <HomePage />;
}
```

`1800`은 1800ms가 아니라 **1800초**, 즉 30분입니다. Next.js의 `revalidate` 값은 초 단위입니다.

이 설정은 "30분마다 자동으로 백그라운드에서 무조건 새 데이터를 가져온다"는 뜻이 아닙니다. 캐시가 stale 상태가 된 뒤, 다음 요청이 들어왔을 때 재검증이 트리거됩니다. 그래서 트래픽이 없는 페이지는 시간이 지났다고 해서 혼자 갱신되지 않습니다.

월간 일정처럼 특정 API 응답 단위로 캐싱하고 싶은 데이터는 서버 전용 HTTP 함수에서 `next.revalidate`를 넘기도록 했습니다.

```ts title="server fetch wrapper 사용 예시"
export const getMonthScheduleServer = async (
  year: string | number,
  month: string | number
) => {
  const { data } = await serverHttp.get<Schedule[]>("v1/schedules", {
    searchParams: { year, month },
    cache: "force-cache",
    next: {
      revalidate: 1800,
      tags: [`schedule:${year}-${month}`, "schedule:list"],
    },
  });

  return data;
};
```

프로젝트에서는 HTTP 클라이언트로 `ky`를 감싼 wrapper를 사용하고 있었습니다. 그래서 처음에는 "Next.js의 `fetch` 확장 옵션을 wrapper를 통해 넘겨도 될까?"가 고민이었습니다.

결론적으로 서버 환경에서 호출되는 wrapper가 내부적으로 `fetch`를 사용한다면, `cache`, `next.revalidate` 같은 옵션을 넘겨 Next.js Data Cache를 사용할 수 있었습니다. 굳이 모든 서버 API 함수를 native `fetch`로 다시 작성할 필요는 없었습니다.

다만 이 패턴은 명확한 구분이 필요합니다.

- `authHttp`: 클라이언트에서 사용자 토큰을 붙여 호출하는 일반 API 클라이언트
- `serverHttp`: RSC/SSR에서 공개 데이터를 읽기 위한 서버 전용 API 클라이언트

서버 캐시를 쓰는 함수는 `serverHttp` 쪽으로 분리했습니다. 그래야 "이 함수는 모든 사용자에게 공유되어도 되는 값을 가져온다"는 의도가 코드에 남습니다.

<br />

## 상세 페이지: `cache()`와 prop 전달

상세 페이지에서는 또 다른 문제가 있었습니다.

App Router에서는 `generateMetadata`와 page component가 같은 상세 데이터를 필요로 하는 경우가 많습니다. 예를 들어 팀 상세 페이지라면 metadata의 title과 description에도 팀명이 필요하고, 본문에도 같은 팀 정보가 필요합니다.

이때 같은 요청 안에서 동일한 데이터를 두 번 읽지 않도록 React의 `cache()`를 사용할 수 있습니다.

```tsx title="상세 페이지 예시"
import { cache } from "react";

const getTeamCached = cache((teamId: number) => getTeam(teamId));

export async function generateMetadata({ params }) {
  const team = await getTeamCached(Number(params.id));

  return {
    title: team.name,
    description: `${team.name}의 프로필과 일정을 확인해보세요.`,
  };
}

export default async function Page({ params }) {
  const team = await getTeamCached(Number(params.id));

  return <TeamPage team={team} />;
}
```

여기서 `cache()`는 Data Cache처럼 모든 사용자와 요청 사이에서 공유되는 영구 캐시가 아닙니다. 하나의 서버 렌더링 요청 안에서 같은 인자의 함수 호출을 재사용하는 용도에 가깝습니다.

이 패턴을 쓰면서 상세 페이지 구조도 단순해졌습니다.

이전에는 상세 1건 데이터까지 `prefetchQuery -> dehydrate -> HydrationBoundary -> useSuspenseQuery`로 연결하는 흐름을 습관적으로 검토했습니다. 하지만 상세 1건이 페이지 내부에서만 소비되고, 바로 mutation이나 invalidate로 이어지지 않는다면 굳이 query cache의 중심으로 만들 필요가 없었습니다.

그래서 상세 1건은 서버에서 읽어 prop으로 내리고, 실제로 클라이언트에서 상호작용이 이어지는 데이터만 TanStack Query에 남기는 쪽으로 정리했습니다.

예를 들어 상세의 기본 프로필은 prop으로 받고, 월간 일정이나 관련 목록처럼 사용자가 월을 이동하거나 필터링하는 데이터는 query로 읽는 식입니다.

```tsx title="상세 데이터와 동적 데이터 분리"
export default async function Page({ params }) {
  const artist = await getArtistCached(Number(params.artistId));

  return <ArtistPage artist={artist} />;
}
```

```tsx title="client component"
"use client";
function ArtistPage({ artist }: { artist: Artist }) {
  const [{ data: artistSchedules }, { data: teamSchedules }] = useSuspenseQueries({
    queries: [
      artistScheduleQueryOptions(artist.id),
      teamScheduleQueryOptions(artist.teamId),
    ],
  });

  return (
    <ArtistDetail
      artist={artist}
      artistSchedules={artistSchedules}
      teamSchedules={teamSchedules}
    />
  );
}
```

핵심은 "React Query를 없앤다"가 아닙니다. 상세 1건과 클라이언트에서 계속 움직이는 데이터를 분리하는 것입니다.

<br />

## React Query에 남긴 데이터: 검색, 필터, 무한스크롤, 월 이동

반대로 TanStack Query에 남기는 편이 더 자연스러운 데이터도 많았습니다.

대표적으로 캘린더와 탐색 화면이 그렇습니다. 사용자는 월을 이동하고, 필터를 바꾸고, 검색어를 입력하고, 인접 월로 계속 이동합니다. 이런 화면에서 데이터는 단순한 초기 렌더링 재료가 아니라 클라이언트 상태 그래프의 일부입니다.

```ts title="query factory 예시"
export const scheduleQueryFactory = {
  month: ({ year, month }: { year: number; month: number }) => [
    "schedule",
    "month",
    year,
    month,
  ],

  monthQueryOptions: ({ year, month }: { year: number; month: number }) =>
    queryOptions({
      queryKey: scheduleQueryFactory.month({ year, month }),
      queryFn: () => getMonthSchedule(year, month),
    }),
};
```

캘린더에서는 현재 월을 보여준 뒤, 사용자가 곧 이동할 가능성이 높은 이전 달과 다음 달을 미리 가져옵니다.

```tsx title="인접 월 prefetch"
const queryClient = useQueryClient();

const { data } = useSuspenseQuery(
  scheduleQueryFactory.monthQueryOptions(currentMonth)
);

useEffect(() => {
  queryClient.prefetchQuery(scheduleQueryFactory.monthQueryOptions(prevMonth));
  queryClient.prefetchQuery(scheduleQueryFactory.monthQueryOptions(nextMonth));
}, [queryClient, prevMonth, nextMonth]);
```

이건 Next Data Cache와 역할이 다릅니다.

Next Data Cache는 서버에서 공개 데이터를 요청 간 재사용하기 위한 캐시입니다. TanStack Query의 캐시는 사용자가 화면 안에서 이동하고 상호작용하는 동안, 클라이언트가 이미 가져온 데이터를 재사용하기 위한 캐시입니다.

둘은 같이 쓸 수도 있습니다.

초기 월 데이터는 서버에서 `next.revalidate`가 적용된 함수로 prefetch하고, 클라이언트에서는 같은 query key로 hydrate된 데이터를 이어받아 월 이동과 prefetch를 계속할 수 있습니다.

```tsx title="HydrationBoundary는 클라이언트 흐름으로 이어질 때만"
export async function CalendarHydrateProvider({ children }) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    scheduleQueryFactory.monthServerQueryOptions(currentMonth)
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
```

여기서도 기준은 같습니다.

**서버에서 한 번 보여주고 끝나는 데이터라면 prop으로 충분하고, 클라이언트에서 같은 query key를 중심으로 계속 움직인다면 hydrate할 가치가 있습니다.**

최신 오픈 목록처럼 무한스크롤이 붙은 화면도 비슷합니다. 첫 페이지를 서버에서 채워두면 초기 렌더는 안정적이고, 이후 `fetchNextPage`는 TanStack Query가 자연스럽게 이어받습니다.

<br />

## 개인화 데이터는 서버 캐시에 올리지 않는다

캐싱을 도입하면서 가장 강하게 지킨 규칙은 개인화 데이터 경계입니다.

관심 목록, 보유 티켓, 주문 내역, 포인트, 사용자 추천 데이터는 서버 전역 캐시에 올리지 않았습니다. 이런 데이터는 사용자마다 다르고, 로그인 상태에 따라 달라지고, 로그아웃이나 계정 전환 시 즉시 비워져야 합니다.

그래서 개인화 query에는 메타 정보를 붙였습니다.

```ts title="개인화 query meta"
export const PERSONAL_QUERY_META = {
  isPersonal: true,
} as const;

export const ticketQueryFactory = {
  notUsedTicketsQueryOptions: () =>
    queryOptions({
      meta: PERSONAL_QUERY_META,
      queryKey: ["tickets", "not-used"],
      queryFn: getNotUsedTickets,
    }),
};
```

로그아웃이나 회원 탈퇴처럼 세션이 바뀌는 이벤트에서는 이 메타를 기준으로 개인화 query를 정리합니다.

```ts title="세션 변경 시 개인화 query 제거"
const isPersonalQuery = (query: Query) => query.meta?.isPersonal === true;

await queryClient.cancelQueries({ predicate: isPersonalQuery });
queryClient.removeQueries({ predicate: isPersonalQuery });
```

이 장치는 단순한 정리 코드가 아닙니다.

모바일 웹뷰에서는 로그인 상태가 localStorage, 토큰 재발급, 앱 브리지, 페이지 이동과 얽혀 생각보다 복잡해집니다. 이전 사용자에게서 가져온 개인화 query가 남아 있으면 다음 사용자에게 잘못된 UI가 보일 수 있고, 만료된 토큰으로 계속 개인화 API를 호출하면 401 로그가 불필요하게 쌓일 수 있습니다.

실제로 비로그인 사용자에게 관심 목록 요청이 나가던 회귀가 있었습니다. query factory에는 `isLoggedIn`이 false일 때 빈 배열을 반환하는 방어가 있었지만, 호출부에서 실수로 항상 true를 넘기면서 비로그인 상태에서도 개인화 API가 호출된 케이스였습니다.

그때 다시 확인한 원칙은 명확했습니다.

- 개인화 query는 `isPersonal` 메타를 붙입니다.
- 로그인 여부를 query key에 포함하거나 queryFn에서 명확히 방어합니다.
- 비로그인 상태에서는 개인화 API를 호출하지 않습니다.
- 로그아웃, 토큰 만료, 회원 탈퇴 시 개인화 query를 제거합니다.

개인화 데이터는 "캐시하면 안 된다"기보다, **공유 캐시에 올리면 안 된다**에 가깝습니다. 클라이언트의 현재 사용자 세션 안에서는 캐시할 수 있지만, 사용자 간 공유될 수 있는 서버 캐시에는 올리지 않습니다.

<br />

## 아직 남은 문제: 어드민 수정과 on-demand revalidation

현재 구조에도 분명한 한계가 있습니다.

지금은 TTL 기반 `revalidate`만 있고, on-demand revalidation은 아직 없습니다. 그래서 어드민에서 일정, 팀, 아티스트, 상품 데이터를 수정해도 서비스 화면에 즉시 반영되지 않을 수 있습니다.

예를 들어 공개 일정 데이터를 30분 캐시한다고 하면, 운영자가 어드민에서 방금 수정한 값이 사용자의 화면에는 이전 값으로 남아 있을 수 있습니다. 캐시가 stale 상태가 된 뒤 다음 요청에서 재검증되기 전까지는 그렇습니다.

개발자 입장에서는 "30분 캐시니까 당연한 동작"이지만, 운영자 입장에서는 다르게 느껴질 수 있습니다.

> 방금 어드민에서 고쳤는데 왜 앱에서는 그대로 보이지?

이 지점부터는 단순히 `revalidate` 시간을 줄이는 것으로 해결하기 어렵습니다. 시간을 너무 짧게 잡으면 캐시 효과가 줄고, 너무 길게 잡으면 운영 반영이 늦어집니다.

그래서 다음 단계로는 on-demand revalidation이 필요합니다.

```ts title="Route Handler 예시"
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { type, id, year, month } = await request.json();

  if (type === "schedule") {
    revalidateTag(`schedule:${year}-${month}`, { expire: 0 });
    revalidateTag(`schedule:${id}`, { expire: 0 });
    revalidateTag("schedule:list", { expire: 0 });
  }

  return NextResponse.json({ revalidated: true });
}
```

여기서 `{ expire: 0 }`은 어드민 저장이나 웹훅처럼 "다음 요청에서는 stale 값을 보여주지 않았으면 하는" 상황을 염두에 둔 선택입니다. 반대로 약간의 stale-while-revalidate가 허용되는 콘텐츠라면 `revalidateTag(tag, "max")`처럼 stale로 표시하고 다음 방문에서 백그라운드 갱신되게 둘 수도 있습니다.

또는 페이지 단위로 명확히 갱신해야 한다면 `revalidatePath`를 사용할 수도 있습니다.

```ts
import { revalidatePath } from "next/cache";

revalidatePath("/");
revalidatePath("/calendar");
revalidatePath(`/team/${teamId}`);
```

다만 on-demand revalidation을 넣으려면 태그 설계를 먼저 해야 합니다.

- 일정이 수정되면 어떤 월간 캘린더 캐시를 날릴 것인가
- 팀 정보가 수정되면 팀 상세와 출연 일정 중 무엇을 갱신할 것인가
- 상품 정보가 수정되면 공연 상세와 결제 흐름 중 어디까지 영향을 받는가
- 어드민 저장 시 웹훅을 호출할 것인가, 백엔드 이벤트에서 호출할 것인가
- 실패했을 때 운영자가 다시 revalidate를 시도할 수 있는가

지금은 이 고민이 필요한 시점입니다. 캐싱을 도입했기 때문에 생긴 새로운 운영 과제입니다.

이건 캐싱의 단점이라기보다, 캐싱을 실무에 넣으면 반드시 따라오는 책임에 가깝습니다. 캐시를 켜는 것보다 중요한 건 **언제, 어떤 단위로 무효화할지** 정하는 일입니다.

<br />

## 내가 요즘 보는 판별 기준

캐싱을 추가할 때 요즘은 아래 질문들을 먼저 떠올리려고 합니다.

- 이 데이터는 모든 사용자에게 같은 값인가?
- 로그인 여부, 권한, 사용자 상태에 따라 달라지는 값이 섞여 있지는 않은가?
- 몇 분 정도 늦게 반영되어도 괜찮은가?
- 어드민에서 수정한 뒤 즉시 반영되어야 하는가?
- 사용자가 화면 안에서 검색, 필터, 월 이동, 무한스크롤을 이어가는가?
- 서버에서 읽은 데이터가 클라이언트 query graph의 중심으로 계속 사용되는가?
- mutation 이후 `invalidateQueries`와 연결되어야 하는가?
- 비로그인 상태에서 개인화 API가 호출될 가능성은 없는가?
- 로그아웃이나 계정 전환 시 제거되어야 하는 query가 표시되어 있는가?
- TTL 캐시만으로 충분한가, on-demand revalidation이 필요한가?

완전히 기계적으로 갈리지는 않지만, 이 질문들에 답하다 보면 대체로 경계가 보입니다.

- 모두에게 같은 공개 데이터는 Next.js 캐시 후보입니다.
- 클라이언트 상호작용이 이어지는 데이터는 TanStack Query가 자연스럽습니다.
- metadata와 page render가 함께 쓰는 상세 데이터는 `cache()`로 요청 안에서 공유할 수 있습니다.
- 개인화 데이터는 client-only query로 두고 세션 변경 시 정리해야 합니다.
- 어드민 수정 즉시성이 필요하면 TTL이 아니라 on-demand revalidation을 설계해야 합니다.

<br />

## 마무리

캐싱을 도입하면서 느낀 건, 실무의 캐싱 전략은 "어떤 API를 쓰느냐"보다 "어떤 데이터를 어디까지 공유해도 되느냐"에 가깝다는 점입니다.

Next.js의 `revalidate`, Data Cache, `cache()`, TanStack Query의 query cache는 모두 유용합니다. 하지만 각각의 캐시가 해결하는 문제가 다릅니다.

공개 데이터는 서버에서 재사용하고, 클라이언트 상호작용이 이어지는 데이터는 query cache로 관리하고, 개인화 데이터는 사용자 세션 안에 가둡니다. 그리고 운영자가 수정한 데이터가 즉시 반영되어야 하는 영역은 on-demand revalidation까지 설계해야 합니다.

결국 목표는 캐싱을 많이 쓰는 것이 아닙니다.

**공유 가능한 데이터만 공유 캐시에 올리고, 개인화와 즉시성 요구는 별도 경계로 다루는 것**입니다.

그리고 이 문제에는 정답이 따로 있는 것 같지 않습니다. 같은 Next.js 프로젝트라도 트래픽, 운영 방식, 어드민 수정 빈도, 개인화 비중, 화면 상호작용의 밀도에 따라 최적의 캐싱 전략은 달라집니다.

그래서 중요한 건 "남들이 이렇게 하더라"보다, **내 프로젝트에서 어떤 데이터가 어디까지 공유되어도 되는지 먼저 정의하고 그에 맞게 캐시를 설계하는 것**이라고 생각합니다.

<br />

## 참고 링크

- [Next.js 캐싱 가이드](https://yceffort.kr/2025/12/nextjs-caching-deep-dive)
- [Next.js Caching (Previous Model)](https://nextjs.org/docs/app/deep-dive/caching)
- [Next.js fetch API Reference](https://nextjs.org/docs/app/api-reference/functions/fetch)
- [Next.js revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
- [Next.js revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
- [TanStack Query Server Rendering & Hydration](https://tanstack.com/query/latest/docs/framework/react/guides/ssr)
