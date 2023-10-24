---
title: key가 필요한 이유와 주의할 점
authors: 5kdk
tags: [React]
description: React에서의 key는 어떤 역할을 하고 왜 필요한지 알아보자
keywords: [React, React Key, Key]
enableComments: true
---

React에서 map으로 컴포넌트를 반복 렌더 할 경우 콘솔에서 'Warning: Each child in a list should have a unique "key" prop'이라는 주의 문구를 확인할 수 있는데, 여기서 `key`는 무엇이며 왜 필요한지에 대해 알아본다.

```
Warning: Each child in a list should have a unique "key" prop
```

<!--truncate-->

<br />

---

## 자식에 대한 재귀적 처리

DOM 노드의 자식들을 재귀적으로 처리할 때, React는 기본적으로 동시에 두 리스트를 순회하고 차이점이 있으면 변경을 생성한다.

```html
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<!-- 변경 -->
<ul>
  // highlight-next-line
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

위의 경우 React는 `<li>Duke</li>`와 `<li>Villanova</li>` 종속 트리를 그대로 유지하는 대신 모든 자식을 변경 (다시 렌더링)한다.

React가 `setState`를 할 때를 떠올리면, 비동기로 동작하고 연속적으로 호출했을 때 batch 처리를 했는데, 그 이유는 React는 DOM을 효율적으로 업데이트하기 위함이다.

React 입장에서 컴포넌트를 반복해서 렌더링하는 일은 매우 비효율적이기 때문이다.

<br />

---

## Key는 무엇인가?

이러한 문제를 해결하기 위해 존재하는것이 `key` 속성이다. 자식들이 `key`를 가지고 있다면, React는 `key`를 통해 기존 트리와 이후 트리의 자식들이 일치하는지 캐치할 수 있고 효율적으로 렌더링 할 수 있다.

간만히 말해 `key`는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정하는 것이라 볼 수 있다.

```html
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<!-- 변경 -->
<ul>
  // highlight-next-line
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

요소에 `key`를 추가하여 트리의 변환 작업이 효율적으로 수행되도록 수정했다.

### Map()에서의 Key 사용

```jsx
export default function ListItem({ onClickTitle, badges }) {
  return (
    <ListItemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          Issue Example
          {badges &&
            // highlight-start
            badges.map((badgeProps, idx) => (
              <Badge key={idx} {...badgeProps} />
            ))}
          // highlight-end
        </div>
        <div className={styles.description}># Description</div>
      </div>
    </ListItemLayout>
  );
}
```

1. `map` 함수 인자로 전달되는 함수 내부에서 `key`를 컴포넌트 `props`를 설정하는 것과 같이 작성한다.
2. `key`는 요소의 '고유한 값'이어야 한다, 배열 요소의 고유한 값을 사용하거나 `index`로 사용할 수 있다.
3. 단, 항목의 순서가 바뀔 수 있는 경우 순서가 바뀌면 `index`도 바뀌기 때문에 권장하지 않는다. 성능이 저하되거나 `state`관련 문제가 발생하기 때문에, 최후의 수단이라 할 수 있다.

<br />

---

## key 사용 시 주의할 점

`key`는 반드시 변하지 않고, 예상 가능하며, 유일해야 한다.

`key`는 형제 노드에서만 고유하면 된다. 즉, 전역에서 고유할 필요는 없고 해당 배열 안에서만 고유하면 된다.

최후의 수단으로 배열의 인덱스를 `key`로 사용할 수 있다. 항목들이 재배열되지 않는다면 이 방법도 잘 동작할 것이지만, 만약 재배열되는 경우 컴포넌트의 `state`와 관련된 문제가 발생할 수 있다.

컴포넌트 인스턴스는 `key`를 기반으로 갱신되고 재사용되는데 인덱스를 `key`로 사용하면, 항목의 순서가 바뀌었을 때 `key` 또한 바뀌기 때문이다. 그 결과로, 컴포넌트의 `state`가 엉망이 되거나 의도하지 않은 방식으로 바뀔 수도 있다.

변하는 key(`Math.random()`으로 생성된 값 등)를 사용하면 많은 컴포넌트 인스턴스와 DOM 노드를 불필요하게 재생성하여 성능이 나빠지거나 자식 컴포넌트의 `state`가 유실될 수 있다.

<br />

> 참고자료  
> [React 공식문서 - 리스트와 Key](https://ko.reactjs.org/docs/lists-and-keys)  
> [React 공식문서 - 재조정](https://ko.reactjs.org/docs/reconciliation)
