"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),b=a,f=s["".concat(l,".").concat(b)]||s[b]||m[b]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"\ub77c\uc774\ube0c\ub7ec\ub9ac \uc5c6\uc774 \ub85c\uceec \uce90\uc2f1 \uad6c\ud604\ud558\uae30",authors:"5kdk",tags:["React","SWR","React-Query"],enableComments:!0},c=void 0,i={permalink:"/blog/2023/07/23/caching-technique-without-libraries",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-07-23-caching-technique-without-libraries/index.md",source:"@site/blog/2023-07-23-caching-technique-without-libraries/index.md",title:"\ub77c\uc774\ube0c\ub7ec\ub9ac \uc5c6\uc774 \ub85c\uceec \uce90\uc2f1 \uad6c\ud604\ud558\uae30",description:"SWR, React-query \uac19\uc740 data fetching \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc740 \uae30\ubcf8\uc801\uc73c\ub85c fetch\ud55c \ub370\uc774\ud130\uc5d0 \ub300\ud55c \uce90\uc2f1 \uae30\ub2a5\uc744 \uc81c\uacf5\ud55c\ub2e4.",date:"2023-07-23T00:00:00.000Z",formattedDate:"2023\ub144 7\uc6d4 23\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"SWR",permalink:"/blog/tags/swr"},{label:"React-Query",permalink:"/blog/tags/react-query"}],readingTime:16.13,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"Collaborative FE developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"\ub77c\uc774\ube0c\ub7ec\ub9ac \uc5c6\uc774 \ub85c\uceec \uce90\uc2f1 \uad6c\ud604\ud558\uae30",authors:"5kdk",tags:["React","SWR","React-Query"],enableComments:!0},nextItem:{title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",permalink:"/blog/2023/07/04/necessary-with-usememo-and-usecallback"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SWR, React-query \uac19\uc740 data fetching \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc740 \uae30\ubcf8\uc801\uc73c\ub85c fetch\ud55c \ub370\uc774\ud130\uc5d0 \ub300\ud55c \uce90\uc2f1 \uae30\ub2a5\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc774 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 \uc11c\ubc84 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \uce90\uc2f1 \uae30\ub2a5\uc744 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc5c6\uc774 \uc9c1\uc811 \uad6c\ud604\ud574\ubcf4\uba74\uc11c \uc774\ud574\ud574\ubcf8\ub2e4."))}m.isMDXComponent=!0}}]);