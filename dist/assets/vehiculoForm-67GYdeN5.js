import{y as ne,H as m,a4 as de,D as ue,a2 as j,E as ce,o as d,c,b as a,w as r,d as l,z as f,s as p,a as s,F as w,k as S,a3 as G}from"./index-I5uRkXFU.js";import{u as pe}from"./resource-jFkQP3yw.js";import{u as fe}from"./vehicle-B8ek3Z1y.js";import{u as _e}from"./orden-IgzJZi-x.js";import{v}from"./validateText-UQqnbmko.js";import{u as ve}from"./filtro-xbK0YjCg.js";import{B as De}from"./BaseBreadcrumb-CGsPg8x-.js";import{V as n,a as y}from"./VRow-C2-TvTum.js";import{V as ge,a as H,b as J,c as K}from"./VExpansionPanel-tHqaEou1.js";import{V as u}from"./VLabel-Ag2grjr3.js";import{V as b}from"./VTextField-D1VQ5-ak.js";import{V as B}from"./VTextarea-DbXZ8eM1.js";import{V as D}from"./VAutocomplete-DNqwhoGV.js";import{V as be}from"./VSelect-B6VoM9GU.js";import{V as x}from"./VBtn-DyMptNjQ.js";import{V as Ve}from"./VProgressCircular-DLvzaeE_.js";import"./useRender-CofbKJNJ.js";import"./router-CIZ1aivY.js";import"./VCard-CFoLrGNY.js";import"./VAvatar-BgiBz-Io.js";import"./transition-CJctgnM6.js";import"./group-DMpYtfwH.js";import"./index-DVfikfhV.js";import"./lazy-CykwLnRK.js";import"./VField-CcxtAORc.js";import"./VInput-C5uB995F.js";import"./forwardRefs-D3j0TLhE.js";import"./filter-CuSiGa-L.js";import"./VList-CegpFE-d.js";import"./ssrBoot-EYk6HfIQ.js";import"./VDivider-CB1jztyL.js";import"./VMenu-C8Z1rp41.js";import"./VOverlay-DQyZ6KCi.js";import"./scopeId-Cq7v6oAO.js";import"./dialog-transition-Br0UkKlX.js";import"./VCheckboxBtn-ADuCzSCG.js";import"./VSelectionControl-MfXk8DcN.js";import"./VChip-CE0dAH0h.js";import"./VSlideGroup-jLxjsqZ9.js";import"./resizeObserver-BA5joKW-.js";const ye=s("h4",{class:"mb-5 mt-2 font-weight-light"},[s("b",null," REGISTRO DEL VEHÍCULO: "),l(" Todos los campos con "),s("span",{style:{color:"red"}},"(*)"),l("son obligatorios ")],-1),he=s("span",{style:{color:"red"}},"(*)",-1),we={key:0,class:"v-messages font-weight-black px-2 py-2"},xe=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),ke=[xe],Ee=s("span",{style:{color:"red"}},"(*)",-1),Ue={key:0,class:"v-messages font-weight-black px-2 py-2"},Ce=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),Ie=[Ce],Ne=s("span",{style:{color:"red"}}," (*)",-1),Se={key:0,class:"v-messages font-weight-black px-2 py-2"},Be=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),Me=[Be],Pe=s("span",{style:{color:"red"}},"(*)",-1),Te={key:0,class:"v-messages font-weight-black px-2 py-2"},ze=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),Re=[ze],qe=s("span",{style:{color:"red"}},"(*)",-1),$e={key:0,class:"v-messages font-weight-black px-2 py-2"},Ae=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),Fe=[Ae],Le=s("span",{style:{color:"red"}},"(*)",-1),Oe={key:0,class:"v-messages font-weight-black px-2 py-2"},je=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),Ge=[je],He=s("span",{style:{color:"red"}},"(*)",-1),Je={key:0,class:"v-messages font-weight-black px-2 py-2"},Ke=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),Qe=[Ke],We=s("span",{style:{color:"red"}},"(*)",-1),Xe={key:0,class:"v-messages font-weight-black px-2 py-2"},Ye=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),Ze=[Ye],eo=s("span",{style:{color:"red"}},"(*)",-1),oo={key:0,class:"v-messages font-weight-black px-2 py-2"},ao=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),to=[ao],ro=s("span",{style:{color:"red"}},"(*)",-1),so={key:0,class:"v-messages font-weight-black ml-3 mt-2"},lo=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),io=[lo],mo=s("span",{style:{color:"red"}},"(*)",-1),no={key:0,class:"v-messages font-weight-black ml-3 mt-2"},uo=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),co=[uo],po=s("span",{style:{color:"red"}},"*",-1),fo={key:0,class:"v-messages font-weight-black ml-3 mt-2"},_o=s("div",{class:"v-messages__message text-error"}," El campo es requerido ",-1),vo=[_o],ra=ne({__name:"vehiculoForm",setup(Do){const M=m([0]),k=ve(),V=fe(),g=de(),P=pe();_e();const Q=["GASOLINA","DIESEL","KEROSENE"],i=m(!1),E=m(!0);m(!1);const U=m(!1),W=JSON.parse(localStorage.getItem("user")||"").nombre_perfil,X=m({title:"Registro del vehículo"}),Y=m([{text:"Dashboard",disabled:!1,href:"/home"},{text:"Vehículos",disabled:!0,href:"#"}]),Z=m(!0),T=m(!1),e=ue({formData:{id_orden:"",placa_chasis:"",nombre_taller:"",placa:"",chasis:"",marca:"",modelo:"",motor:"",anio_fabri:"",color_ve:"",placas:"",chasis_:"",kilometraje:"",nro_ocupantes:"",combustible:"",fuerza_orden:"",tipo_orden:"",id_vehiculo:"",clase:"",modelo_año:"",departamento:"",provincia:"",municipio:"",fuerza:"",procedencia:"",grupo:"",anio_baja:"",componente:"",comparar_:"",kilo_:"",valido_kilo:"",estado_orden:""}}),h=m([]),C=m([]),z=m([]),I=m([]),ee=async()=>{h.value=await P.getPlaces(),C.value=h.value.filter(_=>_.tipo=="DEPARTAMENTO")},oe=async _=>{let o=C.value.find(t=>t.nombre_region==_);I.value=h.value.filter(t=>t.tipo=="PROVINCIA"&&t.padre==o.id)},ae=async _=>{let o=I.value.find(t=>t.nombre_region==_);z.value=h.value.filter(t=>t.tipo=="MUNICIPIO"&&t.padre==o.id)},R=m([]),q=m([]),$=m([]),A=m([]),F=m([]);m([]);const te=async()=>{R.value=await k.clase(),q.value=await k.tipo(),$.value=await k.marcas(),A.value=await V.getFuerza(),F.value=await V.getProce()},re=m([]),se=async()=>{re.value=await P.getDepartments()};m([]);const le=async _=>{const o=await V.getIDv(_);e.formData.id_vehiculo=o.id_v,e.formData.chasis_=o.chasis,e.formData.placas=o.placa,e.formData.nro_ocupantes=o.nro_ocupantes,e.formData.motor=o.motor,e.formData.marca=o.id_marca,e.formData.modelo=o.tipo1,e.formData.color_ve=o.color,e.formData.combustible=o.combustible,e.formData.tipo_orden=o.id_clase,e.formData.anio_fabri=o.anio_registro,e.formData.anio_baja=o.anio_baja,e.formData.departamento=o.departamento,e.formData.municipio=o.municipio,e.formData.provincia=o.provincia,e.formData.fuerza=o.id_fuerza,e.formData.grupo=o.grupo,e.formData.procedencia=o.id_procedencia,e.formData.componente=o.componente,T.value=!1,e.formData.comparar_=o.total,e.formData.kilo_=o.kilo_rem,e.formData.estado_orden=o.estado;let N=(parseInt(e.formData.comparar_)+1)*parseInt(e.formData.kilo_);e.formData.valido_kilo=String(N)},ie=()=>{G.push({name:"VehiculoList"})},L=async()=>{if(i.value=!0,await me(),!!E.value){if(U.value=!0,g.params.id_v=="0")j.fire({title:"¿Estás seguro?",text:"Verifica que la información registrada sea correcta",icon:"warning",showCancelButton:!0,cancelButtonColor:"#FA896B",confirmButtonColor:"#5D87FF",cancelButtonText:"No, volver",confirmButtonText:"Si, enviar formulario"}).then(async _=>{if(_.isConfirmed){const{ok:o,message:t}=await V.createVehicle(e.formData),N=o?"success":"error";O.fire({icon:N,title:t})}});else if(Z.value){const{ok:_,message:o}=await V.updateVehicle(e.formData),t=_?"success":"error";O.fire({icon:t,title:o})}else G.push({name:"vehiculoList"});U.value=!1}},me=async()=>{E.value=!0,(!e.formData.placas||!e.formData.chasis_||!e.formData.color_ve||!e.formData.combustible||!e.formData.tipo_orden||!e.formData.fuerza||!e.formData.marca||!e.formData.nro_ocupantes||!e.formData.motor||!e.formData.combustible||!e.formData.procedencia||!e.formData.tipo_orden||!e.formData.modelo)&&(E.value=!1)},O=j.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0});return ce(async()=>{await se(),await ee(),await te(),g.params.id_v!="0"&&(await le(g.params.id_v),T.value=!0)}),(_,o)=>(d(),c(w,null,[a(De,{title:X.value.title,breadcrumbs:Y.value},null,8,["title","breadcrumbs"]),a(y,null,{default:r(()=>[a(n,{cols:"12",lg:"12"},{default:r(()=>[ye]),_:1})]),_:1}),a(y,null,{default:r(()=>[a(ge,{modelValue:M.value,"onUpdate:modelValue":o[28]||(o[28]=t=>M.value=t)},{default:r(()=>[a(H,{elevation:"10"},{default:r(()=>[a(J,{class:"text-h6"},{default:r(()=>[l("Caracteristicas del vehículo")]),_:1}),a(K,{class:"mt-4"},{default:r(()=>[a(y,null,{default:r(()=>[a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Placa "),he]),_:1}),a(b,{variant:"outlined",color:"primary",modelValue:e.formData.placas,"onUpdate:modelValue":o[0]||(o[0]=t=>e.formData.placas=t),modelModifiers:{trim:!0},onInput:o[1]||(o[1]=t=>e.formData.placas=f(v)(e.formData.placas.toUpperCase())),error:i.value&&!e.formData.placas,"hide-details":""},null,8,["modelValue","error"]),i.value&&!e.formData.placas?(d(),c("div",we,ke)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Chasis "),Ee]),_:1}),a(B,{rows:"1","auto-grow":"",modelValue:e.formData.chasis_,"onUpdate:modelValue":o[2]||(o[2]=t=>e.formData.chasis_=t),modelModifiers:{trim:!0},onInput:o[3]||(o[3]=t=>e.formData.chasis_=f(v)(e.formData.chasis_.toUpperCase())),error:i.value&&!e.formData.chasis_,"hide-details":""},null,8,["modelValue","error"]),i.value&&!e.formData.placas?(d(),c("div",Ue,Ie)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l(" Tipo "),Ne]),_:1}),a(D,{variant:"outlined",color:"primary",items:R.value,modelValue:e.formData.tipo_orden,"onUpdate:modelValue":o[4]||(o[4]=t=>e.formData.tipo_orden=t),"no-data-text":"No existe más opciones para seleccionar","item-value":"id_clase","item-title":"nombre_clase",error:i.value&&!e.formData.tipo_orden},null,8,["items","modelValue","error"]),i.value&&!e.formData.tipo_orden?(d(),c("div",Se,Me)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l(" Marca"),Pe]),_:1}),a(D,{variant:"outlined",color:"primary",items:$.value,modelValue:e.formData.marca,"onUpdate:modelValue":o[5]||(o[5]=t=>e.formData.marca=t),"no-data-text":"No existe más opciones para seleccionar","item-value":"id_marca","item-title":"nombre_marca",error:i.value&&!e.formData.marca},null,8,["items","modelValue","error"]),i.value&&!e.formData.marca?(d(),c("div",Te,Re)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l(" Modelo"),qe]),_:1}),a(D,{variant:"outlined",color:"primary",items:q.value,modelValue:e.formData.modelo,"onUpdate:modelValue":o[6]||(o[6]=t=>e.formData.modelo=t),"no-data-text":"No existe más opciones para seleccionar","item-value":"nombre_tipo","item-title":"nombre_tipo",error:i.value&&!e.formData.modelo},null,8,["items","modelValue","error"]),i.value&&!e.formData.modelo?(d(),c("div",$e,Fe)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l(" Color"),Le]),_:1}),a(B,{rows:"1","auto-grow":"",modelValue:e.formData.color_ve,"onUpdate:modelValue":o[7]||(o[7]=t=>e.formData.color_ve=t),modelModifiers:{trim:!0},onInput:o[8]||(o[8]=t=>e.formData.color_ve=f(v)(e.formData.color_ve.toUpperCase())),error:i.value&&!e.formData.color_ve,"hide-details":""},null,8,["modelValue","error"]),i.value&&!e.formData.color_ve?(d(),c("div",Oe,Ge)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Motor "),He]),_:1}),a(B,{rows:"1","auto-grow":"",modelValue:e.formData.motor,"onUpdate:modelValue":o[9]||(o[9]=t=>e.formData.motor=t),modelModifiers:{trim:!0},onInput:o[10]||(o[10]=t=>e.formData.motor=f(v)(e.formData.motor.toUpperCase())),error:i.value&&!e.formData.motor,"hide-details":""},null,8,["modelValue","error"]),i.value&&!e.formData.motor?(d(),c("div",Je,Qe)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("N° de ocupantes "),We]),_:1}),a(b,{variant:"outlined",color:"primary",type:"number",min:"1",modelValue:e.formData.nro_ocupantes,"onUpdate:modelValue":o[11]||(o[11]=t=>e.formData.nro_ocupantes=t),modelModifiers:{trim:!0},onInput:e.formData.nro_ocupantes,"hide-details":"",error:i.value&&!e.formData.nro_ocupantes},null,8,["modelValue","onInput","error"]),i.value&&!e.formData.nro_ocupantes?(d(),c("div",Xe,Ze)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Tipo de combustible"),eo]),_:1}),s("div",null,[a(be,{modelValue:e.formData.combustible,"onUpdate:modelValue":o[12]||(o[12]=t=>e.formData.combustible=t),items:Q,"item-title":"nombre_region","item-value":"nombre_region",error:i.value&&!e.formData.combustible},null,8,["modelValue","error"]),i.value&&!e.formData.combustible?(d(),c("div",oo,to)):p("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}),a(H,{elevation:"10",class:"mt-3"},{default:r(()=>[a(J,{class:"text-h6",style:{color:"black"}},{default:r(()=>[l("Información del vehículo")]),_:1}),a(K,{class:"mt-4"},{default:r(()=>[a(y,null,{default:r(()=>[a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Grupo")]),_:1}),a(b,{variant:"outlined",color:"primary",modelValue:e.formData.grupo,"onUpdate:modelValue":o[13]||(o[13]=t=>e.formData.grupo=t),modelModifiers:{trim:!0},onInput:o[14]||(o[14]=t=>e.formData.grupo=f(v)(e.formData.grupo.toUpperCase())),"hide-details":""},null,8,["modelValue"])]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Fuerza"),ro]),_:1}),a(D,{variant:"outlined",color:"primary",items:A.value,modelValue:e.formData.fuerza,"onUpdate:modelValue":o[15]||(o[15]=t=>e.formData.fuerza=t),"no-data-text":"No existe más opciones para seleccionar","item-value":"id_fuerza","item-title":"nombre_fuerza",error:i.value&&!e.formData.fuerza},null,8,["items","modelValue","error"]),i.value&&!e.formData.fuerza?(d(),c("div",so,io)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Procedencia"),mo]),_:1}),a(D,{variant:"outlined",color:"primary",items:F.value,modelValue:e.formData.procedencia,"onUpdate:modelValue":o[16]||(o[16]=t=>e.formData.procedencia=t),"no-data-text":"No existe más opciones para seleccionar","item-value":"id_procedencia","item-title":"nombre_procedencia",error:i.value&&!e.formData.procedencia},null,8,["items","modelValue","error"]),i.value&&!e.formData.procedencia?(d(),c("div",no,co)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l(" Departamento "),po]),_:1}),a(D,{variant:"outlined",color:"primary",items:C.value,modelValue:e.formData.departamento,"onUpdate:modelValue":[o[17]||(o[17]=t=>e.formData.departamento=t),o[18]||(o[18]=t=>{oe(e.formData.departamento)})],"no-data-text":"No existe más opciones para seleccionar","item-value":"nombre_region","item-title":"nombre_region",error:i.value&&!e.formData.departamento},null,8,["items","modelValue","error"]),i.value&&!e.formData.departamento?(d(),c("div",fo,vo)):p("",!0)]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l(" Provincia ")]),_:1}),a(D,{variant:"outlined",color:"primary",items:I.value,modelValue:e.formData.provincia,"onUpdate:modelValue":[o[19]||(o[19]=t=>e.formData.provincia=t),o[20]||(o[20]=t=>{ae(e.formData.provincia)})],"no-data-text":"No existe más opciones para seleccionar","item-value":"nombre_region","item-title":"nombre_region"},null,8,["items","modelValue"])]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l(" Municipio ")]),_:1}),a(D,{variant:"outlined",color:"primary",items:z.value,modelValue:e.formData.municipio,"onUpdate:modelValue":o[21]||(o[21]=t=>e.formData.municipio=t),"no-data-text":"No existe más opciones para seleccionar","item-value":"nombre_region","item-title":"nombre_region"},null,8,["items","modelValue"])]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Año de Ingreso")]),_:1}),a(b,{variant:"outlined",color:"primary",modelValue:e.formData.anio_fabri,"onUpdate:modelValue":o[22]||(o[22]=t=>e.formData.anio_fabri=t),modelModifiers:{trim:!0},onInput:o[23]||(o[23]=t=>e.formData.anio_fabri=f(v)(e.formData.anio_fabri.toUpperCase())),min:"1980",type:"number","hide-details":""},null,8,["modelValue"])]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Año de Baja")]),_:1}),a(b,{variant:"outlined",color:"primary",modelValue:e.formData.anio_baja,"onUpdate:modelValue":o[24]||(o[24]=t=>e.formData.anio_baja=t),modelModifiers:{trim:!0},onInput:o[25]||(o[25]=t=>e.formData.anio_baja=f(v)(e.formData.anio_baja.toUpperCase())),min:"1980",type:"number","hide-details":""},null,8,["modelValue"])]),_:1}),a(n,{cols:"12",md:"4"},{default:r(()=>[a(u,{class:"mb-2 font-weight-medium"},{default:r(()=>[l("Componente ")]),_:1}),a(b,{variant:"outlined",color:"primary",modelValue:e.formData.componente,"onUpdate:modelValue":o[26]||(o[26]=t=>e.formData.componente=t),modelModifiers:{trim:!0},onInput:o[27]||(o[27]=t=>e.formData.componente=f(v)(e.formData.componente.toUpperCase())),"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(y,null,{default:r(()=>[a(n,{cols:"12",class:"text-lg-left pt-5"},{default:r(()=>[U.value?(d(),S(x,{key:1,color:"primary",disabled:""},{default:r(()=>[a(Ve,{indeterminate:"",color:"white",class:"mr-2"}),l(" Enviando... ")]),_:1})):(d(),c(w,{key:0},[a(x,{color:"error",class:"mr-3",onClick:o[29]||(o[29]=t=>ie())},{default:r(()=>[l("Volver")]),_:1}),f(g).params.id_v=="0"?(d(),S(x,{key:0,color:"primary",onClick:o[30]||(o[30]=t=>L())},{default:r(()=>[f(g).params.id_v=="0"?(d(),c(w,{key:0},[l(" Enviar ")],64)):p("",!0)]),_:1})):p("",!0),f(g).params.id_v!="0"?(d(),S(x,{key:1,color:"primary",onClick:o[31]||(o[31]=t=>L())},{default:r(()=>[f(g).params.id_v!="0"||f(W).includes("SUPER ADMINISTRADOR")?(d(),c(w,{key:0},[l(" Actualizar ")],64)):p("",!0)]),_:1})):p("",!0)],64))]),_:1})]),_:1})],64))}});export{ra as default};