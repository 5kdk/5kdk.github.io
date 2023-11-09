"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[2008],{4692:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>h,toc:()=>o});var i=n(5893),t=n(1151);const r={title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",authors:"5kdk",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",tags:["Web","Core Web Vitals"],keywords:["\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8","Core Web Vitals","\uc6f9 \ucd5c\uc801\ud654","SEO","Lighthouse","Unlighthouse","Web vitals extension","Speed Insights"],enableComments:!0},l=void 0,h={permalink:"/blog/2023/11/01/measure-core-web-vitals",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-11-01-measure-core-web-vitals.md",source:"@site/blog/2023-11-01-measure-core-web-vitals.md",title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",date:"2023-11-01T00:00:00.000Z",formattedDate:"2023\ub144 11\uc6d4 1\uc77c",tags:[{label:"Web",permalink:"/blog/tags/web"},{label:"Core Web Vitals",permalink:"/blog/tags/core-web-vitals"}],readingTime:11.775,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd UX Engineer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\uc744 \uc704\ud55c \ub3c4\uad6c \ubaa8\uc74c",authors:"5kdk",description:"\uc6f9 \uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uce21\uc815\ud574\ubcf4\uc790.",tags:["Web","Core Web Vitals"],keywords:["\ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8","Core Web Vitals","\uc6f9 \ucd5c\uc801\ud654","SEO","Lighthouse","Unlighthouse","Web vitals extension","Speed Insights"],enableComments:!0},unlisted:!1,prevItem:{title:"Next.js\ub97c \uc911\uc2ec\uc73c\ub85c \ud55c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \ucd5c\uc801\ud654",permalink:"/blog/2023/11/09/improving-cwv-nextjs"},nextItem:{title:"\uc6f9 \uc131\ub2a5 \uc9c0\ud45c, \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8(CWV)",permalink:"/blog/2023/10/24/core-web-vitals"}},c={authorsImageUrls:[void 0]},o=[{value:"1. \uac1c\ubc1c \uc2dc \uc720\uc6a9\ud55c \uce21\uc815 \ub3c4\uad6c\ub4e4",id:"1-\uac1c\ubc1c-\uc2dc-\uc720\uc6a9\ud55c-\uce21\uc815-\ub3c4\uad6c\ub4e4",level:2},{value:"Lighthouse",id:"lighthouse",level:3},{value:"Unlighthouse",id:"unlighthouse",level:3},{value:"Web vital \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8",id:"web-vital-\ud655\uc7a5-\ud504\ub85c\uadf8\ub7a8",level:3},{value:"2. \uc9c0\uc18d\uc801\uc778 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \ub3c4\uad6c\ub4e4",id:"2-\uc9c0\uc18d\uc801\uc778-\ubaa8\ub2c8\ud130\ub9c1\uc744-\uc704\ud55c-\ub3c4\uad6c\ub4e4",level:2},{value:"Google Search Console",id:"google-search-console",level:3},{value:"PageSpeed Insights",id:"pagespeed-insights",level:3},{value:"Next.js Speed Insights",id:"nextjs-speed-insights",level:3},{value:"\ucee4\uc2a4\ud140 \ub808\ud3ec\ud305",id:"\ucee4\uc2a4\ud140-\ub808\ud3ec\ud305",level:3}];function d(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["\uc774\uc804 \ud3ec\uc2a4\ud305\uc5d0\uc11c \uc0b4\ud3b4\ubcf8 ",(0,i.jsx)(s.strong,{children:'"Core Web Vitals"'}),", \uac01\uc790\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \uac1c\uc120\ud558\uae30 \uc704\ud55c \uccab \ub2e8\uacc4\ub85c \uc5b4\ub5bb\uac8c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \uce21\uc815\ud560 \uc218 \uc788\ub294 \uc9c0\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790."]}),"\n",(0,i.jsx)(s.p,{children:"\uc774\uac83\uc800\uac83 \ucc3e\uc544\ubcf4\uace0 \uc815\ub9ac\ud558\ub2e4 \ubcf4\ub2c8 \ud06c\uac8c \uac1c\ubc1c \uc2dc \uc720\uc6a9\ud55c \uce21\uc815 \ub3c4\uad6c\ub4e4\uacfc \uc9c0\uc18d\uc801\uc778 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \ub3c4\uad6c\ub4e4\ub85c \ub098\ub204\uc5b4\uc84c\ub2e4."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"\uc774\uc804 \ud3ec\uc2a4\ud305:"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"/blog/2023/10/24/core-web-vitals",children:"\uc6f9 \uc131\ub2a5 \uc9c0\ud45c, \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8(CWV)"})})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"1-\uac1c\ubc1c-\uc2dc-\uc720\uc6a9\ud55c-\uce21\uc815-\ub3c4\uad6c\ub4e4",children:"1. \uac1c\ubc1c \uc2dc \uc720\uc6a9\ud55c \uce21\uc815 \ub3c4\uad6c\ub4e4"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"lighthouse",children:"Lighthouse"}),"\n",(0,i.jsx)(s.p,{children:"Lighthouse\ub294 \ud06c\ub86c \uc6f9 \uc2a4\ud1a0\uc5b4\uc5d0\uc11c \ub2e4\uc6b4 \ubc1b\uc744 \uc218 \uc788\ub294 \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8\uc774\uba70, \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc5d0\uc11c\ub3c4 \uc190\uc27d\uac8c \ub9cc\ub098\ubcfc \uc218 \uc788\ub2e4. Lighthouse\ub294 \uc81c\uacf5\ub41c URL\uc5d0 \ub300\ud574 \uc77c\ub828\uc758 \uac10\uc0ac\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc791\ub3d9\ud558\uace0, \uc774\ub7ec\ud55c \uac10\uc0ac\ub97c \uae30\ubc18\uc73c\ub85c \ud398\uc774\uc9c0\uac00 \uc5bc\ub9c8\ub098 \uc798 \uc218\ud589\ub418\uc5c8\ub294\uc9c0\uc5d0 \ub300\ud55c \ubcf4\uace0\uc11c\ub97c \uc0dd\uc131\ud55c\ub2e4."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Performance"}),",\xa0",(0,i.jsx)(s.strong,{children:"Accessibility"}),",\xa0",(0,i.jsx)(s.strong,{children:"Best Practices"}),", ",(0,i.jsx)(s.strong,{children:"SEO"}),", ",(0,i.jsx)(s.strong,{children:"PWA"})," \uc758 \ub2e4\uc12f\uac00\uc9c0 \uae30\uc900\uc5d0 \ub530\ub77c \ubd84\uc11d \uc810\uc218\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["\ud0c0\uc0ac \ud50c\ub7ec\uadf8\uc778\uc774 \ubcf4\uace0\uc11c\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\uc73c\ubbc0\ub85c \uc2dc\ud06c\ub9bf \ubaa8\ub4dc\uc5d0\uc11c Lighthouse \ubcf4\uace0\uc11c\ub97c \uc2e4\ud589\ud558\ub294 \uac83\uc774 \uc911\uc694\ud558\ub2e4.",(0,i.jsx)(s.br,{}),"\n","(\ubb3c\ub860 build\ub3c4 \uc78a\uc9c0 \ub9d0\uc544\uc57c !)"]})}),"\n",(0,i.jsx)(s.p,{children:"\uc774 \uc911 Performance \uc810\uc218\uac00 \ud604\uc7ac \ud398\uc774\uc9c0\uc758 \uc131\ub2a5\uc744 \uce21\uc815\ud55c \uc810\uc218\uc774\uba70, \uc774\ub294 Metrics \uc9c0\ud45c\uc758 \uc138\ubd80 \ud56d\ubaa9\uc744 \uae30\uc900\uc73c\ub85c \uce21\uc815\ub41c\ub2e4."}),"\n",(0,i.jsx)(s.admonition,{title:"Lighthouse (v8) \ubc14\uc774\ud0c8 \uac00\uc911\uce58",type:"info",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\ucf58\ud150\uce20\uac00 \ud3ec\ud568\ub41c \ucd5c\ub300 \ud398\uc778\ud2b8(LCP): 25%"}),"\n",(0,i.jsx)(s.li,{children:"\ucd1d \ucc28\ub2e8 \uc2dc\uac04*(TBT): 30% * (\uccab \uc785\ub825 \uc9c0\uc5f0(FCP)\uacfc \uc720\uc0ac)"}),"\n",(0,i.jsx)(s.li,{children:"\ucd5c\ucd08 \ucf58\ud150\uce20\uac00 \ud3ec\ud568\ub41c \ud398\uc778\ud2b8(FCB): 10%"}),"\n",(0,i.jsx)(s.li,{children:"\uc18d\ub3c4 \uc9c0\uc218(Speed Index): 15%"}),"\n",(0,i.jsx)(s.li,{children:"\uc778\ud130\ub799\ud2f0\ube0c \uc2dc\uac04(TTI): 15%"}),"\n",(0,i.jsx)(s.li,{children:"\ub204\uc801 \ub808\uc774\uc544\uc6c3 \uc774\ub3d9(CLS): 15%"}),"\n"]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"lighthouse example 1",src:n(3946).Z+"",width:"1006",height:"1021"})}),"\n",(0,i.jsx)(s.p,{children:"\uac1c\uc120\uc774 \ud544\uc694\ud55c \uc601\uc5ed\uc774 \uc788\ub294 \uacbd\uc6b0 \ubcf4\uace0\uc11c\uc5d0\uc11c \uac1c\uc120 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc778\uc0ac\uc774\ud2b8\ub3c4 \ucc3e\uc544 \ubcfc \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"lighthouse example 2",src:n(601).Z+"",width:"1008",height:"734"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"lighthouse example 3",src:n(789).Z+"",width:"996",height:"562"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"unlighthouse",children:"Unlighthouse"}),"\n",(0,i.jsx)(s.p,{children:"\uc6f9 \uc0ac\uc774\ud2b8\uc758 \ubaa8\ub4e0 \ub2e8\uc77c \ud398\uc774\uc9c0\uc5d0 \ub300\ud574 Lighthouse \ubcf4\uace0\uc11c\ub97c \uc2e4\ud589\ud558\ub294 \uc624\ud508\uc18c\uc2a4 \ub3c4\uad6c\uc774\uba70 \ubaa8\ub4e0 \uc791\uc5c5\uc744 \ubcd1\ub82c\ub85c \uc218\ud589\ud558\ubbc0\ub85c \uba87 \ubd84 \uc548\uc5d0 \uc218\uc2ed, \uc218\ubc31 \uac1c\uc758 \ud398\uc774\uc9c0\ub97c \ubd84\uc11d\ud558\uc5ec \uc2e4\ud589\ud558\uae30 \uc801\ud569\ud558\ub2e4."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"unlighthouse homepage image",src:n(4546).Z+"",width:"1789",height:"1115"})}),"\n",(0,i.jsx)(s.p,{children:"\uc0c8 \ub514\ub809\ud1a0\ub9ac\ub97c \ub9cc\ub4e0 \ub2e4\uc74c \uc544\ub798 \ucf54\ub4dc\ub85c unlighthouse\ub97c \uc2e4\ud589\ud558\uba74 \uc6f9 \uc0ac\uc774\ud2b8\uc758 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\ub294 UI\uac00 \ub098\ud0c0\ub09c\ub2e4."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"npx unlighthouse --site <your-site>\n# OR pnpm dlx unlighthouse --site <your-site>\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"unlighthouse example",src:n(6101).Z+"",width:"3360",height:"2049"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Read more:"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"https://unlighthouse.dev/",children:"Unlighthouse \uacf5\uc2dd \uc0ac\uc774\ud2b8"})})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"web-vital-\ud655\uc7a5-\ud504\ub85c\uadf8\ub7a8",children:"Web vital \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8"}),"\n",(0,i.jsx)(s.p,{children:"Web Vitals \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8\uc740 \ud06c\ub86c \uc6f9 \uc2a4\ud1a0\uc5b4\uc5d0\uc11c \ubb34\ub8cc\ub85c \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc744 \uc218 \uc788\uc73c\uba70, \ud655\uc7a5\ud504\ub85c\uadf8\ub7a8 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uba74 \ud604\uc7ac \uc6f9\ud398\uc774\uc9c0\uc758 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uc810\uc218\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"web vital extension image",src:n(8629).Z+"",width:"1166",height:"762"})}),"\n",(0,i.jsxs)(s.p,{children:["Web Vitals \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8\uc740 \ub2e8\uc21c\ud788 \uc810\uc218\ub97c \ubcf4\uc5ec\uc8fc\ub294 \uac83 \uc774\uc0c1\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294\ub370, \uc704 \uc774\ubbf8\uc9c0\ucc98\ub7fc ",(0,i.jsx)(s.strong,{children:"Console logging \uc635\uc158\uc744 \ud65c\uc131\ud654"}),"\ub97c \ud558\uba74, \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194 \ucc3d\uc5d0\uc11c \uc2e4\uc2dc\uac04\uc73c\ub85c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uc810\uc218\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"web vital extension example 1",src:n(7785).Z+"",width:"758",height:"344"})}),"\n",(0,i.jsx)(s.p,{children:"\ud398\uc774\uc9c0 \ub85c\ub4dc \uc2dc\uac04\uacfc \uac19\uc740 \uc2e4\uc2dc\uac04 \uc815\ubcf4\ubfd0\ub9cc \uc544\ub2c8\ub77c, LCP(Largest Contentful Paint, \ucf58\ud150\uce20\uac00 \ud3ec\ud568\ub41c \ucd5c\ub300 \ud398\uc778\ud2b8) \uc694\uc18c\uc5d0 \ub300\ud55c \uc815\ubcf4\ub3c4 \ud568\uaed8 \uc81c\uacf5\ub418\ubbc0\ub85c, \uc6f9\uc0ac\uc774\ud2b8 \uc131\ub2a5\uc758 \ubcd1\ubaa9 \ud604\uc0c1\uc744 \ub354\uc6b1 \uc27d\uac8c \ucc3e\uc544\ub0bc \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"web vital extension example 2",src:n(3430).Z+"",width:"865",height:"408"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"web vital extension example 3",src:n(1707).Z+"",width:"1244",height:"576"})}),"\n",(0,i.jsxs)(s.p,{children:["\ub610\ud55c 2024\ub144 3\uc6d4\ubd80\ud130 FID(First Input Delay, \ucd5c\ucd08 \uc785\ub825 \ubc18\uc751 \uc2dc\uac04)\ub97c \ub300\uccb4\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc0c1\ud638\uc791\uc6a9\uc5d0 \ub300\ud55c \uc6f9 \ud398\uc774\uc9c0\uc758 ",(0,i.jsx)(s.strong,{children:"\uc804\ubc18\uc801\uc778 \uc751\ub2f5\uc131\uc744 \ud3c9\uac00\ud558\ub294 \uce21\uc815 \uc9c0\ud45c\uc778 INP(Interactive Notification Performance)\uc5d0 \ub300\ud55c \uc815\ubcf4\ub3c4 \uc2e4\uc2dc\uac04\uc73c\ub85c \uc81c\uacf5"}),"\ud55c\ub2e4."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"web vital extension example 4",src:n(2735).Z+"",width:"1250",height:"505"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Read more:"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"https://web.dev/articles/inp?hl=ko",children:"Interaction to Next Paint(\ub2e4\uc74c \ud398\uc778\ud2b8\uc640\uc758 \uc0c1\ud638\uc791\uc6a9)(INP) \xa0|\xa0 Articles \xa0|\xa0 web.dev"})})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"2-\uc9c0\uc18d\uc801\uc778-\ubaa8\ub2c8\ud130\ub9c1\uc744-\uc704\ud55c-\ub3c4\uad6c\ub4e4",children:"2. \uc9c0\uc18d\uc801\uc778 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \ub3c4\uad6c\ub4e4"}),"\n",(0,i.jsx)(s.p,{children:"\uc0ac\uc774\ud2b8\ub97c \ucd5c\uc801\ud654\ud55c \ud6c4\uc5d0\ub294 \uacc4\uc18d \ubc18\ubcf5\ud560 \uc218 \uc788\ub3c4\ub85d \uc6b4\uc601 \uc911\uc5d0 \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 \uac83\uc774 \uc911\uc694\ud558\ub2e4. \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud560 \ub54c\ub294 \uc77c\ud68c\uc131 lab \ud14c\uc2a4\ud2b8\uc5d0 \uc758\uc874\ud558\uae30\ubcf4\ub2e4\ub294 \uc7a5\uae30\uac04\uc5d0 \uac78\uccd0 \ucd94\uc801\ud558\ub294 \uac83\uc774 \uc911\uc694\ud558\ub2e4."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Read more:"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"https://web.dev/articles/lab-and-field-data-differences?hl=ko",children:"\uc2e4\ud5d8\uc2e4 \ubc0f \ud604\uc7a5 \ub370\uc774\ud130\uac00 \ub2e4\ub97c \uc218 \uc788\ub294 \uc774\uc720\uc640 \ud574\uc57c \ud560 \uc77c \xa0|\xa0 Articles \xa0|\xa0 web.dev"})})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"google-search-console",children:"Google Search Console"}),"\n",(0,i.jsx)(s.p,{children:"\uad6c\uae00 \uc11c\uce58 \ucf58\uc194\uc758 \ud398\uc774\uc9c0 \uacbd\ud5d8 \ubcf4\uace0\uc11c\uc5d0\uc11c\ub294 \uc0ac\uc774\ud2b8 \ubc29\ubb38\uc790\uc758 \uc0ac\uc6a9\uc790 \ud658\uacbd\uc5d0 \uad00\ud55c \uc694\uc57d\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. \uad6c\uae00\uc5d0\uc11c\ub294 \uc0ac\uc774\ud2b8\uc758 \uac1c\ubcc4 URL\uc5d0 \uad00\ud55c \ud398\uc774\uc9c0 \uacbd\ud5d8 \uce21\uc815\ud56d\ubaa9\uc744 \ud3c9\uac00\ud558\uace0 \uc774\ub97c \uad6c\uae00 \uac80\uc0c9\uacb0\uacfc\uc758 URL \uc21c\uc704 \uacb0\uc815 \uc2e0\ud638\ub85c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"google search console example 1",src:n(3868).Z+"",width:"1252",height:"1117"})}),"\n",(0,i.jsx)(s.p,{children:"\uad6c\uae00 \uc11c\uce58 \ucf58\uc194\uc744 \ud1b5\ud574 \uc6f9\uc0ac\uc774\ud2b8\uc758 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\ub97c \ubd84\uc11d\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud558\ub2e4. \ud06c\ub864\ub9c1\ub41c \ubaa8\ub4e0 \ud398\uc774\uc9c0\ub97c '\ub290\ub9bc', '\uac1c\uc120\uc774 \ud544\uc694\ud568', '\uc88b\uc74c' \uc138 \uac00\uc9c0 \uce74\ud14c\uace0\ub9ac\ub85c \ubd84\ub958\ud558\uc5ec \uc81c\uacf5\ud55c\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc6f9\uc0ac\uc774\ud2b8\uc758 \uac01 URL\uc774 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uc9c0\ud45c\ub97c \ucda9\uc871\ud558\ub294\uc9c0 \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"google search console example 2",src:n(2127).Z+"",width:"1261",height:"926"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"pagespeed-insights",children:"PageSpeed Insights"}),"\n",(0,i.jsxs)(s.p,{children:["PSI(PageSpeed Insights)\uc758 \uc2e4\uc81c \uc0ac\uc6a9\uc790 \ud658\uacbd \ub370\uc774\ud130\ub294\xa0",(0,i.jsx)(s.a,{href:"https://developers.google.com/web/tools/chrome-user-experience-report?hl=ko",children:"Chrome \uc0ac\uc6a9\uc790 \ud658\uacbd \ubcf4\uace0\uc11c"}),"\xa0(CrUX) \ub370\uc774\ud130 \uc138\ud2b8\ub97c \uae30\ubc18\uc73c\ub85c \ud55c\ub2e4. PSI\uc5d0\uc11c\ub294 \uc9c0\ub09c 28\uc77c\uc758 \uc218\uc9d1 \uae30\uac04 \ub3d9\uc548 \uc2e4\uc81c \uc0ac\uc6a9\uc790\uc758\xa0",(0,i.jsx)(s.a,{href:"https://web.dev/fcp/?hl=ko",children:"\uccab \ubc88\uc9f8 \ucf58\ud150\uce20 \ud398\uc778\ud2b8"}),"\xa0(FCP),\xa0",(0,i.jsx)(s.a,{href:"https://web.dev/fid/?hl=ko",children:"\ucd5c\ucd08 \uc785\ub825 \ubc18\uc751 \uc2dc\uac04"}),"\xa0(FID),\xa0",(0,i.jsx)(s.a,{href:"https://web.dev/lcp/?hl=ko",children:"\ucf58\ud150\uce20\uac00 \ud3ec\ud568\ub41c \ucd5c\ub300 \ud398\uc778\ud2b8"}),"\xa0(LCP),\xa0",(0,i.jsx)(s.a,{href:"https://web.dev/cls/?hl=ko",children:"\ub808\uc774\uc544\uc6c3 \ubcc0\uacbd \ud69f\uc218"}),"\xa0(CLS),\xa0",(0,i.jsx)(s.a,{href:"https://web.dev/inp/?hl=ko",children:"\ub2e4\uc74c \ud398\uc778\ud2b8\uc640\uc758 \uc0c1\ud638\uc791\uc6a9"}),"\xa0(INP) \uacbd\ud5d8\uc744 \ubcf4\uace0\ud55c\ub2e4. PSI\uc5d0\uc11c\ub294 \uc2e4\ud5d8 \uce21\uc815\ud56d\ubaa9\uc778\xa0",(0,i.jsx)(s.a,{href:"https://web.dev/ttfb/?hl=ko",children:"TTFB (Time to First Byte)"}),"\uc758 \uacbd\ud5d8\ub3c4 \ubcf4\uace0\ud55c\ub2e4."]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Chrome \uc0ac\uc6a9\uc790 \ud658\uacbd \ubcf4\uace0\uc11c\xa0(CrUX)"})}),(0,i.jsx)("div",{children:(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsxs)(s.p,{children:["\uc131\ub2a5\uc744 \uce21\uc815\ud558\ub294 \ub610 \ub2e4\ub978 \ud6cc\ub96d\ud55c \ubb34\ub8cc \uc624\ud508\uc18c\uc2a4 \ubc29\ubc95\uc740 ",(0,i.jsx)(s.a,{href:"https://developers.google.com/web/tools/chrome-user-experience-report",children:"Chrome \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \ubcf4\uace0\uc11c"})," \ub370\uc774\ud130\uc138\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\ub2e4."]}),(0,i.jsx)(s.p,{children:"Chrome \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \ubcf4\uace0\uc11c\ub294 \uc2e4\uc81c Chrome \uc0ac\uc6a9\uc790\uac00 \uc6f9\uc5d0\uc11c \uc778\uae30 \uc788\ub294 \ubaa9\uc801\uc9c0\ub97c \uacbd\ud5d8\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uc9c0\ud45c\ub97c \uc81c\uacf5\ud55c\ub2e4."}),(0,i.jsxs)(s.p,{children:["\uc774 \ub370\uc774\ud130 \uc138\ud2b8\ub294 ",(0,i.jsx)(s.a,{href:"https://console.cloud.google.com/bigquery?project=chrome-ux-report&pli=1",children:"BigQuery"}),"\uc5d0\uc11c \uacf5\uac1c\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, ",(0,i.jsx)(s.a,{href:"https://lookerstudio.google.com/overview?",children:"Google \ub370\uc774\ud130 \uc2a4\ud29c\ub514\uc624"}),"\uc5d0\uc11c \uc644\uc804\ud788 \ubb34\ub8cc\ub85c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4."]}),(0,i.jsxs)(s.p,{children:["\ub2e4\ud589\ud788\ub3c4 \uc6f9\uc0ac\uc774\ud2b8\uc758 \uc131\ub2a5\uc744 \ucd94\uc801\ud558\uae30 \uc704\ud55c \ud15c\ud50c\ub9bf\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 ",(0,i.jsx)(s.a,{href:"https://lookerstudio.google.com/u/0/datasources/create?connectorId=AKfycbxk7u2UtsqzgaA7I0bvkaJbBPannEx0_zmeCsGh9bBZy7wFMLrQ8x24WxpBzk_ln2i7",children:"\uc624\ud508\uc18c\uc2a4 \ub300\uc2dc\ubcf4\ub4dc"}),"\uac00 \uc788\ub2e4."]}),(0,i.jsx)(s.p,{children:"\uc774 \ub370\uc774\ud130 \uc138\ud2b8\uc758 \uc720\uc77c\ud55c \ub2e8\uc810\uc740 \uc6f9 \uc0ac\uc774\ud2b8\uac00 CrUX \ubcf4\uace0\uc11c\uc5d0 \ud3ec\ud568\ub418\ub824\uba74 \uc758\ubbf8 \uc788\ub294 \ubc29\ubb38 \ud69f\uc218\uac00 \uc788\uc5b4\uc57c \ud558\uba70, \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ub370\uc774\ud130 \ubd80\uc871\uc73c\ub85c \uc778\ud574 \ubcf4\uace0\uc11c\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc774\ub2e4. \ub530\ub77c\uc11c \uc791\uc5c5 \uc911\uc774\uac70\ub098 \ucd5c\uadfc\uc5d0 \ub9cc\ub4e0 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\ub294 \uc801\ud569\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4."}),(0,i.jsx)(s.p,{children:"\ub610\ud55c \ub370\uc774\ud130\ub294 \uc6d4 \ub2e8\uc704\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\uba70, \ubcf4\ud1b5 \ud55c \ub2ec\uc774 \ub05d\ub098\uace0 \uc57d 15\uc77c \ud6c4\uc5d0 \ub370\uc774\ud130\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8 \uc810\uc218\ub97c \uac1c\uc120\ud558\ub824\ub294 \uacbd\uc6b0 \uac00\uc7a5 \uc2e4\uc6a9\uc801\uc774\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4."}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"data-studio.png",src:n(6756).Z+"",width:"1600",height:"1196"})}),(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Read more:"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Google: ",(0,i.jsx)(s.a,{href:"https://web.dev/chrome-ux-report-data-studio-dashboard/",children:"Example Dashboard (copy for free)"})]})]}),"\n"]})]})})]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Read more:"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"https://web.dev/articles/chrome-ux-report?hl=ko",children:"Chrome UX \ubcf4\uace0\uc11c\ub97c \ud1b5\ud574 \ud604\uc7a5 \uc131\ub2a5 \uc0b4\ud3b4\ubcf4\uae30"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\ud2b9\uc815 \ud398\uc774\uc9c0\uc758 \uc0ac\uc6a9\uc790 \ud658\uacbd \ub370\uc774\ud130\ub97c \ud45c\uc2dc\ud558\ub824\uba74 CrUX \ub370\uc774\ud130 \uc138\ud2b8\uc5d0 \ud3ec\ud568\ub420 \ub9cc\ud07c \ucda9\ubd84\ud55c \ub370\uc774\ud130\uac00 \uc788\uc5b4\uc57c \ud55c\ub2e4. \ud398\uc774\uc9c0\uac00 \ucd5c\uadfc\uc5d0 \uac8c\uc2dc\ub418\uc5c8\uac70\ub098 \uc2e4\uc81c \uc0ac\uc6a9\uc790\uc758 \uc0d8\ud50c\uc774 \ub108\ubb34 \uc801\uc740 \uacbd\uc6b0 \ub370\uc774\ud130\uac00 \ucda9\ubd84\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4. \uc774 \uacbd\uc6b0 PSI\ub294 \ucd9c\ucc98 \uc218\uc900 \uc138\ubd80\uc0ac\ud56d\uc73c\ub85c \ub418\ub3cc\uc544\uac00\uba70, \uc6f9\uc0ac\uc774\ud2b8\uc758 \ubaa8\ub4e0 \ud398\uc774\uc9c0\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uc0ac\uc6a9\uc790 \ud658\uacbd\uc744 \ud3ec\ud568\ud55c\ub2e4. \ucd9c\ucc98\uc5d0 \ub370\uc774\ud130\uac00 \ucda9\ubd84\ud558\uc9c0 \uc54a\uc744 \ub54c\ub3c4 \uc788\ub294\ub370, \uc774 \uacbd\uc6b0 PSI\uc5d0\uc11c \uc2e4\uc81c \uc0ac\uc6a9\uc790 \ud658\uacbd \ub370\uc774\ud130\ub97c \ud45c\uc2dc\ud560 \uc218 \uc5c6\ub2e4."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"amazon.com\uc5d0 \ub300\ud55c \ubcf4\uace0\uc11c",src:n(7769).Z+"",width:"1086",height:"1074"})}),"\n",(0,i.jsx)(s.p,{children:"\uc774\ud558\ub294 Lighthouse\uc640 \uac19\ub2e4."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"nextjs-speed-insights",children:"Next.js Speed Insights"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://nextjs.org/analytics",children:"Next.js Speed Insights"})," \ub97c \uc0ac\uc6a9\ud558\uba74 \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud398\uc774\uc9c0\uc758 \uc131\ub2a5\uc744 \ubd84\uc11d\ud558\uace0 \uce21\uc815\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"vercel-analytics",src:n(2892).Z+"",width:"2464",height:"1726"})}),"\n",(0,i.jsx)(s.p,{children:"Vercel \ubc30\ud3ec\uc5d0\uc11c \uc544\ubb34\uac83\ub3c4 \uad6c\uc131\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc5d0\uc11c \uc2e4\uc81c \uacbd\ud5d8 \uc810\uc218\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Read more:"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"https://vercel.com/docs/concepts/speed-insights?utm_campaign=no-campaign#metrics?utm_source=next-site&utm_medium=learnpages&utm_campaign=no-campaign",children:"Speed Insights Overview"})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"\ucee4\uc2a4\ud140-\ub808\ud3ec\ud305",children:"\ucee4\uc2a4\ud140 \ub808\ud3ec\ud305"}),"\n",(0,i.jsx)(s.p,{children:"Next.js Speed Insights\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 built-in relayer \ub97c \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \uc790\uccb4 \uc11c\ube44\uc2a4\ub85c \uc804\uc1a1\ud558\uac70\ub098 Google \uc560\ub110\ub9ac\ud2f1\uc2a4\ub85c \ud478\uc2dc\ud560 \uc218\ub3c4 \uc788\ub2e4."}),"\n",(0,i.jsxs)(s.p,{children:["\uc774\ub97c \uc704\ud574 Next.js\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,i.jsx)(s.code,{children:"reportWebVitals"})," \ud568\uc218\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:'npx create-next-app@latest nextjs-lighthouse --use-npm --example "https://github.com/vercel/next-learn/tree/main/seo"\n'})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"pages/_app.js"}),"\ub97c \uc5f4\uace0 \ub2e4\uc74c \ud568\uc218\ub97c \ub0b4\ubcf4\ub0b8\ub2e4."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:"export function reportWebVitals(metric) {\n  console.log(metric); // \ucf58\uc194 \ub85c\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2e4\uc2dc\uac04\uc73c\ub85c \uba54\ud2b8\ub9ad\uc744 \uc0b4\ud3b4\ubcf4\ub294 \uc608\uc2dc\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:"\uadf8\ub7f0 \ub2e4\uc74c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ube4c\ub4dc\ud558\uace0 \uc2dc\uc791\ud574\ubcf4\uba74,"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"npm run build && npm run start\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Chrome\uc744 \uc5f4\uba74 \uac1c\ubc1c\uc790 \ub3c4\uad6c \ucf58\uc194\uc5d0 \uba54\ud2b8\ub9ad\uc774 \ud45c\uc2dc\ub41c\ub2e4. \ub610\ud55c \ud398\uc774\uc9c0\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \ub54c\ub9cc ",(0,i.jsx)(s.strong,{children:"FID"}),"\uac00 \ud2b8\ub9ac\uac70\ub41c\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Read more:"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsxs)(s.em,{children:["Next.js: ",(0,i.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/optimizing/analytics",children:"Measuring Performance"})]})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6756:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/data-studio-ca7d873da4669f1c2541513e2b56db66.webp"},3946:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/lighthouse-1-b6e9adc89d45feca2ffba3c11149d65c.webp"},601:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/lighthouse-2-582e0b2214ee7cf3fcc226c09a0a5eed.webp"},789:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/lighthouse-3-8895636269a1bc9f0eab76f421661dee.webp"},7769:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/pagespeed-insights-feeab5961cf224bb08696d3b539b8305.webp"},3868:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/search-console-1-006c8b5923dadb11d08b083d1a3488a0.webp"},2127:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/search-console-2-4101afb14b1d1041dfc9c9c0a3d159a9.webp"},4546:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/unlighthouse-1-1458495633964f381215eb4fbb38ee19.webp"},6101:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/unlighthouse-2-cc3126042f708037f2a9a30e27683f6d.webp"},2892:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/vercel-analytics-987a01c7b034a663ee12c26415521573.webp"},8629:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/web-vitals-1-a35ff3c98a74f7eb1e7c0bf9681074be.webp"},7785:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/web-vitals-2-87c85b275de051c64805b6bc81616173.webp"},3430:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/web-vitals-3-31d818ae172288dbe8792bd26c4da4de.webp"},1707:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/web-vitals-4-e96b7e69df957994899f52e8529c640a.webp"},2735:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/web-vitals-5-b04912e6e52a3c36ce42df5500830c15.webp"},1151:(e,s,n)=>{n.d(s,{Z:()=>h,a:()=>l});var i=n(7294);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);