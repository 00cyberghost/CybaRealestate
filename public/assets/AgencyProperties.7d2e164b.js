import{o as y,r as k,b as e,c as l,d as n,u as g,w as c,F as h,H as v,e as s,q as p,l as w,k as b,t as i,f as u}from"./app.63348114.js";import{_ as A}from"./DashboardLayout.757b0d8e.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C={class:"my-properties"},V={class:"table-responsive"},B=s("thead",null,[s("tr",null,[s("th",{class:"pl-2"},"My Properties"),s("th",{class:"p-0"}),s("th",null,"Date Added"),s("th",null,"Views"),s("th",null,"Actions")])],-1),D={class:"image myelist"},L=["src"],N={class:"inner"},M=s("i",{class:"lni-map-marker"},null,-1),P={class:"starts text-left mb-0"},x={key:0},E=s("i",{class:"fa fa-star"},null,-1),F=[E],H={key:1},j=s("i",{class:"fa fa-star-o"},null,-1),q=[j],O={key:2},R=s("i",{class:"fa fa-star"},null,-1),S=[R],T={key:3},z=s("i",{class:"fa fa-star-o"},null,-1),G=[z],I={key:4},J=s("i",{class:"fa fa-star"},null,-1),K=[J],Q={key:5},U=s("i",{class:"fa fa-star-o"},null,-1),W=[U],X={key:6},Y=s("i",{class:"fa fa-star"},null,-1),Z=[Y],ss={key:7},ts=s("i",{class:"fa fa-star-o"},null,-1),es=[ts],ls={key:8},as=s("i",{class:"fa fa-star"},null,-1),os=[as],is={key:9},ns=s("i",{class:"fa fa-star-o"},null,-1),cs=[ns],_s={class:"ml-3"},ds={class:"actions"},rs=s("i",{class:"lni-pencil"},null,-1),hs=u("Edit"),us=s("a",{href:"#"},[s("i",{class:"far fa-trash-alt"})],-1),gs={__name:"AgencyProperties",props:{props:Object},setup(_){const d=a=>{let r=a.category.replaceAll(" ","-"),o=a.title.replaceAll(" ","-"),t=a.id,f=`for-${r}`,m=`${o}`.replaceAll("/","-");return[t,f,m]};return y(()=>{$(".header-user-name").on("click",function(){$(".header-user-menu ul").toggleClass("hu-menu-vis"),$(this).toggleClass("hu-menu-visdec")})}),(a,r)=>{const o=k("Link");return e(),l(h,null,[n(g(v),{title:"My properties"}),n(A,{props:_.props},{default:c(()=>[s("div",C,[s("table",V,[B,(e(!0),l(h,null,p(_.props.data,t=>(e(),l("tbody",{key:t.id},[s("tr",null,[s("td",D,[t.image?(e(),w(o,{key:0,href:a.route("propertyDetails",d(t))},{default:c(()=>[s("img",{alt:"my-properties-3",src:`/photos/${t.image.image_name}`,class:"img-fluid"},null,8,L)]),_:2},1032,["href"])):b("",!0)]),s("td",null,[s("div",N,[n(o,{href:a.route("propertyDetails",d(t))},{default:c(()=>[s("h2",null,i(t.title),1)]),_:2},1032,["href"]),s("address",null,[M,u(" "+i(t.location),1)]),s("ul",P,[t.star>0?(e(),l("li",x,F)):(e(),l("li",H,q)),t.star>1?(e(),l("li",O,S)):(e(),l("li",T,G)),t.star>2?(e(),l("li",I,K)):(e(),l("li",Q,W)),t.star>3?(e(),l("li",X,Z)):(e(),l("li",ss,es)),t.star>4?(e(),l("li",ls,os)):(e(),l("li",is,cs)),s("li",_s,"("+i(t.total_review)+" Reviews)",1)])])]),s("td",null,i(t.created_at_diff),1),s("td",null,i(t.views)+" views",1),s("td",ds,[n(o,{href:a.route("editProperty",t.id),class:"edit"},{default:c(()=>[rs,hs]),_:2},1032,["href"]),us])])]))),128))])])]),_:1},8,["props"])],64)}}};export{gs as default};