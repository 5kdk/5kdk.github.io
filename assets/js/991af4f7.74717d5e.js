"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[1],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",authors:"5kdk",tags:["React","React-router"],enableComments:!0},i=void 0,l={permalink:"/blog/2023/06/17/usenavigate-options",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-06-17-usenavigate-options.md",source:"@site/blog/2023-06-17-usenavigate-options.md",title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",description:"\uc6d0\ud2f0\ub4dc \ud504\ub9ac\uc628\ubcf4\ub529 \uc0ac\uc804\uacfc\uc81c\ub97c \uc9c4\ud589\ud558\uba70 \uc5ec\ub7ec \ub9ac\ub2e4\uc774\ub809\ud2b8 \uc791\uc5c5\uc774 \ud544\uc694\ud588\ub2e4.",date:"2023-06-17T00:00:00.000Z",formattedDate:"2023\ub144 6\uc6d4 17\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"React-router",permalink:"/blog/tags/react-router"}],readingTime:6.395,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"Collaborative FE developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",authors:"5kdk",tags:["React","React-router"],enableComments:!0},prevItem:{title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",permalink:"/blog/2023/07/04/necessary-with-usememo-and-usecallback"},nextItem:{title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",permalink:"/blog/2022/12/15/advanced-usage-of-useeffect-with-usecallback"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/5kdk/wanted-pre-onboarding-frontend/tree/main"},"\uc6d0\ud2f0\ub4dc \ud504\ub9ac\uc628\ubcf4\ub529 \uc0ac\uc804\uacfc\uc81c"),"\ub97c \uc9c4\ud589\ud558\uba70 \uc5ec\ub7ec \ub9ac\ub2e4\uc774\ub809\ud2b8 \uc791\uc5c5\uc774 \ud544\uc694\ud588\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Root")," \ucef4\ud3ec\ub10c\ud2b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," \uacbd\ub85c \uc811\uadfc \uc2dc ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn")," \ud398\uc774\uc9c0\ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8\ub97c \ud558\uace0 \uc788\uc5c8\uc73c\uba70 \ub77c\uc6b0\ud305 \uc2dc ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn"),"\uacfc ",(0,a.kt)("inlineCode",{parentName:"p"},"Todo")," \ud398\uc774\uc9c0\ub294 \ub85c\uadf8\uc778 \uc5ec\ubd80\uc5d0 \ub530\ub77c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ucc98\ub9ac\ud558\ub294 \uace0\ucc28 \ucef4\ud3ec\ub10c\ud2b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationGuard"),"\uac00 \uac10\uc2f8\uace0 \uc788\uc5c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub85c \ub77c\uc6b0\ud305\ud560 \ub54c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ub85c\uc9c1\uc73c\ub85c \uc778\ud574 \ub4a4\ub85c\uac00\uae30\uac00 \uc81c\ub300\ub85c \ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uacac\ub418\uc5c8\uace0, \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub97c \uc880 \ub354 \uaf3c\uaf3c\ud558\uac8c \uc0b4\ud3b4\ubcf4\uac8c \ub418\uc5c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \uae00\uc744 \ubcfc \ub54c\ucbe4\uc774\uba74 \uc774\ubbf8 \uc774 \ubb38\uc81c\ub97c \ubc1c\uacac\ud588\uc744 \ud14c\uc9c0\ub9cc, \uc544\ub2c8\ub77c\uba74 \uc790\uc2e0\uc758 \ud504\ub85c\uc81d\ud2b8 \uc778\uc99d\uacfc \uad00\ub828\ub41c \ub9ac\ub2e4\uc774\ub809\ud305\uc744 \uc218\ud589\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \ucf1c\uace0 \ub85c\uadf8\uc778 \ud6c4 \ub4a4\ub85c\uac00\uae30\ub97c \uc0b4\ud3ec\uc2dc \ub20c\ub7ec\ubcf4\uc2dc\ub77c! (\ud504\ub9ac\uc628\ubcf4\ub529 \ud300\uc6d0 \uc911\uc5d0\uc11c\ub3c4 \uac19\uc740 \uc774\uc288\ub97c \ucc3e\uc73c\uc2e0 \ubd84\uc774 \uacc4\uc2e0\ub2e4.)"))}m.isMDXComponent=!0}}]);