import{m as k,u as I}from"./useRender-CofbKJNJ.js";import{g as P,b7 as G,b8 as J,b9 as K,p as B,b as t,U as V,ba as Q,ag as X,aD as Y,A as _,H as p,T,aT as ee,ay as ae,ah as te,az as ne,a9 as W,ak as re,F as le,v as se,an as ie,aZ as ue,ai as oe,m as ce,e as ve}from"./index-I5uRkXFU.js";import{i as de,q as ge,d as O,B as me,h as E,b as fe,o as ye,m as Se,e as _e,p as he,u as be,v as ze,V as Ve,y as ke,x as Pe}from"./router-CIZ1aivY.js";import{m as Ce,M as z}from"./transition-CJctgnM6.js";function Fe(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",r=arguments.length>2?arguments[2]:void 0;return P()({name:r??G(J(e.replace(/__/g,"-"))),props:{tag:{type:String,default:o},...k()},setup(n,g){let{slots:c}=g;return()=>{var m;return K(n.tag,{class:[e,n.class],style:n.style},(m=c.default)==null?void 0:m.call(c))}}})}function Re(e){return{aspectStyles:V(()=>{const o=Number(e.aspectRatio);return o?{paddingBottom:String(1/o*100)+"%"}:void 0})}}const H=B({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...k(),...de()},"VResponsive"),j=P()({name:"VResponsive",props:H(),setup(e,o){let{slots:r}=o;const{aspectStyles:n}=Re(e),{dimensionStyles:g}=ge(e);return I(()=>{var c;return t("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[g.value,e.style]},[t("div",{class:"v-responsive__sizer",style:n.value},null),(c=r.additional)==null?void 0:c.call(r),r.default&&t("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}}),Te=B({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...H(),...k(),...O(),...Ce()},"VImg"),Ie=P()({name:"VImg",directives:{intersect:Q},props:Te(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:r,slots:n}=o;const{backgroundColorClasses:g,backgroundColorStyles:c}=me(X(e,"color")),{roundedClasses:m}=E(e),f=Y("VImg"),h=_(""),s=p(),l=_(e.eager?"loading":"idle"),v=_(),b=_(),u=V(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=V(()=>u.value.aspect||v.value/b.value||0);T(()=>e.src,()=>{C(l.value!=="idle")}),T(y,(a,i)=>{!a&&i&&s.value&&S(s.value)}),ee(()=>C());function C(a){if(!(e.eager&&a)&&!(ae&&!a&&!e.eager)){if(l.value="loading",u.value.lazySrc){const i=new Image;i.src=u.value.lazySrc,S(i,null)}u.value.src&&te(()=>{var i;r("loadstart",((i=s.value)==null?void 0:i.currentSrc)||u.value.src),setTimeout(()=>{var d;if(!f.isUnmounted)if((d=s.value)!=null&&d.complete){if(s.value.naturalWidth||A(),l.value==="error")return;y.value||S(s.value,null),l.value==="loading"&&w()}else y.value||S(s.value),D()})})}}function w(){var a;f.isUnmounted||(D(),S(s.value),l.value="loaded",r("load",((a=s.value)==null?void 0:a.currentSrc)||u.value.src))}function A(){var a;f.isUnmounted||(l.value="error",r("error",((a=s.value)==null?void 0:a.currentSrc)||u.value.src))}function D(){const a=s.value;a&&(h.value=a.currentSrc||a.src)}let R=-1;ne(()=>{clearTimeout(R)});function S(a){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{if(clearTimeout(R),f.isUnmounted)return;const{naturalHeight:N,naturalWidth:x}=a;N||x?(v.value=x,b.value=N):!a.complete&&l.value==="loading"&&i!=null?R=window.setTimeout(d,i):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,b.value=1)};d()}const U=V(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),M=()=>{var d;if(!u.value.src||l.value==="idle")return null;const a=t("img",{class:["v-img__img",U.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:w,onError:A},null),i=(d=n.sources)==null?void 0:d.call(n);return t(z,{transition:e.transition,appear:!0},{default:()=>[W(i?t("picture",{class:"v-img__picture"},[i,a]):a,[[ue,l.value==="loaded"]])]})},q=()=>t(z,{transition:e.transition},{default:()=>[u.value.lazySrc&&l.value!=="loaded"&&t("img",{class:["v-img__img","v-img__img--preload",U.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),L=()=>n.placeholder?t(z,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!n.error)&&t("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,Z=()=>n.error?t(z,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&t("div",{class:"v-img__error"},[n.error()])]}):null,$=()=>e.gradient?t("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,F=_(!1);{const a=T(y,i=>{i&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{F.value=!0})}),a())})}return I(()=>{const a=j.filterProps(e);return W(t(j,se({class:["v-img",{"v-img--booting":!F.value},g.value,m.value,e.class],style:[{width:ie(e.width==="auto"?v.value:e.width)},c.value,e.style]},a,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t(le,null,[t(M,null,null),t(q,null,null),t($,null,null),t(L,null,null),t(Z,null,null)]),default:n.default}),[[re("intersect"),{handler:C,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:s,state:l,naturalWidth:v,naturalHeight:b}}}),Be=B({start:Boolean,end:Boolean,icon:oe,image:String,text:String,...k(),...fe(),...O(),...ye(),...Se(),...ce(),..._e({variant:"flat"})},"VAvatar"),Ne=P()({name:"VAvatar",props:Be(),setup(e,o){let{slots:r}=o;const{themeClasses:n}=ve(e),{colorClasses:g,colorStyles:c,variantClasses:m}=he(e),{densityClasses:f}=be(e),{roundedClasses:h}=E(e),{sizeClasses:s,sizeStyles:l}=ze(e);return I(()=>t(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,g.value,f.value,h.value,s.value,m.value,e.class],style:[c.value,l.value,e.style]},{default:()=>[r.default?t(ke,{key:"content-defaults",defaults:{VAvatar:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>{var v;return[(v=r.default)==null?void 0:v.call(r)]}}):e.image?t(Ie,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t(Ve,{key:"icon",icon:e.icon},null):e.text,Pe(!1,"v-avatar")]})),{}}});export{Ne as V,Ie as a,Fe as c};