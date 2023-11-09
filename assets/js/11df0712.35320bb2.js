"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[6864],{6959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(5893),o=n(1151);const r={title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",authors:"5kdk",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",tags:["Web","Core Web Vitals"],keywords:["\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8","Core Web Vitals","\uc6f9 \ucd5c\uc801\ud654","SEO","Lighthouse","Unlighthouse","Web vitals extension","Speed Insights"],enableComments:!0},i=void 0,a={permalink:"/blog/2023/11/01/measure-core-web-vitals",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-11-01-measure-core-web-vitals.md",source:"@site/blog/2023-11-01-measure-core-web-vitals.md",title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",date:"2023-11-01T00:00:00.000Z",formattedDate:"2023\ub144 11\uc6d4 1\uc77c",tags:[{label:"Web",permalink:"/blog/tags/web"},{label:"Core Web Vitals",permalink:"/blog/tags/core-web-vitals"}],readingTime:11.775,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd UX Engineer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",authors:"5kdk",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",tags:["Web","Core Web Vitals"],keywords:["\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8","Core Web Vitals","\uc6f9 \ucd5c\uc801\ud654","SEO","Lighthouse","Unlighthouse","Web vitals extension","Speed Insights"],enableComments:!0},unlisted:!1,prevItem:{title:"Next.js\ub97c \uc911\uc2ec\uc73c\ub85c \ud55c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \ucd5c\uc801\ud654",permalink:"/blog/2023/11/09/improving-cwv-nextjs"},nextItem:{title:"\uc6f9 \uc131\ub2a5 \uc9c0\ud45c, \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8(CWV)",permalink:"/blog/2023/10/24/core-web-vitals"}},l={authorsImageUrls:[void 0]},c=[];function b(e){const t={a:"a",blockquote:"blockquote",br:"br",em:"em",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\uc774\uc804 \ud3ec\uc2a4\ud305\uc5d0\uc11c \uc0b4\ud3b4\ubcf8 ",(0,s.jsx)(t.strong,{children:'"Core Web Vitals"'}),", \uac01\uc790\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \uac1c\uc120\ud558\uae30 \uc704\ud55c \uccab \ub2e8\uacc4\ub85c \uc5b4\ub5bb\uac8c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \uce21\uc815\ud560 \uc218 \uc788\ub294 \uc9c0\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790."]}),"\n",(0,s.jsx)(t.p,{children:"\uc774\uac83\uc800\uac83 \ucc3e\uc544\ubcf4\uace0 \uc815\ub9ac\ud558\ub2e4 \ubcf4\ub2c8 \ud06c\uac8c \uac1c\ubc1c \uc2dc \uc720\uc6a9\ud55c \uce21\uc815 \ub3c4\uad6c\ub4e4\uacfc \uc9c0\uc18d\uc801\uc778 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \ub3c4\uad6c\ub4e4\ub85c \ub098\ub204\uc5b4\uc84c\ub2e4."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\uc774\uc804 \ud3ec\uc2a4\ud305:"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"/blog/2023/10/24/core-web-vitals",children:"\uc6f9 \uc131\ub2a5 \uc9c0\ud45c, \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8(CWV)"})})]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(7294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);