import{B as c}from"./BaseBreadcrumb-CT6jvQy5.js";import{_ as i}from"./UiParentCard.vue_vue_type_script_setup_true_lang-CnhMiIzk.js";import{B as m}from"./dataTable-CFqBM0kP.js";import{V as b,a as f}from"./VRow-CP79OSqc.js";import{V as l}from"./VDataTable-DaYtdlvt.js";import{V as g}from"./VCard-lycBolgK.js";import{y,H as r,o as _,c as B,b as t,w as e,z as p,a as k,t as v,F as V}from"./index-DrTwkWKv.js";import"./useRender-BOCQZ1Hm.js";import"./router-WculNeyF.js";import"./VDivider-DBdustGe.js";import"./resizeObserver-ByQQTg7p.js";import"./VBtn-DIdBX4My.js";import"./group-DPsegRnP.js";import"./VProgressCircular-BV5wMIes.js";import"./VSelect-ClxLdjGf.js";import"./VTextField-DwhnQBcY.js";import"./VField-Dj1_Uul3.js";import"./index-C_v6l9pV.js";import"./transition-DZ1vwVgr.js";import"./VLabel-CrcPKldg.js";import"./VInput-MGgT_itD.js";import"./forwardRefs-D3j0TLhE.js";import"./VList-Cj-CAV5P.js";import"./ssrBoot-DGiRhBlY.js";import"./VAvatar-ChmD2NQY.js";import"./dialog-transition-D8F8OoFH.js";import"./VMenu-DutG15yQ.js";import"./VOverlay-DaU1oGBB.js";import"./lazy-C5vzorO2.js";import"./scopeId-o3q1bBTy.js";import"./VCheckboxBtn-CZV2A-Bi.js";import"./VSelectionControl-DrG-JbVx.js";import"./VChip-V1QOt9R1.js";import"./VSlideGroup-B3Y5oykx.js";import"./VTable-DN97F_KR.js";import"./filter-B3L8EFxv.js";const mt=y({__name:"SortingTable",setup(h){const d=r({title:"Data Table Sorting"}),n=r([{text:"Dashboard",disabled:!1,href:"#"},{text:"Data Table Sorting",disabled:!0,href:"#"}]),a=r([{key:"name",order:"desc"}]),o=r([{title:"Name",align:"start",key:"name",sortable:!1},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"}]);return(S,s)=>(_(),B(V,null,[t(c,{title:d.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),t(f,null,{default:e(()=>[t(b,{cols:"12"},{default:e(()=>[t(i,{title:"Basic Sorting"},{default:e(()=>[t(l,{"items-per-page":"5",headers:o.value,items:p(m),"item-value":"name","sort-by":a.value,"onUpdate:sortBy":s[0]||(s[0]=u=>a.value=u),class:"border rounded-md"},null,8,["headers","items","sort-by"]),t(g,{class:"mt-4 elevation-0 border mt-3 pa-4"},{default:e(()=>[k("pre",null,v(a.value),1)]),_:1})]),_:1}),t(i,{title:"Multi Sorting",class:"mt-6"},{default:e(()=>[t(l,{"items-per-page":"5",headers:o.value,items:p(m),"sort-by":[{key:"project",order:"asc"},{key:"post",order:"desc"}],"multi-sort":"",class:"border rounded-md"},null,8,["headers","items"])]),_:1})]),_:1})]),_:1})],64))}});export{mt as default};