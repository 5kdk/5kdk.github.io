---
title: pnpm catalog와 Turbo 모노레포에서 의존성 업데이트가 애매해지는 이유
authors: 5kdk
description: npm-check-updates, pnpm update, taze, syncpack, Renovate의 역할을 나눠 pnpm catalog 기반 Turbo 모노레포의 의존성 업데이트 전략을 정리합니다.
tags: [pnpm, Turborepo, Monorepo, Dependencies]
keywords:
  [
    pnpm catalog,
    pnpm update,
    pnpm workspace,
    Turborepo,
    Turbo monorepo,
    monorepo dependency update,
    npm-check-updates,
    taze,
    syncpack,
    Renovate,
    Dependabot,
    의존성 업데이트,
    모노레포 의존성 관리,
  ]
comments: true
draft: true
---

pnpm workspace와 Turbo를 쓰는 모노레포에서 의존성 업데이트를 정리하다가, 기존 `bump-deps` 스크립트를 `pnpm update`로 바꿀 수 있을지 검토한 적이 있습니다.

처음에는 단순한 치환 문제처럼 보였습니다. 하지만 repo가 pnpm catalog를 쓰고 있고, 일부 패키지는 업데이트 대상에서 제외해야 하며, major 업데이트는 별도 PR로 분리해야 한다면 이야기가 달라집니다.

결론부터 말하면 `pnpm update`는 `npm-check-updates`의 완전한 대체가 아닙니다. 특히 pnpm catalog를 쓰는 순간 업데이트의 중심은 개별 `package.json`이 아니라 `pnpm-workspace.yaml`로 이동합니다.

<!--truncate-->

이 글은 특정 모노레포에서 의존성 업데이트 스크립트를 점검하다가 생긴 질문을 공개 가능한 형태로 일반화한 기록입니다. 프로젝트명, 내부 CI 설정, 세부 의존성 목록은 제외했습니다.

<br />

## 의존성 업데이트의 목표부터 다시 잡기

모노레포에서 의존성 업데이트의 목표는 단순히 "최신 버전으로 올리기"가 아닙니다. 실무에서는 오히려 다음 조건을 유지하는 쪽이 더 중요합니다.

- workspace 전체에서 핵심 의존성 버전을 일관되게 유지한다.
- 변경 범위를 작게 나눠 CI로 검증한다.
- `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`이 서로 어긋나지 않게 관리한다.
- major 업데이트는 patch/minor 업데이트와 분리한다.
- 자동화 bot이 만든 PR도 catalog와 lockfile diff까지 확인한다.

이 관점에서 보면 `npm-check-updates`, `pnpm update`, pnpm catalog, Turbo, Renovate, syncpack, taze는 서로 같은 문제를 해결하는 도구가 아닙니다. 각 도구가 담당하는 레이어가 다릅니다.

예를 들어 기존 스크립트가 이렇게 되어 있었다고 해봅니다.

```json title="package.json"
{
  "scripts": {
    "bump-deps": "pnpm dlx npm-check-updates && pnpm install"
  }
}
```

여기서 자연스럽게 드는 질문은 이겁니다.

> 이걸 `pnpm update`로 대체할 수 있지 않을까?

repo가 단일 패키지라면 어느 정도 가능할 수 있습니다. 하지만 아래 조건이 붙으면 답이 복잡해집니다.

- pnpm workspace를 쓴다.
- `pnpm-workspace.yaml`의 `catalog` 또는 `catalogs`로 핵심 의존성 버전을 관리한다.
- Turbo로 lint, test, build를 실행한다.
- 일부 패키지는 업데이트에서 제외해야 한다.
- major 업데이트는 별도 PR로 분리하고 싶다.

이때 필요한 것은 "명령 하나를 무엇으로 바꿀까"가 아니라 "어떤 파일을 누가 수정하고, 무엇으로 검증할까"에 대한 구분입니다.

<br />

## ncu와 pnpm update는 같은 도구가 아니다

`npm-check-updates`, 줄여서 `ncu`는 `package.json`의 dependency spec을 최신 버전으로 올리는 도구입니다. README에서도 기본 동작을 `package.json` dependency를 최신 버전으로 갱신하고, 실제 설치와 lockfile 갱신은 별도 install 명령으로 처리하는 방식으로 설명합니다.

