import{j as v,o as y,a as w,b as i,c as l,d as c,u as n,w as r,F as _,H as A,e as s,t as d,q as x,p as I,m as C,L as h,g as k}from"./app.70a660d0.js";import{_ as D}from"./DashboardLayout.4988243c.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const t=e=>(I("data-v-22ad100b"),e=e(),C(),e),E={class:"dashborad-box stat bg-white curved"},L=t(()=>s("h4",{class:"title"},"Manage Dashboard",-1)),S={class:"section-body"},M={class:"row"},R={class:"col-lg-3 col-md-6 col-xs-12 dar pro mr-3"},H={class:"item"},N=t(()=>s("div",{class:"icon"},[s("i",{class:"fas fa-laptop-house","aria-hidden":"true"})],-1)),V={class:"info"},j={class:"number"},F=t(()=>s("p",{class:"type ml-1"},"Property By Agents",-1)),q={class:"col-lg-3 col-md-6 col-xs-12 dar rev mr-3"},O={class:"item"},P=t(()=>s("div",{class:"icon"},[s("i",{class:"fas fa-star"})],-1)),U={class:"info"},Y={class:"number"},z=t(()=>s("p",{class:"type ml-1"},"Rating",-1)),G={class:"col-lg-3 col-md-6 dar com mr-3"},J={class:"item mb-0"},K=t(()=>s("div",{class:"icon"},[s("i",{class:"fas fa-users"})],-1)),Q={class:"info"},T={class:"number"},W=t(()=>s("p",{class:"type ml-1"},"Agents",-1)),X={class:"col-lg-3 col-md-6 dar booked"},Z={class:"item mb-0"},ss=t(()=>s("div",{class:"icon"},[s("i",{class:"fas fa-eye"})],-1)),ts={class:"info"},es={class:"number"},os=t(()=>s("p",{class:"type ml-1"},"Views",-1)),as={class:"dashborad-box curved"},ds=t(()=>s("h4",{class:"title"},"Register Agents",-1)),ns={class:"section-body"},cs=t(()=>s("p",null,"Register Your agents through this link",-1)),is={class:"row mt-3"},ls={class:"col-md-10 col-sm-10 col-10"},rs={class:"form-group"},_s=["value"],hs={class:"dashborad-box curved"},ms=t(()=>s("div",{class:"col-md-6 col-sm-6 col-6"},[s("h4",{class:"title"},"My agents")],-1)),us={class:"section-body listing-table",id:"listing-form"},ps={class:"table-responsive"},gs={class:"table table-striped"},bs=t(()=>s("thead",null,[s("tr",null,[s("th",null,"Agent Name"),s("th",null,"Date"),s("th",null,"Rating"),s("th",null,"Dashboard"),s("th",null,"Details"),s("th",null,"delete")])],-1)),fs={class:"rating"},vs={class:"status"},ys=t(()=>s("span",{class:"active"},"view",-1)),ws={class:"status"},As=t(()=>s("span",null,"view",-1)),xs={class:"edit"},Is={href:"#"},Cs=["disabled","onClick","data-one-id","data-two"],ks=t(()=>s("a",{"data-scroll":"",href:"#wrapper",class:"go-up"},[s("i",{class:"fa fa-angle-double-up","aria-hidden":"true"})],-1)),Ds={__name:"AgencyDashboard",props:{props:Object,message:String},setup(e){let m=v(!1);const u=o=>{document.getElementById("accept").setAttribute("agent-id",o.target.getAttribute("agent-id")),document.getElementById("accept").setAttribute("agency-id",o.target.getAttribute("agency-id")),$(".confirmation-modal").fadeIn()};let p=location.hostname;const g=o=>{document.getElementById("listing-form").classList.contains("d-none")==!0?(document.getElementById("listing-form").classList.remove("d-none"),o.target.textContent="Hide Agents"):(document.getElementById("listing-form").classList.add("d-none"),o.target.textContent="Show Agents")},b=()=>{var o=document.getElementById("myInput");o.select(),o.setSelectionRange(0,99999),document.execCommand("copy"),$(".alert-modal").fadeIn()};return y(()=>$("body").addClass("inner-pages maxw1600 m0a dashboard-bd")),w(()=>$("body").removeClass("inner-pages maxw1600 m0a dashboard-bd")),(o,f)=>(i(),l(_,null,[c(n(A),{title:"Agency Dashboard"}),c(D,{props:e.props},{default:r(()=>[s("div",E,[L,s("div",S,[s("div",M,[s("div",R,[s("div",H,[N,s("div",V,[s("h6",j,d(e.props.dashboard_count.no_of_properties),1),F])])]),s("div",q,[s("div",O,[P,s("div",U,[s("h6",Y,d(e.props.dashboard_count.rating)+".0",1),z])])]),s("div",G,[s("div",J,[K,s("div",Q,[s("h6",T,d(e.props.dashboard_count.no_of_agents),1),W])])]),s("div",X,[s("div",Z,[ss,s("div",ts,[s("h6",es,d(e.props.agency.views),1),os])])])])])]),s("div",as,[ds,s("div",ns,[cs,s("div",is,[s("div",ls,[s("div",rs,[s("input",{type:"text",value:`https://${n(p)}/register-agent/${e.props.agency.email}`,id:"myInput",class:"form-control"},null,8,_s)])]),s("div",{class:"col-md-2 col-sm-2 col-2"},[s("i",{onClick:b,class:"fa fa-copy"})])])])]),s("div",hs,[s("div",{class:"row"},[ms,s("div",{class:"col-md-6 col-sm-6 col-6"},[s("button",{id:"listing-form-button",onClick:g,type:"submit",class:"btn btn-primary btn-sm rounded curved p-2 pl-2 pr-2 focus"},"Hide Agents")])]),s("div",us,[s("div",ps,[s("table",gs,[bs,s("tbody",null,[(i(!0),l(_,null,x(e.props.agents.data,a=>(i(),l("tr",{key:a},[s("td",null,d(a.name),1),s("td",null,d(a.created_at_diff),1),s("td",fs,[s("span",null,d(a.average_review)+".0",1)]),s("td",vs,[c(n(h),{href:o.route("agentDashboard",[a.id,a.agency_id])},{default:r(()=>[ys]),_:2},1032,["href"])]),s("td",ws,[c(n(h),{href:o.route("agentDetails",a.id)},{default:r(()=>[As]),_:2},1032,["href"])]),s("td",xs,[s("a",Is,[s("i",{disabled:n(m),"preserve-scroll":"",onClick:k(u,["prevent"]),"data-one-id":a.id,"data-two":a.agency_id,class:"fa fa-trash"},null,8,Cs)])])]))),128))])])])])])]),_:1},8,["props"]),ks],64))}},Ss=B(Ds,[["__scopeId","data-v-22ad100b"]]);export{Ss as default};
