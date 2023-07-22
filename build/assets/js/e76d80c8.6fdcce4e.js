"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[6580],{6291:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(8404);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(2687),a=(n(8404),n(6291));const l={title:"rtsp\u89c6\u9891\u6d41\u64ad\u653e\u65b9\u6848(\u76f4\u64ad\u3001\u6444\u50cf\u5934)"},p=void 0,i={unversionedId:"blogtype/play-rtsp-video",id:"blogtype/play-rtsp-video",title:"rtsp\u89c6\u9891\u6d41\u64ad\u653e\u65b9\u6848(\u76f4\u64ad\u3001\u6444\u50cf\u5934)",description:"\u65e0\u63d2\u4ef6(FFmpeg+NGINX+nginx-rtmp-module)",source:"@site/docs/blogtype/play-rtsp-video.md",sourceDirName:"blogtype",slug:"/blogtype/play-rtsp-video",permalink:"/docs/blogtype/play-rtsp-video",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/blogtype/play-rtsp-video.md",tags:[],version:"current",frontMatter:{title:"rtsp\u89c6\u9891\u6d41\u64ad\u653e\u65b9\u6848(\u76f4\u64ad\u3001\u6444\u50cf\u5934)"},sidebar:"tutorialSidebar",next:{title:"mysql",permalink:"/docs/database/mysql-v2"}},o={},m=[{value:"\u65e0\u63d2\u4ef6(FFmpeg+NGINX+nginx-rtmp-module)",id:"\u65e0\u63d2\u4ef6ffmpegnginxnginx-rtmp-module",level:2},{value:"nginx \u914d\u7f6e\u6587\u4ef6",id:"nginx-\u914d\u7f6e\u6587\u4ef6",level:3}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65e0\u63d2\u4ef6ffmpegnginxnginx-rtmp-module"},"\u65e0\u63d2\u4ef6(FFmpeg+NGINX+nginx-rtmp-module)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/warcraft/p/11216228.html"},"\u53c2\u8003"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/still-smile/p/13702292.html"},"\u6d77\u5eb7\u6444\u50cf\u5934\u89e3\u6790\u683c\u5f0f")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8981\u6c42:linux \u7cfb\u7edf\u3001rtsp \u89c6\u9891\u6d41\u5730\u5740")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u601d\u8def:\u901a\u8fc7FFmpeg\u5c06rtsp\u8f6ctrmp,\u6216\u8f6cm3u8,\u670d\u52a1\u5668\u751f\u6210.m3u8\u5730\u5740\u7ed9\u524d\u7aef\uff0cweb\u7aef\u4e4b\u95f4\u901a\u8fc7video.js\u6216\u817e\u8baf\u89c6\u9891\u63d2\u4ef6\u76f4\u63a5\u64ad\u653e\u89c6\u9891")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"linux \u5b89\u88c5 FFmpeg")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5",(0,a.kt)("a",{parentName:"p",href:"https://github.com/arut/nginx-rtmp-module#example-nginxconf"},"nginx-rtmp-module")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5907\u7528\u5730\u5740",(0,a.kt)("a",{parentName:"li",href:"https://github.com/liaozhongxun/nginx-rtmp-module.git"},"nginx-rtmp-module")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cp -rf xxx/nginx-rtmp-module/ /home/user/"),":\u5c06\u63d2\u4ef6\u590d\u5236\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"\u5bb6\u76ee\u5f55"),"\u4e0b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5 nginx"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./configure --prefix=/usr/local/nginx --add-module=/home/user/nginx-rtmp-module --with-http_ssl_module"),"\uff1a\u914d\u7f6e\u5e26\u4e0a",(0,a.kt)("inlineCode",{parentName:"li"},"nginx-rtmp-module"),"\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"make&&make install"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u6dfb\u52a0 rtmp \u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u542f nginx"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u6790\u8f6ctrmp"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u666e\u901a rtsp:",(0,a.kt)("inlineCode",{parentName:"li"},"ffmpeg -i rtsp://admin:12345@172.27.35.56 -acodec aac -strict experimental -ar 44100 -ac 2 -b:a 96k -r 25 -b:v 500k -f flv rtmp://127.0.0.1:1935/myapp/test1")),(0,a.kt)("li",{parentName:"ul"},"\u6d77\u5eb7\u6444\u50cf\u5934:",(0,a.kt)("inlineCode",{parentName:"li"},'ffmpeg -re -rtsp_transport tcp -i "rtsp://admin:Aa123456@192.168.3.111:554/Streaming/Channels/1" -f flv "rtmp://127.0.0.1:1935/myapp/test1"')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u6790\u8f6cm3u8(\u6d77\u5eb7\u6444\u50cf\u5934\u9700\u8981 \u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"-re -rtsp_transport tcp"),")"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'ffmpeg -re -rtsp_transport tcp -i "rtsp://admin:Aa123456@192.168.3.111:554/Streaming/Channels/1" -vcodec copy -acodec aac -ar 44100 -strict -2 -ac 1 -f flv -q 10 -f flv "rtmp://127.0.0.1:1935/hls/test2"'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6210\u529f\u7684\u8bdd\u7ec8\u7aef\u4f1a\u4e0d\u65ad\u63a5\u6536\u6570\u636e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"rtmp://127.0.0.1:1935/myapp/test1"),"\u6216\u8005\u6216\u8005\u672c\u5730\u652f\u6301\u7684\u64ad\u653e\u5668\u6b63\u5e38\u64ad\u653e\u5219\u8f6crtmp\u7801\u6210\u529f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u64ad\u653e\u5668\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:80/hls/test2.m3u8"),"\u6216\u8005web\u9875\u9762\u901a\u8fc7video.js \u7b49\u652f\u6301\u7801m3u8\u7684\u64ad\u653e\u63d2\u4ef6\u64ad\u653e")))),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h3",{id:"nginx-\u914d\u7f6e\u6587\u4ef6"},"nginx \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"worker_processes  1;\n\n\nevents {\n    worker_connections  1024;\n}\n\n# \u4e3b\u8981\u662f\u8fd9\u4e2a\nrtmp {\n    server {\n        listen 1935;\n\n        application myapp {\n            live on;\n        }\n        application hls {\n            live on;\n            hls on;\n            hls_path /tmp/hls;\n        }\n    }\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n\n    sendfile        on;\n    keepalive_timeout  65;\n    server {\n        listen       80;\n        server_name  localhost;\n\n        location / {\n            root   html;\n            index  index.html index.htm;\n        }\n        # .m3u8\u9700\u8981\u7684\u914d\u7f6e\n        location /hls {  \n            types {  \n                application/vnd.apple.mpegurl m3u8;  \n                video/mp2t ts;  \n            }  \n            root /tmp;  \n            add_header Cache-Control no-cache;  \n        }\n\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n    }\n}\n\n")))}u.isMDXComponent=!0}}]);