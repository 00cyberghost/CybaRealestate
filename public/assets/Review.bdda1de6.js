import{j as m,o as E,s as A,b as v,c as h,e as t,u as a,t as f,F as $,q as B,g as S,x as u,y,d as b,z as k,p as C,m as V,f as U}from"./app.aef213a4.js";import{_ as w}from"./InputError.a334cfce.js";/* empty css                                                               */import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const Qt={__name:"Seo",props:{title:Object,desc:String},setup(d){const s=d;let n=m(null),c=m(null),l=m(null),_=location.hostname,p=location.hostname+location.pathname;return E(()=>{switch(s.desc){case"agent":n.value=`${s.title.name} real estate agent in ${s.title.locality} ${s.title.local_government} ${s.title.state}`,c.value=`${s.title.name} is a real estate agent in ${s.title.locality} ${s.title.local_government} ${s.title.state}`,l.value=`${s.title.image}`;break;case"agency":n.value=`${s.title.name} a real estate and property agency in ${s.title.locality} ${s.title.local_government} ${s.title.state}`,c.value=`${s.title.name} is a real estate agent in ${s.title.locality} ${s.title.local_government} ${s.title.state}`,l.value=`${s.title.image}`;break;case"property":n.value=`For ${s.title.category}: ${s.title.title}, ${s.title.locality}, ${s.title.local_government}, ${s.title.state}`,c.value=`${s.title.title} in ${s.title.locality} ${s.title.local_government} ${s.title.state} | ${s.title.description}`,s.title.images[0]?l.value=`${s.title.images[0].image_name}`:l.value="no image";break}document.title=n.value,document.getElementById("ogurl").setAttribute("content",p),document.getElementById("ogimage").setAttribute("content",`https://${_}/photos/${l.value}`),document.getElementById("ogtitle").setAttribute("content",n.value),document.getElementById("ogdescription").setAttribute("content",c.value),document.getElementById("twittersite").setAttribute("content",p),document.getElementById("twittercreator").setAttribute("content",p),document.getElementById("twitterimage").setAttribute("content",`https://${_}/photos/${l.value}`),document.getElementById("twittertitle").setAttribute("content",n.value),document.getElementById("twitterdescription").setAttribute("content",c)}),(x,I)=>null}},i=d=>(C("data-v-951c3c67"),d=d(),V(),d),F={class:"reviews comments curved"},q={class:"row mb-5"},M={class:"col-md-6"},N={class:"leave-rating margin-bottom-30",id:"rating-display"},D=["checked"],j=i(()=>t("label",{for:"rating-5",class:"fa fa-star"},null,-1)),H=["checked"],P=i(()=>t("label",{for:"rating-4",class:"fa fa-star"},null,-1)),T=["checked"],W=i(()=>t("label",{for:"rating-3",class:"fa fa-star"},null,-1)),Y=["checked"],z=i(()=>t("label",{for:"rating-2",class:"fa fa-star"},null,-1)),O=["checked"],G=i(()=>t("label",{for:"rating-1",class:"fa fa-star"},null,-1)),J=i(()=>t("br",null,null,-1)),K={style:{float:"left"}},Q={class:"row mb-5 d-none",id:"review-details"},X={class:"comm-inf"},Z={class:"col-md-2"},tt=["src"],et={class:"col-md-10 comments-info"},st={class:"conra"},lt={class:"mb-2"},at={class:"rating-box"},ot={class:"leave-rating margin-bottom-30",id:"rating-display"},it=["checked"],nt=i(()=>t("label",{for:"rating-5",class:"fa fa-star"},null,-1)),rt=["checked"],dt=i(()=>t("label",{for:"rating-4",class:"fa fa-star"},null,-1)),ct=["checked"],ut=i(()=>t("label",{for:"rating-3",class:"fa fa-star"},null,-1)),mt=["checked"],_t=i(()=>t("label",{for:"rating-2",class:"fa fa-star"},null,-1)),pt=["checked"],gt=i(()=>t("label",{for:"rating-1",class:"fa fa-star"},null,-1)),vt={class:"mb-4"},ht={id:"review-form",class:"single reviews leve-comments details d-none curved"},ft={id:"add-review",class:"add-review-box"},yt=i(()=>t("h3",{class:"listing-desc-headline margin-bottom-20 mb-4"},"Add Review",-1)),bt=i(()=>t("span",{class:"leave-rating-title"},"Rate this listing",-1)),wt={class:"text-danger"},$t=["onSubmit","property_id","user_id"],kt=i(()=>t("span",{class:"text-success text-center",id:"error-text"},null,-1)),xt={class:"row mb-4"},It={class:"col-md-6 col-sm-12 col-12"},Bt=i(()=>t("div",{class:"clearfix"},null,-1)),Et={class:"leave-rating mr-3 st-review"},Rt=i(()=>t("label",{for:"rating-6",class:"fa fa-star"},null,-1)),At=i(()=>t("label",{for:"rating-7",class:"fa fa-star"},null,-1)),St=i(()=>t("label",{for:"rating-8",class:"fa fa-star"},null,-1)),Ct=i(()=>t("label",{for:"rating-9",class:"fa fa-star"},null,-1)),Vt=i(()=>t("label",{for:"rating-10",class:"fa fa-star"},null,-1)),Ut=i(()=>t("div",{class:"clearfix"},null,-1)),Lt={class:"col-md-6 col-sm-12 col-12"},Ft={class:"add-review-photos margin-bottom-30"},qt={class:"photoUpload"},Mt=i(()=>t("span",{class:"upload"},[t("i",{class:"sl sl-icon-arrow-up-circle"}),U(" Upload Photos")],-1)),Nt={class:"row"},Dt={class:"col-md-12 data"},jt={class:"col-md-12"},Ht={class:"form-group"},Pt={class:"col-md-12"},Tt={class:"form-group"},Wt={class:"col-md-12 form-group"},Yt=["disabled"],zt={__name:"Review",props:{property_id:null,user_id:null},setup(d){let s=m([]),n=m([]),c=m(null),l=A({property_id:null,user_id:null,name:"",email:"",file:null,review:"",star:null,type:""}),_=m(!1);const p=()=>{let r=document.getElementById("form").getAttribute("property_id"),o=document.getElementById("form").getAttribute("user_id"),e=o==null?r:o;l.type=o==null?"property":"user",l.post(route("addReview",e),{onStart:()=>{document.getElementById("submit-button").textContent="Processing>>>",_.value=!0},onFinish:()=>{document.getElementById("submit-button").textContent="Submit Review",_.value=!1},onSuccess:()=>{l.reset("name","email","review","star","file"),document.getElementById("error-text").textContent="Your Review Was Submitted Successsfully"}})},x=r=>{document.getElementById("review-details").classList.contains("d-none")==!0?(document.getElementById("review-details").classList.remove("d-none"),document.getElementById("rev-add").classList.remove("d-none"),r.target.textContent="Hide Reviews"):(document.getElementById("review-details").classList.add("d-none"),document.getElementById("rev-add").classList.add("d-none"),r.target.textContent="Show Reviews")},I=r=>{document.getElementById("review-form").classList.contains("d-none")==!0?(document.getElementById("review-form").classList.remove("d-none"),r.target.textContent="Hide Reviews Form"):(document.getElementById("review-form").classList.add("d-none"),r.target.textContent="Add Reviews")};return E(()=>{let r=document.getElementById("form").getAttribute("property_id"),o=document.getElementById("form").getAttribute("user_id"),e=o==null?r:o,R=o==null?"property":"user";axios.get(route("getReviews",[e,R])).then(g=>{s.value=g.data[0],n.value=g.data[1],c.value=g.data[2]}).catch(g=>console.log(g)).finally(()=>console.log("success"))}),(r,o)=>(v(),h($,null,[t("section",F,[t("div",q,[t("div",M,[t("div",N,[t("input",{type:"radio",checked:a(n)==5,id:"rating-5",value:"5"},null,8,D),j,t("input",{type:"radio",checked:a(n)==4,id:"rating-4",value:"4"},null,8,H),P,t("input",{type:"radio",checked:a(n)==3,id:"rating-3",value:"3"},null,8,T),W,t("input",{type:"radio",checked:a(n)==2,id:"rating-2",value:"2"},null,8,Y),z,t("input",{type:"radio",checked:a(n)==1,id:"rating-1",value:"1"},null,8,O),G,J,t("span",K,f(a(c))+" reviews",1)])]),t("div",{class:"col-md-6"},[t("button",{id:"review-button",onClick:x,type:"submit",class:"btn btn-primary btn-sm rounded curved p-2 pl-4 pr-4 b-primary"},"Show Reviews")])]),t("div",Q,[(v(!0),h($,null,B(a(s).data,e=>(v(),h("ul",{class:"col-12 commented pl-0",key:e.id},[t("li",X,[t("div",Z,[t("img",{src:`/photos/${e.photo}`,class:"img-fluid",alt:""},null,8,tt)]),t("div",et,[t("div",st,[t("h5",lt,f(e.name.slice(0,15)),1),t("div",at,[t("div",ot,[t("input",{type:"radio",checked:e.star==5,id:"rating-5",value:"5"},null,8,it),nt,t("input",{type:"radio",checked:e.star==4,id:"rating-4",value:"4"},null,8,rt),dt,t("input",{type:"radio",checked:e.star==3,id:"rating-3",value:"3"},null,8,ct),ut,t("input",{type:"radio",checked:e.star==2,id:"rating-2",value:"2"},null,8,mt),_t,t("input",{type:"radio",checked:e.star==1,id:"rating-1",value:"1"},null,8,pt),gt])])]),t("p",vt,f(e.created_at_diff),1),t("p",null,f(e.review),1)])])]))),128))]),t("div",{class:"row d-none",id:"rev-add"},[t("div",{class:"col-md-12"},[t("button",{id:"review-form-button",onClick:I,type:"submit",class:"btn btn-primary btn-sm rounded curved p-2 pl-4 pr-4 b-primary"},"Add Your Reviews")])])]),t("section",ht,[t("div",ft,[yt,bt,t("div",null,[(v(!0),h($,null,B(a(l).errors,e=>(v(),h("ul",{key:e.id},[t("li",wt,f(e),1)]))),128))]),t("form",{onSubmit:S(p,["prevent"]),id:"form",property_id:d.property_id,user_id:d.user_id,name:"propertyform",enctype:"multipart/form-data"},[kt,t("div",xt,[t("div",It,[Bt,t("div",Et,[u(t("input",{type:"radio",id:"rating-6","onUpdate:modelValue":o[0]||(o[0]=e=>a(l).star=e),value:"5"},null,512),[[y,a(l).star]]),Rt,u(t("input",{type:"radio",name:"star","onUpdate:modelValue":o[1]||(o[1]=e=>a(l).star=e),id:"rating-7",value:"4"},null,512),[[y,a(l).star]]),At,u(t("input",{type:"radio",name:"star","onUpdate:modelValue":o[2]||(o[2]=e=>a(l).star=e),id:"rating-8",value:"3"},null,512),[[y,a(l).star]]),St,u(t("input",{type:"radio",name:"star","onUpdate:modelValue":o[3]||(o[3]=e=>a(l).star=e),id:"rating-9",value:"2"},null,512),[[y,a(l).star]]),Ct,u(t("input",{type:"radio",name:"star","onUpdate:modelValue":o[4]||(o[4]=e=>a(l).star=e),id:"rating-10",value:"1"},null,512),[[y,a(l).star]]),Vt]),b(w,{class:"mt-2",message:a(l).errors.star},null,8,["message"]),Ut]),t("div",Lt,[t("div",Ft,[t("div",qt,[Mt,t("input",{id:"image",type:"file",onInput:o[5]||(o[5]=e=>a(l).file=e.target.files[0]),name:"file",class:"upload"},null,32)]),b(w,{class:"mt-2",message:a(l).errors.file},null,8,["message"])])])]),t("div",Nt,[t("div",Dt,[t("div",jt,[t("div",Ht,[u(t("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=e=>a(l).name=e),name:"name",class:"form-control",placeholder:"Full Name",maxlength:"40",minlength:"3",required:""},null,512),[[k,a(l).name]]),b(w,{class:"mt-2",message:a(l).errors.name},null,8,["message"])])]),t("div",Pt,[t("div",Tt,[u(t("input",{type:"email","onUpdate:modelValue":o[7]||(o[7]=e=>a(l).email=e),max:"40",name:"email",class:"form-control",placeholder:"Email",required:""},null,512),[[k,a(l).email]]),b(w,{class:"mt-2",message:a(l).errors.email},null,8,["message"])])]),t("div",Wt,[u(t("textarea",{class:"form-control","onUpdate:modelValue":o[8]||(o[8]=e=>a(l).review=e),minlength:"4",maxlength:"5000",id:"review",rows:"8",placeholder:"Write your review here",required:""},null,512),[[k,a(l).review]]),b(w,{class:"mt-2",message:a(l).errors.review},null,8,["message"])]),t("button",{"preserve-scroll":"",disabled:a(_),id:"submit-button",type:"submit",class:"btn btn-primary btn-lg mt-2 b-primary"},"Submit Review",8,Yt)])])],40,$t)])])],64))}},Xt=L(zt,[["__scopeId","data-v-951c3c67"]]);export{Xt as R,Qt as _};
