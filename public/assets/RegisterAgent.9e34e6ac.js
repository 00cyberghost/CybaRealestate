import{s as g,j as h,o as f,a as w,b,c as v,e,g as y,x as i,z as l,u as t,d as r,p as x,m as V,f as c}from"./app.70a660d0.js";import{_ as d}from"./InputError.394e0ff9.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";const n=m=>(x("data-v-6e05154c"),m=m(),V(),m),q={class:"login-and-register-form modal"},S=n(()=>e("div",{class:"main-overlay"},null,-1)),U={class:"main-register-holder"},A={class:"main-register fl-wrap"},B=n(()=>e("div",{class:"close-reg"},[e("i",{class:"fa fa-times"})],-1)),N=n(()=>e("h3",null,[c("Welcome to "),e("span",null,[c("Find"),e("strong",null,"Houses")])],-1)),C={id:"tabs-container"},E={class:"tab"},R={id:"tab-1",class:"tab-contents"},k={class:"custom-form"},P=["onSubmit"],F=n(()=>e("label",{id:"name-label",for:"name"},"Agent Name * ",-1)),M=n(()=>e("label",{for:"email"},"Email Address *",-1)),T=n(()=>e("label",{for:"phone"},"Phone Number *",-1)),W=n(()=>e("label",{for:"whatsapp"},"Whatsapp Number *",-1)),j=n(()=>e("label",{for:"password"},"Password *",-1)),z=n(()=>e("label",{for:"password_confirmation"},"confirm Password *",-1)),D=["value"],H=["disabled"],O=n(()=>e("span",null,"Register",-1)),G=[O],J={__name:"RegisterAgent",props:{email:String},setup(m){const s=g({name:"",email:"",phone:null,whatsapp:null,password:"",password_confirmation:"",agency_email:"",terms:!1});let p=h(!1);const _=()=>{let u=document.getElementById("agency_email").value;s.post(route("registerAgent",u),{onStart:()=>{document.getElementById("sub").textContent="Processing...",p.value=!0},onFinish:()=>{s.reset("password","password_confirmation"),document.getElementById("sub").textContent="Register",p.value=!1}})};return f(()=>{$("body").addClass("inner-pages ui-elements hd-white"),$("#dashboard-style").remove(),$("#wrapper").removeClass("int_main_wraapper"),$(".modal").fadeIn(),$(".close-reg").on("click",function(){$(".modal").fadeOut(),history.back()})}),w(()=>{$("body").removeClass("inner-pages ui-elements hd-white")}),(u,o)=>(b(),v("div",q,[S,e("div",U,[e("div",A,[B,N,e("div",C,[e("div",E,[e("div",R,[e("div",k,[e("form",{onSubmit:y(_,["prevent"]),name:"registerform",class:"main-register-form",id:"main-register-form2"},[F,i(e("input",{id:"name",minlength:"3","onUpdate:modelValue":o[0]||(o[0]=a=>t(s).name=a),required:"",autofocus:"",type:"text"},null,512),[[l,t(s).name]]),r(d,{class:"mt-2",message:t(s).errors.name},null,8,["message"]),M,i(e("input",{id:"email",placeholder:"example@email.com","onUpdate:modelValue":o[1]||(o[1]=a=>t(s).email=a),required:"",type:"email"},null,512),[[l,t(s).email]]),r(d,{class:"mt-2",message:t(s).errors.email},null,8,["message"]),T,i(e("input",{id:"phone","onUpdate:modelValue":o[2]||(o[2]=a=>t(s).phone=a),required:"",autofocus:"",type:"tel",minlength:"11",maxlength:"11"},null,512),[[l,t(s).phone]]),r(d,{class:"mt-2",message:t(s).errors.phone},null,8,["message"]),W,i(e("input",{id:"whatsapp","onUpdate:modelValue":o[3]||(o[3]=a=>t(s).whatsapp=a),required:"",autofocus:"",type:"tel",minlength:"11",maxlength:"11"},null,512),[[l,t(s).whatsapp]]),r(d,{class:"mt-2",message:t(s).errors.whatsapp},null,8,["message"]),j,i(e("input",{id:"password",minlength:"6","onUpdate:modelValue":o[4]||(o[4]=a=>t(s).password=a),required:"",type:"password"},null,512),[[l,t(s).password]]),r(d,{class:"mt-2",message:t(s).errors.password},null,8,["message"]),z,i(e("input",{id:"password_confirmation",minlength:"6","onUpdate:modelValue":o[5]||(o[5]=a=>t(s).password_confirmation=a),required:"",type:"password"},null,512),[[l,t(s).password_confirmation]]),r(d,{class:"mt-2",message:t(s).errors.password_confirmation},null,8,["message"]),e("input",{type:"hidden",value:m.email,required:"",id:"agency_email",name:"agency_email"},null,8,D),e("button",{disabled:t(p),type:"submit",id:"sub",class:"log-submit-btn"},G,8,H)],40,P)])])])])])])]))}},X=I(J,[["__scopeId","data-v-6e05154c"]]);export{X as default};
