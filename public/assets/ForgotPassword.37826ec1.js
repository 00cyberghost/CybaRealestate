import{o as _,s as u,b as l,c as r,d as o,e as s,t as h,k as p,g as f,x as g,z as b,u as t,n as v,w,F as k,f as a,L as x}from"./app.63348114.js";import{_ as y}from"./InputError.d22f9825.js";import{H as F}from"./Header.17199a03.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"wrapper"},L={class:"login-and-register-form modal"},N=s("div",{class:"main-overlay"},null,-1),S={class:"main-register-holder"},B={class:"main-register fl-wrap"},C=s("div",{class:"close-reg"},[s("i",{class:"fa fa-times"})],-1),E=s("h3",null,[a("Welcome to "),s("span",null,[a("Find"),s("strong",null,"Houses")])],-1),H={id:"tabs-container"},M={class:"tab"},z={id:"tab-1",class:"tab-contents"},D={key:0,class:"mb-4 font-medium text-sm text-green-600"},T={class:"custom-form"},U=["onSubmit"],q=s("label",null,"Username or Email Address * ",-1),A=["disabled"],I=s("span",null,"Email Link",-1),O=[I],P={class:"lost_password"},W=a("Login"),Q={__name:"ForgotPassword",props:{status:String},setup(i){_(()=>{$(".modal").fadeIn(),$(".close-reg").on("click",function(){$(".modal").fadeOut(),history.back()})});const e=u({email:""}),d=()=>{e.post(route("password.email"))};return(c,n)=>(l(),r(k,null,[o(F),s("div",V,[s("div",L,[N,s("div",S,[s("div",B,[C,E,s("div",H,[s("div",M,[s("div",z,[i.status?(l(),r("div",D,h(i.status),1)):p("",!0),s("div",T,[s("form",{onSubmit:f(d,["prevent"])},[q,g(s("input",{name:"email",id:"email",type:"text","onUpdate:modelValue":n[0]||(n[0]=m=>t(e).email=m),required:"",autofocus:"",autocomplete:"username"},null,512),[[b,t(e).email]]),o(y,{class:"mt-2",message:t(e).errors.email},null,8,["message"]),s("button",{class:v([{"opacity-25":t(e).processing},"log-submit-btn"]),disabled:t(e).processing,type:"submit"},O,10,A)],40,U),s("div",P,[o(t(x),{href:c.route("login")},{default:w(()=>[W]),_:1},8,["href"])])])])])])])])])])],64))}};export{Q as default};