반면 `pnpm update`는 지정된 range를 기준으로 패키지를 업데이트하는 pnpm CLI 명령입니다. 인자 없이 실행하면 `package.json`에 적힌 기존 range 안에서 업데이트하고, `--latest`를 붙이면 latest tag 기준의 최신 stable로 올립니다. 이 경우 major 버전이 섞일 수 있습니다.

두 도구는 기본 철학이 다릅니다.

| 목적                                   | `npm-check-updates`               | `pnpm update`                     |
| -------------------------------------- | --------------------------------- | --------------------------------- |
| `package.json` range 자체를 올리기     | 기본 역할                         | `--latest` 또는 명시 버전 필요    |
| 기존 semver range 안에서 lockfile 갱신 | 주 역할 아님                      | 기본 역할                         |
| minor까지만 올리기                     | `--target minor` 가능             | 직접 같은 의미의 전역 옵션은 아님 |
| 특정 패키지 제외                       | `--reject` 또는 `.ncurc`          | `updateConfig.ignoreDependencies` |
| workspace 전체 탐색                    | `--deep` 등으로 package file 탐색 | `-r`, `--recursive`               |

업데이트 후보를 확인만 하고 싶다면 `pnpm outdated -r`가 더 잘 맞습니다. 실제 spec 변경까지 할지, 기존 range 안에서만 lockfile을 갱신할지, major까지 올릴지는 그 다음 결정입니다.

```bash
pnpm outdated -r
pnpm update -r
pnpm update -r --latest --interactive
```

이 세 명령은 비슷해 보여도 의도가 다릅니다. 첫 번째는 확인, 두 번째는 기존 range 안의 갱신, 세 번째는 range 바깥까지 포함한 선택적 업데이트에 가깝습니다.

<br />

## catalog가 들어오면 업데이트 지점이 바뀐다

pnpm catalog는 workspace 안에서 dependency version range를 재사용 가능한 상수처럼 정의하는 기능입니다. `pnpm-workspace.yaml`에 catalog를 정의하고, 각 `package.json`에서는 `catalog:` 또는 `catalog:name`으로 참조할 수 있습니다.

예를 들어 여러 앱과 패키지가 같은 React 버전을 써야 한다면 각 `package.json`에 직접 `^19.x`를 쓰는 대신 이렇게 둘 수 있습니다.

```yaml title="pnpm-workspace.yaml"
packages:
  - apps/*
  - packages/*

catalogs:
  react19:
    react: ^19.0.0
    react-dom: ^19.0.0
```

```json title="apps/web/package.json"
{
  "dependencies": {
    "react": "catalog:react19",
    "react-dom": "catalog:react19"
  }
}
```

이 구조의 장점은 분명합니다. 중복된 version range를 줄이고, workspace 안에서 같은 버전을 유지하기 쉬워집니다. 업그레이드할 때도 여러 `package.json`을 고치는 대신 `pnpm-workspace.yaml`의 catalog entry를 바꾸면 됩니다.

하지만 바로 이 지점 때문에 업데이트 워크플로가 애매해집니다.

`npm-check-updates`는 기본적으로 `package.json` 중심 도구입니다. pnpm catalog를 쓰면 실제 버전 정책은 `pnpm-workspace.yaml`에 있는데, updater는 여전히 package manifest를 중심으로 사고할 수 있습니다.

pnpm 쪽도 이 영역은 계속 개선 중입니다. `pnpm update`가 catalog를 업데이트해야 한다는 이슈는 닫혔지만, 2026년 5월 29일 기준으로 `pnpm up`이 하위 패키지의 `catalog:` 참조를 실제 version string으로 바꾼다는 버그 리포트가 열려 있습니다.

그래서 catalog 기반 repo에서는 업데이트 뒤에 항상 세 파일을 같이 봐야 합니다.

- `package.json`: dependency가 계속 `catalog:`를 참조하는가?
- `pnpm-workspace.yaml`: catalog entry가 의도한 버전을 가리키는가?
- `pnpm-lock.yaml`: 실제 resolved dependency가 catalog와 일치하는가?

catalog를 쓰는 순간 "의존성 업데이트"는 한 파일의 range를 고치는 일이 아니라, 이 세 파일의 관계를 맞추는 일이 됩니다.

