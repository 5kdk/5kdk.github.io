---
title: useCallback으로 useEffect 심화 활용 해보기
authors: 5kdk
tags: [React]
enableComments: true
---

[`useCallback`](https://react.dev/reference/react/useCallback)은 함수를 메모이제이션(memoization)하기 위해서 사용되는 Hook들 입니다. React의 `useCallback`을 [`useEffect`](https://react.dev/reference/react/useEffect)와 함께 사용하여 여러방면으로 효율적인 코드를 구성할 수 있는 방법이 있습니다. `useCallback`은 `useEffect`와 생긴 것은 똑같지만, 역할은 조금 다릅니다.

<!--truncate-->

## 예제로 보는 useEffect 심화 활용

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

`useCallback`을 살펴보자면 첫 번째 인자로 콜백함수를 넣어주고, 두 번째로 인자로 의존성 배열을 넣어줍니다. `a`나 `b`가 바뀌었을 때만 `useCallback`의 콜백 함수를 새로 생성하고, 그렇지 않을 경우 콜백 함수를 생성하지 않습니다.

### useCallback을 useEffect와 함께 사용하는 예

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
  // highlight-start
}, [a, b]);
// highlight-end

// highlight-start
useEffect(() => {
  memoizedCallback();
}, [memoizedCallback]);
// highlight-end
```

`useEffect`의 의존성 배열에 `memoizedCallback`이 있고, 콜백함수에서 `memoizedCallback`을 호출하고 있습니다.

`memoizedCallback`는 `a`, `b`에 의존적이므로, `a`와 `b`가 변경이 생겼을 때만 생성될 것이고, `useEffect`는 `memoizedCallback`이 새로 생성되었을 때 `memoizedCallback`을 호출할 것입니다.

```jsx
useEffect(() => {
  doSomething(a, b);
}, [a, b]);
```

## 여기서 useCallback은 왜 사용할까?

사실, 위 코드는 앞서본 코드와 같은 형태를 띠게 됩니다. 훨씬 간단해 보입니다. 그렇다면 왜 `useCallback`을 사용할까요?

:::caution 문제점

- useEffect에서 하는 행동이 많아질수록 코드가 복잡해집니다.
- dependency array가 길어 질 수 있습니다.
- 추후에 유지보수를 하려하면 헷갈리게 될 수 있습니다.

:::

:::info 해결방안

- `useEffect`는 우리가 원하는 side effect를 실행만 해주고,  
  `useCallback`에서 실제 해야 하는 것들을 선언해주면 코드의 분리가 가능합니다.
- 콜백 함수의 구체적인 역할을 이름을 통해 명시적으로 확인할 수 있습니다.
- 코드를 정리하고 가독성을 높여서 유지보수를 수월하게 해 줄 수 있습니다.

:::

### state가 바뀔 때마다 데이터를 받아와야 하는 경우

#### 1. useEffect만 사용하는 예

```jsx
useEffect(() => {
  const getDate = async () => {
    const response = await fetch('some url');
    setData(response.data);
  };
  getData();
}, [someDeps]);
```

`useEffect`의 콜백함수는 [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 반환하는 비동기 함수가 될 수 없습니다. 때문에, `getData`라는 비동기 함수를 `useEffect`가 실행될 때마다 생성해주고, 그 안에서 데이터를 가져오고 `setData`를 해주게 됩니다. 그리고 만든 `getData`라는 함수를 실행하게 됩니다. `useEffect`가 실행될 때마다 매번 함수가 생성되고 실행되니 매우 비효율적입니다.

#### 2. useEffect + useCallback 조합한 예

```jsx
const getData = useCallback(async () => {
  const response = await fetch('some url');
  setData(response.data);
}, [someDeps]);

useEffect(() => {
  getData();
}, [getData]);
```

## 결론

`useCallback`을 활용하면, `useCallback`안에서 데이터를 가져오는 콜백 함수를 `getData`에 넣어주고, `useEffect`안에서는 `getData`만 호출을 해주면 코드가 훨씬 깔끔해지고, 로직도 분리되며 가독성이 올라가는 효과를 얻을 수 있습니다.
