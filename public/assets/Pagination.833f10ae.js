import{o as r,r as _,b as s,c as n,f as o,F as p,k as d,n as i,d as g,w as m,i as u,t as h}from"./app.6a98db12.js";const v={class:"team blog pt-5"},x={class:"container"},f={"aria-label":"...",class:"pt-0"},b={class:"pagination mt-0"},k={__name:"Pagination",props:{paginations:Object},setup(c){return r(()=>{(()=>{let t=document.querySelectorAll(".page-link"),a=t.length-1;t[0].textContent="Previous",t[a].textContent="Next"})()}),(l,t)=>{const a=_("Link");return s(),n("section",v,[o("div",x,[o("nav",f,[o("ul",b,[(s(!0),n(p,null,d(c.paginations,e=>(s(),n("li",{key:e.id,class:i(["page-item",{active:e.active}])},[g(a,{href:e.url,class:i(["page-link",{active:e.active}])},{default:m(()=>[u(h(e.label),1)]),_:2},1032,["href","class"])],2))),128))])])])])}}};export{k as _};