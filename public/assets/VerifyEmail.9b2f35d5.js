import{b as n,c,A as f,l as p,B as _,h as g,w as i,d as a,u as e,H as y,g as h,f as r,n as b,L as x,p as v,i as d}from"./app.6a98db12.js";import{_ as k}from"./Guest.0325c01b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w=["type"],B={__name:"Button",props:{type:{type:String,default:"submit"}},setup(s){return(o,t)=>(n(),c("button",{type:s.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[f(o.$slots,"default")],8,w))}},V=r("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),S={key:0,class:"mb-4 font-medium text-sm text-green-600"},E=["onSubmit"],L={class:"mt-4 flex items-center justify-between"},N=d(" Resend Verification Email "),$=d("Log Out"),T={__name:"VerifyEmail",props:{status:String},setup(s){const o=s,t=p(),u=()=>{t.post(route("verification.send"))},l=_(()=>o.status==="verification-link-sent");return(m,C)=>(n(),g(k,null,{default:i(()=>[a(e(y),{title:"Email Verification"}),V,e(l)?(n(),c("div",S," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),r("form",{onSubmit:v(u,["prevent"])},[r("div",L,[a(B,{class:b({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:i(()=>[N]),_:1},8,["class","disabled"]),a(e(x),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[$]),_:1},8,["href"])])],40,E)]),_:1}))}};export{T as default};