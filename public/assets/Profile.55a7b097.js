import{s as S,j as i,o as C,a as P,b as m,c as p,d as l,u as o,w as F,F as b,H as j,e,g as G,q as I,k as N,t as E,p as U,m as q}from"./app.076dca62.js";import{_ as L}from"./DashboardLayout.0937fbe2.js";import{_ as n}from"./InputError.34e7ae7c.js";import{_ as z}from"./_plugin-vue_export-helper.cdc0426e.js";const h=s=>(U("data-v-87e00a6e"),s=s(),q(),s),A={class:"dashborad-box stat bg-white"},M={class:"section-body"},D={method:"post",dd:"/dashboard/user-image",action:"/dashboard/user-image",class:"dropzone",enctype:"multipart/form-data"},H=["value"],T={class:"dashborad-box mb-0"},V=h(()=>e("h4",{class:"heading pt-0"},"Personal Information",-1)),W={class:"section-inforamation"},J=["onSubmit"],Y={class:"row"},O={class:"col-sm-6"},R={class:"form-group"},K=["value"],Q={class:"col-sm-6"},X={class:"form-group"},Z=["value"],ee={class:"col-sm-6"},te={class:"form-group"},se=["value"],oe={class:"col-sm-6"},ae={class:"form-group"},le=["value"],ne={class:"col-lg-12"},ce={class:"form-group"},de=["value"],re={class:"col-lg-6"},ue={class:"form-group"},ie=h(()=>e("option",null,"Select State",-1)),me=["selected","value"],pe={key:0,class:"col-lg-6"},ge={class:"form-group"},he={required:"",id:"local_government",maxlength:"20",minlength:"2",name:"local_government",class:"curved nice-select form-control wide local_government mb-5"},ve=h(()=>e("option",{value:""},"Select Local Government",-1)),_e=["selected"],fe={class:"col-lg-6"},ye={class:"form-group"},be=["value"],we={class:"col-lg-6"},xe={class:"form-group"},Ie=["value"],Ee={class:"col-lg-3"},Be={class:"form-group"},ke=["value"],Se={class:"col-lg-3"},Ce={class:"form-group"},Pe=["value"],Fe={class:"col-lg-3"},$e={class:"form-group"},je=["value"],Ge={class:"col-lg-3"},Ne={class:"form-group"},Ue=["value"],qe=h(()=>e("div",{class:"password-section d-none"},[e("h6",null,"Update Password"),e("div",{class:"row"},[e("div",{class:"col-sm-6"},[e("div",{class:"form-group"},[e("label",null,"New Password"),e("input",{type:"password",class:"form-control",placeholder:"Write new password"})])]),e("div",{class:"col-sm-6"},[e("div",{class:"form-group"},[e("label",null,"Repeat Password"),e("input",{type:"password",class:"form-control",placeholder:"Write same password again"})])])])],-1)),Le=["disabled"],ze=["value"],Ae=["value"],Me=["value"],De=["value"],He={__name:"Profile",props:{props:Object},setup(s){const t=S({phone:"",whatsapp:"",about:"",facebook:"",twitter:"",instagram:"",youtube:"",state:"",local_government:"",locality:"",address:"",longitude:"",latitude:""});let v=i(!1);const B=()=>{t.whatsapp=document.getElementById("whatsapp").value,t.phone=document.getElementById("phone").value,t.about=document.getElementById("about").value,t.facebook=document.getElementById("facebook").value,t.twitter=document.getElementById("twitter").value,t.instagram=document.getElementById("instagram").value,t.youtube=document.getElementById("youtube").value,t.state=document.getElementById("state").value,t.local_government=document.getElementById("local_government").value,t.locality=document.getElementById("locality").value,t.address=document.getElementById("address").value,t.longitude=document.getElementById("longitude").value,t.latitude=document.getElementById("latitude").value,t.patch(route("updateUser"),{onStart:()=>{document.getElementById("sub").textContent="Processing...",v.value=!0},onFinish:()=>{document.getElementById("sub").textContent="Update",v.value=!1}})};let w=i([]),d=i([]),_=i([]),f=i(!1),x=i(null);const k=g=>{let c=g.target.value,a=[];for(let u=0;u<d.value.length;u++)if(d.value[u].state.name==c)for(let r=0;r<d.value[u].state.locals.length;r++)a.push(d.value[u].state.locals[r].name);_.value=a,f.value=!0};return C(()=>{$("body").addClass("inner-pages maxw1600 m0a dashboard-bd"),$(".header-user-name").on("click",function(){$(".header-user-menu ul").toggleClass("hu-menu-vis"),$(this).toggleClass("hu-menu-visdec")});const g=()=>{let c=document.getElementById("currentState");if(x=c.value,x.length>0){let a=c.value,u=[];for(let r=0;r<d.value.length;r++)if(d.value[r].state.name==a)for(let y=0;y<d.value[r].state.locals.length;y++)u.push(d.value[r].state.locals[y].name);_.value=u,f.value=!0}};setTimeout(()=>g(),3e3),document.getElementById("state"),document.getElementById("local_government"),axios.get("/json/states.json").then(c=>{w.value=c.data,d.value=c.data}).catch(c=>console.log(c)).finally(console.log("success")),$(".dropzone").dropzone({dictDefaultMessage:"<i class='fa fa-cloud-upload'></i> Click or Drop Images Here To Uplod",acceptedFiles:".jpeg,.png,.gif,.JPEG,.Jpeg,.jpg,.PNG,.GIF",previewsContainer:document.querySelector(".dropzone"),maxFiles:1})}),P(()=>$("body").addClass("inner-pages maxw1600 m0a dashboard-bd")),(g,c)=>(m(),p(b,null,[l(o(j),{title:"My Profile"}),l(L,{props:s.props},{default:F(()=>[e("div",A,[e("div",M,[e("form",D,[e("input",{type:"hidden",value:s.props.token,name:"_token",id:"token_id"},null,8,H)])])]),e("div",T,[V,e("div",W,[e("form",{onSubmit:G(B,["prevent"])},[e("div",Y,[e("div",O,[e("div",R,[e("input",{type:"text",value:s.props.user.name,disabled:"",id:"name",class:"form-control",placeholder:"Name"},null,8,K)])]),e("div",Q,[e("div",X,[e("input",{type:"email",value:s.props.user.email,disabled:"",id:"email",class:"form-control",placeholder:"Email"},null,8,Z)])]),e("div",ee,[e("div",te,[e("input",{type:"number",value:s.props.user.whatsapp,id:"whatsapp",class:"form-control",placeholder:"Whatsapp"},null,8,se),l(n,{class:"mt-2",message:o(t).errors.whatsapp},null,8,["message"])])]),e("div",oe,[e("div",ae,[e("input",{type:"number",value:s.props.user.phone,id:"phone",class:"form-control",placeholder:"Phone"},null,8,le),l(n,{class:"mt-2",message:o(t).errors.phone},null,8,["message"])])]),e("div",ne,[e("div",ce,[e("textarea",{value:s.props.user.about,name:"about",id:"about",class:"form-control",placeholder:"About You or Agency"},null,8,de),l(n,{class:"mt-2",message:o(t).errors.about},null,8,["message"])])]),e("div",re,[e("div",ue,[e("select",{onChange:k,maxlength:"20",minlength:"2",required:"",id:"state",name:"state",class:"curved nice-select form-control wide state mb-5"},[ie,(m(!0),p(b,null,I(o(w),a=>(m(),p("option",{key:a,selected:a.state.name==s.props.user.state,value:a.state.name},E(a.state.name),9,me))),128))],32),l(n,{class:"mt-2",message:o(t).errors.state},null,8,["message"])])]),o(f)?(m(),p("div",pe,[e("div",ge,[e("select",he,[ve,(m(!0),p(b,null,I(o(_),a=>(m(),p("option",{key:a,selected:a==s.props.user.local_government},E(a),9,_e))),128))]),l(n,{class:"mt-2",message:o(t).errors.local_government},null,8,["message"])])])):N("",!0),e("div",fe,[e("div",ye,[e("input",{type:"text",required:"",maxlength:"20",minlength:"2",value:s.props.user.locality,name:"locality",id:"locality",class:"form-control",placeholder:"Locality"},null,8,be),l(n,{class:"mt-2",message:o(t).errors.locality},null,8,["message"])])]),e("div",we,[e("div",xe,[e("input",{type:"text",value:s.props.user.address,maxlength:"30",minlength:"2",name:"address",id:"address",class:"form-control",placeholder:"Street Address"},null,8,Ie),l(n,{class:"mt-2",message:o(t).errors.address},null,8,["message"])])]),e("div",Ee,[e("div",Be,[e("input",{type:"text",value:s.props.user.facebook,name:"facebook",id:"facebook",class:"form-control",placeholder:"Facebook"},null,8,ke),l(n,{class:"mt-2",message:o(t).errors.facebook},null,8,["message"])])]),e("div",Se,[e("div",Ce,[e("input",{type:"text",value:s.props.user.twitter,name:"twitter",id:"twitter",class:"form-control",placeholder:"Twitter"},null,8,Pe),l(n,{class:"mt-2",message:o(t).errors.twitter},null,8,["message"])])]),e("div",Fe,[e("div",$e,[e("input",{type:"text",value:s.props.user.instagram,name:"instagram",id:"instagram",class:"form-control",placeholder:"Instagram"},null,8,je),l(n,{class:"mt-2",message:o(t).errors.instagram},null,8,["message"])])]),e("div",Ge,[e("div",Ne,[e("input",{type:"text",value:s.props.user.youtube,name:"youtube",id:"youtube",class:"form-control",placeholder:"Youtube"},null,8,Ue),l(n,{class:"mt-2",message:o(t).errors.youtube},null,8,["message"])])])]),qe,e("button",{type:"submit",disabled:o(v),id:"sub",class:"btn btn-primary btn-lg mt-2"},"Update",8,Le),e("input",{type:"hidden",value:s.props.user.longitude,id:"longitude",name:"longitude"},null,8,ze),e("input",{type:"hidden",value:s.props.user.latitude,id:"latitude",name:"latitude"},null,8,Ae),e("input",{type:"hidden",value:s.props.user.state,id:"currentState"},null,8,Me),e("input",{type:"hidden",value:s.props.user.localgovernment,id:"currentLocalGovernment"},null,8,De)],40,J)])])]),_:1},8,["props"])],64))}},Ye=z(He,[["__scopeId","data-v-87e00a6e"]]);export{Ye as default};
