import{B as h}from"./BaseBreadcrumb-BUjUSeql.js";import{_ as k}from"./UiParentCard.vue_vue_type_script_setup_true_lang-fgGlwcJm.js";import{_ as p}from"./UiChildCard.vue_vue_type_script_setup_true_lang-YNyDmDAq.js";import{V as r}from"./VCheckboxBtn-TAC0gRQb.js";import{y as x,H as s,o as c,c as i,b as e,F as V,x as v,k as y,w as l}from"./index-Buq65buf.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as f,a as b}from"./VRow-Ctz1qQoW.js";import"./useRender-BxYPdWix.js";import"./router-BUAsRsjo.js";import"./VCard-DYx3ZWBV.js";import"./VAvatar-DnqmwHRx.js";import"./transition-B72dfbUm.js";import"./VDivider-CrauPodZ.js";import"./VSelectionControl-BcfiU6xa.js";import"./VLabel-Q0nQNgOl.js";const g={class:"d-flex gap-3 justify-center align-center flex-column flex-sm-row"},$=x({__name:"BasicCheckboxes",setup(_){const o=s(!0),u=s(!1),m=s(!1),a=s(!1);return(n,t)=>(c(),i("div",g,[e(r,{color:"primary",label:"Primary","hide-details":"",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=d=>o.value=d)},null,8,["modelValue"]),e(r,{color:"primary",label:"Secondary","hide-details":"",modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=d=>u.value=d)},null,8,["modelValue"]),e(r,{color:"primary",label:"Success",modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=d=>m.value=d),"hide-details":""},null,8,["modelValue"]),e(r,{color:"primary",label:"Warning","hide-details":"",modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=d=>a.value=d)},null,8,["modelValue"])]))}}),B={class:"d-flex gap-3 justify-center align-center flex-column flex-sm-row"},U=x({__name:"LabelCheckboxes",setup(_){const o=s(!0),u=s(!1);return(m,a)=>(c(),i("div",B,[e(r,{color:"primary","hide-details":"",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n),label:"Checked"},null,8,["modelValue"]),e(r,{color:"primary",disabled:"","hide-details":"",modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=n=>u.value=n),label:"Unchecked"},null,8,["modelValue"])]))}}),w={class:"d-flex gap-3 justify-center align-center flex-column flex-sm-row"},j=x({__name:"ColorCheckboxes",setup(_){const o=s(!0),u=s(["primary","secondary","success","error","warning"]);return(m,a)=>(c(),i("div",w,[(c(!0),i(V,null,v(u.value,n=>(c(),y(r,{key:n,color:n,"hide-details":"",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t)},null,8,["color","modelValue"]))),128))]))}}),S={},D={class:"d-flex gap-3 align-center justify-center"};function F(_,o){return c(),i("div",D,[e(r,{"model-value":!0,color:"primary"}),e(r,{"model-value":!1}),e(r,{indeterminate:"",color:"secondary"})])}const L=C(S,[["render",F]]),Q=x({__name:"VCheckbox",setup(_){const o=s({title:"Checkboxes"}),u=s([{text:"Dashboard",disabled:!1,href:"#"},{text:"Checkboxes",disabled:!0,href:"#"}]);return(m,a)=>(c(),i(V,null,[e(h,{title:o.value.title,breadcrumbs:u.value},null,8,["title","breadcrumbs"]),e(b,null,{default:l(()=>[e(f,{cols:"12"},{default:l(()=>[e(k,{title:"Checkbox"},{default:l(()=>[e(b,null,{default:l(()=>[e(f,{cols:"12",lg:"6"},{default:l(()=>[e(p,{title:"Custom"},{default:l(()=>[e(L)]),_:1})]),_:1}),e(f,{cols:"12",lg:"6"},{default:l(()=>[e(p,{title:"Colors"},{default:l(()=>[e(j)]),_:1})]),_:1}),e(f,{cols:"12",lg:"6"},{default:l(()=>[e(p,{title:"Default"},{default:l(()=>[e($)]),_:1})]),_:1}),e(f,{cols:"12",lg:"6"},{default:l(()=>[e(p,{title:"States"},{default:l(()=>[e(U)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}});export{Q as default};