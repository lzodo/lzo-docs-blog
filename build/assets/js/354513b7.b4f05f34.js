"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[5976],{6291:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(8404);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(c,".").concat(m)]||s[m]||v[m]||u;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<u;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>v,frontMatter:()=>u,metadata:()=>i,toc:()=>l});var n=r(2687),o=(r(8404),r(6291));const u={title:"vue-router"},a=void 0,i={unversionedId:"web/vue/vue-router",id:"web/vue/vue-router",title:"vue-router",description:"\u6982\u5ff5",source:"@site/docs/web/vue/vue-router.md",sourceDirName:"web/vue",slug:"/web/vue/vue-router",permalink:"/docs/web/vue/vue-router",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/web/vue/vue-router.md",tags:[],version:"current",frontMatter:{title:"vue-router"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u53ef\u89c6\u5316\u8bdd - svg",permalink:"/docs/web/visualization/day03-svg"},next:{title:"nuxt",permalink:"/docs/web/vue/vue-ssr-nuxt-2023"}},c={},l=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:3},{value:"router \u914d\u7f6e",id:"router-\u914d\u7f6e",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u5e38\u7528\u5bf9\u8c61",id:"\u5e38\u7528\u5bf9\u8c61",level:3}],p={toc:l},s="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,o.kt)("h3",{id:"router-\u914d\u7f6e"},"router \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import Vue from \'vue\'\nimport VueRouter from \'vue-router\'\n\nVue.use(VueRouter)\n\nconst routes = [\n    {  //\u52a8\u6001\u8def\u7531 => params => {{ $route.params.id }}\n        path: "/dynamic/:id/:name",\n        name: "Dynamic",\n        component: () => import("@/views/test/dynamic.vue"),\n        props: { keyxxx: "\u8def\u7531\u53c2\u6570\u4f20\u8fbe\uff0c\u7ec4\u4ef6\u4e2d\u4e5f\u662f\u901a\u8fc7 prop:[\'keyxxx\'] \u83b7\u53d6" },\n        children: [ //\u5d4c\u5957\u8def\u7531\n            {\n                path: \'profile\', // \u4e0d\u8981\u659c\u6746\n                component: () => import("@/views/test/profile.vue")\n            },\n            {\n                path: \'gonameview\', // \u547d\u540d\u89c6\u56fe\n                components: { //\n                    default: () => import("@/views/test/go-not-name-view.vue"),\n                    viewName: () => import("@/views/test/go-name-viewName-view.vue"),\n                },\n            },\n        ]\n    },\n    {   // \u4e0d\u5b58\u5728\u7684\u8def\u7531\u5730\u5740,\u91cd\u5b9a\u5411\u5230404\u9875\u9762\uff0c\u5982\u679c404\u9875\u9762\u5b58\u5728\u7684\u8bdd\n        path: "*",\n        name: "other",\n        redirect: "/404.vue"\n    }\n\n]\n\nconst router = new VueRouter({\n    mode: \'hash\',\n    base: process.env.BASE_URL,\n    routes\n})\n\nrouter.beforeEach((to, from, next) => {\n    console.log("\u8def\u7531\u8df3\u8f6c\u524d\u4f1a\u505a\u7684\u4e00\u4e9b\u4e8b\u60c5");\n    next();\n})\n\nexport default router\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"import router from './router'"),"\n\u6302\u8f7d router \u5230\u5c06 Vue \u5b9e\u4f8b\u4e2d"),(0,o.kt)("h3",{id:"\u5e38\u7528\u5bf9\u8c61"},"\u5e38\u7528\u5bf9\u8c61"),(0,o.kt)("p",null,"router \u8def\u7531\u5bf9\u8c61\uff0c\u53ef\u4ee5\u8fdb\u884c\u8df3\u8f6c\uff0c\u7b49\u65b9\u6cd5\nroute  \u5355\u4e2a\u9875\u9762\u8def\u8def\u7531\uff0c\u6709\u8def\u5f84\uff0c\u540d\u79f0\u7684\u4fe1\u606f"))}v.isMDXComponent=!0}}]);