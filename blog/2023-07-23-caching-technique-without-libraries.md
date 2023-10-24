---
title: 라이브러리 없이 로컬 캐싱 구현하기
authors: 5kdk
description: 라이브러리 없이 데이터 캐싱 라이브러리들을 구현해보자.
tags: [React, SWR, React-Query]
keywords: [React-Query, 로컬 캐싱, 캐시 구현, 라이브러리 없이 캐싱 구현]
enableComments: true
---

SWR, React-query 같은 data fetching 라이브러리들은 기본적으로 fetch한 데이터에 대한 캐싱 기능을 제공한다.

이 포스팅에서는 서버에서 받아온 데이터에 대한 캐싱 과정을 라이브러리 없이 직접 구현해보면서 이해해본다.

<!--truncate-->

## 1. 사전 준비

### 서버 상태 라이브러리 알아보기

**SWR**

- "Stale-While-Revalidate" 캐싱 전략에 초점을 맞춘 React 라이브러리다.
- 구성 가능한 옵션을 통해 데이터 요청 빈도를 조절한다.
- 사용자가 앱 혹은 브라우저 탭에 focus할 때 데이터 재검증을 수행한다.

**React-Query**

- 서버 데이터를 가져오고 캐싱하는 데 최적화된 React 라이브러리다.
- 고수준의 추상화로 전역 상태 관리 및 데이터 동기화가 가능하다.
- 확장성과 더 큰 프로젝트에 적합하며, 에러 처리 및 결과값의 상태를 쉽게 관리할 수 있다.

:::info

<details>
  <summary>Stale-While-Revalidate</summary>
  <div>
    Stale-While-Revalidate은 캐싱 전략 중 하나로, 오래된(Stale) 데이터를 사용하면서 업데이트된 데이터를 재검증(Revalidate)하는 방식이다. 최신 버전의 데이터가 서버와 동기화되지 않은 상태에서도 사용자에게 빠르게 데이터를 제공할 수 있도록 도와준다.
    <br />
    <br />
    기본 원리는 다음과 같다:
    <br />
    - 요청이 들어오면, 캐시된 데이터(있을 경우)를 먼저 반환하여 빠른 응답을 보장한다.
    <br />
    - 동시에 백그라운드에서 서버에 데이터의 최신 버전을 요청하여 캐시를 업데이트한다.
    <br />
    - 업데이트된 데이터가 준비되면, 다음 요청부터는 최신 데이터로 응답을 보낸다.
    <br />
    - 이렇게 하면 사용자 경험이 향상되고, 서버의 부하도 줄일 수 있다.
  </div>
</details>

:::

두 라이브러리의 컨셉은 조금 다르지만, 서버 데이터에 대해 캐싱하고 효율적인 서버 데이터 요청을 추구한다는 점은 같다. 캐싱 라이브러리에 대한 포스팅이 아니기에, 본 포스트에서는 자세하게 다루진 않겠다.~~(가장 큰 차이점은 전역 상태관리로서의 사용 그리고 서버로의 mutation 여부다.)~~

<br />

### 구현할 기능에 대한 정보를 작성해보자

- 로컬에서 캐시 데이터들을 담아둘 수 있는 변수 (서버에서 받은 데이터를 저장해 놓을 무언가 필요)
- cache time 이내의 서버 요청 호출 방지 처리 (캐시 타임 비교 로직)
- 서버 데이터 요청에 대한 status를 가지고 있는 custom hook (의존성 주입을 통한 비동기 로직 캡슐화)

간단히 말하면 서버에서 받아온 데이터를 변수(특정 자료구조)에 저장하고, 로컬에 유효한 데이터가 있으면 이를 사용, 데이터가 없거나 유효하지 않으면 서버에 다시 요청을 보내는 과정을 구현하면 될 것 같다.

<br />

## 2. 핵심 기능 구현

### 캐시를 저장할 객체 생성

제일 먼저 로컬에서 '캐시'를 관리할 객체를 생성해보자. 캐시를 객체로 관리하는 이유는?

- key-value 구조로 일관적이다.
- 데이터를 확장하는 데 유용하다.
- value에 대한 접근성이 좋다.

```js
const cacheStore = new Map();
```

필자는 `Map` 객체를 활용하여 `cacheStore`를 만들어 주었다. 사실, 일반 객체로 만들어도 무방하지만.. 아래와 같은 이유로 `Map`을 선택했다.

