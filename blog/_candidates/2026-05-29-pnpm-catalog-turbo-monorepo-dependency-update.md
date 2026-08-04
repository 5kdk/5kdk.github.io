---
title: "pnpm catalog 모노레포의 의존성 업데이트 전략: pnpm update, Syncpack, Dependabot의 역할 나누기"
authors: 5kdk
description: pnpm catalog를 사용하는 모노레포에서 pnpm update, Syncpack update, Dependabot이 각각 어떤 파일과 정책을 맡아야 하는지 현재 지원 상태를 기준으로 비교하고 업데이트 흐름을 정리합니다.
tags: [pnpm, Turborepo, Monorepo, Dependencies]
keywords:
  [
    pnpm catalog,
    pnpm update,
    pnpm workspace,
    Syncpack update,
    pnpmCatalog,
    Dependabot pnpm catalog,
    monorepo dependency update,
    pnpm-workspace.yaml,
    모노레포 의존성 업데이트,
    의존성 자동화,
  ]
comments: true
draft: true
---

pnpm catalog를 도입한 모노레포에서 `bump-deps` 명령을 다시 정리하면서 한 가지 질문이 생겼습니다.

> catalog 업데이트는 이제 어떤 도구가 맡아야 할까?

처음에는 `pnpm update`가 catalog를 건드리지 못한다고 생각해 별도 updater를 찾았습니다. 하지만 현재는 전제가 달라졌습니다. pnpm 자체가 `catalog:` protocol 업데이트를 지원하고, Syncpack은 `pnpmCatalog`만 골라 registry의 새 버전으로 올릴 수 있으며, Dependabot도 pnpm workspace catalogs를 공식 지원합니다.

따라서 결론은 하나의 updater를 고르는 것이 아니었습니다. **로컬에서 직접 올리는 명령, 버전 정책을 적용하는 도구, 반복 업데이트 PR을 만드는 자동화의 역할을 나누는 것**이 더 중요했습니다.

<!--truncate-->

<!-- REVIEW: 발행 직전 실제 저장소가 사용하는 pnpm 버전에 PR #9517과 #11711의 변경이 포함됐는지 release note와 작은 재현 repo로 확인할 것. Syncpack은 설치된 major 버전의 current docs 기준으로 명령 옵션을 다시 대조할 것. -->

## 비교 기준은 “최신 버전을 찾는가”가 아니었다

pnpm catalog에서는 버전 문자열과 참조가 서로 다른 파일에 있습니다.

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

실제 설치 결과는 `pnpm-lock.yaml`에 남습니다. 따라서 catalog 기반 업데이트는 세 가지 관계를 보존해야 합니다.

- `package.json`은 계속 `catalog:` 또는 `catalog:<name>`을 참조한다.
- `pnpm-workspace.yaml`의 catalog entry가 의도한 version range를 가진다.
- `pnpm-lock.yaml`의 resolution이 변경된 catalog와 일치한다.

도구를 비교할 때도 단순히 “최신 버전을 찾는가”만 보지 않았습니다.

| 기준          | 확인할 질문                                               |
| ------------- | --------------------------------------------------------- |
| 수정 대상     | catalog entry, package spec, lockfile 중 무엇을 바꾸는가? |
| 업데이트 범위 | range 안, patch, minor, latest를 어떻게 구분하는가?       |
| 선택 방식     | package와 named catalog를 좁혀서 실행할 수 있는가?        |
| 자동화        | 사람이 실행하는가, 반복 PR을 만드는가?                    |
| 검증          | 변경 후 workspace 전체를 어떻게 확인하는가?               |

이 기준으로 보면 `pnpm update`, Syncpack, Dependabot은 같은 도구의 대체재가 아닙니다.

<br />

## pnpm update는 이제 catalog를 직접 업데이트한다

과거에는 `pnpm update`가 catalog dependency를 의도적으로 건너뛰었습니다. 이 제한을 추적하던 pnpm issue #8641은 현재 닫혀 있습니다.

2025년 6월 8일 merge된 pnpm PR #9517은 `pnpm update`가 `catalog:` protocol dependency를 지원하도록 변경했습니다. 기존의 의도적인 skip 로직을 제거하고, default catalog와 named catalog 업데이트 및 lockfile snapshot 변경을 검증하는 test를 추가했습니다.

따라서 현재 전략에서 `pnpm update`를 “catalog를 업데이트하지 못하는 명령”으로 분류하면 안 됩니다. pnpm native 명령으로 catalog dependency를 올리는 경로가 있습니다.

기본 동작의 구분은 여전히 중요합니다.

```bash
# 지정된 range 안에서 업데이트
pnpm update -r

# latest tag 기준으로 range 밖까지 업데이트할 수 있음
pnpm update -r --latest

# 후보를 보며 선택
pnpm update -r --latest --interactive
```

`--latest`는 major까지 포함할 수 있습니다. catalog 지원 여부와 “어디까지 올릴 것인가”는 별개의 판단입니다.

### #11658은 현재 제한이 아니라 수정된 회귀 사례다

