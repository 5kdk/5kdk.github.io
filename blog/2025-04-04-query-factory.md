---
title: Querykey factory에서 Query factory로
authors: 5kdk
description: TanStack React Query의 쿼리들을 보다 안전하게 사용하는 방법.
tags: [TanStack React Query]
keywords:
  [queryKey, QueryKey factory, 쿼리키 관리, 쿼리키 팩토리, 쿼리 팩토리, Query factory]
comments: true
---

이 글에서는 기존 쿼리 키(queryKey)를 효율적이고 안전하게 관리하기 위해 사용하는 **쿼리 키 팩토리**(QueryKey factory) 패턴을 간략히 살펴보고, TanStack React Query v5에서 도입된 `queryOptions`를 활용한 **쿼리 팩토리**(Query factory)로 발전시키는 방법을 다룹니다.

<!--truncate-->

:::caution

***Query'Key' factory*** 와 ***Query factory*** 를 혼동하지 마세요!

:::

## 1. QueryKey factory

React Query를 사용하면서 여러 쿼리를 관리하다 보면, 키 관리가 어려워 코드베이스를 한참 들여다보거나 중복 코드가 발생하는 경우가 있습니다. _(cursor를 괴롭히기 시작)_

이런 문제를 예방하기 위해 추천되던 방법이 바로 **쿼리 키 팩토리** 패턴입니다. 이 패턴은 하나의 기능(feature)에서 사용하는 쿼리 키를 상수로 관리하여 일관성과 유지보수성을 향상시킵니다.

> _쿼리 키를 수동으로 많이 선언하면 오류가 발생하기 쉬울 뿐만 아니라, 추후에 키에 더 세분화된 수준(granularity)을 추가하고 싶어질 경우 변경도 더 어렵게 만듭니다._  
> _그래서 저는 기능(feature) 단위로 하나의 쿼리 키 팩토리(Query Key factory)를 만드는 것을 권장합니다. 이는 단순히 쿼리 키를 생성하는 항목과 함수들로 이루어진 객체일 뿐이며, 이를 커스텀 훅에서 사용할 수 있습니다._
>
> *Dominik D*

### 예시 코드

```ts title="typescript"
const todoKeys = {
  all: ["todos"] as const,
  lists: () => [...todoKeys.all, "list"] as const,
  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
  details: () => [...todoKeys.all, "detail"] as const,
  detail: (id: number) => [...todoKeys.details(), id] as const,
};

useQuery({
  queryKey: todoKeys.detail(todoId),
  queryFn: () => fetchTodo(todoId),
});

queryClient.removeQueries({
  queryKey: todoKeys.all,
});

queryClient.invalidateQueries({
  queryKey: todoKeys.lists(),
});

queryClient.prefetchQueries({
  queryKey: todoKeys.detail(id),
  queryFn: () => fetchTodo(id),
});
```

## 2. React Query의 옵션 객체 추상화 시 한계점

쿼리 키를 상수로 관리했듯이 옵션 객체를 상수로 관리하는 방법도 가능합니다. 자바스크립트에서는 아래와 같은 코드가 깔끔하게 동작합니다.

```js title="javascript"
const todosQuery = {
  queryKey: todokeys.all,
  queryFn: fetchTodos,
  staleTime: 5000,
};

useQuery(todosQuery);

queryClient.prefetchQuery(todosQuery);

useSuspenseQuery(todosQuery);

useQueries([
  {
    queries: [todosQuery],
  },
]);
```

하지만 타입스크립트에서는 이 패턴에 한 가지 중요한 문제점이 있습니다. 타입스크립트의 구조적 타입 시스템(structural typing)으로 인해 객체로 분리된 옵션에서 오타나 잘못된 프로퍼티 사용 시 타입 에러가 발생하지 않는 문제가 있습니다.