- `Map` 객체는 key가 단 하나만 존재해야 한다는 점  
  -> **해당 key에는 유일한 캐시 값이 보장된다.**
- 객체를 컨트롤 할 수 있는 직관적인 프로토타입 메서드들을 제공(ex: `has()`, `set()` 등)  
  -> **선언적인 코드 작성이 가능하다.**
- 후술할 테 지만 추가 기능을 고려해 순서가 보장되는 `Map`을 선택했다.  
  -> **데이터 삽입 순서가 보장된다.**

<br />

### 캐싱 커스텀 훅 구현

관심사를 분리하여 캐시를 확인해서 데이터를 받아오는 로직들만을 가진 훅을 만들어보자.
React-Query의 `useQuery`의 이름을 본따 `useCacheQuery`라는 커스텀 훅을 만들었다.

```js title="useCacheQuery.js"
// highlight-next-line
const cacheStore = new Map();

const useCacheQuery = () => {};
```

- `cacheStore` 객체를 `useCacheQuery.js`의 모듈스코프에 선언함으로서 `cacheStore`를 공유할 수 있도록 했다.
- 즉, `useCacheQuery`를 어디서 호출하든 `cacheStore`에 접근할 수 있다.
  (파일로 분리해도 된다. ex: `cacheStore.js`)

데이터 요청의 상태를 컴포넌트에서 사용할 수 있도록 `isLoading`과 `error`에 대한 상태도 함께 캡슐화한다.

```js title="useCacheQuery.js"
import { useState } from 'react';

const cacheStore = new Map();

const useCacheQuery = () => {
  // highlight-start
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // highlight-end

  return { data, isLoading, error };
};
```

매개변수로는 `cacheStore`의 key가 될 `queryKey`와 요청을 수행할 `queryFn` 비동기 함수, 캐시의 유효시간 `cacheTime`를 선택적으로 주입 받을 수 있도록 하자.

```jsx title="useCacheQuery.js"
import { useState } from 'react';

// highlight-next-line
const initialCacheTime = 5 * 60 * 1000;
const cacheStore = new Map();

// highlight-next-line
const useCacheQuery = ({ queryKey, queryFn, cacheTime = initialCacheTime }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return { data, isLoading, error };
};
```

그리고 데이터를 서버에서 가져오고 캐시에 저장하는 로직을 작성해보자.

```js title="useCacheQuery.js"
// ...
const fetchWithCache = async () => {
  try {
    setIsLoading(true);
    const { data } = await queryFn();
    cacheStore.set(queryKey, { data, createAt: Date.now() });
    setData(data);
  } catch (e) {
    setError(e);
  } finally {
    setIsLoading(false);
  }
};
// ...
```

서버에서 받아온 데이터는 `cacheStore`에 `{ data: 서버에서 가져온 데이터, createAt: 현재 시간 }` 의 형태로 저장하도록 하였다. 현재 시간을 함께 저장해야 후에 캐시 타임과 비교를 할 수 있기 때문이다.

:::tip

`isLoading` 상태는 요청이 성공하든 실패를 하든 비동기 작업이 완료가 되면 `false`로 변경해주어야 하므로 `finally` 문에서 처리해준다.

:::

그렇담 우리의 캐시 확인 과정은 언제 어떻게 이루어질까? 서버에서 데이터를 가져오는 로직에 캐시 확인 과정을 얹어보자.

```js title="useCacheQuery.js"
// ...
const fetchWithCache = async () => {
  if (cacheStore.has(queryKey)) {
    const cache = cacheStore.get(queryKey);
    if (Date.now() - cache.createAt < cacheTime) {
      setData(cache.data);
      return;
    }
  }
};
// ...
```

1. 사용자의 요청이 들어오면 `cacheStore`에 `queryKey`가 있는지 확인한다.
2. `cacheStore`에 해당 key가 존재한다면 value의 생성시간(ms)과 현재시간(ms)의 차이를 `cacheTime`과 비교한다.
3. 만약 조건이 모두 만족되면 캐시를 사용하여 `data`상태를 업데이트하고 서버에 데이터 요청을 보내지 않는다. 유효한 캐시가 없을 경우 서버에 데이터 요청을 수행한다.

마지막으로 `useCallback`과 `useEffect`로 비동기 함수를 정리해보자.

```js title="useCacheQuery.js"
// ...
const fetchWithCache = useCallback(async () => {
  // ...
}, [cacheTime, queryFn, queryKey]);

useEffect(() => {
  fetchWithCache();
}, [fetchWithCache]);
// ...
```

