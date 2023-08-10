import{B as g,x as u,C as b,u as t,b as c,c as m,D as v,o as w,s as k,j as x,d as i,e,t as y,k as p,g as B,z as f,l as C,w as V,F as L,f as _,L as F}from"./app.8edf34a8.js";import{_ as h}from"./InputError.3e20a512.js";import{H as I}from"./Header.041ad32d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const P=["value"],S={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(n,{emit:s}){const r=n,d=g({get(){return r.checked},set(l){s("update:checked",l)}});return(l,o)=>u((c(),m("input",{type:"checkbox",value:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>v(d)?d.value=a:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,P)),[[b,t(d)]])}},U={class:"wrapper"},E={class:"login-and-register-form modal"},M=e("div",{class:"main-overlay"},null,-1),N={class:"main-register-holder"},R={class:"main-register fl-wrap"},q=e("div",{class:"close-reg"},[e("i",{class:"fa fa-times"})],-1),D=e("h3",null,[_("Welcome to "),e("span",null,[_("Find"),e("strong",null,"Houses")])],-1),H={id:"tabs-container"},A={class:"tab"},T={id:"tab-1",class:"tab-contents"},j={key:0,class:"mb-4 font-medium text-sm text-green-600"},z={class:"custom-form"},O=["onSubmit"],W=e("label",null,"Username or Email Address * ",-1),Y=e("label",null,"Password * ",-1),G=["disabled"],J=e("span",null,"Log In",-1),K=[J],Q=e("div",{class:"clearfix"},null,-1),X={class:"filter-tags"},Z=e("label",{for:"remember"},"Remember me",-1),ee={class:"lost_password"},se=_("Lost Your Password?"),re={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(n){w(()=>{$(".modal").fadeIn(),$(".close-reg").on("click",function(){$(".modal").fadeOut(),history.back()})});const s=k({email:"",password:"",remember:!1});let r=x(!1);const d=()=>{s.post(route("login"),{onStart:()=>{document.getElementById("sub").textContent="Processing...",r.value=!0},onFinish:()=>{s.reset("password"),document.getElementById("sub").textContent="Log In",r.value=!1}})};return(l,o)=>(c(),m(L,null,[i(I),e("div",U,[e("div",E,[M,e("div",N,[e("div",R,[q,D,e("div",H,[e("div",A,[e("div",T,[n.status?(c(),m("div",j,y(n.status),1)):p("",!0),e("div",z,[e("form",{onSubmit:B(d,["prevent"])},[W,u(e("input",{name:"email",id:"email",type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>t(s).email=a),required:"",autofocus:"",autocomplete:"username"},null,512),[[f,t(s).email]]),i(h,{class:"mt-2",message:t(s).errors.email},null,8,["message"]),Y,u(e("input",{name:"password",id:"password",type:"password","onUpdate:modelValue":o[1]||(o[1]=a=>t(s).password=a),required:"",autocomplete:"current-password"},null,512),[[f,t(s).password]]),i(h,{class:"mt-2",message:t(s).errors.password},null,8,["message"]),e("button",{disabled:t(r),id:"sub",type:"submit",class:"log-submit-btn"},K,8,G),Q,e("div",X,[i(S,{name:"remember",checked:t(s).remember,"onUpdate:checked":o[2]||(o[2]=a=>t(s).remember=a)},null,8,["checked"]),Z])],40,O),e("div",ee,[n.canResetPassword?(c(),C(t(F),{key:0,href:l.route("password.request")},{default:V(()=>[se]),_:1},8,["href"])):p("",!0)])])])])])])])])])],64))}};export{re as default};
