"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[6864],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(s,".").concat(m)]||u[m]||b[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",authors:"5kdk",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",tags:["Web","Core Web Vitals"],keywords:["\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8","Core Web Vitals","\uc6f9 \ucd5c\uc801\ud654","SEO","Lighthouse","Unlighthouse","Web vitals extension","Speed Insights"],enableComments:!0},i=void 0,l={permalink:"/blog/2023/11/01/measure-core-web-vitals",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-11-01-measure-core-web-vitals.md",source:"@site/blog/2023-11-01-measure-core-web-vitals.md",title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",date:"2023-11-01T00:00:00.000Z",formattedDate:"2023\ub144 11\uc6d4 1\uc77c",tags:[{label:"Web",permalink:"/blog/tags/web"},{label:"Core Web Vitals",permalink:"/blog/tags/core-web-vitals"}],readingTime:11.78,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd UX Engineer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",authors:"5kdk",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",tags:["Web","Core Web Vitals"],keywords:["\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8","Core Web Vitals","\uc6f9 \ucd5c\uc801\ud654","SEO","Lighthouse","Unlighthouse","Web vitals extension","Speed Insights"],enableComments:!0},nextItem:{title:"\uc6f9 \uc131\ub2a5 \uc9c0\ud45c, \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8(CWV)",permalink:"/blog/2023/10/24/core-web-vitals"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774\uc804 \ud3ec\uc2a4\ud305\uc5d0\uc11c \uc0b4\ud3b4\ubcf8 ",(0,o.kt)("strong",{parentName:"p"},'"Core Web Vitals"'),", \uac01\uc790\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \uac1c\uc120\ud558\uae30 \uc704\ud55c \uccab \ub2e8\uacc4\ub85c \uc5b4\ub5bb\uac8c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \uce21\uc815\ud560 \uc218 \uc788\ub294 \uc9c0\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790."),(0,o.kt)("p",null,"\uc774\uac83\uc800\uac83 \ucc3e\uc544\ubcf4\uace0 \uc815\ub9ac\ud558\ub2e4 \ubcf4\ub2c8 \ud06c\uac8c \uac1c\ubc1c \uc2dc \uc720\uc6a9\ud55c \uce21\uc815 \ub3c4\uad6c\ub4e4\uacfc \uc9c0\uc18d\uc801\uc778 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \ub3c4\uad6c\ub4e4\ub85c \ub098\ub204\uc5b4\uc84c\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\uc774\uc804 \ud3ec\uc2a4\ud305:"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"/blog/2023/10/24/core-web-vitals"},"\uc6f9 \uc131\ub2a5 \uc9c0\ud45c, \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8(CWV)")))))}b.isMDXComponent=!0}}]);