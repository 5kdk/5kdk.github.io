---
title: CDN 이미지 파일 교체 후 Next.js <Image> 컴포넌트 캐싱 문제 해결하기 (Vercel)
authors: 5kdk
description: Vercel에 배포된 Next.js에서 <Image> 컴포넌트 사용 시 발생하는 이미지 캐싱 문제의 원인과, Vercel Cache Purge 및 URL 버전 쿼리를 통한 해결 방법을 설명합니다.
tags: [Web Performance, Next.js]
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
    Vercel Cache Purge,
  ]
comments: true
---

Vercel에 배포된 Next.js 프로젝트에서 `<Image>` 컴포넌트를 사용해 외부 이미지를 불러오는 경우, 원본 이미지를 교체해도 변경 내용이 반영되지 않는 문제가 발생할 수 있습니다.

이 문서에서는 **Vercel 배포 환경**을 기준으로 여러 계층의 캐시로 인해 발생하는 이 문제의 원인을 살펴보고, **Vercel Cache Purge**와 **CloudFront Invalidation**을 통해 해결하는 방법을 소개합니다.

<!--truncate-->

## 문제 상황

- `<Image>`를 사용해 S3의 이미지를 불러오는 Next.js 프로젝트
- **Vercel에 배포**되어 있으며, 이미지가 CloudFront를 통해 제공됨
- Next.js는 이를 최적화해 `_next/image` 경로로 제공 (Vercel Image Optimization 사용)
- S3의 이미지 파일을 같은 경로에 덮어썼지만, 변경 내용이 반영되지 않고 이전 이미지가 계속 표시됨

<br />

## 원인: 캐시 계층별 문제 (Vercel 배포 기준)

문제는 다음 세 가지 캐시 계층이 중첩되면서 발생합니다.

### 1. CloudFront 캐시 (Source)

- URL이 같으면 기존 이미지를 계속 캐싱합니다.
- 기본 설정에서는 이미지 변경을 감지하지 않습니다.

### 2. Vercel 이미지 최적화 캐시 (\_next/image)

- Vercel 환경에서 `<Image>`는 외부 이미지를 최적화해 **Vercel Edge Network**에 캐싱합니다.
- 원본 이미지의 전체 URL(쿼리 포함)을 기준으로 캐싱합니다.
- 동일한 URL은 다시 최적화하지 않으며, **단순 재배포만으로는 캐시가 무효화되지 않습니다**.

### 3. 브라우저 캐시

- `Cache-Control`, `ETag` 등의 헤더에 따라 로컬에 저장됩니다.
- 강제 새로고침 전까지 이전 이미지가 유지될 수 있습니다.

<br />

## 해결 방법

가장 이상적인 방법은 **캐시를 근본적으로 삭제(Purge)** 하는 것이며, 급한 경우 **URL 변경(Versioning)** 으로 우회할 수 있습니다.

### 1. 근본적인 해결: 캐시 퍼지 (Purge & Invalidation)

Vercel과 CloudFront 두 곳의 캐시를 모두 지워야 확실하게 새 이미지가 반영됩니다.
Vercel Image Optimization은 원본(CloudFront) 리소스의 `Cache-Control` 헤더(max-age)를 존중하여 캐시 TTL을 설정하기 때문입니다.

#### 1단계: CloudFront 캐시 무효화 (Invalidation)

먼저 원본 소스를 제공하는 CloudFront의 캐시를 날려줍니다.

- **AWS Console**: CloudFront > 배포 선택 > 무효화 > 경로 입력 (`/images/banner.jpg`)
- **AWS CLI**:
  ```bash
  aws cloudfront create-invalidation --distribution-id [ID] --paths "/images/banner.jpg"
  ```

#### 2단계: Vercel CDN 캐시 퍼지 (Purge)

그 다음, Vercel Edge Network에 저장된 최적화된 이미지 캐시를 삭제합니다.

