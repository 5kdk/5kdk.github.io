"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[7871],{573:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/10/18/suspense-for-data-fetching","editUrl":"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-10-18-suspense-for-data-fetching/index.md","source":"@site/blog/2023-10-18-suspense-for-data-fetching/index.md","title":"Suspense, Error Boundary\uc640 \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d","description":"\ube44\ub3d9\uae30\ucc98\ub9ac\uc5d0\uc11c\uc758 Suspense\uc640 ErrorBoundary \ud65c\uc6a9\ubc95.","date":"2023-10-18T00:00:00.000Z","tags":[{"inline":true,"label":"React","permalink":"/blog/tags/react"}],"readingTime":10.22,"hasTruncateMarker":true,"authors":[{"name":"Dongkyu Kim","title":"Front-end Developer","url":"https://github.com/5kdk","imageURL":"https://github.com/5kdk.png","key":"5kdk","page":null}],"frontMatter":{"title":"Suspense, Error Boundary\uc640 \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d","authors":"5kdk","description":"\ube44\ub3d9\uae30\ucc98\ub9ac\uc5d0\uc11c\uc758 Suspense\uc640 ErrorBoundary \ud65c\uc6a9\ubc95.","tags":["React"],"keywords":["Suspense","Error Boundary","\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d","\uc120\uc5b8\ud615 \ucef4\ud3ec\ub10c\ud2b8","\uad00\uc2ec\uc0ac \ubd84\ub9ac"],"comments":true},"unlisted":false,"prevItem":{"title":"\uc6f9 \uc131\ub2a5 \uc9c0\ud45c, \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8(CWV)","permalink":"/blog/2023/10/24/core-web-vitals"},"nextItem":{"title":"\ub77c\uc774\ube0c\ub7ec\ub9ac \uc5c6\uc774 \ub85c\uceec \uce90\uc2f1 \uad6c\ud604\ud558\uae30","permalink":"/blog/2023/07/23/caching-technique-without-libraries"}}')},3331:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(6672);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}},6977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>u});var n=r(573),o=r(3420),s=r(3331);const a={title:"Suspense, Error Boundary\uc640 \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d",authors:"5kdk",description:"\ube44\ub3d9\uae30\ucc98\ub9ac\uc5d0\uc11c\uc758 Suspense\uc640 ErrorBoundary \ud65c\uc6a9\ubc95.",tags:["React"],keywords:["Suspense","Error Boundary","\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d","\uc120\uc5b8\ud615 \ucef4\ud3ec\ub10c\ud2b8","\uad00\uc2ec\uc0ac \ubd84\ub9ac"],comments:!0},i=void 0,c={authorsImageUrls:[void 0]},u=[];function d(e){const t={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\ub370\uc774\ud130 \uc694\uccad \uc0c1\ud0dc\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \ub178\ucd9c\ub418\ub294 UX/UI \uc124\uacc4\ub294 \ub9ce\uc740 \uace0\ubbfc\uc744 \ud544\uc694\ub85c \ud55c\ub2e4. \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 React\ub294 \ub2e4\uc591\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\ub294\ub370, \uadf8 \uc911 ",(0,o.jsx)(t.code,{children:"Suspense"}),"\uc640 ",(0,o.jsx)(t.code,{children:"ErrorBoundary"}),"\ub97c \ud65c\uc6a9\ud55c \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d\uc774 \uc788\ub2e4."]}),"\n",(0,o.jsxs)(t.p,{children:["\uc9c0\uae08\ubd80\ud130 ",(0,o.jsx)(t.code,{children:"Suspense"}),"\uc640 ",(0,o.jsx)(t.code,{children:"ErrorBoundary"}),"\ub97c \ud65c\uc6a9\ud55c \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d\uc774 \uc5b4\ub5bb\uac8c \ud6a8\uacfc\uc801\uc778\uc9c0 \ud568\uaed8 \uc54c\uc544\ubcf4\uc790."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);