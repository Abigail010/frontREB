import{a5 as B,b3 as S,y as k,E as I,U as _,H as r,o as l,c as h,b as e,w as t,a as o,d as i,t as c,F as v,x as L,k as m,r as P,ch as T,ci as z,a7 as E}from"./index-I5uRkXFU.js";import{B as N}from"./BaseBreadcrumb-CGsPg8x-.js";import{_ as U}from"./ProfileBanner.vue_vue_type_script_setup_true_lang-5Tx9uYw6.js";/* empty css                                                      */import{V as w,a as V}from"./VRow-C2-TvTum.js";import{V as D}from"./VChip-CE0dAH0h.js";import{V as H}from"./VSheet--nJ9QcMP.js";import{V as R}from"./VTextField-D1VQ5-ak.js";import{V as j,b as A}from"./VCard-CFoLrGNY.js";import{V as M}from"./VAvatar-BgiBz-Io.js";import{V as x}from"./VBtn-DyMptNjQ.js";import"./useRender-CofbKJNJ.js";import"./router-CIZ1aivY.js";import"./VTabs-CLD_usGf.js";import"./forwardRefs-D3j0TLhE.js";import"./VSlideGroup-jLxjsqZ9.js";import"./index-DVfikfhV.js";import"./group-DMpYtfwH.js";import"./resizeObserver-BA5joKW-.js";import"./VField-CcxtAORc.js";import"./transition-CJctgnM6.js";import"./VLabel-Ag2grjr3.js";import"./VInput-C5uB995F.js";import"./VProgressCircular-DLvzaeE_.js";const $=B({id:"followers",state:()=>({followers:[]}),getters:{},actions:{async fetchFollowers(){try{const s=await S.get("/api/followers/list");this.followers=s.data.followers}catch(s){alert(s),console.log(s)}}}}),q={class:"d-sm-flex align-center mb-5"},G={class:"text-h3"},J={class:"d-flex align-center gap-3"},K=["src","alt"],O={class:"w-50"},Q={class:"text-h6"},W={class:"text-truncate d-flex align-center gap-2"},X={class:"text-truncate w-50"},Y={class:"ml-auto"},ye=k({__name:"Followers",setup(s){const d=$();I(()=>{d.fetchFollowers()});const g=_(()=>d.followers),n=r("");r([{title:"Favorite",icon:T},{title:"Edit Friend List",icon:z},{title:"Remove",icon:E}]);const b=r({title:"Social Profile"}),u=_(()=>g.value.filter(p=>p.name.toLowerCase().includes(n.value.toLowerCase()))),y=r([{text:"Dashboard",disabled:!1,href:"/"},{text:"Social Profile",disabled:!0,href:"#"}]);return(p,f)=>{const F=P("mapPinIcon");return l(),h(v,null,[e(N,{title:b.value.title,breadcrumbs:y.value},null,8,["title","breadcrumbs"]),e(U),e(V,{class:"justify-content-end mt-5"},{default:t(()=>[e(w,{cols:"12"},{default:t(()=>[o("div",q,[o("h3",G,[i(" Followers "),e(D,{size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"secondary"},{default:t(()=>[i(c(u.value.length),1)]),_:1})]),e(H,{width:"250",class:"ml-0 ml-sm-auto mt-3 mt-sm-0"},{default:t(()=>[e(R,{color:"primary","hide-details":"",variant:"outlined",placeholder:"Search Followers",density:"compact","prepend-inner-icon":"mdi-magnify",modelValue:n.value,"onUpdate:modelValue":f[0]||(f[0]=a=>n.value=a)},null,8,["modelValue"])]),_:1})]),e(V,null,{default:t(()=>[(l(!0),h(v,null,L(u.value,(a,C)=>(l(),m(w,{cols:"12",md:"4",sm:"6",key:C},{default:t(()=>[e(j,{elevation:"10"},{default:t(()=>[e(A,null,{default:t(()=>[o("div",J,[e(M,{size:"40"},{default:t(()=>[o("img",{src:a.avatar,alt:a.avatar,width:"40"},null,8,K)]),_:2},1024),o("div",O,[o("h6",Q,c(a.name),1),o("span",W,[e(F,{size:"14"}),o("span",X,c(a.location),1)])]),o("div",Y,[a.follow==1?(l(),m(x,{key:0,variant:"outlined",color:"primary"},{default:t(()=>[i(" Followed")]),_:1})):(l(),m(x,{key:1,variant:"flat",color:"primary"},{default:t(()=>[i(" Follow")]),_:1}))])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64)}}});export{ye as default};