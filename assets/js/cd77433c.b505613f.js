"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[2633],{2262:e=>{e.exports=JSON.parse('{"permalink":"/blog/2022/12/15/advanced-usage-of-useeffect-with-usecallback","editUrl":"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2022-12-15-advanced-usage-of-useeffect-with-usecallback.md","source":"@site/blog/2022-12-15-advanced-usage-of-useeffect-with-usecallback.md","title":"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30","description":"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30","date":"2022-12-15T00:00:00.000Z","tags":[{"inline":true,"label":"React","permalink":"/blog/tags/react"}],"readingTime":4.04,"hasTruncateMarker":true,"authors":[{"name":"Dongkyu Kim","title":"Front-end Developer","url":"https://github.com/5kdk","imageURL":"https://github.com/5kdk.png","key":"5kdk","page":null}],"frontMatter":{"title":"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30","authors":"5kdk","tags":["React"],"description":"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30","keywords":["useCallback","useEffect","useEffect \uc2ec\ud654"],"comments":true},"unlisted":false,"prevItem":{"title":"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120","permalink":"/blog/2023/06/17/usenavigate-options"},"nextItem":{"title":"key\uac00 \ud544\uc694\ud55c \uc774\uc720\uc640 \uc8fc\uc758\ud560 \uc810","permalink":"/blog/2022/12/10/react-key-props"}}')},3331:(e,c,s)=>{s.d(c,{R:()=>t,x:()=>d});var l=s(6672);const n={},a=l.createContext(n);function t(e){const c=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function d(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),l.createElement(a.Provider,{value:c},e.children)}},6312:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>r});var l=s(2262),n=s(3420),a=s(3331);const t={title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",authors:"5kdk",tags:["React"],description:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",keywords:["useCallback","useEffect","useEffect \uc2ec\ud654"],comments:!0},d=void 0,i={authorsImageUrls:[void 0]},r=[{value:"\uc608\uc81c\ub85c \ubcf4\ub294 useEffect\xa0\uc2ec\ud654\xa0\ud65c\uc6a9",id:"\uc608\uc81c\ub85c-\ubcf4\ub294-useeffect\uc2ec\ud654\ud65c\uc6a9",level:2},{value:"useCallback\uc744 useEffect\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \uc608",id:"usecallback\uc744-useeffect\uc640-\ud568\uaed8-\uc0ac\uc6a9\ud558\ub294-\uc608",level:3},{value:"\uc5ec\uae30\uc11c useCallback\uc740 \uc65c \uc0ac\uc6a9\ud560\uae4c?",id:"\uc5ec\uae30\uc11c-usecallback\uc740-\uc65c-\uc0ac\uc6a9\ud560\uae4c",level:2},{value:"state\uac00 \ubc14\ub014 \ub54c\ub9c8\ub2e4 \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc640\uc57c \ud558\ub294 \uacbd\uc6b0",id:"state\uac00-\ubc14\ub014-\ub54c\ub9c8\ub2e4-\ub370\uc774\ud130\ub97c-\ubc1b\uc544\uc640\uc57c-\ud558\ub294-\uacbd\uc6b0",level:3},{value:"1. useEffect\ub9cc \uc0ac\uc6a9\ud558\ub294 \uc608",id:"1-useeffect\ub9cc-\uc0ac\uc6a9\ud558\ub294-\uc608",level:4},{value:"2. useEffect + useCallback \uc870\ud569\ud55c \uc608",id:"2-useeffect--usecallback-\uc870\ud569\ud55c-\uc608",level:4},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function o(e){const c={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.a,{href:"https://react.dev/reference/react/useCallback",children:(0,n.jsx)(c.code,{children:"useCallback"})}),"\uc740 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158(memoization) \ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ub418\ub294 Hook \ub4e4\uc774\ub2e4. React\uc758 ",(0,n.jsx)(c.code,{children:"useCallback"}),"\uc744 ",(0,n.jsx)(c.a,{href:"https://react.dev/reference/react/useEffect",children:(0,n.jsx)(c.code,{children:"useEffect"})}),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubc29\uba74\uc73c\ub85c \ud6a8\uc728\uc801\uc778 \ucf54\ub4dc\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc788\ub2e4. ",(0,n.jsx)(c.code,{children:"useCallback"}),"\uc740 ",(0,n.jsx)(c.code,{children:"useEffect"}),"\uc640 \uc0dd\uae34 \uac83\uc740 \ub611\uac19\uc9c0\ub9cc, \uc5ed\ud560\uc740 \uc870\uae08 \ub2e4\ub974\ub2e4."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(c.hr,{}),"\n",(0,n.jsx)(c.h2,{id:"\uc608\uc81c\ub85c-\ubcf4\ub294-useeffect\uc2ec\ud654\ud65c\uc6a9",children:"\uc608\uc81c\ub85c \ubcf4\ub294 useEffect\xa0\uc2ec\ud654\xa0\ud65c\uc6a9"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-jsx",children:"const memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);\n"})}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"useCallback"}),"\uc744 \uc0b4\ud3b4\ubcf4\uc790\uba74 \uccab \ubc88\uc9f8 \uc778\uc790\ub85c \ucf5c\ubc31\ud568\uc218\ub97c \ub123\uc5b4\uc8fc\uace0, \ub450 \ubc88\uc9f8\ub85c \uc778\uc790\ub85c \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \ub123\uc5b4\uc900\ub2e4. ",(0,n.jsx)(c.code,{children:"a"}),"\ub098 ",(0,n.jsx)(c.code,{children:"b"}),"\uac00 \ubc14\ub00c\uc5c8\uc744 \ub54c\ub9cc ",(0,n.jsx)(c.code,{children:"useCallback"}),"\uc758 \ucf5c\ubc31 \ud568\uc218\ub97c \uc0c8\ub85c \uc0dd\uc131\ud558\uace0, \uadf8\ub807\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \ucf5c\ubc31 \ud568\uc218\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\ub294\ub2e4."]}),"\n",(0,n.jsx)(c.h3,{id:"usecallback\uc744-useeffect\uc640-\ud568\uaed8-\uc0ac\uc6a9\ud558\ub294-\uc608",children:"useCallback\uc744 useEffect\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \uc608"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-jsx",children:"const memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n  // highlight-start\n}, [a, b]);\n// highlight-end\n\n// highlight-start\nuseEffect(() => {\n  memoizedCallback();\n}, [memoizedCallback]);\n// highlight-end\n"})}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"useEffect"}),"\uc758 \uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 ",(0,n.jsx)(c.code,{children:"memoizedCallback"}),"\uc774 \uc788\uace0, \ucf5c\ubc31\ud568\uc218\uc5d0\uc11c ",(0,n.jsx)(c.code,{children:"memoizedCallback"}),"\uc744 \ud638\ucd9c\ud558\uace0 \uc788\ub2e4."]}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"memoizedCallback"}),"\ub294 ",(0,n.jsx)(c.code,{children:"a"}),", ",(0,n.jsx)(c.code,{children:"b"}),"\uc5d0 \uc758\uc874\uc801\uc774\ubbc0\ub85c, ",(0,n.jsx)(c.code,{children:"a"}),"\uc640 ",(0,n.jsx)(c.code,{children:"b"}),"\uac00 \ubcc0\uacbd\uc774 \uc0dd\uacbc\uc744 \ub54c\ub9cc \uc0dd\uc131\ub420 \uac83\uc774\uace0, ",(0,n.jsx)(c.code,{children:"useEffect"}),"\ub294 ",(0,n.jsx)(c.code,{children:"memoizedCallback"}),"\uc774 \uc0c8\ub85c \uc0dd\uc131\ub418\uc5c8\uc744 \ub54c ",(0,n.jsx)(c.code,{children:"memoizedCallback"}),"\uc744 \ud638\ucd9c\ud560 \uac83\uc774\ub2e4."]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-jsx",children:"useEffect(() => {\n  doSomething(a, b);\n}, [a, b]);\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(c.hr,{}),"\n",(0,n.jsx)(c.h2,{id:"\uc5ec\uae30\uc11c-usecallback\uc740-\uc65c-\uc0ac\uc6a9\ud560\uae4c",children:"\uc5ec\uae30\uc11c useCallback\uc740 \uc65c \uc0ac\uc6a9\ud560\uae4c?"}),"\n",(0,n.jsxs)(c.p,{children:["\uc0ac\uc2e4, \uc704 \ucf54\ub4dc\ub294 \uc55e\uc11c\ubcf8 \ucf54\ub4dc\uc640 \uac19\uc740 \ud615\ud0dc\ub97c \ub760\uac8c \ub41c\ub2e4. \uc74c \ud6e8\uc52c \uac04\ub2e8\ud574 \ubcf4\uc778\ub2e4. \uadf8\ub807\ub2e4\uba74 \uc65c ",(0,n.jsx)(c.code,{children:"useCallback"}),"\uc744 \uc0ac\uc6a9\ud560\uae4c?"]}),"\n",(0,n.jsx)(c.admonition,{title:"\ubb38\uc81c\uc810",type:"warning",children:(0,n.jsxs)(c.ul,{children:["\n",(0,n.jsx)(c.li,{children:"useEffect\uc5d0\uc11c \ud558\ub294 \ud589\ub3d9\uc774 \ub9ce\uc544\uc9c8\uc218\ub85d \ucf54\ub4dc\uac00 \ubcf5\uc7a1\ud574\uc9c4\ub2e4."}),"\n",(0,n.jsx)(c.li,{children:"dependency array\uac00 \uae38\uc5b4 \uc9c8 \uc218 \uc788\ub2e4."}),"\n",(0,n.jsx)(c.li,{children:"\ucd94\ud6c4\uc5d0 \uc720\uc9c0\ubcf4\uc218\ub97c \ud558\ub824\ud558\uba74 \ud5f7\uac08\ub9ac\uac8c \ub420 \uc218 \uc788\ub2e4."}),"\n"]})}),"\n",(0,n.jsx)(c.admonition,{title:"\ud574\uacb0\ubc29\uc548",type:"info",children:(0,n.jsxs)(c.ul,{children:["\n",(0,n.jsxs)(c.li,{children:[(0,n.jsx)(c.code,{children:"useEffect"}),"\ub294 \uc6b0\ub9ac\uac00 \uc6d0\ud558\ub294 side effect\ub97c \uc2e4\ud589\ub9cc \ud574\uc8fc\uace0, ",(0,n.jsx)(c.code,{children:"useCallback"}),"\uc5d0\uc11c \uc2e4\uc81c \ud574\uc57c \ud558\ub294 \uac83\ub4e4\uc744 \uc120\uc5b8\ud574\uc8fc\uba74 \ucf54\ub4dc\uc758 \ubd84\ub9ac\uac00 \uac00\ub2a5\ud558\ub2e4."]}),"\n",(0,n.jsx)(c.li,{children:"\ucf5c\ubc31 \ud568\uc218\uc758 \uad6c\uccb4\uc801\uc778 \uc5ed\ud560\uc744 \uc774\ub984\uc744 \ud1b5\ud574 \uba85\uc2dc\uc801\uc73c\ub85c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,n.jsx)(c.li,{children:"\ucf54\ub4dc\ub97c \uc815\ub9ac\ud558\uace0 \uac00\ub3c5\uc131\uc744 \ub192\uc5ec\uc11c \uc720\uc9c0\ubcf4\uc218\ub97c \uc218\uc6d4\ud558\uac8c \ud574 \uc904 \uc218 \uc788\ub2e4."}),"\n"]})}),"\n",(0,n.jsx)(c.h3,{id:"state\uac00-\ubc14\ub014-\ub54c\ub9c8\ub2e4-\ub370\uc774\ud130\ub97c-\ubc1b\uc544\uc640\uc57c-\ud558\ub294-\uacbd\uc6b0",children:"state\uac00 \ubc14\ub014 \ub54c\ub9c8\ub2e4 \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc640\uc57c \ud558\ub294 \uacbd\uc6b0"}),"\n",(0,n.jsx)(c.h4,{id:"1-useeffect\ub9cc-\uc0ac\uc6a9\ud558\ub294-\uc608",children:"1. useEffect\ub9cc \uc0ac\uc6a9\ud558\ub294 \uc608"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-jsx",children:"useEffect(() => {\n  const getDate = async () => {\n    const response = await fetch('some url');\n    setData(response.data);\n  };\n  getData();\n}, [someDeps]);\n"})}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"useEffect"}),"\uc758 \ucf5c\ubc31\ud568\uc218\ub294 ",(0,n.jsx)(c.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:"Promise"}),"\ub97c \ubc18\ud658\ud558\ub294 \ube44\ub3d9\uae30 \ud568\uc218\uac00 \ub420 \uc218 \uc5c6\ub2e4. \ub54c\ubb38\uc5d0, ",(0,n.jsx)(c.code,{children:"getData"}),"\ub77c\ub294 \ube44\ub3d9\uae30 \ud568\uc218\ub97c ",(0,n.jsx)(c.code,{children:"useEffect"}),"\uac00 \uc2e4\ud589\ub420 \ub54c\ub9c8\ub2e4 \uc0dd\uc131\ud574\uc8fc\uace0, \uadf8 \uc548\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 ",(0,n.jsx)(c.code,{children:"setData"}),"\ub97c \ud574\uc8fc\uac8c \ub41c\ub2e4. \uadf8\ub9ac\uace0 \ub9cc\ub4e0 ",(0,n.jsx)(c.code,{children:"getData"}),"\ub77c\ub294 \ud568\uc218\ub97c \uc2e4\ud589\ud558\uac8c \ub41c\ub2e4. ",(0,n.jsx)(c.code,{children:"useEffect"}),"\uac00 \uc2e4\ud589\ub420 \ub54c\ub9c8\ub2e4 \ub9e4\ubc88 \ud568\uc218\uac00 \uc0dd\uc131\ub418\uace0 \uc2e4\ud589\ub418\ub2c8 \ub9e4\uc6b0 \ube44\ud6a8\uc728\uc801\uc73c\ub85c \ubcfc \uc218 \uc788\ub2e4."]}),"\n",(0,n.jsx)(c.h4,{id:"2-useeffect--usecallback-\uc870\ud569\ud55c-\uc608",children:"2. useEffect + useCallback \uc870\ud569\ud55c \uc608"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-jsx",children:"const getData = useCallback(async () => {\n  const response = await fetch('some url');\n  setData(response.data);\n}, [someDeps]);\n\nuseEffect(() => {\n  getData();\n}, [getData]);\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(c.hr,{}),"\n",(0,n.jsx)(c.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"useCallback"}),"\uc744 \ud65c\uc6a9\ud558\uba74, ",(0,n.jsx)(c.code,{children:"useCallback"}),"\uc548\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ucf5c\ubc31 \ud568\uc218\ub97c ",(0,n.jsx)(c.code,{children:"getData"}),"\uc5d0 \ub123\uc5b4\uc8fc\uace0, ",(0,n.jsx)(c.code,{children:"useEffect"}),"\uc548\uc5d0\uc11c\ub294 ",(0,n.jsx)(c.code,{children:"getData"}),"\ub9cc \ud638\ucd9c\uc744 \ud574\uc8fc\uba74 \ucf54\ub4dc\uac00 \ud6e8\uc52c \uae54\ub054\ud574\uc9c0\uace0, \ub85c\uc9c1\ub3c4 \ubd84\ub9ac\ub418\uba70 \uac00\ub3c5\uc131\uc774 \uc62c\ub77c\uac00\ub294 \ud6a8\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\ub2e4."]})]})}function u(e={}){const{wrapper:c}={...(0,a.R)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);