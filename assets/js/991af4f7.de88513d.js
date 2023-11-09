"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[5001],{3907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(5893),o=n(1151);const s={title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",authors:"5kdk",description:"\ub77c\uc6b0\ud305\uc2dc \ub4a4\ub85c\uac00\uae30 \uc624\ub958\ub97c \uace0\ucce4\ub358 \uacbd\ud5d8",keywords:["useNavigate","Navigate","React router dom","\ub4a4\ub85c\uac00\uae30"],tags:["React","React-router"],enableComments:!0},r=void 0,i={permalink:"/blog/2023/06/17/usenavigate-options",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-06-17-usenavigate-options.md",source:"@site/blog/2023-06-17-usenavigate-options.md",title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",description:"\ub77c\uc6b0\ud305\uc2dc \ub4a4\ub85c\uac00\uae30 \uc624\ub958\ub97c \uace0\ucce4\ub358 \uacbd\ud5d8",date:"2023-06-17T00:00:00.000Z",formattedDate:"2023\ub144 6\uc6d4 17\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"React-router",permalink:"/blog/tags/react-router"}],readingTime:6.435,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd UX Engineer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",authors:"5kdk",description:"\ub77c\uc6b0\ud305\uc2dc \ub4a4\ub85c\uac00\uae30 \uc624\ub958\ub97c \uace0\ucce4\ub358 \uacbd\ud5d8",keywords:["useNavigate","Navigate","React router dom","\ub4a4\ub85c\uac00\uae30"],tags:["React","React-router"],enableComments:!0},unlisted:!1,prevItem:{title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",permalink:"/blog/2023/07/04/necessary-with-usememo-and-usecallback"},nextItem:{title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",permalink:"/blog/2022/12/15/advanced-usage-of-useeffect-with-usecallback"}},c={authorsImageUrls:[void 0]},d=[];function l(e){const t={a:"a",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/5kdk/wanted-pre-onboarding-frontend/tree/main",children:"\uc6d0\ud2f0\ub4dc \ud504\ub9ac\uc628\ubcf4\ub529 \uc0ac\uc804\uacfc\uc81c"}),"\ub97c \uc9c4\ud589\ud558\uba70 \uc5ec\ub7ec \ub9ac\ub2e4\uc774\ub809\ud2b8 \uc791\uc5c5\uc774 \ud544\uc694\ud588\ub2e4."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Root"})," \ucef4\ud3ec\ub10c\ud2b8 ",(0,a.jsx)(t.code,{children:"/"})," \uacbd\ub85c \uc811\uadfc \uc2dc ",(0,a.jsx)(t.code,{children:"SignIn"})," \ud398\uc774\uc9c0\ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8\ub97c \ud558\uace0 \uc788\uc5c8\uc73c\uba70 \ub77c\uc6b0\ud305 \uc2dc ",(0,a.jsx)(t.code,{children:"SignIn"}),"\uacfc ",(0,a.jsx)(t.code,{children:"Todo"})," \ud398\uc774\uc9c0\ub294 \ub85c\uadf8\uc778 \uc5ec\ubd80\uc5d0 \ub530\ub77c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ucc98\ub9ac\ud558\ub294 \uace0\ucc28 \ucef4\ud3ec\ub10c\ud2b8 ",(0,a.jsx)(t.code,{children:"AuthenticationGuard"}),"\uac00 \uac10\uc2f8\uace0 \uc788\uc5c8\ub2e4."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"useNavigate"}),"\ub85c \ub77c\uc6b0\ud305\ud560 \ub54c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ub85c\uc9c1\uc73c\ub85c \uc778\ud574 \ub4a4\ub85c\uac00\uae30\uac00 \uc81c\ub300\ub85c \ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uacac\ub418\uc5c8\uace0, \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,a.jsx)(t.code,{children:"useNavigate"}),"\ub97c \uc880 \ub354 \uaf3c\uaf3c\ud558\uac8c \uc0b4\ud3b4\ubcf4\uac8c \ub418\uc5c8\ub2e4."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);