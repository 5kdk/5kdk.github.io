---
title: useMemo, useCallback으로 최적화가 꼭 필요할까?
authors: 5kdk
tags: [React]
enableComments: true
---

`useCallback`과 `useMemo`는 리액트의 최적화를 도와주는 Hook들입니다. 성능 개선을 위해 사용되지만, 꼭 필요한 경우에만 사용하는 것이 좋습니다.

> **useCallback**
>
> `useCallback`은 이벤트 핸들러와 같은 함수를 메모이제이션(memorization)할 때 사용되는 Hook입니다. 컴포넌트가 리렌더링될 때마다 함수를 새로 생성하는 것을 방지하고, 이전에 생성한 함수를 재사용하여 불필요한 렌더링을 줄여줍니다.

> **useMemo**
>
> `useMemo`는 렌더링 중에 발생하는 연산량이 큰 함수의 결과값을 메모이제이션하며, 이전 결과값을 재사용할 수 있도록 도와줍니다.

<!--truncate-->

## 남용하지 말아야할 이유

`useCallback`과 `useMemo`는 성능 최적화의 목적으로 사용되긴 하지만, 무분별하게 사용할 경우 오히려 성능 저하를 초래할 수 있습니다.

1. **메모이제이션 자체의 비용**: 이 두 Hook을 사용하면 함수와 계산 결과를 캐싱하기 위한 메모리 사용량이 늘어납니다. 게다가, 새롭게 계산되는 값이 일정 기간동안 사용되지 않아도 메모리에 남아 있어야 하므로 메모리 관리의 측면에서 비효율적일 수 있습니다.(가비지 컬렉터가 무시)
2. **의존성 배열의 관리**: `useCallback`과 `useMemo`는 의존성 배열이 필요한데, 이 배열에 들어간 값들이 변경될 때마다 메모이제이션된 값을 무효화하고 새로 계산합니다. 이 과정에서 복잡성이 증가하며, 관리가 미흡한 경우 오히려 성능이 저하될 수 있습니다.
3. **남용에 따른 실수**: 무분별한 사용으로 인해 모든 함수나 결과값을 메모이제이션하려 할 때 실수가 발생할 가능성이 높아집니다. 이로 인해 성능 최적화를 기대하는 대신 버그나 성능 저하를 초래할 수 있는 상황이 생길 수 있습니다.

## useCallback과 useMemo를 사용하기 좋은 상황

### 예시 1: `useCallback`을 활용한 의존성 배열의 함수 참조

:::caution
아래 이어지는 코드는 단순 예시에 대한 이해를 돕기위해 작성된 💩 코드입니다. 이점 참고바랍니다.
:::

```jsx
import { useState, useCallback } from 'react';

const ExpensiveCalculationButton = ({ onClick }) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    onClick();
    setCount(prevCount => prevCount + 1);
  }, [onClick]);

  return (
    <button type="button" onClick={handleClick}>
      클릭횟수: {count}
    </button>
  );
};

const App = () => {
  const [result, setResult] = useState(0);
  const onClick = useCallback(
    () => setResult(prevResult => prevResult + 1),
    []
  );

  return (
    <div>
      <ExpensiveCalculationButton onClick={onClick} />
      결과값: {result}
    </div>
  );
};

export default App;
```

`useCallback`을 사용해 `handleClick`의 `onClick` 속성과 관련된 동일한 참조값을 사용할 수 있습니다. 이를 통해 불필요한 렌더링을 방지합니다.
:::info

함수는 객체 입니다!

```js
const a = 'a';
const a2 = 'a';

a === a2; // true

const f = () => console.log(f);
const f2 = () => console.log(f);

f === f2; // false
```

:::

### 예시 2: 복잡한 계산에서의 `useMemo`

```jsx
import { useState, useMemo } from 'react';

const expensiveCalculation = (a, b) => {
  // 길고 복잡한 코드…
  return a * b;
};

const Calculator = ({ a, b }) => {
  const result = useMemo(() => expensiveCalculation(a, b), [a, b]);

  return <div>결과값: {result}</div>;
};

const App = () => {
  const [a, setA] = useState(5);
  const [b, setB] = useState(10);

  return (
    <div>
      <input
        type="number"
        value={a}
        onChange={e => setA(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={e => setB(parseInt(e.target.value))}
      />
      <Calculator a={a} b={b} />
    </div>
  );
};

export default App;
```

값을 입력하는 입력란의 변화에 따라 `a`와 `b` 값이 변경되고 `expensiveCalculation`이 실행됩니다.

`useMemo`를 사용하여 `a`와 `b`가 실제로 변경될 때만 계산을 실행하고, 이전 결과를 캐시하여 불필요한 연산을 방지합니다.(`a`와 `b`를 의존성 배열에 포함하여 변경되는 경우에만 `expensiveCalculation`을 호출)

## 결론

> 모든 추상화(및 성능 최적화)에는 비용이 따른다.

`useCallback`과 `useMemo`는 신중하게 사용되어야 하고, 필요한 경우에만 적용하여 성능 최적화를 추구하는 것이 좋습니다. 진짜 성능 이슈가 있는 곳에서만 해당 Hook을 사용하고, 그 외의 경우에는 다른 최적화 기법을 적용하는 것을 고려해봅시다.
