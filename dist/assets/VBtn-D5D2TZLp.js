import{a as A,b as x,c as R,d as j,m as z,e as O,u as w,f as E,g as K,h as F,i as le,j as ie,k as oe,l as ue,n as de,o as ce,p as ve,q as re,r as me,s as fe,t as be,v as ke,w as ye,x as ge,V as y,y as g}from"./router-BDKllWdj.js";import{m as N,u as P}from"./useRender-DGt6a0IA.js";import{p as B,m as q,g as C,e as J,af as Ve,ag as V,b as t,v as Pe,T as Be,ah as Ce,ai as G,aj as he,U as b,a9 as Ie,ak as Se}from"./index-C6xIyDbS.js";import{m as Le,u as Te,a as De,b as Ge}from"./group-C9gy4-6n.js";import{V as _e}from"./VProgressCircular-Bkdnhxpj.js";const U=B({divided:Boolean,...A(),...N(),...x(),...R(),...j(),...z(),...q(),...O()},"VBtnGroup"),_=C()({name:"VBtnGroup",props:U(),setup(e,o){let{slots:s}=o;const{themeClasses:n}=J(e),{densityClasses:u}=w(e),{borderClasses:d}=E(e),{elevationClasses:c}=K(e),{roundedClasses:v}=F(e);Ve({VBtn:{height:"auto",color:V(e,"color"),density:V(e,"density"),flat:!0,variant:V(e,"variant")}}),P(()=>t(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,d.value,u.value,c.value,v.value,e.class],style:e.style},s))}}),H=Symbol.for("vuetify:v-btn-toggle"),Ae=B({...U(),...Le()},"VBtnToggle"),Ke=C()({name:"VBtnToggle",props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:s}=o;const{isSelected:n,next:u,prev:d,select:c,selected:v}=Te(e,H);return P(()=>{const k=_.filterProps(e);return t(_,Pe({class:["v-btn-toggle",e.class]},k,{style:e.style}),{default:()=>{var r;return[(r=s.default)==null?void 0:r.call(s,{isSelected:n,next:u,prev:d,select:c,selected:v})]}})}),{next:u,prev:d,select:c}}});function xe(e,o){Be(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&o&&Ce(()=>{o(!0)})},{immediate:!0})}const Re=B({active:{type:Boolean,default:void 0},symbol:{type:null,default:H},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:G,appendIcon:G,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...A(),...N(),...x(),...le(),...R(),...De(),...ie(),...oe(),...ue(),...j(),...de(),...ce(),...z({tag:"button"}),...q(),...O({variant:"elevated"})},"VBtn"),Fe=C()({name:"VBtn",directives:{Ripple:he},props:Re(),emits:{"group:selected":e=>!0},setup(e,o){let{attrs:s,slots:n}=o;const{themeClasses:u}=J(e),{borderClasses:d}=E(e),{colorClasses:c,colorStyles:v,variantClasses:k}=ve(e),{densityClasses:r}=w(e),{dimensionStyles:M}=re(e),{elevationClasses:Q}=K(e),{loaderClasses:W}=me(e),{locationStyles:X}=fe(e),{positionClasses:Y}=be(e),{roundedClasses:Z}=F(e),{sizeClasses:$,sizeStyles:p}=ke(e),a=Ge(e,e.symbol,!1),l=ye(e,s),ee=b(()=>{var i;return e.active!==void 0?e.active:l.isLink.value?(i=l.isActive)==null?void 0:i.value:a==null?void 0:a.isSelected.value}),m=b(()=>(a==null?void 0:a.disabled.value)||e.disabled),ae=b(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),ne=b(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function te(i){var f;m.value||l.isLink.value&&(i.metaKey||i.ctrlKey||i.shiftKey||i.button!==0||s.target==="_blank")||((f=l.navigate)==null||f.call(l,i),a==null||a.toggle())}return xe(l,a==null?void 0:a.select),P(()=>{var S,L;const i=l.isLink.value?"a":e.tag,f=!!(e.prependIcon||n.prepend),se=!!(e.appendIcon||n.append),h=!!(e.icon&&e.icon!==!0),I=(a==null?void 0:a.isSelected.value)&&(!l.isLink.value||((S=l.isActive)==null?void 0:S.value))||!a||((L=l.isActive)==null?void 0:L.value);return Ie(t(i,{type:i==="a"?void 0:"button",class:["v-btn",a==null?void 0:a.selectedClass.value,{"v-btn--active":ee.value,"v-btn--block":e.block,"v-btn--disabled":m.value,"v-btn--elevated":ae.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},u.value,d.value,I?c.value:void 0,r.value,Q.value,W.value,Y.value,Z.value,$.value,k.value,e.class],style:[I?v.value:void 0,M.value,X.value,p.value,e.style],disabled:m.value||void 0,href:l.href.value,onClick:te,value:ne.value},{default:()=>{var T;return[ge(!0,"v-btn"),!e.icon&&f&&t("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?t(g,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):t(y,{key:"prepend-icon",icon:e.prependIcon},null)]),t("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&h?t(y,{key:"content-icon",icon:e.icon},null):t(g,{key:"content-defaults",disabled:!h,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var D;return[((D=n.default)==null?void 0:D.call(n))??e.text]}})]),!e.icon&&se&&t("span",{key:"append",class:"v-btn__append"},[n.append?t(g,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):t(y,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&t("span",{key:"loader",class:"v-btn__loader"},[((T=n.loader)==null?void 0:T.call(n))??t(_e,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Se("ripple"),!m.value&&e.ripple,null]])}),{group:a}}});export{Fe as V,Ke as a,Re as m};