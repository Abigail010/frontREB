import{m as B,u as k}from"./useRender-DUD5GNME.js";import{p as _,g as h,b as t,U as C,ai as w,ag as u,af as D,F as I,v as A,o as R,k as N,w as y,a as r,t as p}from"./index-CUBqpQjk.js";import{n as F,m as x,w as T,z as L,b as j,d as z,B as J,u as U,h as $,V as q,y as E}from"./router-DjP1fb63.js";import{V as G}from"./VCard-B5JACPL-.js";const H=_({divider:[Number,String],...B()},"VBreadcrumbsDivider"),K=h()({name:"VBreadcrumbsDivider",props:H(),setup(e,n){let{slots:a}=n;return k(()=>{var i;return t("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((i=a==null?void 0:a.default)==null?void 0:i.call(a))??e.divider])}),{}}}),M=_({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...B(),...F(),...x({tag:"li"})},"VBreadcrumbsItem"),O=h()({name:"VBreadcrumbsItem",props:M(),setup(e,n){let{slots:a,attrs:i}=n;const c=T(e,i),l=C(()=>{var d;return e.active||((d=c.isActive)==null?void 0:d.value)}),g=C(()=>l.value?e.activeColor:e.color),{textColorClasses:f,textColorStyles:s}=L(g);return k(()=>t(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":l.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:l.value&&e.activeClass},f.value,e.class],style:[s.value,e.style],"aria-current":l.value?"page":void 0},{default:()=>{var d,b;return[c.isLink.value?t("a",{class:"v-breadcrumbs-item--link",href:c.href.value,"aria-current":l.value?"page":void 0,onClick:c.navigate},[((b=a.default)==null?void 0:b.call(a))??e.title]):((d=a.default)==null?void 0:d.call(a))??e.title]}})),{}}}),Q=_({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:w,items:{type:Array,default:()=>[]},...B(),...j(),...z(),...x({tag:"ul"})},"VBreadcrumbs"),W=h()({name:"VBreadcrumbs",props:Q(),setup(e,n){let{slots:a}=n;const{backgroundColorClasses:i,backgroundColorStyles:c}=J(u(e,"bgColor")),{densityClasses:l}=U(e),{roundedClasses:g}=$(e);D({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const f=C(()=>e.items.map(s=>typeof s=="string"?{item:{title:s},raw:s}:{item:s,raw:s}));return k(()=>{const s=!!(a.prepend||e.icon);return t(e.tag,{class:["v-breadcrumbs",i.value,l.value,g.value,e.class],style:[c.value,e.style]},{default:()=>{var d;return[s&&t("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(E,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(q,{key:"prepend-icon",start:!0,icon:e.icon},null)]),f.value.map((b,o,V)=>{var S;let{item:m,raw:P}=b;return t(I,null,[((S=a.item)==null?void 0:S.call(a,{item:m,index:o}))??t(O,A({key:o,disabled:o>=V.length-1},typeof m=="string"?{title:m}:m),{default:a.title?()=>{var v;return(v=a.title)==null?void 0:v.call(a,{item:m,index:o})}:void 0}),o<V.length-1&&t(K,null,{default:a.divider?()=>{var v;return(v=a.divider)==null?void 0:v.call(a,{item:P,index:o})}:void 0})])}),(d=a.default)==null?void 0:d.call(a)]}})}),{}}}),X="/sirecom/assets/probar-iwJA3bNT.png",Y={class:"px-8 py-8 py-lg-0"},Z={class:"d-flex justify-space-between"},ee={class:"d-flex py-0 align-center"},ae={class:"text-h3 mb-2"},te=r("div",{class:"d-flex align-center text-h3 mt-n4"},".",-1),re={class:"text-subtitle-1"},se=r("div",{class:"d-none py-0 d-lg-block overflow-hidden"},[r("div",{class:"mb-n16 mt-3 image-container"},[r("img",{src:X,class:"breadcrumb-image"})])],-1),ie={__name:"BaseBreadcrumb",props:{title:String,breadcrumbs:Array,icon:String,text:String},setup(e){return(n,a)=>(R(),N(G,{class:"bg-lightprimary elevation-0 rounded-md mb-8"},{default:y(()=>[r("div",Y,[r("div",Z,[r("div",ee,[r("div",null,[r("h3",ae,p(e.title),1),t(W,{items:e.breadcrumbs,class:"text-h6 font-weight-medium pa-0 ml-n1"},{divider:y(()=>[te]),title:y(({item:i})=>[r("h6",re,p(i.text),1)]),_:1},8,["items"])])]),se])])]),_:1}))}},oe=ie;export{oe as B};