import{o as P,r as w,b as r,c as s,e as i,F as C,q as L,n as c,d as S,w as N,f as q,t as B,u as V}from"./app.70a660d0.js";const F={class:"team blog pt-5"},j={class:"container"},z={"aria-label":"...",class:"pt-0"},A={class:"pagination mt-0"},E={__name:"SearchPagination",props:{paginations:Object},setup(l){let p=window.location.search,e=new URLSearchParams(p),g=e.get("category"),m=e.get("location"),u=e.get("type"),d=e.get("subtype"),_=e.get("minprice"),h=e.get("maxprice"),b=e.get("ref"),y=e.get("bedroom"),$=e.get("bathroom"),f=e.get("parking"),x=e.get("area"),v=e.get("unit"),o=`&category=${g}&location=${m}&type=${u}&subtype=${d}&minprice=${_}`;return o+=`&maxprice=${h}&ref=${b}&bedroom=${y}&bathroom=${$}&parking=${f}`,o+=`&area=${x}&unit=${v}`,P(()=>{(()=>{let a=document.querySelectorAll(".page-link"),n=a.length-1;a[0].textContent="Previous",a[n].textContent="Next"})()}),(k,a)=>{const n=w("Link");return r(),s("section",F,[i("div",j,[i("nav",z,[i("ul",A,[(r(!0),s(C,null,L(l.paginations,t=>(r(),s("li",{key:t.id,class:c(["page-item",{active:t.active}])},[S(n,{href:t.url+V(o),class:c(["page-link",{active:t.active}])},{default:N(()=>[q(B(t.label),1)]),_:2},1032,["href","class"])],2))),128))])])])])}}};export{E as _};
