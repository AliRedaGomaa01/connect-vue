import{c as f,T as w,o as _,a as V,w as u,Q as g,b as o,u as s,Z as v,d as t,e as b,t as y,n as k,f as P}from"./app-1T2E2gxX.js";import{_ as q}from"./GuestLayout-DC7Vq6xV.js";import{_ as i,a as m,b as n}from"./TextInput-BZLGBj_B.js";import{P as x}from"./PrimaryButton-BsPsBRNC.js";import"./AppFooter-C-Bov8RA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={class:"mt-4"},S={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},j={__name:"ResetPassword",props:{email:{type:String,required:!0},token:{type:String,required:!0}},setup(p){let r=f(()=>g().props.isEn);const d=p,e=w({token:d.token,email:d.email,password:"",password_confirmation:""}),c=()=>{e.post(route("password.store"),{onFinish:()=>e.reset("password","password_confirmation")})};return(C,a)=>(_(),V(q,null,{default:u(()=>[o(s(v),{title:s(r)?"Reset Password":"اعادة تعيين كلمة المرور"},null,8,["title"]),t("form",{onSubmit:P(c,["prevent"])},[t("div",null,[o(i,{for:"email",value:s(r)?"Email":"البريد الإلكتروني"},null,8,["value"]),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=l=>s(e).email=l),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(n,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",B,[o(i,{for:"password",value:s(r)?"Password":"كلمة المرور"},null,8,["value"]),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",S,[o(i,{for:"password_confirmation",value:s(r)?"Confirm Password":"تأكيد كلمة المرور"},null,8,["value"]),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),t("div",$,[o(x,{class:k({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:u(()=>[b(y(s(r)?"Reset Password":"اعادة تعيين كلمة المرور"),1)]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};