<details>
  <summary>지금까지의 <code>useCacheQuery</code> 코드 전문</summary>

```js title="useCacheQuery.js"
import { useState, useEffect, useCallback } from 'react';

const initialCacheTime = 5 * 60 * 1000;
const cacheStore = new Map();

const useCacheQuery = ({ queryKey, queryFn, cacheTime = initialCacheTime }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWithCache = useCallback(async () => {
    if (cacheStore.has(queryKey)) {
      const cache = cacheStore.get(queryKey);
      if (Date.now() - cache.createAt < cacheTime) {
        setData(cache.data);
        return;
      }
    }
    try {
      setIsLoading(true);
      const { data } = await queryFn();
      cacheStore.set(queryKey, { data, createAt: Date.now() });
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [cacheTime, queryFn, queryKey]);

  useEffect(() => {
    fetchWithCache();
  }, [fetchWithCache]);

  return { data, isLoading, error };
};
```

</details>

<br />

### 프로젝트에 적용해보기

자동완성 검색 기능에 방금 만든 이 커스텀 훅을 적용해보자. `getSearchTerms`는 `input`을 파라미터로 설정하여 서버에 데이터 요청을 하는 비동기 함수다. (`input` 상태 대한 디바운싱 처리와 텍스트 전처리로 캐시에 불필요한 요청이 들어가지 않도록 처리해두었다. 컴포넌트의 상세 코드는 생략한다.)

```jsx title="SearchBar.jsx"
// ...
const {
  data: recommendations,
  isLoading,
  error,
} = useCacheQuery({
  queryKey: `@Suggestion ${input}`,
  queryFn: useCallback(() => getSearchTerms(input), []),
});
// ...
```

이에 대한 결과는 다음과 같다.

![example image 1](/img/2023-07-23-caching-technique-without-libraries/asset-1.png)
![example image 2](/img/2023-07-23-caching-technique-without-libraries/asset-2.png)

같은 검색어를 여러차례 검색했지만 요청은 1번만 일어났다. `cacheStore`에 제대로 들어가 있는 것을 보니 캐싱이 제대로 동작하는 것을 확인했다.

그런데 이 커스텀 훅엔 문제점이 있다.

- 현재 캐시는 로컬 메모리에 저장되고 있다.
- 쿼리의 개수가 늘어날수록 캐시가 무한정 커진다.
- 즉, 메모리 누수가 생긴다.

이를 방지하기 위해 적절한 캐시 정책을 구현해야 한다. 캐시에 대한 만료 정책이나 제한된 메모리 사용을 고려해보자.

<br />

## 3. 캐시 정책 구현

### 어떻게 하면 캐시 정책을 구현할 수 있을까?

필자는 최대 캐시의 개수를 설정하고 이를 넘을시 오래된 캐시부터 지우는 방법을 선택했다.

- 최대 캐시 개수 선언
- 데이터 요청 과정중 캐시 확인 작업(개수, 최신화)
- 오래된 캐시 삭제 작업

<br />

### 커스텀 훅에 적용하기

우선 최대 캐시 개수 `maxCacheSize`를 선언해주자.

```js title="useCacheQuery.js"
import { useState, useEffect, useCallback } from 'react';

const initialCacheTime = 5 * 60 * 1000;
// highlight-next-line
const maxCacheSize = 100;
const cacheStore = new Map();

// ...
```

`cacheStore`가 `maxCacheSize`의 개수를 넘는다면 오래된 캐시를 삭제해주는 로직을 추가해주자. `Map`은 삽입된 순서를 기억하므로 첫번째 key를 추출하고 캐시를 지워주면 된다!

```js title="useCacheQuery.js"
try {
  setIsLoading(true);
  const { data } = await queryFn();
  cacheStore.set(queryKey, { data, createAt: Date.now() });

  // highlight-start
  if (cacheStore.size > maxCacheSize) {
    const oldestCacheKey = cacheStore.keys().next().value;
    cacheStore.delete(oldestCacheKey);
  }
  // highlight-end

  // ...
}
```

단, 캐시를 최근에 사용했음에도 먼저 지워지는 것을 방지해주기 위해 캐시 순서를 최신화 해주어야한다.

그리고 캐시타임이 지났을 경우도 삭제해 주어야한다. 두 로직을 추가해주자.

