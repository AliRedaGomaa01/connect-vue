import{c as d,T as c,o as p,a as u,w as i,Q as f,b as o,u as s,Z as _,d as r,t as l,e as w,n as b,f as g}from"./app-1T2E2gxX.js";import{_ as x}from"./GuestLayout-DC7Vq6xV.js";import{_ as y,a as h,b as v}from"./TextInput-BZLGBj_B.js";import{P}from"./PrimaryButton-BsPsBRNC.js";import"./AppFooter-C-Bov8RA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"mb-4 text-sm text-gray-600"},C={class:"flex justify-end mt-4"},z={__name:"ConfirmPassword",setup(B){let e=d(()=>f().props.lang=="en");const a=c({password:""}),n=()=>{a.post(route("password.confirm"),{onFinish:()=>a.reset()})};return($,t)=>(p(),u(x,null,{default:i(()=>[o(s(_),{title:s(e)?"Confirm Password":"تأكيد كلمة المرور"},null,8,["title"]),r("div",V,l(s(e)?"This is a secure area of the application. Please confirm your password before continuing.":"هذه منطقة مؤمنة من التطبيق. الرجاء تأكيد كلمة المرور الخاصة بك قبل المتابعة."),1),r("form",{onSubmit:g(n,["prevent"])},[r("div",null,[o(y,{for:"password",value:s(e)?"Password":"كلمة المرور"},null,8,["value"]),o(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(a).password,"onUpdate:modelValue":t[0]||(t[0]=m=>s(a).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(v,{class:"mt-2",message:s(a).errors.password},null,8,["message"])]),r("div",C,[o(P,{class:b(["ms-4",{"opacity-25":s(a).processing}]),disabled:s(a).processing},{default:i(()=>[w(l(s(e)?"Confirm":"تأكيد"),1)]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{z as default};
