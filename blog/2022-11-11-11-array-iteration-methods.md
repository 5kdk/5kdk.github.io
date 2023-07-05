---
title: 배열 반복을 효과적으로 만드는 11가지 메서드
authors: 5kdk
tags: [JavaScript]
enableComments: true
---

이 포스팅은 해외 저자의 글을 요약 및 번역하고 살을 붙여 옮깁니다. 원문은 하단 링크로 남깁니다.

자바스크립트 배열 반복을 효과적으로 만드는 11가지 메서드에 대해 알아봅니다.

> 저자의 서문:  
> _Javascript의 일상적인 프로그래밍에서는 배열 요소에 대해 일종의 작업을 수행해야 합니다. 배열의 각 항목을 처리하는 것은 매우 일반적입니다. 따라서 각 배열 요소의 처리를 더 쉽고 효율적으로 만들기 위해 Javascript는 Iteration 메서드의 힘을 사용합니다._

<!--truncate-->

---

## 반복(Iteration) 메서드

반복 메서드들은 배열의 모든 요소에 대해 한 번에 하나씩 작동하는 방법입니다. 이러한 메서드는 loof와 유사합니다.

각 메서드들을 활용하여 배열을 반복하고, 각 항목에 대해 일부 기능을 수행하고, 원하는 결과를 필터링하고, 단일 값으로 줄이고, 검색하여 찾는 것과 같은 방법들을 살펴봅니다.

### 1. Array.map()

`Array.map()` : `map()`을 사용 하면 각 배열 요소에 대해 **작업을 수행하여 새 배열 요소를 반환**합니다. 부수효과가 없습니다. 즉, 기존 배열 요소에는 변경사항이 없습니다.

콜백 함수에는 3개의 매개 변수(`value`, `index`, `array`)를 받을 수 있습니다. `index와` `array는` optinal입니다.

**예제**

원래 배열 요소에 3을 곱한 새 배열 생성

```js
let nums = [10, 20, 30, 40, 50];

const numsMap = nums.map((value, index, array) => value * 3);
```

**출력**

```
30,60,90,120,150
```

:::info mdn web docs

<!-- prettier-ignore -->
```js
// Arrow function
map((element) => {/* … */});
map((element, index) => {/* … */});
map((element, index, array) => {/* … */});

// Callback function
map(callbackFn);
map(callbackFn, thisArg);

// Inline callback function
map(function (element) {/* … */});
map(function (element, index) {/* … */});
map(function (element, index, array) {/* … */});
map(function (element, index, array) {/* … */}, thisArg);
```

:::

### 2. Array.filter()

`Array.filter()` : 이름에서 알 수 있듯이 일부 **조건을 기반으로 필터링하여 새 배열을 반환**합니다.

`filter()` 또한 콜백 함수에는 3개의 매개 변수(`value`, `index`, `array`)를 받을 수 있습니다. `index와` `array는` optinal입니다.

**예제**

배열안의 30보다 큰 수를 선별하기

```js
let nums = [50, 25, 40, 16, 29];

const numOver30 = nums.filter((value, index, array) => value > 30);
```

**출력**

```
50, 40
```

:::info 📃 mdn web docs

<!-- prettier-ignore -->
```js
// Arrow function
filter((element) => {/* … */});
filter((element, index) => {/* … */});
filter((element, index, array) => {/* … */});

// Callback function
filter(callbackFn);
filter(callbackFn, thisArg);

// Inline callback function
filter(function (element) {/* … */});
filter(function (element, index) {/* … */});
filter(function (element, index, array) {/* … */});
filter(function (element, index, array) {/* … */}, thisArg);
```

:::

### 3. Array.forEach()

`Array.forEach()` : **for 문과 같습니다.** 배열의 각 요소에 대해 함수를 실행합니다.

**예제**

`Hello` 문자열에 `names` 배열의 요소를 함께를 함께 출력하기

```js
let prntVal = '';
const names = ['Frank', 'Charles', 'Dolly', 'Robert', 'Bob'];

names.forEach(value => {
  prntVal = prntVal + 'Hello ' + value + '<br/>';
});
```