- **Vercel Dashboard**: Settings > Caches > Purge CDN Cache > **Source Image** 선택 > 원본 경로 입력
- **Vercel CLI**:
  ```bash
  vercel cache purge --srcimg https://cdn.example.com/images/banner.jpg
  ```

:::info
Vercel Cache Purge 기능은 Project Owner 또는 Member 권한이 필요합니다.
:::

### 2. 빠른 우회: 이미지 URL에 버전 쿼리 추가

캐시 퍼지가 번거롭거나 즉각적인 반영이 최우선이라면, URL에 쿼리 파라미터를 붙여 **새로운 리소스**로 인식하게 만듭니다.

```tsx
// 쿼리가 바뀌면 Vercel은 이를 완전히 새로운 이미지로 취급하여 새로 최적화합니다.
<Image src="https://cdn.example.com/images/banner.jpg?v=2" ... />
```

:::caution CloudFront 설정 확인
CloudFront의 캐시 정책(Cache Policy)이 **쿼리 스트링을 무시(Exclude)** 하도록 설정되어 있다면, 이 방법은 CloudFront 레벨에서 막힐 수 있습니다.
`Managed-CachingOptimized` 정책은 기본적으로 쿼리 스트링을 무시하므로, 필요시 커스텀 정책을 사용해야 합니다.
:::

### 3. 설계적 대안: next.js 이미지 최적화 미사용

배너나 이벤트 이미지처럼 **교체 주기가 매우 짧은 리소스**는 굳이 Vercel의 이미지 최적화를 거칠 필요가 없을 수 있습니다.
이 경우 `unoptimized` 속성을 쓰거나 `<img>` 태그를 사용합니다.

```tsx
// Next.js Image 컴포넌트 사용 시 최적화 해제
<Image src="..." unoptimized />

// 또는 일반 img 태그 사용
<img src="..." />
```

| 항목            | `<Image>` (Default)        | `unoptimized` / `<img>`           |
| :-------------- | :------------------------- | :-------------------------------- |
| **경로**        | `_next/image?url=...`      | 원본 URL 그대로 요청              |
| **캐싱 주체**   | Vercel Edge + CloudFront   | CloudFront + 브라우저             |
| **제어 용이성** | 복잡함 (Vercel Purge 필요) | 쉬움 (CF Invalidation만으로 충분) |

:::tip CDN으로 최적화 위임하기
`unoptimized`를 사용할 때는 CloudFront(또는 Lambda@Edge) 레벨에서 이미지 리사이징/포맷 변환을 처리하도록 구성하면 성능 저하를 막을 수 있습니다.
:::

<br />

## 요약 정리

이미지 교체 후 변경 사항이 반영되지 않는 이유는 **CDN(CloudFront)과 Vercel Edge의 이중 캐싱 구조** 때문입니다.

1. **정석적인 해결**: CloudFront Invalidation 수행 후 → Vercel Purge (`Source Image`)
2. **빠른 해결**: 이미지 URL에 쿼리 스트링 추가 (`?v=2`)
3. **구조적 해결**: 빈번한 변경이 필요한 이미지는 `unoptimized` 사용 고려

:::tip Vercel 캐시 퍼지 가이드

이제 Vercel에서도 `_next/image`에 대한 캐시를 수동으로 무효화할 수 있습니다.  
자세한 내용은 공식 문서를 참고하세요.

- [Manually Purging Vercel Cache](https://vercel.com/docs/edge-cache/purge#manually-purging-vercel-cache)
- [Programmatically Purging Vercel Cache](https://vercel.com/docs/edge-cache/purge#programmatically-purging-vercel-cache)

:::

> 좀 더 살펴보기 :  
> [Vercel을 활용한 이미지 최적화](https://vercel.com/docs/image-optimization)  
> [AWS, 파일을 무효화하여 콘텐츠 제거 ](https://docs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html)

<br />
