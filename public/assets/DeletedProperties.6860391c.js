import{j as P,r as A,b as i,c as u,d as n,u as f,w as c,F as m,H as F,e,q as I,s as h,l as S,k as x,t as d,f as y,g,p as B,m as w}from"./app.076dca62.js";import{_ as L,D as N}from"./DashboardLayout.0937fbe2.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const _=a=>(B("data-v-d91c4f09"),a=a(),w(),a),j={class:"my-properties"},E=_(()=>e("h1",{class:"mb-3"},"Properties that need approval",-1)),H={class:"table-responsive"},M=_(()=>e("thead",null,[e("tr",null,[e("th",{class:"pl-2"}),e("th",{class:"p-0"}),e("th",null,"Date Added"),e("th",null,"Actions")])],-1)),q={class:"image myelist"},O=["src"],T={class:"inner"},z=_(()=>e("i",{class:"lni-map-marker"},null,-1)),G={class:"starts text-left mb-0"},J=_(()=>e("i",{class:"fa fa-user"},null,-1)),K={class:"actions"},Q=["disabled","onClick","property-id"],R={href:"#"},U=["disabled","onClick","data-one"],W={__name:"DeletedProperties",props:{props:Object},setup(a){const p=s=>{let r=s.category.replaceAll(" ","-"),o=s.title.replaceAll(" ","-"),t=s.id,D=`for-${r}`,C=`${o}`.replaceAll("/","-");return[t,D,C]};let l=P(!1);const v=s=>{document.getElementById("accept").setAttribute("data-one",s.target.getAttribute("data-one")),$(".confirmation-modal").fadeIn()},b=s=>{h().delete(route("deletePropertyFinally",s),{onStart:()=>l.value=!0,onFinish:()=>l.value=!1})},k=s=>{let r=s.target.getAttribute("property-id");h().patch(route("restoreProperty",r),{onStart:()=>l.value=!0,onFinish:()=>l.value=!1})};return(s,r)=>{const o=A("Link");return i(),u(m,null,[n(f(F),{title:"Pending Properties"}),n(L,{props:a.props},{default:c(()=>[e("div",j,[E,e("table",H,[M,(i(!0),u(m,null,I(a.props.data,t=>(i(),u("tbody",{key:t.id},[e("tr",null,[e("td",q,[t.image?(i(),S(o,{key:0,href:s.route("propertyDetails",p(t))},{default:c(()=>[e("img",{alt:"my-properties-3",src:`/photos/${t.image.image_name}`,class:"img-fluid"},null,8,O)]),_:2},1032,["href"])):x("",!0)]),e("td",null,[e("div",T,[n(o,{href:s.route("propertyDetails",p(t))},{default:c(()=>[e("h2",null,d(t.title),1)]),_:2},1032,["href"]),e("address",null,[z,y(" "+d(t.location),1)]),e("span",G,[J,y(" "+d(t.user.name),1)])])]),e("td",null,d(t.created_at_diff),1),e("td",K,[n(o,{class:"edit"},{default:c(()=>[e("i",{disabled:f(l),"preserve-scroll":"",onClick:g(k,["prevent"]),"property-id":t.id,class:"fas fa-check"},null,8,Q)]),_:2},1024),e("a",R,[e("i",{disabled:f(l),"preserve-scroll":"",onClick:g(v,["prevent"]),"data-one":t.id,class:"far fa-trash-alt"},null,8,U)])])])]))),128))])]),n(N,{onClose:b})]),_:1},8,["props"])],64)}}},te=V(W,[["__scopeId","data-v-d91c4f09"]]);export{te as default};
