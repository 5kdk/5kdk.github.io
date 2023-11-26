---
title: 좋은 코드를 위한 ESLint 정적 분석 딥 다이브
authors: 5kdk
description: 좋은 리액트 코드 작성을 위한 환경 구축하기, ESLint를 활용한 정적 분석을 알아봅니다.
tags: [ESLint, JavaScript, TypeScript, React, Next.js]
keywords:
  [
    ESLint,
    리액트 환경 구축,
    ESLint 설정,
    좋은 리액트 코드 작성을 위한 환경 구축하기,
  ]
enableComments: true
---

> "개발자에게 버그란 항상 따라다니는 그림자와 같다. 모든 개발자들이 버그가 없는 제품을 만들기 위해 최선을 다하지만 늘 그렇듯 버그는 예기치 못한 곳에서 매번 발생한다."
>
> **_모던 리액트 Deep dive 중_**

버그와 예기치 못한 작동을 방지하기 위한 여러 가지 방법이 있는데, 그중 가장 빠르게 시도해 볼 수 있는 방법은 정적 코드 분석이다. 자바스크립트 생태계에 가장 많이 사용되는 정적 코드 분석 도구 ESLint가 무엇인지 어떻게 사용하면 좋을지 살펴보자.

<!--truncate-->

:::info

**정적 코드 분석**

정적 코드 분석이란 코드의 실행과는 별개로 코드 그 자체만을 코드 스멜(잠재적으로 버그를 야기할 수 있는 코드)을 찾아내어 문제의 소지가 있는 코드를 사전에 수정하는 것을 의미한다.

:::

<br />

## ESLint의 동작 방식

ESLint를 사용하는 것 이상으로 ESLint가 어떻게 동작하는지 아는 사람은 많지 않다. ESLint가 도대체어떤 방식으로 코드를 정적 분석 할 수 있을까?

### ESLint는 어떻게 코드를 분석할까?

ESLint가 코드를 분석하는 과정은 간단히 요약하면 다음과 같다:

1. 자바스크립트 코드를 문자열로 읽는다.
2. 자바스크립트 코드를 분석할 수 있는 파서(parse)로 코드를 구조화한다.
3. 2번에서 구조화한 트리를 추상구문트리(AST, Abstract Syntax Tree)라 하며, 이 구조화된 트리를 기준으로 각종 규칙과 대조한다.
4. 규칙과 대조했을 때 이를 위반한 코드를 알리거나(report) 수정한다(fix).

