"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[6271],{6291:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(8404);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(2687),a=(r(8404),r(6291));const o={title:"webrtc"},c=void 0,i={unversionedId:"web/media-webrtc",id:"web/media-webrtc",title:"webrtc",description:"mdn",source:"@site/docs/web/media-webrtc.md",sourceDirName:"web",slug:"/web/media-webrtc",permalink:"/docs/web/media-webrtc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/web/media-webrtc.md",tags:[],version:"current",frontMatter:{title:"webrtc"},sidebar:"tutorialSidebar",previous:{title:"web",permalink:"/docs/web/issues/issues-web"},next:{title:"react",permalink:"/docs/web/react/react-docs"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API"},"mdn")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getUserMedia"),"\n\u8be5\u65b9\u6cd5\u63d0\u9192\u7528\u6237\u662f\u5426\u5141\u8bb8\u4f7f\u7528\u97f3\u89c6\u9891\u8bbe\u5907\uff08\u6444\u50cf\u5934\u3001\u5c4f\u5e55\u5171\u4eab\u3001\u9ea6\u514b\u98ce\u7b49\uff09\n\u5982\u679c\u5141\u8bb8\u5219\u8fd4\u56de\u6570\u636e\u6d41\uff0c\u62d2\u7edd\u8fd4\u56de\u9519\u8bef\u5bf9\u8c61\uff0c\u4e0d\u9009\u62e9\u4e5f\u662f\u65e0\u6cd5\u8c03\u7528\u6210\u529f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\n// \u5982\u679c\u9700\u8981\u517c\u5bb9\u5176\u4ed6\u6216\u8001\u7684\u6d4f\u89c8\u5668\nnavigator.mediaDevices = navigator.mediaDevices|| navigator.webkitGetUserMedia|| navigator.mozGetUserMedia;\n\n// constraints \u6307\u5b9a\u8bf7\u6c42\u5a92\u4f53\u7c7b\u578b\nnavigator.mediaDevices.getUserMedia(constraints).then((stream)=>{\n    // \u6210\u529f\u83b7\u53d6\u89c6\u9891\u6d41 \u76f4\u63a5\u64ad\u653e\n    video.srcObject = stream;\n}).catch((err)=>{\n    // PermissionDeniedError: \u88ab\u7528\u6237\u6216\u7cfb\u7edf\u62d2\u7edd\n    // NotFoundError: \u627e\u4e0d\u5230 constraints \u7c7b\u578b\n})\n\n")),(0,a.kt)("p",null,"=================================================================\n",(0,a.kt)("strong",{parentName:"p"},"getUserMedia"),"\n\u63cf\u8ff0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"")))}d.isMDXComponent=!0}}]);