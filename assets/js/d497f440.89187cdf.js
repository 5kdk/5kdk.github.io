"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?a.createElement(b,l(l({ref:t},s),{},{components:r})):a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",authors:"5kdk",tags:["React"],enableComments:!0},l=void 0,c={permalink:"/blog/2022/12/15/useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2022-12-15-useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30.md",source:"@site/blog/2022-12-15-useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30.md",title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",description:"useCallback\uc740 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158(memoization)\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ub418\ub294 Hook\ub4e4 \uc785\ub2c8\ub2e4. React\uc758 useCallback\uc744 useEffect\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubc29\uba74\uc73c\ub85c \ud6a8\uc728\uc801\uc778 \ucf54\ub4dc\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. useCallback\uc740 useEffect\uc640 \uc0dd\uae34 \uac83\uc740 \ub611\uac19\uc9c0\ub9cc, \uc5ed\ud560\uc740 \uc870\uae08 \ub2e4\ub985\ub2c8\ub2e4.",date:"2022-12-15T00:00:00.000Z",formattedDate:"2022\ub144 12\uc6d4 15\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:4.115,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"Collaborative FE developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",authors:"5kdk",tags:["React"],enableComments:!0},prevItem:{title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",permalink:"/blog/2023/06/17/useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \uc0ac\uc6a9\uc131 \uac1c\uc120"}},i={authorsImageUrls:[void 0]},u=[],s={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useCallback"},(0,n.kt)("inlineCode",{parentName:"a"},"useCallback")),"\uc740 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158(memoization)\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ub418\ub294 Hook\ub4e4 \uc785\ub2c8\ub2e4. React\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc744 ",(0,n.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useEffect"},(0,n.kt)("inlineCode",{parentName:"a"},"useEffect")),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubc29\uba74\uc73c\ub85c \ud6a8\uc728\uc801\uc778 \ucf54\ub4dc\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. ",(0,n.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uc640 \uc0dd\uae34 \uac83\uc740 \ub611\uac19\uc9c0\ub9cc, \uc5ed\ud560\uc740 \uc870\uae08 \ub2e4\ub985\ub2c8\ub2e4."))}f.isMDXComponent=!0}}]);