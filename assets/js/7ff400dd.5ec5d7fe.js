"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),k=o,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||r;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const r={title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",authors:"5kdk",tags:["React"],enableComments:!0},l=void 0,i={permalink:"/blog/2023/07/04/necessary-with-usememo-and-usecallback",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-07-04-necessary-with-usememo-and-usecallback.md",source:"@site/blog/2023-07-04-necessary-with-usememo-and-usecallback.md",title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",description:"useCallback\uacfc useMemo\ub294 \ub9ac\uc561\ud2b8\uc758 \ucd5c\uc801\ud654\ub97c \uc9c0\uc6d0\ud558\ub294 Hook\ub4e4\uc774\ub2e4. \ub450 Hook \ubaa8\ub450 '\ucd5c\uc801\ud654'\ub77c\ub294 \ud0a4\uc6cc\ub4dc\uac00 \uc788\uc5b4 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\uba74 \uc190\ud574\ub77c\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\ub2e4. (\ud544\uc790 \uc5ed\uc2dc \ucc98\uc74c\uc5d4 \uadf8\ub807\uac8c \uc0dd\uac01\ud588\uc5c8\ub2e4...)",date:"2023-07-04T00:00:00.000Z",formattedDate:"2023\ub144 7\uc6d4 4\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:7.645,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd UX Engineer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",authors:"5kdk",tags:["React"],enableComments:!0},prevItem:{title:"\ub77c\uc774\ube0c\ub7ec\ub9ac \uc5c6\uc774 \ub85c\uceec \uce90\uc2f1 \uad6c\ud604\ud558\uae30",permalink:"/blog/2023/07/23/caching-technique-without-libraries"},nextItem:{title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",permalink:"/blog/2023/06/17/usenavigate-options"}},p={authorsImageUrls:[void 0]},m=[{value:"\ub0a8\uc6a9\ud558\uc9c0 \ub9d0\uc544\uc57c\ud560 \uc774\uc720",id:"\ub0a8\uc6a9\ud558\uc9c0-\ub9d0\uc544\uc57c\ud560-\uc774\uc720",level:2},{value:"useCallback\uacfc useMemo\ub97c \uc0ac\uc6a9\ud558\uae30 \uc88b\uc740 \uc0c1\ud669",id:"usecallback\uacfc-usememo\ub97c-\uc0ac\uc6a9\ud558\uae30-\uc88b\uc740-\uc0c1\ud669",level:2},{value:"\uc608\uc2dc 1: <code>useCallback</code>\uc744 \ud65c\uc6a9\ud55c \uc758\uc874\uc131 \ubc30\uc5f4\uc758 \ud568\uc218 \ucc38\uc870",id:"\uc608\uc2dc-1-usecallback\uc744-\ud65c\uc6a9\ud55c-\uc758\uc874\uc131-\ubc30\uc5f4\uc758-\ud568\uc218-\ucc38\uc870",level:3},{value:"\uc608\uc2dc 2: \ubcf5\uc7a1\ud55c \uacc4\uc0b0\uc5d0\uc11c\uc758 <code>useMemo</code>",id:"\uc608\uc2dc-2-\ubcf5\uc7a1\ud55c-\uacc4\uc0b0\uc5d0\uc11c\uc758-usememo",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],s={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \ub9ac\uc561\ud2b8\uc758 \ucd5c\uc801\ud654\ub97c \uc9c0\uc6d0\ud558\ub294 Hook\ub4e4\uc774\ub2e4. \ub450 Hook \ubaa8\ub450 '\ucd5c\uc801\ud654'\ub77c\ub294 \ud0a4\uc6cc\ub4dc\uac00 \uc788\uc5b4 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\uba74 \uc190\ud574\ub77c\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\ub2e4. ",(0,o.kt)("del",{parentName:"p"},"(\ud544\uc790 \uc5ed\uc2dc \ucc98\uc74c\uc5d4 \uadf8\ub807\uac8c \uc0dd\uac01\ud588\uc5c8\ub2e4...)")),(0,o.kt)("p",null,"\uc0ac\uc2e4, \uc774 \ud6c5\ub4e4\uc740 \uc8fc\ub85c \uc131\ub2a5 \uac1c\uc120\uc744 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\uc9c0\ub9cc, \ud56d\uc0c1 \uc131\ub2a5\uc774 \ud5a5\uc0c1\ub418\ub294 \uac83\uc740 \uc544\ub2d0 \uc218 \uc788\ub2e4."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"useCallback")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc740 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc640 \uac19\uc740 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158(memorization)\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 Hook\uc774\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1\ub420 \ub54c\ub9c8\ub2e4 \ud568\uc218\ub97c \uc0c8\ub85c \uc0dd\uc131\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uace0, \uc774\uc804\uc5d0 \uc0dd\uc131\ud55c \ud568\uc218\ub97c \uc7ac\uc0ac\uc6a9\ud558\uc5ec \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \uc904\uc5ec\uc900\ub2e4."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"useMemo")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \ub80c\ub354\ub9c1 \uc911\uc5d0 \ubc1c\uc0dd\ud558\ub294 \uc5f0\uc0b0\ub7c9\uc774 \ud070 \ud568\uc218\uc758 \uacb0\uacfc\uac12\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uba70, \uc774\uc804 \uacb0\uacfc\uac12\uc744 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc900\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ub0a8\uc6a9\ud558\uc9c0-\ub9d0\uc544\uc57c\ud560-\uc774\uc720"},"\ub0a8\uc6a9\ud558\uc9c0 \ub9d0\uc544\uc57c\ud560 \uc774\uc720"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \uc131\ub2a5 \ucd5c\uc801\ud654\uc758 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\uae34 \ud558\uc9c0\ub9cc, \ubb34\ubd84\ubcc4\ud558\uac8c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc624\ud788\ub824 \uc131\ub2a5 \uc800\ud558\ub97c \ucd08\ub798\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\uba54\ubaa8\uc774\uc81c\uc774\uc158 \uc790\uccb4\uc758 \ube44\uc6a9"),": \uc774 \ub450 Hook\uc744 \uc0ac\uc6a9\ud558\uba74 \ud568\uc218\uc640 \uacc4\uc0b0 \uacb0\uacfc\ub97c \uce90\uc2f1\ud558\uae30 \uc704\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc774 \ub298\uc5b4\ub09c\ub2e4. \uac8c\ub2e4\uac00, \uc0c8\ub86d\uac8c \uacc4\uc0b0\ub418\ub294 \uac12\uc774 \uc77c\uc815 \uae30\uac04 \ub3d9\uc548 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc544\ub3c4 \uba54\ubaa8\ub9ac\uc5d0 \ub0a8\uc544 \uc788\uc5b4\uc57c \ud558\ubbc0\ub85c \uba54\ubaa8\ub9ac \uad00\ub9ac\uc758 \uce21\uba74\uc5d0\uc11c \ube44\ud6a8\uc728\uc801\uc77c \uc218 \uc788\ub2e4. (\uac00\ube44\uc9c0 \uceec\ub809\ud130\uac00 \ubb34\uc2dc)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\uc758\uc874\uc131 \ubc30\uc5f4\uc758 \uad00\ub9ac"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \uc758\uc874\uc131 \ubc30\uc5f4\uc774 \ud544\uc694\ud55c\ub370, \uc774 \ubc30\uc5f4\uc5d0 \ub4e4\uc5b4\uac04 \uac12\ub4e4\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uba54\ubaa8\uc774\uc81c\uc774\uc158 \ub41c \uac12\uc744 \ubb34\ud6a8\ud654\ud558\uace0 \uc0c8\ub85c \uacc4\uc0b0\ud55c\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c \ubcf5\uc7a1\uc131\uc774 \uc99d\uac00\ud558\uba70, \uad00\ub9ac\uac00 \ubbf8\ud761\ud55c \uacbd\uc6b0 \uc624\ud788\ub824 \uc131\ub2a5\uc774 \uc800\ud558\ub420 \uc218 \uc788\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\ub0a8\uc6a9\uc5d0 \ub530\ub978 \uc2e4\uc218"),": \ubb34\ubd84\ubcc4\ud55c \uc0ac\uc6a9\uc73c\ub85c \uc778\ud574 \ubaa8\ub4e0 \ud568\uc218\ub098 \uacb0\uacfc\uac12\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\ub824 \ud560 \ub54c \uc2e4\uc218\uac00 \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \ub192\uc544\uc9c4\ub2e4. \uc774\ub85c \uc778\ud574 \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \uae30\ub300\ud558\ub294 \ub300\uc2e0 \ubc84\uadf8\ub098 \uc131\ub2a5 \uc800\ud558\ub97c \ucd08\ub798\ud560 \uc218 \uc788\ub294 \uc0c1\ud669\uc774 \uc0dd\uae38 \uc218 \uc788\ub2e4."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"usecallback\uacfc-usememo\ub97c-\uc0ac\uc6a9\ud558\uae30-\uc88b\uc740-\uc0c1\ud669"},"useCallback\uacfc useMemo\ub97c \uc0ac\uc6a9\ud558\uae30 \uc88b\uc740 \uc0c1\ud669"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\uc544\ub798 \uc774\uc5b4\uc9c0\ub294 \ucf54\ub4dc\ub294 \ub2e8\uc21c \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc791\uc131\ub41c \ud83d\udca9 \ucf54\ub4dc\ub4e4\uc774\ub2e4. \uac1c\ub150\ub9cc \uc54c\uace0 \ub118\uc5b4\uac00\uc790!")),(0,o.kt)("h3",{id:"\uc608\uc2dc-1-usecallback\uc744-\ud65c\uc6a9\ud55c-\uc758\uc874\uc131-\ubc30\uc5f4\uc758-\ud568\uc218-\ucc38\uc870"},"\uc608\uc2dc 1: ",(0,o.kt)("inlineCode",{parentName:"h3"},"useCallback"),"\uc744 \ud65c\uc6a9\ud55c \uc758\uc874\uc131 \ubc30\uc5f4\uc758 \ud568\uc218 \ucc38\uc870"),(0,o.kt)("p",null,"\ud070 \ubaa9\ub85d\uc744 \ub80c\ub354\ub9c1\ud558\ub294 \uad6c\uc131 \uc694\uc18c\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport useSearch from './fetch-items';\n\nconst MyBigList = React.memo(({ term, onItemClick }) => {\n  const items = useSearch(term);\n\n  return (\n    <div>\n      {items.map(item => (\n        <div key={item.id} onClick={onItemClick}>\n          {item.contents}\n        </div>\n      ))}\n    </div>\n  );\n});\n\nconst MyParent = ({ term }) => {\n  const onItemClick = useCallback(\n    event => {\n      console.log('You clicked ', event.currentTarget);\n    },\n    //highlight-next-line\n    [term]\n  );\n\n  return <MyBigList term={term} onItemClick={onItemClick} />;\n};\n")),(0,o.kt)("p",null,"\ubaa9\ub85d\uc740 \uc218\ubc31 \uc218\ucc9c \uac1c\uc758 \ud56d\ubaa9\uc77c \uc218 \uc788\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"<MyBigList>"),"\uac00 \ub2e4\uc2dc \ub80c\ub354\ub9c1\ub418\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\ub824\uba74 \ubaa9\ub85d\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub85c \uac10\uc2f8 \uba54\ubaa8\uc774\uc81c\uc774\uc158 \ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\ub294 props\uac00 \ub3d9\uc77c\ud558\ub2e4\uba74 \ub9ac\ub80c\ub354\ub9c1 \ub418\uc9c0 \uc54a\ub294\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),"\uac00 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\uae30 \uc704\ud574\uc11c props\ub97c \ub3d9\uc77c\ud558\uac8c \uc720\uc9c0\ud558\uc5ec\uc57c \ud55c\ub2e4. \ud558\uc9c0\ub9cc React \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub0b4\ubd80 \ud568\uc218\ub4e4\uc740 \ub80c\ub354\ub9c1 \ub420 \ub54c \ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 \ud568\uc218\ub97c \uc0dd\uc131\ud558\uae30 \ub54c\ubb38\uc5d0 \ubaa8\ub450 \ub2e4\ub978 \ucc38\uc870 \uac12\uc744 \uac00\uc9c4\ub2e4."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud568\uc218\ub294 \uc77c\uae09 '\uac1d\uccb4'\ub2e4."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const a = 'a';\nconst a2 = 'a';\n\na === a2; // true\n\nconst f = () => console.log('f');\nconst f2 = () => console.log('f');\n\nf === f2; // false\n\n(() => console.log('f')) === (() => console.log('f')); // false\n"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"onItemClick"),"\uc744 \uac10\uc2f8\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"term"),"\uc774 \ubc14\ub00c\uc9c0 \uc54a\ub294 \uc774\uc0c1 \uc0c8\ub85c \ud568\uc218\ub97c \ub9cc\ub4e4\uc9c0 \uc54a\uc544 \ub3d9\uc77c\ud55c \ucc38\uc870\ub97c \uac00\uc9c0\uac8c \ub41c\ub2e4. \uc774\ub97c \ud1b5\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\ub85c \uc804\ub2ec\ud55c ",(0,o.kt)("inlineCode",{parentName:"p"},"onItemClick")," \ud568\uc218\uc758 \ub3d9\uc77c\uc131\uc744 \ubcf4\uc7a5\ud558\uace0 \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyBigList"),"\uc758 \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"\uc774\ucc98\ub7fc \uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ucc38\uc870\ub97c \ub3d9\uc77c\ud558\uac8c \uc720\uc9c0\ud558\uc5ec\uc57c \ud558\ubbc0\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\uc608\uc2dc-2-\ubcf5\uc7a1\ud55c-\uacc4\uc0b0\uc5d0\uc11c\uc758-usememo"},"\uc608\uc2dc 2: \ubcf5\uc7a1\ud55c \uacc4\uc0b0\uc5d0\uc11c\uc758 ",(0,o.kt)("inlineCode",{parentName:"h3"},"useMemo")),(0,o.kt)("p",null,"\ubcf5\uc7a1\ud55c \uacc4\uc0b0\uc744 \ud558\ub294 \uc791\uc5c5\uc774 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uc790. \uc608\uc81c\uc560\uc11c\ub294 \uacf1\ud558\uae30 \uc5f0\uc0b0\uc73c\ub85c \ub300\uccb4\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, useMemo } from \'react\';\n\nconst expensiveCalculation = (a, b) => {\n  // \ubcf5\uc7a1\ud558\uace0 \uae38\uace0 \ube44\uc6a9\uc774 \ub9ce\uc774 \ub4dc\ub294 \ucf54\ub4dc\u2026\n  return a * b;\n};\n\nconst Calculator = ({ a, b }) => {\n  const result = useMemo(() => expensiveCalculation(a, b), [a, b]);\n\n  return <div>\uacb0\uacfc\uac12: {result}</div>;\n};\n\nconst App = () => {\n  const [a, setA] = useState(5);\n  const [b, setB] = useState(10);\n\n  return (\n    <div>\n      <input\n        type="number"\n        value={a}\n        onChange={e => setA(parseInt(e.target.value))}\n      />\n      <input\n        type="number"\n        value={b}\n        onChange={e => setB(parseInt(e.target.value))}\n      />\n      <Calculator a={a} b={b} />\n    </div>\n  );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"\uac12\uc744 \uc785\ub825\ud558\ub294 \uc785\ub825\ub780\uc758 \ubcc0\ud654\uc5d0 \ub530\ub77c ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," \uac12\uc774 \ubcc0\uacbd\ub418\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"expensiveCalculation"),"\uc774 \uc2e4\ud589\ub41c\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),"\uac00 \uc2e4\uc81c\ub85c \ubcc0\uacbd\ub420 \ub54c\ub9cc \uacc4\uc0b0\uc744 \uc2e4\ud589\ud558\uace0, \uc774\uc804 \uacb0\uacfc\uac12\uc744 \uce90\uc2f1\ud558\uc5ec \ubd88\ud544\uc694\ud55c \uc5f0\uc0b0\uc744 \ubc29\uc9c0\ud55c\ub2e4. (",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),"\ub97c \uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \ud3ec\ud568\ud558\uc5ec \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0\uc5d0\ub9cc ",(0,o.kt)("inlineCode",{parentName:"p"},"expensiveCalculation"),"\uc744 \ud638\ucd9c)"),(0,o.kt)("p",null,"React \uacf5\uc2dd\ubb38\uc11c\uc5d0 \ub530\ub974\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \ube44\uc6a9\uc774 \ub9ce\uc774 \ub4dc\ub294 \uacc4\uc0b0\uc744 \uce90\uc2f1\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \ud6c5\uc774\uba70, ",(0,o.kt)("strong",{parentName:"p"},'"\ube44\uc6a9\uc774 \ub9ce\uc774 \ub4dc\ub294 \uacc4\uc0b0"'),"\uc758 \uc608\ub85c \uc218\ucc9c \uac1c\uc758 \uac1d\uccb4\ub97c \ub9cc\ub4e4\uac70\ub098 \ubc18\ubcf5\ud574\uc57c \uc77c\uc744 ",(0,o.kt)("strong",{parentName:"p"},'"\ube44\uc6a9\uc774 \ub9ce\uc774\ub4dc\ub294 \uacc4\uc0b0"'),"\uc774\ub77c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0 \ucd94\uc0c1\ud654(\ubc0f \uc131\ub2a5 \ucd5c\uc801\ud654)\uc5d0\ub294 \ube44\uc6a9\uc774 \ub530\ub978\ub2e4."))),(0,o.kt)("p",null,"\ub9d0 \uadf8\ub300\ub85c \ucd5c\uc801\ud654\uc5d0\ub294 \uacf5\uc9dc\uac00 \uc5c6\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub294 \uc2e0\uc911\ud558\uac8c \uc0ac\uc6a9\ub418\uc5b4\uc57c \ud558\uace0, \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc801\uc6a9\ud558\uc5ec \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ucd94\uad6c\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,o.kt)("p",null,"\uc9c4\uc9dc \uc131\ub2a5 \uc774\uc288\uac00 \uc788\ub294 \uacf3\uc5d0\uc11c\ub9cc \ud574\ub2f9 Hook \ub4e4\uc744 \uc0ac\uc6a9\ud558\uace0, \ub300\ubd80\ubd84\uc758 \uc0c1\ud669\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ud3b8\uc774 \uc131\ub2a5, \uac00\ub3c5\uc131 \uce21\uba74\uc5d0 \uc774\uc810\uc774 \uc788\uc744 \uac83\uc774\ub2e4!"))}c.isMDXComponent=!0}}]);