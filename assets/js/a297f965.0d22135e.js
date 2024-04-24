"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[5478],{8964:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(4848),o=n(8453);const a={title:"\ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc",authors:"5kdk",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 for \ubb38\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uc544\ubcf4\uc790",tags:["JavaScript"],keywords:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","Reduce","Map","\ubc18\ubcf5 \uba54\uc11c\ub4dc"],enableComments:!0},s=void 0,i={permalink:"/blog/2022/11/11/11-array-iteration-methods",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2022-11-11-11-array-iteration-methods.md",source:"@site/blog/2022-11-11-11-array-iteration-methods.md",title:"\ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 for \ubb38\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uc544\ubcf4\uc790",date:"2022-11-11T00:00:00.000Z",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:10.95,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"Front-end Developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"\ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc",authors:"5kdk",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 for \ubb38\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uc544\ubcf4\uc790",tags:["JavaScript"],keywords:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","Reduce","Map","\ubc18\ubcf5 \uba54\uc11c\ub4dc"],enableComments:!0},unlisted:!1,prevItem:{title:"key\uac00 \ud544\uc694\ud55c \uc774\uc720\uc640 \uc8fc\uc758\ud560 \uc810",permalink:"/blog/2022/12/10/react-key-props"}},c={authorsImageUrls:[void 0]},l=[];function d(t){const e={blockquote:"blockquote",br:"br",em:"em",p:"p",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\uc774 \ud3ec\uc2a4\ud305\uc740 \ud574\uc678 \uc800\uc790\uc758 \uae00\uc744 \uc694\uc57d \ubc0f \ubc88\uc5ed\ud558\uace0 \uc0b4\uc744 \ubd99\uc5ec \uc62e\uae34\ub2e4. \ud544\uc790\uac00 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucc98\uc74c \uc811\ud558\uace0 \ubc30\uc5f4\uc744 \ub9c9 \ub2e4\ub8e8\uae30 \uc2dc\uc791\ud560 \ub54c\uc5d0 \ud070 \ub3c4\uc6c0\uc774 \ub418\uc5c8\ub2e4. \uc6d0\ubb38\uc740 \ud558\ub2e8 \ub9c1\ud06c\ub85c \ub0a8\uae34\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"\uc774\uc81c\ubd80\ud130 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790!"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\uc6d0\ubb38 \uc800\uc790\uc758 \uc11c\ubb38:",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.em,{children:"Javascript\uc758 \uc77c\uc0c1\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c\ub294 \ubc30\uc5f4 \uc694\uc18c\uc5d0 \ub300\ud574 \uc77c\uc885\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4.\xa0\ubc30\uc5f4\uc758 \uac01 \ud56d\ubaa9\uc744 \ucc98\ub9ac\ud558\ub294 \uac83\uc740 \ub9e4\uc6b0 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4.\xa0\ub530\ub77c\uc11c \uac01 \ubc30\uc5f4 \uc694\uc18c\uc758 \ucc98\ub9ac\ub97c \ub354 \uc27d\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uae30 \uc704\ud574 Javascript\ub294 Iteration \uba54\uc11c\ub4dc\uc758 \ud798\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."})]}),"\n"]})]})}function p(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var r=n(6540);const o={},a=r.createContext(o);function s(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);