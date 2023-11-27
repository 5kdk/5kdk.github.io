"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[6070],{2750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(5893),o=n(1151);const r={title:"\uc88b\uc740 \ucf54\ub4dc\ub97c \uc704\ud55c ESLint \uc815\uc801 \ubd84\uc11d \ub525 \ub2e4\uc774\ube0c",authors:"5kdk",description:"\uc88b\uc740 \ub9ac\uc561\ud2b8 \ucf54\ub4dc \uc791\uc131\uc744 \uc704\ud55c \ud658\uacbd \uad6c\ucd95\ud558\uae30, ESLint\ub97c \ud65c\uc6a9\ud55c \uc815\uc801 \ubd84\uc11d\uc744 \uc54c\uc544\ubd05\ub2c8\ub2e4.",tags:["ESLint","JavaScript","TypeScript","React","Next.js"],keywords:["ESLint","\ub9ac\uc561\ud2b8 \ud658\uacbd \uad6c\ucd95","ESLint \uc124\uc815","\uc88b\uc740 \ub9ac\uc561\ud2b8 \ucf54\ub4dc \uc791\uc131\uc744 \uc704\ud55c \ud658\uacbd \uad6c\ucd95\ud558\uae30"],enableComments:!0},s=void 0,a={permalink:"/blog/2023/11/26/eslint-deep-dive",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-11-26-eslint-deep-dive.md",source:"@site/blog/2023-11-26-eslint-deep-dive.md",title:"\uc88b\uc740 \ucf54\ub4dc\ub97c \uc704\ud55c ESLint \uc815\uc801 \ubd84\uc11d \ub525 \ub2e4\uc774\ube0c",description:"\uc88b\uc740 \ub9ac\uc561\ud2b8 \ucf54\ub4dc \uc791\uc131\uc744 \uc704\ud55c \ud658\uacbd \uad6c\ucd95\ud558\uae30, ESLint\ub97c \ud65c\uc6a9\ud55c \uc815\uc801 \ubd84\uc11d\uc744 \uc54c\uc544\ubd05\ub2c8\ub2e4.",date:"2023-11-26T00:00:00.000Z",formattedDate:"2023\ub144 11\uc6d4 26\uc77c",tags:[{label:"ESLint",permalink:"/blog/tags/es-lint"},{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"TypeScript",permalink:"/blog/tags/type-script"},{label:"React",permalink:"/blog/tags/react"},{label:"Next.js",permalink:"/blog/tags/next-js"}],readingTime:22.485,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd Front-end Developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"\uc88b\uc740 \ucf54\ub4dc\ub97c \uc704\ud55c ESLint \uc815\uc801 \ubd84\uc11d \ub525 \ub2e4\uc774\ube0c",authors:"5kdk",description:"\uc88b\uc740 \ub9ac\uc561\ud2b8 \ucf54\ub4dc \uc791\uc131\uc744 \uc704\ud55c \ud658\uacbd \uad6c\ucd95\ud558\uae30, ESLint\ub97c \ud65c\uc6a9\ud55c \uc815\uc801 \ubd84\uc11d\uc744 \uc54c\uc544\ubd05\ub2c8\ub2e4.",tags:["ESLint","JavaScript","TypeScript","React","Next.js"],keywords:["ESLint","\ub9ac\uc561\ud2b8 \ud658\uacbd \uad6c\ucd95","ESLint \uc124\uc815","\uc88b\uc740 \ub9ac\uc561\ud2b8 \ucf54\ub4dc \uc791\uc131\uc744 \uc704\ud55c \ud658\uacbd \uad6c\ucd95\ud558\uae30"],enableComments:!0},unlisted:!1,nextItem:{title:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive \uc194\uc9c1 \ud6c4\uae30",permalink:"/blog/2023/11/24/modern-react-deep-dive-review"}},l={authorsImageUrls:[void 0]},c=[];function p(e){const t={blockquote:"blockquote",em:"em",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:'"\uac1c\ubc1c\uc790\uc5d0\uac8c \ubc84\uadf8\ub780 \ud56d\uc0c1 \ub530\ub77c\ub2e4\ub2c8\ub294 \uadf8\ub9bc\uc790\uc640 \uac19\ub2e4. \ubaa8\ub4e0 \uac1c\ubc1c\uc790\ub4e4\uc774 \ubc84\uadf8\uac00 \uc5c6\ub294 \uc81c\ud488\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \ucd5c\uc120\uc744 \ub2e4\ud558\uc9c0\ub9cc \ub298 \uadf8\ub807\ub4ef \ubc84\uadf8\ub294 \uc608\uae30\uce58 \ubabb\ud55c \uacf3\uc5d0\uc11c \ub9e4\ubc88 \ubc1c\uc0dd\ud55c\ub2e4."'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive \uc911"})})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\ubc84\uadf8\uc640 \uc608\uae30\uce58 \ubabb\ud55c \uc791\ub3d9\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud55c \uc5ec\ub7ec \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\ub294\ub370, \uadf8\uc911 \uac00\uc7a5 \ube60\ub974\uac8c \uc2dc\ub3c4\ud574 \ubcfc \uc218 \uc788\ub294 \ubc29\ubc95\uc740 \uc815\uc801 \ucf54\ub4dc \ubd84\uc11d\uc774\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc0dd\ud0dc\uacc4\uc5d0 \uac00\uc7a5 \ub9ce\uc774 \uc0ac\uc6a9\ub418\ub294 \uc815\uc801 \ucf54\ub4dc \ubd84\uc11d \ub3c4\uad6c ESLint\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\uba74 \uc88b\uc744\uc9c0 \uc0b4\ud3b4\ubcf4\uc790."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);