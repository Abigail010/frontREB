import{B as g}from"./BaseBreadcrumb-BUjUSeql.js";import{_ as b}from"./UiParentCard.vue_vue_type_script_setup_true_lang-fgGlwcJm.js";import{B as m}from"./dataTable-xB5yR-I_.js";import{V as f,a as c}from"./VRow-Ctz1qQoW.js";import{V as v,a as V}from"./VDataTable-BpeV3fdk.js";import{V as _}from"./VTextField-Ck2WlqEn.js";import{y as x,H as o,o as h,c as B,b as t,w as l,z as s,a as P,F as k}from"./index-Buq65buf.js";import"./useRender-BxYPdWix.js";import"./router-BUAsRsjo.js";import"./VCard-DYx3ZWBV.js";import"./VAvatar-DnqmwHRx.js";import"./transition-B72dfbUm.js";import"./VDivider-CrauPodZ.js";import"./resizeObserver-BmQKPLvZ.js";import"./VBtn-78ZGxu3p.js";import"./group-Db2nUOtn.js";import"./VProgressCircular-5aNpqKQU.js";import"./VSelect-AWVCrat9.js";import"./VInput-DW8trHrA.js";import"./index-BR_FMKrs.js";import"./forwardRefs-D3j0TLhE.js";import"./VList-DWEkCzxE.js";import"./ssrBoot-J2Isbuk5.js";import"./dialog-transition-9GmGLlaY.js";import"./VMenu-Vw07ipyt.js";import"./VOverlay-BKbQgHv6.js";import"./lazy-B33KSTCg.js";import"./scopeId-3T0RsHAR.js";import"./VCheckboxBtn-TAC0gRQb.js";import"./VSelectionControl-BcfiU6xa.js";import"./VLabel-Q0nQNgOl.js";import"./VChip-vQfLyUmr.js";import"./VSlideGroup-BbB4uZJz.js";import"./VTable-CpX0WyJs.js";import"./filter-Can5VoxW.js";import"./VField-FB0ObzHG.js";const y={class:"text-center pt-2 mb-3 px-3"},nt=x({__name:"Pagination",setup(D){const p=o({title:"Data Table Pagination"}),n=o([{text:"Dashboard",disabled:!1,href:"#"},{text:"Data Table Pagination",disabled:!0,href:"#"}]),r=o(1),i=o(5),u=o([{title:"Name",align:"start",key:"name"},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"}]),d=Math.ceil(m.length/i.value);return(C,e)=>(h(),B(k,null,[t(g,{title:p.value.title,breadcrumbs:n.value},null,8,["title","breadcrumbs"]),t(c,null,{default:l(()=>[t(f,{cols:"12"},{default:l(()=>[t(b,{title:"External Pagination"},{default:l(()=>[t(v,{"items-per-page":i.value,headers:u.value,items:s(m),page:r.value,"onUpdate:page":e[2]||(e[2]=a=>r.value=a),"hide-default-footer":"",class:"border rounded-md"},{bottom:l(()=>[P("div",y,[t(V,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),length:s(d)},null,8,["modelValue","length"]),t(_,{"model-value":i.value,class:"pa-2",label:"Items per page",type:"number",min:"-1",max:"15","hide-details":"","onUpdate:modelValue":e[1]||(e[1]=a=>i.value=parseInt(a,10))},null,8,["model-value"])])]),_:1},8,["items-per-page","headers","items","page"])]),_:1})]),_:1})]),_:1})],64))}});export{nt as default};