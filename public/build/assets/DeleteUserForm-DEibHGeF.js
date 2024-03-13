import{o as f,g as h,r as x,k as D,l as E,m as S,c as $,a as V,b as l,w as i,i as p,p as y,d as t,q as _,n as B,h as U,s as N,x as b,T,t as c,u as s,Q as A,y as z,e as w,z as M}from"./app-1T2E2gxX.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as W,a as F,b as I}from"./TextInput-BZLGBj_B.js";const K={},L={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function P(a,e){return f(),h("button",L,[x(a.$slots,"default")])}const k=O(K,[["render",P]]),j={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},q=t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),Q=[q],G={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(a,{emit:e}){const n=a,d=e;D(()=>n.show,()=>{n.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const o=()=>{n.closeable&&d("close")},u=r=>{r.key==="Escape"&&n.show&&o()};E(()=>document.addEventListener("keydown",u)),S(()=>{document.removeEventListener("keydown",u),document.body.style.overflow=null});const m=$(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[n.maxWidth]);return(r,g)=>(f(),V(N,{to:"body"},[l(_,{"leave-active-class":"duration-200"},{default:i(()=>[p(t("div",j,[l(_,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:i(()=>[p(t("div",{class:"fixed inset-0 transform transition-all",onClick:o},Q,512),[[y,a.show]])]),_:1}),l(_,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:i(()=>[p(t("div",{class:B(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",m.value])},[a.show?x(r.$slots,"default",{key:0}):U("",!0)],2),[[y,a.show]])]),_:3})],512),[[y,a.show]])]),_:3})]))}},H=["type"],J={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(a){return(e,n)=>(f(),h("button",{type:a.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[x(e.$slots,"default")],8,H))}},R={class:"space-y-6"},X={class:"text-lg font-medium text-gray-900"},Y={class:"mt-1 text-sm text-gray-600"},Z={class:"p-6"},ee={class:"text-lg font-medium text-gray-900"},se={class:"mt-1 text-sm text-gray-600"},te={class:"mt-6"},oe={class:"mt-6 flex justify-end"},re={__name:"DeleteUserForm",setup(a){let e=$(()=>A().props.lang=="en");const n=b(!1),d=b(null),o=T({password:""}),u=()=>{n.value=!0,z(()=>d.value.focus())},m=()=>{o.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>r(),onError:()=>d.value.focus(),onFinish:()=>o.reset()})},r=()=>{n.value=!1,o.reset()};return(g,v)=>(f(),h("section",R,[t("header",null,[t("h2",X,c(s(e)?"Delete Account":"حذف الحساب"),1),t("p",Y,c(s(e)?"Once your account is deleted, all of its resources and data will be permanently deleted. Before deletingyour account, please download any data or information that you wish to retain.":"بمجرد حذف حسابك ستفقد بياناتك لذلك راجع بياناتك جيدا قبل الحذف."),1)]),l(k,{onClick:u},{default:i(()=>[w(c(s(e)?"Delete Account":"حذف الحساب"),1)]),_:1}),l(G,{show:n.value,onClose:r,dir:g.isEN?"ltr":"rtl"},{default:i(()=>[t("div",Z,[t("h2",ee,c(s(e)?"Are you sure you want to delete your account?":"هل انت متأكد من حذف حسابك؟"),1),t("p",se,c(s(e)?"Once your account is deleted, all of its resources and data will be permanently deleted. Before deletingyour account, please download any data or information that you wish to retain.":"بمجرد حذف حسابك ستفقد بياناتك لذلك راجع بياناتك جيدا قبل الحذف."),1),t("div",te,[l(W,{for:"password",value:s(e)?"Password":"كلمة المرور",class:"sr-only"},null,8,["value"]),l(F,{id:"password",ref_key:"passwordInput",ref:d,modelValue:s(o).password,"onUpdate:modelValue":v[0]||(v[0]=C=>s(o).password=C),type:"password",class:"mt-1 block w-3/4",placeholder:s(e)?"Password":"كلمة المرور",onKeyup:M(m,["enter"])},null,8,["modelValue","placeholder"]),l(I,{message:s(o).errors.password,class:"mt-2"},null,8,["message"])]),t("div",oe,[l(J,{onClick:r},{default:i(()=>[w(c(s(e)?"Cancel":"الغاء"),1)]),_:1}),l(k,{class:B(["ms-3",{"opacity-25":s(o).processing}]),disabled:s(o).processing,onClick:m},{default:i(()=>[w(c(s(e)?"Delete Account":"حذف الحساب"),1)]),_:1},8,["class","disabled"])])])]),_:1},8,["show","dir"])]))}};export{re as default};