[타입스크립트의 구조적 타입 시스템](https://5kdk.github.io/blog/2024/04/04/index-signatures-and-duck-typing#%EB%8D%95-%ED%83%80%EC%9D%B4%ED%95%91%EA%B3%BC-objectkeys%EC%9D%98-%EC%83%81%EA%B4%80%EA%B4%80%EA%B3%84)

### 예시 코드

```ts title="typescript"
useQuery({
  queryKey: todokeys.all,
  queryFn: fetchTodos,
  stallTime: 5000, // staleTime의 오타 - type error 발생
});

const todosQuery = {
  queryKey: todokeys.all,
  queryFn: fetchTodos,
  stallTime: 5000, // staleTime의 오타
};

useQuery(todosQuery); // type error가 발생하지 않음
```

```ts
const todoDetailQuery = (id: number) => ({
  queryKey: ["todos", "detail", id],
  queryFn: () => fetchTodo(id),
  fooTime: 5000, // 오타여도 인라인이 아니면 타입 체크에서 무시됨
});

const App = ({ param }: { param: number }) => {
  const queryClient = new QueryClient();

  const query = useQuery(todoDetailQuery(param));

  const data = queryClient.getQueryData(["contacts", "detail"]);
  // data의 추론이 제대로 안 되고 unknown -> 제네릭 매개변수 필요
}
```

## 3. queryOptions의 등장

TanStack React Query v5에서는 위 문제를 해결하기 위한 `queryOptions`가 새롭게 도입되었습니다. 런타임에서는 사실상 단순 identity 함수 역할만 하지만, 타입스크립트 레벨에서는 `queryClient`의 여러 부분들을 타입 안전하게 만들 수 있도록 도와주며, `queryKey`와 `queryFn` 등을 밀접하게 태깅해 정확한 타입 추론을 지원해 줄 수도 있습니다.

### 주요 장점

- **타입 오류의 즉각적인 감지**: `queryOptions`로 감싸면, `staleTime`이나 `select` 같은 옵션에 오타가 있을 때 즉시 타입 에러가 표시됩니다.
- **자동 타입 추론**: `getQueryData`, `setQueryData`를 사용할 때도 쿼리 함수의 반환 타입에 맞춰 자동으로 정확한 타입 추론이 이뤄집니다.
- **일관된 재사용**: 하나의 객체로 쿼리 키, 함수, 옵션을 묶어 React Query의 API 전반에서 일관되게 사용할 수 있습니다.

### 예시 코드

```ts
const todoDetailQuery = (id: number) =>
  queryOptions({
    queryKey: ['todos', 'detail', id],
    queryFn: () => fetchTodo(id),
    staleTime: 30000,
  });

useQuery(todoDetailQuery(todoId));

const data = queryClient.getQueryData(todoDetailQuery(todoId).queryKey);
// data가 fetchTodo(id)의 반환 타입 또는 undefined로 정확하게 추론됨
```

`queryOptions`를 사용하면 오탈자 방지는 물론, **쿼리 키가 해당 쿼리 함수와 "동일 객체"** 임을 타입스크립트가 인식합니다. 이는 React Query를 사용할 때 겪는 많은 타입 관련 문제를 해결해 줍니다.

## 4. QueryKey factory에서 Query factory로의 전환

기존의 쿼리 키만 관리하는 팩토리에서 한 단계 더 발전하여, 키와 관련된 쿼리 함수, 추가 옵션을 모두 결합하여 관리하는 **쿼리 팩토리(Query factory)** 로 전환할 수 있습니다. 이를 통해 모든 옵션을 한곳에서 관리하며 타입 안전성과 코드의 명확성을 높일 수 있습니다.

### Query factory 전환의 이점

1. **키와 함수의 자연스러운 결합**: 쿼리 키와 쿼리 함수는 본질적으로 밀접하게 연결되어 있으므로, 함께 관리하는 것이 논리적입니다.
2. **코드의 응집성 향상**: 관련된 쿼리 로직이 한 곳에 모여 있어 코드의 가독성과 유지보수성이 향상됩니다.
3. **타입 안전성 보장**: `queryOptions`를 통해 타입스크립트의 모든 장점을 최대한 활용할 수 있습니다.
4. **쿼리 로직의 재사용**: 쿼리 로직을 팩토리로 캡슐화하여 애플리케이션 전체에서 일관되게 사용할 수 있습니다.
5. **패칭과 프리패칭 간 옵션 공유**: 동일한 쿼리에 대한 일반 패칭과 프리패칭 사이에 모든 옵션을 일관되게 유지할 수 있어 코드 중복과 불일치를 방지합니다.

### 예시 코드

```ts
const todoQueries = {
  // 키 전용 항목 (키 계층 구조용)
  all: () => ['todos'],
  lists: () => [...todoQueries.all(), 'list'],
  details: () => [...todoQueries.all(), 'detail'],
  
  // 실제 queryOptions를 사용한 쿼리 팩토리
  list: (filters: string) =>
    queryOptions({
      queryKey: [...todoQueries.lists(), filters],
      queryFn: () => fetchTodos(filters),
      // 추가 옵션들도 여기에 설정 가능
      staleTime: 10000,
      gcTime: 60000
    }),
  detail: (id: number) =>
    queryOptions({
      queryKey: [...todoQueries.details(), id],
      queryFn: () => fetchTodo(id),
      staleTime: 5000,
    }),
};

// 무효화 시에도 타입 안전성 유지
queryClient.invalidateQueries({
  queryKey: todoQueries.lists(),
});

// 패칭과 프리패칭에서 동일한 옵션 공유 예시
function TodoDetailPage({ id }: { id: number }) {
  // 현재 상세 데이터 조회
  const detailQuery = useQuery(todoQueries.detail(id));
  
  // 연관 데이터 프리패칭 - 동일한 staleTime, 쿼리함수 등이 자동으로 공유됨
  const prefetchNextTodo = () => {
    queryClient.prefetchQuery(todoQueries.detail(id + 1));
  };
  
  return (
    <div>
      <h1>{detailQuery.data?.title}</h1>
      <button onClick={prefetchNextTodo}>다음 항목 미리 로드</button>
    </div>
  );
}
```

이 패턴은 계층 구조 구축 및 쿼리 무효화에 사용할 수 있는 키 전용 항목과 `queryOptions` 헬퍼로 만든 전체 쿼리 객체를 효과적으로 결합합니다. 특히 패칭과 프리패칭 간에 모든 쿼리 옵션이 자동으로 공유되어 일관성을 유지하고 중복 코드를 줄일 수 있습니다.

> **_queryKey와 queryFn를 분리하는 것은 실수였습니다._**  
> _queryKey는 queryFn의 의존성을 정의합니다. 즉, queryFn 내부에서 사용하는 모든 것은 queryKey에 포함되어야 합니다. 그렇다면 왜 queryKey는 한 곳에 정의해두고, 그와 관련된 함수들은 커스텀 훅 안에서 멀리 떨어진 위치에 둬야 할까요?_
> _하지만 이 두 가지 패턴을 결합하면, 타입 안전성(Type-safety), 코드의 근접성(Co-location), 그리고 뛰어난 개발자 경험(DX)이라는 세 가지 모두를 얻을 수 있습니다. 🚀_
> 
> *Dominik D*

## 5. 결론

`queryOptions`의 등장으로 React Query의 쿼리 관리 방식이 크게 발전했습니다. 이제 **QueryKey factory에서 Query factory로의 전환**을 시도해 볼 참입니다. 이 패턴을 적용하면 타입 안전성, 응집도, 유지보수성이 모두 향상되므로, 현재 React Query를 사용하고 있다면 Query factory 패턴으로의 전환을 검토해 보시기 바랍니다.

<br />

:::note[참고자료]

- https://youtu.be/bhE3wuB_TuA?si=spuFBTq-WUscp5bE
- https://tanstack.com/query/latest/docs/framework/react/guides/query-options
- https://tkdodo.eu/blog/the-query-options-api#queryoptions
- https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories

:::

