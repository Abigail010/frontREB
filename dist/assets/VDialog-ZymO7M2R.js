import{m as P,V as m}from"./VOverlay-DaU1oGBB.js";import{f as y}from"./forwardRefs-D3j0TLhE.js";import{p as h,g as D,aB as S,H as x,aG as B,T as d,U as T,v,ah as w,b as g,bj as F}from"./index-DrTwkWKv.js";import{u as I}from"./scopeId-o3q1bBTy.js";import{V as R}from"./dialog-transition-D8F8OoFH.js";import{y as O}from"./router-WculNeyF.js";import{u as A}from"./useRender-BOCQZ1Hm.js";const C=h({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...P({origin:"center center",scrollStrategy:"block",transition:{component:R},zIndex:2400})},"VDialog"),H=D()({name:"VDialog",props:C(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=S(a,"modelValue"),{scopeId:V}=I(),o=x();function u(r){var l,s;const e=r.relatedTarget,t=r.target;if(e!==t&&((l=o.value)!=null&&l.contentEl)&&((s=o.value)!=null&&s.globalTop)&&![document,o.value.contentEl].includes(t)&&!o.value.contentEl.contains(t)){const i=F(o.value.contentEl);if(!i.length)return;const f=i[0],b=i[i.length-1];e===f?b.focus():f.focus()}}B&&d(()=>n.value&&a.retainFocus,r=>{r?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0}),d(n,async r=>{var e,t;await w(),r?(e=o.value.contentEl)==null||e.focus({preventScroll:!0}):(t=o.value.activatorEl)==null||t.focus({preventScroll:!0})});const E=T(()=>v({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return A(()=>{const r=m.filterProps(a);return g(m,v({ref:o,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},r,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:E.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return g(O,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),y({},o)}});export{H as V};