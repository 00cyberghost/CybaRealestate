import{b as n,c as d,d as l,u as i,w as r,F as u,H as b,e as t,q as f,t as s,i as _,L as p,p as g,k as y,f as c}from"./app.d90bbe21.js";import{G as C}from"./GuestLayout.b53f0dbb.js";import{_ as v}from"./Pagination.d34dce06.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Header.bc701b30.js";const a=o=>(g("data-v-7429f90a"),o=o(),y(),o),k=a(()=>t("section",{class:"headings"},[t("div",{class:"text-heading text-center"},[t("div",{class:"container"})])],-1)),x={class:"contact-us featured portfolio home18 bg-white-3"},q={class:"container"},B={class:"row row-gap-3"},L={class:"table"},V=a(()=>t("td",{"data-label":"Column 1"},"Type",-1)),I={"data-label":"Column 2"},N=a(()=>t("td",{"data-label":"Column 1"},"Category",-1)),R={"data-label":"Column 2"},S=a(()=>t("td",{"data-label":"Column 1"},"Price",-1)),$={"data-label":"Column 2"},D={key:0},F=a(()=>t("td",{"data-label":"Column 1"},"Bedrooms",-1)),j={"data-label":"Column 2"},A={key:1},G=a(()=>t("td",{"data-label":"Column 1"},"Bathrooms",-1)),H={"data-label":"Column 2"},P={key:2},T=a(()=>t("td",{"data-label":"Column 1"},"Area",-1)),E={"data-label":"Column 2"},M=a(()=>t("td",{"data-label":"Column 1"},"Date",-1)),O={"data-label":"Column 2"},z=a(()=>t("td",{"data-label":"Column 1"},"Location",-1)),J={"data-label":"Column 2"},K={class:"d-flex flex-row justify-between p-4 f-20"},Q=["href"],U=a(()=>t("button",{id:"message",class:"btn b-primary btn-sm rounded curved p-2 pl-2 pr-2"},[t("i",{class:"fa fa-whatsapp"}),c(" Message")],-1)),W=[U],X=a(()=>t("button",{id:"message",class:"btn b-primary btn-sm rounded curved p-2 pl-2 pr-2"},[t("i",{class:"fa fa-eye"}),c(" View")],-1)),Y=["href"],Z=a(()=>t("button",{id:"call",class:"btn b-primary btn-sm rounded curved p-2 pl-2 pr-2"},[t("i",{class:"fa fa-phone"}),c(" Call Agent")],-1)),tt=[Z],et={__name:"Requests",props:{props:Object},setup(o){let h=location.hostname;return(m,at)=>(n(),d(u,null,[l(i(b),{title:"Property Requests"}),l(C,null,{default:r(()=>[k,t("section",x,[t("div",q,[t("div",B,[(n(!0),d(u,null,f(o.props.data,e=>(n(),d("div",{key:e.id,class:"col-lg-3 col-md-3 shadow rounded mt-1 offset-md-1 offset-lg-1"},[t("table",L,[t("tr",null,[V,t("td",I,s(e.type),1)]),t("tr",null,[N,t("td",R,"For "+s(e.category),1)]),t("tr",null,[S,t("td",$,s(e.amount),1)]),e.bedroom>0?(n(),d("tr",D,[F,t("td",j,s(e.bedroom),1)])):_("",!0),e.bathroom>0?(n(),d("tr",A,[G,t("td",H,s(e.bathroom),1)])):_("",!0),e.area>0?(n(),d("tr",P,[T,t("td",E,s(e.area)+"/"+s(e.unit),1)])):_("",!0),t("tr",null,[M,t("td",O,s(e.created_at_diff),1)]),t("tr",null,[z,t("td",J,s(e.location),1)])]),t("div",K,[t("a",{href:`whatsapp://send?phone=+234${e.user.whatsapp}&text=hello i am interested in a service you provide and i got your number from ${i(h)}`,target:"_blank"},W,8,Q),l(i(p),{href:m.route("requestDetails",e.id)},{default:r(()=>[X]),_:2},1032,["href"]),t("a",{href:`tel:${e.user.phone}`,target:"_blank"},tt,8,Y)])]))),128))])])]),l(v,{paginations:o.props.links},null,8,["paginations"])]),_:1})],64))}},it=w(et,[["__scopeId","data-v-7429f90a"]]);export{it as default};
