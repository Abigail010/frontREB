import{B}from"./BaseBreadcrumb-4MIjbQwQ.js";import{y as g,H as a,a2 as u,E as k,o as x,c as w,b as e,w as o,d as m,F as y,a3 as T}from"./index-CUBqpQjk.js";import{u as F}from"./clase-CHtNExl6.js";import{V as E,a as S}from"./VRow-De8gMS49.js";import{V as D}from"./VDataTable-Clv1HmiC.js";import{V as N}from"./VToolbar-Cf21mDDn.js";import{V as $}from"./VTextField-DvwW7kBo.js";import{V as z}from"./VDivider-BKsbfY-L.js";import{V as I}from"./VSpacer-D0J7wQQ_.js";import{V as L}from"./VBtn-Bwlw_S26.js";import{V as f}from"./router-DjP1fb63.js";import"./useRender-DUD5GNME.js";import"./VCard-B5JACPL-.js";import"./VAvatar-DCozc2c4.js";import"./transition-7eeLtsO5.js";import"./resizeObserver-Dy93hC7S.js";import"./VSelect-Y5UkN40p.js";import"./VInput-a6OhgCb3.js";import"./index-CBT7dlbo.js";import"./forwardRefs-D3j0TLhE.js";import"./VList-ClDiqBX_.js";import"./ssrBoot-TGepEb6s.js";import"./dialog-transition-BmxFGc2r.js";import"./VMenu-Cw996tyh.js";import"./VOverlay-ZufbB-oQ.js";import"./lazy-BqTskM4N.js";import"./scopeId-BvaqpV40.js";import"./VCheckboxBtn-Ct_gEblA.js";import"./VSelectionControl-Dee3CKWd.js";import"./VLabel-cMv036s0.js";import"./VChip-B4X-ZzT8.js";import"./VSlideGroup-Bt6gprAW.js";import"./group-C0-37VYq.js";import"./VTable-fMMFAG9t.js";import"./filter-CojnhgC1.js";import"./VField-CAUvKyXj.js";import"./VProgressCircular-D0IBnh0x.js";const Be=g({__name:"clasesList",setup(M){const n=F(),V=a({title:"Tipo"}),b=a([{text:"Dashboard",disabled:!1,href:"#"},{text:"Tipo de vehículo",disabled:!0,href:"#"}]),c=a([]),p=async()=>{c.value=await n.Clase()},d=s=>{T.push({name:"ClaseForm",params:{id_clase:s}})},C=a([{title:"Acciones",key:"actions",sortable:!1},{title:"Tipo",key:"nombre_clase"}]);function v(s){u.fire({title:"¿Estas seguro?",text:"¡El proceso no podra ser revertido!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, eliminar!"}).then(async r=>{if(r.isConfirmed){const{ok:t,message:l}=await n.deleteClases({id:s}),h=t?"success":"error";t&&await p(),_.fire({icon:h,title:l})}})}const i=a(),_=u.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0});return k(()=>{p()}),(s,r)=>(x(),w(y,null,[e(B,{title:V.value.title,breadcrumbs:b.value},null,8,["title","breadcrumbs"]),e(S,null,{default:o(()=>[e(E,{cols:"12"},{default:o(()=>[e(D,{class:"border rounded-md",headers:C.value,items:c.value,"sort-by":[{key:"nombre_Clase",order:"asc"}],search:i.value},{top:o(()=>[e(N,{class:"bg-lightprimary",flat:""},{default:o(()=>[e($,{class:"ml-4",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=t=>i.value=t),modelModifiers:{trim:!0},"append-inner-icon":"mdi-magnify",label:"Busqueda","hide-details":""},null,8,["modelValue"]),e(z,{class:"mx-4",inset:"",vertical:""}),e(I),e(L,{color:"primary",variant:"flat",dark:"",onClick:r[1]||(r[1]=t=>d(0))},{default:o(()=>[m("Nuevo tipo")]),_:1})]),_:1})]),"item.actions":o(({item:t})=>[e(f,{color:"info",size:"large",class:"me-2",onClick:l=>d(t.id_clase)},{default:o(()=>[m(" mdi-pencil ")]),_:2},1032,["onClick"]),e(f,{color:"error",size:"large",onClick:l=>v(t.id_clase)},{default:o(()=>[m(" mdi-delete ")]),_:2},1032,["onClick"])]),_:1},8,["headers","items","search"])]),_:1})]),_:1})],64))}});export{Be as default};