**출력**

```
Hello Frank
Hello Charles
Hello Dolly
Hello Robert
Hello Bob
```

:::info mdn web docs

<!-- prettier-ignore -->
```js
// Arrow function
forEach((element) => {/* … */});
forEach((element, index) => {/* … */});
forEach((element, index, array) => {/* … */});

// Callback function
forEach(callbackFn);
forEach(callbackFn, thisArg);

// Inline callback function
forEach(function (element) {/* … */});
forEach(function (element, index) {/* … */});
forEach(function (element, index, array) {/* … */});
forEach(function (element, index, array) {/* … */}, thisArg);
```

:::

### 4. Array.reduce()

`Array.reduce()` : 각 배열 요소에서 함수를 실행하여 **단일 값을 생성**합니다.

초기값(`initialValue`) 또는 이전에 반환된 값을 유지하는 데 사용되는 새 매개변수 `accumulator`와 `currentValue`, `index` 및 `array`의 매개변수가 있습니다.

**예제**

배열을 만들고 `reduce()` 함수를 사용하여 배열 요소의 합을 알아보기

```js
const nums = [10, 20, 30, 40, 50];

const sum = nums.reduce((total, value) => total + value);
```

**출력**

```
150
```

:::info mdn web docs

<!-- prettier-ignore -->
```js
// Arrow function
reduce((accumulator, currentValue) => {/* … */});
reduce((accumulator, currentValue, currentIndex) => {/* … */});
reduce((accumulator, currentValue, currentIndex, array) => {/* … */});

reduce((accumulator, currentValue) => {/* … */}, initialValue);
reduce((accumulator, currentValue, currentIndex) => {/* … */}, initialValue);
reduce((accumulator, currentValue, currentIndex, array) => {/* … */}, initialValue);

// Callback function
reduce(callbackFn);
reduce(callbackFn, initialValue);

// Inline callback function
reduce(function (accumulator, currentValue) {/* … */});
reduce(function (accumulator, currentValue, currentIndex) {/* … */});
reduce(function (accumulator, currentValue, currentIndex, array) {/* … */});

reduce(function (accumulator, currentValue) {/* … */}, initialValue);
reduce(function (accumulator, currentValue, currentIndex) {/* … */}, initialValue);
reduce(function (accumulator, currentValue, currentIndex, array) {/* … */}, initialValue);
```

:::

### 5. Array.reduceRight()

`Array.reduceRight()` : 끝 인덱스 부터 시작한다는 점을 제외하고는 `reduce()`와 같습니다.

**예제**

배열을 만들고 `reduce()` 함수를 사용하여 배열 요소의 합을 알아보기

```js
const nums = [10, 20, 30, 40, 50];

const sum = nums.reduce((total, value) => total + value);
```

**출력**

```
150
```

### 6. Array.some()

`Array.some()` : **배열 요소 중 일부가 조건을 통과**하는지 여부를 확인하는 데 사용할 수 있다.

**예제**

배열에 30 이상의 요소가 있는지 확인하고, 조건을 충족하면 `true`를 반환 그렇지 않으면 `false`를 반환하는 예

```js
const nums = [10, 20, 30, 40, 50];

const over30 = nums.some(value => value > 30);
```

**출력**

```
true
```

:::info mdn web docs

<!-- prettier-ignore -->
```js
// Arrow function
some((element) => {/* … */});
some((element, index) => {/* … */});
some((element, index, array) => {/* … */});

// Callback function
some(callbackFn);
some(callbackFn, thisArg);

// Inline callback function
some(function (element) {/* … */});
some(function (element, index) {/* … */});
some(function (element, index, array) {/* … */});
some(function (element, index, array) {/* … */}, thisArg);
```

:::

### 7. Array.every()

`Array.every()` : **배열 요소 모두 조건을 통과**하는지 여부를 확인하는 데 사용 할 수 있습니다.

**예제**

배열에 30 이상의 요소가 있는지 확인하고, 조건을 충족하면 `true`를 반환 그렇지 않으면 `false`를 반환하는 예

