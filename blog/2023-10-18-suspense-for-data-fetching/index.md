---
title: Suspense, Error Boundary와 선언적 데이터 패칭
authors: 5kdk
tags: [React, Next.js]
enableComments: true
---

데이터 요청 상태에 따라 다르게 노출되는 UX/UI 설계는 많은 고민을 필요로 합니다. 이러한 문제를 해결하기 위해 React는 다양한 방법을 제공하는데, 그 중 `Suspense`와 `ErrorBoundary`를 활용한 선언적 데이터 패칭이 있습니다. 이 방법은 코드의 가독성과 유지보수 측면에서 매우 효과적입니다.

지금부터 `Suspense`와 `ErrorBoundary`를 활용한 선언적 데이터 패칭이 어떻게 효과적인지 함께 알아보겠습니다.

<!--truncate-->

---

## 전통적인 데이터 패칭 처리

데이터 패칭은 전통적으로(?) 컴포넌트 내부에서 `data`, `loading`, `error`의 상태들을 사용하여 반환되는 컴포넌트에 대한 분기 처리로 이루어졌습니다. 아래의 예시 코드는 비동기 요청으로 데이터를 받아와 사용자에게 전달하는 간단한 컴포넌트입니다.

```jsx title="SampleContents.jsx"
const SampleContents = () => {
  const [sampleDatas, setSampleDatas] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true); // isLoading 상태변경
        const { data } = await queryFn(); // axios get 요청 예시 함수
        setSampleDatas(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false); // 성공이든 실패이든 isLoading은 false
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div>
      {sampleDatas.map(data => (
        <Content data={data} />
      ))}
    </div>
  );
};

export default SampleContents;
```

비동기 함수 `queryFn`가 반환하는 데이터가 들어오기 전까지 `isLoading`, `error` 상태에 따라 반환되는 컴포넌트를 분기 처리하여 로딩 중일 땐 `<Loader />`를 반환하고 에러가 발생했을땐 `<Error />`를 반환하여 사용자에게 정확한 정보를 전달합니다.

---

## React Query

React-Query는 비동기 요청을 효과적으로 관리할 수 있는 캐싱 라이브러리입니다. React-Query API들이 제공하는 프로퍼티를 활용하면 좀 더 간편하게 비동기 로직을 처리할 수 있습니다.

```jsx title="SampleContents.jsx"
const SampleContents = () => {
  const {
    data: sampleDatas,
    isLoading,
    error,
  } = useQuery({ queryKey, queryFn });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div>
      {sampleDatas.map(data => (
        <Content data={data} />
      ))}
    </div>
  );
};

export default SampleContents;
```

React Query의 API `useQuery`가 반환하는 `isLoading`, `error` 통해 `useEffect`를 제거하고 `useState` 줄이는 등 컴포넌트 내부 로직을 좀 더 간소화하여 첫번째 예시와 마찬가지로 데이터 요청 상태에 따라 반환되는 컴포넌트 랜더링 여부를 작성할 수 있습니다.

---

## 선언적 데이터 패칭

선언적 데이터 패칭은 React의 주요 개념인 '선언형 프로그래밍'에 기반합니다. 이는 상태의 변화에 따라 UI를 직접 조작하지 않고, 어떤 상태에 따라 어떤 UI가 보여져야 하는지만 집중합니다. 이러한 접근법은 비동기 작업의 복잡성을 크게 줄여주며 코드의 가독성과 유지보수성을 향상시킵니다. `Suspense`와 `ErrorBoundary`는 이러한 선언형 프로그래밍 방식으로 비동기 작업과 에러 처리를 담당합니다.

우선 `Suspense`와 `Error Boundary`에 대해 간단하게만 살펴보겠습니다.

### Suspense

