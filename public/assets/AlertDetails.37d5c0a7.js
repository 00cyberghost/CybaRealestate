import{o as d,a as _,b as o,c as a,d as i,u as r,w as h,F as l,H as m,q as p,e as s,t as e,k as n}from"./app.aef213a4.js";import{_ as u}from"./GuestLayout.811b4739.js";/* empty css                                                               */import{_ as f}from"./SideBar.bb5dbb89.js";import"./Header.c3d73f9d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const g={class:"container"},b={class:"row"},y={class:"col-lg-8 col-md-12 blog-pots"},w={class:"single homes-content details mb-30"},v=s("h5",{class:"mb-4"},"Property Details",-1),k={class:"homes-list clearfix"},P=s("span",{class:"font-weight-bold mr-1"},"Property status:",-1),C={class:"det"},D=s("span",{class:"font-weight-bold mr-1"},"Property Type:",-1),x={class:"det"},B=s("span",{class:"font-weight-bold mr-1"},"Property Price:",-1),L={class:"det"},N={key:0},A=s("span",{class:"font-weight-bold mr-1"},"No Of Bedrooms:",-1),O={class:"det"},S={key:1},F=s("span",{class:"font-weight-bold mr-1"},"No Of Bath:",-1),V={class:"det"},H={key:2},U=s("span",{class:"font-weight-bold mr-1"},"Parking Space:",-1),j={class:"det"},q={key:3},E=s("span",{class:"font-weight-bold mr-1"},"Area:",-1),G={class:"det"},M=s("span",{class:"font-weight-bold mr-1"},"State:",-1),T={class:"det"},z=s("span",{class:"font-weight-bold mr-1"},"Local Government:",-1),I={class:"det"},J=s("span",{class:"font-weight-bold mr-1"},"Locality:",-1),K={class:"det"},Q=s("span",{class:"font-weight-bold mr-1"},"Address:",-1),R={class:"det"},W=s("span",{class:"font-weight-bold mr-1"},"created:",-1),X={class:"det"},Y=s("span",{class:"font-weight-bold mr-1"},"Updated:",-1),Z={class:"det"},ss={key:0,class:"row"},ts={class:"col-md-12"},es={class:"blog-info details mb-30"},os=s("h5",{class:"mb-4"},"Description",-1),as={class:"mb-3"},ns=s("div",{class:"property-location map d-none"},[s("h5",null,"Location"),s("div",{class:"divider-fade"}),s("div",{id:"map-contact",class:"contact-map"})],-1),is={class:"col-lg-4 col-md-12 car"},us={__name:"AlertDetails",props:{props:Object},setup(c){return d(()=>{$("body").addClass("inner-pages sin-1 homepage-4 hd-white"),$("#dashboard-style").remove(),$("#wrapper").removeClass("int_main_wraapper"),$(document).ready(function(){$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})})}),_(()=>{$("body").removeClass("inner-pages sin-1 homepage-4 hd-white")}),(ls,cs)=>(o(),a(l,null,[i(r(m),{title:"Property Alert Details"}),i(u,null,{default:h(()=>[(o(!0),a(l,null,p(c.props,t=>(o(),a("section",{class:"single-proper blog details",key:t.id},[s("div",g,[s("div",b,[s("div",y,[s("div",w,[v,s("ul",k,[s("li",null,[P,s("span",C,"For "+e(t.status),1)]),s("li",null,[D,s("span",x,e(t.type),1)]),s("li",null,[B,s("span",L,"\u20A6"+e(t.price.toLocaleString()),1)]),t.bedroom?(o(),a("li",N,[A,s("span",O,e(t.bedroom),1)])):n("",!0),t.bathroom?(o(),a("li",S,[F,s("span",V,e(t.bathroom),1)])):n("",!0),t.parking?(o(),a("li",H,[U,s("span",j,e(t.parking),1)])):n("",!0),t.area?(o(),a("li",q,[E,s("span",G,e(t.area)+" "+e(t.unit),1)])):n("",!0),s("li",null,[M,s("span",T,e(t.state),1)]),s("li",null,[z,s("span",I,e(t.local_government),1)]),s("li",null,[J,s("span",K,e(t.locality),1)]),s("li",null,[Q,s("span",R,e(t.locality)+","+e(t.local_government)+","+e(t.state),1)]),s("li",null,[W,s("span",X,e(t.created_at_diff),1)]),s("li",null,[Y,s("span",Z,e(t.updated_at_diff),1)])])]),t.description?(o(),a("div",ss,[s("div",ts,[s("div",es,[os,s("p",as,e(t.description),1)])])])):n("",!0),ns]),s("aside",is,[i(f)])])])]))),128))]),_:1})],64))}};export{us as default};
