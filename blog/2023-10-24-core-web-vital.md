---
title: 웹 성능 지표, 코어 웹 바이탈(CWV)
authors: 5kdk
description: 프론트엔드 개발자가 꼭 알아야할, 웹 성능의 지표 코어 웹 바이탈.
tags: [Web]
keywords: [코어 웹 바이탈, Core Web Vital, 웹 최적화, SEO, Lighthouse]
enableComments: true
---

<br />

> 성능은 회사의 수익에 직접적인 영향을 미쳤습니다.  
> Performance has directly impacted the company’s bottom line.
>
> **_Pinterest_**

웹 바이탈(Web Vitals)은 웹에서 최종 사용자 페이지 경험을 측정하기 위한 통합 지침과 지표를 제공하기 위해 Google에서 만든 이니셔티브다.

<!--truncate-->

<details>
  <summary><b>유지율</b></summary>
  <div>

:::note

- Pinterest는 체감 대기 시간을 **40%** 줄였고, 그 결과 검색 엔진 트래픽과 가입이 **15%** 증가했다.
- COOK은 평균 페이지 로드 시간을 **850ms** 단축하여 전환율을 **7%** 높이고 이탈률을 **7%** 낮추었으며 세션당 페이지 수를 **10%** 증가시켰다.
- 성능 저하가 비즈니스 목표에 미칠 수 있는 부정적인 영향에 대한 연구 결과도 있다. 예를 들어, BBC는 사이트 로딩이 1초 더 걸릴 때마다 **10%**의 사용자를 추가로 잃는다는 사실을 발견했다.

:::

  </div>
</details>

<details>
  <summary><b>전환율</b></summary>
  <div>

:::note

- Mobify의 경우 홈페이지 로딩 속도가 **100ms** 감소할 때마다 세션 기반 전환율이 **1.11%** 증가하여 연평균 약 **38만 달러**의 매출 증가를 달성했다. 또한 결제 페이지 로딩 속도가 **100ms** 감소할 때마다 세션 기반 전환율이 **1.55%** 증가하여 연평균 약 **53만 달러**의 매출 증가를 달성했다.
- AutoAnything이 페이지 로드 시간을 절반으로 줄인 후 매출이 **12~13%** 증가했다.
- 소매업체인 Furniture Village는 사이트 속도를 감사하고 발견된 문제를 해결하기 위한 계획을 수립하여 페이지 로딩 시간을 **20%** 단축하고 전환율을 **10%** 증가시켰다.

:::

  </div>
</details>

사용자 경험에 있어 속도는 중요하다. 한 소비자 연구에 따르면 모바일 속도 지연에 대한 스트레스 반응은 공포 영화를 보거나 수학 문제를 풀 때와 비슷하며, 소매점에서 계산대에서 줄을 서서 기다릴 때보다 더 큰 것으로 나타났다.

코어 웹 바이탈은 웹 바이탈의 하위 집합으로 현재 로딩, 상호 작용 및 시각적 안정성을 측정하는 세 가지 지표로 구성되어 있다.

- **LCP** (콘텐츠가 포함된 최대 페인트)
- **FID** (첫 번째 입력 반응 시간)
- **CLS** (누적 레이아웃 이동)

이 세 가지 지표에서 높은 점수를 받으면 사용자에게 더 원활한 웹사이트 경험을 제공할 수 있다.

각 코어 웹 바이탈 지표에서 낮은 점수를 받은 웹사이트는 Google이 코어 웹 바이탈을 검색 알고리즘의 순위 요소로 사용하기 시작하면서 검색 엔진 순위에 영향을 미칠 수 있는데, 낮은 바이탈은 웹 트래픽과 비즈니스에 영향을 받는다.