<br />

## Turbo는 의존성 업데이트 도구가 아니다

Turbo는 의존성 관리를 직접 담당하지 않습니다. Turborepo 문서도 의존성 다운로드, symlink, module resolution 같은 작업은 package manager의 책임이라고 설명합니다.

Turbo가 권하는 방향은 대략 이렇습니다.

- dependency는 사용하는 package의 `package.json`에 둔다.
- root에는 repo 운영 도구 중심으로 둔다.
- workspace 전체에서 같은 버전을 강제하고 싶다면 전용 도구, package manager 명령, pnpm catalog를 사용한다.

문서에서 같은 버전을 유지하는 방법으로 `syncpack`, `manypkg`, `sherif` 같은 전용 도구, `pnpm up --recursive typescript@latest` 같은 package manager 명령, pnpm catalog를 예로 드는 것도 이 맥락입니다.

Turbo는 여기서 업데이트 도구가 아니라 실행기와 캐시 레이어에 가깝습니다. 의존성 업데이트를 해주는 것이 아니라, 업데이트 이후 workspace 전체가 여전히 동작하는지 검증하는 쪽입니다.

```bash
pnpm install
turbo run lint test build
```

따라서 Turbo 모노레포에서 의존성 업데이트를 한다는 말은 package manager로 spec과 lockfile을 갱신한 뒤, Turbo로 영향 범위를 검증하는 흐름까지 포함해야 합니다.

<br />

## 업데이트 제외 정책은 별도로 관리한다

`npm-check-updates`를 쓸 때는 `.ncurc`의 `reject`로 특정 package를 업데이트 대상에서 제외할 수 있습니다.

```json title=".ncurc.json"
{
  "reject": ["react", "react-dom", "@biomejs/biome"]
}
```

pnpm 네이티브 흐름으로 옮긴다면 `pnpm-workspace.yaml`의 `updateConfig.ignoreDependencies`를 검토할 수 있습니다. pnpm 문서는 `pnpm outdated`에 계속 표시되거나 `pnpm update --latest`로 올라가면 안 되는 dependency를 여기에 둘 수 있다고 설명합니다. scope pattern도 지원합니다.

```yaml title="pnpm-workspace.yaml"
updateConfig:
  ignoreDependencies:
    - react
    - react-dom
    - '@biomejs/biome'
    - '@storybook/*'
```

다만 이것도 `ncu --target minor`의 완전한 대체는 아닙니다. "minor까지만 올린다"는 정책과 "`latest`까지 올리되 특정 패키지는 제외한다"는 정책은 다릅니다.

pnpm 네이티브만 쓸 경우에는 다음 장치를 같이 두는 편이 낫습니다.

- `pnpm outdated -r`로 후보를 먼저 확인한다.
- `pnpm update -r --latest --interactive`로 선택권을 둔다.
- core dependency, build tool, app-specific dependency를 PR 단위로 분리한다.
- major 업데이트는 changelog를 읽고 별도 PR로 올린다.

<br />

## 자동화 bot도 catalog에서는 diff를 믿고 확인해야 한다

Dependabot이나 Renovate는 patch/minor 업데이트 PR을 자동으로 만드는 데 유용합니다. 하지만 catalog 기반 workspace에서는 bot이 `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`을 모두 의도대로 갱신하는지 별도 확인이 필요합니다.

Dependabot 쪽에는 pnpm catalog를 기대대로 업데이트하지 못했다는 이슈가 있었습니다. 리포트에서는 Dependabot이 `pnpm-workspace.yaml`의 catalog는 갱신하지 않고 lockfile만 갱신한 사례가 설명됩니다.

Renovate discussion에도 pnpm monorepo와 catalog version을 함께 쓸 때 lockfile의 catalog 정보가 사라지는 문제를 겪었다는 보고가 있습니다.

이 사례들이 모든 환경에서 지금도 재현된다는 뜻은 아닙니다. 다만 "bot이 열어준 PR이니까 안전하다"고 가정하기보다는, catalog와 lockfile diff를 같이 보는 습관이 필요하다는 신호로 보는 편이 낫습니다.

특히 다음 diff는 PR에서 직접 확인합니다.