pnpm issue #11658에는 `pnpm upgrade -r` 실행 시 하위 package의 `catalog:` 참조가 실제 version string으로 바뀌는 회귀가 보고됐습니다. `workspace:*` dependency가 함께 있을 때 dependency 배열의 index가 어긋난 것이 원인이었습니다.

이 문제를 수정한 pnpm PR #11711은 2026년 5월 23일 merge됐습니다. catalog 참조를 보존하도록 alias 기반 matching으로 바꾸고 regression test를 추가했습니다.

이 사례는 현재 pnpm이 catalog를 지원하지 않는다는 근거가 아닙니다. **지원 기능에 회귀가 있었고 수정된 사례**로 보는 편이 정확합니다.

다만 실제 저장소가 수정이 포함된 pnpm release를 사용 중인지 확인하는 과정은 남습니다. native 명령을 선택하더라도 update PR에서 세 파일의 diff를 함께 보는 습관은 유지해야 합니다.

<br />

## Syncpack update는 catalog 정책을 좁혀 실행할 때 강하다

Syncpack은 예전부터 workspace 안의 dependency version 일관성을 검사하는 도구로 많이 사용됐습니다. 현재 문서의 `syncpack update`는 registry에서 새 버전을 찾아 `package.json`뿐 아니라 `pnpm-workspace.yaml`의 catalog entry도 수정한다고 명시합니다.

특히 pnpm catalog를 dependency type으로 자동 인식합니다.

- default catalog: `pnpmCatalog`
- named catalog: `pnpmCatalog:<name>`

이 구분을 update 명령에 그대로 사용할 수 있습니다.

```bash
# default catalog entry만 업데이트
syncpack update --dependency-types pnpmCatalog

# named catalog 하나만 업데이트
syncpack update --dependency-types 'pnpmCatalog:react19'

# minor 범위의 후보를 골라 적용
syncpack update \
  --dependency-types pnpmCatalog \
  --target minor \
  --interactive
```

`--target`으로 latest, minor, patch 범위를 나누고, `--dependencies`로 특정 package family를 좁힐 수도 있습니다. update group을 사용하면 dependency별 정책도 설정할 수 있습니다.

이 차이 때문에 Syncpack은 “pnpm update가 catalog를 지원하지 않아서 쓰는 우회 도구”가 아닙니다. **catalog와 dependency family별 업데이트 정책을 명시적으로 운영하고 싶을 때 선택하는 도구**에 가깝습니다.

Syncpack update가 manifest와 catalog entry를 바꾼 뒤에는 pnpm으로 lockfile을 갱신합니다.

```bash
syncpack update --dependency-types pnpmCatalog --interactive
pnpm install
```

Taze는 이번 catalog updater 비교에서 제외했습니다. monorepo dependency update 기능과 `pnpm-workspace.yaml`의 catalog entry를 직접 갱신하는 기능은 같은 의미가 아니며, 후자는 이번 검토에서 공식 문서로 확인하지 못했기 때문입니다.

<!-- REVIEW: Taze는 monorepo dependency updater로 사용할 수 있지만, 이번 자료에서 current pnpm catalog entry update 동작을 공식 문서로 확인하지 못했다. 확인 전에는 catalog updater 후보나 추천 명령에 포함하지 말 것. -->

<br />

## Dependabot은 catalog 업데이트 PR을 반복해서 만든다

GitHub는 2025년 2월 4일 Changelog에서 Dependabot의 pnpm workspace catalogs 지원이 GA됐다고 발표했습니다. GitHub 표현으로는 catalog에 대한 full support이며, workspace별 scoped update와 lockfile consistency를 지원 범위로 설명합니다.

따라서 Dependabot의 역할은 “catalog를 모르는 bot의 결과를 보정하는 것”이 아닙니다. 현재는 **반복적인 dependency update를 PR로 만드는 자동화 계층**으로 둘 수 있습니다.

```yaml title=".github/dependabot.yml"
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: weekly
```

GA 이후 catalog entry가 갱신되지 않고 lockfile만 바뀌는 문제가 dependabot-core #11953에 보고된 적이 있습니다. 이 issue는 현재 closed이고 project status도 Done입니다.

이 closed bug를 Dependabot이 지금도 catalog를 지원하지 않는다는 근거로 사용하면 안 됩니다. 현재 판단의 기준은 GA 공지와 실제 생성된 PR의 diff입니다.

자동화가 지원된다고 리뷰가 필요 없어지는 것은 아닙니다. Dependabot PR에서도 다음 항목은 확인합니다.

- catalog entry와 lockfile이 함께 갱신됐는가?
- unrelated package resolution이 대량으로 바뀌지 않았는가?
- peer dependency warning이 새로 생기지 않았는가?
- major update가 자동 merge 범위에 섞이지 않았는가?

지원 여부와 PR을 merge할 수 있는지는 다른 문제입니다.

<br />

## 세 도구를 같은 표에 놓으면 역할이 보인다

현재 지원 상태를 기준으로 세 도구를 비교하면 다음과 같습니다.

