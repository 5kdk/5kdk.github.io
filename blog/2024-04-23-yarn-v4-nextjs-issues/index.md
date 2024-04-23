---
title: Yarn v4, Next.js 환경 세팅과 마주했던 이슈들
authors: 5kdk
description: yarn berry에 입문하며 마주한 이슈들과 배운점을 정리한다.
tags: [Yarn, Next.js, Storybook, Github]
keywords:
  [
    yarn 4.0,
    yarn berry 4,
    storybook pnp,
    yarn berry git lfs,
    zero-install,
    Next.js 14 and yarn berry,
    yarn 스토리북,
  ]
enableComments: true
---

개인 Next.js 보일러 플레이트를 세팅하면서 Yarn 4 의 PnP(Plug And Play)와 Zero-install로 환경을 구성을 시도해보았다. 이번에 환경을 세팅하며 마주했던 상황들과 이슈들을 정리해본다. 편의상 Yarn PnP를 Yarn berry라 부르겠다.

<!--truncate-->

## .yarnrc.yml 이 어디에?

```yml title=".yarnrc.yml"
nodeLinker: pnp
yarnPath: .yarn/releases/yarn-3.2.1.cjs
```

Yarn berry v2, v3 세팅 시 위와 같은 설정 파일이 생성됐었다. Yarn berry v4에서는 더 이상 기본으로 생성되지 않는다.

### yarnPath를 설정해야 할까?

글로벌 바이너리 대신 사용할 Yarn 바이너리의 경로인데, 이 바이너리는 rc 파일이 포함된 디렉터리 내에서 실행되는 모든 명령에 대해 다른 바이너리(전역 바이너리 포함) 대신 실행된다. (Node 환경에서 `.nvmrc`를 설정하듯 프로젝트에 참여한 모든 개발자가 같은 버젼을 사용하기 위한 방법)

Yarn에서는 v2부터 프로젝트별로 바이너리를 가리키는 `yarnPath` 설정을 사용하도록 권장했지만, 많은 사람들이 아무리 작은 바이너리를 레포지토리에 추가하는 것을 좋아 하지 않았기 때문에 Corepack 프로젝트를 진행했다고 한다.

Corepack은 Node 18과 20 모두와 함께 제공되므로 더 이상 `yarnPath`에 의존할 필요가 없으며, 이에 따라 패키지 관리자 필드를 업데이트하도록 `yarn init -2` 및 `yarn set version` 명령도 업데이트되었다.

즉 Yarn v4 이전에는 프로젝트 내에서 Yarn을 설치하는 데 `yarnPath` 설정이 선호되었지만, 이제 대부분의 경우 Corepack을 사용하는 것이 좋다고 한다.

:::info

Corepack은 작업 중인 프로젝트에 따라 실행할 올바른 패키지 관리자 버전을 자동으로 선택하는 Node.js 16+와 함께 제공되는 도구입니다.

:::

### Yarn berry의 zero-install 설정

Yarn berry에서 zero-install이 더 이상 default 옵션으로 제공하지 않는다. 대신에, global yarn cache를 참조한다.
따라서 아래와 같이 글로벌 캐시를 비활성화해야 `.yarn/cache`폴더가 생성되고 zero-install을 구성할 수 있다.

```yml title=".yarnrc.yml"
# 글로벌 캐시 비활성화 (기본옵션 true)
enableGlobalCache: false
```

