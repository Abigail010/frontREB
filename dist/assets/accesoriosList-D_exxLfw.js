import{B as _}from"./BaseBreadcrumb-4MIjbQwQ.js";import{y as g,H as i,a2 as u,E as k,o as x,c as w,b as o,w as t,d as c,F as y,a3 as A}from"./index-CUBqpQjk.js";import{u as T}from"./accesorio-BNfCTOdR.js";import{V as F,a as S}from"./VRow-De8gMS49.js";import{V as E}from"./VDataTable-Clv1HmiC.js";import{V as D}from"./VToolbar-Cf21mDDn.js";import{V as L}from"./VTextField-DvwW7kBo.js";import{V as N}from"./VDivider-BKsbfY-L.js";import{V as $}from"./VSpacer-D0J7wQQ_.js";import{V as z}from"./VBtn-Bwlw_S26.js";import{V as f}from"./router-DjP1fb63.js";import"./useRender-DUD5GNME.js";import"./VCard-B5JACPL-.js";import"./VAvatar-DCozc2c4.js";import"./transition-7eeLtsO5.js";import"./resizeObserver-Dy93hC7S.js";import"./VSelect-Y5UkN40p.js";import"./VInput-a6OhgCb3.js";import"./index-CBT7dlbo.js";import"./forwardRefs-D3j0TLhE.js";import"./VList-ClDiqBX_.js";import"./ssrBoot-TGepEb6s.js";import"./dialog-transition-BmxFGc2r.js";import"./VMenu-Cw996tyh.js";import"./VOverlay-ZufbB-oQ.js";import"./lazy-BqTskM4N.js";import"./scopeId-BvaqpV40.js";import"./VCheckboxBtn-Ct_gEblA.js";import"./VSelectionControl-Dee3CKWd.js";import"./VLabel-cMv036s0.js";import"./VChip-B4X-ZzT8.js";import"./VSlideGroup-Bt6gprAW.js";import"./group-C0-37VYq.js";import"./VTable-fMMFAG9t.js";import"./filter-CojnhgC1.js";import"./VField-CAUvKyXj.js";import"./VProgressCircular-D0IBnh0x.js";const go=g({__name:"accesoriosList",setup(I){const l=T(),V=i({title:"Accesorios"}),b=i([{text:"Dashboard",disabled:!1,href:"#"},{text:"Listado de Accesorios",disabled:!0,href:"#"}]),n=i([]),d=async()=>{n.value=await l.accesorios()},p=s=>{A.push({name:"accesorioForm",params:{id_accesorio:s}})},v=i([{title:"Acciones",key:"actions",sortable:!1},{title:"Accesorioss",key:"nombre_accesorio"}]);function h(s){u.fire({title:"¿Estas seguro?",text:"¡El proceso no podra ser revertido!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, eliminar!"}).then(async r=>{if(r.isConfirmed){const{ok:e,message:m}=await l.deleteaccesorio({id:s}),C=e?"success":"error";e&&await d(),B.fire({icon:C,title:m})}})}const a=i(),B=u.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0});return k(()=>{d()}),(s,r)=>(x(),w(y,null,[o(_,{title:V.value.title,breadcrumbs:b.value},null,8,["title","breadcrumbs"]),o(S,null,{default:t(()=>[o(F,{cols:"12"},{default:t(()=>[o(E,{class:"border rounded-md",headers:v.value,items:n.value,"sort-by":[{key:"nombre_accesorio",order:"asc"}],search:a.value},{top:t(()=>[o(D,{class:"bg-lightprimary",flat:""},{default:t(()=>[o(L,{class:"ml-4",modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e),modelModifiers:{trim:!0},"append-inner-icon":"mdi-magnify",label:"Busqueda","hide-details":""},null,8,["modelValue"]),o(N,{class:"mx-4",inset:"",vertical:""}),o($),o(z,{color:"primary",variant:"flat",dark:"",onClick:r[1]||(r[1]=e=>p(0))},{default:t(()=>[c("Nuevo Accesorio")]),_:1})]),_:1})]),"item.actions":t(({item:e})=>[o(f,{color:"info",size:"large",class:"me-2",onClick:m=>p(e.id)},{default:t(()=>[c(" mdi-pencil ")]),_:2},1032,["onClick"]),o(f,{color:"error",size:"large",onClick:m=>h(e.id)},{default:t(()=>[c(" mdi-delete ")]),_:2},1032,["onClick"])]),_:1},8,["headers","items","search"])]),_:1})]),_:1})],64))}});export{go as default};