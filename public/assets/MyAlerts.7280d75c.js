import{s as f,o as b,r as g,b as o,c as l,d as n,u as y,w as d,F as h,H as C,e as t,q as k,t as s,k as c}from"./app.8edf34a8.js";import{_ as A,a as v}from"./DashboardLayout.1941c56a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"dashborad-box"},x=t("h4",{class:"title"},"Property Alerts!",-1),B=t("button",{class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},"Create Alert!",-1),L={class:"row"},N={class:"table"},D=t("td",{"data-label":"Column 1"},"Category",-1),F={"data-label":"Column 2"},j=t("td",{"data-label":"Column 1"},"Type",-1),M={"data-label":"Column 2"},P=t("td",{"data-label":"Column 1"},"Price",-1),S={"data-label":"Column 2"},V={key:0},H=t("td",{"data-label":"Column 1"},"Bedrooms",-1),q={"data-label":"Column 2"},E={key:1},G=t("td",{"data-label":"Column 1"},"Bathrooms",-1),O={"data-label":"Column 2"},T={key:2},U=t("td",{"data-label":"Column 1"},"Area",-1),z={"data-label":"Column 2"},I=t("td",{"data-label":"Column 1"},"Date",-1),J={"data-label":"Column 2"},K=t("td",{"data-label":"Column 1"},"Location",-1),Q={"data-label":"Column 2"},R={class:"d-flex flex-row justify-content-center p-4 f-20"},W=t("i",{class:"fas fa-pencil-alt"},null,-1),X=["id"],Y=["id"],Z=t("i",{class:"fas fa-eye"},null,-1),p={class:"justify-content-center row"},at={__name:"MyAlerts",props:{props:Object},setup(u){const _=f({id:null}),m=a=>{let i=a.target.id;_.id=i,_.delete(route("deleteAlert",i)),a.target.setAttribute("disabled","")};return b(()=>{$(".header-user-name").on("click",function(){$(".header-user-menu ul").toggleClass("hu-menu-vis"),$(this).toggleClass("hu-menu-visdec")})}),(a,i)=>{const r=g("Link");return o(),l(h,null,[n(y(C),{title:"My Property Alerts"}),n(A,null,{default:d(()=>[t("div",w,[x,n(r,{href:a.route("createAlert")},{default:d(()=>[B]),_:1},8,["href"]),t("div",L,[(o(!0),l(h,null,k(u.props.data,e=>(o(),l("div",{key:e.id,class:"col-lg-3 col-md-3 shadow rounded mt-4 offset-md-1 offset-lg-1"},[t("table",N,[t("tr",null,[D,t("td",F,"For "+s(e.category),1)]),t("tr",null,[j,t("td",M,s(e.type),1)]),t("tr",null,[P,t("td",S,s(e.currency.replace("NGN","\u20A6").replace("USD","$"))+s(e.price.toLocaleString()),1)]),e.bedroom?(o(),l("tr",V,[H,t("td",q,s(e.bedroom),1)])):c("",!0),e.bathroom?(o(),l("tr",E,[G,t("td",O,s(e.bathroom),1)])):c("",!0),e.area?(o(),l("tr",T,[U,t("td",z,s(e.area)+" "+s(e.unit),1)])):c("",!0),t("tr",null,[I,t("td",J,s(e.created_at_diff),1)]),t("tr",null,[K,t("td",Q,s(e.state),1)])]),t("div",R,[n(r,{href:a.route("editAlert",[e.id])},{default:d(()=>[W]),_:2},1032,["href"]),t("a",{id:e.id,onclick:m,class:"ml-5"},[t("i",{id:e.id,class:"fas fa-trash"},null,8,Y)],8,X),n(r,{href:a.route("alertDetails",[e.id]),class:"ml-5"},{default:d(()=>[Z]),_:2},1032,["href"])])]))),128))])]),t("div",p,[n(v,{paginations:u.props.links},null,8,["paginations"])])]),_:1})],64)}}};export{at as default};