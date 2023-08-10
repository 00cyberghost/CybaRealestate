import{s as f,o as b,r as g,b as o,c as l,d,u as C,w as n,F as h,H as y,e as t,q as k,t as s,k as c}from"./app.dd45c33b.js";import{_ as q,a as v}from"./DashboardLayout.af52765a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"dashborad-box"},x=t("h4",{class:"title"},"Property Requests!",-1),R=t("button",{class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},"Create Request!",-1),B={class:"row"},L={class:"table"},F=t("td",{"data-label":"Column 1"},"Category",-1),j={"data-label":"Column 2"},D=t("td",{"data-label":"Column 1"},"Type",-1),M={"data-label":"Column 2"},N=t("td",{"data-label":"Column 1"},"Price",-1),P={"data-label":"Column 2"},V={key:0},A=t("td",{"data-label":"Column 1"},"Bedrooms",-1),H={"data-label":"Column 2"},S={key:1},E=t("td",{"data-label":"Column 1"},"Bathrooms",-1),O={"data-label":"Column 2"},T={key:2},z=t("td",{"data-label":"Column 1"},"Area",-1),G={"data-label":"Column 2"},I=t("td",{"data-label":"Column 1"},"Date",-1),J={"data-label":"Column 2"},K=t("td",{"data-label":"Column 1"},"Location",-1),Q={"data-label":"Column 2"},U={class:"d-flex flex-row justify-content-center p-4 f-20"},W=t("i",{class:"fas fa-pencil-alt"},null,-1),X=["id"],Y=["id"],Z=t("i",{class:"fas fa-eye"},null,-1),p={class:"justify-content-center row"},at={__name:"MyRequests",props:{props:Object},setup(u){const _=f({id:null}),m=a=>{let i=a.target.id;_.id=i,_.delete(route("deleteRequest",i)),a.target.setAttribute("disabled","")};return b(()=>{$(".header-user-name").on("click",function(){$(".header-user-menu ul").toggleClass("hu-menu-vis"),$(this).toggleClass("hu-menu-visdec")})}),(a,i)=>{const r=g("Link");return o(),l(h,null,[d(C(y),{title:"My Property Requests"}),d(q,null,{default:n(()=>[t("div",w,[x,d(r,{href:a.route("createRequest")},{default:n(()=>[R]),_:1},8,["href"]),t("div",B,[(o(!0),l(h,null,k(u.props.data,e=>(o(),l("div",{key:e.id,class:"col-lg-3 col-md-3 shadow rounded mt-4 offset-md-1 offset-lg-1"},[t("table",L,[t("tr",null,[F,t("td",j,"For "+s(e.category),1)]),t("tr",null,[D,t("td",M,s(e.type),1)]),t("tr",null,[N,t("td",P,"\u20A6"+s(e.price.toLocaleString()),1)]),e.bedroom?(o(),l("tr",V,[A,t("td",H,s(e.bedroom),1)])):c("",!0),e.bathroom?(o(),l("tr",S,[E,t("td",O,s(e.bathroom),1)])):c("",!0),e.area?(o(),l("tr",T,[z,t("td",G,s(e.area)+" "+s(e.unit),1)])):c("",!0),t("tr",null,[I,t("td",J,s(e.created_at_diff),1)]),t("tr",null,[K,t("td",Q,s(e.state),1)])]),t("div",U,[d(r,{href:a.route("editRequest",e.id)},{default:n(()=>[W]),_:2},1032,["href"]),t("a",{id:e.id,onclick:m,class:"ml-5"},[t("i",{id:e.id,class:"fas fa-trash"},null,8,Y)],8,X),d(r,{href:a.route("requestDetails",e.id),class:"ml-5"},{default:n(()=>[Z]),_:2},1032,["href"])])]))),128))])]),t("div",p,[d(v,{paginations:u.props.links},null,8,["paginations"])])]),_:1})],64)}}};export{at as default};