> **Read More:**  
> [_yarn release 4.0_](https://yarnpkg.com/blog/release/4.0)  
> [_yarnPath_](https://yarnpkg.com/configuration/yarnrc#yarnPath)

<br />

## IDE(vscode) 타입스크립트 문제

Vscode의 Yarn berry 환경에서는 `ts`, `tsx`에 빨간줄이 난무하게 되는데 Vscode에서 타입스크립트와 PnP 설치모드를 사용하려면 추가 작업이 필요하다.

- Yarn 팀에서 유지 관리하는 [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) 확장을 설치
- `yarn dlx @yarnpkg/sdks`

:::info Yarn PnP에 SDK가 필요한 이유는?

Yarn PnP는 Node.js 런타임 내에 삽입해야 하는 Node.js 로더를 생성하는 방식으로 작동합니다. 많은 IDE 확장 프로그램은 로더를 고려하지 않고 래핑하는 패키지(Prettier, TypeScript, ...)를 실행합니다.

SDK는 인디렉션 패키지를 생성하여 이를 해결합니다. 필요한 경우 이러한 인디렉션은 필요한 호출을 실제 패키지로 전달하기 전에 자동으로 로더를 설정합니다.

:::

> **Read More:**  
> [_Editor-sdks_](https://yarnpkg.com/getting-started/editor-sdks)

<br />

## Yarn berry에서 Storybook 세팅하며 만난 이슈

### 패키지 종속성 문제

```bash
Error: @chromatic-com/storybook tried to access @storybook/core-events, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.

Required package: @storybook/core-events (via "@storybook\core-events\server-errors")
```

호이스팅 전략을 고려하지 않는 패키지들은 종속성 문제를 일으킬 수 있는데, `@chromatic-com/storybook` 패키지가 그러하였다.
비단 Storybook만의 문제는 아니며, Yarn berry가 까다로운 이유 중 하나인 것 같다.

필요한 패키지를 `yarn add` 해도 해결되지만, 패키지 중복을 피하고자 아래와 같이 확장구문을 작성해주면 된다.

```yml title=".yarnrc.yml"
packageExtensions:
  '@chromatic-com/storybook@*':
    dependencies:
      '@storybook/client-logger': '*'
      '@storybook/core-events': '*'
```

:::info

종속성의 패키지 정의를 확장하여 타사 문제를 해결하는 데 유용합니다.

일부 패키지는 종속성과 관련하여 잘못 지정되었을 수 있습니다(예: 하나의 종속성이 누락되어 Yarn이 해당 종속성에 대한 액세스를 거부하는 경우). packageExtensions 필드는 추가 정보로 기존 패키지 정의를 확장하는 방법을 제공합니다. 이 필드를 사용하는 경우 PR을 업스트림으로 전송하고 플러그인 호환 데이터베이스에 확장 기능을 기여하는 것이 좋습니다.

참고: 이 필드는 종속성을 추가하기 위해 만들어진 필드이므로 기존 종속성을 다시 작성해야 하는 경우 대신 해상도 필드를 사용하는 것이 좋습니다.

<details>
  <summary><b>원문</b></summary>
  <div>

Extend the package definitions of your dependencies; useful to fix third-party issues.

Some packages may have been specified incorrectly with regard to their dependencies - for example with one dependency being missing, causing Yarn to refuse it the access. The packageExtensions fields offer a way to extend the existing package definitions with additional information. If you use it, consider sending a PR upstream and contributing your extension to the plugin-compat database.

Note: This field is made to add dependencies; if you need to rewrite existing ones, prefer the resolutions field instead.

> [_Yarn Docs_](https://yarnpkg.com/configuration/yarnrc#packageExtensions)

  </div>
</details>

:::

### storybook 빌드시 node_modules가 생긴다?

:::info

**스토리북을 통한 Yarn 플러그앤플레이(PnP) 지원**

플러그앤플레이(PnP)가 활성화된 새 버전의 Yarn에서 실행 중인 프로젝트에서 스토리북을 활성화한 경우 일부 추가 파일 및 폴더가 포함된 node_modules가 생성되는 것을 볼 수 있습니다. 이는 스토리북이 캐시 파일 및 기타 데이터를 저장하기 위해 일부 디렉터리(예: .cache)에 의존하여 성능을 개선하고 빌드 속도를 높이기 때문에 알려진 제약 조건입니다. 이러한 파일 및 폴더는 .gitignore 파일을 조정하여 사용 중인 버전 관리에서 제외하여 안전하게 무시할 수 있습니다.

<details>
  <summary><b>원문</b></summary>
  <div>

**Yarn Plug'n'Play (PnP) support with Storybook**

If you've enabled Storybook in a project running on a new version of Yarn with Plug'n'Play (PnP) enabled, you may notice that it will generate node_modules with some additional files and folders. This is a known constraint as Storybook relies on some directories (e.g., .cache) to store cache files and other data to improve performance and faster builds. You can safely ignore these files and folders, adjusting your .gitignore file to exclude them from the version control you're using.

> [_Storybook Docs_](https://storybook.js.org/docs/get-started/install#yarn-plugnplay-pnp-support-with-storybook)

  </div>
</details>

:::

<br />

## Github LFS 대역폭 이슈

zero-install 으로 프로젝트를 구성한 후 가장 큰 문제는 GitHub의 대역폭 제한이었다. GitHub는 서비스 안정성을 위해 큰 용량의 파일을 제한하는 정책을 가지고 있는데, 이 큰 용량의 파일 기준이 50MB이다. PnP가 패키지를 압축한다 해도 50MB를 넘는 패키지가 많기 때문에 이는 상당한 제약이다. 일반적으로 이를 회피하기 위해 yarn/cache 폴더를 Git LFS를 사용하여 추적하고, 파일의 원본은 Git LFS 스토리지에 저장하여 포인터만 리포지토리에 유지한다.

위 과정을 마친 후 몇 가지 테스트를 진행하기위해 데스크탑과 랩탑에서 `git clone`을 시도하니 금새 대역폭 제한에 걸렸다.

![github 대역폭 제한](./1.webp)

GitHub는 1GB 스토리지의 용량과 매달(25일) 1GB 대역폭을 무료로 제공하는데, 프로젝트의 패키지 LFS는 큰 용량를 차지하고 있어 무료로 제공되는 1GB 대역폭을 모두 금방 써버리게 된다. (bitbucket도 free plan은 매달 1GB를 제공한다)

:::info

- Git LFS에 500MB 파일을 푸시하는 경우 할당된 스토리지의 500MB를 사용하고 대역폭은 사용하지 않습니다. 1바이트 변경을 수행하고 파일을 다시 푸시하는 경우 또 다른 500MB의 스토리지를 사용하고 대역폭은 사용하지 않으므로 이 두 푸시에 대한 총 사용량은 스토리지 1GB와 대역폭 0이 됩니다.
- LFS로 추적된 500MB 파일을 다운로드하는 경우 리포지토리 소유자의 할당된 대역폭 500MB를 사용합니다. 협력자가 파일 변경을 푸시하고 새 버전을 로컬 리포지토리로 끌어오면 500MB의 대역폭을 추가로 사용하여 이 두 다운로드의 총 사용량은 1GB의 대역폭이 됩니다.
- GitHub Actions이(가) LFS로 추적되는 500MB 파일을 다운로드하는 경우 리포지토리 소유자의 할당된 대역폭 500MB를 사용합니다.

> [_GitHub Docs_](https://docs.github.com/ko/repositories/working-with-files/managing-large-files/about-storage-and-bandwidth-usage#tracking-storage-and-bandwidth-use)

:::

zero-install 아주 매력적인 전략이지만 우선 의존성 변경이 일어나면 내 레포지토리에 lfs로 tracking한 패키지들을 push를 하지 못하는 상황이고, 다른 디바이스에서 프로젝트를 온전히 사용할 수 없기에 PnP 모드를 사용하되 zero-install을 포기하기로 했다.

<br />

## 간단 Yarn PnP, Next.js 세팅 방법

<!-- prettier-ignore -->
- `npx create-next-app@latest`
- `node_modules`, `package-lock.json` 삭제
- `corepack enable` 코어팩 활성화
- `yarn set version stable` Yarn v4 세팅
- `yarn install`
- `.gitignore` 추가
  ```. title=".gitignore"
  .pnp.*
  .yarn/*
  !.yarn/patches
  !.yarn/plugins
  !.yarn/releases
  !.yarn/sdks
  !.yarn/versions
  ```
- Done!

zero-install을 사용하고 싶다면 global cache enable 설정 및 gitignore 변경, GitLFS 설치와 .yarn/cache 폴더를 tracking 및 git lfs push 과정 추가
