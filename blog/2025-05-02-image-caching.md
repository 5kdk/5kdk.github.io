---
title: CDN 이미지 파일 교체 후 Next.js <Image> 컴포넌트 캐싱 문제 해결하기
authors: 5kdk
description: Next.js에서 <Image> 컴포넌트를 사용할 때 이미지 교체 후에도 변경 사항이 반영되지 않는 문제의 원인과, CloudFront Invalidation과 URL 버전 쿼리로 해결하는 방법을 설명합니다.
tags: [Next.js, AWS]
keywords:
  [
    aws,
    CloudFront,
    이미지 최적화,
    image 캐싱,
    Next.js 이미지 최적화,
    Image 컴포넌트,
    Next.js Image,
    이미지 캐싱 문제,
    CloudFront Invalidation,
    CDN 캐싱,
    웹 성능 최적화,
    캐시 무효화,
    Vercel 이미지 최적화,
    _next/image,
    브라우저 캐시,
  ]
comments: true
---

Next.js의 `<Image>` 컴포넌트를 사용해 외부 이미지를 불러오는 경우, 이미지 파일을 교체해도 변경 내용이 반영되지 않는 문제가 발생할 수 있습니다.  
이 문서에서는 여러 계층의 캐시로 인해 발생하는 이 문제의 원인을 살펴보고, **이미지 URL 변경**과 **CloudFront Invalidation**을 통해 해결하는 방법을 소개합니다.

<!--truncate-->

## 문제 상황

- `<Image>`를 사용해 S3의 이미지를 불러오는 Next.js 프로젝트
- 이미지가 CloudFront를 통해 제공되며, Next.js는 이를 최적화해 `_next/image` 경로로 제공
- S3의 이미지 파일을 같은 경로에 덮어썼지만, 변경 내용이 반영되지 않고 이전 이미지가 계속 표시됨

<br />

## 원인: 캐시 계층별 문제

문제는 다음 세 가지 캐시 계층이 중첩되면서 발생합니다.

### 1. CloudFront 캐시

- URL이 같으면 기존 이미지를 계속 캐싱합니다.
- 기본 설정에서는 이미지 변경을 감지하지 않습니다.
- 쿼리 스트링(Query String)의 캐싱 반영 여부는 **캐시 정책(Cache Policy)** 에 따라 결정됩니다.

### 2. Vercel 이미지 최적화 캐시 (\_next/image)

- `<Image>`는 외부 이미지를 최적화해 Vercel CDN에 저장하고, `_next/image` 경로로 전달합니다.
- 원본 이미지의 전체 URL(쿼리 포함)을 기준으로 캐싱합니다.
- 동일한 URL은 다시 최적화하지 않으며, **빌드만으로는 캐시가 무효화되지 않습니다**.

### 3. 브라우저 캐시

- `Cache-Control`, `ETag` 등의 헤더에 따라 로컬에 저장됩니다.
- 강제 새로고침 전까지 이전 이미지가 유지될 수 있습니다.

<br />

## 해결 방법

### 1. 이미지 URL에 버전 쿼리 추가

이미지 URL에 쿼리 파라미터를 추가하면, 모든 캐시 계층에서 새로운 리소스로 인식합니다.

```tsx
<Image src="https://cdn.example.com/images/banner.jpg?v=2" ... />
```

- 즉시 반영되는 효과적인 방법
- 코드에서 버전 관리를 직접 해야 함

:::caution
CloudFront의 캐시 정책이 쿼리 스트링을 무시하도록 설정되어 있다면, 이 방법은 효과가 없습니다.  
CloudFront 배포 설정에서 **쿼리 스트링 포함 여부**를 확인하세요.
:::

:::info
CloudFront는 기본적으로 **Managed-CachingOptimized** 정책을 사용하며, 이 정책은 쿼리 스트링을 캐시 키에서 제외합니다.  
이 경우 `?v=2`와 같은 버전 쿼리를 추가해도 캐시를 우회하지 못합니다.  
필요하면 쿼리 스트링을 포함하는 **커스텀 정책**을 만들어 적용하세요.
:::

### 2. CloudFront 캐시 무효화 (Invalidation)

CloudFront에서 특정 경로의 캐시를 제거해 새 이미지를 로드하도록 할 수 있습니다.

#### 콘솔에서 Invalidation 하기

1. CloudFront 콘솔 접속 → 배포 선택
2. 무효화 → 무효화 생성
3. 경로 입력: `/images/filename.jpg`

#### AWS CLI 예시

```bash
aws cloudfront create-invalidation \
  --distribution-id [배포 ID] \
  --paths "/images/filename.jpg"
```

:::note
무효화는 일반적으로 몇 분 내로 반영됩니다.
:::

### 3. next.js 이미지 최적화 미사용 고려

배너, 썸네일, 사용자 프로필 등 **변경 주기가 짧은 이미지**는 `<Image>`보다 `<img>`가 더 적합할 수 있습니다.

| 항목             | `<Image>`                     | `<img>`                               |
| ---------------- | ----------------------------- | ------------------------------------- |
| 이미지 최적화    | 자동 리사이즈, WebP 변환      | 없음                                  |
| 캐싱 제어 유연성 | 내부 캐시 영향 있음           | 쿼리 파라미터와 헤더로 직접 제어 가능 |
| 반영 속도        | invalidate 필요, 느릴 수 있음 | 즉시 반영 가능                        |
| 적합한 상황      | 정적 이미지 (로고 등)         | 자주 변경되는 이미지 (배너 등)        |

```html
<img src="https://cdn.example.com/images/banner.jpg?v=20240501" alt="Banner" />
```

:::tip CDN으로 최적화 유지하기

`<img>`를 사용할 경우 Next.js의 최적화 기능은 작동하지 않습니다.  
CDN 수준에서 다음을 고려하세요:

- WebP/AVIF 등으로 포맷 최적화
- 적절한 크기 설정
- 이미지 파라미터로 리사이징 및 압축 적용
- 다양한 해상도 대응을 위한 `srcset` 사용

```tsx
<img
  src="https://cdn.example.com/images/banner.jpg?width=800&quality=80&format=webp"
  srcset="
    https://cdn.example.com/images/banner.jpg?width=400&quality=80&format=webp   400w,
    https://cdn.example.com/images/banner.jpg?width=800&quality=80&format=webp   800w,
    https://cdn.example.com/images/banner.jpg?width=1200&quality=80&format=webp 1200w
  "
  sizes="(max-width: 768px) 100vw, 800px"
  alt="Banner"
/>
```

:::

<br />

## 요약 정리

이미지 교체 후 변경 사항이 반영되지 않는 이유는 **CDN, 프레임워크의 복합적인 캐시 구조** 때문입니다.  
가장 확실한 해결 방법은 다음 두 가지를 **동시에 적용**하는 것입니다:

1. **CloudFront Invalidation 수행**
2. **이미지 URL에 버전 쿼리 추가** (`?v=2`, `?version=20250506` 등)

:::info \_next/image 캐시는 수동 무효화 불가

Vercel은 `_next/image` 경로의 캐시를 수동으로 삭제할 수 없습니다.  
TTL이 만료될 때까지 기다리거나, 원본 이미지 URL을 변경(버전 쿼리 추가) 해야 새 이미지로 인식됩니다.

:::

> 좀 더 살펴보기 :  
> [Vercel을 활용한 이미지 최적화](https://vercel.com/docs/image-optimization)  
> [AWS, 파일을 무효화하여 콘텐츠 제거 ](https://docs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html)

<br />
