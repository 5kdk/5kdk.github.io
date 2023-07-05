---
title: useMemo, useCallback으로 최적화가 꼭 필요할까?
authors: 5kdk
tags: [React]
enableComments: true
---

`useCallback`과 `useMemo`는 리액트의 최적화를 도와주는 Hook 들이다. 성능 개선을 위해 사용된다지만 실제로 성능이 개선될 까?

사실 많은 사람이 두 Hook이 최적화라는 '달콤한 유혹'으로 인해 이곳 저곳 사용하는 모습을 많이 보았다. ~~(필자도 그랬다.. 진실을 알기 전까진)~~

:::info

**useCallback**

`useCallback`은 이벤트 핸들러와 같은 함수를 메모이제이션(memorization)할 때 사용되는 Hook이다. 컴포넌트가 리렌더링될 때마다 함수를 새로 생성하는 것을 방지하고, 이전에 생성한 함수를 재사용하여 불필요한 렌더링을 줄여준다.

**useMemo**

`useMemo`는 렌더링 중에 발생하는 연산량이 큰 함수의 결과값을 메모이제이션하며, 이전 결과값을 재사용할 수 있도록 도와준다.

:::

<!--truncate-->

---

## 남용하지 말아야할 이유

`useCallback`과 `useMemo`는 성능 최적화의 목적으로 사용되긴 하지만, 무분별하게 사용할 경우 오히려 성능 저하를 초래할 수 있다.

1. **메모이제이션 자체의 비용**: 이 두 Hook을 사용하면 함수와 계산 결과를 캐싱하기 위한 메모리 사용량이 늘어난다. 게다가, 새롭게 계산되는 값이 일정 기간 동안 사용되지 않아도 메모리에 남아 있어야 하므로 메모리 관리의 측면에서 비효율적일 수 있다. (가비지 컬렉터가 무시)

2. **의존성 배열의 관리**: `useCallback`과 `useMemo`는 의존성 배열이 필요한데, 이 배열에 들어간 값들이 변경될 때마다 메모이제이션 된 값을 무효화하고 새로 계산한다. 이 과정에서 복잡성이 증가하며, 관리가 미흡한 경우 오히려 성능이 저하될 수 있다.

3. **남용에 따른 실수**: 무분별한 사용으로 인해 모든 함수나 결과값을 메모이제이션하려 할 때 실수가 발생할 가능성이 높아진다. 이로 인해 성능 최적화를 기대하는 대신 버그나 성능 저하를 초래할 수 있는 상황이 생길 수 있다.

---

## useCallback과 useMemo를 사용하기 좋은 상황

:::caution

아래 이어지는 코드는 단순 이해를 돕기 위해 작성된 💩 코드들이다. 개념만 알고 넘어가자!

:::

### 예시 1: `useCallback`을 활용한 의존성 배열의 함수 참조

큰 목록을 렌더링하는 구성 요소가 있다고 가정한다.

```jsx
import React from 'react';
import useSearch from './fetch-items';

const MyBigList = React.memo(({ term, onItemClick }) => {
  const items = useSearch(term);

  return (
    <div>
      {items.map(item => (
        <div key={item.id} onClick={onItemClick}>
          {item.contents}
        </div>
      ))}
    </div>
  );
});

const MyParent = ({ term }) => {
  const onItemClick = useCallback(
    event => {
      console.log('You clicked ', event.currentTarget);
    },
    //highlight-next-line
    [term]
  );

  return <MyBigList term={term} onItemClick={onItemClick} />;
};
```

목록은 수백 수천 개의 항목일 수 있다. `<MyBigList>`가 다시 렌더링되는 것을 방지하려면 목록을 `React.memo()`로 감싸 메모이제이션 해야 한다.

:::info

`React.memo()`는 props가 동일하다면 리렌더링 되지 않는다.

:::

`React.memo()`가 제대로 동작하기 위해서 props를 동일하게 유지하여야 한다. 하지만 React 컴포넌트의 내부 함수들은 렌더링 될 때 마다 새로운 함수를 생성하기 때문에 모두 다른 참조 값을 가진다.

:::tip

자바스크립트의 함수는 일급 '객체'다.

```js
const a = 'a';
const a2 = 'a';

a === a2; // true

const f = () => console.log('f');
const f2 = () => console.log('f');

f === f2; // false

(() => console.log('f')) === (() => console.log('f')); // false
```

:::

`useCallback`으로 `onItemClick`을 감싸면 `term`이 바뀌지 않는 이상 새로 함수를 만들지 않아 동일한 참조를 가지게 된다. 이를 통해 `props`로 전달한 `onItemClick` 함수의 동일성을 보장하고 하위 컴포넌트 `MyBigList`의 불필요한 렌더링을 방지할 수 있다.

이처럼 의존성 배열에 함수를 사용하려면 참조를 동일하게 유지하여야 하므로 `useCallback`을 사용해야 한다.

---

### 예시 2: 복잡한 계산에서의 `useMemo`

복잡한 계산을 하는 작업이 있다고 가정하자. 예제애서는 곱하기 연산으로 대체한다.

```jsx
import { useState, useMemo } from 'react';

const expensiveCalculation = (a, b) => {
  // 복잡하고 길고 비용이 많이 드는 코드…
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

값을 입력하는 입력란의 변화에 따라 `a`와 `b` 값이 변경되고 `expensiveCalculation`이 실행된다.

`useMemo`를 사용하여 `a`와 `b`가 실제로 변경될 때만 계산을 실행하고, 이전 결과값을 캐싱하여 불필요한 연산을 방지한다. (`a`와 `b`를 의존성 배열에 포함하여 변경되는 경우에만 `expensiveCalculation`을 호출)

React 공식문서에 따르면 `useMemo`는 비용이 많이 드는 계산을 캐싱하기 위해 사용되는 훅이며, **"비용이 많이 드는 계산"**의 예로 수천 개의 객체를 만들거나 반복해야 일을 **"비용이 많이드는 계산"**이라 하고 있습니다.

---

## 결론

> **모든 추상화(및 성능 최적화)에는 비용이 따른다.**

말 그대로 최적화에는 공짜가 없다. `useCallback`과 `useMemo`는 신중하게 사용되어야 하고, 필요한 경우에만 적용하여 성능 최적화를 추구하는 것이 좋다.

진짜 성능 이슈가 있는 곳에서만 해당 Hook 들을 사용하고, 대부분의 상황에서는 `useCallback`, `useMemo`를 사용하지 않는 편이 성능, 가독성 측면에 이점이 있을 것이다!