| 도구              | 주된 실행 주체    | catalog entry 업데이트 | 강점                                                | 맡길 역할                          |
| ----------------- | ----------------- | ---------------------- | --------------------------------------------------- | ---------------------------------- |
| `pnpm update`     | 개발자, script    | 지원                   | package manager native 흐름, lockfile 연계          | 직접·일회성 업데이트               |
| `syncpack update` | 개발자, CI        | 지원                   | `pnpmCatalog`와 target/update group으로 정책을 좁힘 | 정책 기반 수동 업데이트            |
| Dependabot        | GitHub automation | GA 지원                | 일정에 따라 반복 PR 생성                            | patch/minor 자동화와 보안 업데이트 |

여기서 하나만 선택할 필요는 없습니다.

- 별도 정책 도구를 추가하고 싶지 않다면 `pnpm update`가 가장 단순합니다.
- catalog나 package family마다 patch/minor 정책을 나누고 싶다면 Syncpack이 더 명시적입니다.
- 반복 확인과 PR 생성을 자동화하려면 Dependabot을 둡니다.

결정 기준은 기능 유무보다 운영 방식입니다.

<br />

## 내가 선택한 흐름: Syncpack으로 좁히고 pnpm으로 확정한다

catalog가 핵심 dependency의 단일 출처인 모노레포라면, 로컬 업데이트 흐름을 다음처럼 나눌 수 있습니다.

```bash
# 1. default catalog의 minor update 후보를 선택
syncpack update \
  --dependency-types pnpmCatalog \
  --target minor \
  --interactive

# 2. lockfile 갱신
pnpm install

# 3. workspace 검증
turbo run lint test build
```

Syncpack을 추가하지 않는 저장소라면 첫 단계를 pnpm native 명령으로 바꿀 수 있습니다.

```bash
pnpm update -r --latest --interactive
turbo run lint test build
```

Dependabot은 patch/minor 업데이트를 정기 PR로 만들고, core dependency의 major 업데이트는 별도 PR로 분리합니다.

이 흐름에서 Turbo는 updater가 아닙니다. dependency spec이나 catalog entry를 수정하지 않고, 변경 후 workspace 전체가 여전히 동작하는지 확인하는 **검증 계층**으로만 남습니다.

| 계층           | 도구                             | 책임                                           |
| -------------- | -------------------------------- | ---------------------------------------------- |
| 직접 업데이트  | pnpm update 또는 Syncpack update | version candidate 선택과 manifest/catalog 수정 |
| 설치 상태 확정 | pnpm install                     | lockfile 갱신과 dependency resolution          |
| 반복 자동화    | Dependabot                       | 일정 기반 update PR 생성                       |
| workspace 검증 | Turbo                            | lint, test, build 실행과 cache                 |

<br />

## 최신 버전보다 검토 가능한 변경을 만든다

pnpm catalog의 native update 지원이 생겼다고 해서 모든 dependency를 한 번에 `--latest`로 올리는 것이 좋은 전략이 되는 것은 아닙니다.

제가 유지하려는 기준은 다음과 같습니다.

- React, Next.js, TypeScript 같은 core dependency의 major update는 별도 PR로 만든다.
- catalog entry, `catalog:` 참조, lockfile diff를 함께 본다.
- 자동화 PR도 peer dependency와 changelog를 확인한다.
- update 명령과 workspace 검증 명령의 책임을 섞지 않는다.

원래 질문은 “`bump-deps`를 어떤 명령으로 바꿀까?”였습니다. 현재 답은 명령 하나가 아닙니다.

`pnpm update`는 native update, Syncpack은 catalog 정책, Dependabot은 반복 PR, Turbo는 검증을 맡깁니다. 의존성 업데이트의 목표는 모든 package를 가장 빨리 최신으로 만드는 것이 아니라, **어떤 도구가 무엇을 바꿨는지 설명할 수 있는 작은 변경을 만드는 것**입니다.

<br />

## 참고 링크

- [pnpm update](https://pnpm.io/cli/update)
- [pnpm catalogs](https://pnpm.io/catalogs)
- [pnpm issue #8641 - pnpm update should update catalogs](https://github.com/pnpm/pnpm/issues/8641)
- [pnpm PR #9517 - support catalog protocol on pnpm update](https://github.com/pnpm/pnpm/pull/9517)
- [pnpm issue #11658 - catalog references regression](https://github.com/pnpm/pnpm/issues/11658)
- [pnpm PR #11711 - preserve catalog protocol references on upgrade](https://github.com/pnpm/pnpm/pull/11711)
- [Syncpack update](https://syncpack.dev/command/update/)
- [Syncpack dependency types](https://syncpack.dev/dependency-types/)
- [Dependabot pnpm workspace catalogs GA](https://github.blog/changelog/2025-02-04-dependabot-now-supports-pnpm-workspace-catalogs-ga/)
- [dependabot-core issue #11953 - closed catalog update bug](https://github.com/dependabot/dependabot-core/issues/11953)
- [Turborepo - Managing dependencies](https://turborepo.dev/docs/crafting-your-repository/managing-dependencies)
