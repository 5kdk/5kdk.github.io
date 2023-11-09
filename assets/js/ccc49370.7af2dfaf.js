"use strict";(self.webpackChunk_5kdk_blog=self.webpackChunk_5kdk_blog||[]).push([[6103],{8964:(e,n,t)=>{t.r(n),t.d(n,{default:()=>P});var o=t(7294),a=t(6010),s=t(833),i=t(5281),r=t(9460),l=t(7846),c=t(4608),d=t(5999),m=t(2244),u=t(5893);function g(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(m.Z,{...t,subLabel:(0,u.jsx)(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(m.Z,{...n,subLabel:(0,u.jsx)(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,r.C)(),{title:t,description:o,date:a,tags:i,authors:l,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(s.d,{title:t,description:o,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")})]})}var f=t(6668);function p(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):o.push(a)})),o}function v(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return n.flatMap((e=>{const n=v({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:n}]:n}))}function x(e){const n=e.getBoundingClientRect();return n.top===n.bottom?x(e.parentNode):n}function b(e,n){let{anchorTopOffset:t}=n;const o=e.find((e=>x(e).top>=t));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(x(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function j(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,f.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function L(e){const n=(0,o.useRef)(void 0),t=j();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:i}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const o=[];for(let a=n;a<=t;a+=1)o.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:s,maxHeadingLevel:i}),l=b(r,{anchorTopOffset:t.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var k=t(9960);function C(e){let{toc:n,className:t,linkClassName:o,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(k.Z,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(C,{isChild:!0,toc:e.children,className:t,linkClassName:o})]},e.id)))}):null}const _=o.memo(C);function H(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:r,...l}=e;const c=(0,f.L)(),d=i??c.tableOfContents.minHeadingLevel,m=r??c.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>v({toc:p(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:d,maxHeadingLevel:m});return L((0,o.useMemo)((()=>{if(a&&s)return{linkClassName:a,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:m}}),[a,s,d,m])),(0,u.jsx)(_,{toc:g,className:t,linkClassName:a,...l})}const N={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},y="table-of-contents__link toc-highlight",I="table-of-contents__link--active";function Z(e){let{className:n,...t}=e;return(0,u.jsx)("div",{className:(0,a.Z)(N.tableOfContents,"thin-scrollbar",n),children:(0,u.jsx)(H,{...t,linkClassName:y,linkActiveClassName:I})})}var w=t(2212);function O(e){let{sidebar:n,children:t}=e;const{metadata:o,toc:a}=(0,r.C)(),{nextItem:s,prevItem:i,frontMatter:d,unlisted:m}=o,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:p}=d;return(0,u.jsxs)(l.Z,{sidebar:n,toc:!h&&a.length>0?(0,u.jsx)(Z,{toc:a,minHeadingLevel:f,maxHeadingLevel:p}):void 0,children:[m&&(0,u.jsx)(w.Z,{}),(0,u.jsx)(c.Z,{children:t}),(s||i)&&(0,u.jsx)(g,{nextItem:s,prevItem:i})]})}function P(e){const n=e.content;return(0,u.jsx)(r.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(s.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(O,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},2212:(e,n,t)=>{t.d(n,{Z:()=>g});t(7294);var o=t(6010),a=t(5999),s=t(5742),i=t(5893);function r(){return(0,i.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),m=t(9047);function u(e){let{className:n}=e;return(0,i.jsx)(m.Z,{type:"caution",title:(0,i.jsx)(r,{}),className:(0,o.Z)(n,d.k.common.unlistedBanner),children:(0,i.jsx)(l,{})})}function g(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(u,{...e})]})}},4608:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(9460),a=t(3424),s=t(9861),i=t(2949),r=t(5893);const l=()=>{const{colorMode:e}=(0,i.I)();return(0,r.jsx)(s.Z,{repo:"5kdk/5kdk.github.io",repoId:"R_kgDOJyJw5g",category:"General",categoryId:"DIC_kwDOJyJw5s4CXpth",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"ko",loading:"lazy",crossorigin:"anonymous",async:!0})};function c(e){const{metadata:n,isBlogPostPage:t}=(0,o.C)(),{frontMatter:s}=n,{enableComments:i}=s;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{...e}),i&&t&&(0,r.jsx)(l,{})]})}}}]);