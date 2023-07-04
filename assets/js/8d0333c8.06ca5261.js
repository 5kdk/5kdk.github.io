"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",authors:"5kdk",tags:["React","React-router"],enableComments:!0},i=void 0,l={permalink:"/blog/2023/06/17/useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \uc0ac\uc6a9\uc131 \uac1c\uc120",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-06-17-useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \uc0ac\uc6a9\uc131 \uac1c\uc120.md",source:"@site/blog/2023-06-17-useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \uc0ac\uc6a9\uc131 \uac1c\uc120.md",title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",description:"\uc6d0\ud2f0\ub4dc \ud504\ub9ac\uc628\ubcf4\ub529 \uc0ac\uc804\uacfc\uc81c\ub97c \uc9c4\ud589\ud558\uba70 \uc5ec\ub7ec \ub9ac\ub2e4\uc774\ub809\ud2b8 \uc791\uc5c5\uc774 \ud544\uc694\ud588\uc2b5\ub2c8\ub2e4.",date:"2023-06-17T00:00:00.000Z",formattedDate:"2023\ub144 6\uc6d4 17\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"React-router",permalink:"/blog/tags/react-router"}],readingTime:6.015,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"Collaborative FE developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",authors:"5kdk",tags:["React","React-router"],enableComments:!0},prevItem:{title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",permalink:"/blog/2023/07/04/useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c"},nextItem:{title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",permalink:"/blog/2022/12/15/useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/5kdk/wanted-pre-onboarding-frontend/tree/main"},"\uc6d0\ud2f0\ub4dc \ud504\ub9ac\uc628\ubcf4\ub529 \uc0ac\uc804\uacfc\uc81c"),"\ub97c \uc9c4\ud589\ud558\uba70 \uc5ec\ub7ec \ub9ac\ub2e4\uc774\ub809\ud2b8 \uc791\uc5c5\uc774 \ud544\uc694\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Root")," \ucef4\ud3ec\ub10c\ud2b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," \uacbd\ub85c \uc811\uadfc\uc2dc ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn")," \ud398\uc774\uc9c0\ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8\ub97c \ud558\uace0 \uc788\uc5c8\uc73c\uba70 \ub77c\uc6b0\ud305 \uc2dc ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn"),"\uacfc ",(0,a.kt)("inlineCode",{parentName:"p"},"Todo")," \ud398\uc774\uc9c0\ub294 \ub85c\uadf8\uc778 \uc5ec\ubd80\uc5d0 \ub530\ub77c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ucc98\ub9ac\ub97c \ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationGuard"),"\uac00 \uac10\uc2f8\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub85c \ub77c\uc6b0\ud305\uc744 \ud560 \ub54c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ub85c\uc9c1\uc73c\ub85c \uc778\ud574 \ub4a4\ub85c\uac00\uae30\uac00 \uc81c\ub300\ub85c \ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uacac\ub418\uc5c8\uace0, \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub97c \uc880 \ub354 \uaf3c\uaf3c\ud558\uac8c \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);