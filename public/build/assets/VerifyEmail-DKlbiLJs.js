import{c as r,T as g,o as c,a as y,w as o,Q as h,b as a,u as e,Z as _,d as n,t as s,g as v,h as b,e as l,n as x,j as k,f as w}from"./app-1T2E2gxX.js";import{_ as V}from"./GuestLayout-DC7Vq6xV.js";import{P as B}from"./PrimaryButton-BsPsBRNC.js";import"./AppFooter-C-Bov8RA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E={class:"mb-4 text-sm text-gray-600"},N={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4 flex items-center justify-between"},A={__name:"VerifyEmail",props:{status:{type:String}},setup(d){let t=r(()=>h().props.isEn);const u=d,i=g({}),m=()=>{i.post(route("verification.send"))},f=r(()=>u.status==="verification-link-sent");return(p,j)=>(c(),y(V,null,{default:o(()=>[a(e(_),{title:e(t)?"Email Verification":"الحقق من البريد الإلكتروني"},null,8,["title"]),n("div",E,s(e(t)?"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.":"شكرا لك على تسجيل الدخول. قبل البدء قمنا بإرسال رابط للتحقق من بريدك على بريدك الإلكتروني. اذا لم تتلقي البريد الإلكتروني، سنرسل لك رابط تحقق جديد."),1),f.value?(c(),v("div",N,s(e(t)?"A new verification link has been sent to the email address you provided during registration.":"رابط تحقق جديد تم إرساله لبريدك الإلكتروني الذي قمت بتسجيله."),1)):b("",!0),n("form",{onSubmit:w(m,["prevent"])},[n("div",S,[a(B,{class:x({"opacity-25":e(i).processing}),disabled:e(i).processing},{default:o(()=>[l(s(e(t)?"Resend Verification Email":"أعد إرسال رابط التحقق"),1)]),_:1},8,["class","disabled"]),a(e(k),{href:p.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:o(()=>[l(s(e(t)?"Log Out":"تسجيل الخروج"),1)]),_:1},8,["href"])])],32)]),_:1}))}};export{A as default};