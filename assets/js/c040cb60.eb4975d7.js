"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[2967],{7816:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/04/04/index-signatures-and-duck-typing","editUrl":"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2024-04-04-index-signatures-and-duck-typing.md","source":"@site/blog/2024-04-04-index-signatures-and-duck-typing.md","title":"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\ucc98\uc640 Object.keys \uadf8\ub9ac\uace0 \ub355 \ud0c0\uc774\ud551","description":"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\ucc98\uc640 Object.keys\uc758 \ubc18\ud658 \ud0c0\uc785\uacfc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub355 \ud0c0\uc774\ud551 \uad00\uacc4\ub97c \uc54c\uc544\ubcf8\ub2e4.","date":"2024-04-04T00:00:00.000Z","tags":[{"inline":true,"label":"TypeScript","permalink":"/blog/tags/type-script"}],"readingTime":7.12,"hasTruncateMarker":true,"authors":[{"name":"Dongkyu Kim","title":"Front-end Developer","url":"https://github.com/5kdk","imageURL":"https://github.com/5kdk.png","key":"5kdk","page":null}],"frontMatter":{"title":"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\ucc98\uc640 Object.keys \uadf8\ub9ac\uace0 \ub355 \ud0c0\uc774\ud551","authors":"5kdk","description":"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\ucc98\uc640 Object.keys\uc758 \ubc18\ud658 \ud0c0\uc785\uacfc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub355 \ud0c0\uc774\ud551 \uad00\uacc4\ub97c \uc54c\uc544\ubcf8\ub2e4.","tags":["TypeScript"],"keywords":["\uad6c\uc870\uc801 \uc11c\ube0c\ud0c0\uc774\ud551","\ub355 \ud0c0\uc774\ud551","\uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\ucc98","\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4 \ud0c0\uc785 \ucd94\ub860"],"comments":true},"unlisted":false,"prevItem":{"title":"Yarn v4, Next.js \ud658\uacbd \uc138\ud305\uacfc \ub9c8\uc8fc\ud588\ub358 \uc774\uc288\ub4e4","permalink":"/blog/2024/04/23/yarn-v4-nextjs-issues"},"nextItem":{"title":"\uc54c\uc544\ub450\uba74 \uc720\uc6a9\ud55c 11\uac00\uc9c0 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785","permalink":"/blog/2024/03/02/utility-type"}}')},8356:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6672);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},9955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var s=n(7816),r=n(3420),i=n(8356);const o={title:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\ucc98\uc640 Object.keys \uadf8\ub9ac\uace0 \ub355 \ud0c0\uc774\ud551",authors:"5kdk",description:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\ucc98\uc640 Object.keys\uc758 \ubc18\ud658 \ud0c0\uc785\uacfc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub355 \ud0c0\uc774\ud551 \uad00\uacc4\ub97c \uc54c\uc544\ubcf8\ub2e4.",tags:["TypeScript"],keywords:["\uad6c\uc870\uc801 \uc11c\ube0c\ud0c0\uc774\ud551","\ub355 \ud0c0\uc774\ud551","\uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\ucc98","\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4 \ud0c0\uc785 \ucd94\ub860"],comments:!0},a=void 0,c={authorsImageUrls:[void 0]},d=[];function p(e){const t={br:"br",code:"code",em:"em",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Element implicitly has an 'any' type because expression of type 'string'"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.em,{children:"can't be used to index type 'data'"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.em,{children:"No index signature with a parameter of type 'string' was found on type 'Data'"})]}),"\n",(0,r.jsxs)(t.p,{children:["\uac1d\uccb4\uc758 \ud0a4 \ubc30\uc5f4\uc744 \ubf51\uc544\ub0c8\uc9c0\ub9cc, ",(0,r.jsx)(t.code,{children:"string[]"})," \ud0c0\uc785\uc73c\ub85c \uac15\uc81c\ub418\uc5b4 \uc704\uc640 \uac19\uc740 \uc5d0\ub7ec\ub97c \ub9cc\ub09c \uc801\uc774 \uc788\uc744 \uac83\uc774\ub2e4."]}),"\n",(0,r.jsx)(t.p,{children:"\uc774\ub97c \uc774\ud574\ud558\uae30 \uc704\ud574 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc778\ub371\uc2a4 \uc2dc\uadf8\ub2c8\ucc98\uc640 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub355 \ud0c0\uc774\ud551 \uad00\uacc4\ub97c \uc54c\uc544\ubcf4\uc790."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);