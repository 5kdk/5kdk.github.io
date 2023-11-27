"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[9244],{2962:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=r(5893),a=r(1151);const t={title:"Suspense, Error Boundary\uc640 \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d",authors:"5kdk",description:"\ube44\ub3d9\uae30\ucc98\ub9ac\uc5d0\uc11c\uc758 Suspense\uc640 ErrorBoundary \ud65c\uc6a9\ubc95.",tags:["React"],keywords:["Suspense","Error Boundary","\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d","\uc120\uc5b8\ud615 \ucef4\ud3ec\ub10c\ud2b8","\uad00\uc2ec\uc0ac \ubd84\ub9ac"],enableComments:!0},d=void 0,o={permalink:"/blog/2023/10/18/suspense-for-data-fetching",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-10-18-suspense-for-data-fetching/index.md",source:"@site/blog/2023-10-18-suspense-for-data-fetching/index.md",title:"Suspense, Error Boundary\uc640 \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d",description:"\ube44\ub3d9\uae30\ucc98\ub9ac\uc5d0\uc11c\uc758 Suspense\uc640 ErrorBoundary \ud65c\uc6a9\ubc95.",date:"2023-10-18T00:00:00.000Z",formattedDate:"2023\ub144 10\uc6d4 18\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:10.22,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd Front-end Developer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"Suspense, Error Boundary\uc640 \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d",authors:"5kdk",description:"\ube44\ub3d9\uae30\ucc98\ub9ac\uc5d0\uc11c\uc758 Suspense\uc640 ErrorBoundary \ud65c\uc6a9\ubc95.",tags:["React"],keywords:["Suspense","Error Boundary","\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d","\uc120\uc5b8\ud615 \ucef4\ud3ec\ub10c\ud2b8","\uad00\uc2ec\uc0ac \ubd84\ub9ac"],enableComments:!0},unlisted:!1,prevItem:{title:"\uc6f9 \uc131\ub2a5 \uc9c0\ud45c, \ucf54\uc5b4 \uc6f9 \ubc14\uc774\ud0c8(CWV)",permalink:"/blog/2023/10/24/core-web-vitals"},nextItem:{title:"\ub77c\uc774\ube0c\ub7ec\ub9ac \uc5c6\uc774 \ub85c\uceec \uce90\uc2f1 \uad6c\ud604\ud558\uae30",permalink:"/blog/2023/07/23/caching-technique-without-libraries"}},l={authorsImageUrls:[void 0]},c=[{value:"\uc804\ud1b5\uc801\uc778 \ub370\uc774\ud130 \ud328\uce6d \ucc98\ub9ac",id:"\uc804\ud1b5\uc801\uc778-\ub370\uc774\ud130-\ud328\uce6d-\ucc98\ub9ac",level:2},{value:"React Query",id:"react-query",level:2},{value:"\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d",id:"\uc120\uc5b8\uc801-\ub370\uc774\ud130-\ud328\uce6d",level:2},{value:"Suspense",id:"suspense",level:3},{value:"Error Boundary",id:"error-boundary",level:3},{value:"\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d\uc744 \ud560 \ub54c \uc758 \uc8fc\uc758\uc0ac\ud56d",id:"\uc120\uc5b8\uc801-\ub370\uc774\ud130-\ud328\uce6d\uc744-\ud560-\ub54c-\uc758-\uc8fc\uc758\uc0ac\ud56d",level:2},{value:"\ube44\ub3d9\uae30 \uc694\uccad Waterfall",id:"\ube44\ub3d9\uae30-\uc694\uccad-waterfall",level:3},{value:"Loader\uc640 Skeleton\uc758 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc5d0 \ub300\ud55c \uace0\ubbfc\ud544\uc694",id:"loader\uc640-skeleton\uc758-\uc0ac\uc6a9\uc790-\uacbd\ud5d8\uc5d0-\ub300\ud55c-\uace0\ubbfc\ud544\uc694",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function i(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\ub370\uc774\ud130 \uc694\uccad \uc0c1\ud0dc\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \ub178\ucd9c\ub418\ub294 UX/UI \uc124\uacc4\ub294 \ub9ce\uc740 \uace0\ubbfc\uc744 \ud544\uc694\ub85c \ud55c\ub2e4. \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 React\ub294 \ub2e4\uc591\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\ub294\ub370, \uadf8 \uc911 ",(0,s.jsx)(n.code,{children:"Suspense"}),"\uc640 ",(0,s.jsx)(n.code,{children:"ErrorBoundary"}),"\ub97c \ud65c\uc6a9\ud55c \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d\uc774 \uc788\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc9c0\uae08\ubd80\ud130 ",(0,s.jsx)(n.code,{children:"Suspense"}),"\uc640 ",(0,s.jsx)(n.code,{children:"ErrorBoundary"}),"\ub97c \ud65c\uc6a9\ud55c \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d\uc774 \uc5b4\ub5bb\uac8c \ud6a8\uacfc\uc801\uc778\uc9c0 \ud568\uaed8 \uc54c\uc544\ubcf4\uc790."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"\uc804\ud1b5\uc801\uc778-\ub370\uc774\ud130-\ud328\uce6d-\ucc98\ub9ac",children:"\uc804\ud1b5\uc801\uc778 \ub370\uc774\ud130 \ud328\uce6d \ucc98\ub9ac"}),"\n",(0,s.jsxs)(n.p,{children:["\ub370\uc774\ud130 \ud328\uce6d\uc740 \uc804\ud1b5\uc801\uc73c\ub85c(?) \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubd80\uc5d0\uc11c ",(0,s.jsx)(n.code,{children:"data"}),", ",(0,s.jsx)(n.code,{children:"loading"}),", ",(0,s.jsx)(n.code,{children:"error"}),"\uc758 \uc0c1\ud0dc\ub4e4\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubc18\ud658\ub418\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub300\ud55c \ubd84\uae30 \ucc98\ub9ac\ub85c \uc774\ub8e8\uc5b4\uc84c\ub2e4. \uc544\ub798\uc758 \uc608\uc2dc \ucf54\ub4dc\ub294 \ube44\ub3d9\uae30 \uc694\uccad\uc73c\ub85c \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc640 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc804\ub2ec\ud558\ub294 \uac04\ub2e8\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="SampleContents.jsx"',children:"const SampleContents = () => {\n  const [sampleDatas, setSampleDatas] = useState();\n  const [isLoading, setIsLoading] = useState(false);\n  const [error, setError] = useState();\n\n  useEffect(() => {\n    (async () => {\n      try {\n        setIsLoading(true); // isLoading \uc0c1\ud0dc\ubcc0\uacbd\n        const { data } = await queryFn(); // axios get \uc694\uccad \uc608\uc2dc \ud568\uc218\n        setSampleDatas(data);\n      } catch (e) {\n        setError(e);\n      } finally {\n        setIsLoading(false); // \uc131\uacf5\uc774\ub4e0 \uc2e4\ud328\uc774\ub4e0 isLoading\uc740 false\n      }\n    })();\n  }, []);\n\n  if (isLoading) {\n    return <Loader />;\n  }\n\n  if (error) {\n    return <Error error={error} />;\n  }\n\n  return (\n    <div>\n      {sampleDatas.map(data => (\n        <Content data={data} />\n      ))}\n    </div>\n  );\n};\n\nexport default SampleContents;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ube44\ub3d9\uae30 \ud568\uc218 ",(0,s.jsx)(n.code,{children:"queryFn"}),"\uac00 \ubc18\ud658\ud558\ub294 \ub370\uc774\ud130\uac00 \ub4e4\uc5b4\uc624\uae30 \uc804\uae4c\uc9c0 ",(0,s.jsx)(n.code,{children:"isLoading"}),", ",(0,s.jsx)(n.code,{children:"error"})," \uc0c1\ud0dc\uc5d0 \ub530\ub77c \ubc18\ud658\ub418\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubd84\uae30 \ucc98\ub9ac\ud558\uc5ec \ub85c\ub529 \uc911\uc77c \ub550 ",(0,s.jsx)(n.code,{children:"<Loader />"}),"\ub97c \ubc18\ud658\ud558\uace0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc744\ub550 ",(0,s.jsx)(n.code,{children:"<Error />"}),"\ub97c \ubc18\ud658\ud558\uba70 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc815\ud655\ud55c \uc815\ubcf4\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"react-query",children:"React Query"}),"\n",(0,s.jsxs)(n.p,{children:["React-Query\ub294 \ube44\ub3d9\uae30 \uc694\uccad\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \uce90\uc2f1 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub2e4. ",(0,s.jsx)(n.strong,{children:"React-Query API\ub4e4\uc774 \uc81c\uacf5\ud558\ub294 \ud504\ub85c\ud37c\ud2f0\ub97c \ud65c\uc6a9\ud558\uba74 \uc880 \ub354 \uae54\ub054\ud558\uac8c \ube44\ub3d9\uae30 \ub85c\uc9c1\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="SampleContents.jsx"',children:"const SampleContents = () => {\n  const {\n    data: sampleDatas,\n    isLoading,\n    error,\n  } = useQuery({ queryKey, queryFn });\n\n  if (isLoading) {\n    return <Loader />;\n  }\n\n  if (error) {\n    return <Error error={error} />;\n  }\n\n  return (\n    <div>\n      {sampleDatas.map(data => (\n        <Content data={data} />\n      ))}\n    </div>\n  );\n};\n\nexport default SampleContents;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["React Query\uc758 API ",(0,s.jsx)(n.code,{children:"useQuery"}),"\uac00 \ubc18\ud658\ud558\ub294 ",(0,s.jsx)(n.code,{children:"isLoading"}),", ",(0,s.jsx)(n.code,{children:"error"})," \uc640 \uac19\uc740 \ud504\ub85c\ud37c\ud2f0\ub97c \ud1b5\ud574 ",(0,s.jsx)(n.code,{children:"useEffect"}),"\ub97c \uc81c\uac70\ud558\uace0 ",(0,s.jsx)(n.code,{children:"useState"})," \uc904\uc774\ub294 \ub4f1 \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubd80 \ub85c\uc9c1\uc744 \uc880 \ub354 \uac04\uc18c\ud654\ud574\uc11c \uccab\ubc88\uc9f8 \uc608\uc2dc\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ub370\uc774\ud130 \uc694\uccad \uc0c1\ud0dc\uc5d0 \ub530\ub77c \ubc18\ud658\ub418\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ub79c\ub354\ub9c1 \uc5ec\ubd80\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\uc120\uc5b8\uc801-\ub370\uc774\ud130-\ud328\uce6d",children:"\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d"}),"\n",(0,s.jsx)(n.p,{children:"\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d\uc740 React\uc758 \uc8fc\uc694 \uac1c\ub150\uc778 **'\uc120\uc5b8\ud615 \ud504\ub85c\uadf8\ub798\ubc0d'**\uc5d0 \uae30\ubc18\ud55c\ub2e4. \uc774\ub294 \uc0c1\ud0dc\uc758 \ubcc0\ud654\uc5d0 \ub530\ub77c UI\ub97c \uc9c1\uc811 \uc870\uc791\ud558\uc9c0 \uc54a\uace0, \uc5b4\ub5a4 \uc0c1\ud0dc\uc5d0 \ub530\ub77c \uc5b4\ub5a4 UI\uac00 \ubcf4\uc5ec\uc838\uc57c \ud558\ub294\uc9c0\ub9cc \uc9d1\uc911\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\ub7ec\ud55c \uc811\uadfc\ubc95\uc740 \ube44\ub3d9\uae30 \uc791\uc5c5\uc758 \ubcf5\uc7a1\uc131\uc744 \ud06c\uac8c \uc904\uc5ec\uc8fc\uba70 \ucf54\ub4dc\uc758 \uac00\ub3c5\uc131\uacfc \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294\ub370, ",(0,s.jsx)(n.code,{children:"Suspense"}),"\uc640 ",(0,s.jsx)(n.code,{children:"ErrorBoundary"}),"\ub294 \uc120\uc5b8\ud615 \ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc73c\ub85c \ube44\ub3d9\uae30 \uc791\uc5c5\uacfc \uc5d0\ub7ec \ucc98\ub9ac\ub97c \ub2f4\ub2f9\ud55c\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc6b0\uc120 ",(0,s.jsx)(n.code,{children:"Suspense"}),"\uc640 ",(0,s.jsx)(n.code,{children:"Error Boundary"}),"\uc5d0 \ub300\ud574 \uac04\ub2e8\ud558\uac8c \uc0b4\ud3b4\ubcf4\uc790."]}),"\n",(0,s.jsx)(n.h3,{id:"suspense",children:"Suspense"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://react.dev/reference/react/Suspense",children:(0,s.jsx)(n.code,{children:"Suspense"})}),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uc790\uc2dd\uc774 \ub85c\ub529\uc744 \uc644\ub8cc\ud560 \ub54c\uae4c\uc9c0 ",(0,s.jsx)(n.code,{children:"fallback"}),"\uc744 \ud45c\uc2dc\ud560 \uc218 \uc788\ub2e4. React\ub294 \uc790\uc2dd\uc5d0\uac8c \ud544\uc694\ud55c \ubaa8\ub4e0 \ucf54\ub4dc\uc640 \ub370\uc774\ud130\uac00 \ub85c\ub4dc\ub420 \ub54c\uae4c\uc9c0 \ub85c\ub529 ",(0,s.jsx)(n.code,{children:"fallback"}),"\uc744 \ud45c\uc2dc\ud55c\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// React \uacf5\uc2dd \ubb38\uc11c\uc758 \uc608\uc81c\n<Suspense fallback={<Loading />}>\n  <SampleContents />\n</Suspense>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"error-boundary",children:"Error Boundary"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",children:(0,s.jsx)(n.code,{children:"Error Boundary"})}),"\ub294 \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec\ub97c \ucea1\ucc98\ud558\uc5ec \ub300\uccb4 UI\ub97c \ubcf4\uc5ec\uc8fc\uac70\ub098 \uc5d0\ub7ec \ub9ac\ud3ec\ud305 \ub4f1\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud55c\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\ud544\uc694\uc5d0 \ub530\ub77c \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\uc744 \ud560 \uc218 \uc788\ub294\ub370, ",(0,s.jsx)(n.code,{children:"ErrorBoundary"}),"\uc758 \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc740 \ub610 \ub2e4\ub978 \ud3ec\uc2a4\ud305\uc73c\ub85c \uc9c4\ud589\ud574\ubcf4\uaca0\ub2e4."]}),"\n",(0,s.jsx)(n.admonition,{title:"\ucd94\ucc9c \ub77c\uc774\ube0c\ub7ec\ub9ac",type:"tip",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/react-error-boundary",children:"react-error-boundary"})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"react-query-\uc640-suspense-error-boundary-\uc0ac\uc6a9\ud558\uae30",children:"React-Query \uc640 Suspense, Error Boundary \uc0ac\uc6a9\ud558\uae30"}),"\n",(0,s.jsxs)(n.p,{children:["useQuery\ub97c ",(0,s.jsx)(n.code,{children:"Suspense"}),", ",(0,s.jsx)(n.code,{children:"Error Boundary"}),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,s.jsx)(n.code,{children:"suspense: true"})," \uc635\uc158\uc744 \ub123\uc5b4\uc8fc\uba74 \ub41c\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="SampleWrapper.jsx"',children:"const SampleWrapper = () => {\n  // ...\n\n  return (\n    <ErrorBoundary fallback={<Error />}>\n      <Suspense fallback={<Loader />}>\n        <SampleContents />\n      </Suspense>\n    </ErrorBoundary>\n  );\n};\n\nexport default SampleWrapper;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="SampleContents.jsx"',children:"const SampleContents = () => {\n  const { data: sampleDatas } = useQuery({ queryKey, queryFn, suspense: true });\n\n  return (\n    <div>\n      {sampleDatas.map(data => (\n        <Content data={data} />\n      ))}\n    </div>\n  );\n};\n\nexport default SampleContents;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Suspense"}),"\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc900\ube44\ub420 \ub54c\uae4c\uc9c0 \ub300\uae30\ud558\uace0 fallback props\ub85c \ubc1b\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubcf4\uc5ec\uc8fc\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4. \uc774\ub85c \uc778\ud574 ",(0,s.jsx)(n.strong,{children:"\ub85c\ub529 \uc0c1\ud0dc\uc5d0 \ub530\ub978 \ub85c\uc9c1\uc774 \ucef4\ud3ec\ub10c\ud2b8 \uc678\ubd80\ub85c \ucd94\ucd9c\ub418\uc5b4 \uac01 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ub85c\ub529 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uace0 \ucc98\ub9ac\ud560 \ud544\uc694\uac00 \uc5c6\uc5b4\uc9c4\ub2e4."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Error Boundary"}),"\ub294 \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec\ub97c \ucea1\ucc98\ud558\uc5ec \ub300\uccb4 UI\ub97c \ubcf4\uc5ec\uc8fc\uac70\ub098 \uc5d0\ub7ec \ub9ac\ud3ec\ud305 \ub4f1\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud55c\ub2e4. \uc774\ub85c \uc778\ud574 ",(0,s.jsx)(n.strong,{children:"\uac01\uac01\uc758 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc5d0\ub7ec \ucc98\ub9ac \ub85c\uc9c1\uc774 \ubd84\uc0b0\ub418\uc9c0 \uc54a\uace0 \ud55c \uacf3\uc5d0\uc11c \uad00\ub9ac\ub420 \uc218 \uc788\ub2e4."})]}),"\n",(0,s.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c \ubcfc \uc218 \uc788\ub4ef\uc774, ",(0,s.jsx)(n.code,{children:"Suspense"}),"\uc640 ",(0,s.jsx)(n.code,{children:"ErrorBoundary"}),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub85c\ub529 \uc0c1\ud0dc\uc640 \uc5d0\ub7ec \ucc98\ub9ac \ub85c\uc9c1\uc744 \ucef4\ud3ec\ub10c\ud2b8 \uc678\ubd80\ub85c \ubd84\ub9ac\ud558\uc5ec \uad00\ub9ac\ud560 \uc218 \uc788\ub294\ub370, ",(0,s.jsx)(n.strong,{children:"\ucef4\ud3ec\ub10c\ud2b8\ub85c\ubd80\ud130 \ubd84\ub9ac\ub41c \ub85c\uc9c1\uc73c\ub85c \ucf54\ub4dc\uc758 \uac00\ub3c5\uc131\uc744 \ub192\uc774\uace0 \uc720\uc9c0\ubcf4\uc218\ub97c \uc6a9\uc774\ud558\uac8c \ud55c\ub2e4."})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["\ubaa8\ub4e0 \ucffc\ub9ac\ubb38\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uac83 \uc774\ub77c\uba74 ",(0,s.jsx)(n.code,{children:"QueryClient"}),"\ub97c \uc0dd\uc131\ud560\ub54c \uae30\ubcf8 \uc635\uc158\uc73c\ub85c \uc9c0\uc815\ud574 \uc904 \uc218 \uc788\ub2e4."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      suspense: true,\n    },\n  },\n});\n"})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ErrorBoundary"}),"\ub294 \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 \uc5d0\ub7ec\ub4e4\uc744 \uacf5\ud1b5\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="ChildWrapper.jsx"',children:"const ChildComponent = () => {\n  // ...\n\n  return (\n    <Suspense fallback={<Loader />}>\n      <SampleContents />\n    </Suspense>\n  );\n};\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="ParentWrapper.jsx"',children:"const ParentComponent = () => {\n  // ...\n  // \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 error\ub97c \ubaa8\ub450 \uce90\uce58\n\n  return (\n    <ErrorBoundary fallback={<Error />}>\n      <ChildComponent />\n      <ChildComponent2 />\n      <ChildComponent3 />\n    </ErrorBoundary>\n  );\n};\n"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\uc120\uc5b8\uc801-\ub370\uc774\ud130-\ud328\uce6d\uc744-\ud560-\ub54c-\uc758-\uc8fc\uc758\uc0ac\ud56d",children:"\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d\uc744 \ud560 \ub54c \uc758 \uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,s.jsx)(n.p,{children:"\uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d\uc740 \ub9ce\uc740 \uc7a5\uc810\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0\ub9cc, \uba87 \uac00\uc9c0 \uc8fc\uc758\uc0ac\ud56d\ub3c4 \uc874\uc7ac\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"No Silver Bullet, \uc740\ud0c4\ud658\uc740 \uc5c6\ub2e4"})})}),"\n",(0,s.jsx)(n.h3,{id:"\ube44\ub3d9\uae30-\uc694\uccad-waterfall",children:"\ube44\ub3d9\uae30 \uc694\uccad Waterfall"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Suspense"}),"\ub85c \uac10\uc2fc \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\uc5d0\uc11c \uc5ec\ub7ec\uac1c\uc758 ",(0,s.jsx)(n.code,{children:"useQuery"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \ube44\ub3d9\uae30 \uc694\uccad Waterfall\uc774 \ubc1c\uc0dd\ud55c\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<Suspense fallback={<Loading />}>\n  <SampleContents /> // 3\uac1c\uc758 query\ubb38\uc774 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\n</Suspense>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"example image 1",src:r(6095).Z+"",width:"1080",height:"396"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<Suspense fallback={<Loading />}>\n  <SampleContents1 /> // 1\uac1c\uc758 query\ubb38 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\n  <SampleContents2 /> // 1\uac1c\uc758 query\ubb38 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\n  <SampleContents3 /> // 1\uac1c\uc758 query\ubb38 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\n</Suspense>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"example image 1",src:r(6456).Z+"",width:"824",height:"582"})}),"\n",(0,s.jsxs)(n.p,{children:["React Query v4.5 \uc774\ud6c4\uc758 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 ",(0,s.jsx)(n.code,{children:"useQuery"}),"\ub300\uc2e0 ",(0,s.jsx)(n.code,{children:"useQueries"}),"\uc758 \uc0ac\uc6a9\uc744 \uace0\ub824\ud574 \ubcfc \ub9cc\ud558\ub2e4. \ube44\ub3d9\uae30 \uc694\uccad\uc744 \ubcd1\ub82c\ub85c \ucc98\ub9ac\ud574 \uc8fc\uba70 ",(0,s.jsx)(n.code,{children:"Suspense"}),"\ub97c \uc9c0\uc6d0\ud574 \uc900\ub2e4!"]}),"\n",(0,s.jsx)(n.h3,{id:"loader\uc640-skeleton\uc758-\uc0ac\uc6a9\uc790-\uacbd\ud5d8\uc5d0-\ub300\ud55c-\uace0\ubbfc\ud544\uc694",children:"Loader\uc640 Skeleton\uc758 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc5d0 \ub300\ud55c \uace0\ubbfc\ud544\uc694"}),"\n",(0,s.jsx)(n.p,{children:"\ub370\uc774\ud130 \ud328\uce6d \uc2dc\uac04\uc774 \uc9e7\uc740 \uacbd\uc6b0 Loader\ub098 Skeleton UI \uac19\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub178\ucd9c\uc740 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uae5c\ube61\uc774\ub294 \uc624\ub958 \ud604\uc0c1 \ucc98\ub7fc \ubcf4\uc77c \uc218 \uc788\uc5b4 \uc624\ud788\ub824 \ubd80\uc815\ud655\ud55c \uc815\ubcf4 \uc804\ub2ec \ubc0f \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uc800\ud558\ub85c \uc774\uc5b4\uc9c8 \uc218 \uc788\uc73c\ubbc0\ub85c \uc2e0\uc911\ud558\uac8c \uace0\ub824\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="DeferredLoader.jsx"',children:"const DeferredLoader = () => {\n  const [isDeferred, setIsDeferred] = useState(false);\n\n  useEffect(() => {\n    const id = setTimeout(() => {\n      setIsDeferred(true);\n    }, 200);\n    return () => clearTimeout(id);\n  }, []);\n\n  if (!isDeferred) {\n    return null;\n  }\n\n  return <Loader />;\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc9e7\uc740 \uc2dc\uac04 \ub0b4\uc5d0 \ube44\ub3d9\uae30 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc73c\uba74 Loader\ub098 Skeleton UI \ub300\uc2e0 ",(0,s.jsx)(n.code,{children:"null"}),"\uc744 \ubc18\ud658\ud558\uc5ec \ud654\uba74\uc744 \uadf8\ub9ac\uc9c0 \uc54a\uace0 \uadf8 \uc774\uc0c1\uc758 \ub85c\ub529 \uc2dc Loader\ub098 Skeleton UI\ub97c \ub178\ucd9c\ud558\ub294 \ubc29\uc2dd\ub3c4 \uace0\ub824\ud560 \ub9cc\ud558\ub2e4."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,s.jsxs)(n.p,{children:["\uc9c0\uae08\uae4c\uc9c0 ",(0,s.jsx)(n.code,{children:"Suspense"}),"\uc640 ",(0,s.jsx)(n.code,{children:"ErrorBoundary"}),"\ub97c \ud65c\uc6a9\ud55c \uc120\uc5b8\uc801 \ub370\uc774\ud130 \ud328\uce6d\uc5d0 \ub300\ud574 \uc54c\uc544\ubd24\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Suspense"}),"\uc640 ",(0,s.jsx)(n.code,{children:"ErrorBoundary"}),"\ub97c \ud65c\uc6a9\ud55c \ube44\ub3d9\uae30 \ucc98\ub9ac\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uac00\ub3c5\uc131, \uc720\uc9c0\ubcf4\uc218 \uce21\uba74, \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 \ubd84\ub9ac \uce21\uba74\uc5d0\uc11c \uc0c1\ub2f9\ud55c \uc774\uc810\uc774 \uc788\uc9c0\ub9cc, \ubb34\ubd84\ubcc4\ud55c ",(0,s.jsx)(n.code,{children:"Suspense"}),", ",(0,s.jsx)(n.code,{children:"ErrorBoundary"}),"\ub294 \uc131\ub2a5 \uc800\ud558, \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uc800\ud558\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc7a5\ub2e8\uc810\uc744 \uc880 \ub354 \uace0\ubbfc\ud558\uace0 \ub3d9\uc791 \uc6d0\ub9ac\uc640 \uc801\uc808\ud55c \uc0ac\uc6a9\uc131\uc5d0 \ub300\ud574 \ud0d0\uad6c\ud574 \ub098\uc544\uac00\uc57c \ud560 \uac83 \uac19\ub2e4."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},6095:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/asset-1-5299c3bc866d2bfd19bbf5005e656456.png"},6456:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/asset-2-3043e6ef9c14c5123b30b98c6d56765f.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>d});var s=r(7294);const a={},t=s.createContext(a);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);