```js
const nums = [10, 20, 30, 40, 50];

const over30 = nums.some(value => value > 30);
```

**출력**

```
false
```

:::info mdn web docs

<!-- prettier-ignore -->
```js
// Arrow function
every((element) => { /* … */ })
every((element, index) => { /* … */ })
every((element, index, array) => { /* … */ })

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function (element) { /* … */ })
every(function (element, index) { /* … */ })
every(function (element, index, array) { /* … */ })
every(function (element, index, array) { /* … */ }, thisArg)
```

:::

### 8. Array.find()

`Array.find()` : 주어진 **조건을 만족하는 첫 번째 배열 요소의 값**을 반환합니다.

예제

배열에 `30` 이상의 요소가 있는지 확인하고, 조건을 충족하면 `true`를 반환 그렇지 않으면 `false`를 반환하는 예

```js
const nums = [10, 20, 30, 40, 50];

const firstNum = nums.find(value => value > 30);
```

출력

```
40
```

:::info mdn web docs

<!-- prettier-ignore -->
```js
// Arrow function
find((element) => { /* … */ })
find((element, index) => { /* … */ })
find((element, index, array) => { /* … */ })

// Callback function
find(callbackFn)
find(callbackFn, thisArg)

// Inline callback function
find(function (element) { /* … */ })
find(function (element, index) { /* … */ })
find(function (element, index, array) { /* … */ })
find(function (element, index, array) { /* … */ }, thisArg)
```

:::

### 9. Array.findIndex()

`Array.findIndex()` : 주어진 **조건을 만족하는 첫 번째 배열 요소의 인덱스**을 반환합니다.

**예제**

배열에 `30` 이상의 요소가 있는지 확인하고, 조건을 충족하면 요소의 인덱스를 반환하는 예

```js
const nums = [10, 20, 30, 40, 50];

const firstIdx = nums.findIndex(value => value > 30);
```

**출력**

```
3
```

:::info mdn web docs

<!-- prettier-ignore -->
```js
// Arrow function
findIndex((element) => { /* … */ })
findIndex((element, index) => { /* … */ })
findIndex((element, index, array) => { /* … */ })

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function (element) { /* … */ })
findIndex(function (element, index) { /* … */ })
findIndex(function (element, index, array) { /* … */ })
findIndex(function (element, index, array) { /* … */ }, thisArg)
```

:::

### 10. Array.indexOf()

`Array.indexOf()` : 배열 내에서 요소를 검색하고 해당 위치를 반환합니다. 배열 요소의 위치를 ​​반환하며 발견된 요소의 첫 번째 항목을 반환합니다. 요소를 찾지 못하면 `-1`을 반환합니다.

**예제**

배열에서 `Dolly`의 위치 찾기

```js
const names = ['Frank', 'Charles', 'Dolly', 'Robert', 'Bob'];

const pos = names.indexOf('Dolly');
```

**출력**

```
2
```

:::info mdn web docs

```js
indexOf(searchElement);
indexOf(searchElement, fromIndex);
```

:::

### 11. Array.lastIndexOf()

`Array.indexOf()` : 배열의 끝에서부터 요소를 검색합니다.

**예제**

배열에서 `Dolly`의 위치 찾기

```js
const names = ['Frank', 'Charles', 'Dolly', 'Robert', 'Bob'];

const pos = names.indexOf('Dolly');
```

**출력**

```
2
```

:::info mdn web docs

<!-- prettier-ignore -->
```js
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

:::

---

## 결론

다양한 유형의 JavaScript 배열 반복 메서드에 대해 살펴보았습니다. 앞에 살펴본 메서드들은 일상적인 프로그래밍에 정말 유용한데 이를 사용하여 다양한 작업을 손쉽게 수행할 수 도 있고. 보다 선언적인 코드를 만들어 나가는데 큰 도움이 되므로 잘 활용하면 좋을 것 같습니다.

> **원문 및 참고자료**
>
> https://www.zeptobook.com/eleven-ways-to-learn-javascript-array-iteration-effectively/  
> https://developer.mozilla.org/en-US/search?q=array