주목해야 할 것은 구조화하는 과정인 2번이다. ESLint는 기본값으로 [espree](https://github.com/eslint/espree)를 사용한다.

```js
function hello(str) {}
```

이 코드를 espree로 분석하면 다음과 같이 JSON 형태로 구조화된 결과를 얻는다.

```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "range": [0, 22],
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 22,
      "range": [0, 22],
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "range": [9, 14],
        "name": "hello"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 18,
          "range": [15, 18],
          "name": "str"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 22,
        "range": [20, 22],
        "body": []
      }
    }
  ],
  "sourceType": "module"
}
```

단순한 코드임에도 불구하고 다양한 정보가 담겨 있음을 확인할 수 있다. 단순한 변수인지, 함수인지, 함수명은 무엇인지 등만 파악하는 것이 아니라 코드의 정확한 위치와 같은 아주 세세한 정보도 분석해 알려준다. 이러한 정보가 있어야만 코드의 줄바꿈, 들여쓰기 등을 파악할 수 있게 된다.

타입스크립트의 경우도 마찬가지로 `@typescript-eslint/typescript-estree`라고 하는 espree 기반 파서가 있으며, 이를 통해 타입스크립트 코드를 분석해 구조화한다.

:::tip

espree를 포함한 다양한 파서로 js/ts 코드를 분석해 보고 싶다면 [AST explorer](https://astexplorer.net/)를 방문해보자.

:::

:::note

espree가 코드를 어떻게 분석하는지, 어떻게 결과를 만드는지, 또 나올 수 있는 값들이 무엇인지 등이 궁금하다면 espree의 문서를 살펴보자.

:::

ESLint가 espree로 코드를 분석한 결과를 바탕으로, 어떤 코드가 잘못된 코드이며 어떻게 수정해야 할지도 정해야 한다. 이를 ESLint 규칙(Rules)이라 하며, 특정한 규칙의 모음을 plugins라고 한다.

### ESLint Rules

예를 들어, 코드에서 `debugger`의 사용을 금지하고 싶다고 가정해 보자. `debugger`는 코드 개발 과정에서만 사용해야 하는 구문으로, 프로덕션 애플리케이션에서는 절대 존재해서는 안 되는 구문이다. 먼저 이 `debugger`가 어떤 구조로 변환되는지 알아야한다.

```json title="debugger만 있는 코드를 espree로 분석한 모습"
{
  "type": "Program",
  "body": [
    {
      "type": "DebuggerStatement",
      "range": [0, 8]
    }
  ],
  "sourceType": "module",
  "range": [0, 8]
}
```

`body`의 `type`이 `DebuggerStatement`를 반환하는 것을 확인 할 수 있다. 그리고 이 `debugger` 사용을 제한하는 규칙인 `no-debugger`를 확인해보자.

```js title="no-debugger 규칙"
module.exports = {
  meta: {
    type: 'problem',
  },
  docs: {
    description: 'Disallow the use of `debugger`',
    recommended: true,
    url: 'https://eslint.org/docs/rules/no-debugger',
  },
  fixable: null,
  schema: [],
  message: {
    unexpected: "Unexpected 'debugger' statement.",
  },
  create(context) {
    return {
      DebuggerStatement(node) {
        context.report({
          node,
          messageId: 'unexpected',
        });
      },
    };
  },
};
```

- `meta` : 해당 규칙과 관련된 메타 정보를 나타낸다.
- `message` : 해당 규칙을 어겼을 때 반환하는 경고 문구
- `docs` : 문서화에 필요한 정보
- `fixable`: eslint --fix로 수정했을 때 수정 가능한지 여부
- `create` : 실제로 코드에서 문제점을 확인하는 곳

`create`에 있는 함수는 espree로 만들어진 AST트리를 순회해, 선언한 특정 조건을 만족하는 코드를 찾고, 이러한 작업을 코드 전체에서 반복한다. 즉, 여기서는 `DebuggerStatement`를 만나면 해당 노드를 리포트해 `debugger`를 사용했다는 것을 알려준다.

```zsh
/Users/5kdk/sample/index.tsx
    16:1    error    Unexpected 'debugger' statement    no-debugger
```

### eslint-plugin과 eslint-config

eslint-plugin과 eslint-config는 모두 ESLint와 관련된 패키지지만 각자의 역할이 다르다.

#### eslint-plugin

eslint-plugin이라는 접두사로 시작하는 플러그인은 앞서 본 규칙을 모아놓은 패키지이다.

#### eslint-config

eslint-plugin이 리액트, import와 같이 특정 프레임워크나 도메인과 관련된 규칙을 묶어서 제공하는 패키지라면 eslint-config는 이러한 esling-plugin을 한데 묶어서 한 세트로 제공하는 패키지라 할 수 있다.

자신이 원하는 규칙을 모아서 설치하고 적용하는 것도 좋지만 ESLint를 설정하는 것 또한 만만치 않기 때문에 대부분의 경우 이미 존재하는 eslint-config를 설치해서 빠르게 적용하는 경우가 일반적이다.

:::note

eslint-plugin과 eslint-config의 네이밍 규칙이 한 가지 있는데, eslint-plugin, eslint-config라는 접두사를 준수해야 하며, 반드시 한 단어로 구성해야 한다.

- eslint-plugin-naver (o)
- eslint-plugin-naver-financials (x)

특정 스코프가 앞에 붙는 것까지는 가능하다.

- @titicaca/eslint-config-triple (o)

:::

리액트 개발자가 지금 당장 설치해서 사용할 수 있는 유명한 eslint config:

- **eslint-config-airbnb**

  리액트 기반 프로젝트에서 eslint config를 선택한다고 가정했을 때 가장 먼저 손에 꼽는 패키지다. 이름에서 알 수 있듯 에어비앤비에서 만들었으며, 에어비앤비 개발자뿐만 아니라 500여 명의 수많은 개발자가 유지보수하고 있는 단연 가장 유명한 eslint config이며 압도적인 다운로드 수를 자랑한다.

- **@titicaca/eslint-config-triple**

  한국 커뮤니티에서 운영되는 eslint-config 중 유지보수가 활발한 편에 속하며, 많이 쓰인다. 스타트업 개발사인 트리플에서 개발하고 있으며, 현재도 꾸준히 업데이트되고 있다. 이 패키지는 다른 패키지와 다른 몇 가지 특징이 있다.

  - 대부분의 eslint config는 에어비앤비를 기반으로 약간의 룰을 수정해 배포되고 있지만, 해당 패키지는 자체적으로 정의한 규칙을 기반으로 운영
  - 외부로 제공하는 규칙에 대한 테스트 코드가 존재, 이는 개발자가 규칙을 수정하거나 추가할 때, 기대하는 바대로 eslint-config-triple에서 규칙이 추가됐는지 확인 가능
  - CI/CD 환경, 카나리 배포 등 일반적인 npm 라이브러리 구축 및 관리를 위한 시스템이 잘 구축돼 있음
  - 별도의 fe 규칙도 제공하고 있어 Node.js 환경 또는 리액트 환경에 맞는 규칙을 적용할 수 있는 장점

  @titicaca/triple-config-kit는 ESlint뿐만 아니라 Prettier와 StyleLint를 각각 별로의 룰인 @titicaca/prettier-config-triple, @titicaca/stylelint-config-triple로 모노레포를 만들어 관리하고 있어 필요에 따라 설치해서 사용할 수 있다.

  한국어권 커뮤니티에서 유지보수되고 있는 eslint config를 사용하고 싶거나 혹은 자체적인 eslint config 구축에 관심이 있다면 도움이 될 것이다.

- **eslint-config-next**

  Next.js를 사용하고 있는 프로젝트에서 사용할 수 있는 eslint config다. 단순히 코드를 정적으로 분석할 뿐만 아니라 페이지나 컴포넌트에서 반환하는 JSX 구문 및 \_app, \_document에서 작성돼 있는 HTML 코드 또한 정적 분석 대상으로 분류해 제공한다. 이는 단순히 자바스크립트 코드에 대한 향상뿐만 아니라 전체적인 Next.js 기반 웹 서비스의 성능 향상에 도움이 될 수 있다는 점에서 매우 유용하다.

  또, 코어 웹 바이탈을 분석해 제공하는 기능도 포함되어 있다. Next.js로 작성된 코드라면 반드시 설치하자.

  <br />

## 나만의 ESLint 규칙 만들기

코드를 작성하다 보면 eslint-config나 eslint-plugin에서 제공하고 있지 않지만 같은 코드를 수정하는 조직 내부에서 필요로 하는 규칙 또는 코드의 변화로 인해 일관적으로 고쳐야 하는 코드가 있을 수 있다. 이런 코드를 사람이 일일히 수정하는 것은 비효율적이며 휴먼 에러를 일으킬 수 도 있다.

이런 경우에 사용할 수 있는 방법이나만의 ESLint 규칙을 생성하는 것이다.

### 이미 존재하는 규칙을 커스터마이징해서 적용하기

**import React를 제거하기 위한 ESLint 규칙 만들기**

리액트 17 버젼부터는 새로운 JSX 런타임 덕분이 `import React` 구문이필요 없어졌다. 해당 구문을 삭제하게 되면 아주 약간이나마 번들러의 크기를 줄일 수 있게 된다.

(수 천개의 컴포넌트들이 이 구문을 갖고있다고 생각해보자)

`import React`문이 build 시에 트리쉐이킹으로 제거된다고 하더라도, 웹팩과 같은 번들러들이 트리쉐이킹을 하는 데 걸리는 시간을 줄일 수 있고 자연스럽게 빌드 속도 또한 빨라질 것이다.

해당 사항에 대해 리포트할 수 있는 ESLint 규칙을 만들어보자. no-restricted-imports를 커스터마이징해서 해당 이슈를 감지할 것 이다.

```js title=".eslintrc.js"
module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            // 모듈명
            name: 'react',
            // 모듈의 이름
            importNames: ['default'],
            // 에러 메세지
            message:
              "import React from 'react'는 react 17붙 더 이상 필요하지 않습니다. 필요한 것만 react로부터 import해서 사용해 주세요.",
          },
        ],
      },
    ],
  },
};
```

`useState`등 다른 API를 온전하게 사용하기 위해 `default export`만 금지시킨다.

:::tip

이러한 원리를 활용하면 트리쉐이킹이 되지 않는 lodash 같은 라이브러리를 `import` 하는 것도 방지할 수 있다.

```js
module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message:
              'lodash는 ComonJS로 작성돼 있어 트리쉐이킹이 되지 않아 번들 사이즈를 크게 합니다. lodash/* 형식으로 import 해주세요.',
          },
        ],
      },
    ],
  },
};
```

:::

### 완전히 새로운 규칙 만들기

**new Date를 금지시키는 규칙**

자바스크립트 환경에서는 현재 시간을 알기 위해 `new Date()`를 사용하곤 한다. 그러나 이 현재 시간은 기기에 종속된 현재 시간으로, 기기의 현재 시간을 바꿔버리면 `new Date()`가 반환하는 현재 시간 또한 변경된다.

만약 개발하는 서비스가 기기에 의존적이지 않아야해서 서버시간을 반환하는 함수인 `ServerDate()` 함수를 만들어 이 함수만 사용해야 하는 상황의 ESLint 규칙을 만들어보자.

여기서 한 가지 조건은 `new Data(1664608053676)`이나 `new Date('2022-01-01')`은 허용해야 한다는 점이다.

espree가 분석한 `new Date()`의 AST를 살펴보자.

```json title="new Date()를 espree로 분석해 만든 AST"
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "range": [0, 10],
  "body": [
    {
      "type": "ExpressionStatement", // 해당 코드의 표현식 전체를 나타냄
      "start": 0,
      "end": 10,
      "range": [0, 10],
      "expression": {
        // ExpressionStatement에 어떤 표현이 들어가 있는지 확인 (ESLint에서 확인하는 하나의 노드 단위)
        "type": "NewExpression", // 해당 표현이 어떤 타입인지, 여기서는 생성자를 사용한 NewExpression임을 알 수 있음
        "start": 0,
        "end": 10,
        "range": [0, 10],
        "callee": {
          // 생성자(new)를 사용한 표현식에서 생성자에게 전달하는 인수, 여기서는 Date임을 알 수 있음
          "type": "Identifier",
          "start": 4,
          "end": 8,
          "range": [4, 8],
          "name": "Date"
        },
        "arguments": [] // 생성자를 표현한 표현식에서 생성자에 전달하는 인수, 여긴 없으니 빈 배열
      }
    }
  ],
  "sourceType": "module"
}
```

AST로 확인한 결과, 금지해야할 `new Date()`의 노드는 `type`이 `NewExpression`이며, `callee.name`이 `Date`이고, `ExpressionStatement.expression.arguments`가 빈 배열인 경우다.

이를 ESLint의 `create` 함수를 통해 규칙을 만들어보자.

```js title="AST를 기반으로 만든 ESLint 규칙"
/**
 * @type {import('eslint').Rule.RuleModule}
 */

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disalow use of the new Date()',
      recommended: false,
    },
  },
  fixable: 'code',
  schema: [],
  message: {
    message:
      'new Date()는 클라이언트에서 실행 시 해당 기기의 시간에 의존적이라 정확하지 않습니다. 현재 시간이 필요하다면 ServerDate()를 사용해 주세요.',
  },
  create: function (context) {
    return {
      // NewExpression`이라고 하는 타입의 선택자를 키로 선언해서 new 생성자를 사용할 때 ESLint가 실행되도록 한다
      NewExpression: function (node) {
        // 해당 node를 기준으로 찾고자 하는 생성자인지 검증한다
        if (node.callee.name === 'Date' && node.arguments.length === 0) {
          // 이를 찾았다면 context.report를 통해 해당 코드 스멜을 리포트하고, message를 가리킨다
          context.report({
            node: node,
            messageId: 'message', // meta.message의 객체에 키 값을 선언해두면 해당 기 값을 가진 값을 가져오게 된다
            fix: function (fixer) {
              // 마지막으로 자동 수정하는 코드를 넣어줄 수 있다
              return fixer.replaceText(node, 'ServerDate()');
            },
          });
        }
      },
    };
  },
};
```

:::note

meta 필드는 해당 규칙과 관련된 정보를 나타내는 필드다. 여기서 사용 가능한 옵션은 [공식 홈페이지](https://eslint.org/docs/latest/developer-guide/working-with-rules#rule-basics) meta 필드를 참고

:::

규칙을 만들었으니 배포해보자. 규칙은 반드시 eslint-plugin 형태로 묶음 배포하는 것만 가능하다.

먼저 빈 패키지를 만든 다음, yo와 generate-eslint를 활용해 eslint-plugin을 구성할 환경을 빠르게 구성한다.

```zsh
yo eslint:plugin

