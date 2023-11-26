"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[4554],{3588:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var l=r(5893),c=r(1151);const i={title:"\ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc",authors:"5kdk",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 for \ubb38\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uc544\ubcf4\uc790",tags:["JavaScript"],keywords:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","Reduce","Map","\ubc18\ubcf5 \uba54\uc11c\ub4dc"],enableComments:!0},a=void 0,d={permalink:"/blog/2022/11/11/11-array-iteration-methods",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2022-11-11-11-array-iteration-methods.md",source:"@site/blog/2022-11-11-11-array-iteration-methods.md",title:"\ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 for \ubb38\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uc544\ubcf4\uc790",date:"2022-11-11T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 11\uc77c",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:10.95,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd Front-end Developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"\ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc",authors:"5kdk",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 for \ubb38\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc54c\uc544\ubcf4\uc790",tags:["JavaScript"],keywords:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","Reduce","Map","\ubc18\ubcf5 \uba54\uc11c\ub4dc"],enableComments:!0},unlisted:!1,prevItem:{title:"key\uac00 \ud544\uc694\ud55c \uc774\uc720\uc640 \uc8fc\uc758\ud560 \uc810",permalink:"/blog/2022/12/10/react-key-props"}},s={authorsImageUrls:[void 0]},t=[{value:"\ubc18\ubcf5(Iteration) \uba54\uc11c\ub4dc",id:"\ubc18\ubcf5iteration-\uba54\uc11c\ub4dc",level:2},{value:"1. Array.map()",id:"1-arraymap",level:3},{value:"2. Array.filter()",id:"2-arrayfilter",level:3},{value:"3. Array.forEach()",id:"3-arrayforeach",level:3},{value:"4. Array.reduce()",id:"4-arrayreduce",level:3},{value:"5. Array.reduceRight()",id:"5-arrayreduceright",level:3},{value:"6. Array.some()",id:"6-arraysome",level:3},{value:"7. Array.every()",id:"7-arrayevery",level:3},{value:"8. Array.find()",id:"8-arrayfind",level:3},{value:"9. Array.findIndex()",id:"9-arrayfindindex",level:3},{value:"10. Array.indexOf()",id:"10-arrayindexof",level:3},{value:"11. Array.lastIndexOf()",id:"11-arraylastindexof",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function o(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"\uc774 \ud3ec\uc2a4\ud305\uc740 \ud574\uc678 \uc800\uc790\uc758 \uae00\uc744 \uc694\uc57d \ubc0f \ubc88\uc5ed\ud558\uace0 \uc0b4\uc744 \ubd99\uc5ec \uc62e\uae34\ub2e4. \ud544\uc790\uac00 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucc98\uc74c \uc811\ud558\uace0 \ubc30\uc5f4\uc744 \ub9c9 \ub2e4\ub8e8\uae30 \uc2dc\uc791\ud560 \ub54c\uc5d0 \ud070 \ub3c4\uc6c0\uc774 \ub418\uc5c8\ub2e4. \uc6d0\ubb38\uc740 \ud558\ub2e8 \ub9c1\ud06c\ub85c \ub0a8\uae34\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc774\uc81c\ubd80\ud130 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc30\uc5f4 \ubc18\ubcf5\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub9cc\ub4dc\ub294 11\uac00\uc9c0 \uba54\uc11c\ub4dc\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790!"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\uc6d0\ubb38 \uc800\uc790\uc758 \uc11c\ubb38:",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.em,{children:"Javascript\uc758 \uc77c\uc0c1\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c\ub294 \ubc30\uc5f4 \uc694\uc18c\uc5d0 \ub300\ud574 \uc77c\uc885\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4.\xa0\ubc30\uc5f4\uc758 \uac01 \ud56d\ubaa9\uc744 \ucc98\ub9ac\ud558\ub294 \uac83\uc740 \ub9e4\uc6b0 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4.\xa0\ub530\ub77c\uc11c \uac01 \ubc30\uc5f4 \uc694\uc18c\uc758 \ucc98\ub9ac\ub97c \ub354 \uc27d\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uae30 \uc704\ud574 Javascript\ub294 Iteration \uba54\uc11c\ub4dc\uc758 \ud798\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."})]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h2,{id:"\ubc18\ubcf5iteration-\uba54\uc11c\ub4dc",children:"\ubc18\ubcf5(Iteration) \uba54\uc11c\ub4dc"}),"\n",(0,l.jsx)(e.p,{children:"\ubc18\ubcf5 \uba54\uc11c\ub4dc\ub4e4\uc740 \ubc30\uc5f4\uc758 \ubaa8\ub4e0 \uc694\uc18c\uc5d0 \ub300\ud574 \ud55c \ubc88\uc5d0 \ud558\ub098\uc529 \uc791\ub3d9\ud558\ub294 \ubc29\ubc95\uc774\ub2e4.\xa0\uc774\ub7ec\ud55c \uba54\uc11c\ub4dc\ub294 loof\uc640 \uc720\uc0ac\ud558\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uac01 \uba54\uc11c\ub4dc\ub4e4\uc744 \ud65c\uc6a9\ud558\uc5ec \ubc30\uc5f4\uc744 \ubc18\ubcf5\ud558\uace0, \uac01 \ud56d\ubaa9\uc5d0 \ub300\ud574 \uc77c\ubd80 \uae30\ub2a5\uc744 \uc218\ud589\ud558\uace0, \uc6d0\ud558\ub294 \uacb0\uacfc\ub97c \ud544\ud130\ub9c1\ud558\uace0, \ub2e8\uc77c \uac12\uc73c\ub85c \uc904\uc774\uace0, \uac80\uc0c9\ud558\uc5ec \ucc3e\ub294 \uac83\uacfc \uac19\uc740 \ubc29\ubc95\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uc790."}),"\n",(0,l.jsx)(e.h3,{id:"1-arraymap",children:"1. Array.map()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.map()"})," : ",(0,l.jsx)(e.code,{children:"map()"}),"\uc744 \uc0ac\uc6a9 \ud558\uba74 \uac01 \ubc30\uc5f4 \uc694\uc18c\uc5d0 \ub300\ud574 ",(0,l.jsx)(e.strong,{children:"\uc791\uc5c5\uc744 \uc218\ud589\ud558\uc5ec \uc0c8 \ubc30\uc5f4 \uc694\uc18c\ub97c \ubc18\ud658"}),"\ud55c\ub2e4. \ubd80\uc218\ud6a8\uacfc\uac00 \uc5c6\ub2e4. \uc989, \uae30\uc874 \ubc30\uc5f4 \uc694\uc18c\uc5d0\ub294 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc5c6\ub2e4\ub294 \ub73b \uc774\ub2e4."]}),"\n",(0,l.jsxs)(e.p,{children:["\ucf5c\ubc31 \ud568\uc218\uc5d0\ub294 3\uac1c\uc758 \ub9e4\uac1c \ubcc0\uc218(",(0,l.jsx)(e.code,{children:"value"}),", ",(0,l.jsx)(e.code,{children:"index"}),", ",(0,l.jsx)(e.code,{children:"array"}),")\ub97c \ubc1b\uc744 \uc218 \uc788\ub2e4. ",(0,l.jsx)(e.code,{children:"index\uc640"})," ",(0,l.jsx)(e.code,{children:"array\ub294"})," \uc120\ud0dd\uc801 \ub9e4\uac1c\ubcc0\uc218\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsx)(e.p,{children:"\uc6d0\ub798 \ubc30\uc5f4 \uc694\uc18c\uc5d0 3\uc744 \uacf1\ud55c \uc0c8 \ubc30\uc5f4 \uc0dd\uc131"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"let nums = [10, 20, 30, 40, 50];\r\n\r\nconst numsMap = nums.map((value, index, array) => value * 3);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"30,60,90,120,150\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// Arrow function\r\nmap((element) => {/* \u2026 */});\r\nmap((element, index) => {/* \u2026 */});\r\nmap((element, index, array) => {/* \u2026 */});\r\n\r\n// Callback function\r\nmap(callbackFn);\r\nmap(callbackFn, thisArg);\r\n\r\n// Inline callback function\r\nmap(function (element) {/* \u2026 */});\r\nmap(function (element, index) {/* \u2026 */});\r\nmap(function (element, index, array) {/* \u2026 */});\r\nmap(function (element, index, array) {/* \u2026 */}, thisArg);\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"2-arrayfilter",children:"2. Array.filter()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.filter()"})," : \uc774\ub984\uc5d0\uc11c \uc54c \uc218 \uc788\ub4ef\uc774 \uc77c\ubd80 ",(0,l.jsx)(e.strong,{children:"\uc870\uac74\uc744 \uae30\ubc18\uc73c\ub85c \ud544\ud130\ub9c1\ud558\uc5ec \uc0c8 \ubc30\uc5f4\uc744 \ubc18\ud658"}),"\ud55c\ub2e4."]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"filter()"}),"\xa0\ub610\ud55c\xa0\ucf5c\ubc31 \ud568\uc218\uc5d0\ub294 3\uac1c\uc758 \ub9e4\uac1c \ubcc0\uc218(",(0,l.jsx)(e.code,{children:"value"}),", ",(0,l.jsx)(e.code,{children:"index"}),", ",(0,l.jsx)(e.code,{children:"array"}),")\ub97c \ubc1b\uc744 \uc218 \uc788\ub2e4. ",(0,l.jsx)(e.code,{children:"index\uc640"})," ",(0,l.jsx)(e.code,{children:"array\ub294"})," \uc120\ud0dd\uc801 \uc774\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsx)(e.p,{children:"\ubc30\uc5f4\uc548\uc758 30\ubcf4\ub2e4 \ud070 \uc218\ub97c \uc120\ubcc4\ud558\uae30"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"let nums = [50, 25, 40, 16, 29];\r\n\r\nconst numOver30 = nums.filter((value, index, array) => value > 30);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"50, 40\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// Arrow function\r\nfilter((element) => {/* \u2026 */});\r\nfilter((element, index) => {/* \u2026 */});\r\nfilter((element, index, array) => {/* \u2026 */});\r\n\r\n// Callback function\r\nfilter(callbackFn);\r\nfilter(callbackFn, thisArg);\r\n\r\n// Inline callback function\r\nfilter(function (element) {/* \u2026 */});\r\nfilter(function (element, index) {/* \u2026 */});\r\nfilter(function (element, index, array) {/* \u2026 */});\r\nfilter(function (element, index, array) {/* \u2026 */}, thisArg);\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"3-arrayforeach",children:"3. Array.forEach()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.forEach()"}),"\xa0: ",(0,l.jsx)(e.strong,{children:"for \ubb38\uacfc \uac19\uc2b5\ub2c8\ub2e4."})," \ubc30\uc5f4\uc758 \uac01 \uc694\uc18c\uc5d0 \ub300\ud574 \ud568\uc218\ub97c \uc2e4\ud589\ud55c\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Hello"})," \ubb38\uc790\uc5f4\uc5d0 ",(0,l.jsx)(e.code,{children:"names"})," \ubc30\uc5f4\uc758 \uc694\uc18c\ub97c \ud568\uaed8\ub97c \ud568\uaed8 \ucd9c\ub825\ud558\uae30"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"let prntVal = '';\r\nconst names = ['Frank', 'Charles', 'Dolly', 'Robert', 'Bob'];\r\n\r\nnames.forEach(value => {\r\n  prntVal = prntVal + 'Hello ' + value + '<br/>';\r\n});\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Hello Frank\r\nHello Charles\r\nHello Dolly\r\nHello Robert\r\nHello Bob\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// Arrow function\r\nforEach((element) => {/* \u2026 */});\r\nforEach((element, index) => {/* \u2026 */});\r\nforEach((element, index, array) => {/* \u2026 */});\r\n\r\n// Callback function\r\nforEach(callbackFn);\r\nforEach(callbackFn, thisArg);\r\n\r\n// Inline callback function\r\nforEach(function (element) {/* \u2026 */});\r\nforEach(function (element, index) {/* \u2026 */});\r\nforEach(function (element, index, array) {/* \u2026 */});\r\nforEach(function (element, index, array) {/* \u2026 */}, thisArg);\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"4-arrayreduce",children:"4. Array.reduce()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.reduce()"})," : \uac01 \ubc30\uc5f4 \uc694\uc18c\uc5d0\uc11c \ud568\uc218\ub97c \uc2e4\ud589\ud558\uc5ec ",(0,l.jsx)(e.strong,{children:"\ub2e8\uc77c \uac12\uc744 \uc0dd\uc131"}),"\ud55c\ub2e4."]}),"\n",(0,l.jsxs)(e.p,{children:["\ucd08\uae30\uac12(",(0,l.jsx)(e.code,{children:"initialValue"}),") \ub610\ub294 \uc774\uc804\uc5d0 \ubc18\ud658\ub41c \uac12\uc744 \uc720\uc9c0\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uc0c8 \ub9e4\uac1c\ubcc0\uc218 ",(0,l.jsx)(e.code,{children:"accumulator"}),"\uc640\xa0",(0,l.jsx)(e.code,{children:"currentValue"}),", ",(0,l.jsx)(e.code,{children:"index"})," \ubc0f ",(0,l.jsx)(e.code,{children:"array"}),"\uc758 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc788\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsxs)(e.p,{children:["\ubc30\uc5f4\uc744 \ub9cc\ub4e4\uace0 ",(0,l.jsx)(e.code,{children:"reduce()"}),"\xa0\ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc30\uc5f4 \uc694\uc18c\uc758 \ud569\uc744 \uc54c\uc544\ubcf4\uae30"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const nums = [10, 20, 30, 40, 50];\r\n\r\nconst sum = nums.reduce((total, value) => total + value);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"150\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// Arrow function\r\nreduce((accumulator, currentValue) => {/* \u2026 */});\r\nreduce((accumulator, currentValue, currentIndex) => {/* \u2026 */});\r\nreduce((accumulator, currentValue, currentIndex, array) => {/* \u2026 */});\r\n\r\nreduce((accumulator, currentValue) => {/* \u2026 */}, initialValue);\r\nreduce((accumulator, currentValue, currentIndex) => {/* \u2026 */}, initialValue);\r\nreduce((accumulator, currentValue, currentIndex, array) => {/* \u2026 */}, initialValue);\r\n\r\n// Callback function\r\nreduce(callbackFn);\r\nreduce(callbackFn, initialValue);\r\n\r\n// Inline callback function\r\nreduce(function (accumulator, currentValue) {/* \u2026 */});\r\nreduce(function (accumulator, currentValue, currentIndex) {/* \u2026 */});\r\nreduce(function (accumulator, currentValue, currentIndex, array) {/* \u2026 */});\r\n\r\nreduce(function (accumulator, currentValue) {/* \u2026 */}, initialValue);\r\nreduce(function (accumulator, currentValue, currentIndex) {/* \u2026 */}, initialValue);\r\nreduce(function (accumulator, currentValue, currentIndex, array) {/* \u2026 */}, initialValue);\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"5-arrayreduceright",children:"5. Array.reduceRight()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.reduceRight()"})," : \ub05d \uc778\ub371\uc2a4 \ubd80\ud130 \uc2dc\uc791\ud55c\ub2e4\ub294 \uc810\uc744 \uc81c\uc678\ud558\uace0\ub294 ",(0,l.jsx)(e.code,{children:"reduce()"}),"\uc640 \uac19\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsxs)(e.p,{children:["\ubc30\uc5f4\uc744 \ub9cc\ub4e4\uace0\xa0",(0,l.jsx)(e.code,{children:"reduce()"}),"\xa0\ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc30\uc5f4 \uc694\uc18c\uc758 \ud569\uc744 \uc54c\uc544\ubcf4\uae30"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const nums = [10, 20, 30, 40, 50];\r\n\r\nconst sum = nums.reduce((total, value) => total + value);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"150\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"6-arraysome",children:"6. Array.some()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.some()"}),"\xa0: ",(0,l.jsx)(e.strong,{children:"\ubc30\uc5f4 \uc694\uc18c \uc911 \uc77c\ubd80\uac00 \uc870\uac74\uc744 \ud1b5\uacfc"}),"\ud558\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsxs)(e.p,{children:["\ubc30\uc5f4\uc5d0 30 \uc774\uc0c1\uc758 \uc694\uc18c\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uc870\uac74\uc744 \ucda9\uc871\ud558\uba74 ",(0,l.jsx)(e.code,{children:"true"}),"\ub97c \ubc18\ud658 \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 ",(0,l.jsx)(e.code,{children:"false"}),"\ub97c \ubc18\ud658\ud558\ub294 \uc608"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const nums = [10, 20, 30, 40, 50];\r\n\r\nconst over30 = nums.some(value => value > 30);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"true\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// Arrow function\r\nsome((element) => {/* \u2026 */});\r\nsome((element, index) => {/* \u2026 */});\r\nsome((element, index, array) => {/* \u2026 */});\r\n\r\n// Callback function\r\nsome(callbackFn);\r\nsome(callbackFn, thisArg);\r\n\r\n// Inline callback function\r\nsome(function (element) {/* \u2026 */});\r\nsome(function (element, index) {/* \u2026 */});\r\nsome(function (element, index, array) {/* \u2026 */});\r\nsome(function (element, index, array) {/* \u2026 */}, thisArg);\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"7-arrayevery",children:"7. Array.every()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.every()"})," :\xa0",(0,l.jsx)(e.strong,{children:"\ubc30\uc5f4 \uc694\uc18c \ubaa8\ub450 \uc870\uac74\uc744 \ud1b5\uacfc"}),"\ud558\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \ub370 \uc0ac\uc6a9 \ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsxs)(e.p,{children:["\ubc30\uc5f4\uc5d0 30 \uc774\uc0c1\uc758 \uc694\uc18c\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uc870\uac74\uc744 \ucda9\uc871\ud558\uba74 ",(0,l.jsx)(e.code,{children:"true"}),"\ub97c \ubc18\ud658 \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 ",(0,l.jsx)(e.code,{children:"false"}),"\ub97c \ubc18\ud658\ud558\ub294 \uc608"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const nums = [10, 20, 30, 40, 50];\r\n\r\nconst over30 = nums.some(value => value > 30);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"false\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// Arrow function\r\nevery((element) => { /* \u2026 */ })\r\nevery((element, index) => { /* \u2026 */ })\r\nevery((element, index, array) => { /* \u2026 */ })\r\n\r\n// Callback function\r\nevery(callbackFn)\r\nevery(callbackFn, thisArg)\r\n\r\n// Inline callback function\r\nevery(function (element) { /* \u2026 */ })\r\nevery(function (element, index) { /* \u2026 */ })\r\nevery(function (element, index, array) { /* \u2026 */ })\r\nevery(function (element, index, array) { /* \u2026 */ }, thisArg)\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"8-arrayfind",children:"8. Array.find()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.find()"})," :\xa0\uc8fc\uc5b4\uc9c4 ",(0,l.jsx)(e.strong,{children:"\uc870\uac74\uc744 \ub9cc\uc871\ud558\ub294 \uccab \ubc88\uc9f8 \ubc30\uc5f4 \uc694\uc18c\uc758 \uac12"}),"\uc744 \ubc18\ud658\ud55c\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsxs)(e.p,{children:["\ubc30\uc5f4\uc5d0 ",(0,l.jsx)(e.code,{children:"30"})," \uc774\uc0c1\uc758 \uc694\uc18c\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uc870\uac74\uc744 \ucda9\uc871\ud558\uba74 ",(0,l.jsx)(e.code,{children:"true"}),"\ub97c \ubc18\ud658 \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 ",(0,l.jsx)(e.code,{children:"false"}),"\ub97c \ubc18\ud658\ud558\ub294 \uc608"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const nums = [10, 20, 30, 40, 50];\r\n\r\nconst firstNum = nums.find(value => value > 30);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"40\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// Arrow function\r\nfind((element) => { /* \u2026 */ })\r\nfind((element, index) => { /* \u2026 */ })\r\nfind((element, index, array) => { /* \u2026 */ })\r\n\r\n// Callback function\r\nfind(callbackFn)\r\nfind(callbackFn, thisArg)\r\n\r\n// Inline callback function\r\nfind(function (element) { /* \u2026 */ })\r\nfind(function (element, index) { /* \u2026 */ })\r\nfind(function (element, index, array) { /* \u2026 */ })\r\nfind(function (element, index, array) { /* \u2026 */ }, thisArg)\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"9-arrayfindindex",children:"9. Array.findIndex()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.findIndex()"})," :\xa0\uc8fc\uc5b4\uc9c4 ",(0,l.jsx)(e.strong,{children:"\uc870\uac74\uc744 \ub9cc\uc871\ud558\ub294\xa0\uccab \ubc88\uc9f8 \ubc30\uc5f4 \uc694\uc18c\uc758 \uc778\ub371\uc2a4"}),"\uc744 \ubc18\ud658\ud55c\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsxs)(e.p,{children:["\ubc30\uc5f4\uc5d0 ",(0,l.jsx)(e.code,{children:"30"})," \uc774\uc0c1\uc758 \uc694\uc18c\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uc870\uac74\uc744 \ucda9\uc871\ud558\uba74 \uc694\uc18c\uc758 \uc778\ub371\uc2a4\ub97c \ubc18\ud658\ud558\ub294 \uc608"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const nums = [10, 20, 30, 40, 50];\r\n\r\nconst firstIdx = nums.findIndex(value => value > 30);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"3\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// Arrow function\r\nfindIndex((element) => { /* \u2026 */ })\r\nfindIndex((element, index) => { /* \u2026 */ })\r\nfindIndex((element, index, array) => { /* \u2026 */ })\r\n\r\n// Callback function\r\nfindIndex(callbackFn)\r\nfindIndex(callbackFn, thisArg)\r\n\r\n// Inline callback function\r\nfindIndex(function (element) { /* \u2026 */ })\r\nfindIndex(function (element, index) { /* \u2026 */ })\r\nfindIndex(function (element, index, array) { /* \u2026 */ })\r\nfindIndex(function (element, index, array) { /* \u2026 */ }, thisArg)\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"10-arrayindexof",children:"10. Array.indexOf()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.indexOf()"}),"\xa0:\xa0\ubc30\uc5f4 \ub0b4\uc5d0\uc11c \uc694\uc18c\ub97c \uac80\uc0c9\ud558\uace0 \ud574\ub2f9 \uc704\uce58\ub97c \ubc18\ud658\ud55c\ub2e4. \ubc30\uc5f4 \uc694\uc18c\uc758 \uc704\uce58\ub97c \u200b\u200b\ubc18\ud658\ud558\uba70\xa0\ubc1c\uacac\ub41c \uc694\uc18c\uc758 \uccab \ubc88\uc9f8 \ud56d\ubaa9\uc744 \ubc18\ud658\ud558\uace0, \ub9cc\uc57d \uc694\uc18c\ub97c \ucc3e\uc9c0 \ubabb\ud558\uba74 ",(0,l.jsx)(e.code,{children:"-1"}),"\uc744 \ubc18\ud658\ud55c\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsxs)(e.p,{children:["\ubc30\uc5f4\uc5d0\uc11c ",(0,l.jsx)(e.code,{children:"Dolly"}),"\uc758 \uc704\uce58 \ucc3e\uae30"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const names = ['Frank', 'Charles', 'Dolly', 'Robert', 'Bob'];\r\n\r\nconst pos = names.indexOf('Dolly');\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"2\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"indexOf(searchElement);\r\nindexOf(searchElement, fromIndex);\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.h3,{id:"11-arraylastindexof",children:"11. Array.lastIndexOf()"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"Array.indexOf()"})," :\xa0\ubc30\uc5f4\uc758 \ub05d\uc5d0\uc11c\ubd80\ud130 \uc694\uc18c\ub97c \uac80\uc0c9\ud55c\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc608\uc81c"})}),"\n",(0,l.jsxs)(e.p,{children:["\ubc30\uc5f4\uc5d0\uc11c ",(0,l.jsx)(e.code,{children:"Dolly"}),"\uc758 \uc704\uce58 \ucc3e\uae30"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const names = ['Frank', 'Charles', 'Dolly', 'Robert', 'Bob'];\r\n\r\nconst pos = names.indexOf('Dolly');\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\ucd9c\ub825"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"2\n"})}),"\n",(0,l.jsx)(e.admonition,{title:"mdn web docs",type:"info",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"lastIndexOf(searchElement)\r\nlastIndexOf(searchElement, fromIndex)\n"})})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,l.jsx)(e.p,{children:"\ub2e4\uc591\ud55c \uc720\ud615\uc758 JavaScript \ubc30\uc5f4 \ubc18\ubcf5 \uba54\uc11c\ub4dc\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uc558\ub2e4. \uc55e\uc5d0 \uc0b4\ud3b4\ubcf8 \uba54\uc11c\ub4dc\ub4e4\uc740 \uc77c\uc0c1\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0 \uc815\ub9d0 \uc720\uc6a9\ud55c\ub370 \uc774\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc591\ud55c \uc791\uc5c5\uc744 \uc190\uc27d\uac8c \uc218\ud589\ud560 \uc218 \ub3c4 \uc788\uace0, \ubcf4\ub2e4 \uc120\uc5b8\uc801\uc778 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \ub370 \ud070 \ub3c4\uc6c0\uc774 \ub418\ubbc0\ub85c \uc798 \ud65c\uc6a9\ud558\uba74 \uc88b\uc744 \uac83 \uac19\ub2e4."}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc6d0\ubb38 \ubc0f \ucc38\uace0\uc790\ub8cc"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"https://www.zeptobook.com/eleven-ways-to-learn-javascript-array-iteration-effectively/",children:"https://www.zeptobook.com/eleven-ways-to-learn-javascript-array-iteration-effectively/"}),(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/search?q=array",children:"https://developer.mozilla.org/en-US/search?q=array"})]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>d,a:()=>a});var l=r(7294);const c={},i=l.createContext(c);function a(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:a(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);