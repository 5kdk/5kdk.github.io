---
title: Next.js를 중심으로 한 코어 웹 바이탈 최적화
authors: 5kdk
description: 웹 성능 개선을 위해 코어 웹 바이탈 측정해보자.
tags: [Web, Core Web Vitals, Next.js]
keywords:
  [코어 웹 바이탈, Core Web Vitals, 웹 최적화, SEO, Lighthouse, next.js 최적화]
enableComments: true
---

이전 포스팅에서 코어 웹 바이탈에 대해 살펴보고, 웹을 개선하기 위해 어떻게 코어 웹 바이탈을 측정할 수 있는지에 대해 알아보았다. 두 번째 단계로, 측정한 코어 웹 바이탈을 어떻게 개선할지 알아보자.

현재 주로 사용되는 Next.js 프레임워크를 기준으로 정리해 보았다.

> _이전 포스팅:_  
> _[웹 성능 지표, 코어 웹 바이탈(CWV)](./2023-10-24-core-web-vitals.md)_  
> _[코어 웹 바이탈 측정을 위한 도구 모음](./2023-11-01-measure-core-web-vitals.md)_

<!--truncate-->

## Next.js의 자동 이미지 최적화

### 최적화되지 않은 이미지

```html
<img src="large-image.jpg" alt="Large Image" />
```

위 요소는 다음과 같은 몇 가지 사항을 수동으로 최적화해야 함을 의미한다:

- 다양한 화면 크기에서 이미지가 반응하는지 확인
- 타사 도구 또는 라이브러리를 사용하여 이미지 최적화
- 뷰포트에 이미지가 들어올 때 Lazy-loading

<br />

### 이미지 컴포넌트

