---
title: useNavigate의 옵션을 활용한 뒤로가기 사용성 개선
authors: 5kdk
tags: [React, React-router]
---

[원티드 프리온보딩 사전과제](https://github.com/5kdk/wanted-pre-onboarding-frontend/tree/main)를 진행하며 여러 리다이렉트 작업이 필요했습니다.

`Root` 컴포넌트 `/` 경로 접근시 `SignIn` 페이지로 리다이렉트를 하고 있었으며 라우팅 시 `SignIn`과 `Todo` 페이지는 로그인 여부에 따라 리다이렉트 처리를 하는 컴포넌트 `AuthenticationGuard`가 감싸고 있었습니다.

`useNavigate`로 라우팅을 할 때 리다이렉트 로직으로 인해 뒤로가기가 제대로 되지 않는 문제가 발견되었고, 이를 해결하기 위해 `useNavigate`를 좀 더 꼼꼼하게 살펴보았습니다.

<!--truncate-->

## useNavigate 톺아보기

:::info 정보

React Router의 `useNavigate` 훅은 React 컴포넌트에서 프로그래밍 방식으로 라우팅을 제어할 수 있게 해주는 도구입니다.

`useNavigate`를 사용하면 URL을 변경하거나 특정 경로로 이동할 수 있으며, `useNavigate`는 React Router v6부터 도입되었습니다.

:::

```jsx
import { useNavigate } from 'react-router-dom';
```

`useNavigate` 훅은 라우터 컴포넌트 내부에서 사용되어야 합니다. 예를 들어, 다음과 같이 컴포넌트를 정의할 수 있습니다.

```jsx
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/other-route');
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>Go to Other Route</button>
    </div>
  );
};
```

위의 예제에서 `handleClick` 함수에서 `navigate` 함수를 호출하면 URL을 변경하고 `/other-route`로 이동합니다.

`useNavigate`를 사용하여 다양한 옵션을 지정할 수도 있으며 이를 통해 리다이렉트, 상태 변경, 쿼리 매개변수 전달 등 다양한 작업을 수행할 수 있습니다.

```jsx
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/other-route', { state: { id: 123 }, replace: true });
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>Go to Other Route</button>
    </div>
  );
};
```

위의 예제에서는 `navigate` 함수의 두 번째 인수로 객체를 전달하여 옵션을 설정할 수 있는데, `state` 프로퍼티를 사용하여 상태를 전달하고, `replace` 프로퍼티를 `true`로 설정하여 이동한 후에 브라우저의 기록에 남지 않도록 할 수 있습니다.

## state와 replace 프로퍼티를 활용하기

### state 프로퍼티

게시글 목록이 있는 페이지에서 사용자가 특정 게시글을 클릭하면 해당 게시글의 상세 페이지로 이동하고, 상세 페이지에서는 게시글의 ID와 함께 추가적인 데이터를 사용해야 할 때 `state` 프로퍼티를 활용할 수 있습니다.

```jsx
import { useNavigate } from 'react-router-dom';

const PostList = () => {
  const navigate = useNavigate();

  const handlePostClick = postId => {
    //highlight-start
    // 게시글 ID와 추가 데이터를 함께 전달하여 상세 페이지로 이동
    navigate(`/post/${postId}`, {
      state: { id: postId, additionalData: 'Some data' },
    });
    //highlight-end
  };

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        <li onClick={() => handlePostClick(1)}>Post 1</li>
        <li onClick={() => handlePostClick(2)}>Post 2</li>
        <li onClick={() => handlePostClick(3)}>Post 3</li>
      </ul>
    </div>
  );
};
```

```jsx
import { useLocation } from 'react-router-dom';

const PostDetail = () => {
  const location = useLocation();
  //highlight-start
  const { id, additionalData } = location.state;
  //highlight-end

  return (
    <div>
      <h1>Post Detail</h1>
      <p>ID: {id}</p>
      <p>Additional Data: {additionalData}</p>
    </div>
  );
};
```

### replace 프로퍼티

로그인 후에 사용자를 로그인 페이지로 돌아갈 수 없도록 하기 위해, 브라우저의 기록에서 이전 로그인 페이지를 대체하면 사용자 경험을 향상 시킬 수 있습니다.

```js
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 처리 로직...

    // 로그인 성공 후 대시보드 페이지로 이동 (replace: true 옵션 사용)
    navigate('/dashboard', { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
```

:::tip

`Navigate` 컴포넌트를 사용할때는 props에 `replace`만 적어주면 됩니다.

:::

## 결론

이와 같이 `useNavigate`를 사용하여 React 컴포넌트에서 프로그래밍 방식으로 라우팅을 제어할 수 있으며 `useNavigate`의 다양한 옵션을 활용하면 더욱 유연하고 풍부한 사용자 경험을 제공할 수 있습니다.

저의 경우 결국 리다이렉트시 `{ replace: true }` 옵션을 사용하지 않아 계속되는 리다이렉트 문제가 생겼고 이를 해당 옵션을 통해 손쉽게 해결할 수 있었습니다.

`useNavigate`, `Navigate`(useNavigate를 둘러싼 컴포넌트 래퍼)는 `replace` 프로퍼티를 사용하여 브라우저의 기록에 새로운 항목을 추가하지 않고 이전 항목을 대체할 수 있습니다.

로그인 또는 인증과 관련된 경로 전환과 같이 이전 페이지로 돌아가지 않아야 하는 상황에서 `replace` 프로퍼티를 잘 활용합시다.

> https://reactrouter.com/en/main/hooks/use-navigate  
> https://reactrouter.com/en/main/components/navigate