> 이러한 권장 사항의 배경이 된 연구 및 방법론에 대해 자세히 알아보려면,
>
> **[“핵심 웹 바이탈 지표 임계값 정의하기”](https://web.dev/articles/defining-core-web-vitals-thresholds?hl=ko)**를 참고

<br />

## 개요

지금부터 다양한 지표, 코어 웹 바이탈이 SEO에 미칠 수 있는 영향, 사용자 경험에 미치는 중요성에 대해 살펴보자.

코어 웹 바이탈을 측정할 때는 세 가지 값이 있다: **“양호”**, **“개선 필요”**, **“미흡”**,
이러한 값은 측정 대상 바이탈에 따라 다르다.

![vitals-light.png](/img/2023-10-24-core-web-vital/vitals-light.webp)

코어 웹 바이탈은 두 가지 방법으로 접근할 수 있다:

1. **각 지표에서 가능한 한 가장 높은 점수를 받으려고 노력하기.**  
   완벽을 추구하는 것은 좋지만 종속성이 많은 대규모 웹사이트에서는 까다로울 수 있다.
2. **동종 업계의 경쟁업체를 벤치마킹하기**  
   Google 검색에서 완벽하게 최적화된 모든 웹사이트와 경쟁하는 것이 아니라 타겟 키워드에 대해 순위를 매기는 다른 웹사이트와 경쟁하는 것이다.

<br />

## Largest Contentful Paint (LCP)

![lcp.avif](/img/2023-10-24-core-web-vital/lcp.webp)

이전에는 웹 개발자가 웹페이지의 기본 콘텐츠가 얼마나 빨리 로드되고 사용자에게 표시되는지 측정하는 것이 어려웠다.
[load](https://developer.mozilla.org/docs/Web/Events/load) 또는 [DOMContentLoaded](https://developer.mozilla.org/docs/Web/Events/DOMContentLoaded) 이벤트와 같은 이전 측정 항목은 사용자에게 화면에 표시되는 것과 반드시 일치하지는 않기 때문에 효과적이지 않았다.

LCP(Largest Contentful Paint, 콘텐츠가 포함된 최대 페인트) 지표은 페이지의 로딩 성능을 살펴본다. 전체 웹 페이지를 로드하는 데 걸리는 시간을 측정하지는 않지만, 웹 페이지가 얼마나 빠르게 로드되고 있는지를 나타내는 좋은 벤치마크를 제공한다.

LCP는 페이지에서 가장 큰 요소를 뷰포트에 표시하는 데 걸리는 시간을 측정한다. 이 요소는 페이지의 주요 공간을 차지하는 큰 텍스트 블록, 비디오 또는 이미지일 수 있다.

:::caution

페이지 로딩이 시작될 때부터 첫 번째 요소가 화면에 렌더링될 때까지의 시간을 측정하는 [FCP](https://web.dev/articles/fcp)(First Contentful Paint, 최초 콘텐츠가 포함된 페인트)가 아님

:::

DOM이 렌더링되면 페이지에서 가장 큰 요소가 변경될 수 있다. LCP는 가장 큰 이미지나 요소가 화면에 표시될 때까지 계산을 멈추지 않는다.

![lcp-example.avif](/img/2023-10-24-core-web-vital/lcp-example.webp)

:::info

현재 LCP API에 지정된 대로 Large Contentful Paint에 포함되는 요소 유형은 다음과 같다:

- `<img>`요소 `<svg>`요소 내의 `<image>`요소
- 포스터 이미지가 있는 `<video>` 요소 (포스터 이미지 로드 시간이 사용됨)
- `url()` 함수를 통해 로드된 배경 이미지가 있는 요소(CSS 그라데이션과 반대)
- 텍스트 노드 또는 기타 인라인 수준 텍스트 요소 하위 요소를 포함하는 블록 수준 요소
- `<video>` 요소 자동재생을 위해 채색된 첫 번째 프레임 (2023년 8월 기준)
- 애니메이션 GIF 등 애니메이션 이미지 형식의 첫 번째 프레임 (2023년 8월 기준)

:::

일부 요소만 고려할 뿐 아니라 사용자에게 '콘텐츠가 없는' 것으로 보일 수 있는 요소를 제외하기 위해 특정 휴리스틱이 적용된다.

- 사용자에게 표시되지 않고 불투명도가 0인 요소
- 전체 표시 영역을 덮고, 콘텐츠가 아닌 배경으로 간주될 가능성이 높은 요소
- 페이지의 실제 콘텐츠를 반영하지 못하여 엔트로피가 낮은 자리표시자 이미지 또는 기타 이미지

브라우저는 가장 큰 콘텐츠가 포함된 요소가 무엇인지에 대한 사용자의 기대치를 충족하기 위해 이러한 휴리스틱을 지속적으로 개선할 가능성이 있다.

> _Read more:_
>
> - _Google: [Largest Contentful Paint Documentation](https://web.dev/lcp/)_
> - _Vercel: [Blog: Core Web Vitals - Largest Contentful Paint](https://vercel.com/blog/core-web-vitals#largest-contentful-paint)_

<br />

## First Input Delay (FID)

FID(First Input Delay, 첫 번째 입력 반응 시간) 지표는 웹 페이지와 상호 작용하는 동안 최종 사용자가 느끼는 체감 속도다. 입력 상자를 클릭해도 아무 일도 일어나지 않는다고 상상해 보자. 사이트의 상호 작용 및 응답성에 대한 이러한 불만은 입력 지연이 길기 때문에 발생한다.

![fid.png](/img/2023-10-24-core-web-vital/fid.webp)

FID는 실제 사용자 데이터가 필요하며 lab에서는 측정할 수 없다(예: Google Lighthouse). 그러나 총 차단 시간(TBT) 지표는 lab에서 측정할 수 있으며 상호 작용에 영향을 미치는 문제를 파악할 수 있다.

![fid-example.png](/img/2023-10-24-core-web-vital/fid-example.webp)

FID 는 사용자가 응답하지 않는 페이지와 상호작용하려고 할 때 느끼는 경험을 정량화하기 때문에 로드 응답성을 측정하는 안정적인 코어 웹 바이탈 측정항목이다. FID가 낮으면 페이지를 사용 가능한 상태로 유지하는 데 도움이 된다.

:::note

FID 는 2024년 3월에 코어 웹 바이탈로서 **_INP(Interaction to Next Paint)_** 로 대체될 예정이다.

:::

> _Read more:_
>
> - _Google: [First Input Delay Documentation](https://web.dev/fid/)_
> - _Vercel: [Blog: Core Web Vitals - First Input Delay](https://vercel.com/blog/core-web-vitals#first-input-delay)_

<br />

## Cumulative Layout Shift (CLS)

온라인 기사를 읽다가 페이지에 갑자기 변화가 생긴 적이 있을 것이다. 경고 없이 텍스트가 이동하여 제자리를 잃거나 심지어 링크나 버튼을 탭 하려고 하다가 손가락이 닿기 직전에 링크가 이동하고 다른 것을 클릭하게 되는 경우도 있다.

이런 종류의 경험은 대부분 짜증 날 뿐이지만, 경우에 따라 실질적인 피해를 유발할 수 있다.

![cls.png](/img/2023-10-24-core-web-vital/cls.webp)

CLS(Cumulative Layout Shift, 누적 레이아웃 이동) 지표는 사이트의 전반적인 레이아웃 안정성을 측정하는 지표다. 페이지가 로드될 때 예기치 않게 레이아웃이 바뀌는 사이트는 사용자 실수나 주의 산만으로 이어질 수 있다.

CLS는 처음에 DOM에 의해 렌더링된 후 요소가 이동된 경우에 발생한다. 아래 사진에서는 텍스트 블록 다음에 버튼이 화면에 렌더링되어 블록이 아래쪽으로 이동했다. CLS를 계산할 때는 이러한 영향과 거리의 조합이 고려된다.

![cls-example.png](/img/2023-10-24-core-web-vital/cls-example.webp)

각 요소의 개별 레이아웃 이동 점수는 예기치 않은 이동이 발생한 경우에만 CLS에 계산되는데, 새 요소가 DOM에 추가되거나 기존 요소의 크기가 변경되더라도 로드된 요소가 그 위치를 유지하면 레이아웃 이동 점수에 포함되지 않는다.

> _Read more:_
>
> - _Google: [Cumulative Layout Shift Documentation](https://web.dev/cls/)_
> - _Vercel: [Blog: Core Web Vitals - Cumulative Layout Shift](https://vercel.com/blog/core-web-vitals#cumulative-layout-shift)_

<br />

## SEO 영향

Google 검색 엔진의 주요 목표는 현지화 및 맞춤법 오류를 고려하면서 사용자에게 가능한 최상의 결과를 제공하는 것이다. 모든 경우에 Google은 사용자에게 빠르고 원활한 웹사이트 경험을 제공하는 것을 중요하게 생각한다.

모바일 기기에서의 웹 페이지 속도는 2018년부터 순위 결정 요소에 포함되었다. 하지만 지금까지 Google 검색 알고리즘이 순위를 매길 때 어떤 구체적인 성능 지표를 사용하는지는 명확하지 않았다.

하지만 2021년 6월에 Google이 성능을 분석하고 최적화할 수 있는 구체적인 지표와 범위를 제공하면서 상황이 달라졌다.

![page-experience.png](/img/2023-10-24-core-web-vital/page-experience.webp)

<br />

### Lighthouse (v8) 바이탈 가중치

세 가지 지표의 가치가 반드시 동일하지는 않다. Lighthouse v8 버젼 에서는 각 코어 웹 바이탈에 다른 가중치가 할당된다:

- **콘텐츠가 포함된 최대 페인트(LCP)**: 25%
- **총 차단 시간\*(TBT)**: 30%
- **최초 콘텐츠가 포함된 페인트(FCB)**: 10%
- **속도 지수(Speed Index)**: 15%
- **인터랙티브 시간(TTI)**: 15%
- **누적 레이아웃 이동(CLS)**: 15%

\* FCP(첫 번째 입력 반응 시간)과 유사

::::info

Google 순위 영향은 개별 코어 웹 바이탈 점수에 관계없이 모든 코어 웹 바이탈의 양호 범위에 있는 모든 페이지에 동일하게 적용된다.

:::note
Google은 웹 페이지의 랭킹을 결정할 때, 코어 웹 비탈스 지표가 모두 '양호'에 있는 페이지들에 대해 동일한 방식으로 접근하며, 개별 핵심 웹 비탈스 점수는 중요하지 않다는 것을 의미한다. 페이지가 모든 코어 웹 바이탈 지표에서 "양호" 범위 내에 있는 경우, Google은 이러한 페이지들을 동등하게 취급하고 랭킹 영향을 동등하게 부여할 것이라는 것을 나타냄.

:::
::::

<br />

### User Experience

코어 웹 바이탈에 대한 대부분의 대화는 주로 SEO에 초점을 맞추고 있다.

코어 웹 바이탈이 페이지 경험과 검색 순위의 개선을 측정하고 추진하기 위해 고안된 이니셔티브인 것은 사실이지만, 궁극적으로 이러한 변화의 혜택을 받는 것은 사용자들이다.

코어 웹 바이탈은 최상의 페이지 경험을 위해 노력하는 데 도움이 된다. 2012년에 Amazon에서 실시한 연구에 따르면 로딩 시간이 1초만 더 길어져도 16억 달러의 비용이 발생할 수 있다고 한다. 이와 같은 연구는 우수한 페이지 경험과 빠른 웹사이트의 중요성을 보여주며, 코어 웹 바이탈은 이 두 가지를 모두 달성하는 데 도움을 준다.

> _Read more:_
>
> _Chromium: [The Science Behind Web Vitals](https://nextjs.org/docs/pages/building-your-application/routing)_
