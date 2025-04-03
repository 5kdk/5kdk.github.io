---
title: Querykey factory에서 Query factory로
authors: 5kdk
description: TanStack React Query의 쿼리들을 보다 안전하게 사용하는 방법.
tags: [TanStack React Query]
keywords:
  [queryKey, QueryKey factory, 쿼리키 관리, 쿼리키 팩토리, 쿼리 팩토리, Query factory]
comments: true
---

이 글에서는 기존 쿼리 키(queryKey)를 효율적이고 안전하게 관리하기 위해 사용하는 **쿼리 키 팩토리**(QueryKey factory) 패턴을 간략히 살펴보고, TanStack React Query v5에서 새롭게 도입된 `queryOptions` 를 활용한 **쿼리 팩토리**(Query factory)로 발전시키는 방법을 다룹니다.

<!--truncate-->


:::caution

***Query'Key' factory*** 와 ***Query factory*** 를 구분하세요!

:::


## 1. QueryKey factory

React Query를 사용할 때 여러 쿼리를 관리하다 보면, 키 관리가 어려워 한참 코드베이스를 들여다보거나 중복 코드가 발생할 수 있습니다. *(cursor를 괴롭히거나..)*

이를 방지하기 위해 추천되던 방법이 바로 **쿼리 키 팩토리** 패턴입니다. 이 패턴은 하나의 기능(feature)에서 사용하는 쿼리 키를 상수로 관리하여 일관성과 유지보수성을 높였었습니다.

> 쿼리 키를 수동으로 많이 선언하면 오류가 발생하기 쉬울 뿐만 아니라 나중에 키에 다른 수준의 세분성을 추가하려는 경우와 같이 변경하기가 더 어려워집니다. 그렇기 때문에 기능당 하나의 쿼리 키 팩토리를 사용하는 것이 좋습니다.
>
> *Dominik D*

### 예시 코드

```ts title="typescript"
const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
  details: () => [...todoKeys.all, 'detail'] as const,
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

## 2. React query의 객체 추상화시의 한계

상수로 key들을 관리했듯 useQuery 등에서 객체 형태로 관리하는 방법도 가능합니다. 자바스크립트라면 아래와 같은 코드가 우아하게 동작합니다.

```js title="javascript"
const todosQuery = {
  queryKey: todokeys.all,
  queryFn: fetchTodos,
  staleTime: 5000,
}

useQuery(todosQuery)

queryClient.prefetchQuery(todosQuery)

useSuspenseQuery(todosQuery)

useQueries([{
  queries: [todosQuery]
}])
```

타입스크립트에서의 이 패턴에는 하나의 문제점이 있습니다. 타입스크립트의 구조적 타입 시스템(structural typing)으로 인해 객체로 분리된 옵션에서 오타나 잘못된 프로퍼티 사용 시 타입 에러가 발생하지 않는 문제가 있습니다.

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
  queryKey: ['todos', 'detail', id], // 만약 queryKey에 id가 없다면 type error
  queryFn: () => fetchTodo(id),
  fooTime: 5000, // 오타여도 인라인이 아니면 무시됨
});

function App({ param }: { param: number }) {
  const queryClient = new QueryClient();

  const query = useQuery(todoDetailQuery(param)); 

  const data = queryClient.getQueryData(['contacts', 'detail']);
  // data의 추론이 제대로 안 되고 unknown -> 제네릭 매개변수 필요
}
```

## 3. queryOptions의 등장

TanStack React Query v5에는 이 문제를 해결하기 위한 `queryOptions` 가 새롭게 도입되었습니다. 런타임에서는 사실상 단순 identity 함수 역할만 하지만, 타입스크립트 레벨에서는 쿼리 키와 쿼리 함수를 밀접하게 연결해 정확한 타입 추론을 지원해 주는 강력한 기능입니다.

### 주요 장점

- `queryOptions`로 감싸면, `staleTime`이나 `select` 같은 옵션을 잘못 기재할 때 즉시 타입 에러를 확인할 수 있습니다.
- `getQueryData`, `setQueryData`를 사용할 때도 쿼리 함수의 반환 타입에 맞춰 자동으로 정확한 타입 추론이 이뤄집니다.
- `useQuery`, `fetchQuery`, `prefetchQuery`, `invalidateQueries` 등 React Query 전반에서 쿼리 키와 함수, 부가 옵션을 하나의 객체로 일관성 있게 재사용할 수 있습니다.


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
// data가 fetchTodo(id)의 반환 타입 또는 undefined로 추론
```
queryOptions를 쓰면 오탈자 방지는 물론, **쿼리 키가 해당 쿼리 함수와 “동일 객체”**임을 타입스크립트가 인식합니다. 이로써 getQueryData에서 자동으로 올바른 반환 타입이 추론되고, setQueryData에서도 이전 데이터의 타입이 연결된 형태로 안전하게 다뤄집니다.



## 4. QueryKey factory에서 Query factories로의 전환

기존의 키만 관리하는 쿼리 키 팩토리에서 나아가, 키와 관련된 쿼리 함수, 추가 옵션을 모두 결합하여 관리하는 **쿼리 팩토리(Query factories)**로 발전합니다. 이를 통해 모든 옵션을 한곳에서 관리하며 타입 안전성과 코드의 명확성을 높일 수 있습니다.

> 쿼리 키와 쿼리 함수를 분리하는 것은 실수였습니다.  
> 쿼리 키는 쿼리Fn에 대한 종속성을 정의하며, 그 안에서 사용하는 모든 것은 키에 들어가야 합니다. 그렇다면 왜 키를 한 곳에 정의하고 함수는 커스텀 훅에서 멀리 떨어진 곳에 두어야 할까요?  
> 하지만 두 가지 패턴을 결합하면 유형 안전, 공동 위치, 뛰어난 DX라는 세 가지 장점을 모두 얻을 수 있습니다. 
> 
> *Dominik D*

### 예시 코드

```ts
const todoQueries = {
  all: () => ['todos'],
  lists: () => [...todoQueries.all(), 'list'],
  list: (filters: string) =>
    queryOptions({
      queryKey: [...todoQueries.lists(), filters],
      queryFn: () => fetchTodos(filters),
    }),
  details: () => [...todoQueries.all(), 'detail'],
  detail: (id: number) =>
    queryOptions({
      queryKey: [...todoQueries.details(), id],
      queryFn: () => fetchTodo(id),
      staleTime: 5000,
    }),
};

// 실제 사용
useQuery(todoQueries.detail(1));
queryClient.prefetchQuery(todoQueries.detail(2));
```

여기에는 계층 구조 구축 및 쿼리 무효화에 사용할 수 있는 키 전용 항목과 쿼리 옵션 헬퍼로 만든 전체 쿼리 객체가 혼합되어 있습니다.



## 5. 결론

쿼리 팩토리 패턴은 React Query의 쿼리 관리 효율성을 크게 향상시킵니다. 특히 v5에서 도입된 queryOptions API를 활용하면 타입 안전성과 사용성을 모두 높일 수 있으므로, 앞으로 React Query를 사용할 때 적극적으로 적용하는 것을 추천합니다.


<br />

:::note[참고자료]

- https://youtu.be/bhE3wuB_TuA?si=spuFBTq-WUscp5bE
- https://tanstack.com/query/latest/docs/framework/react/guides/query-options
- https://tkdodo.eu/blog/the-query-options-api#queryoptions
- https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories

:::