[`Suspense`](https://react.dev/reference/react/Suspense)를 사용하면 자식이 로딩을 완료할 때까지 `fallback`을 표시할 수 있습니다. React는 자식에게 필요한 모든 코드와 데이터가 로드될 때까지 로딩 `fallback`을 표시합니다.

```jsx
// React 공식 문서의 예제
<Suspense fallback={<Loading />}>
  <SampleContents />
</Suspense>
```

### Error Boundary

[Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)는 하위 컴포넌트 트리에서 발생하는 에러를 캡처하여 대체 UI를 보여주거나 에러 리포팅 등의 작업을 수행합니다. 필요에 따라 커스터마이징을 할 수 있는데, `ErrorBoundary`의 커스터마이징에 대한 내용은 다음 기회에 또 다른 포스팅으로 진행해보겠습니다.

:::tip 추천 라이브러리

[react-error-boundary](https://www.npmjs.com/package/react-error-boundary) :

:::

---

# React-Query 와 Suspense, Error Boundary 사용하기

useQuery를 `Suspense`, `Error Boundary`와 함께 사용하려면 `suspense: true` 옵션을 넣어주면 됩니다.

```jsx title="SampleWrapper.jsx"
const SampleWrapper = () => {
  // ...

  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loader />}>
        <SampleContents />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SampleWrapper;
```

```jsx title="SampleContents.jsx"
const SampleContents = () => {
  const { data: sampleDatas } = useQuery({ queryKey, queryFn, suspense: true });

  return (
    <div>
      {sampleDatas.map(data => (
        <Content data={data} />
      ))}
    </div>
  );
};

export default SampleContents;
```

`Suspense`는 컴포넌트가 준비될 때까지 대기하고 fallback을 보여주는 역할을 합니다. 이로 인해 로딩 상태 관리 로직이 컴포넌트 외부로 추출되어 각 컴포넌트에서 로딩 상태를 확인하고 처리할 필요가 없어집니다.

`Error Boundary`는 하위 컴포넌트 트리에서 발생하는 에러를 캡처하여 대체 UI를 보여주거나 에러 리포팅 등의 작업을 수행합니다. 이로 인해 각각의 컴포넌트에서 에러 처리 로직이 분산되지 않고 한 곳에서 관리됩니다.

위의 코드에서 볼 수 있듯이, Suspense와 Error Boundary를 사용하면 로딩 상태와 에러 처리 로직을 컴포넌트 외부로 분리하여 관리할 수 있습니다. 이는 코드의 가독성을 높이고 유지보수를 용이하게 합니다.

모든 쿼리문에서 사용할 것 이라면 `QueryClient`를 생성할때 기본 옵션으로 지정해 줄 수 있습니다.

```jsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
```

또한, `ErrorBoundary`는 하위 컴포넌트들의 에러들을 공통으로 처리할 수 있습니다.

```jsx title="ChildWrapper.jsx"
const ChildComponent = () => {
  // ...

  return (
    <Suspense fallback={<Loader />}>
      <SampleContents />
    </Suspense>
  );
};
```

```jsx title="ParentWrapper.jsx"
const ParentComponent = () => {
  // ...
  // 하위 컴포넌트에서 발생하는 error를 모두 캐치

  return (
    <ErrorBoundary fallback={<Error />}>
      <ChildComponent />
      <ChildComponent2 />
      <ChildComponent3 />
    </ErrorBoundary>
  );
};
```

---

## 선언적 데이터 패칭을 할 때 의 주의사항

선언적 데이터 패칭은 많은 장점을 가지고 있지만, 몇 가지 주의사항도 존재합니다.

:::caution

_No Silver Bullet, 은탄환은 없다_

:::

### 비동기 요청 Waterfall

`Suspense`로 감싼 컴포넌트 내에서 여러개의 `useQuery`를 사용하는 경우 비동기 요청 Waterfall이 발생합니다.

```jsx
<Suspense fallback={<Loading />}>
  <SampleContents /> // 3개의 query문이 있는 컴포넌트
</Suspense>
```

![example image 1](./asset-1.png)

```jsx
<Suspense fallback={<Loading />}>
  <SampleContents1 /> // 1개의 query문 있는 컴포넌트
  <SampleContents2 /> // 1개의 query문 있는 컴포넌트
  <SampleContents3 /> // 1개의 query문 있는 컴포넌트
</Suspense>
```

![example image 1](./asset-2.png)

4.5 이후 버전의 최신 React Query를 사용한다면 `useQuery`대신 `useQueries`의 사용을 고려해 볼 만 합니다. 비동기 요청을 병렬로 처리해주며 `Suspense`를 지원해줍니다!

### Loader와 Skeleton의 사용자 경험에 대한 고민필요

데이터 패칭 시간이 짧은 경우 Loader나 Skeleton UI 같은 로딩 표시는 깜빡이는 현상 처럼 보일 수 있어 오히려 부정확한 정보 전달 및 사용자 경험 저하로 이어질 수 있으므로 신중하게 고려해야 합니다.

```jsx title="DeferredLoader.jsx"
const DeferredLoader = () => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(id);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return <Loader />;
};
```

짧은 시간 내에 로딩 상태가 변경되지 않으면 Loader나 Skeleton UI 대신 `null`을 반환하여 화면을 그리지 않고 그 이상의 로딩시 Loader나 Skeleton UI를 노출하는 방식도 고려할 만합니다.

---

## 결론

지금까지 `Suspense`와 `ErrorBoundary`를 활용한 선언적 데이터 패칭에 대해 알아봤습니다.

`Suspense`와 `ErrorBoundary`를 활용한 비동기 처리는 컴포넌트의 가독성, 유지보수 측면, 비즈니스 로직 분리 측면에서 상당한 이점이 있지만, 무분별한 `Suspense`, `ErrorBoundary`는 성능 저하, 사용자 경험 저하를 일으킬 수 있기 때문에 장단점을 좀 더 고민하고 동작 원리와 적절한 사용성에 대해 탐구해 나아가야 할 것 같습니다.