Next.js는 이러한 최적화를 즉시 처리할 수 있는 [이미지 컴포넌트](https://nextjs.org/docs/pages/api-reference/components/image)를 제공한다.

`next/image`를 사용하면 WebP와 같은 최신 형식(브라우저에서 지원하는 경우)의 이미지 크기 조정, 최적화 및 제공을 자동으로 수행할 수 있다.

이 컴포넌트는 뷰포트가 작은 기기에 큰 이미지를 전송하는 것을 방지하고 Next.js가 향후 이미지 형식을 채택하여 이를 지원하는 브라우저에 해당 이미지를 제공할 수 있도록 한다.

자동 이미지 최적화는 모든 이미지 소스에서 작동하며, 이미지가 CMS와 같은 외부 데이터 소스에서 호스팅되는 경우에도 이미지를 최적화할 수 있다.

<br />

### 자동 이미지 최적화는 어떻게 작동하나?

- **온디멘드 최적화(On-demand Optimization)**  
   Next.js는 빌드 시 이미지를 최적화하는 대신 사용자가 요청할 때 온디멘드 방식으로 이미지를 최적화한다. 정적 사이트 생성기 및 정적 전용 솔루션과 달리 10개의 이미지를 제공하든 천만 개의 이미지를 제공하든 빌드 시간이 늘어나지 않는다.

- **지연 로드된 이미지(Lazy Loaded Images)**  
  이미지는 기본적으로 lazy load 됩니다. 뷰포트 외부에 있는 이미지의 경우 페이지 속도에 불이익이 없습니다. 이미지는 뷰포트에 들어올 때만 로드된다.

- **CLS 방지(Avoids CLS)**  
  누적 레이아웃 이동(CLS)를 피하기 위해 이미지는 항상 렌더링됩니다.

:::note

- 온디멘드(On-demand)는 '요구에 따라' 또는 '필요할 때마다'라는 뜻으로, IT 분야에서는 사용자의 요청이 있을 때마다 서비스를 제공하는 방식을 의미한다.
- 온디멘드 방식에서는 서비스가 항상 실행 상태를 유지하지 않고, 사용자의 요청이 있을 때만 특정 작업을 수행하므로 리소스를 효율적으로 사용할 수 있다.

:::

<br />

### 이미지 컴포넌트 사용

`next/image`를 사용하여 Hero 이미지를 표시하도록 앱을 업데이트 해보겠다. 높이와 너비 속성은 원하는 렌더링 크기여야 하며, 가로 세로 비율은 소스 이미지와 동일해야 한다.

`pages/index.js` 파일을 열고 파일 시작 부분에 다음/이미지에서 이미지 `import` 문을 추가한다:

```jsx
import Image from 'next/image';
```

그런 다음 Hero 이미지를 이미지 구성 요소로 바꾼다:

```jsx
// Before
<img src="large-image.jpg" alt="Large Image" />

// After
<Image src="/large-image.jpg" alt="Large Image" width={3048} height={2024} />
```

> _Read more:_  
> _[Automatic Image Optimization Documentation](https://nextjs.org/docs/basic-features/image-optimization)_  
> _[API Reference for next/image](https://nextjs.org/docs/api-reference/next/image)_

<br />

## 수동 이미지 최적화

`next/image`는 이미지 최적화를 위한 다양한 기능을 제공한다. LQIP(Low Quality Image Placeholder), 파일 포맷 변경(예: JPG를 AVIF나 WebP로 변환), 이미지 크기 조정, 지연 로딩, 반응형 이미지 등이 포함된다.

`next/image`가 이런 작업을 수행하는 것은 모두 서버에서 이루어진다. 메인 화면에 수많은 이미지가 있다고 가정하면, 사용자가 접속할 때마다 서버에서 이미지를 최적화한 후 브라우저로 전송하게 되는 것이다.

사용자가 많지 않은 서비스에서는 이러한 부분이 큰 문제가 되지 않지만, 많은 사용자가 찾는 서비스에서는 `next/image` 사용이 서버 메모리를 과도하게 소모할 수 있다. 따라서, 이러한 서비스에서는 `next/image`의 사용에 주의가 필요하다.

<br />

### 차세대 형식 사용하기

모든 웹 브라우저가 WebP를 지원하지는 않는다. 그러나 `<source>` 태그 와 함께 `<picture>` 태그를 사용하면, 이전 버전과 호환이 되어 모든 브라우저에서 올바르게 최적화된 이미지 형식을 표시할 수 있다.

```jsx
// X
<img src="image.jpg" />
<img src="image.png" />

// O
<img src="image.webp" />
<img src="image.avif" />
```

<br />

### 반응형 이미지

아이콘과 로고를 제외하고도 대부분의 이미지는 다양한 화면 크기에 맞게 크기를 조정해야 한다. 고정된 크기의 이미지를 생성하는 대신에, srcset을 활용하여 반응형 이미지를 생성할 수 있다.

```jsx
// X
<img src="large.webp" />

// O
<img srcset="small.webp 500w,
             medium.webp 1000w,
             large.webp 2000w"
	src="large.webp" />

// with picture tag
<picture>
    <source media="(max-width: 760px)" srcSet="small.webp" />
    <source media="(min-width: 761px)" srcSet="large.webp" />
</picture>
```

### 가로세로 비율 보존하기

화면 크기에 따라 이미지 크기를 변경하는 경우, 이미지의 가로세로 비율을 유지하는 것이 중요하다. 이미지의 가로세로 비율을 제대로 유지하지 않으면 예상치 못한 컨텐츠 레이아웃 이동(CLS) 현상이 발생할 수 있다.

HTML에서 이미지의 너비와 높이를 지정하고, 이를 적절한 CSS와 함께 사용하면 이 문제를 해결할 수 있다. 특히, CSS 높이를 "auto"로 설정하면 레이아웃 이동을 최소화하는 데 도움이 된다.

또한, 최신 CSS 속성 중 하나인 [`aspect-ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)를 이용하면 이미지의 가로세로 비율을 자동으로 유지할 수 있다. 이 기능을 사용하면 이미지의 정확한 너비와 높이를 알 필요 없이 가로세로 비율만을 고려하면 되며, 이미지 최적화 작업이 더욱 간편해진다.

```jsx
.avatar {
	height: auto;
	width: 200px;
}

<img
	class="avatar"
	src="img.webp"
	height="200px"
	width="200px"
/>
```

```jsx
// aspect-ratio
.my-image {
  aspect-ratio: 5 / 3;
  width: 100%;
}

<img class="my-image" ... />
```

<br />

### 중요한 이미지 fetchpriority

콘텐츠가 포함된 가장 큰 페인트(LCP)의 일부로 첫 로드 시에 가져와야 할 특정 이미지가 있다고 가정할 때, [`fetchpriority="high"`](https://web.dev/articles/fetch-priority?hl=ko) 를 사용하면 이 이미지를 우선적으로 처리해야 한다고 브라우저에 알려줄 수 있다.

```jsx
// X
<img src="img-lcp.webp" />
<img src="img.webp" />

// O
<img src="img-lcp.webp" fetchpriority="high" />
<img src="img.webp" />
```

<br />

### 지연 로딩(lazy loading)과 async decoding

`loading="lazy"` 를 사용하는 것은 브라우저가 뷰 포트에 없는 이미지를 로드하는 데 귀중한 자원을 낭비하지 않도록 도와준다. 사용자들이 스크롤 하기 전까지 웹 페이지에 직접적으로 보이지 않는 모든 것은 우선순위에서 밀려나며, 이는 자원을 절약하고 현명하게 사용하여 웹사이트의 성능을 향상할 수 있다.

이 기능은 이미지가 페이지 하단에 위치하고, LCP 이미지가 아닌 경우에만 적합하다.

```jsx
// X
<img src="img-lcp.webp" />
<img src="img.webp" />

// O
<img src="img-lcp.webp" />
<img src="img.webp" loading="lazy" decoding="async" />

// with picture tag
<picture>
    <source media="(max-width: 760px)" srcSet={mobileUrl} />
    <source media="(min-width: 761px)" srcSet={desktopUrl} />
  	<img alt="title" loading="lazy" />
</picture>
```

<br />

### size 속성의 이해

위에서 언급한 속성 에 대한 한 가지 중요한 주의 사항 `srcset`은 브라우저가 가져올 가장 적합한 크기의 이미지를 선택하기 위해 이미지가 렌더링될 크기를 알아야 한다는 것이다.

즉, 이미지가 렌더링되면 브라우저는 실제 표시 크기를 알고 이를 픽셀 밀도로 곱한 다음 srcset에서 크기가 가장 가까운 가능한 이미지를 가져온다.

그러나 초기 페이지 로드의 경우 Chrome과 같은 브라우저에는 HTML에서 `img` 태그를 찾아 즉시 프리페치를 시작하는 프리로드 스캐너가 있다.

문제는 페이지가 렌더링되기 전에도 이런 일이 발생한다는 것인데, 예를 들어 CSS는 아직 가져오지 않았으므로 이미지가 표시되는 방식과 크기에 대한 정보가 없기때문에 결과적으로 브라우저는 몇 가지 가정을 해야한다.

기본적으로 브라우저는 모든 이미지가 `100vw`전체 페이지 너비라고 가정하기 때문에 이는 최적과는 거리가 멀다.

size 속성이 유용한 것은 다음과 같다:

```jsx
<img
  srcset="..."
  sizes="(max-width: 400px) 200px, (max-width: 800px) 100vw, 50vw"
  ...
>
```

> _참고자료:_  
> _[Optimal Images in HTML](https://www.builder.io/blog/fast-images?_host=www.builder.io)_

<br />

## 다이나믹 임포트

지금부터는 초기 페이지 로드 시 타사 라이브러리에서 로드되는 자바스크립트의 양을 줄이는 방법을 알아보자.

Next.js는 자바스크립트에 대한 ES2020 [동적 `import()`](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)를 지원한다. 이를 통해 자바스크립트 모듈을 동적으로 가져와서 작업할 수 있다. 또한 서버 측 렌더링(SSR)과 함께 작동한다.

다이나믹 임포트를 코드를 관리 가능한 청크로 분할하는 또 다른 방법이라고 생각하면 된다. 예시를 통해 알아보자.

일단 파일 시작부분의 모듈 `import` 문을 제거한다:

```jsx
// import Fuse from 'fuse.js';
// import _ from 'lodash';

const fuse = new Fuse(countries, {
  keys: ['name'],
  threshold: 0.3,
});
```

이제 이 `import` 문을 제거했으므로 동적으로 가져온 라이브러리를 사용할 검색 `input`을 설정해보자.

`input`을 다음과 같이 구성할 수 있다:

```jsx
<input
  type="text"
  placeholder="Country search..."
  className={styles.input}
  onChange={async e => {
    const { value } = e.currentTarget;
    // Dynamically load libraries
    const Fuse = (await import('fuse.js')).default;
    const _ = (await import('lodash')).default;

    const fuse = new Fuse(countries, {
      keys: ['name'],
      threshold: 0.3,
    });

    const searchResult = fuse.search(value).map(result => result.item);

    const updatedResults = searchResult.length ? searchResult : countries;
    setResults(updatedResults);

    // Fake analytics hit
    console.info({
      searchedAt: _.now(),
    });
  }}
/>
```

다이나믹 임포트를 사용하면 페이지 로드 시 ‘사용하지 않는 자바스크립트 제거’ 문제가 해결됩니다. 또한 인터랙티브 타임 투 인터랙티브(TTI)가 개선되어 첫 입력 지연(FID)을 개선하는 데 도움이 된다.

> _Read more:_  
> _[Dynamic Imports Documentation](https://nextjs.org/docs/advanced-features/dynamic-import)_

<br />

## 컴포넌트 다이나믹 임포트

초기 페이지 로딩에 필요하지 않은 React 컴포넌트로 시선을 돌려보자.

React 컴포넌트는 다이나믹 임포트를 사용해 가져올 수도 있지만, 하지만 이 경우에는 `next/dynamic`과 함께 사용하여 다른 React 컴포넌트처럼 작동하도록 한다.

이 방법을 사용해 `Hello World` 코드 샘플로 모달의 로딩을 지연시키는 예제를 살펴보자. 이렇게 하면 초기 페이지 로드에서 서드파티 라이브러리 두 개를 추가로 제거할 수 있다.

파일을 열고 파일 시작 부분에 `next/dynamic`에서 `dynamic`를 추가한다:

```jsx
import dynamic from 'next/dynamic';
```

파일 시작 부분에서 컴포넌트 `import` 문을 제거한다:

```jsx
// import CodeSampleModal from '../components/CodeSampleModal';
```

이제 파일 시작 부분에 다음을 추가하여 동적 컴포넌트로 임포트할 수 있다:

```jsx
const CodeSampleModal = dynamic(() => import('../components/CodeSampleModal'), {
  ssr: false,
});
```

`CodeSampleModal`이 반환하는 기본 컴포넌트는`../components/CodeSampleModal`다. 일반 React 컴포넌트처럼 작동하며, 평소와 같이 프로퍼티를 전달할 수 있다.

서버에서는 이 컴포넌트가 필요하지 않으므로 `ssr: false`를 사용해 비활성화했다.

다음으로, 사용자가 필요로 할 때까지 이 컴포넌트의 로딩을 지연시켜보자. 이를 위해 모달이 열려 있어야 하는지 확인하는 조건부로 컴포넌트를 감싸고, 열려 있으면 로드할 수 있다.

`CodeSampleModal` 컴포넌트를 다음과 같이 래핑한다:

```jsx
{
  isModalOpen && (
    <CodeSampleModal
      isOpen={isModalOpen}
      closeModal={() => setIsModalOpen(false)}
    />
  );
}
```

이제 `isModalOpen`이 처음으로 `true`가 되면 필요한 JavaScript가 요청된다.

> _Read more :_  
> [Dynamic Imports Documentation](https://nextjs.org/docs/advanced-features/dynamic-import)

<br />

## 폰트 최적화

[데스크톱용 웹 페이지의 82%](https://almanac.httparchive.org/en/2020/fonts)가 웹 글꼴을 사용한다. 사용자 정의 글꼴은 사이트의 브랜딩, 디자인, 브라우저/기기 간 일관성을 위해 중요하다. 하지만 웹 글꼴을 사용한다고 해서 성능이 저하되어서는 안 된다.

Next.js에는 [자동 웹폰트 최적화 기능](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)이 내장되어 있다. 기본적으로 Next.js는 빌드 시 글꼴 CSS를 자동으로 인라인 처리하여 글꼴 선언을 가져오기 위한 추가 왕복 작업을 제거한다. 그 결과 콘텐츠가 포함된 첫 페인트(FCP)와 콘텐츠가 포함된 최대 페인트(LCP)가 개선된다.

예를 들어 다음은 글꼴을 최적화한 Next.js의 전후 모습이다.

최적화하기 전에 추가 네트워크 요청이 필요하다:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />
```

최적화 후 Next.js가 글꼴 CSS를 인라인 처리한다:

```html
<style data-href="https://fonts.googleapis.com/css2?family=Inter">
  @font-face{font-family:'Inter';font-style:normal.....
</style>
```

<br />

## 서드파티 스크립트 최적화

많은 애플리케이션은 분석, 광고, 고객 지원 위젯 등 다양한 유형의 기능을 포함하기 위해 타사 JavaScript를 사용한다. 그러나 타사에서 작성한 코드를 삽입하면 페이지 콘텐츠가 너무 일찍 로드되면 렌더링이 지연되고 사용자 성능에 영향을 미칠 수 있다.

Next.js는 모든 타사 스크립트의 로딩을 최적화하는 기본 제공 스크립트 컴포넌트를 제공하며, 개발자가 스크립트를 가져와 실행할 시기를 결정할 수 있는 옵션을 제공한다.

<br />

### 스크립트 컴포넌트 사용

일반 HTML을 사용하면 외부 스크립트를 `next/head`에 수동으로 추가해야 한다:

```jsx
import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <script src="https://www.googletagmanager.com/gtag/js?id=123" />
      </Head>
    </div>
  );
}
```

Next.js 스크립트 컴포넌트를 사용하면 `next/head`를 사용하지 않고도 컴포넌트의 어느 곳에나 추가할 수 있다.

```jsx
import Script from 'next/script';

function IndexPage() {
  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=123"
      />
    </div>
  );
}
```

스크립트 컴포넌트에는 최적의 로딩을 위해 스크립트를 가져와 실행할 시기를 결정할 수 있는 전략 속성이 도입되었다. LCP에 부정적인 영향을 주지 않으려면 대부분의 타사 스크립트는 페이지의 모든 콘텐츠 로딩이 완료된 후 페이지가 인터랙티브해진 직후(`strategy="afterInteractive"`) 또는 브라우저 유휴 시간 동안 느리게(`strategy="lazyOnload"`) 로드되도록 지연시켜야 한다.

> _Read more:_  
> _[Script Component](https://nextjs.org/docs/pages/building-your-application/optimizing/scripts)_  
> _[API Reference for next/script](https://nextjs.org/docs/pages/api-reference/components/script)_
