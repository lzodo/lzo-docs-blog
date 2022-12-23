"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[6188],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u670d\u52a1\u5668\u8bf7\u6c42"},s=void 0,l={unversionedId:"web/jsmodel/script-model-request",id:"web/jsmodel/script-model-request",title:"\u670d\u52a1\u5668\u8bf7\u6c42",description:"AJAX",source:"@site/docs/web/jsmodel/script-model-request.md",sourceDirName:"web/jsmodel",slug:"/web/jsmodel/script-model-request",permalink:"/docs/web/jsmodel/script-model-request",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/web/jsmodel/script-model-request.md",tags:[],version:"current",frontMatter:{title:"\u670d\u52a1\u5668\u8bf7\u6c42"},sidebar:"tutorialSidebar",previous:{title:"\u6d4f\u89c8\u5668\u77e5\u8bc6\u70b9",permalink:"/docs/web/jsmodel/script-model-browser"},next:{title:"websocket",permalink:"/docs/web/jsmodel/script-model-websocket"}},c={},i=[{value:"AJAX",id:"ajax",level:2},{value:"XMLHttpRequest",id:"xmlhttprequest",level:2},{value:"\u539f\u751fAjax",id:"\u539f\u751fajax",level:3},{value:"Axios\u8bf7\u6c42",id:"axios\u8bf7\u6c42",level:3},{value:"Jquery Ajax",id:"jquery-ajax",level:3},{value:"XML",id:"xml",level:3},{value:"Fetch",id:"fetch",level:2},{value:"Express\u670d\u52a1",id:"express\u670d\u52a1",level:2},{value:"Axios\u6e90\u7801\u4e0e\u5c01\u88c5",id:"axios\u6e90\u7801\u4e0e\u5c01\u88c5",level:2}],p={toc:i};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ajax"},"AJAX"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AJAX \u662f\u7279\u6b8a\u7684http\u8bf7\u6c42(\u5bf9\u4e8e\u670d\u52a1\u5668\u6765\u8bf4\u6ca1\u6709\u4ec0\u4e48\u533a\u522b)")),(0,a.kt)("h2",{id:"xmlhttprequest"},"XMLHttpRequest"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"AJAX :Asynchronous JavaScript and XML(\u5f02\u6b65\u7684 JavaScript \u548c XML);    ")),(0,a.kt)("p",null,"\u7279\u70b9:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e0\u5237\u65b0\u83b7\u53d6\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u4e8b\u4ef6\u66f4\u65b0\u90e8\u5206\u9875\u9762\n\u7f3a\u70b9:"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6d4f\u89c8\u5386\u53f2\uff0c\u4e0d\u80fd\u56de\u9000"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b58\u5728\u8de8\u57df\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"seo\u4e0d\u53cb\u597d\uff0c\u56e0\u4e3a\u6570\u636e\u662f\u540e\u9762js\u52a8\u6001\u521b\u5efa\u5230\u9875\u9762\u4e0a\u7684\uff0c\u722c\u866b\u6293\u53d6\u4e0d\u5230")),(0,a.kt)("h3",{id:"\u539f\u751fajax"},"\u539f\u751fAjax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8" />\n        <title>ajax</title>\n    </head>\n    <body>\n        <button onclick="getData()">get data</button>\n    </body>\n    <script>\n        function getData() {\n            var xhr = new XMLHttpRequest(); //\u521b\u5efa\n            // xhr.abort() \u5916\u90e8\u624b\u52a8\u505c\u6b62xhr\u8bf7\u6c42\uff0c\u6dfb\u52a0\u4e00\u4e2a\u6807\u5fd7\u53ef\u4ee5\u7981\u6b62\u91cd\u590d\u53d1\u9001\u8bf7\u6c42\n\n            // \u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7c7b\u578b\n            xhr.responseType = "json"; //\u5982\u679c\u8fd4\u56de\u7684\u662fjson\u5b57\u7b26\u4e32\u76f4\u63a5\u89e3\u6790\n            // \u8d85\u65f6\u8bbe\u7f6e\n            xhr.timeout = 2000; //\u4e24\u79d2\u6570\u636e\u6ca1\u56de\u6765\u5c31\u7b97\u8d85\u65f6\n            xhr.ontimeout = function () {\n                console.log("\u8bf7\u6c42\u8d85\u65f6,\u8bf7\u7a0d\u540e\u91cd\u8bd5");\n            };\n\n            //\u7f51\u7edc\u5f02\u5e38\u56de\u8c03\n            xhr.onerror = function () {\n                console.log("\u7f51\u7edc\u5f02\u5e38");\n            };\n\n            // \u521d\u59cb\u5316\n            // \u53c2\u6570t\u7528\u4e8eIE\u8c03\u7528\u63a5\u53e3\u7f13\u5b58\n            // xhr.open(\'GET\',\'http://127.0.0.1:8000/geturl?params=100&age=30&t=\'+new Date(),async);\n            // async \u9ed8\u8ba4true\u5f02\u6b65,\u8bbe\u7f6efalse \u540c\u6b65\n            // async\u4ee3\u8868\u5f02\u6b65,\u53bb\u6389a\u53d8\u6210sync\u5c31\u662f\u540c\u6b65\n            xhr.open("POST", "http://127.0.0.1:8000/posturl");\n\n            //\u8bbe\u7f6e\u8bf7\u6c42\u5934\n            xhr.setRequestHeader(\n                "Content-Type",\n                "application/x-www-form-urlencoded"\n            );\n\n            //\u53d1\u9001\n            //xhr.send();\n            xhr.send("{param:100,age:30}"); //post\u4f20\u53c2 \u683c\u5f0f\u4e0d\u56fa\u5b9a\n\n            /*\n                \u5f53\u72b6\u6001\u53d1\u751f\u6539\u53d8\u7684\u65f6\u5019 \u5904\u7406\u670d\u52a1\u7aef\u8fd4\u56de\u7ed3\u679c\n                xhr.readyState:0  \u6ca1\u53d1\u8bf7\u6c42(\u521d\u59cb)\n                               1  open()\u4e4b\u540e\n                               2  send()\u4e4b\u540e\n                               3  \u8bf7\u6c42\u4e2d\n                               4  \u6240\u6709\u7ed3\u679c\u5168\u90e8\u8fd4\u56de\n            */\n            //\u5f53readyState\u53d1\u751f\u6539\u53d8\u65f6\u89e6\u53d1\n            xhr.onreadystatechange = function () {\n                if (xhr.readyState == 4) {\n                    if (xhr.status >= 200 && xhr.status < 300) {\n                        //\u72b6\u6001\u7801\n                        //\u54cd\u5e94\u884c\n                        console.log(xhr.status);\n                        console.log(xhr.statusText); //\u72b6\u6001\u5b57\u7b26\u4e32\n                        console.log(xhr.getResponseHeaders("name")); //\u6307\u5b9a\u540d\u79f0\u7684\u54cd\u5e94\u5934\n                        console.log(xhr.getAllResponseHeaders()); //\u54cd\u5e94\u5934\n                        console.log(xhr.response); //\u54cd\u5e94\u4f53\n                    }\n                }\n            };\n        }\n    <\/script>\n</html>\n\n\n')),(0,a.kt)("h3",{id:"axios\u8bf7\u6c42"},"Axios\u8bf7\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <title>Axios\u8bf7\u6c42</title>\n        <script src=\"https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.js\"><\/script>\n    </head>\n    <body>\n        <button onclick=\"getData()\">get data</button>\n    </body>\n    <script>\n        function getData(){\n            //\u5bf9\u539f\u751faxios\u7684\u5c01\u88c5\n            axios({\n                url:'http://127.0.0.1:8000/posturl',\n                //url\u53c2\u6570\n                params:{a:1,b:2},\n                //\u8bf7\u6c42\u4f53\u53c2\u6570\n                data:{name:'ab',age:20},\n                method:'POST',\n                headers:{\n                    'key':'val'\n                }\n            }).then(res=>{\n                console.log(res)\n            })\n        }\n\n        // \u5b9e\u73b0\n        functioFn myAxios({\n            url,\n            method=\"GET\",\n            params={},\n            body={}\n        }){\n            return new Promise((resolve,reject) => {\n                //1.\u901a\u8fc7xhr \u521b\u5efa ajax\n                //\u521b\u5efaxhr\n                const request = new XMLHttpRequest();\n                //\u6253\u5f00\u8fde\u63a5\n                request.open(method,url,true)\n                //\u53d1\u9001\u8bf7\u6c42\n                request.send()\n                //2.1 \u6210\u529f\u4e86\u8c03\u7528resolve\n                //2.2 \u5931\u8d25\u4e86\u8c03\u7528 reject\n            })\n        }\n    <\/script>\n</html>\n\n")),(0,a.kt)("h3",{id:"jquery-ajax"},"Jquery Ajax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <title>Jquery Ajax</title>\n        <script src=\"https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js\"><\/script>\n    </head>\n    <body>\n        <button onclick=\"getData()\">get data</button>\n    </body>\n    <script>\n        function getData(){\n            //\u5bf9\u539f\u751fajax\u7684\u5c01\u88c5\n            $.ajax({\n                url:'http://127.0.0.1:8000/posturl',\n                data:{a:1,b:2},\n                type:'POST',\n                dataType:'json',//\u81ea\u52a8\u89e3\u6790json\u6570\u636e,\u5982\u679c\u4e0d\u662fjson\u4f1a\u62a5\u9519\n                timoout:2000, //\u8bbe\u7f6e\u8d85\u65f6\n                cache:false,//\u4e0d\u9700\u8981\u7f13\u5b58 \u9ed8\u8ba4true\n                processData:true,//\u9ed8\u8ba4\u5bf9\u6570\u636e\u505a\u683c\u5f0f\u5316\u5904\u7406,\u56fe\u7247\u4e0a\u4f20\u4e0d\u9700\u8981\u5219\u8981\u624b\u52a8\u8bbe\u7f6efalse\n                success:function(res){\n                    console.log(res)\n                },\n                error:function(){\n                    console.log('\u5931\u8d25\u56de\u8c03')\n                },\n                headers:{\n                    'key':'val'\n                }\n            })\n        }\n    <\/script>\n</html>\n\n")),(0,a.kt)("h3",{id:"xml"},"XML"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ef\u6269\u5c55\u6807\u8bb0\u8bed\u8a00,\u5916\u89c2\u4e0eHTML\u7c7b\u4f3c\uff0c\u4e3b\u8981\u4f5c\u7528\u662f\u7528\u6765\u4f20\u8f93\u5b58\u50a8\u6570\u636e\u7684\uff0c\u5e76\u4e14\u5168\u90e8\u6807\u7b7e\u90fd\u662f\u81ea\u5b9a\u4e49\u7684(\u540e\u671f\u57fa\u672c\u7528json\u5f88\u5c11\u7528XML\u4e86)")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"fetch"},"Fetch"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Fetch API \u63d0\u4f9b\u4e86\u4e00\u4e2a JavaScript\u63a5\u53e3\uff0c\u7528\u4e8e\u8bbf\u95ee\u548c\u64cd\u7eb5HTTP\u7ba1\u9053\u7684\u90e8\u5206,\u8fd9\u79cd\u529f\u80fd\u4ee5\u524d\u662f\u4f7f\u7528 XMLHttpRequest\u5b9e\u73b0\u7684\u3002Fetch\u63d0\u4f9b\u4e86\u4e00\u4e2a\u66f4\u597d\u7684\u66ff\u4ee3\u65b9\u6cd5")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zh.javascript.info/fetch"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <title>Fetch</title>\n    </head>\n    <body>\n        <button onclick=\"getData()\">get data</button>\n    </body>\n    <script>\n        function getData(){\n            fetch('http://127.0.0.1:8888/posturl',{\n                body:'name=ab&age=20',\n                method:'POST',\n                headers:{ //\u8fd9\u4e9b header \u4fdd\u8bc1\u4e86 HTTP \u7684\u6b63\u786e\u6027\u548c\u5b89\u5168\u6027\uff0c\u6240\u4ee5\u5b83\u4eec\u4ec5\u7531\u6d4f\u89c8\u5668\u63a7\u5236\n                    'key':'val'\n                }\n            }).then(res=>{ //Response \u63d0\u4f9b\u4e86\u591a\u79cd\u57fa\u4e8e promise \u7684\u65b9\u6cd5\uff0c\u6765\u4ee5\u4e0d\u540c\u7684\u683c\u5f0f\u8bbf\u95ee body,\u6bcf\u6b21\u53ea\u80fd\u7528\u4e00\u79cd\n\n                // res.text() \u2014\u2014 \u8bfb\u53d6 res\uff0c\u5e76\u4ee5\u6587\u672c\u5f62\u5f0f\u8fd4\u56de res\n                // res.json() \u2014\u2014 \u5c06 res \u89e3\u6790\u4e3a JSON\n                // res.formData() \u2014\u2014 \u4ee5 FormData \u5bf9\u8c61\uff08\u5728 \u4e0b\u4e00\u7ae0 \u6709\u89e3\u91ca\uff09\u7684\u5f62\u5f0f\u8fd4\u56de res\n                // res.blob() \u2014\u2014 \u4ee5 Blob\uff08\u5177\u6709\u7c7b\u578b\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff09\u5f62\u5f0f\u8fd4\u56de res\n                // res.arrayBuffer() \u2014\u2014 \u4ee5 ArrayBuffer\uff08\u4f4e\u7ea7\u522b\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff09\u5f62\u5f0f\u8fd4\u56de res\n                console.log(res.headers.get('Content-Type')); //\u83b7\u53d6\u54cd\u5e94\u5934\n                return res.json()\n            }).then(res=>{\n                console.log(res);\n            })\n        }\n    <\/script>\n</html>\n\n\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"express\u670d\u52a1"},"Express\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//1\u3001\u5f15\u5165express\nconst express = require('express');\n\n//2\u3001\u521b\u5efa\u5e94\u7528\nconst app = express();\n\n//3\u3001\u521b\u5efa\u8def\u7531\u89c4\u5219\n// req \u8bf7\u6c42\u62a5\u6587\n// res \u54cd\u5e94\u62a5\u6587\napp.get('/geturl',(req,res)=>{\n    res.setHeader('Access-Control-Allow-Origin','*');\n    res.send('get\u6210\u529f');\n})\napp.all('/posturl',(req,res)=>{\n    res.setHeader('Access-Control-Allow-Origin','*'); //\u5141\u8bb8\u8de8\u57df\n    res.setHeader('Access-Control-Allow-Headers','*'); //\u63a5\u6536\u5ba2\u6237\u7aef\u8bbe\u7f6e\u4efb\u4f55\u8bf7\u6c42\u5934\n    \n    const data = {\n        name:'lzo-xun'\n    }\n    res.send(JSON.stringify(data));  //\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\u6216\u4e8c\u8fdb\u5236\n})\n\n//4\u3001\u76d1\u542c\napp.listen(8000,()=>{\n    console.log('\u670d\u52a1 8000 \u5df2\u542f\u52a8')\n})\n")),(0,a.kt)("h2",{id:"axios\u6e90\u7801\u4e0e\u5c01\u88c5"},"Axios\u6e90\u7801\u4e0e\u5c01\u88c5"),(0,a.kt)("p",null,"...\n",(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1H5411L7FU?p=2"},"\u94fe\u63a5")))}u.isMDXComponent=!0}}]);