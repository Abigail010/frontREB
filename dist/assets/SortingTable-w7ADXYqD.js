import{B as c}from"./BaseBreadcrumb-CGsPg8x-.js";import{_ as i}from"./UiParentCard.vue_vue_type_script_setup_true_lang-CuFdzvOE.js";import{B as m}from"./dataTable-QjhSjMKh.js";import{V as b,a as f}from"./VRow-C2-TvTum.js";import{V as l}from"./VDataTable-CpprLn3L.js";import{V as g}from"./VCard-CFoLrGNY.js";import{y,H as r,o as _,c as B,b as t,w as e,z as p,a as k,t as v,F as V}from"./index-I5uRkXFU.js";import"./useRender-CofbKJNJ.js";import"./router-CIZ1aivY.js";import"./VDivider-CB1jztyL.js";import"./resizeObserver-BA5joKW-.js";import"./VBtn-DyMptNjQ.js";import"./group-DMpYtfwH.js";import"./VProgressCircular-DLvzaeE_.js";import"./VSelect-B6VoM9GU.js";import"./VTextField-D1VQ5-ak.js";import"./VField-CcxtAORc.js";import"./index-DVfikfhV.js";import"./transition-CJctgnM6.js";import"./VLabel-Ag2grjr3.js";import"./VInput-C5uB995F.js";import"./forwardRefs-D3j0TLhE.js";import"./VList-CegpFE-d.js";import"./ssrBoot-EYk6HfIQ.js";import"./VAvatar-BgiBz-Io.js";import"./dialog-transition-Br0UkKlX.js";import"./VMenu-C8Z1rp41.js";import"./VOverlay-DQyZ6KCi.js";import"./lazy-CykwLnRK.js";import"./scopeId-Cq7v6oAO.js";import"./VCheckboxBtn-ADuCzSCG.js";import"./VSelectionControl-MfXk8DcN.js";import"./VChip-CE0dAH0h.js";import"./VSlideGroup-jLxjsqZ9.js";import"./VTable-BHNhIEeS.js";import"./filter-CuSiGa-L.js";const mt=y({__name:"SortingTable",setup(h){const d=r({title:"Data Table Sorting"}),n=r([{text:"Dashboard",disabled:!1,href:"#"},{text:"Data Table Sorting",disabled:!0,href:"#"}]),a=r([{key:"name",order:"desc"}]),o=r([{title:"Name",align:"start",key:"name",sortable:!1},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"}]);return(S,s)=>(_(),B(V,null,[t(c,{title:d.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),t(f,null,{default:e(()=>[t(b,{cols:"12"},{default:e(()=>[t(i,{title:"Basic Sorting"},{default:e(()=>[t(l,{"items-per-page":"5",headers:o.value,items:p(m),"item-value":"name","sort-by":a.value,"onUpdate:sortBy":s[0]||(s[0]=u=>a.value=u),class:"border rounded-md"},null,8,["headers","items","sort-by"]),t(g,{class:"mt-4 elevation-0 border mt-3 pa-4"},{default:e(()=>[k("pre",null,v(a.value),1)]),_:1})]),_:1}),t(i,{title:"Multi Sorting",class:"mt-6"},{default:e(()=>[t(l,{"items-per-page":"5",headers:o.value,items:p(m),"sort-by":[{key:"project",order:"asc"},{key:"post",order:"desc"}],"multi-sort":"",class:"border rounded-md"},null,8,["headers","items"])]),_:1})]),_:1})]),_:1})],64))}});export{mt as default};