```js title="useCacheQuery.js"
const fetchWithCache = useCallback(async () => {
  if (cacheStore.has(queryKey)) {
    const cache = cacheStore.get(queryKey);
    if (Date.now() - cache.createAt < cacheTime) {
      setData(cache.data);
      // highlight-start
      cacheStore.delete(queryKey);
      cacheStore.set(queryKey, cache);
      // highlight-end
      return;
      // highlight-start
    } else {
      cacheStore.delete(queryKey);
    }
    // highlight-end
  }
  // ...
}, [cacheTime, queryFn, queryKey]);
```

이제 무수한 데이터로 메모리 누수가 될 위험을 제거했다.

<br />

## 4. 부가 기능 구현

지금 상태에서 받아온 데이터를 컴포넌트에서 가공하여 사용할 수 있다. 부가적으로, 커스텀 훅에 `select` 옵션을 만들어서 데이터를 가공하여 원하는 형태로 가져올 수 있으면 좋을 것 같았다.

그리고 `initialData`도 추가했다.

```js title="useCacheQuery.js"
// ...
const useCacheQuery = ({
  queryKey,
  queryFn,
  // highlight-next-line
  initialData,
  cacheTime = initialCacheTime,
  // highlight-next-line
  select,
}) => {
  // highlight-next-line
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ...

  // highlight-next-line
  return { data: select ? select(data) : data, isLoading, error };
};

export default useCacheQuery;
```

```js
const {
  data: recommendations,
  isLoading,
  error,
} = useCacheQuery({
  queryKey: `@Suggestion ${input}`,
  queryFn: useCallback(() => getSearchTerms(input), []),
  initialData: [],
  cacheTime: 2 * 60 * 1000,
  select: data => data.slice(0, 7),
});
```

:::caution

`select`로 사용할 콜백 함수에 부수효과가 있는(원본 배열을 바꾸는) 메서드를 사용하지 않는다.
부수효과는 예기치 못한 결과를 만들어 낸다.

ex) `push`, `shift`, `splice`, `concat` 등

:::

<br />

## 마치며

<details>
  <summary>완성된 <code>useCacheQuery</code> 코드 전문</summary>

```js title="useCacheQuery.js"
import { useCallback, useEffect, useState } from 'react';

const initialCacheTime = 5 * 60 * 1000;
const cacheStore = new Map();
const maxCacheSize = 100;

const useCacheQuery = ({
  queryKey,
  queryFn,
  initialData,
  cacheTime = initialCacheTime,
  select,
}) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWithCache = useCallback(async () => {
    if (cacheStore.has(queryKey)) {
      const cache = cacheStore.get(queryKey);
      if (Date.now() - cache.createAt < cacheTime) {
        setData(cache.data);
        cacheStore.delete(queryKey);
        cacheStore.set(queryKey, cache);
        return;
      } else {
        cacheStore.delete(queryKey);
      }
    }

    try {
      setIsLoading(true);
      const { data } = await queryFn();
      cacheStore.set(queryKey, { data, createAt: Date.now() });

      if (cacheStore.size > maxCacheSize) {
        const oldestCacheKey = cacheStore.keys().next().value;
        cacheStore.delete(oldestCacheKey);
      }

      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [cacheTime, queryFn, queryKey]);

  useEffect(() => {
    fetchWithCache();
  }, [fetchWithCache]);

  return { data: select ? select(data) : data, isLoading, error };
};

export default useCacheQuery;
```

요약하자면 `useCacheQuery`를 호출하면 `initialData`를 초기 상태로 저장하고 비동기 함수 `queryFn`을 래핑한 `fetchWithCache`를 `useEffect`에서 호출한다. `fetchWithCache`에서는 로컬 캐시를 확인하고 최신화하며 필요시 서버에 데이터를 요청해 `data`와 캐시를 업데이트한다. `data`를 `select`여부에 따라 가공해서 반환하거나 그대로 반환한다.

</details>

이렇게 fetching 전용 로컬 캐싱 기능을 가진 커스텀 훅을 구현해봤다.

짧은 기간, 작은 프로젝트지만 어떻게 캐싱을 구현할지 고민해보는 시간이 알찼던거 같다. (덕분에 react query 복습도)

추가로 서버에 POST, PUT, DELETE 등 요청을 담당하는 mutation 기능, 상태의 낙관적 업데이트와 비관적 업데이트, 데이터 변경시 query invalid 기능, 선언적으로 에러, 로딩 처리를 할 수 있도록 `ErrorBoundary`와 `Suspence`를 지원하는 기능까지 추가하면 좋을 것 같다.
