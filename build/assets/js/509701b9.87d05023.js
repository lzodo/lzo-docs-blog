"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[9563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=u(n),m=l,d=k["".concat(p,".").concat(m)]||k[m]||s[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={title:"kali"},i=void 0,o={unversionedId:"linux/linux-kali",id:"linux/linux-kali",title:"kali",description:"kali",source:"@site/docs/linux/linux-kali.md",sourceDirName:"linux",slug:"/linux/linux-kali",permalink:"/docs/linux/linux-kali",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/linux/linux-kali.md",tags:[],version:"current",frontMatter:{title:"kali"},sidebar:"tutorialSidebar",previous:{title:"archlinux",permalink:"/docs/linux/linux-archlinux"},next:{title:"linux-manjaro",permalink:"/docs/linux/linux-manjaro"}},p={},u=[{value:"kali",id:"kali",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"apt",id:"apt",level:2},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:2},{value:"apt-file",id:"apt-file",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"kali"},"kali"),(0,l.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://mirrors.aliyun.com/kali-images/kali-2021.2/"},"\u963f\u91cc\u4e91\u4e0b\u8f7d\u5730\u5740"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5305\u542b\u975e\u5e38\u591a\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7684\u6e17\u900f\u5de5\u5177")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u6e90\u514d\u8d39 \u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Debian"),"\uff0c\u865a\u62df\u673a\u786c\u76d8\u5bb9\u91cf\u662f\u6700\u591a\u4e0d\u80fd\u8d85\u8fc7\u6307\u5b9a\u5927\u5c0f\uff0c\u4e0d\u4f1a\u9a6c\u4e0a\u5360\u7528\u8bbe\u5b9a\u7684\u5927\u5c0f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u627e\u5230 Graphical installer \u56fe\u5f62\u5b89\u88c5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u672c\u914d\u7f6e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u56fd\u5185\u6e90 "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/etc/apt/sources.list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deb https://mirrors.aliyun.com/kali kali-rolling main non-free contrib")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deb-src https://mirrors.aliyun.com/kali kali-rolling main non-free contrib")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apt-get update && apt-get upgrade && apt-get dist-upgrade ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apt-get clean "),"\uff1a\u6e05\u9664\u7f13\u5b58"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"apt install -y open-vm-tools-desktop"),"\u865a\u62df\u673a\u5168\u5c4f"))))),(0,l.kt)("h2",{id:"apt"},"apt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e05\u7406")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get autoclean               # \u6e05\u7406\u65e7\u7248\u672c\u7684\u8f6f\u4ef6\u7f13\u5b58\nsudo apt-get clean                      # \u6e05\u7406\u6240\u6709\u8f6f\u4ef6\u7f13\u5b58\nsudo apt-get autoremove           # \u5220\u9664\u7cfb\u7edf\u4e0d\u518d\u4f7f\u7528\u7684\u5b64\u7acb\u8f6f\u4ef6\n")),(0,l.kt)("h2",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),(0,l.kt)("p",null,"wsl \u670d\u52a1\u7ba1\u7406\nservice --status-all  \u67e5\u770b\u670d\u52a1\u540d\u79f0\nsudo service server-name start"),(0,l.kt)("p",null,"apt-get update"),(0,l.kt)("h3",{id:"apt-file"},"apt-file"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u67e5\u770b\u6307\u4ee4\u5c5e\u4e8e\u54ea\u4e2a\u5305"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install apt-file\nsudo apt-file upadte\n"))),(0,l.kt)("p",null,"where ls #bin/ls\napt-file search -F bin/ls"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"### lsof\n\n-   `lsof -i:22`:\u67e5\u770b 22 \u7aef\u53e3\u7684\u670d\u52a1\n\n```shell\n#\u4e2d\u79d1\u5927\ndeb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib\ndeb-src http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib\n\n#\u963f\u91cc\u4e91\ndeb http://mirrors.aliyun.com/kali kali-rolling main non-free contrib\ndeb-src http://mirrors.aliyun.com/kali kali-rolling main non-free contrib\n\n#\u6e05\u534e\u5927\u5b66\n#deb http://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free\n#deb-src https://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free\n\n#\u6d59\u5927\n#deb http://mirrors.zju.edu.cn/kali kali-rolling main contrib non-free\n#deb-src http://mirrors.zju.edu.cn/kali kali-rolling main contrib non-free\n\n#\u4e1c\u8f6f\u5927\u5b66\n#deb http://mirrors.neusoft.edu.cn/kali kali-rolling/main non-free contrib\n#deb-src http://mirrors.neusoft.edu.cn/kali kali-rolling/main non-free contrib\n\n#\u5b98\u65b9\u6e90\n#deb http://http.kali.org/kali kali-rolling main non-free contrib\n#deb-src http://http.kali.org/kali kali-rolling main non-free contrib\n\n#\u91cd\u5e86\u5927\u5b66\n#deb http://http.kali.org/kali kali-rolling main non-free contrib\n#deb-src http://http.kali.org/kali kali-rolling main non-free contrib\n")))}s.isMDXComponent=!0}}]);