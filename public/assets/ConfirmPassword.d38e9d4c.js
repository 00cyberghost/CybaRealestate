import{s as n,b as d,m as l,w as t,d as e,u as o,H as c,e as a,n as p,g as u,f}from"./app.d90bbe21.js";import{R as _,_ as w}from"./PopularPlaces.14fa75ab.js";import{_ as b}from"./Guest.a08cb526.js";import{_ as h}from"./Input.c999814c.js";import{_ as g}from"./InputError.2bc546e2.js";import"./Pagination.d34dce06.js";/* empty css                                                                         */import"./_plugin-vue_export-helper.cdc0426e.js";const x=a("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},y=f(" Confirm "),T={__name:"ConfirmPassword",setup(C){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(P,r)=>(d(),l(b,null,{default:t(()=>[e(o(c),{title:"Confirm Password"}),x,a("form",{onSubmit:u(i,["prevent"])},[a("div",null,[e(_,{for:"password",value:"Password"}),e(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),e(g,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),a("div",v,[e(w,{class:p(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[y]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{T as default};
