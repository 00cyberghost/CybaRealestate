import{s as Z,j as ee,o as te,a as se,b as B,c as I,d as i,u as o,w as oe,F as H,H as ae,e,x as u,E as b,z as g,q as le,g as ne,t as ie,p as re,m as ce,f as j}from"./app.aef213a4.js";import{_ as de}from"./DashboardLayout.a08ab451.js";import{_ as r}from"./InputError.a334cfce.js";import{_ as ue}from"./_plugin-vue_export-helper.cdc0426e.js";const t=f=>(re("data-v-487488eb"),f=f(),ce(),f),pe=["onSubmit"],me={class:"single-add-property"},_e=t(()=>e("h3",null,"Add Alert Details",-1)),ve={class:"property-form-group"},he={class:"row"},ge={class:"col-lg-12 col-md-12 mb70"},be=t(()=>e("h5",{class:"uppercase mb40"},[e("div",{id:"bar1",class:"barfiller"},[e("div",{class:"tipWrap"},[e("span",{class:"tip"})]),e("span",{id:"p-bar",class:"fill","data-percentage":"0"})])],-1)),fe={class:"tabbed-content button-tabs"},ye={class:"tabs"},xe={id:"one",class:"active"},we=t(()=>e("div",{class:"tab-title"},[e("span",null,"1")],-1)),$e={class:"tab-content"},ke={class:"property-form-group"},Se={class:"row"},Be={class:"col-md-12"},Ie=t(()=>e("h3",{class:"text-center mb-5"},"This property is for:",-1)),qe=t(()=>e("div",{class:"property-search-type"},[e("label",{class:"float-left shadow"},[e("input",{value:"rent",name:"category",type:"radio"}),j("Rent")]),e("label",{class:"float-left shadow"},[e("input",{value:"sale",name:"category",type:"radio"}),j("Sale")])],-1)),Ce=t(()=>e("div",{class:"text-center"},[e("span",{id:"category-id",class:"text-danger"})],-1)),Ee={class:"row"},Ae={class:"col-lg-4 col-md-4 dropdown faq-drop"},Pe={class:"form-group categories"},Ue=t(()=>e("label",null,"Property Type",-1)),Ve=t(()=>e("option",null,null,-1)),Ne=t(()=>e("option",null,"Flat",-1)),Te=t(()=>e("option",null,"House",-1)),Fe=t(()=>e("option",null,"Commercial Property",-1)),Le=t(()=>e("option",null,"Land",-1)),Re=[Ve,Ne,Te,Fe,Le],De=t(()=>e("div",{class:"text-center"},[e("span",{id:"type-id",class:"text-danger"})],-1)),He={class:"col-lg-4 col-md-4 dropdown faq-drop"},je={class:"form-group categories"},Me=t(()=>e("label",null,"Currency",-1)),Ge=t(()=>e("option",{value:"NGN"},"\u20A6",-1)),ze=t(()=>e("option",{value:"USD"},"$",-1)),Oe=[Ge,ze],We=t(()=>e("div",{class:"text-center"},[e("span",{id:"currency-id",class:"text-danger"})],-1)),Je={class:"col-lg-4 col-md-4"},Ke=t(()=>e("label",{for:"price"},"Max Price",-1)),Qe={class:"mt-4"},Xe=["onkeyup"],Ye=t(()=>e("div",{class:"text-center"},[e("span",{id:"price-id",class:"text-danger"})],-1)),Ze={id:"two"},et=t(()=>e("div",{class:"tab-title"},[e("span",null,"2")],-1)),tt={class:"tab-content"},st={class:"property-form-group"},ot={class:"row",id:"room-row"},at={class:"col-lg-4 col-md-12 dropdown faq-drop"},lt=t(()=>e("label",{class:"mb-5"},"No Of Bedrooms",-1)),nt={class:"form-group categories"},it=t(()=>e("input",{id:"bedroom",type:"range",min:"0",max:"30",value:"0",class:"slider curved",name:"bedroom"},null,-1)),rt=t(()=>e("div",{class:"float-left"},"0",-1)),ct=t(()=>e("span",null,"\xA0Bedrooms",-1)),dt=t(()=>e("div",{class:"text-center"},[e("span",{id:"bed-id",class:"text-danger"})],-1)),ut={class:"col-lg-4 col-md-12 dropdown faq-drop"},pt=t(()=>e("label",{class:"mb-5"},"No Of Bathrooms",-1)),mt=t(()=>e("div",{class:"form-group categories"},[e("input",{id:"bathroom",type:"range",min:"0",max:"30",value:"0",class:"slider curved",name:"bathroom"}),e("div",{class:"float-left"},"0"),e("span",null,"\xA0Bathrooms")],-1)),_t=t(()=>e("div",{class:"text-center"},[e("span",{id:"bath-id",class:"text-danger"})],-1)),vt={class:"col-lg-4 col-md-12 dropdown faq-drop"},ht=t(()=>e("label",{class:"mb-5"},"Parking Space",-1)),gt=t(()=>e("div",{class:"form-group categories"},[e("input",{id:"parking",type:"range",min:"0",max:"30",value:"0",class:"slider curved",name:"parking"}),e("div",{class:"float-left"},"0"),e("span",null,"\xA0Cars")],-1)),bt=t(()=>e("div",{class:"text-center"},[e("span",{id:"park-id",class:"text-danger"})],-1)),ft={class:"row",id:"area-row"},yt={class:"col-lg-6 col-md-12"},xt=t(()=>e("label",{for:"area"},"Area",-1)),wt={class:"mt-4"},$t=t(()=>e("div",{class:"text-center"},[e("span",{id:"area-id",class:"text-danger"})],-1)),kt={class:"col-lg-6 col-md-12 dropdown faq-drop"},St={class:"form-group categories"},Bt=t(()=>e("label",null,"Units",-1)),It=t(()=>e("option",null,null,-1)),qt=t(()=>e("option",{value:"Sqm (m2)"},"Sqm (m2)",-1)),Ct=t(()=>e("option",{value:"Sqf (sqft)"},"Sqf (sqft)",-1)),Et=t(()=>e("option",{value:"Sqyards"},"Sqyards",-1)),At=t(()=>e("option",{value:"Plot"},"Plot",-1)),Pt=t(()=>e("option",{value:"Acre"},"Acre",-1)),Ut=t(()=>e("option",{value:"Hectare"},"Hectare",-1)),Vt=[It,qt,Ct,Et,At,Pt,Ut],Nt=t(()=>e("div",{class:"text-center"},[e("span",{id:"unit-id",class:"text-danger"})],-1)),Tt={id:"four"},Ft=t(()=>e("div",{class:"tab-title"},[e("span",null,"4")],-1)),Lt={class:"tab-content"},Rt={class:"property-form-group"},Dt={class:"row"},Ht={class:"col-md-12"},jt=t(()=>e("label",{for:"description"},"Property Description",-1)),Mt={id:"desc-p"},Gt={id:"five"},zt=t(()=>e("div",{class:"tab-title"},[e("span",null,"5")],-1)),Ot={class:"tab-content"},Wt={class:"property-form-group"},Jt=t(()=>e("div",{class:"row d-none"},[e("div",{class:"col-lg-12 col-md-12"},[e("label",{for:"address"},"Enter address"),e("p",null,[e("span",null,"allow google to find my address"),e("input",{class:"curved",id:"address1",type:"text",name:"google",placeholder:"23 adekunle street ikoyi"})])])],-1)),Kt={class:"row"},Qt={class:"text-danger"},Xt={class:"row"},Yt={class:"col-lg-4 col-md-4 dropdown faq-drop"},Zt={class:"form-group categories"},es=t(()=>e("label",null,"State",-1)),ts=t(()=>e("div",{class:"text-center"},[e("span",{id:"state-id",class:"text-danger"})],-1)),ss={class:"col-lg-4 col-md-4 dropdown faq-drop"},os={class:"form-group categories"},as=t(()=>e("label",null,"Local Government",-1)),ls=t(()=>e("div",{class:"text-center"},[e("span",{id:"local-government-id",class:"text-danger"})],-1)),ns={class:"col-lg-4 col-md-4"},is={class:"form-group categories"},rs=t(()=>e("label",{for:"locality"},"Locality",-1)),cs=t(()=>e("div",{class:"text-center"},[e("span",{id:"locality-id",class:"text-danger"})],-1)),ds={class:"row"},us=["disabled"],ps=t(()=>e("div",{class:"row"},[e("div",{class:"col-lg-6 col-md-6 col-sm-6 col-6"},[e("div",{class:"pagination-container float-left"},[e("nav",null,[e("ul",null,[e("li",{id:"prev",class:"page-item"},[e("a",{class:"btn btn-common b-primary"},[e("i",{class:"fas fa-angle-double-left"})])])])])])]),e("div",{class:"col-lg-6 col-md-6 col-sm-6 col-6"},[e("div",{class:"pagination-container float-right"},[e("nav",null,[e("ul",null,[e("li",{id:"next",class:"page-item"},[e("a",{class:"btn btn-common b-primary"},[e("i",{class:"fas fa-angle-double-right"})])])])])])])],-1)),ms={__name:"CreateAlert",setup(f){const s=Z({category:"",type:"",bedroom:null,bathroom:null,parking:null,area:null,unit:"",currency:"",price:null,description:"",state:"",local_government:"",locality:"",longitude:"",latitude:""});let x=ee(!1);const M=()=>{s.category=document.querySelector('input[name="category"]:checked').value,s.price=document.getElementById("price").value.replaceAll(",",""),s.bedroom=document.getElementById("bedroom").value,s.bathroom=document.getElementById("bathroom").value,s.parking=document.getElementById("parking").value,s.longitude=document.getElementById("longitude").value,s.latitude=document.getElementById("latitude").value,s.post(route("submitPropertyAlert"),{onStart:()=>x.value=!0,onFinish:()=>x.value=!1})};let _=[];(()=>{fetch("/json/states.json").then(c=>c.json()).then(c=>_=c).catch(c=>console.log(c.message))})();let G=()=>{let c=/[0-9]/,l=document.getElementById("price");if(l.value.match(c)){let a=l.value.replaceAll(",",""),w=parseInt(a).toLocaleString();a.length>0&&(document.getElementById("price").value=w)}else l.value=""};return te(()=>{$("body").addClass("inner-pages maxw1600 m0a dashboard-bd ui-elements"),NiceSelect.bind(document.getElementById("type"),{searchable:!0}),NiceSelect.bind(document.getElementById("currency"),{searchable:!0}),NiceSelect.bind(document.getElementById("unit"),{searchable:!0});let c=NiceSelect.bind(document.getElementById("state"),{searchable:!0}),l=NiceSelect.bind(document.getElementById("local_government"),{searchable:!0}),a=$("#state"),y=$("#local_government");const w=()=>{c.clear();for(var n=0;n<_.length;n++)a.append("<option>"+_[n].state.name+"</option>");c.update()};setTimeout(()=>w(),2e4),a.on("change",function(){y.empty(),y.append("<option></option");for(var n=0;n<_.length;n++)if(a.val()==_[n].state.name)for(var d=0;d<_[n].state.locals.length;d++)y.append("<option>"+_[n].state.locals[d].name+"</option");l.clear(),l.update()}),$("#type").on("change",function(){switch($(this).val()){case"Flat":C(),k();break;case"House":C(),k();break;case"Commercial Property":q(),k();break;case"Land":q(),z();break}}),$(".property-search-type label").on("click",function(){$(".property-search-type label").each(function(n){$(this).removeClass("active")}),$(this).addClass("active")}),$("input[type=range]").change(function(){$(this).next().text($(this).val())});let k=()=>$("#area-row").hide(),z=()=>$("#area-row").show(),q=()=>$("#room-row").hide(),C=()=>$("#room-row").show(),p=(n,d)=>{let S=d,D=document.getElementById(n),Y="Invalid "+S;D.focus(),D.textContent=Y},m=n=>{let d=document.getElementById(n);d.textContent=""},E=()=>$("input[name=category]:checked").length>0?(m("category-id"),!0):(p("category-id","please choose from the above"),!1),A=()=>$("#type").val().length>0?(m("type-id"),!0):(p("type-id","please choose from the above"),!1),P=()=>$("#bedroom").val()>0?(m("bed-id"),!0):(p("bed-id","slide the range to choose a value"),!1),U=()=>$("#bathroom").val()>0?(m("bath-id"),!0):(p("bath-id","slide the range to choose a value"),!1),V=()=>$("#area").val()>0?(m("area-id"),!0):(p("area-id","please enter the area size"),!1),N=()=>$("#unit").val().length>0?(m("unit-id"),!0):(p("unit-id","please select from the above"),!1),T=()=>$("#price").val().length>3?(m("price-id"),!0):(p("price-id","minimum price is 1000"),!1),F=()=>$("#locality").val().length>0?(m("locality-id"),!0):(p("locality-id","locality must be min 2 and max 40 characters"),!1),L=()=>$("#state").val().length>0?(m("state-id"),!0):(p("state-id","Please choose a state from the above"),!1),R=()=>$("#local_government").val().length>0?(m("local-government-id"),!0):(p("local-government-id","Please choose a local government from the above"),!1),h=()=>{$(".tabs li.active ").next().click()},O=()=>{$(".tabs li.active ").next().next().click()},W=()=>{$(".tabs li.active ").prev().click()},v=n=>{document.getElementById("p-bar").setAttribute("data-percentage",n),$("#bar1").barfiller()},J=()=>{E(),A(),T(),E()&&A()&&T()&&($("#type").val()=="Commercial Property"?(O(),v(40)):(h(),v(40)))},K=()=>{let n=$("#type").val();n=="Commercial Property"?(h(),v(70)):n=="Land"?(V(),N(),V()&&N()&&(h(),v(70))):(P(),U(),P()&&U()&&(h(),v(70)))},Q=()=>{h(),v(99)},X=()=>{F(),L(),R(),F()&&L()&&R()&&(h(),v(99),$("#next").hide())};$("#next").on("click",function(){switch($(".tabs li.active").attr("id")){case"one":J();break;case"two":K();break;case"four":Q();break;case"five":X();break}}),$("#prev").on("click",function(){W(),$("#next").show()}),$(".tabbed-content").each(function(){$(this).append('<ul class="content tab-identifier"></ul>')}),$(".tabs li").each(function(){var n=$(this),d="";n.is(".tabs>li:first-child")&&(d=' class="active"');var S=n.find(".tab-content").detach().wrap("<li"+d+"></li>").parent();n.closest(".tabbed-content").find(".content").append(S)}),$(".tabs li").click(function(){$(this).closest(".tabs").find("li").removeClass("active"),$(this).addClass("active");var n=$(this).index()+1;$(this).closest(".tabbed-content").find(".content>li").removeClass("active"),$(this).closest(".tabbed-content").find(".content>li:nth-of-type("+n+")").addClass("active")})}),se(()=>{$("body").removeClass("inner-pages maxw1600 m0a dashboard-bd ui-elements")}),(c,l)=>(B(),I(H,null,[i(o(ae),{title:"Create Property Alert"}),i(de,{props:c.props},{default:oe(()=>[e("form",{onSubmit:ne(M,["prevent"]),name:"propertyform"},[e("div",me,[_e,e("div",ve,[e("div",he,[e("div",ge,[be,e("div",fe,[e("ul",ye,[e("li",xe,[we,e("div",$e,[e("div",ke,[e("div",Se,[e("div",Be,[Ie,qe,Ce,i(r,{class:"mt-2",message:o(s).errors.category},null,8,["message"])])]),e("div",Ee,[e("div",Ae,[e("div",Pe,[Ue,u(e("select",{"onUpdate:modelValue":l[0]||(l[0]=a=>o(s).type=a),required:"",id:"type",name:"type",class:"nice-select form-control wide type curved"},Re,512),[[b,o(s).type]])]),De,i(r,{class:"mt-2",message:o(s).errors.type},null,8,["message"])]),e("div",He,[e("div",je,[Me,u(e("select",{"onUpdate:modelValue":l[1]||(l[1]=a=>o(s).currency=a),required:"",id:"currency",name:"currency",class:"nice-select form-control wide currency curved"},Oe,512),[[b,o(s).currency]])]),We,i(r,{class:"mt-2",message:o(s).errors.currency},null,8,["message"])]),e("div",Je,[Ke,e("p",Qe,[u(e("input",{onkeyup:o(G),required:"","onUpdate:modelValue":l[2]||(l[2]=a=>o(s).price=a),type:"tel",placeholder:"amount",id:"price",name:"price",class:"curved"},null,8,Xe),[[g,o(s).price]])]),Ye,i(r,{class:"mt-2",message:o(s).errors.price},null,8,["message"])])])])])]),e("li",Ze,[et,e("div",tt,[e("div",st,[e("div",ot,[e("div",at,[lt,e("div",nt,[it,rt,ct,i(r,{class:"mt-2",message:o(s).errors.bedroom},null,8,["message"])]),dt]),e("div",ut,[pt,mt,_t,i(r,{class:"mt-2",message:o(s).errors.bathroom},null,8,["message"])]),e("div",vt,[ht,gt,bt,i(r,{class:"mt-2",message:o(s).errors.parking},null,8,["message"])])]),e("div",ft,[e("div",yt,[xt,e("p",wt,[u(e("input",{"onUpdate:modelValue":l[3]||(l[3]=a=>o(s).area=a),type:"number",placeholder:"Area",id:"area",name:"area",class:"curved"},null,512),[[g,o(s).area]])]),$t,i(r,{class:"mt-2",message:o(s).errors.area},null,8,["message"])]),e("div",kt,[e("div",St,[Bt,u(e("select",{"onUpdate:modelValue":l[4]||(l[4]=a=>o(s).unit=a),name:"unit",id:"unit",class:"curved nice-select form-control wide unit"},Vt,512),[[b,o(s).unit]])]),Nt,i(r,{class:"mt-2",message:o(s).errors.unit},null,8,["message"])])])])])]),e("li",Tt,[Ft,e("div",Lt,[e("div",Rt,[e("div",Dt,[e("div",Ht,[jt,e("p",Mt,[u(e("textarea",{class:"curved","onUpdate:modelValue":l[5]||(l[5]=a=>o(s).description=a),id:"description",name:"description",placeholder:"Describe about your property"},null,512),[[g,o(s).description]])]),i(r,{class:"mt-2",message:o(s).errors.description},null,8,["message"])])])])])]),e("li",Gt,[zt,e("div",Ot,[e("div",Wt,[Jt,e("div",Kt,[e("div",null,[(B(!0),I(H,null,le(o(s).errors,a=>(B(),I("ul",{key:a.id},[e("li",Qt,ie(a),1)]))),128))])]),e("div",Xt,[e("div",Yt,[e("div",Zt,[es,u(e("select",{required:"","onUpdate:modelValue":l[6]||(l[6]=a=>o(s).state=a),id:"state",name:"state",class:"curved nice-select form-control wide state"},null,512),[[b,o(s).state]])]),ts,i(r,{class:"mt-2",message:o(s).errors.state},null,8,["message"])]),e("div",ss,[e("div",os,[as,u(e("select",{required:"","onUpdate:modelValue":l[7]||(l[7]=a=>o(s).local_government=a),id:"local_government",name:"local_government",class:"curved nice-select form-control wide local"},null,512),[[b,o(s).local_government]])]),ls,i(r,{class:"mt-2",message:o(s).errors.local_government},null,8,["message"])]),e("div",ns,[e("div",is,[rs,u(e("input",{class:"curved mt-4",required:"",min:"3",max:"50","onUpdate:modelValue":l[8]||(l[8]=a=>o(s).locality=a),type:"text",name:"locality",placeholder:"Ikoyi",id:"locality"},null,512),[[g,o(s).locality]])]),cs,i(r,{class:"mt-2",message:o(s).errors.locality},null,8,["message"])])]),e("div",ds,[e("button",{disabled:o(x),id:"submit-button",type:"submit",class:"mt-5 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},"Create Alert!",8,us)])])])])])])])]),ps])]),u(e("input",{type:"hidden",id:"longitude",name:"longitude","onUpdate:modelValue":l[9]||(l[9]=a=>o(s).longitude=a)},null,512),[[g,o(s).longitude]]),u(e("input",{type:"hidden",id:"latitude",name:"latitude","onUpdate:modelValue":l[10]||(l[10]=a=>o(s).latitude=a)},null,512),[[g,o(s).latitude]])],40,pe)]),_:1},8,["props"])],64))}},fs=ue(ms,[["__scopeId","data-v-487488eb"]]);export{fs as default};
