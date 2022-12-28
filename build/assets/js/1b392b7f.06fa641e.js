"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[3141],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),y=i(t),b=o,m=y["".concat(s,".").concat(b)]||y[b]||p[b]||l;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=y;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<l;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},73:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const l={title:"ruby\u5de5\u5177"},a=void 0,u={unversionedId:"server/Ruby/Tool/ruby-setting",id:"server/Ruby/Tool/ruby-setting",title:"ruby\u5de5\u5177",description:"\u4e0b\u8f7d\u5b89\u88c5",source:"@site/docs/server/Ruby/Tool/ruby-setting.md",sourceDirName:"server/Ruby/Tool",slug:"/server/Ruby/Tool/ruby-setting",permalink:"/docs/server/Ruby/Tool/ruby-setting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/server/Ruby/Tool/ruby-setting.md",tags:[],version:"current",frontMatter:{title:"ruby\u5de5\u5177"},sidebar:"tutorialSidebar",previous:{title:"sass",permalink:"/docs/server/Ruby/Tool/child-server/ruby-sass"},next:{title:"go",permalink:"/docs/server/go/go-bash"}},s={},i=[{value:"\u4e0b\u8f7d\u5b89\u88c5",id:"\u4e0b\u8f7d\u5b89\u88c5",level:3},{value:"\u57fa\u4e8eRuby\u7684\u670d\u52a1",id:"\u57fa\u4e8eruby\u7684\u670d\u52a1",level:3}],c={toc:i};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4e0b\u8f7d\u5b89\u88c5"},"\u4e0b\u8f7d\u5b89\u88c5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rubyinstaller.org/downloads/"},"\u5b98\u7f51")," \u6216 scoop\u76f4\u63a5\u5b89\u88c5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ruby -v\n\n# Ruby\u81ea\u5e26\u4e00\u4e2a\u53eb\u505aRubyGems\u7684\u7cfb\u7edf\uff0c\u7528\u6765\u5b89\u88c5\u57fa\u4e8eRuby\u7684\u8f6f\u4ef6\ngem update --system # \u8be5\u547d\u4ee4\u8bf7\u7ffb\u5899\u4e00\u4e0b\ngem -v # \u67e5\u770b\u7248\u672c\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u6e90")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5220\u9664\u66ff\u6362\u539fgem\u6e90\ngem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/\n# \u6253\u5370\u662f\u5426\u66ff\u6362\u6210\u529f\ngem sources -l\nhttps://gems.ruby-china.com\n# \u786e\u4fdd\u53ea\u6709 gems.ruby-china.com\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.gemrc"))),(0,o.kt)("h3",{id:"\u57fa\u4e8eruby\u7684\u670d\u52a1"},"\u57fa\u4e8eRuby\u7684\u670d\u52a1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sass")))}p.isMDXComponent=!0}}]);