import{o as d,a as _,b as o,c as a,d as i,F as l,k as r,u as h,H as m,f as s,t as e,g as n}from"./app.6a98db12.js";import{_ as f}from"./Header.f4491924.js";/* empty css                                                               */import{_ as u}from"./SideBar.f78b2349.js";import{F as g}from"./Footer.8a05bc57.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"container"},p={class:"row"},y={class:"col-lg-8 col-md-12 blog-pots"},v={class:"single homes-content details mb-30"},w=s("h5",{class:"mb-4"},"Property Details",-1),k={class:"homes-list clearfix"},P=s("span",{class:"font-weight-bold mr-1"},"Property Category:",-1),C={class:"det"},B=s("span",{class:"font-weight-bold mr-1"},"Property Type:",-1),D={class:"det"},F=s("span",{class:"font-weight-bold mr-1"},"Property Price:",-1),L={class:"det"},N={key:0},x=s("span",{class:"font-weight-bold mr-1"},"No Of Bedrooms:",-1),O={class:"det"},S={key:1},V=s("span",{class:"font-weight-bold mr-1"},"No Of Bath:",-1),A={class:"det"},H={key:2},U=s("span",{class:"font-weight-bold mr-1"},"Parking Space:",-1),j={class:"det"},q={key:3},E=s("span",{class:"font-weight-bold mr-1"},"Area:",-1),G={class:"det"},M=s("span",{class:"font-weight-bold mr-1"},"State:",-1),R={class:"det"},T=s("span",{class:"font-weight-bold mr-1"},"Local Government:",-1),z={class:"det"},I=s("span",{class:"font-weight-bold mr-1"},"Locality:",-1),J={class:"det"},K=s("span",{class:"font-weight-bold mr-1"},"Address:",-1),Q={class:"det"},W=s("span",{class:"font-weight-bold mr-1"},"created:",-1),X={class:"det"},Y=s("span",{class:"font-weight-bold mr-1"},"Updated:",-1),Z={class:"det"},ss={key:0,class:"row"},ts={class:"col-md-12"},es={class:"blog-info details mb-30"},os=s("h5",{class:"mb-4"},"Description",-1),as={class:"mb-3"},ns=s("div",{class:"property-location map d-none"},[s("h5",null,"Location"),s("div",{class:"divider-fade"}),s("div",{id:"map-contact",class:"contact-map"})],-1),is={class:"col-lg-4 col-md-12 car"},us={__name:"RequestDetails",props:{props:Object},setup(c){return d(()=>{$("body").addClass("inner-pages sin-1 homepage-4 hd-white"),$("#dashboard-style").remove(),$("#wrapper").removeClass("int_main_wraapper"),$(document).ready(function(){$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})})}),_(()=>{$("body").removeClass("inner-pages sin-1 homepage-4 hd-white")}),(ls,cs)=>(o(),a(l,null,[i(f),(o(!0),a(l,null,r(c.props,t=>(o(),a("section",{class:"single-proper blog details",key:t.id},[i(h(m),{title:t.bedroom+" bedroom "+t.bathroom+" bathroom "+t.type+" for "+t.category+" in "+t.location},null,8,["title"]),s("div",b,[s("div",p,[s("div",y,[s("div",v,[w,s("ul",k,[s("li",null,[P,s("span",C,"For "+e(t.category),1)]),s("li",null,[B,s("span",D,e(t.type),1)]),s("li",null,[F,s("span",L,"\u20A6"+e(t.price.toLocaleString()),1)]),t.bedroom?(o(),a("li",N,[x,s("span",O,e(t.bedroom),1)])):n("",!0),t.bathroom?(o(),a("li",S,[V,s("span",A,e(t.bathroom),1)])):n("",!0),t.parking?(o(),a("li",H,[U,s("span",j,e(t.parking),1)])):n("",!0),t.area?(o(),a("li",q,[E,s("span",G,e(t.area)+" "+e(t.unit),1)])):n("",!0),s("li",null,[M,s("span",R,e(t.state),1)]),s("li",null,[T,s("span",z,e(t.local_government),1)]),s("li",null,[I,s("span",J,e(t.locality),1)]),s("li",null,[K,s("span",Q,e(t.locality)+","+e(t.local_government)+","+e(t.state),1)]),s("li",null,[W,s("span",X,e(t.created_at_diff),1)]),s("li",null,[Y,s("span",Z,e(t.updated_at_diff),1)])])]),t.description?(o(),a("div",ss,[s("div",ts,[s("div",es,[os,s("p",as,e(t.description),1)])])])):n("",!0),ns]),s("aside",is,[i(u)])])])]))),128)),i(g)],64))}};export{us as default};