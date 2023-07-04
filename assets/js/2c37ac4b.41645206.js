"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(n),m=l,d=c["".concat(u,".").concat(m)]||c[m]||k[m]||o;return n?a.createElement(d,r(r({ref:t},s),{},{components:n})):a.createElement(d,r({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:l,r[1]=p;for(var i=2;i<o;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(7462),l=(n(7294),n(3905));const o={title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",authors:"5kdk",tags:["React"],enableComments:!0},r=void 0,p={permalink:"/blog/2023/07/04/useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-07-04-useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c.md",source:"@site/blog/2023-07-04-useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c.md",title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",description:"useCallback\uacfc useMemo\ub294 \ub9ac\uc561\ud2b8\uc758 \ucd5c\uc801\ud654\ub97c \ub3c4\uc640\uc8fc\ub294 Hook\ub4e4\uc785\ub2c8\ub2e4. \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \uc0ac\uc6a9\ub418\uc9c0\ub9cc, \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.",date:"2023-07-04T00:00:00.000Z",formattedDate:"2023\ub144 7\uc6d4 4\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:6.225,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"Collaborative FE developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",authors:"5kdk",tags:["React"],enableComments:!0},nextItem:{title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",permalink:"/blog/2023/06/17/useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \uc0ac\uc6a9\uc131 \uac1c\uc120"}},u={authorsImageUrls:[void 0]},i=[{value:"\ub0a8\uc6a9\ud558\uc9c0 \ub9d0\uc544\uc57c\ud560 \uc774\uc720",id:"\ub0a8\uc6a9\ud558\uc9c0-\ub9d0\uc544\uc57c\ud560-\uc774\uc720",level:2},{value:"useCallback\uacfc useMemo\ub97c \uc0ac\uc6a9\ud558\uae30 \uc88b\uc740 \uc0c1\ud669",id:"usecallback\uacfc-usememo\ub97c-\uc0ac\uc6a9\ud558\uae30-\uc88b\uc740-\uc0c1\ud669",level:2},{value:"\uc608\uc2dc 1: <code>useCallback</code>\uc744 \ud65c\uc6a9\ud55c \uc758\uc874\uc131 \ubc30\uc5f4\uc758 \ud568\uc218 \ucc38\uc870",id:"\uc608\uc2dc-1-usecallback\uc744-\ud65c\uc6a9\ud55c-\uc758\uc874\uc131-\ubc30\uc5f4\uc758-\ud568\uc218-\ucc38\uc870",level:3},{value:"\uc608\uc2dc 2: \ubcf5\uc7a1\ud55c \uacc4\uc0b0\uc5d0\uc11c\uc758 <code>useMemo</code>",id:"\uc608\uc2dc-2-\ubcf5\uc7a1\ud55c-\uacc4\uc0b0\uc5d0\uc11c\uc758-usememo",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],s={toc:i},c="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \ub9ac\uc561\ud2b8\uc758 \ucd5c\uc801\ud654\ub97c \ub3c4\uc640\uc8fc\ub294 Hook\ub4e4\uc785\ub2c8\ub2e4. \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \uc0ac\uc6a9\ub418\uc9c0\ub9cc, \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"useCallback")),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc740 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc640 \uac19\uc740 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158(memorization)\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 Hook\uc785\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1\ub420 \ub54c\ub9c8\ub2e4 \ud568\uc218\ub97c \uc0c8\ub85c \uc0dd\uc131\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uace0, \uc774\uc804\uc5d0 \uc0dd\uc131\ud55c \ud568\uc218\ub97c \uc7ac\uc0ac\uc6a9\ud558\uc5ec \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \uc904\uc5ec\uc90d\ub2c8\ub2e4.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"useMemo")),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \ub80c\ub354\ub9c1 \uc911\uc5d0 \ubc1c\uc0dd\ud558\ub294 \uc5f0\uc0b0\ub7c9\uc774 \ud070 \ud568\uc218\uc758 \uacb0\uacfc\uac12\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uba70, \uc774\uc804 \uacb0\uacfc\uac12\uc744 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\ub0a8\uc6a9\ud558\uc9c0-\ub9d0\uc544\uc57c\ud560-\uc774\uc720"},"\ub0a8\uc6a9\ud558\uc9c0 \ub9d0\uc544\uc57c\ud560 \uc774\uc720"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \uc131\ub2a5 \ucd5c\uc801\ud654\uc758 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\uae34 \ud558\uc9c0\ub9cc, \ubb34\ubd84\ubcc4\ud558\uac8c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc624\ud788\ub824 \uc131\ub2a5 \uc800\ud558\ub97c \ucd08\ub798\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\uba54\ubaa8\uc774\uc81c\uc774\uc158 \uc790\uccb4\uc758 \ube44\uc6a9"),": \uc774 \ub450 Hook\uc744 \uc0ac\uc6a9\ud558\uba74 \ud568\uc218\uc640 \uacc4\uc0b0 \uacb0\uacfc\ub97c \uce90\uc2f1\ud558\uae30 \uc704\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc774 \ub298\uc5b4\ub0a9\ub2c8\ub2e4. \uac8c\ub2e4\uac00, \uc0c8\ub86d\uac8c \uacc4\uc0b0\ub418\ub294 \uac12\uc774 \uc77c\uc815 \uae30\uac04\ub3d9\uc548 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc544\ub3c4 \uba54\ubaa8\ub9ac\uc5d0 \ub0a8\uc544 \uc788\uc5b4\uc57c \ud558\ubbc0\ub85c \uba54\ubaa8\ub9ac \uad00\ub9ac\uc758 \uce21\uba74\uc5d0\uc11c \ube44\ud6a8\uc728\uc801\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.(\uac00\ube44\uc9c0 \uceec\ub809\ud130\uac00 \ubb34\uc2dc)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\uc758\uc874\uc131 \ubc30\uc5f4\uc758 \uad00\ub9ac"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \uc758\uc874\uc131 \ubc30\uc5f4\uc774 \ud544\uc694\ud55c\ub370, \uc774 \ubc30\uc5f4\uc5d0 \ub4e4\uc5b4\uac04 \uac12\ub4e4\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ub41c \uac12\uc744 \ubb34\ud6a8\ud654\ud558\uace0 \uc0c8\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c \ubcf5\uc7a1\uc131\uc774 \uc99d\uac00\ud558\uba70, \uad00\ub9ac\uac00 \ubbf8\ud761\ud55c \uacbd\uc6b0 \uc624\ud788\ub824 \uc131\ub2a5\uc774 \uc800\ud558\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\ub0a8\uc6a9\uc5d0 \ub530\ub978 \uc2e4\uc218"),": \ubb34\ubd84\ubcc4\ud55c \uc0ac\uc6a9\uc73c\ub85c \uc778\ud574 \ubaa8\ub4e0 \ud568\uc218\ub098 \uacb0\uacfc\uac12\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\ub824 \ud560 \ub54c \uc2e4\uc218\uac00 \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \ub192\uc544\uc9d1\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \uae30\ub300\ud558\ub294 \ub300\uc2e0 \ubc84\uadf8\ub098 \uc131\ub2a5 \uc800\ud558\ub97c \ucd08\ub798\ud560 \uc218 \uc788\ub294 \uc0c1\ud669\uc774 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"usecallback\uacfc-usememo\ub97c-\uc0ac\uc6a9\ud558\uae30-\uc88b\uc740-\uc0c1\ud669"},"useCallback\uacfc useMemo\ub97c \uc0ac\uc6a9\ud558\uae30 \uc88b\uc740 \uc0c1\ud669"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\uc544\ub798 \uc774\uc5b4\uc9c0\ub294 \ucf54\ub4dc\ub294 \ub2e8\uc21c \uc608\uc2dc\uc5d0 \ub300\ud55c \uc774\ud574\ub97c \ub3d5\uae30\uc704\ud574 \uc791\uc131\ub41c \ud83d\udca9 \ucf54\ub4dc\uc785\ub2c8\ub2e4. \uc774\uc810 \ucc38\uace0\ubc14\ub78d\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\uc608\uc2dc-1-usecallback\uc744-\ud65c\uc6a9\ud55c-\uc758\uc874\uc131-\ubc30\uc5f4\uc758-\ud568\uc218-\ucc38\uc870"},"\uc608\uc2dc 1: ",(0,l.kt)("inlineCode",{parentName:"h3"},"useCallback"),"\uc744 \ud65c\uc6a9\ud55c \uc758\uc874\uc131 \ubc30\uc5f4\uc758 \ud568\uc218 \ucc38\uc870"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState, useCallback } from 'react';\n\nconst ExpensiveCalculationButton = ({ onClick }) => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = useCallback(() => {\n    onClick();\n    setCount(prevCount => prevCount + 1);\n  }, [onClick]);\n\n  return (\n    <button type=\"button\" onClick={handleClick}>\n      \ud074\ub9ad\ud69f\uc218: {count}\n    </button>\n  );\n};\n\nconst App = () => {\n  const [result, setResult] = useState(0);\n  const onClick = useCallback(\n    () => setResult(prevResult => prevResult + 1),\n    []\n  );\n\n  return (\n    <div>\n      <ExpensiveCalculationButton onClick={onClick} />\n      \uacb0\uacfc\uac12: {result}\n    </div>\n  );\n};\n\nexport default App;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc744 \uc0ac\uc6a9\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"handleClick"),"\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"onClick")," \uc18d\uc131\uacfc \uad00\ub828\ub41c \ub3d9\uc77c\ud55c \ucc38\uc870\uac12\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\ud568\uc218\ub294 \uac1d\uccb4 \uc785\ub2c8\ub2e4!"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const a = 'a';\nconst a2 = 'a';\n\na === a2; // true\n\nconst f = () => console.log(f);\nconst f2 = () => console.log(f);\n\nf === f2; // false\n"))),(0,l.kt)("h3",{id:"\uc608\uc2dc-2-\ubcf5\uc7a1\ud55c-\uacc4\uc0b0\uc5d0\uc11c\uc758-usememo"},"\uc608\uc2dc 2: \ubcf5\uc7a1\ud55c \uacc4\uc0b0\uc5d0\uc11c\uc758 ",(0,l.kt)("inlineCode",{parentName:"h3"},"useMemo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, useMemo } from \'react\';\n\nconst expensiveCalculation = (a, b) => {\n  // \uae38\uace0 \ubcf5\uc7a1\ud55c \ucf54\ub4dc\u2026\n  return a * b;\n};\n\nconst Calculator = ({ a, b }) => {\n  const result = useMemo(() => expensiveCalculation(a, b), [a, b]);\n\n  return <div>\uacb0\uacfc\uac12: {result}</div>;\n};\n\nconst App = () => {\n  const [a, setA] = useState(5);\n  const [b, setB] = useState(10);\n\n  return (\n    <div>\n      <input\n        type="number"\n        value={a}\n        onChange={e => setA(parseInt(e.target.value))}\n      />\n      <input\n        type="number"\n        value={b}\n        onChange={e => setB(parseInt(e.target.value))}\n      />\n      <Calculator a={a} b={b} />\n    </div>\n  );\n};\n\nexport default App;\n')),(0,l.kt)("p",null,"\uac12\uc744 \uc785\ub825\ud558\ub294 \uc785\ub825\ub780\uc758 \ubcc0\ud654\uc5d0 \ub530\ub77c ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"b")," \uac12\uc774 \ubcc0\uacbd\ub418\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"expensiveCalculation"),"\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\uac00 \uc2e4\uc81c\ub85c \ubcc0\uacbd\ub420 \ub54c\ub9cc \uacc4\uc0b0\uc744 \uc2e4\ud589\ud558\uace0, \uc774\uc804 \uacb0\uacfc\ub97c \uce90\uc2dc\ud558\uc5ec \ubd88\ud544\uc694\ud55c \uc5f0\uc0b0\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4.(",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\ub97c \uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \ud3ec\ud568\ud558\uc5ec \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0\uc5d0\ub9cc ",(0,l.kt)("inlineCode",{parentName:"p"},"expensiveCalculation"),"\uc744 \ud638\ucd9c)"),(0,l.kt)("p",null,"React \uacf5\uc2dd\ubb38\uc11c\uc5d0 \ub530\ub974\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \ube44\uc6a9\uc774 \ub9ce\uc774\ub4dc\ub294 \uacc4\uc0b0\uc744 \uce90\uc2f1\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \ud6c5\uc774\uba70, ",(0,l.kt)("strong",{parentName:"p"},'"\ube44\uc6a9\uc774 \ub9ce\uc774 \ub4dc\ub294 \uacc4\uc0b0"'),"\uc758 \uc608\ub85c \uc218\ucc9c \uac1c\uc758 \uac1d\uccb4\ub97c \ub9cc\ub4e4\uac70\ub098 \ubc18\ubcf5\ud574\uc57c \uc77c\uc744 ",(0,l.kt)("strong",{parentName:"p"},'"\ube44\uc6a9\uc774 \ub9ce\uc774\ub4dc\ub294 \uacc4\uc0b0"'),"\uc774\ub77c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc0c1\ud669\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ud3b8\uc774 \uc131\ub2a5, \uac00\ub3c5\uc131 \uce21\uba74\uc5d0 \uc774\uc810\uc774 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ubaa8\ub4e0 \ucd94\uc0c1\ud654(\ubc0f \uc131\ub2a5 \ucd5c\uc801\ud654)\uc5d0\ub294 \ube44\uc6a9\uc774 \ub530\ub978\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \uc2e0\uc911\ud558\uac8c \uc0ac\uc6a9\ub418\uc5b4\uc57c \ud558\uace0, \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc801\uc6a9\ud558\uc5ec \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ucd94\uad6c\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc9c4\uc9dc \uc131\ub2a5 \uc774\uc288\uac00 \uc788\ub294 \uacf3\uc5d0\uc11c\ub9cc \ud574\ub2f9 Hook\uc744 \uc0ac\uc6a9\ud558\uace0, \uadf8 \uc678\uc758 \uacbd\uc6b0\uc5d0\ub294 \ub2e4\ub978 \ucd5c\uc801\ud654 \uae30\ubc95\uc744 \uc801\uc6a9\ud558\ub294 \uac83\uc744 \uace0\ub824\ud574\ubd05\uc2dc\ub2e4."))}k.isMDXComponent=!0}}]);