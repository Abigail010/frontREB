import{B}from"./BaseBreadcrumb-CT6jvQy5.js";import{_ as r}from"./UiParentCard.vue_vue_type_script_setup_true_lang-CnhMiIzk.js";import{B as s}from"./dataTable-CFqBM0kP.js";import{V as v,a as x}from"./VRow-CP79OSqc.js";import{V as i}from"./VDataTable-DaYtdlvt.js";import{V as y}from"./VChip-V1QOt9R1.js";import{y as k,H as l,o as V,c as D,b as e,w as t,z as o,d as F,t as u,a as c,F as w}from"./index-DrTwkWKv.js";import"./useRender-BOCQZ1Hm.js";import"./router-WculNeyF.js";import"./VCard-lycBolgK.js";import"./VAvatar-ChmD2NQY.js";import"./transition-DZ1vwVgr.js";import"./VDivider-DBdustGe.js";import"./resizeObserver-ByQQTg7p.js";import"./VBtn-DIdBX4My.js";import"./group-DPsegRnP.js";import"./VProgressCircular-BV5wMIes.js";import"./VSelect-ClxLdjGf.js";import"./VTextField-DwhnQBcY.js";import"./VField-Dj1_Uul3.js";import"./index-C_v6l9pV.js";import"./VLabel-CrcPKldg.js";import"./VInput-MGgT_itD.js";import"./forwardRefs-D3j0TLhE.js";import"./VList-Cj-CAV5P.js";import"./ssrBoot-DGiRhBlY.js";import"./dialog-transition-D8F8OoFH.js";import"./VMenu-DutG15yQ.js";import"./VOverlay-DaU1oGBB.js";import"./lazy-C5vzorO2.js";import"./scopeId-o3q1bBTy.js";import"./VCheckboxBtn-CZV2A-Bi.js";import"./VSelectionControl-DrG-JbVx.js";import"./VTable-DN97F_KR.js";import"./filter-B3L8EFxv.js";import"./VSlideGroup-B3Y5oykx.js";const C=["colspan"],ue=k({__name:"BasicTable",setup(N){const f=l({title:"Basic Data Tables"}),b=l([{text:"Dashboard",disabled:!1,href:"#"},{text:"Basic Data Tables",disabled:!0,href:"#"}]),m=l([{title:"Name",align:"start",key:"name"},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"}]),n=l(),g=l([{title:"Name",align:"start",key:"name",sortable:!1},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"},{title:"",key:"data-table-expand"}]);function _(d){return d=="Active"?"#13DEB9":d=="Cancel"?"#FA896B":d=="Completed"?"#5D87FF":"#FFAE1F"}return(d,p)=>(V(),D(w,null,[e(B,{title:f.value.title,breadcrumbs:b.value},null,8,["title","breadcrumbs"]),e(x,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(r,{title:"Basic Table"},{default:t(()=>[e(i,{"items-per-page":"5",headers:m.value,items:o(s),"item-value":"name",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(r,{title:"Selection",class:"mt-6 pb-0"},{default:t(()=>[e(i,{"items-per-page":"5",headers:m.value,items:o(s),"item-value":"name","show-select":"",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(r,{title:"Density",class:"mt-6"},{default:t(()=>[e(i,{"items-per-page":"5",headers:m.value,items:o(s),"item-value":"name",density:"compact",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(r,{title:"Item",class:"mt-6"},{default:t(()=>[e(i,{"items-per-page":"5",headers:m.value,items:o(s),"item-value":"name",class:"border rounded-md"},{"item.status":t(({item:a})=>[e(y,{color:_(a.status)},{default:t(()=>[F(u(a.status),1)]),_:2},1032,["color"])]),_:1},8,["headers","items"])]),_:1}),e(r,{title:"Expandable Rows",class:"mt-6"},{default:t(()=>[e(i,{expanded:n.value,"onUpdate:expanded":p[0]||(p[0]=a=>n.value=a),headers:g.value,items:o(s),"item-value":"name","show-expand":"",class:"border rounded-md"},{"expanded-row":t(({columns:a,item:h})=>[c("tr",null,[c("td",{colspan:a.length}," More info about "+u(h.name),9,C)])]),_:1},8,["expanded","headers","items"])]),_:1})]),_:1})]),_:1})],64))}});export{ue as default};