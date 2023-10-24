"use strict";(self.webpackChunk_5_kdk_blog=self.webpackChunk_5_kdk_blog||[]).push([[498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",authors:"5kdk",description:"\ub77c\uc6b0\ud305\uc2dc \ub4a4\ub85c\uac00\uae30 \uc624\ub958\ub97c \uace0\ucce4\ub358 \uacbd\ud5d8",keywords:["useNavigate","Navigate","React router dom","\ub4a4\ub85c\uac00\uae30"],tags:["React","React-router"],enableComments:!0},i=void 0,l={permalink:"/blog/2023/06/17/usenavigate-options",editUrl:"https://github.com/5kdk/5kdk.github.io/tree/main/blog/2023-06-17-usenavigate-options.md",source:"@site/blog/2023-06-17-usenavigate-options.md",title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",description:"\ub77c\uc6b0\ud305\uc2dc \ub4a4\ub85c\uac00\uae30 \uc624\ub958\ub97c \uace0\ucce4\ub358 \uacbd\ud5d8",date:"2023-06-17T00:00:00.000Z",formattedDate:"2023\ub144 6\uc6d4 17\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"React-router",permalink:"/blog/tags/react-router"}],readingTime:6.385,hasTruncateMarker:!0,authors:[{name:"Dongkyu Kim",title:"pxd UX Engineer",url:"https://github.com/5kdk",imageURL:"https://github.com/5kdk.png",key:"5kdk"}],frontMatter:{title:"useNavigate\uc758 \uc635\uc158\uc744 \ud65c\uc6a9\ud55c \ub4a4\ub85c\uac00\uae30 \uc0ac\uc6a9\uc131 \uac1c\uc120",authors:"5kdk",description:"\ub77c\uc6b0\ud305\uc2dc \ub4a4\ub85c\uac00\uae30 \uc624\ub958\ub97c \uace0\ucce4\ub358 \uacbd\ud5d8",keywords:["useNavigate","Navigate","React router dom","\ub4a4\ub85c\uac00\uae30"],tags:["React","React-router"],enableComments:!0},prevItem:{title:"useMemo, useCallback\uc73c\ub85c \ucd5c\uc801\ud654\uac00 \uaf2d \ud544\uc694\ud560\uae4c?",permalink:"/blog/2023/07/04/necessary-with-usememo-and-usecallback"},nextItem:{title:"useCallback\uc73c\ub85c useEffect \uc2ec\ud654 \ud65c\uc6a9 \ud574\ubcf4\uae30",permalink:"/blog/2022/12/15/advanced-usage-of-useeffect-with-usecallback"}},p={authorsImageUrls:[void 0]},u=[{value:"useNavigate \ud1ba\uc544\ubcf4\uae30",id:"usenavigate-\ud1ba\uc544\ubcf4\uae30",level:2},{value:"state\uc640 replace \ud504\ub85c\ud37c\ud2f0\ub97c \ud65c\uc6a9\ud558\uae30",id:"state\uc640-replace-\ud504\ub85c\ud37c\ud2f0\ub97c-\ud65c\uc6a9\ud558\uae30",level:2},{value:"state \ud504\ub85c\ud37c\ud2f0",id:"state-\ud504\ub85c\ud37c\ud2f0",level:3},{value:"replace \ud504\ub85c\ud37c\ud2f0",id:"replace-\ud504\ub85c\ud37c\ud2f0",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/5kdk/wanted-pre-onboarding-frontend/tree/main"},"\uc6d0\ud2f0\ub4dc \ud504\ub9ac\uc628\ubcf4\ub529 \uc0ac\uc804\uacfc\uc81c"),"\ub97c \uc9c4\ud589\ud558\uba70 \uc5ec\ub7ec \ub9ac\ub2e4\uc774\ub809\ud2b8 \uc791\uc5c5\uc774 \ud544\uc694\ud588\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Root")," \ucef4\ud3ec\ub10c\ud2b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \uacbd\ub85c \uc811\uadfc \uc2dc ",(0,r.kt)("inlineCode",{parentName:"p"},"SignIn")," \ud398\uc774\uc9c0\ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8\ub97c \ud558\uace0 \uc788\uc5c8\uc73c\uba70 \ub77c\uc6b0\ud305 \uc2dc ",(0,r.kt)("inlineCode",{parentName:"p"},"SignIn"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"Todo")," \ud398\uc774\uc9c0\ub294 \ub85c\uadf8\uc778 \uc5ec\ubd80\uc5d0 \ub530\ub77c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ucc98\ub9ac\ud558\ub294 \uace0\ucc28 \ucef4\ud3ec\ub10c\ud2b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthenticationGuard"),"\uac00 \uac10\uc2f8\uace0 \uc788\uc5c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub85c \ub77c\uc6b0\ud305\ud560 \ub54c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ub85c\uc9c1\uc73c\ub85c \uc778\ud574 \ub4a4\ub85c\uac00\uae30\uac00 \uc81c\ub300\ub85c \ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uacac\ub418\uc5c8\uace0, \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub97c \uc880 \ub354 \uaf3c\uaf3c\ud558\uac8c \uc0b4\ud3b4\ubcf4\uac8c \ub418\uc5c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uae00\uc744 \ubcfc \ub54c\ucbe4\uc774\uba74 \uc774\ubbf8 \uc774 \ubb38\uc81c\ub97c \ubc1c\uacac\ud588\uc744 \ud14c\uc9c0\ub9cc, \uc544\ub2c8\ub77c\uba74 \uc790\uc2e0\uc758 \ud504\ub85c\uc81d\ud2b8 \uc778\uc99d\uacfc \uad00\ub828\ub41c \ub9ac\ub2e4\uc774\ub809\ud305\uc744 \uc218\ud589\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \ucf1c\uace0 \ub85c\uadf8\uc778 \ud6c4 \ub4a4\ub85c\uac00\uae30\ub97c \uc0b4\ud3ec\uc2dc \ub20c\ub7ec\ubcf4\uc2dc\ub77c! (\ud504\ub9ac\uc628\ubcf4\ub529 \ud300\uc6d0 \uc911\uc5d0\uc11c\ub3c4 \uac19\uc740 \uc774\uc288\ub97c \ucc3e\uc73c\uc2e0 \ubd84\uc774 \uacc4\uc2e0\ub2e4.)"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usenavigate-\ud1ba\uc544\ubcf4\uae30"},"useNavigate \ud1ba\uc544\ubcf4\uae30"),(0,r.kt)("admonition",{title:"\uc815\ubcf4",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"React Router\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate")," \ud6c5\uc740 React \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc73c\ub85c \ub77c\uc6b0\ud305\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ub3c4\uad6c\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub97c \uc0ac\uc6a9\ud558\uba74 URL\uc744 \ubcc0\uacbd\ud558\uac70\ub098 \ud2b9\uc815 \uacbd\ub85c\ub85c \uc774\ub3d9\ud560 \uc218 \uc788\uc73c\uba70, ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub294 React Router v6\ubd80\ud130 \ub3c4\uc785\ub418\uc5c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useNavigate } from 'react-router-dom';\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate")," \ud6c5\uc740 \ub77c\uc6b0\ud130 \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ub418\uc5b4\uc57c \ud55c\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc74c\uacfc \uac19\uc774 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc815\uc758\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useNavigate } from 'react-router-dom';\n\nconst MyComponent = () => {\n  const navigate = useNavigate();\n\n  const handleClick = () => {\n    navigate('/other-route');\n  };\n\n  return (\n    <div>\n      <h1>My Component</h1>\n      <button onClick={handleClick}>Go to Other Route</button>\n    </div>\n  );\n};\n")),(0,r.kt)("p",null,"\uc704\uc758 \uc608\uc81c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"handleClick")," \ud568\uc218\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 URL\uc744 \ubcc0\uacbd\ud558\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"/other-route"),"\ub85c \uc774\ub3d9\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc591\ud55c \uc635\uc158\uc744 \uc9c0\uc815\ud560 \uc218\ub3c4 \uc788\uc73c\uba70 \uc774\ub97c \ud1b5\ud574 \ub9ac\ub2e4\uc774\ub809\ud2b8, \uc0c1\ud0dc \ubcc0\uacbd, \ucffc\ub9ac \ub9e4\uac1c\ubcc0\uc218 \uc804\ub2ec \ub4f1 \ub2e4\uc591\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useNavigate } from 'react-router-dom';\n\nconst MyComponent = () => {\n  const navigate = useNavigate();\n\n  const handleClick = () => {\n    navigate('/other-route', { state: { id: 123 }, replace: true });\n  };\n\n  return (\n    <div>\n      <h1>My Component</h1>\n      <button onClick={handleClick}>Go to Other Route</button>\n    </div>\n  );\n};\n")),(0,r.kt)("p",null,"\uc704\uc758 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," \ud568\uc218\uc758 \ub450 \ubc88\uc9f8 \uc778\uc218\ub85c \uac1d\uccb4\ub97c \uc804\ub2ec\ud558\uc5ec \uc635\uc158\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294\ub370, ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \ud504\ub85c\ud37c\ud2f0\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\ub97c \uc804\ub2ec\ud558\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," \ud504\ub85c\ud37c\ud2f0\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\ub85c \uc124\uc815\ud558\uc5ec \uc774\ub3d9\ud55c \ud6c4\uc5d0 \ube0c\ub77c\uc6b0\uc800\uc758 \uae30\ub85d\uc5d0 \ub0a8\uc9c0 \uc54a\ub3c4\ub85d \ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"state\uc640-replace-\ud504\ub85c\ud37c\ud2f0\ub97c-\ud65c\uc6a9\ud558\uae30"},"state\uc640 replace \ud504\ub85c\ud37c\ud2f0\ub97c \ud65c\uc6a9\ud558\uae30"),(0,r.kt)("h3",{id:"state-\ud504\ub85c\ud37c\ud2f0"},"state \ud504\ub85c\ud37c\ud2f0"),(0,r.kt)("p",null,"\uac8c\uc2dc\uae00 \ubaa9\ub85d\uc774 \uc788\ub294 \ud398\uc774\uc9c0\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ud2b9\uc815 \uac8c\uc2dc\uae00\uc744 \ud074\ub9ad\ud558\uba74 \ud574\ub2f9 \uac8c\uc2dc\uae00\uc758 \uc0c1\uc138 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uace0, \uc0c1\uc138 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \uac8c\uc2dc\uae00\uc758 ID\uc640 \ud568\uaed8 \ucd94\uac00\uc801\uc778 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud574\uc57c \ud560 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \ud504\ub85c\ud37c\ud2f0\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useNavigate } from 'react-router-dom';\n\nconst PostList = () => {\n  const navigate = useNavigate();\n\n  const handlePostClick = postId => {\n    //highlight-start\n    // \uac8c\uc2dc\uae00 ID\uc640 \ucd94\uac00 \ub370\uc774\ud130\ub97c \ud568\uaed8 \uc804\ub2ec\ud558\uc5ec \uc0c1\uc138 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\n    navigate(`/post/${postId}`, {\n      state: { id: postId, additionalData: 'Some data' },\n    });\n    //highlight-end\n  };\n\n  return (\n    <div>\n      <h1>Post List</h1>\n      <ul>\n        <li onClick={() => handlePostClick(1)}>Post 1</li>\n        <li onClick={() => handlePostClick(2)}>Post 2</li>\n        <li onClick={() => handlePostClick(3)}>Post 3</li>\n      </ul>\n    </div>\n  );\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useLocation } from 'react-router-dom';\n\nconst PostDetail = () => {\n  const location = useLocation();\n  //highlight-start\n  const { id, additionalData } = location.state;\n  //highlight-end\n\n  return (\n    <div>\n      <h1>Post Detail</h1>\n      <p>ID: {id}</p>\n      <p>Additional Data: {additionalData}</p>\n    </div>\n  );\n};\n")),(0,r.kt)("h3",{id:"replace-\ud504\ub85c\ud37c\ud2f0"},"replace \ud504\ub85c\ud37c\ud2f0"),(0,r.kt)("p",null,"\ub85c\uadf8\uc778 \ud6c4\uc5d0 \uc0ac\uc6a9\uc790\ub97c \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \ub3cc\uc544\uac08 \uc218 \uc5c6\ub3c4\ub85d \ud558\uae30 \uc704\ud574, \ube0c\ub77c\uc6b0\uc800\uc758 \uae30\ub85d\uc5d0\uc11c \uc774\uc804 \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub97c \ub300\uccb4\ud558\uba74 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \ud5a5\uc0c1 \uc2dc\ud0ac \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const LoginPage = () => {\n  const navigate = useNavigate();\n\n  const handleLogin = () => {\n    // \ub85c\uadf8\uc778 \ucc98\ub9ac \ub85c\uc9c1...\n\n    // \ub85c\uadf8\uc778 \uc131\uacf5 \ud6c4 \ub300\uc2dc\ubcf4\ub4dc \ud398\uc774\uc9c0\ub85c \uc774\ub3d9 (replace: true \uc635\uc158 \uc0ac\uc6a9)\n    navigate('/dashboard', { replace: true });\n  };\n\n  return (\n    <div>\n      <h1>Login Page</h1>\n      <button onClick={handleLogin}>Login</button>\n    </div>\n  );\n};\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud560\ub54c\ub294 props\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"replace"),"\ub9cc \uc801\uc5b4\uc8fc\uc5b4\ub3c4 \ub41c\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"replace={true}"),"\ub85c \ub3d9\uc791\ud558\uae30 \ub54c\ubb38.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("p",null,"\uc774\ucc98\ub7fc ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec React \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc73c\ub85c \ub77c\uc6b0\ud305\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\uc73c\uba70 ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\uc758 \ub2e4\uc591\ud55c \uc635\uc158\uc744 \ud65c\uc6a9\ud558\uba74 \ub354\uc6b1 \uc720\uc5f0\ud558\uace0 \ud48d\ubd80\ud55c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,"\uc800\uc758 \uacbd\uc6b0 \uacb0\uad6d \ub9ac\ub2e4\uc774\ub809\ud2b8\uc2dc ",(0,r.kt)("inlineCode",{parentName:"p"},"{ replace: true }")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544 \uacc4\uc18d\ub418\ub294 \ub9ac\ub2e4\uc774\ub809\ud2b8 \ubb38\uc81c\uac00 \uc0dd\uacbc\uace0 \uc774\ub97c \ud574\ub2f9 \uc635\uc158\uc744 \ud1b5\ud574 \uc190\uc27d\uac8c \ud574\uacb0\ud560 \uc218 \uc788\uc5c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate"),"(useNavigate\ub97c \ub458\ub7ec\uc2fc \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c)\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," \ud504\ub85c\ud37c\ud2f0\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube0c\ub77c\uc6b0\uc800\uc758 \uae30\ub85d\uc5d0 \uc0c8\ub85c\uc6b4 \ud56d\ubaa9\uc744 \ucd94\uac00\ud558\uc9c0 \uc54a\uace0 \uc774\uc804 \ud56d\ubaa9\uc744 \ub300\uccb4\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,"\ub85c\uadf8\uc778 \ub610\ub294 \uc778\uc99d\uacfc \uad00\ub828\ub41c \uacbd\ub85c \uc804\ud658\uacfc \uac19\uc774 \uc774\uc804 \ud398\uc774\uc9c0\ub85c \ub3cc\uc544\uac00\uc9c0 \uc54a\uc544\uc57c \ud558\ub294 \uc0c1\ud669\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," \ud504\ub85c\ud37c\ud2f0\ub97c \uc798 \ud65c\uc6a9\ud558\uc790."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/hooks/use-navigate"},"https://reactrouter.com/en/main/hooks/use-navigate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/components/navigate"},"https://reactrouter.com/en/main/components/navigate"))))}d.isMDXComponent=!0}}]);