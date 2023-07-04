"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[424],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=l,f=u["".concat(c,".").concat(m)]||u[m]||k[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",authors:"5kdk",tags:["React"],enableComments:!0},i=void 0,o={permalink:"/blog/2022/12/15/useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2022-12-15-useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30.md",source:"@site/blog/2022-12-15-useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30.md",title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",description:"useCallback\uc740 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158(memoization)\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ub418\ub294 Hook\ub4e4 \uc785\ub2c8\ub2e4. React\uc758 useCallback\uc744 useEffect\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubc29\uba74\uc73c\ub85c \ud6a8\uc728\uc801\uc778 \ucf54\ub4dc\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. useCallback\uc740 useEffect\uc640 \uc0dd\uae34 \uac83\uc740 \ub611\uac19\uc9c0\ub9cc, \uc5ed\ud560\uc740 \uc870\uae08 \ub2e4\ub985\ub2c8\ub2e4.",date:"2022-12-15T00:00:00.000Z",formattedDate:"2022\ub144 12\uc6d4 15\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:4.115,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"Collaborative FE developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",authors:"5kdk",tags:["React"],enableComments:!0},prevItem:{title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",permalink:"/blog/2023/06/17/useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \uc0ac\uc6a9\uc131 \uac1c\uc120"},nextItem:{title:"key\uac00 \ud544\uc694\ud55c \uc774\uc720\uc640 \uc8fc\uc758\ud560 \uc810",permalink:"/blog/2022/12/10/ key\uac00 \ud544\uc694\ud55c \uc774\uc720\uc640 \uc8fc\uc758\ud560 \uc810"}},c={authorsImageUrls:[void 0]},s=[{value:"\uc608\uc81c\ub85c \ubcf4\ub294 useEffect\xa0\uc2ec\ud654\xa0\ud65c\uc6a9",id:"\uc608\uc81c\ub85c-\ubcf4\ub294-useeffect\uc2ec\ud654\ud65c\uc6a9",level:2},{value:"useCallback\uc744 useEffect\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \uc608",id:"usecallback\uc744-useeffect\uc640-\ud568\uaed8-\uc0ac\uc6a9\ud558\ub294-\uc608",level:3},{value:"\uc5ec\uae30\uc11c useCallback\uc740 \uc65c \uc0ac\uc6a9\ud560\uae4c?",id:"\uc5ec\uae30\uc11c-usecallback\uc740-\uc65c-\uc0ac\uc6a9\ud560\uae4c",level:2},{value:"state\uac00 \ubc14\ub014 \ub54c\ub9c8\ub2e4 \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc640\uc57c \ud558\ub294 \uacbd\uc6b0",id:"state\uac00-\ubc14\ub014-\ub54c\ub9c8\ub2e4-\ub370\uc774\ud130\ub97c-\ubc1b\uc544\uc640\uc57c-\ud558\ub294-\uacbd\uc6b0",level:3},{value:"1. useEffect\ub9cc \uc0ac\uc6a9\ud558\ub294 \uc608",id:"1-useeffect\ub9cc-\uc0ac\uc6a9\ud558\ub294-\uc608",level:4},{value:"2. useEffect + useCallback \uc870\ud569\ud55c \uc608",id:"2-useeffect--usecallback-\uc870\ud569\ud55c-\uc608",level:4},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],p={toc:s},u="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useCallback"},(0,l.kt)("inlineCode",{parentName:"a"},"useCallback")),"\uc740 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158(memoization)\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ub418\ub294 Hook\ub4e4 \uc785\ub2c8\ub2e4. React\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc744 ",(0,l.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useEffect"},(0,l.kt)("inlineCode",{parentName:"a"},"useEffect")),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubc29\uba74\uc73c\ub85c \ud6a8\uc728\uc801\uc778 \ucf54\ub4dc\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uc640 \uc0dd\uae34 \uac83\uc740 \ub611\uac19\uc9c0\ub9cc, \uc5ed\ud560\uc740 \uc870\uae08 \ub2e4\ub985\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc608\uc81c\ub85c-\ubcf4\ub294-useeffect\uc2ec\ud654\ud65c\uc6a9"},"\uc608\uc81c\ub85c \ubcf4\ub294 useEffect\xa0\uc2ec\ud654\xa0\ud65c\uc6a9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc744 \uc0b4\ud3b4\ubcf4\uc790\uba74 \uccab \ubc88\uc9f8 \uc778\uc790\ub85c \ucf5c\ubc31\ud568\uc218\ub97c \ub123\uc5b4\uc8fc\uace0, \ub450 \ubc88\uc9f8\ub85c \uc778\uc790\ub85c \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \ub123\uc5b4\uc90d\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\ub098 ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\uac00 \ubc14\ub00c\uc5c8\uc744 \ub54c\ub9cc ",(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc758 \ucf5c\ubc31 \ud568\uc218\ub97c \uc0c8\ub85c \uc0dd\uc131\ud558\uace0, \uadf8\ub807\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \ucf5c\ubc31 \ud568\uc218\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"usecallback\uc744-useeffect\uc640-\ud568\uaed8-\uc0ac\uc6a9\ud558\ub294-\uc608"},"useCallback\uc744 useEffect\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \uc608"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n  // highlight-start\n}, [a, b]);\n// highlight-end\n\n// highlight-start\nuseEffect(() => {\n  memoizedCallback();\n}, [memoizedCallback]);\n// highlight-end\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uc758 \uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"memoizedCallback"),"\uc774 \uc788\uace0, \ucf5c\ubc31\ud568\uc218\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"memoizedCallback"),"\uc744 \ud638\ucd9c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"memoizedCallback"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\uc5d0 \uc758\uc874\uc801\uc774\ubbc0\ub85c, ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\uac00 \ubcc0\uacbd\uc774 \uc0dd\uacbc\uc744 \ub54c\ub9cc \uc0dd\uc131\ub420 \uac83\uc774\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"memoizedCallback"),"\uc774 \uc0c8\ub85c \uc0dd\uc131\ub418\uc5c8\uc744 \ub54c ",(0,l.kt)("inlineCode",{parentName:"p"},"memoizedCallback"),"\uc744 \ud638\ucd9c\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  doSomething(a, b);\n}, [a, b]);\n")),(0,l.kt)("h2",{id:"\uc5ec\uae30\uc11c-usecallback\uc740-\uc65c-\uc0ac\uc6a9\ud560\uae4c"},"\uc5ec\uae30\uc11c useCallback\uc740 \uc65c \uc0ac\uc6a9\ud560\uae4c?"),(0,l.kt)("p",null,"\uc0ac\uc2e4, \uc704 \ucf54\ub4dc\ub294 \uc55e\uc11c\ubcf8 \ucf54\ub4dc\uc640 \uac19\uc740 \ud615\ud0dc\ub97c \ub760\uac8c \ub429\ub2c8\ub2e4. \ud6e8\uc52c \uac04\ub2e8\ud574 \ubcf4\uc785\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \uc65c ",(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc744 \uc0ac\uc6a9\ud560\uae4c\uc694?"),(0,l.kt)("admonition",{title:"\ubb38\uc81c\uc810",type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"useEffect\uc5d0\uc11c \ud558\ub294 \ud589\ub3d9\uc774 \ub9ce\uc544\uc9c8\uc218\ub85d \ucf54\ub4dc\uac00 \ubcf5\uc7a1\ud574\uc9d1\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"dependency array\uac00 \uae38\uc5b4 \uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucd94\ud6c4\uc5d0 \uc720\uc9c0\ubcf4\uc218\ub97c \ud558\ub824\ud558\uba74 \ud5f7\uac08\ub9ac\uac8c \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("admonition",{title:"\ud574\uacb0\ubc29\uc548",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useEffect"),"\ub294 \uc6b0\ub9ac\uac00 \uc6d0\ud558\ub294 side effect\ub97c \uc2e4\ud589\ub9cc \ud574\uc8fc\uace0,",(0,l.kt)("br",{parentName:"li"}),(0,l.kt)("inlineCode",{parentName:"li"},"useCallback"),"\uc5d0\uc11c \uc2e4\uc81c \ud574\uc57c \ud558\ub294 \uac83\ub4e4\uc744 \uc120\uc5b8\ud574\uc8fc\uba74 \ucf54\ub4dc\uc758 \ubd84\ub9ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucf5c\ubc31 \ud568\uc218\uc758 \uad6c\uccb4\uc801\uc778 \uc5ed\ud560\uc744 \uc774\ub984\uc744 \ud1b5\ud574 \uba85\uc2dc\uc801\uc73c\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\ub97c \uc815\ub9ac\ud558\uace0 \uac00\ub3c5\uc131\uc744 \ub192\uc5ec\uc11c \uc720\uc9c0\ubcf4\uc218\ub97c \uc218\uc6d4\ud558\uac8c \ud574 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("h3",{id:"state\uac00-\ubc14\ub014-\ub54c\ub9c8\ub2e4-\ub370\uc774\ud130\ub97c-\ubc1b\uc544\uc640\uc57c-\ud558\ub294-\uacbd\uc6b0"},"state\uac00 \ubc14\ub014 \ub54c\ub9c8\ub2e4 \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc640\uc57c \ud558\ub294 \uacbd\uc6b0"),(0,l.kt)("h4",{id:"1-useeffect\ub9cc-\uc0ac\uc6a9\ud558\ub294-\uc608"},"1. useEffect\ub9cc \uc0ac\uc6a9\ud558\ub294 \uc608"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  const getDate = async () => {\n    const response = await fetch('some url');\n    setData(response.data);\n  };\n  getData();\n}, [someDeps]);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uc758 \ucf5c\ubc31\ud568\uc218\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"\ub97c \ubc18\ud658\ud558\ub294 \ube44\ub3d9\uae30 \ud568\uc218\uac00 \ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub54c\ubb38\uc5d0, ",(0,l.kt)("inlineCode",{parentName:"p"},"getData"),"\ub77c\ub294 \ube44\ub3d9\uae30 \ud568\uc218\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uac00 \uc2e4\ud589\ub420 \ub54c\ub9c8\ub2e4 \uc0dd\uc131\ud574\uc8fc\uace0, \uadf8 \uc548\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"setData"),"\ub97c \ud574\uc8fc\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub9cc\ub4e0 ",(0,l.kt)("inlineCode",{parentName:"p"},"getData"),"\ub77c\ub294 \ud568\uc218\ub97c \uc2e4\ud589\ud558\uac8c \ub429\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uac00 \uc2e4\ud589\ub420 \ub54c\ub9c8\ub2e4 \ub9e4\ubc88 \ud568\uc218\uac00 \uc0dd\uc131\ub418\uace0 \uc2e4\ud589\ub418\ub2c8 \ub9e4\uc6b0 \ube44\ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"2-useeffect--usecallback-\uc870\ud569\ud55c-\uc608"},"2. useEffect + useCallback \uc870\ud569\ud55c \uc608"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const getData = useCallback(async () => {\n  const response = await fetch('some url');\n  setData(response.data);\n}, [someDeps]);\n\nuseEffect(() => {\n  getData();\n}, [getData]);\n")),(0,l.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc744 \ud65c\uc6a9\ud558\uba74, ",(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc548\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ucf5c\ubc31 \ud568\uc218\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"getData"),"\uc5d0 \ub123\uc5b4\uc8fc\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uc548\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"getData"),"\ub9cc \ud638\ucd9c\uc744 \ud574\uc8fc\uba74 \ucf54\ub4dc\uac00 \ud6e8\uc52c \uae54\ub054\ud574\uc9c0\uace0, \ub85c\uc9c1\ub3c4 \ubd84\ub9ac\ub418\uba70 \uac00\ub3c5\uc131\uc774 \uc62c\ub77c\uac00\ub294 \ud6a8\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);