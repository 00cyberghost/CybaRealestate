import{o as c,a as d,b as o,l as _,w as r,c as a,q as h,F as m,d as i,u,H as f,e as s,t as e,k as n}from"./app.dd45c33b.js";import{_ as g}from"./GuestLayout.4292a761.js";/* empty css                                                               */import{_ as b}from"./SideBar.40595378.js";import"./Header.e739d21c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const p={class:"container"},y={class:"row"},w={class:"col-lg-8 col-md-12 blog-pots"},v={class:"single homes-content details mb-30"},k=s("h5",{class:"mb-4"},"Property Details",-1),C={class:"homes-list clearfix"},P=s("span",{class:"font-weight-bold mr-1"},"Property Category:",-1),B={class:"det"},x=s("span",{class:"font-weight-bold mr-1"},"Property Type:",-1),D={class:"det"},L=s("span",{class:"font-weight-bold mr-1"},"Property Price:",-1),N={class:"det"},O={key:0},S=s("span",{class:"font-weight-bold mr-1"},"No Of Bedrooms:",-1),F={class:"det"},V={key:1},q=s("span",{class:"font-weight-bold mr-1"},"No Of Bath:",-1),A={class:"det"},H={key:2},U=s("span",{class:"font-weight-bold mr-1"},"Parking Space:",-1),j={class:"det"},E={key:3},G=s("span",{class:"font-weight-bold mr-1"},"Area:",-1),M={class:"det"},R=s("span",{class:"font-weight-bold mr-1"},"State:",-1),T={class:"det"},z=s("span",{class:"font-weight-bold mr-1"},"Local Government:",-1),I={class:"det"},J=s("span",{class:"font-weight-bold mr-1"},"Locality:",-1),K={class:"det"},Q=s("span",{class:"font-weight-bold mr-1"},"Address:",-1),W={class:"det"},X=s("span",{class:"font-weight-bold mr-1"},"created:",-1),Y={class:"det"},Z=s("span",{class:"font-weight-bold mr-1"},"Updated:",-1),ss={class:"det"},ts={key:0,class:"row"},es={class:"col-md-12"},os={class:"blog-info details mb-30"},as=s("h5",{class:"mb-4"},"Description",-1),ns={class:"mb-3"},is=s("div",{class:"property-location map d-none"},[s("h5",null,"Location"),s("div",{class:"divider-fade"}),s("div",{id:"map-contact",class:"contact-map"})],-1),ls={class:"col-lg-4 col-md-12 car"},gs={__name:"RequestDetails",props:{props:Object},setup(l){return c(()=>{$("body").addClass("inner-pages sin-1 homepage-4 hd-white"),$("#dashboard-style").remove(),$("#wrapper").removeClass("int_main_wraapper"),$(document).ready(function(){$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})})}),d(()=>{$("body").removeClass("inner-pages sin-1 homepage-4 hd-white")}),(cs,ds)=>(o(),_(g,null,{default:r(()=>[(o(!0),a(m,null,h(l.props,t=>(o(),a("section",{class:"single-proper blog details",key:t.id},[i(u(f),{title:t.bedroom+" bedroom "+t.bathroom+" bathroom "+t.type+" for "+t.category+" in "+t.location},null,8,["title"]),s("div",p,[s("div",y,[s("div",w,[s("div",v,[k,s("ul",C,[s("li",null,[P,s("span",B,"For "+e(t.category),1)]),s("li",null,[x,s("span",D,e(t.type),1)]),s("li",null,[L,s("span",N,"\u20A6"+e(t.price.toLocaleString()),1)]),t.bedroom?(o(),a("li",O,[S,s("span",F,e(t.bedroom),1)])):n("",!0),t.bathroom?(o(),a("li",V,[q,s("span",A,e(t.bathroom),1)])):n("",!0),t.parking?(o(),a("li",H,[U,s("span",j,e(t.parking),1)])):n("",!0),t.area?(o(),a("li",E,[G,s("span",M,e(t.area)+" "+e(t.unit),1)])):n("",!0),s("li",null,[R,s("span",T,e(t.state),1)]),s("li",null,[z,s("span",I,e(t.local_government),1)]),s("li",null,[J,s("span",K,e(t.locality),1)]),s("li",null,[Q,s("span",W,e(t.locality)+","+e(t.local_government)+","+e(t.state),1)]),s("li",null,[X,s("span",Y,e(t.created_at_diff),1)]),s("li",null,[Z,s("span",ss,e(t.updated_at_diff),1)])])]),t.description?(o(),a("div",ts,[s("div",es,[s("div",os,[as,s("p",ns,e(t.description),1)])])])):n("",!0),is]),s("aside",ls,[i(b)])])])]))),128))]),_:1}))}};export{gs as default};
