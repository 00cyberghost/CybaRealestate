import{j as d,o as A,a as C,b as i,c as r,d as n,w as _,u as c,F as p,H as N,e,L as m,q as f,f as o,s as L,t as l}from"./app.70a660d0.js";import{_ as B}from"./GuestLayout.48f08335.js";import{_ as D}from"./SideBar.e8580bdc.js";import{_ as E}from"./Pagination.ab533492.js";import"./Header.2c9a96b1.js";import"./_plugin-vue_export-helper.cdc0426e.js";const F=e("meta",{name:"description",content:"Find property agencies in lagos,mushin,lekki,lekki-phase 1,osopa london, ajegunle, eti-osa,ikorodu,epe,amuwo-oddofin,kuje,zubwa,maitama,elele,obigbo,aba,osisioma,zaria,kano state,enugu state,umuahia,asokoro,abia state,adamawa state,akwa-ibom state,anambra state,bauchi state,benue state,cross-river state,delta state,ebonyi state,edo state,ekiti state,gombe state,imo state,jigawa state,kaduna state,katsina state,kano state,kebbi state,kogi state,kwara state,niger state,ogun state,ondo state,oyo state,ibadan,plateau state,jos,nasarawa state,taraba state,yobe state, zamfara state and all over nigeria"},null,-1),I={class:"blog blog-section portfolio pt-5"},V={class:"container"},z={class:"headings-2 pt-0 pb-55"},G={class:"pro-wrapper"},H={class:"detail-wrapper-body"},q={class:"listing-title-bar"},M={class:"text-heading text-left"},O={class:"pb-2"},R=o("Home "),T=o(" \xA0/\xA0 "),U=e("span",null,"Listings",-1),K=e("h3",null,"Our Agencies",-1),P={class:"col-12 px-0 parallax-searchs mb-5 d-none"},J={class:"banner-search-wrap"},Q={class:"tab-content"},W={class:"tab-pane fade show active",id:"tabs_1"},X={class:"rld-main-search"},Y={class:"row"},Z=e("div",{class:"rld-single-input"},[e("input",{type:"text",placeholder:"Enter Keyword..."})],-1),ee={class:"rld-single-select ml-22"},te={class:"rld-single-select ml-22"},se={class:"select single-select",id:"local_government",name:"local_government"},ae=e("div",{class:"col-xl-2 col-lg-2 col-md-4 pl-0"},[e("a",{class:"btn btn-yellow",href:"#"},"Search Now")],-1),oe={class:"row"},ne={class:"col-lg-8 col-md-12 col-xs-12"},le={class:"headings-2 pt-0"},ie={class:"pro-wrapper"},re=e("div",{class:"detail-wrapper-body"},[e("div",{class:"listing-title-bar"},[e("div",{class:"text-heading text-left"},[e("p",{class:"font-weight-bold mb-0 mt-3"},"7 Search results")])])],-1),ce={class:"cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center grid"},de={class:"input-group border rounded input-group-lg w-auto mr-4"},_e=e("label",{class:"input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3",for:"inputGroupSelect01"},[e("i",{class:"fas fa-align-left fs-16 pr-2"}),o("Sortby:")],-1),he=e("option",{value:""},"sort",-1),ue=e("option",{value:"alphabet"},"Alphabet",-1),pe=e("option",{value:"rating"},"Rating",-1),me=e("option",{value:"number"},"Number of property",-1),ge=e("option",{value:"date"},"Date Registered",-1),fe=[he,ue,pe,me,ge],ve={class:"row"},be={class:"news-item news-item-sm"},we={class:"news-item-img homes"},ke={class:"homes-tag button alt featured"},ye=["src","alt"],xe={class:"news-item-text"},$e={class:"the-agents"},je={class:"the-agents-details"},Se=["href"],Ae=e("i",{class:"fa fa-phone icon mr-3"},null,-1),Ce=o(" Call"),Ne=[Ae,Ce],Le=["href"],Be=e("i",{class:"fa fa-whatsapp icon mr-3"},null,-1),De=o(" Message"),Ee=[Be,De],Fe=["href"],Ie=e("i",{class:"fa fa-envelope icon mr-3"},null,-1),Ve={href:"#"},ze=e("i",{class:"fa fa-star icon mr-3"},null,-1),Ge={href:"#"},He=e("i",{class:"fas fa-clock icon mr-3"},null,-1),qe={class:"news-item-bottom"},Me=o("View Agency"),Oe={class:"admin"},Re=["src","alt"],Te={class:"col-lg-4 col-md-12 car"},Xe={__name:"Agencies",props:{agencies:Object},setup(v){const y=`https://${location.hostname}${location.pathname}`,x=s=>{let a=L(),t=s.target.value;a.get(route("sortAgencies",t))};let b=d([]),h=d([]),w=d([]),k=d(null),j=d(!1);d(null);const S=s=>{let a=s.target.value;if(a.length>0){let t=[];for(let u=0;u<h.value.length;u++)if(h.value[u].state.name==a)for(let g=0;g<h.value[u].state.locals.length;g++)t.push(h.value[u].state.locals[g].name);w.value=t,j.value=!0,setTimeout(()=>k.value.update(),1e3)}};return A(()=>{$("body").addClass("inner-pages agents homepage-4 hd-white"),$("#dashboard-style").remove(),$("#wrapper").removeClass("int_main_wraapper");let s=NiceSelect.bind(document.getElementById("state"),{searchable:!0});k.value=NiceSelect.bind(document.getElementById("local_government"),{searchable:!0}),axios.get("/json/states.json").then(a=>{b.value=a.data,h.value=a.data}).catch(a=>console.log(a)).finally(()=>{s.clear(),s.update()})}),C(()=>{$("body").removeClass("inner-pages agents homepage-4 hd-white")}),(s,a)=>(i(),r(p,null,[n(c(N),{title:"property and house agencies in Lagos, Abuja, Porthacourt nigeria"},{default:_(()=>[F]),_:1}),n(B,null,{default:_(()=>[e("section",I,[e("div",V,[e("section",z,[e("div",G,[e("div",H,[e("div",q,[e("div",M,[e("p",O,[n(c(m),{href:s.route("home")},{default:_(()=>[R]),_:1},8,["href"]),T,U])]),K])])])]),e("div",P,[e("div",J,[e("div",Q,[e("div",W,[e("div",X,[e("div",Y,[Z,e("div",ee,[e("select",{onChange:S,required:"",id:"state",name:"state",class:"select single-select"},[(i(!0),r(p,null,f(c(b),t=>(i(),r("option",{key:t},l(t.state.name),1))),128))],32)]),e("div",te,[e("select",se,[(i(!0),r(p,null,f(c(w),t=>(i(),r("option",{key:t},l(t),1))),128))])]),ae])])])])])]),e("div",oe,[e("div",ne,[e("section",le,[e("div",ie,[re,e("div",ce,[e("div",de,[_e,e("select",{"preserve-scroll":"",onChange:x,class:"form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby","data-style":"bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3",id:"inputGroupSelect01",name:"sortby"},fe,32)])])])]),e("div",ve,[(i(!0),r(p,null,f(v.agencies.data,t=>(i(),r("div",{key:t.id,class:"col-md-12 col-xs-12 mt-3"},[e("div",be,[n(c(m),{href:s.route("agencyDetails",t.id),class:"news-img-link"},{default:_(()=>[e("div",we,[e("div",ke,l(t.property_count)+" Listings",1),e("img",{class:"resp-img",src:`/photos/${t.photo}`,alt:t.name},null,8,ye)])]),_:2},1032,["href"]),e("div",xe,[n(c(m),{href:s.route("agencyDetails",t.id)},{default:_(()=>[e("h3",null,l(t.name),1)]),_:2},1032,["href"]),e("div",$e,[e("ul",je,[e("li",null,[e("a",{href:`tel:${t.phone}`},Ne,8,Se)]),e("li",null,[e("a",{target:"_blank",href:`whatsapp://send?phone=+234${t.whatsapp}&text=hello i am interested in a service you provide and i saw your profile here ${y}`},Ee,8,Le)]),e("li",null,[e("a",{target:"_blank",href:`mailto:${t.email}`},[Ie,o(" "+l(t.email.slice(0,6))+"...",1)],8,Fe)]),e("li",null,[e("a",Ve,[ze,o(" "+l(t.rating)+".0 ",1)])]),e("li",null,[e("a",Ge,[He,o(" "+l(t.created_at_diff),1)])])])]),e("div",qe,[n(c(m),{href:s.route("agencyDetails",t.id),class:"news-link"},{default:_(()=>[Me]),_:2},1032,["href"]),e("div",Oe,[e("p",null,l(t.name),1),e("img",{src:`/photos/${t.photo}`,alt:t.name},null,8,Re)])])])])]))),128))]),n(E,{paginations:v.agencies.links},null,8,["paginations"])]),e("aside",Te,[n(D)])])])])]),_:1})],64))}};export{Xe as default};