- catalog entry가 바뀌어야 하는데 lockfile만 바뀌지 않았는가?
- `catalog:` 참조가 실제 version string으로 풀리지 않았는가?
- catalog와 무관한 package의 lockfile resolution이 대량으로 흔들리지 않았는가?
- peer dependency warning이 새로 생기지 않았는가?

<br />

## 역할을 나누면 판단이 쉬워진다

의존성 업데이트 도구를 하나로 고르려고 하면 계속 헷갈립니다. 대신 역할을 나누면 선택지가 단순해집니다.

| 역할                        | 후보                                                   |
| --------------------------- | ------------------------------------------------------ |
| 현재 outdated 확인          | `pnpm outdated -r`                                     |
| 기존 range 안 lockfile 갱신 | `pnpm update -r`                                       |
| package spec 적극 업데이트  | `pnpm update -r --latest -i`, `ncu`, `taze`            |
| catalog 중심 버전 정책 검사 | `syncpack`                                             |
| catalog entry 업데이트      | `syncpack update`, `pnpm update`, 전용 catalog updater |
| 자동 PR                     | Renovate, Dependabot                                   |
| 전체 검증                   | `pnpm install`, `turbo run lint test build`            |

`taze`는 monorepo recursive mode를 지원하고, 기본적으로 허용된 version range 안에서 업데이트하는 보수적인 동작을 기본값으로 둡니다. `taze minor`, `taze major`처럼 업데이트 범위를 명시할 수도 있습니다.

`syncpack`은 pnpm catalog를 dependency type으로 인식합니다. `pnpmCatalog`, `pnpmCatalog:<name>` 같은 dependency type을 대상으로 lint/list를 실행할 수 있고, version group을 통해 catalog 사용 강제 같은 정책을 둘 수도 있습니다.

다만 이 도구들도 도입 자체가 목적은 아닙니다. 중요한 것은 repo의 버전 정책을 어디에 둘지 먼저 정하는 것입니다.

내 기준에서 가장 현실적인 방향은 다음과 같습니다.

1. catalog를 핵심 dependency version의 SSOT로 둔다.
2. `pnpm outdated -r` 또는 updater의 dry-run으로 변경 후보를 먼저 본다.
3. core dependency, build tool, app-specific dependency, major update를 PR 단위로 나눈다.
4. catalog entry를 바꾼 뒤 `pnpm install`로 lockfile을 갱신한다.
5. `turbo run lint test build`로 영향 범위를 검증한다.
6. Renovate/Dependabot은 patch/minor 자동화에 쓰되, catalog와 lockfile diff를 반드시 확인한다.

<br />

## 추천 워크플로

가장 보수적인 기본 흐름은 다음과 같습니다.

```bash
pnpm outdated -r
# pnpm-workspace.yaml의 catalog entry 또는 개별 package.json을 필요한 만큼 수정
pnpm install
turbo run lint test build
```

기존 range 안에서만 lockfile을 갱신하고 싶다면 이렇게 시작할 수 있습니다.

```bash
pnpm update -r
pnpm install
turbo run lint test build
```

적극적으로 올리되 선택권을 유지하려면 interactive mode를 씁니다.

```bash
pnpm update -r --latest --interactive
pnpm install
turbo run lint test build
```

다만 catalog를 쓰는 repo에서는 실행 후 반드시 다음을 확인합니다.

- `package.json`의 `catalog:` 참조가 실제 version string으로 바뀌지 않았는가?
- `pnpm-workspace.yaml`의 catalog entry가 의도한 범위만 바뀌었는가?
- `pnpm-lock.yaml` diff가 예상 범위를 크게 벗어나지 않았는가?
- peer dependency warning이 새로 생기지 않았는가?
- major changelog를 읽어야 하는 dependency가 섞이지 않았는가?

이 과정을 스크립트로 감싸더라도, 스크립트 이름은 `bump-deps`보다 더 좁게 짓는 편이 좋습니다. 예를 들어 "range 안에서 갱신"과 "latest까지 갱신"은 같은 작업이 아닙니다.

```json title="package.json"
{
  "scripts": {
    "deps:outdated": "pnpm outdated -r",
    "deps:update:range": "pnpm update -r",
    "deps:update:latest": "pnpm update -r --latest --interactive",
    "deps:verify": "pnpm install && turbo run lint test build"
  }
}
```

