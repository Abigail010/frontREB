import{B as b}from"./BaseBreadcrumb-jDxwAhJm.js";import{_ as $}from"./UiParentCard.vue_vue_type_script_setup_true_lang-CjRfWAwM.js";import{_ as o}from"./UiChildCard.vue_vue_type_script_setup_true_lang-PTJxRyqr.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as I}from"./VInput-B410WGet.js";import{o as n,k as _,w as t,d as c,b as e,y as p,H as i,c as f,F as g}from"./index-C6xIyDbS.js";import{V as m}from"./VTextField-B1n-2lTf.js";import{V as h}from"./router-BDKllWdj.js";import{V as s,a as x}from"./VRow-rFEsfuxq.js";import"./useRender-DGt6a0IA.js";import"./VCard-BhLrgV9c.js";import"./VAvatar-DQ4qamF1.js";import"./transition-wc7ry4y5.js";import"./VDivider-BT9IU-N7.js";import"./index-Cya4CCex.js";import"./VField-QSBgCIU0.js";import"./VLabel-B-wY8ORj.js";import"./forwardRefs-D3j0TLhE.js";const V={};function v(l,a){return n(),_(I,{"error-messages":["Fatal error"],error:"",disabled:""},{default:t(()=>[c(" Input ")]),_:1})}const A=d(V,[["render",v]]),C={};function E(l,a){return n(),_(m,{color:"success",loading:"","hide-details":"",variant:"underlined"})}const M=d(C,[["render",E]]),B={};function F(l,a){return n(),_(I,{"max-errors":"2","error-messages":["Fatal error","Another error"],error:"",disabled:""},{default:t(()=>[c(" Input ")]),_:1})}const R=d(B,[["render",F]]),k={};function z(l,a){return n(),_(m,{variant:"underlined","hide-details":""},{append:t(()=>[e(h,{color:"primary"},{default:t(()=>[c(" mdi-plus ")]),_:1})]),prepend:t(()=>[e(h,{color:"secondary"},{default:t(()=>[c(" mdi-minus ")]),_:1})]),_:1})}const Z=d(k,[["render",z]]),w=p({__name:"InputHideDetails",setup(l){const a=i([r=>!!r||"Required.",r=>r&&r.length>=3||"Min 3 characters",r=>(r||"").length<=20||"Max 20 characters",r=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)||"Invalid e-mail."]);return(r,u)=>(n(),f("div",null,[e(m,{label:"Main input",rules:a.value,"hide-details":"auto",variant:"outlined"},null,8,["rules"])]))}}),y=p({__name:"InputRules",setup(l){const a=i([r=>!!r||"Required.",r=>r&&r.length>=3||"Min 3 characters",r=>(r||"").length<=20||"Max 20 characters",r=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)||"Invalid e-mail."]);return(r,u)=>(n(),f("div",null,[e(m,{rules:a.value,label:"Enter Email","hide-details":"auto"},null,8,["rules"])]))}}),te=p({__name:"CustomInputs",setup(l){const a=i({title:"Custom Inputs"}),r=i([{text:"Dashboard",disabled:!1,href:"#"},{text:"Custom Inputs",disabled:!0,href:"#"}]);return(u,D)=>(n(),f(g,null,[e(b,{title:a.value.title,breadcrumbs:r.value},null,8,["title","breadcrumbs"]),e(x,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e($,{title:"Custom Inputs"},{default:t(()=>[e(x,null,{default:t(()=>[e(s,{cols:"12",sm:"6"},{default:t(()=>[e(o,{title:"Error"},{default:t(()=>[e(A)]),_:1})]),_:1}),e(s,{cols:"12",sm:"6"},{default:t(()=>[e(o,{title:"Multiple Error"},{default:t(()=>[e(R)]),_:1})]),_:1}),e(s,{cols:"12",sm:"6"},{default:t(()=>[e(o,{title:"Loading"},{default:t(()=>[e(M)]),_:1})]),_:1}),e(s,{cols:"12",sm:"6"},{default:t(()=>[e(o,{title:"Append and Prepend"},{default:t(()=>[e(Z)]),_:1})]),_:1}),e(s,{cols:"12",sm:"6"},{default:t(()=>[e(o,{title:"Hide Details"},{default:t(()=>[e(w)]),_:1})]),_:1}),e(s,{cols:"12",sm:"6"},{default:t(()=>[e(o,{title:"Rules"},{default:t(()=>[e(y)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}});export{te as default};