---
title: queryKey를 보다 안전하게 관리하는 방법
authors: 5kdk
description: TanStack React Query의 쿼리키를 보다 안전하게 사용하는 방법.
tags: [TanStack React Query]
keywords:
  [queryKey, QueryKey factories, 쿼리키 관리, 쿼리키 팩토리]
comments: true
---

이 글에서는 쿼리 키(queryKey)를 효율적이고 안전하게 관리하기 위한 패턴인 쿼리 키 팩토리(QueryKey factories) 패턴에 대해 설명하고, TanStack React Query v5에서 새롭게 등장한 `queryOptions` 를 결합하여 더욱 타입 안전하고 관리하기 쉬운 쿼리 키 관리법을 다뤄봅니다.

<!--truncate-->

## 1. QueryKey factories 사용하기

React Query를 사용할 때 여러 쿼리를 관리하다 보면, 키 관리가 어려워 한참 코드베이스를 들여다보거나 *(cursor를 괴롭히거나..)* 중복 코드가 발생할 수 있습니다.

이를 방지하기 위해 추천되는 방법이 바로 쿼리 키 팩토리 패턴입니다. 이 패턴은 하나의 기능(feature)에서 사용하는 쿼리 키를 객체 형태로 관리하여 일관성과 유지보수성을 높입니다.

> 쿼리 키를 수동으로 많이 선언하면 오류가 발생하기 쉬울 뿐만 아니라 나중에 키에 다른 수준의 세분성을 추가하려는 경우와 같이 변경하기가 더 어려워집니다. 그렇기 때문에 기능당 하나의 쿼리 키 팩토리를 사용하는 것이 좋습니다.
>
> *Dominik D*

### 예시 코드

```ts
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

## 2. QueryKey factories의 문제점

쿼리 키 팩토리 패턴은 쿼리 관리를 효율적으로 만들어주지만, 타입스크립트의 구조적 타입 시스템으로 인해 별도의 객체에서 발생한 오타나 잘못된 필드 사용과 같은 문제를 쉽게 찾지 못하는 단점이 있습니다.

### 예시 코드

```ts
useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  stallTime: 5000, // staleTime의 오타 - 타입 에러 발생
});

const todosQuery = {
  queryKey: ['todos'],
  queryFn: fetchTodos,
  stallTime: 5000, // staleTime의 오타 
};

useQuery(todosQuery); // 타입 에러가 발생하지 않음
```


## 3. queryOptions의 등장

TanStack React Query v5 에서는 이러한 문제를 해결하고자 `queryOptions` API가 도입되었습니다. 이 API는 쿼리키와 쿼리 함수를 하나의 객체로 묶어 타입스크립트의 타입 추론을 더욱 명확하게 할 수 있게 해줍니다.

내부적으로는 런타임에 아무런 영향을 주지 않는 단순 identity 함수이지만, 타입스크립트 측면에서 쿼리키와 쿼리 함수의 반환 타입을 연결해 강력한 타입 안전성을 제공합니다. 이를 통해 쿼리 데이터를 가져오거나 설정할 때 올바른 데이터 타입이 자동으로 추론되어, 불필요한 타입 명시 없이도 안전하게 코드를 작성할 수 있습니다.

:::info

- `queryOptions`는 `useQuery`, `fetchQuery`, `invalidateQueries`, `getQueryData`, `setQueryData` 등 다양한 API에서 동일한 옵션 객체로 재사용 가능합니다.
- `getQueryData(queryKey)` 호출 시, 자동으로 정확한 타입 추론이 이루어집니다.
- `setQueryData` 역시 이전 데이터의 정확한 타입을 추론해줍니다.

:::

### 예시 코드

```ts
const todoDetailQuery = (id: number) => queryOptions({
  queryKey: ['todos', 'detail', id],
  queryFn: () => fetchTodo(id),
  staleTime: 30000,
});

useQuery(todoDetailQuery(todoId));
```

## 4. QueryKey factories를 queryOptions로 강화하기

기존 쿼리 키 팩토리 패턴에 `queryOptions` 를 결합하면, 쿼리 키 관리의 일관성과 재사용성은 물론 타입 안정성까지 확보할 수 있습니다. 특히 복잡한 도메인 구조에서 더욱 효과적으로 작동합니다.

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

이처럼 정의해두면 자동 완성과 타입 추론의 도움을 받아 실수를 줄일 수 있으며, 유지보수성과 개발 생산성을 모두 향상시킬 수 있습니다

## 5. 결론

Query factories는 React Query의 키 관리를 효율적이고 체계적으로 만들어줍니다. 여기에 `queryOptions` 를 결합하면 보다 정교한 타입 안전성과 명확한 구조를 제공할 수 있습니다. 따라서 앞으로 이를 적용하여 더욱 안정적이고 우아한 코드를 작성하는 것이 가장 좋은 방법인 것 같습니다.

<br />

:::note[참고자료]

- https://youtu.be/bhE3wuB_TuA?si=spuFBTq-WUscp5bE
- https://tanstack.com/query/latest/docs/framework/react/guides/query-options
- https://tkdodo.eu/blog/the-query-options-api#queryoptions
- https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories

:::

