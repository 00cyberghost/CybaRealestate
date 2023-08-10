import{l as Z,j as ee,o as te,a as ae,b as B,c as I,d as i,u as a,f as e,p as se,q as u,E as b,s as h,F as M,k as oe,e as g,H as le,t as ne,x as ie,y as de}from"./app.6a98db12.js";import{_ as re,D as ce,a as ue,b as pe}from"./DashboardFooter.65639417.js";import{_ as d}from"./InputError.556b0a3e.js";import{_ as me}from"./_plugin-vue_export-helper.cdc0426e.js";const s=y=>(ie("data-v-9987f98e"),y=y(),de(),y),ve={class:"user-page section-padding pt-5"},_e={class:"container-fluid"},fe={class:"row"},he={class:"col-lg-9 col-md-12 col-xs-12 pl-0 royal-add-property-area section_100 user-dash2"},ge=["onSubmit"],be={class:"single-add-property"},ye=s(()=>e("h3",null,"Add Request Details",-1)),xe={class:"property-form-group"},we={class:"row"},$e={class:"col-lg-12 col-md-12 mb70"},ke=g('<h5 class="uppercase mb40" data-v-9987f98e><div id="bar1" class="barfiller" data-v-9987f98e><div class="tipWrap" data-v-9987f98e><span class="tip" data-v-9987f98e></span></div><span id="p-bar" class="fill" data-percentage="0" data-v-9987f98e></span></div></h5>',1),Se={class:"tabbed-content button-tabs"},qe={class:"tabs"},Be={id:"one",class:"active"},Ie=s(()=>e("div",{class:"tab-title"},[e("span",null,"1")],-1)),Ce={class:"tab-content"},Ee={class:"property-form-group"},Pe={class:"row"},Ue={class:"col-md-12"},Ve=g('<h3 class="text-center mb-5" data-v-9987f98e>This property is for:</h3><div class="property-search-type" data-v-9987f98e><label class="float-left shadow" data-v-9987f98e><input value="rent" name="category" type="radio" data-v-9987f98e>Rent</label><label class="float-left shadow" data-v-9987f98e><input value="sale" name="category" type="radio" data-v-9987f98e>Sale</label><label class="float-left shadow" data-v-9987f98e><input value="shortlet" name="category" type="radio" data-v-9987f98e>Shortlet</label></div><div class="text-center" data-v-9987f98e><span id="category-id" class="text-danger" data-v-9987f98e></span></div>',3),Ae={class:"row"},Ne={class:"col-lg-4 col-md-4 dropdown faq-drop"},Re={class:"form-group categories"},Te=s(()=>e("label",null,"Property Type",-1)),De=s(()=>e("option",null,null,-1)),Fe=s(()=>e("option",null,"Flat",-1)),Le=s(()=>e("option",null,"House",-1)),He=s(()=>e("option",null,"Commercial Property",-1)),Me=s(()=>e("option",null,"Land",-1)),je=[De,Fe,Le,He,Me],Ge=s(()=>e("div",{class:"text-center"},[e("span",{id:"type-id",class:"text-danger"})],-1)),Oe={class:"col-lg-4 col-md-4 dropdown faq-drop"},ze={class:"form-group categories"},We=s(()=>e("label",null,"Currency",-1)),Je=s(()=>e("option",{value:"NGN"},"\u20A6",-1)),Ke=s(()=>e("option",{value:"USD"},"$",-1)),Qe=[Je,Ke],Xe=s(()=>e("div",{class:"text-center"},[e("span",{id:"currency-id",class:"text-danger"})],-1)),Ye={class:"col-lg-4 col-md-4"},Ze=s(()=>e("label",{for:"price"},"Max Price",-1)),et={class:"mt-4"},tt=["onkeyup"],at=s(()=>e("div",{class:"text-center"},[e("span",{id:"price-id",class:"text-danger"})],-1)),st={id:"two"},ot=s(()=>e("div",{class:"tab-title"},[e("span",null,"2")],-1)),lt={class:"tab-content"},nt={class:"property-form-group"},it={class:"row",id:"room-row"},dt={class:"col-lg-4 col-md-12 dropdown faq-drop"},rt=s(()=>e("label",{class:"mb-5"},"No Of Bedrooms",-1)),ct={class:"form-group categories"},ut=s(()=>e("input",{id:"bedroom",type:"range",min:"0",max:"30",value:"0",class:"slider curved",name:"bedroom"},null,-1)),pt=s(()=>e("div",{class:"float-left"},"0",-1)),mt=s(()=>e("span",null,"\xA0Bedrooms",-1)),vt=s(()=>e("div",{class:"text-center"},[e("span",{id:"bed-id",class:"text-danger"})],-1)),_t={class:"col-lg-4 col-md-12 dropdown faq-drop"},ft=g('<label class="mb-5" data-v-9987f98e>No Of Bathrooms</label><div class="form-group categories" data-v-9987f98e><input id="bathroom" type="range" min="0" max="30" value="0" class="slider curved" name="bathroom" data-v-9987f98e><div class="float-left" data-v-9987f98e>0</div><span data-v-9987f98e>\xA0Bathrooms</span></div><div class="text-center" data-v-9987f98e><span id="bath-id" class="text-danger" data-v-9987f98e></span></div>',3),ht={class:"col-lg-4 col-md-12 dropdown faq-drop"},gt=g('<label class="mb-5" data-v-9987f98e>Parking Space</label><div class="form-group categories" data-v-9987f98e><input id="parking" type="range" min="0" max="30" value="0" class="slider curved" name="parking" data-v-9987f98e><div class="float-left" data-v-9987f98e>0</div><span data-v-9987f98e>\xA0Cars</span></div><div class="text-center" data-v-9987f98e><span id="park-id" class="text-danger" data-v-9987f98e></span></div>',3),bt={class:"row",id:"area-row"},yt={class:"col-lg-6 col-md-12"},xt=s(()=>e("label",{for:"area"},"Area",-1)),wt={class:"mt-4"},$t=s(()=>e("div",{class:"text-center"},[e("span",{id:"area-id",class:"text-danger"})],-1)),kt={class:"col-lg-6 col-md-12 dropdown faq-drop"},St={class:"form-group categories"},qt=s(()=>e("label",null,"Units",-1)),Bt=g('<option data-v-9987f98e></option><option value="Sqm (m2)" data-v-9987f98e>Sqm (m2)</option><option value="Sqf (sqft)" data-v-9987f98e>Sqf (sqft)</option><option value="Sqyards" data-v-9987f98e>Sqyards</option><option value="Plot" data-v-9987f98e>Plot</option><option value="Acre" data-v-9987f98e>Acre</option><option value="Hectare" data-v-9987f98e>Hectare</option>',7),It=[Bt],Ct=s(()=>e("div",{class:"text-center"},[e("span",{id:"unit-id",class:"text-danger"})],-1)),Et={id:"four"},Pt=s(()=>e("div",{class:"tab-title"},[e("span",null,"4")],-1)),Ut={class:"tab-content"},Vt={class:"property-form-group"},At={class:"row"},Nt={class:"col-md-12"},Rt=s(()=>e("label",{for:"description"},"Property Description",-1)),Tt={id:"desc-p"},Dt={id:"five"},Ft=s(()=>e("div",{class:"tab-title"},[e("span",null,"5")],-1)),Lt={class:"tab-content"},Ht={class:"property-form-group"},Mt=s(()=>e("div",{class:"row d-none"},[e("div",{class:"col-lg-12 col-md-12"},[e("label",{for:"address"},"Enter address"),e("p",null,[e("span",null,"allow google to find my address"),e("input",{class:"curved",id:"address1",type:"text",name:"google",placeholder:"23 adekunle street ikoyi"})])])],-1)),jt={class:"row"},Gt={class:"text-danger"},Ot={class:"row"},zt={class:"col-lg-4 col-md-4 dropdown faq-drop"},Wt={class:"form-group categories"},Jt=s(()=>e("label",null,"State",-1)),Kt=s(()=>e("div",{class:"text-center"},[e("span",{id:"state-id",class:"text-danger"})],-1)),Qt={class:"col-lg-4 col-md-4 dropdown faq-drop"},Xt={class:"form-group categories"},Yt=s(()=>e("label",null,"Local Government",-1)),Zt=s(()=>e("div",{class:"text-center"},[e("span",{id:"local-government-id",class:"text-danger"})],-1)),ea={class:"col-lg-4 col-md-4"},ta={class:"form-group categories"},aa=s(()=>e("label",{for:"locality"},"Locality",-1)),sa=s(()=>e("div",{class:"text-center"},[e("span",{id:"locality-id",class:"text-danger"})],-1)),oa={class:"row"},la=["disabled"],na=g('<div class="row" data-v-9987f98e><div class="col-lg-6 col-md-6 col-sm-6 col-6" data-v-9987f98e><div class="pagination-container float-left" data-v-9987f98e><nav data-v-9987f98e><ul data-v-9987f98e><li id="prev" class="page-item" data-v-9987f98e><a class="btn btn-common" data-v-9987f98e><i class="fas fa-angle-double-left" data-v-9987f98e></i></a></li></ul></nav></div></div><div class="col-lg-6 col-md-6 col-sm-6 col-6" data-v-9987f98e><div class="pagination-container float-right" data-v-9987f98e><nav data-v-9987f98e><ul data-v-9987f98e><li id="next" class="page-item" data-v-9987f98e><a class="btn btn-common" data-v-9987f98e><i class="fas fa-angle-double-right" data-v-9987f98e></i></a></li></ul></nav></div></div></div>',1),ia=s(()=>e("a",{"data-scroll":"",href:"#wrapper",class:"go-up"},[e("i",{class:"fa fa-angle-double-up","aria-hidden":"true"})],-1)),da={__name:"CreateRequest",setup(y){const t=Z({category:"",type:"",bedroom:null,bathroom:null,parking:null,area:null,unit:"",currency:"",price:null,description:"",state:"",local_government:"",locality:"",longitude:"",latitude:""});let w=ee(!1);const j=()=>{t.category=document.querySelector('input[name="category"]:checked').value,t.price=document.getElementById("price").value.replaceAll(",",""),t.bedroom=document.getElementById("bedroom").value,t.bathroom=document.getElementById("bathroom").value,t.parking=document.getElementById("parking").value,t.longitude=document.getElementById("longitude").value,t.latitude=document.getElementById("latitude").value,t.post(route("submitPropertyRequest"),{onStart:()=>w.value=!0,onFinish:()=>w.value=!1})};let v=[];(()=>{fetch("/json/states.json").then(r=>r.json()).then(r=>v=r).catch(r=>console.log(r.message))})();let G=()=>{let r=/[0-9]/,l=document.getElementById("price");if(l.value.match(r)){let o=l.value.replaceAll(",",""),k=parseInt(o).toLocaleString();o.length>0&&(document.getElementById("price").value=k)}else l.value=""};return te(()=>{$("body").addClass("inner-pages maxw1600 m0a dashboard-bd ui-elements"),NiceSelect.bind(document.getElementById("type"),{searchable:!0}),NiceSelect.bind(document.getElementById("currency"),{searchable:!0}),NiceSelect.bind(document.getElementById("unit"),{searchable:!0});let r=NiceSelect.bind(document.getElementById("state"),{searchable:!0}),l=NiceSelect.bind(document.getElementById("local_government"),{searchable:!0}),o=$("#state"),x=$("#local_government");const k=()=>{r.clear();for(var n=0;n<v.length;n++)o.append("<option>"+v[n].state.name+"</option>");r.update()};setTimeout(()=>k(),2e4),o.on("change",function(){x.empty(),x.append("<option></option");for(var n=0;n<v.length;n++)if(o.val()==v[n].state.name)for(var c=0;c<v[n].state.locals.length;c++)x.append("<option>"+v[n].state.locals[c].name+"</option");l.clear(),l.update()}),$("#type").on("change",function(){switch($(this).val()){case"Flat":E(),S();break;case"House":E(),S();break;case"Commercial Property":C(),S();break;case"Land":C(),O();break}}),$(".property-search-type label").on("click",function(){$(".property-search-type label").each(function(n){$(this).removeClass("active")}),$(this).addClass("active")}),$("input[type=range]").change(function(){$(this).next().text($(this).val())});let S=()=>$("#area-row").hide(),O=()=>$("#area-row").show(),C=()=>$("#room-row").hide(),E=()=>$("#room-row").show(),p=(n,c)=>{let q=c,H=document.getElementById(n),Y="Invalid "+q;H.focus(),H.textContent=Y},m=n=>{let c=document.getElementById(n);c.textContent=""},P=()=>$("input[name=category]:checked").length>0?(m("category-id"),!0):(p("category-id","please choose from the above"),!1),U=()=>$("#type").val().length>0?(m("type-id"),!0):(p("type-id","please choose from the above"),!1),V=()=>$("#bedroom").val()>0?(m("bed-id"),!0):(p("bed-id","slide the range to choose a value"),!1),A=()=>$("#bathroom").val()>0?(m("bath-id"),!0):(p("bath-id","slide the range to choose a value"),!1),N=()=>$("#area").val()>0?(m("area-id"),!0):(p("area-id","please enter the area size"),!1),R=()=>$("#unit").val().length>0?(m("unit-id"),!0):(p("unit-id","please select from the above"),!1),T=()=>$("#price").val().length>3?(m("price-id"),!0):(p("price-id","minimum price is 1000"),!1),D=()=>$("#locality").val().length>0?(m("locality-id"),!0):(p("locality-id","locality must be min 2 and max 40 characters"),!1),F=()=>$("#state").val().length>0?(m("state-id"),!0):(p("state-id","Please choose a state from the above"),!1),L=()=>$("#local_government").val().length>0?(m("local-government-id"),!0):(p("local-government-id","Please choose a local government from the above"),!1),f=()=>{$(".tabs li.active ").next().click()},z=()=>{$(".tabs li.active ").next().next().click()},W=()=>{$(".tabs li.active ").prev().click()},_=n=>{document.getElementById("p-bar").setAttribute("data-percentage",n),$("#bar1").barfiller()},J=()=>{P(),U(),T(),P()&&U()&&T()&&($("#type").val()=="Commercial Property"?(z(),_(40)):(f(),_(40)))},K=()=>{let n=$("#type").val();n=="Commercial Property"?(f(),_(70)):n=="Land"?(N(),R(),N()&&R()&&(f(),_(70))):(V(),A(),V()&&A()&&(f(),_(70)))},Q=()=>{f(),_(99)},X=()=>{D(),F(),L(),D()&&F()&&L()&&(f(),_(99),$("#next").hide())};$("#next").on("click",function(){switch($(".tabs li.active").attr("id")){case"one":J();break;case"two":K();break;case"four":Q();break;case"five":X();break}}),$("#prev").on("click",function(){W(),$("#next").show()}),$(".tabbed-content").each(function(){$(this).append('<ul class="content tab-identifier"></ul>')}),$(".tabs li").each(function(){var n=$(this),c="";n.is(".tabs>li:first-child")&&(c=' class="active"');var q=n.find(".tab-content").detach().wrap("<li"+c+"></li>").parent();n.closest(".tabbed-content").find(".content").append(q)}),$(".tabs li").click(function(){$(this).closest(".tabs").find("li").removeClass("active"),$(this).addClass("active");var n=$(this).index()+1;$(this).closest(".tabbed-content").find(".content>li").removeClass("active"),$(this).closest(".tabbed-content").find(".content>li:nth-of-type("+n+")").addClass("active")})}),ae(()=>{$("body").removeClass("inner-pages maxw1600 m0a dashboard-bd ui-elements")}),(r,l)=>(B(),I(M,null,[i(a(le),{title:"Create Property Request"}),i(re),e("section",ve,[e("div",_e,[e("div",fe,[i(ce),e("div",he,[i(ue),e("form",{onSubmit:se(j,["prevent"]),name:"propertyform"},[e("div",be,[ye,e("div",xe,[e("div",we,[e("div",$e,[ke,e("div",Se,[e("ul",qe,[e("li",Be,[Ie,e("div",Ce,[e("div",Ee,[e("div",Pe,[e("div",Ue,[Ve,i(d,{class:"mt-2",message:a(t).errors.category},null,8,["message"])])]),e("div",Ae,[e("div",Ne,[e("div",Re,[Te,u(e("select",{"onUpdate:modelValue":l[0]||(l[0]=o=>a(t).type=o),required:"",id:"type",name:"type",class:"nice-select form-control wide type curved"},je,512),[[b,a(t).type]])]),Ge,i(d,{class:"mt-2",message:a(t).errors.type},null,8,["message"])]),e("div",Oe,[e("div",ze,[We,u(e("select",{"onUpdate:modelValue":l[1]||(l[1]=o=>a(t).currency=o),required:"",id:"currency",name:"currency",class:"nice-select form-control wide currency curved"},Qe,512),[[b,a(t).currency]])]),Xe,i(d,{class:"mt-2",message:a(t).errors.currency},null,8,["message"])]),e("div",Ye,[Ze,e("p",et,[u(e("input",{onkeyup:a(G),required:"","onUpdate:modelValue":l[2]||(l[2]=o=>a(t).price=o),type:"tel",placeholder:"amount",id:"price",name:"price",class:"curved"},null,8,tt),[[h,a(t).price]])]),at,i(d,{class:"mt-2",message:a(t).errors.price},null,8,["message"])])])])])]),e("li",st,[ot,e("div",lt,[e("div",nt,[e("div",it,[e("div",dt,[rt,e("div",ct,[ut,pt,mt,i(d,{class:"mt-2",message:a(t).errors.bedroom},null,8,["message"])]),vt]),e("div",_t,[ft,i(d,{class:"mt-2",message:a(t).errors.bathroom},null,8,["message"])]),e("div",ht,[gt,i(d,{class:"mt-2",message:a(t).errors.parking},null,8,["message"])])]),e("div",bt,[e("div",yt,[xt,e("p",wt,[u(e("input",{"onUpdate:modelValue":l[3]||(l[3]=o=>a(t).area=o),type:"number",placeholder:"Area",id:"area",name:"area",class:"curved"},null,512),[[h,a(t).area]])]),$t,i(d,{class:"mt-2",message:a(t).errors.area},null,8,["message"])]),e("div",kt,[e("div",St,[qt,u(e("select",{"onUpdate:modelValue":l[4]||(l[4]=o=>a(t).unit=o),name:"unit",id:"unit",class:"curved nice-select form-control wide unit"},It,512),[[b,a(t).unit]])]),Ct,i(d,{class:"mt-2",message:a(t).errors.unit},null,8,["message"])])])])])]),e("li",Et,[Pt,e("div",Ut,[e("div",Vt,[e("div",At,[e("div",Nt,[Rt,e("p",Tt,[u(e("textarea",{class:"curved","onUpdate:modelValue":l[5]||(l[5]=o=>a(t).description=o),id:"description",name:"description",placeholder:"Describe about your property"},null,512),[[h,a(t).description]])]),i(d,{class:"mt-2",message:a(t).errors.description},null,8,["message"])])])])])]),e("li",Dt,[Ft,e("div",Lt,[e("div",Ht,[Mt,e("div",jt,[e("div",null,[(B(!0),I(M,null,oe(a(t).errors,o=>(B(),I("ul",{key:o.id},[e("li",Gt,ne(o),1)]))),128))])]),e("div",Ot,[e("div",zt,[e("div",Wt,[Jt,u(e("select",{required:"","onUpdate:modelValue":l[6]||(l[6]=o=>a(t).state=o),id:"state",name:"state",class:"curved nice-select form-control wide state"},null,512),[[b,a(t).state]])]),Kt,i(d,{class:"mt-2",message:a(t).errors.state},null,8,["message"])]),e("div",Qt,[e("div",Xt,[Yt,u(e("select",{required:"","onUpdate:modelValue":l[7]||(l[7]=o=>a(t).local_government=o),id:"local_government",name:"local_government",class:"curved nice-select form-control wide local"},null,512),[[b,a(t).local_government]])]),Zt,i(d,{class:"mt-2",message:a(t).errors.local_government},null,8,["message"])]),e("div",ea,[e("div",ta,[aa,u(e("input",{class:"curved mt-4",required:"",min:"3",max:"50","onUpdate:modelValue":l[8]||(l[8]=o=>a(t).locality=o),type:"text",name:"locality",placeholder:"Ikoyi",id:"locality"},null,512),[[h,a(t).locality]])]),sa,i(d,{class:"mt-2",message:a(t).errors.locality},null,8,["message"])])]),e("div",oa,[e("button",{disabled:a(w),id:"submit-button",type:"submit",class:"mt-5 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},"Create Alert!",8,la)])])])])])])])]),na])]),u(e("input",{type:"hidden",id:"longitude",name:"longitude","onUpdate:modelValue":l[9]||(l[9]=o=>a(t).longitude=o)},null,512),[[h,a(t).longitude]]),u(e("input",{type:"hidden",id:"latitude",name:"latitude","onUpdate:modelValue":l[10]||(l[10]=o=>a(t).latitude=o)},null,512),[[h,a(t).latitude]])],40,ge),i(pe)])])])]),ia],64))}},va=me(da,[["__scopeId","data-v-9987f98e"]]);export{va as default};