스크립트를 나누면 PR의 의도도 같이 작아집니다. "이번 PR은 기존 range 안에서 lockfile만 갱신한다"와 "이번 PR은 catalog의 React 버전을 올린다"는 리뷰 포인트가 다릅니다.

<br />

## 피하고 싶은 패턴

내가 피하고 싶은 패턴은 다음입니다.

- workspace 전체에 `pnpm update -r --latest`를 한 번에 실행하고 그대로 merge한다.
- React, Next.js, TypeScript 같은 core dependency major 업데이트를 build tool patch 업데이트와 같은 PR에 넣는다.
- catalog를 쓰면서 일부 package에는 직접 version string을 흩뿌린다.
- lockfile diff를 보지 않고 `package.json` 또는 `pnpm-workspace.yaml` diff만 본다.
- Turbo가 의존성 업데이트 정책까지 해결해줄 것이라고 기대한다.
- bot PR을 검토 없이 merge한다.

의존성 업데이트는 자주 해야 하지만, 한 번에 많이 할수록 원인 추적 비용이 커집니다. 특히 모노레포에서는 한 패키지의 업데이트가 다른 앱의 타입체크, 테스트, 빌드에 영향을 줄 수 있습니다.

<br />

## 정리

`pnpm update`는 `npm-check-updates`의 완전한 대체가 아닙니다. 기본 동작은 package range 안에서 업데이트하는 쪽에 가깝고, `--latest`를 붙이면 major 업데이트가 섞일 수 있습니다.

pnpm catalog를 쓰면 핵심 버전의 단일 출처는 `pnpm-workspace.yaml`입니다. 따라서 catalog 기반 모노레포에서는 `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml` diff를 함께 봐야 합니다.

Turbo는 dependency manager가 아니라 검증과 실행 레이어입니다. 업데이트 정책을 대신 결정해주지는 않지만, 업데이트 결과가 workspace 전체에서 깨지지 않는지 확인하는 데 중요합니다.

결국 내가 선호하는 결론은 "하나의 bump 명령으로 모든 것을 해결하자"가 아닙니다. catalog를 SSOT로 두고, 업데이트 후보 확인, version spec 변경, lockfile 갱신, Turbo 검증, 자동화 bot의 PR 검토를 각각 분리하는 것입니다.

의존성 업데이트의 목표는 최신 버전이 아니라, 일관성 있고 검증 가능한 변경입니다.

:::caution

이 글의 도구별 평가는 2026년 5월 29일 기준 문서와 공개 이슈를 바탕으로 합니다. pnpm catalog와 update 명령의 관계는 계속 개선되고 있으므로, 실제 적용 전에는 사용하는 pnpm 버전의 release note와 작은 재현 repo로 동작을 확인하는 편이 안전합니다.

:::

<br />

## 참고 링크

- [pnpm update](https://pnpm.io/cli/update)
- [pnpm outdated](https://pnpm.io/cli/outdated)
- [pnpm catalogs](https://pnpm.io/catalogs)
- [pnpm settings - updateConfig.ignoreDependencies](https://pnpm.io/settings#updateconfigignoredependencies)
- [Turborepo - Managing dependencies](https://turborepo.dev/docs/crafting-your-repository/managing-dependencies)
- [Turborepo - Structuring a repository](https://turborepo.dev/docs/crafting-your-repository/structuring-a-repository)
- [npm-check-updates README](https://github.com/raineorshine/npm-check-updates)
- [npm-check-updates #1451 - pnpm catalog protocol support](https://github.com/raineorshine/npm-check-updates/issues/1451)
- [pnpm #8641 - pnpm update should update catalogs](https://github.com/pnpm/pnpm/issues/8641)
- [pnpm #11658 - pnpm up removes catalog references](https://github.com/pnpm/pnpm/issues/11658)
- [dependabot-core #11953 - dependabot does not update pnpm-workspace.yaml's catalog](https://github.com/dependabot/dependabot-core/issues/11953)
- [renovatebot/renovate discussion #34292](https://github.com/renovatebot/renovate/discussions/34292)
- [taze README](https://github.com/antfu-collective/taze)
- [syncpack dependency types](https://syncpack.dev/dependency-types/)
- [syncpack version groups](https://syncpack.dev/version-groups/)
