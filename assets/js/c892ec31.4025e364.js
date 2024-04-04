"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[7457],{9875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(5893),o=n(1151);const r={title:"Next.js\ub97c \uc911\uc2ec\uc73c\ub85c \ud55c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \ucd5c\uc801\ud654",authors:"5kdk",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",tags:["Web","Core Web Vitals","Next.js"],keywords:["\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8","Core Web Vitals","\uc6f9 \ucd5c\uc801\ud654","SEO","Lighthouse","next.js \ucd5c\uc801\ud654"],enableComments:!0},i=void 0,l={permalink:"/blog/2023/11/09/improving-cwv-nextjs",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-11-09-improving-cwv-nextjs.md",source:"@site/blog/2023-11-09-improving-cwv-nextjs.md",title:"Next.js\ub97c \uc911\uc2ec\uc73c\ub85c \ud55c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \ucd5c\uc801\ud654",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",date:"2023-11-09T00:00:00.000Z",tags:[{label:"Web",permalink:"/blog/tags/web"},{label:"Core Web Vitals",permalink:"/blog/tags/core-web-vitals"},{label:"Next.js",permalink:"/blog/tags/next-js"}],readingTime:19.92,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"Front-end Developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"Next.js\ub97c \uc911\uc2ec\uc73c\ub85c \ud55c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \ucd5c\uc801\ud654",authors:"5kdk",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",tags:["Web","Core Web Vitals","Next.js"],keywords:["\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8","Core Web Vitals","\uc6f9 \ucd5c\uc801\ud654","SEO","Lighthouse","next.js \ucd5c\uc801\ud654"],enableComments:!0},unlisted:!1,prevItem:{title:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive \uc194\uc9c1 \ud6c4\uae30",permalink:"/blog/2023/11/24/modern-react-deep-dive-review"},nextItem:{title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",permalink:"/blog/2023/11/01/measure-core-web-vitals"}},a={authorsImageUrls:[void 0]},c=[];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",em:"em",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\uc774\uc804 \ud3ec\uc2a4\ud305\uc5d0\uc11c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uace0, \uc6f9\uc744 \uac1c\uc120\ud558\uae30 \uc704\ud574 \uc5b4\ub5bb\uac8c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \uce21\uc815\ud560 \uc218 \uc788\ub294\uc9c0\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc558\ub2e4. \ub450 \ubc88\uc9f8 \ub2e8\uacc4\ub85c, \uce21\uc815\ud55c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \uc5b4\ub5bb\uac8c \uac1c\uc120\ud560\uc9c0 \uc54c\uc544\ubcf4\uc790."}),"\n",(0,s.jsx)(t.p,{children:"\ud604\uc7ac \ub2f4\ub2f9\ud558\uace0 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \uac1c\ubc1c \ud658\uacbd\uc778 Next.js \ub97c \uae30\uc900\uc73c\ub85c \uc815\ub9ac\ud574 \ubcf4\uc558\ub2e4."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\uc774\uc804 \ud3ec\uc2a4\ud305:"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"/blog/2023/10/24/core-web-vitals",children:"\uc6f9 \uc131\ub2a5 \uc9c0\ud45c, \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8(CWV)"})}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"/blog/2023/11/01/measure-core-web-vitals",children:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c"})})]}),"\n"]})]})}function b(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(7294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);