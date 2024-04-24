"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[364],{709:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=i(4848),r=i(8453);const s={title:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive \uc194\uc9c1 \ud6c4\uae30",authors:"5kdk",description:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 \ub525\ub2e4\uc774\ube0c\ub97c \uc77d\uace0 \ub0a8\uae30\ub294 \uc11c\ud3c9\uc785\ub2c8\ub2e4.",tags:["Review"],keywords:["\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep Dive","\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep Dive \ud6c4\uae30","\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep Dive \ub9ac\ubdf0","\ubaa8\ub358 \ub9ac\uc561\ud2b8 \ub525\ub2e4\uc774\ube0c","Modern React Deep Dive","React \ucc45 \ucd94\ucc9c"],enableComments:!0},d=void 0,c={permalink:"/blog/2023/11/24/modern-react-deep-dive-review",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-11-24-modern-react-deep-dive-review/index.md",source:"@site/blog/2023-11-24-modern-react-deep-dive-review/index.md",title:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive \uc194\uc9c1 \ud6c4\uae30",description:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 \ub525\ub2e4\uc774\ube0c\ub97c \uc77d\uace0 \ub0a8\uae30\ub294 \uc11c\ud3c9\uc785\ub2c8\ub2e4.",date:"2023-11-24T00:00:00.000Z",tags:[{label:"Review",permalink:"/blog/tags/review"}],readingTime:8.235,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"Front-end Developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive \uc194\uc9c1 \ud6c4\uae30",authors:"5kdk",description:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 \ub525\ub2e4\uc774\ube0c\ub97c \uc77d\uace0 \ub0a8\uae30\ub294 \uc11c\ud3c9\uc785\ub2c8\ub2e4.",tags:["Review"],keywords:["\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep Dive","\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep Dive \ud6c4\uae30","\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep Dive \ub9ac\ubdf0","\ubaa8\ub358 \ub9ac\uc561\ud2b8 \ub525\ub2e4\uc774\ube0c","Modern React Deep Dive","React \ucc45 \ucd94\ucc9c"],enableComments:!0},unlisted:!1,prevItem:{title:"\uc88b\uc740 \ucf54\ub4dc\ub97c \uc704\ud55c ESLint \uc815\uc801 \ubd84\uc11d \ub525 \ub2e4\uc774\ube0c",permalink:"/blog/2023/11/26/eslint-deep-dive"},nextItem:{title:"Next.js\ub97c \uc911\uc2ec\uc73c\ub85c \ud55c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \ucd5c\uc801\ud654",permalink:"/blog/2023/11/09/improving-cwv-nextjs"}},l={authorsImageUrls:[void 0]},a=[{value:"\uc774 \ucc45\uc5d0\uc11c \ub2e4\ub8e8\ub294 \ub0b4\uc6a9\uc5d0 \ub300\ud55c \uc0dd\uac01",id:"\uc774-\ucc45\uc5d0\uc11c-\ub2e4\ub8e8\ub294-\ub0b4\uc6a9\uc5d0-\ub300\ud55c-\uc0dd\uac01",level:2},{value:"\uc808\ubc18\uc815\ub3c4 \uc77d\uc740 \uc2dc\uc810\uc758 \ub290\ub080\uc810",id:"\uc808\ubc18\uc815\ub3c4-\uc77d\uc740-\uc2dc\uc810\uc758-\ub290\ub080\uc810",level:2},{value:"1. React \uc0dd\ud0dc\uacc4\uc758 \uba85\ud655\ud55c \uc6a9\uc5b4",id:"1-react-\uc0dd\ud0dc\uacc4\uc758-\uba85\ud655\ud55c-\uc6a9\uc5b4",level:3},{value:"2. \ub3d9\uc791\uc6d0\ub9ac\ub97c \uae30\ubc18\uc73c\ub85c\ud55c \uc774\ud574",id:"2-\ub3d9\uc791\uc6d0\ub9ac\ub97c-\uae30\ubc18\uc73c\ub85c\ud55c-\uc774\ud574",level:3},{value:"3. \ub9ac\uc561\ud2b8 \uad6c\uc131\uc694\uc18c\uc758 \ub2e4\uc591\ud55c \uad00\uc810\uc744 \uc774\ud574",id:"3-\ub9ac\uc561\ud2b8-\uad6c\uc131\uc694\uc18c\uc758-\ub2e4\uc591\ud55c-\uad00\uc810\uc744-\uc774\ud574",level:3},{value:"\ub9c8\uce58\uba70",id:"\ub9c8\uce58\uba70",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\uc9c0\uc778\uc5d0\uac8c ",(0,t.jsx)(n.strong,{children:"'\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive'"})," \ubc1c\uac04 \uc18c\uc2dd\uc744 \ub4e3\uace0, \ucc45 \uc815\ubcf4\ub97c \ucc3e\uc544 \ubcf4\ub2e4\uac00 \uc774 \ucc45\uc758 \uc800\uc790\ub2d8\uc774 \uc81c\uac00 \ud3c9\uc18c\uc5d0 \uac10\uba85\uae4a\uac8c \ubcf4\ub358 \ube14\ub85c\uadf8\uc758 \uc8fc\uc778\ubd84\uc774\ub77c\ub294 \uac83\uc744 \uc54c\uac8c \ub418\uc5b4, \uace0\ubbfc \uc5c6\uc774 \ud574\ub2f9 \ub3c4\uc11c\uc758 \uc11c\ud3ec\ud130\uc988 \ud65c\ub3d9\uae4c\uc9c0 \uc9c0\uc6d0\ud558\uace0 \ucc45\uc744 \uad6c\ub9e4\ud558\uc600\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc6c5\ubaa8\ub2d8\uc758 '\ubaa8\ub358 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 Deep dive'\ub85c JavaScript\ub97c \uae4a\uac8c \ud30c\uace0\ub4e4 \uc218 \uc788\uc5c8\ub358 \uae30\uc5b5\uc774 \uc788\ub294\ub370, \ud604\uc5c5\uc5d0\uc11c Next.js\uc640 React\ub97c \ub2e4\ub8e8\uace0 \uc788\uc5b4 \uc774 \ucc45\uc744 \ud1b5\ud574 \ub354 \uae4a\uac8c \uc774\ud574\ud558\uace0 \uc2e4\ubb34\uc5d0 \uc801\uc6a9\ud558\ub294 \uac83\uc744 \uae30\ub300\ud558\uac8c\ub418\uc5c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc704\ud0a4\ubd81\uc2a4 '\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive'\uc758 \uc11c\ud3ec\ud130\uc988\ub85c \uc120\uc815\ub418\uba74\uc11c \uc808\ubc18\uc815\ub3c4 \uc77d\uc740 \uc2dc\uc810\uc758 \ucc45\uc758 \uc11c\ud3c9\uc744 \uac04\ub2e8\ud558\uac8c \ub0a8\uaca8\ubcf8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"modern-react-deep-dive",src:i(2513).A+"",width:"1280",height:"720"})}),"\n",(0,t.jsx)(n.h2,{id:"\uc774-\ucc45\uc5d0\uc11c-\ub2e4\ub8e8\ub294-\ub0b4\uc6a9\uc5d0-\ub300\ud55c-\uc0dd\uac01",children:"\uc774 \ucc45\uc5d0\uc11c \ub2e4\ub8e8\ub294 \ub0b4\uc6a9\uc5d0 \ub300\ud55c \uc0dd\uac01"}),"\n",(0,t.jsx)(n.p,{children:"\uba3c\uc800 \ucc45\uc5d0\uc11c \ub2e4\ub8e8\ub294 \ub0b4\uc6a9\uc744 \uc0b4\ud3b4\ubcf4\uba74..."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\uc758 \uc5ed\uc0ac"}),"\n",(0,t.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\ub97c \ub2e4\ub8e8\uae30 \uc704\ud55c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\uc5b4 \uc9c0\uc2dd"}),"\n",(0,t.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\uc758 \ud575\uc2ec \uc694\uc18c\uc640 \ud6c5"}),"\n",(0,t.jsx)(n.li,{children:"\uc11c\ubc84\uc0ac\uc774\ub4dc \ub79c\ub354\ub9c1"}),"\n",(0,t.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\uc640 \uc0c1\ud0dc\uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n",(0,t.jsx)(n.li,{children:"\ub514\ubc84\uae45, \uc571 \ubd84\uc11d \ubc29\ubc95"}),"\n",(0,t.jsx)(n.li,{children:"\uc88b\uc740 \ub9ac\uc561\ud2b8 \ucf54\ub4dc \uc791\uc131\uc744 \uc704\ud55c \ud658\uacbd \uad6c\ucd95, \ubc30\ud3ec \ud658\uacbd \uad6c\ucd95"}),"\n",(0,t.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8 17, 18 \ubcc0\uacbd \uc0ac\ud56d"}),"\n",(0,t.jsx)(n.li,{children:"Next.js 13\uacfc \ub9ac\uc561\ud2b8 18"}),"\n",(0,t.jsx)(n.li,{children:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8"}),"\n",(0,t.jsx)(n.li,{children:"\uc6f9 \uc131\ub2a5 \uce21\uc815"}),"\n",(0,t.jsx)(n.li,{children:"\ub9ac\uc561\ud2b8\uc640 \uc6f9\ud398\uc774\uc9c0 \ubcf4\uc548 \uc774\uc288"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"(\uc784\uc758\ub85c \uadf8\ub8f9\ud654 \ud568, \ubaa9\ucc28\uc640\ub294 \uc870\uae08 \ub2e4\ub984)"}),"\n",(0,t.jsxs)(n.p,{children:["\ucc45 \uc774\ub984\uc774 ",(0,t.jsx)(n.strong,{children:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive"})," \uc9c0\ub9cc React\ubfd0\ub9cc \uc544\ub2c8\ub77c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub77c\uba74 \uc54c\uc544\uc57c \ud560 \uc815\ubcf4\ub4e4\ub3c4 \ud568\uaed8 \ub2e4\ub8e8\uace0 \uc788\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\ub098\uc5d0\uac90 Next.js\uc640 \uc6f9 \uc131\ub2a5, \ubcf4\uc548 \ub4f1\uc744 \ud568\uaed8 \ub2e4\ub8e8\uace0 \uc788\uc5b4 \uc815\ub9d0 \uc88b\uc740 \uad6c\uc131\uc774\uc5c8\uc9c0\ub9cc React\uc758 \uc0ac\uc6a9 \ubc29\ubc95\uc744 \uacf5\ubd80\ud558\ub294 \ub290\ub08c\uc740 \uc544\ub2c8\ub77c \uc774\ubbf8 React\ub97c \ub2e4\ub904\ubcf8 \uc0ac\ub78c\uc5d0\uac8c \uc880 \ub354 \uc801\ud569\ud55c \uad6c\uc131\uc778 \uac83 \uac19\ub2e4. React \uacf5\uc2dd\ubb38\uc11c\uc5d0\ub294 \uc774 \ucc45\uc5d0\uc11c \ub2e4\ub8e8\ub294 \uc911\uc694\ud55c \ub0b4\uc6a9\uc774 \ub300\uac70 \ube60\uc838\uc788\ub294\ub370 \uacf5\uc2dd\ubb38\uc11c\uc640 \uc774 \ucc45\uc744 \ubcd1\ud589\ud558\uba74 \uc88b\uc73c\ub9ac\ub77c \uc0dd\uac01\ud55c\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uadf8\ub9ac\uace0 Next.js 14\uac00 \uc5bc\ub9c8 \uc804 \ubc1c\ud45c\ub418\uc5b4 \uc0c8\ub85c \ubc1c\uac04\ud55c \ucc45\uc774\uc9c0\ub9cc \uc774\uc804 \ubc84\uc804\uc758 \ub0b4\uc6a9\uc744 \ub2f4\uc544\ubc84\ub9b0 \ucc45\uc774 \ub418\uc5b4\ubc84\ub838\ub2e4. (14\ubc84\uc804\uc774 \ub108\ubb34 \ube68\ub9ac \ub098\uc640\ubc84\ub838\ub2e4. \ub77c\uc774\ube0c\ub7ec\ub9ac, \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc8fc\uc81c\ub85c \ud55c \ucc45\uc740 \ud53c\ud560 \uc218 \uc5c6\ub294 \ubd80\ubd84...) \uc774\ub7f0 \uc544\uc26c\uc6b4 \uc810\uc740 \uc800\uc790\ub2d8 \ube14\ub85c\uadf8 \ud3ec\uc2a4\ud305\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\ub2e4."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://yceffort.kr/2023/10/react-deep-dive",children:(0,t.jsx)(n.em,{children:"\ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive\uac00 \ucd9c\uac04\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})})}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"\uc808\ubc18\uc815\ub3c4-\uc77d\uc740-\uc2dc\uc810\uc758-\ub290\ub080\uc810",children:"\uc808\ubc18\uc815\ub3c4 \uc77d\uc740 \uc2dc\uc810\uc758 \ub290\ub080\uc810"}),"\n",(0,t.jsx)(n.h3,{id:"1-react-\uc0dd\ud0dc\uacc4\uc758-\uba85\ud655\ud55c-\uc6a9\uc5b4",children:"1. React \uc0dd\ud0dc\uacc4\uc758 \uba85\ud655\ud55c \uc6a9\uc5b4"}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\uc804\uc5d0 \uc77d\uc5c8\ub358 ",(0,t.jsx)(n.strong,{children:"'\ubaa8\ub358 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 Deep dive'"})," \uc5d0\uc11c\ub294 \uba85\ud655\ud55c \uc6a9\uc5b4\ub294 \uba85\ud655\ud55c \uc18c\ud1b5\uc774 \ub41c\ub77c\ub294 \ub9d0\uc774 \ub098\uc628\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \ucc45\uc740 React \uc0dd\ud0dc\uacc4\uc758 \uc6a9\uc5b4\ub4e4\uc744 \uba85\ud655\ud558\uac8c \ub2e4\ub8e8\uace0 \uc788\uc5b4 \uc774 React\uc5d0 \ub300\ud55c \uc18c\ud1b5 \ub2a5\ub825\uc744 \uc313\uae30 \uc801\ud569\ud558\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ub098\ub294 \uc774\ub97c '\uae30\ubcf8\uae30'\ub77c\uace0 \uc0dd\uac01\ud558\ub294\ub370 \uc774 \uae30\ubcf8\uae30\ub4e4\uc740 \uc2e4\uc81c \uc5c5\ubb34\ub97c \ud560 \ub54c \ud06c\uac8c \ub3c4\uc6c0\uc774 \ub41c\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4 \uac19\uc740 \uac1c\ubc1c\uc790\uc5ec\ub3c4 \uc9c0\uc2dd\uc758 \uc218\uc900\uc774 \ub2e4\ub97c \uc218 \uc788\ub294\ub370, \uac00\uc9c0\uace0 \uc788\ub294 \uc9c0\uc2dd\uc774 \ub2e4\ub974\ub354\ub77c\ub3c4 \uc6a9\uc5b4\ub97c \uc815\ud655\ud788 \uc54c\uace0 \uc788\ub2e4\uba74 \uadf8 \uac04\uadf9\uc744 \uc190\uc27d\uac8c \uc881\ud600\ub098\uac08 \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc0c1\ub300\ubc29 \ud639\uc740 \ub0b4\uac00 \ubaa8\ub974\ub294 \uc9c0\uc2dd\uc774\uc5b4\ub3c4 \uae30\ubcf8\uae30\uac00 \uc788\ub2e4\uba74(\uba85\ud655\ud55c \uc6a9\uc5b4\ub97c \uc54c\uace0 \uc788\ub2e4\uba74) \ub0b4 \uc9c0\uc2dd\uc744 \uc54c\ub824\uc8fc\uae30\uc5d0\ub3c4, \uc0c8\ub85c\uc6b4 \uc9c0\uc2dd\uc744 \ubc1b\uc544\ub4e4\uc774\ub294 \ub370\ub3c4 \uc218\uc6d4\ud558\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"2-\ub3d9\uc791\uc6d0\ub9ac\ub97c-\uae30\ubc18\uc73c\ub85c\ud55c-\uc774\ud574",children:"2. \ub3d9\uc791\uc6d0\ub9ac\ub97c \uae30\ubc18\uc73c\ub85c\ud55c \uc774\ud574"}),"\n",(0,t.jsx)(n.p,{children:"JavaScript\uc758 \ub3d9\uc791 \uc6d0\ub9ac\ub97c \ubaa8\ub974\uace0 JavaScript \ucf54\ub4dc\ub97c \uc9dc\ub294 \uac83\uacfc \uc54c\uace0 \uc9dc\ub294 \uac83\uc774 \ucc9c\uc9c0 \ucc28\uc774\uc778 \ub4ef, React\ub3c4 \ub9c8\ucc2c\uac00\uc9c0. \ud558\uc9c0\ub9cc \uc9c0\uae08\uaecf \uc774 \ucc45\uc5d0\uc11c \ub2e4\ub8e8\ub294 \uadfc\ubcf8\uc801\uc778 React \uc9c0\uc2dd \uc815\ubcf4\ub4e4\uc744 \uc5bb\uae30\ub780 \uc27d\uc9c0 \uc54a\uc558\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uae30\uc874\uc758 \ubb38\uc81c\uc810\uc744 \uc9da\uc5b4\uc8fc\uace0, \uc774\uc5d0 \ub300\ud55c \ud574\uacb0\ucc45\ub4e4\uc744 \ub3d9\uc791 \uc6d0\ub9ac\ub97c \uae30\ubc18\uc73c\ub85c \uc124\uba85\ud574 \uc8fc\ub294 \uc810\ub4e4\uc774 \ub3c4\uc6c0\uc774 \ub9ce\uc774 \ub418\uc5c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ub3d9\uc791 \uc6d0\ub9ac\ub97c \uc774\ud574\ud574\uc57c \uc5b4\ub290 \ucf54\ub4dc\uac00 \uc88b\uc740 \ucf54\ub4dc\uc778\uc9c0 \ud310\ubcc4\ud560 \uc218 \uc788\uace0, \ubcf8\uc778\uc774 \uc791\uc131\ud55c \ucf54\ub4dc\uac00 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud560\uc9c0, \uc989 \uc608\uce21 \uac00\ub2a5\ud55c React \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \ub370\uc5d0 \ud070 \ub3c4\uc6c0\uc774 \ub420 \uac83 \uac19\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"3-\ub9ac\uc561\ud2b8-\uad6c\uc131\uc694\uc18c\uc758-\ub2e4\uc591\ud55c-\uad00\uc810\uc744-\uc774\ud574",children:"3. \ub9ac\uc561\ud2b8 \uad6c\uc131\uc694\uc18c\uc758 \ub2e4\uc591\ud55c \uad00\uc810\uc744 \uc774\ud574"}),"\n",(0,t.jsx)(n.p,{children:"React\ub97c \ub2e4\ub8e8\uba70 \ub098\ud0c0\ub098\ub294 \uc0c1\ubc18\ub418\ub294 \uad00\uc810\uc5d0 \ub300\ud574 \uac01 \uc9c4\uc601\uc744 \ub300\ubcc0\ud558\uba70 \uc774\uc57c\uae30\ub97c \ub098\ub204\ub294 \uc810\ub3c4 \ud765\ubbf8\ub86d\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc774\uc804\uc5d0 \ube14\ub85c\uae45 \ud588\ub358 \uc8fc\uc81c\uc778 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc5d0 \ub0b4 \uc0dd\uac01\uc740 \uc774 \ucc45\uc744 \ubcf4\uba74\uc11c \uc880 \ub354 \uc0dd\uac01\ud574 \ubd10\uc57c \ud560 \uad6c\uc2e4\uc774 \uc0dd\uacbc\uace0, \uace0\ucc28\ucef4\ud3ec\ub10c\ud2b8(HOC)\uc5d0 \ub300\ud55c \ud65c\uc6a9 \uace0\ubbfc\ub3c4 \uc880 \ub354 \uae4a\uc5b4\uc84c\ub2e4."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"\ub9c8\uce58\uba70",children:"\ub9c8\uce58\uba70"}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \ucc45\uc5d0 \ub300\ud55c \ub2e4\uc591\ud55c \uc0dd\uac01\uc744 \uc801\uc5b4\ubcf4\uc558\ub2e4. \ud604\uc7ac \uc774 \ucc45\uc758 \ub0b4\uc6a9\uc744 \ubc14\ud0d5\uc73c\ub85c \uc2e4\ubb34 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc810\uc9c4\uc801\uc73c\ub85c \uc801\uc6a9\ud558\uace0 \uc788\ub294 \uc911\uc774\ub2e4. \ub9c8\uce58 \ub2a5\ub825\uc790 \uc0ac\uc218\uc5d0\uac8c \ucf54\ub4dc \ub9ac\ubdf0\ub97c \ubc1b\ub294 \ub4ef, \ud504\ub85c\uc81d\ud2b8\uc5d0 \ubc14\ub85c \uc801\uc6a9\ud560 \uc218 \uc788\ub294 \uc0ac\ub840\ub4e4\uc774 \ub9ce\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc5b4, \ub354\uc6b1 \ud5a5\uc0c1\ub41c \ucf54\ub4dc\ub97c \uc791\uc131\ud574 \ub098\uac08 \uc218 \uc788\uc744 \uac83 \uac19\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ub610, \uc6f9 \ubcf4\uc548\uc744 \uc8fc\uc81c\ub85c \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uace0 \uc788\ub294 \ud300 \ub3d9\ub8cc\ub4e4\uc5d0\uac8c \uc774 \ucc45\uc744 \uac15\ub825\ud788 \ucd94\ucc9c\ud558\uc600\ub294\ub370, \ub3d9\ub8cc\ub4e4\uc774 \uc774 \ucc45\uc744 \uc77d\uc740 \ud6c4 \ub9e4\uc6b0 \uc88b\ub2e4\ub294 \ubc18\uc751\uc744 \ubcf4\uc5ec\uc8fc\uc5c8\uace0, \uc774 \ucc45\uc758 \ubcf4\uc548 \ucc55\ud130\ub97c \uc911\uc2ec\uc73c\ub85c \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud558\uace0 \uc788\ub2e4. \uc774\ucc98\ub7fc \ucc45\uc740 \uc2e4\ubb34\uc5d0 \uc885\uc0ac\ud558\ub294 \uc0ac\ub78c\ub4e4\uc5d0\uac8c\ub3c4 \ud070 \ub3c4\uc6c0\uc774 \ub41c\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ub0a8\uc740 \uc808\ubc18 \ubd80\ubd84\uc5d0\uc11c\ub294 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uacfc \uc6f9 \ucd5c\uc801\ud654\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc5b4 \uc774\uc804\uc5d0 \ud63c\uc790 \uac80\uc0c9\ud558\uc5ec \uacf5\ubd80\ud588\ub358 \uc9c0\uc2dd\uacfc \ube44\uad50\ud574\ubcf4\uba74\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub294 \uae30\ud68c\uac00 \ub420 \uac83 \uac19\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"Deep dive \uc2dc\ub9ac\uc988\ub294 \ubaa8\ub450 \uae4a\uc740 \uc9c0\uc2dd\uc744 \ub2e4\ub8e8\uae30 \ub54c\ubb38\uc5d0, \uc774 \ucc45\uc744 \ud1b5\ud574 React\ub97c \ucc98\uc74c \ubc30\uc6b0\ub824\ub294 \uc0ac\ub78c\uc5d0\uac8c\ub294 \ub0b4\uc6a9\uc774 \ub2e4\uc18c \ubcf5\uc7a1\ud558\uac8c \ub290\uaef4\uc9c8 \uc218 \uc788\ub2e4. \ub530\ub77c\uc11c, JavaScript\uc640 React\ub97c \uba3c\uc800 \ub2e4\ub8e8\uc5b4\ubcf8 \ud6c4 \uc774 \ucc45\uc744 \uad6c\ub9e4\ud558\uc5ec \uae4a\uac8c \uacf5\ubd80\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud55c\ub2e4. \ub9cc\uc57d \uc774\ubbf8 React\ub97c \ub2e4\ub8e8\uc5b4\ubd24\ub2e4\uba74, \ub9d0\ud560 \uac83\ub3c4 \uc5c6\uc774 \uc774 \ucc45\uc744 \uac15\ub825\ud788 \ucd94\ucc9c\ud558\uace0 \uc2f6\ub2e4."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.yes24.com/Product/Goods/123161563",children:"yes24 - \ubaa8\ub358 \ub9ac\uc561\ud2b8 Deep dive"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://yceffort.kr/",children:"\uc800\uc790 \uae40\uc6a9\ucc2c\ub2d8\uc758 \ube14\ub85c\uadf8"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},2513:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/modern-react-deep-dive-80b3bba9817ae132937a81096f6b7175.webp"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var t=i(6540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);