# ...

yo eslint:rule

# ...

```

환경 설정을 다하면 다음과 같은 구조로 디렉터리와 파일이 생성된다.

```
📂eslint-plugin-5kdk
 ┣ 📂docs
 ┃ ┗ 📂rules
 ┃ ┃ ┗ 📜no-new-date.md
 ┣ 📂lib
 ┃ ┣ 📂rules
 ┃ ┃ ┗ 📜no-new-date.js
 ┃ ┗ 📜index.js
 ┣ 📂tests
 ┃ ┗ 📂rules
 ┃ ┃ ┗ 📜no-new-date.js
 ┣ 📜.eslintrc.js
 ┣ 📜.npmrc
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json

```

rules/no-new-date.js 파일에 작성한 규칙을 붙여넣자. 그리고 `docs`에는 해당 규칙을 위한 설명을, `tests`에는 테스트 코드를 작성한다.

```js
/**
 * @fileoverview 5kdk
 * @author 5kdk
 */

'use strict';

// -----------------------------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-new-date'),
  RuleTester = requert('eslint').RuleTester;

// -----------------------------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-new-date', rule, {
  valid: [
    {
      code: 'new Date(2021, 1, 1)',
    },
    {
      code: 'new Date("2022-01-01")',
    },
  ],

  invalid: [
    {
      code: 'new Date()',
      errors: [{ message: rule.meta.message.message }],
      output: 'ServerDate()',
    },
  ],
});
```

마지막으로 npm publish로 배포한 다음, 원하는 프로젝트에서 설치해서 사용하면 된다.

### 주의할 점

ESLint를 잘못 설정해두면 원치 않는 결과가 계속해서 발생한다.

#### Prettier와 충돌

포매팅 도구인 Prettier도 ESLint와 마찬가지로 코드를 정적 분석해서 문제를 해결하지만, 지향하는 목표가 다르다.

- **ESLint** : 코드의 잠재적인 문제 분석
- **Prettier** : 포매팅과 관련된 작업(줄바꿈, 들여쓰기, 따옴표 등)

ESLint에서도 Prettier에서 처리하는 작업을 처리할 수 있기 때문에 충돌이 발생하여 에러가 발생한다. 이 문제를 해결하기 위해서는

1. Prettier에서 제공하는 규칙을 어기지 않도록 ESLint에서 해당 규칙을 끄는 방법
2. 자바스크립트나 타입스크립트는 ESLint에, 그 외의 파일은 모두 Prettier에 맡기는 방법(물리적 분리)
   - 대신 자바스크립트에 추가적으로 필요한 Prettier 관련 규칙은 모두 eslint-plugin-prettier을 사용
   - Prettier에서 제공하는 모든 규칙을 ESLint에서 사용할 수 있는 규칙으로 만들어둔 플러그인

#### 규칙에 대한 예외처리

만약 일부 코드에서 특정 규칙을 임시로 제외시키고 싶을때 사용한다. 특정 줄만 제외하거나, 파일 전체를 제외하거나, 특정 범위에 걸쳐 제외 가능하다.

```js
// eslint-disable-line <규칙> - 특정 줄 제외
// eslint-disable-next-line <규칙> - 다음 줄 제외
/* eslint-disable <규칙> - 특정 여러 줄 제외
  ...
*/
// eslint-disable <규칙> - 파일 전체 제외
```

#### ESLint 버전 충돌

이 문제를 미연에 방지하려면 설치하고자 하는 eslint-config, eslint-plugin이 지원하는 ESLint 버전을 확인하고, 또 설치하고자 하는 프로젝트에서 ESLint 버전을 어떻게 지원하고 있는지 살펴야한다.
ESLint의 공식문서에서는 ESLint의 의존성은 peerDependencies로 명시하도록 설정해 두라고 권장하고 있지만 이를 준수하지 못한 패키지를 설치할 때는 주의하자.
