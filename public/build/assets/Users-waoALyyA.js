import{c as v,Q as x,H as E,u as e,o as t,g as c,F as B,D as N,d as n,t as s,n as _,b as p,w as l,e as m,j as h,a as k,h as i}from"./app-1T2E2gxX.js";import{P as g}from"./PrimaryButton-BsPsBRNC.js";const j={key:0,class:"container"},C={key:0,class:"grid grid-cols-3 it-ce w-full my-10"},V={class:"justify-self-center"},D={__name:"Users",props:{users:{type:Object,required:!0,default:{}}},setup(w){let d=v(()=>x().props.isEn),r=w,y=v(()=>r.users.data),a=E({current:r.users.current_page,last:r.users.last_page,prev:r.users.prev_page_url,next:r.users.next_page_url}),f="p-10";return(o,$)=>e(y)!=!1?(t(),c("div",j,[(t(!0),c(B,null,N(e(y),u=>(t(),c("div",{class:"my-shadow rounded-xl m-5 p-5 w-[90%] grid justify-self-center gap-5",key:u.id},[n("h3",null,s(o.$page.props.isEn?"Name":"الإسم"),1),n("p",{class:_(e(f))},s(u.name),3),n("h3",null,s(o.$page.props.isEn?"Email":"الإيميل"),1),n("p",{class:_(e(f))},s(u.email),3),p(e(h),{href:o.route("user.show",u.id),class:_(["underline justify-self-center",e(f)])},{default:l(()=>[p(g,{class:""},{default:l(()=>[m(s(o.$page.props.isEn?"Show":"اعرض"),1)]),_:1})]),_:2},1032,["href","class"])]))),128)),e(r).users.last_page!==1?(t(),c("div",C,[p(e(h),{href:e(a).prev,class:"","preserve-scroll":""},{default:l(()=>[e(a).prev?(t(),k(g,{key:0},{default:l(()=>[m(s(e(d)?"Previous":"السابق"),1)]),_:1})):i("",!0)]),_:1},8,["href"]),n("p",V,s(e(a).current)+" "+s(e(d)?"of":"من")+" "+s(e(a).last),1),p(e(h),{href:e(a).next,class:"","preserve-scroll":""},{default:l(()=>[e(a).next?(t(),k(g,{key:0,class:"{{ $nextBtnCond ? 'hidden' : '' }}"},{default:l(()=>[m(s(e(d)?"Next":"التالي"),1)]),_:1})):i("",!0)]),_:1},8,["href"])])):i("",!0)])):i("",!0)}};export{D as _};