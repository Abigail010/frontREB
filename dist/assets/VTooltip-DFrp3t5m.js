import{m as y,V as u}from"./VOverlay-DQyZ6KCi.js";import{f as S}from"./forwardRefs-D3j0TLhE.js";import{p as h,b1 as O,g as x,aB as T,aI as I,U as e,H as U,v as d,b as k}from"./index-I5uRkXFU.js";import{u as w}from"./scopeId-Cq7v6oAO.js";import{u as A}from"./useRender-CofbKJNJ.js";const B=h({id:String,text:String,...O(y({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),M=x()({name:"VTooltip",props:B(),emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:o}=m;const r=T(t,"modelValue"),{scopeId:v}=w(),f=I(),n=e(()=>t.id||`v-tooltip-${f}`),l=U(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:r.value?"scale-transition":"fade-transition"),b=e(()=>d({"aria-describedby":n.value},t.activatorProps));return A(()=>{const p=u.filterProps(t);return k(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:n.value},p,{modelValue:r.value,"onUpdate:modelValue":a=>r.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:b.value,_disableGlobalStack:!0},v),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),S({},l)}});export{M as V};