"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[4013],{3057:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(8404),r=a(4640),n=a(6485),s=a(6156),i=a(7647),c=a(7080);const m={sidebar:"sidebar_ycUJ",sidebarItemTitle:"sidebarItemTitle_eYMA",sidebarItemList:"sidebarItemList_o6Q2",sidebarItem:"sidebarItem_navb",sidebarItemLink:"sidebarItemLink_VXqJ",sidebarItemLinkActive:"sidebarItemLinkActive_zaxx"};function o(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var g=a(2805);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(g.Zo,{component:d,props:e})}function u(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(o,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(u,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},5456:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(8404),r=a(4640),n=a(6421),s=a(5463),i=a(6110),c=a(3057),m=a(9380),o=a(6332);function g(e){let{tags:t,sidebar:a}=e;const g=(0,n.M)();return l.createElement(s.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage)},l.createElement(s.d,{title:g}),l.createElement(o.Z,{tag:"blog_tags_list"}),l.createElement(c.Z,{sidebar:a},l.createElement("h1",null,g),l.createElement(m.Z,{tags:t})))}},2495:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(8404),r=a(4640),n=a(7647);const s={tag:"tag_W_RY",tagRegular:"tagRegular_AIkB",tagWithCount:"tagWithCount_RhNd"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}},9380:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(8404),r=a(6421),n=a(2495);const s={tag:"tag_Llk4"};function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s.tag},l.createElement(n.Z,e))))),l.createElement("hr",null))}function c(e){let{tags:t}=e;const a=(0,r.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))}},6421:(e,t,a)=>{a.d(t,{M:()=>r,P:()=>n});var l=a(7080);const r=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);