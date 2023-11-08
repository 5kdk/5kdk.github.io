"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),f=a,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"\ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc",authors:"5kdk",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 for \ubb38\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uc544\ubcf4\uc790",tags:["JavaScript"],keywords:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","Reduce","Map","\ubc18\ubcf5 \uba54\uc11c\ub4dc"],enableComments:!0},i=void 0,c={permalink:"/blog/2022/11/11/11-array-iteration-methods",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2022-11-11-11-array-iteration-methods.md",source:"@site/blog/2022-11-11-11-array-iteration-methods.md",title:"\ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 for \ubb38\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uc544\ubcf4\uc790",date:"2022-11-11T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 11\uc77c",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:10.985,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd UX Engineer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"\ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc",authors:"5kdk",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 for \ubb38\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uc544\ubcf4\uc790",tags:["JavaScript"],keywords:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","Reduce","Map","\ubc18\ubcf5 \uba54\uc11c\ub4dc"],enableComments:!0},prevItem:{title:"key\uac00 \ud544\uc694\ud55c \uc774\uc720\uc640 \uc8fc\uc758\ud560 \uc810",permalink:"/blog/2022/12/10/react-key-props"}},p={authorsImageUrls:[void 0]},l=[],u={toc:l},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc774 \ud3ec\uc2a4\ud305\uc740 \ud574\uc678 \uc800\uc790\uc758 \uae00\uc744 \uc694\uc57d \ubc0f \ubc88\uc5ed\ud558\uace0 \uc0b4\uc744 \ubd99\uc5ec \uc62e\uae34\ub2e4. \ud544\uc790\uac00 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucc98\uc74c \uc811\ud558\uace0 \ubc30\uc5f4\uc744 \ub9c9 \ub2e4\ub8e8\uae30 \uc2dc\uc791\ud560 \ub54c\uc5d0 \ud070 \ub3c4\uc6c0\uc774 \ub418\uc5c8\ub2e4. \uc6d0\ubb38\uc740 \ud558\ub2e8 \ub9c1\ud06c\ub85c \ub0a8\uae34\ub2e4."),(0,a.kt)("p",null,"\uc774\uc81c\ubd80\ud130 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc6d0\ubb38 \uc800\uc790\uc758 \uc11c\ubb38:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Javascript\uc758 \uc77c\uc0c1\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c\ub294 \ubc30\uc5f4 \uc694\uc18c\uc5d0 \ub300\ud574 \uc77c\uc885\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4.\xa0\ubc30\uc5f4\uc758 \uac01 \ud56d\ubaa9\uc744 \ucc98\ub9ac\ud558\ub294 \uac83\uc740 \ub9e4\uc6b0 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4.\xa0\ub530\ub77c\uc11c \uac01 \ubc30\uc5f4 \uc694\uc18c\uc758 \ucc98\ub9ac\ub97c \ub354 \uc27d\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uae30 \uc704\ud574 Javascript\ub294 Iteration \uba54\uc11c\ub4dc\uc758 \ud798\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))))}m.isMDXComponent=!0}}]);