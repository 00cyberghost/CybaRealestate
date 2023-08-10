import{o as b,a as g,b as e,c as a,d,u as n,w as h,F as _,H as y,e as s,t as l,k,q as m,L as w,p as x,m as C}from"./app.8edf34a8.js";import{_ as L}from"./DashboardLayout.1941c56a.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";const t=i=>(x("data-v-27e2e8b6"),i=i(),C(),i),B={class:"dashborad-box stat bg-white curved"},R=t(()=>s("h4",{class:"title"},"Manage Dashboard",-1)),E={class:"section-body"},S={class:"row"},D={class:"col-lg-3 col-md-6 col-xs-12 dar pro mr-3"},M={class:"item"},V=t(()=>s("div",{class:"icon"},[s("i",{class:"fas fa-laptop-house","aria-hidden":"true"})],-1)),H={class:"info"},N={class:"number"},F=t(()=>s("p",{class:"type ml-1"},"Published Property",-1)),P={class:"col-lg-3 col-md-6 col-xs-12 dar rev mr-3"},j={class:"item"},T=t(()=>s("div",{class:"icon"},[s("i",{class:"fas fa-star"})],-1)),q={class:"info"},A={class:"number"},O=t(()=>s("p",{class:"type ml-1"},"Rating",-1)),U={class:"col-lg-3 col-md-6 dar com mr-3"},Y={class:"item mb-0"},z=t(()=>s("div",{class:"icon"},[s("i",{class:"fas fa-eye"})],-1)),G={class:"info"},J={class:"number"},K=t(()=>s("p",{class:"type ml-1"},"Total Views",-1)),Q={class:"col-lg-3 col-md-6 dar booked"},W={class:"item mb-0"},X=t(()=>s("div",{class:"icon"},[s("i",{class:"fas fa-heart"})],-1)),Z={class:"info"},ss={class:"number"},ts=t(()=>s("p",{class:"type ml-1"},"Times Bookmarked",-1)),os={key:0,class:"dashborad-box curved"},es=t(()=>s("h4",{class:"title"},"Agents",-1)),as={class:"section-body"},is=t(()=>s("p",null,"Register Your agents through this link",-1)),ls={class:"row mt-3"},cs={class:"col-md-10 col-sm-10 col-10"},ds={class:"form-group"},ns=["value"],_s={class:"dashborad-box curved"},rs=t(()=>s("div",{class:"col-md-6 col-sm-6 col-6"},[s("h4",{class:"title"},"Listings")],-1)),hs={class:"section-body listing-table d-none",id:"listing-form"},ms={class:"table-responsive"},us={class:"table table-striped"},fs=t(()=>s("thead",null,[s("tr",null,[s("th",null,"Listing Name"),s("th",null,"Date"),s("th",null,"Views"),s("th",null,"Rating"),s("th",null,"Status"),s("th",null,"Edit")])],-1)),ps={class:"rating"},vs={class:"status"},bs={class:"active"},gs={class:"edit"},ys=t(()=>s("i",{class:"fa fa-pencil"},null,-1)),ks=t(()=>s("div",{class:"dashborad-box d-none"},[s("h4",{class:"title"},"Message"),s("div",{class:"section-body"},[s("div",{class:"messages"},[s("div",{class:"message"},[s("div",{class:"thumb"},[s("img",{class:"img-fluid",src:"images/testimonials/ts-1.jpg",alt:""})]),s("div",{class:"body"},[s("h6",null,"Mary Smith"),s("p",{class:"post-time"},"22 Minutes ago"),s("p",{class:"content mb-0 mt-2"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"),s("div",{class:"controller"},[s("ul",null,[s("li",null,[s("a",{href:"#"},[s("i",{class:"fa fa-eye"})])]),s("li",null,[s("a",{href:"#"},[s("i",{class:"far fa-trash-alt"})])])])])])])])])],-1)),ws={class:"dashborad-box curved"},xs={class:"row"},Cs={class:"col-md-6 col-sm-6 col-6"},Ls={class:"title"},Is={class:"section-body d-none",id:"review-form"},Bs={class:"messages"},Rs={class:"thumb"},Es=["src"],Ss={class:"body"},Ds={class:"post-time"},Ms={class:"content mb-0 mt-2"},Vs={class:"starts mb-0"},$s={key:0},Hs=t(()=>s("i",{class:"fa fa-star"},null,-1)),Ns=[Hs],Fs={key:1},Ps=t(()=>s("i",{class:"fa fa-star-o"},null,-1)),js=[Ps],Ts={key:2},qs=t(()=>s("i",{class:"fa fa-star"},null,-1)),As=[qs],Os={key:3},Us=t(()=>s("i",{class:"fa fa-star-o"},null,-1)),Ys=[Us],zs={key:4},Gs=t(()=>s("i",{class:"fa fa-star"},null,-1)),Js=[Gs],Ks={key:5},Qs=t(()=>s("i",{class:"fa fa-star-o"},null,-1)),Ws=[Qs],Xs={key:6},Zs=t(()=>s("i",{class:"fa fa-star"},null,-1)),st=[Zs],tt={key:7},ot=t(()=>s("i",{class:"fa fa-star-o"},null,-1)),et=[ot],at={key:8},it=t(()=>s("i",{class:"fa fa-star"},null,-1)),lt=[it],ct={key:9},dt=t(()=>s("i",{class:"fa fa-star-o"},null,-1)),nt=[dt],_t=t(()=>s("div",{class:"controller"},[s("ul",null,[s("li",null,[s("a",{href:"#"},[s("i",{class:"fa fa-eye"})])]),s("li",null,[s("a",{href:"#"},[s("i",{class:"far fa-trash-alt"})])])])],-1)),rt={__name:"Dashboard",props:{props:Object},setup(i){let u=location.hostname;const f=c=>{document.getElementById("review-form").classList.contains("d-none")==!0?(document.getElementById("review-form").classList.remove("d-none"),c.target.textContent="Hide Reviews"):(document.getElementById("review-form").classList.add("d-none"),c.target.textContent="Show Reviews")},p=c=>{document.getElementById("listing-form").classList.contains("d-none")==!0?(document.getElementById("listing-form").classList.remove("d-none"),c.target.textContent="Hide Listings"):(document.getElementById("listing-form").classList.add("d-none"),c.target.textContent="Show Listings")},v=()=>{var c=document.getElementById("myInput");c.select(),c.setSelectionRange(0,99999),document.execCommand("copy"),alert("Copied: "+c.value)};return b(()=>{$("body").addClass("inner-pages maxw1600 m0a dashboard-bd")}),g(()=>$("body").removeClass("inner-pages maxw1600 m0a dashboard-bd")),(c,r)=>(e(),a(_,null,[d(n(y),{title:"My Dashboard"}),d(L,{props:i.props},{default:h(()=>[s("div",B,[R,s("div",E,[s("div",S,[s("div",D,[s("div",M,[V,s("div",H,[s("h6",N,l(i.props.dashboard_count.dashboard_property_count),1),F])])]),s("div",P,[s("div",j,[T,s("div",q,[s("h6",A,l(i.props.average_review)+".0",1),O])])]),s("div",U,[s("div",Y,[z,s("div",G,[s("h6",J,l(i.props.user.views),1),K])])]),s("div",Q,[s("div",W,[X,s("div",Z,[s("h6",ss,l(i.props.dashboard_count.dashboard_bookmark_count),1),ts])])])])])]),c.$page.props.auth.user.category=="agency"?(e(),a("div",os,[es,s("div",as,[is,s("div",ls,[s("div",cs,[s("div",ds,[s("input",{type:"text",value:n(u)+"/register-agent/"+i.props.user.email,id:"myInput",class:"form-control"},null,8,ns)])]),s("div",{class:"col-md-2 col-sm-2 col-2"},[s("i",{onClick:v,class:"fa fa-copy"})])])])])):k("",!0),s("div",_s,[s("div",{class:"row"},[rs,s("div",{class:"col-md-6 col-sm-6 col-6"},[s("button",{id:"listing-form-button",onClick:p,type:"submit",class:"btn btn-primary btn-sm rounded curved p-2 pl-2 pr-2 borderless focus b-primary"},"show Listings")])]),s("div",hs,[s("div",ms,[s("table",us,[fs,s("tbody",null,[(e(!0),a(_,null,m(i.props.property.data,o=>(e(),a("tr",{key:o.id},[s("td",null,l(o.title),1),s("td",null,l(o.created_at_diff),1),s("td",null,l(o.views),1),s("td",ps,[s("span",null,l(o.average_property_review),1)]),s("td",vs,[s("span",bs,l(o.status),1)]),s("td",gs,[d(n(w),{href:c.route("editProperty",o.id)},{default:h(()=>[ys]),_:2},1032,["href"])])]))),128))])])])])]),ks,s("div",ws,[s("div",xs,[s("div",Cs,[s("h4",Ls,"Reviews ("+l(i.props.average_review)+".0)",1)]),s("div",{class:"col-md-6 col-sm-6 col-6"},[s("button",{id:"review-form-button",onClick:f,type:"submit",class:"btn btn-primary btn-sm rounded curved borderless p-2 pl-2 pr-2 focus b-primary"},"show Reviews")])]),s("div",Is,[s("div",Bs,[(e(!0),a(_,null,m(i.props.userReview.data,o=>(e(),a("div",{class:"message",key:o},[s("div",Rs,[s("img",{class:"img-fluid",src:`/photos/${o.photo}`,alt:""},null,8,Es)]),s("div",Ss,[s("h6",null,l(o.name),1),s("p",Ds,l(o.created_at_diff),1),s("p",Ms,l(o.review),1),s("ul",Vs,[o.star>0?(e(),a("li",$s,Ns)):(e(),a("li",Fs,js)),o.star>1?(e(),a("li",Ts,As)):(e(),a("li",Os,Ys)),o.star>2?(e(),a("li",zs,Js)):(e(),a("li",Ks,Ws)),o.star>3?(e(),a("li",Xs,st)):(e(),a("li",tt,et)),o.star>4?(e(),a("li",at,lt)):(e(),a("li",ct,nt))]),_t])]))),128))])])])]),_:1},8,["props"])],64))}},ft=I(rt,[["__scopeId","data-v-27e2e8b6"]]);export{ft as default};