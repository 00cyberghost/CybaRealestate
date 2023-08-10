import{j as I,o as S,a as O,r as C,b as n,c,e,k as u,l as v,w as t,d as a,n as i,u as g,f as r,t as y,F as P,p as w,m as M,q,i as F}from"./app.076dca62.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const k=h=>(w("data-v-73522bd8"),h=h(),M(),h),R={class:"offcanvas d-none p-3",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},N=k(()=>e("i",{class:"fas fa-times"},null,-1)),T=[N],B={class:"offcanvas-body"},H={class:"nav nav-tabs",id:"myTab",role:"tablist"},E={key:0,class:"nav-item",role:"presentation"},j=k(()=>e("button",{class:"nav-link active",id:"dashboard-tab","data-toggle":"tab","data-target":"#dashboard",type:"button",role:"tab","aria-controls":"dashboard","aria-selected":"false"},"Dashboard",-1)),V=[j],U=k(()=>e("li",{class:"nav-item",role:"presentation"},[e("button",{class:"nav-link",id:"home-tab","data-toggle":"tab","data-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"Home")],-1)),Y={class:"tab-content",id:"myTabContent"},z={key:0,class:"tab-pane fade show active",id:"dashboard",role:"tabpanel","aria-labelledby":"dashboard-tab"},K={key:0,class:"row mt-5"},W=r("Pending"),G=r("Dashboard"),J=r("Profile"),Q=r("My Properties"),X=r("My Favourites"),Z=r("My Property Alerts"),x=r("My Property Requests"),ee=r("Log Out"),se={key:1,class:"row mt-5"},oe=r("Dashboard"),te=r("Profile"),ae=r("My Properties"),re=r("Log Out"),le={key:2,class:"row mt-5"},ne=r("Dashboard"),ie=r("Profile"),de=r("My Favourites"),ce=r("My Property Alerts"),he=r("My Property Requests"),ue=r("Log Out"),fe={class:"tab-pane fade",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},_e={class:"row mt-5"},pe=r("Home"),ge=r("For Rent"),me=r("For Sale"),be=r("Shortlets"),ve=r("Agencies"),$e=r("Agents"),ke=r("Requests"),ye=r("About Us"),Pe=r("Faq"),De=r("Contact Us"),Ce=r("Register"),we=r("Login"),Me=r("Register"),Le=r("Log Out"),Ae={class:"dash-content-wrap"},Se={id:"header-container",class:"db-top-header"},Ie={id:"header"},Oe={class:"container-fluid"},qe={class:"left-side"},Fe={id:"logo"},Re=k(()=>e("img",{src:"/images/logo.svg",alt:""},null,-1)),Ne=k(()=>e("button",{class:"hamburger hamburger--collapse",type:"button"},[e("span",{class:"hamburger-box"},[e("span",{class:"hamburger-inner"})])],-1)),Te=[Ne],Be={id:"navigation",class:"style-1"},He={key:0,id:"responsive"},Ee=r("Home"),je=r("Profile"),Ve=r("My properties"),Ue=r("Favourites"),Ye={class:"d-none d-xl-none d-block d-lg-block"},ze=r("Log Out"),Ke={key:1,id:"responsive"},We=r("Home"),Ge=r("Profile"),Je=r("My properties"),Qe={class:"d-none d-xl-none d-block d-lg-block"},Xe=r("Log Out"),Ze={key:2,id:"responsive"},xe=r("Home"),es=r("Profile"),ss=r("Favourites"),os={class:"d-none d-xl-none d-block d-lg-block"},ts=r("Log Out"),as={class:"header-user-menu user-menu"},rs={class:"header-user-name"},ls=["src"],ns=r("Log Out"),is=k(()=>e("div",{class:"clearfix"},null,-1)),ds={__name:"DashboardHeader",setup(h){let o=I(!1);const f={changeColor:function(s){this.storeThemeColor(s),this.setThemeColor()},storeThemeColor:function(s){localStorage.setItem("theme-color",s)},getThemeColor:function(){return localStorage.getItem("theme-color")},setThemeColor:function(){let s=this.getThemeColor();document.querySelector("body").setAttribute("id",s)},darkMode:function(s){let p=document.getElementById("mode");s.target.classList.contains("checked")?(p.removeAttribute("href"),localStorage.removeItem("dark-mode"),o.value=!1):(p.setAttribute("href","css/colors/dark-mode.css"),localStorage.setItem("dark-mode","yes"),o.value=!0)},checkMode:function(){document.getElementById("mode").hasAttribute("href")&&(o.value=!0)}},d=()=>document.getElementById("offcanvasNavbar").classList.remove("d-none"),m=()=>document.getElementById("offcanvasNavbar").classList.add("d-none");return S(()=>{document.querySelectorAll(".offcanvas-body a").forEach(s=>{s.addEventListener("click",m)}),f.checkMode(),$("body").addClass("maxw1600 m0a dashboard-bd"),$("#wrapper").addClass("int_main_wraapper"),$(".dropdown-filter").on("click",function(){$(".explore__form-checkbox-list").toggleClass("filter-block")}),$(".header-user-name").on("click",function(){$(".header-user-menu ul").toggleClass("hu-menu-vis"),$(this).toggleClass("hu-menu-visdec")}),$(".user-menu").on("click",function(){$(this).toggleClass("active")})}),O(()=>{$("body").removeClass("maxw1600 m0a dashboard-bd")}),(s,p)=>{const l=C("Link");return n(),c(P,null,[e("div",R,[e("div",{class:"offcanvas-header"},[e("a",{href:"#",onClick:m},T)]),e("div",B,[e("ul",H,[s.$page.props.auth.user?(n(),c("li",E,V)):u("",!0),U]),e("div",Y,[s.$page.props.auth.user?(n(),c("div",z,[s.$page.props.auth.user.category=="agent"?(n(),c("div",K,[s.$page.props.auth.user.role_id>1?(n(),v(l,{key:0,class:"col-6 truncate",href:s.route("showPendingProperties")},{default:t(()=>[W]),_:1},8,["href"])):u("",!0),a(l,{class:"col-6",href:s.route("dashboard")},{default:t(()=>[G]),_:1},8,["href"]),a(l,{class:"col-6",href:s.route("profile")},{default:t(()=>[J]),_:1},8,["href"]),a(l,{class:"col-6 truncate",href:s.route("myProperties")},{default:t(()=>[Q]),_:1},8,["href"]),a(l,{class:"col-6 truncate",href:s.route("bookmarks")},{default:t(()=>[X]),_:1},8,["href"]),a(l,{class:"col-6 truncate",href:s.route("myAlerts")},{default:t(()=>[Z]),_:1},8,["href"]),a(l,{class:"col-6 truncate",href:s.route("myRequests")},{default:t(()=>[x]),_:1},8,["href"]),a(l,{class:"col-6",href:s.route("logout"),method:"post"},{default:t(()=>[ee]),_:1},8,["href"]),a(l,{class:"ui-elements col-6"},{default:t(()=>[e("div",{class:i(["checkbox-option pull-right mt-2",{checked:g(o)==!0}]),onClick:p[0]||(p[0]=(...b)=>f.darkMode&&f.darkMode(...b))},[e("div",{class:i(["inner",{checked:g(o)==!0}])},null,2),e("input",{type:"checkbox",name:"checkbox",value:"Checkbox",class:i({checked:g(o)==!0})},null,2)],2)]),_:1})])):u("",!0),s.$page.props.auth.user.category=="agency"?(n(),c("div",se,[a(l,{class:"col-6",href:s.route("dashboard")},{default:t(()=>[oe]),_:1},8,["href"]),a(l,{class:"col-6",href:s.route("profile")},{default:t(()=>[te]),_:1},8,["href"]),a(l,{class:"col-6 truncate",href:s.route("myProperties")},{default:t(()=>[ae]),_:1},8,["href"]),a(l,{class:"col-6",href:s.route("logout"),method:"post"},{default:t(()=>[re]),_:1},8,["href"]),a(l,{class:"ui-elements col-6"},{default:t(()=>[e("div",{class:i(["checkbox-option pull-right mt-2",{checked:g(o)==!0}]),onClick:p[1]||(p[1]=(...b)=>f.darkMode&&f.darkMode(...b))},[e("div",{class:i(["inner",{checked:g(o)==!0}])},null,2),e("input",{type:"checkbox",name:"checkbox",value:"Checkbox",class:i({checked:g(o)==!0})},null,2)],2)]),_:1})])):u("",!0),s.$page.props.auth.user.category=="customer"?(n(),c("div",le,[a(l,{class:"col-6",href:s.route("dashboard")},{default:t(()=>[ne]),_:1},8,["href"]),a(l,{class:"col-6",href:s.route("profile")},{default:t(()=>[ie]),_:1},8,["href"]),a(l,{class:"col-6 truncate",href:s.route("bookmarks")},{default:t(()=>[de]),_:1},8,["href"]),a(l,{class:"col-6 truncate",href:s.route("myAlerts")},{default:t(()=>[ce]),_:1},8,["href"]),a(l,{class:"col-6 truncate",href:s.route("myRequests")},{default:t(()=>[he]),_:1},8,["href"]),a(l,{class:"col-6",href:s.route("logout"),method:"post"},{default:t(()=>[ue]),_:1},8,["href"]),a(l,{class:"ui-elements col-6"},{default:t(()=>[e("div",{class:i(["checkbox-option pull-right mt-2",{checked:g(o)==!0}]),onClick:p[2]||(p[2]=(...b)=>f.darkMode&&f.darkMode(...b))},[e("div",{class:i(["inner",{checked:g(o)==!0}])},null,2),e("input",{type:"checkbox",name:"checkbox",value:"Checkbox",class:i({checked:g(o)==!0})},null,2)],2)]),_:1})])):u("",!0)])):u("",!0),e("div",fe,[e("div",_e,[a(l,{class:"col-4",href:s.route("home")},{default:t(()=>[pe]),_:1},8,["href"]),a(l,{class:"col-4",href:s.route("forRent")},{default:t(()=>[ge]),_:1},8,["href"]),a(l,{class:"col-4",href:s.route("forSale")},{default:t(()=>[me]),_:1},8,["href"]),a(l,{class:"col-4",href:s.route("forShortlet")},{default:t(()=>[be]),_:1},8,["href"]),a(l,{class:"col-4",href:s.route("agencies")},{default:t(()=>[ve]),_:1},8,["href"]),a(l,{class:"col-4",href:s.route("agents")},{default:t(()=>[$e]),_:1},8,["href"]),a(l,{class:"col-4",href:s.route("requests")},{default:t(()=>[ke]),_:1},8,["href"]),a(l,{class:"col-4",href:s.route("about")},{default:t(()=>[ye]),_:1},8,["href"]),a(l,{class:"col-4",href:s.route("faq")},{default:t(()=>[Pe]),_:1},8,["href"]),a(l,{class:"col-4",href:s.route("contact")},{default:t(()=>[De]),_:1},8,["href"]),s.$page.props.auth.user?u("",!0):(n(),v(l,{key:0,class:"col-4",href:s.route("register")},{default:t(()=>[Ce]),_:1},8,["href"])),s.$page.props.auth.user?u("",!0):(n(),v(l,{key:1,class:"col-4 d-none d-xl-none d-block d-lg-block",href:s.route("login")},{default:t(()=>[we]),_:1},8,["href"])),s.$page.props.auth.user?u("",!0):(n(),v(l,{key:2,class:"col-4 d-none d-xl-none d-block d-lg-block",href:s.route("register")},{default:t(()=>[Me]),_:1},8,["href"])),s.$page.props.auth.user?(n(),v(l,{key:3,class:"col-4 d-none d-xl-none d-block d-lg-block",href:s.route("logout"),method:"post",as:"button"},{default:t(()=>[Le]),_:1},8,["href"])):u("",!0),a(l,{class:"ui-elements"},{default:t(()=>[e("div",{class:i(["checkbox-option pull-right mt-2",{checked:g(o)==!0}]),onClick:p[3]||(p[3]=(...b)=>f.darkMode&&f.darkMode(...b))},[e("div",{class:i(["inner",{checked:g(o)==!0}])},null,2),e("input",{type:"checkbox",name:"checkbox",value:"Checkbox",class:i({checked:g(o)==!0})},null,2)],2)]),_:1})])])])])]),e("div",Ae,[e("header",Se,[e("div",Ie,[e("div",Oe,[e("div",qe,[e("div",Fe,[a(l,{href:s.route("home")},{default:t(()=>[Re]),_:1},8,["href"])]),e("div",{class:"mmenu-trigger",onClick:d},Te),e("nav",Be,[s.$page.props.auth.user.category=="agent"?(n(),c("ul",He,[e("li",null,[a(l,{href:s.route("home")},{default:t(()=>[Ee]),_:1},8,["href"])]),e("li",null,[a(l,{href:s.route("profile")},{default:t(()=>[je]),_:1},8,["href"])]),e("li",null,[a(l,{href:s.route("myProperties")},{default:t(()=>[Ve]),_:1},8,["href"])]),e("li",null,[a(l,{href:s.route("bookmarks")},{default:t(()=>[Ue]),_:1},8,["href"])]),e("li",Ye,[a(l,{as:"button",href:s.route("logout"),method:"post"},{default:t(()=>[ze]),_:1},8,["href"])])])):u("",!0),s.$page.props.auth.user.category=="agency"?(n(),c("ul",Ke,[e("li",null,[a(l,{href:s.route("home")},{default:t(()=>[We]),_:1},8,["href"])]),e("li",null,[a(l,{href:s.route("profile")},{default:t(()=>[Ge]),_:1},8,["href"])]),e("li",null,[a(l,{href:s.route("agencyProperties")},{default:t(()=>[Je]),_:1},8,["href"])]),e("li",Qe,[a(l,{as:"button",href:s.route("logout"),method:"post"},{default:t(()=>[Xe]),_:1},8,["href"])])])):u("",!0),s.$page.props.auth.user.category=="customer"?(n(),c("ul",Ze,[e("li",null,[a(l,{href:s.route("home")},{default:t(()=>[xe]),_:1},8,["href"])]),e("li",null,[a(l,{href:s.route("profile")},{default:t(()=>[es]),_:1},8,["href"])]),e("li",null,[a(l,{href:s.route("bookmarks")},{default:t(()=>[ss]),_:1},8,["href"])]),e("li",os,[a(l,{as:"button",href:s.route("logout"),method:"post"},{default:t(()=>[ts]),_:1},8,["href"])])])):u("",!0)])]),e("div",as,[e("div",rs,[e("span",null,[e("img",{src:`/photos/${s.$page.props.auth.user.image}`,alt:""},null,8,ls)]),r(y(s.$page.props.auth.user.name.slice(0,6)+"..")+"! ",1)]),e("ul",null,[e("li",null,[a(l,{class:"pl-3",href:s.route("logout"),method:"post",as:"button"},{default:t(()=>[ns]),_:1},8,["href"])])])])])])])]),is],64)}}},cs=L(ds,[["__scopeId","data-v-73522bd8"]]);const _=h=>(w("data-v-959035b1"),h=h(),M(),h),hs={class:"col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash"},us=_(()=>e("div",{class:"sidebar-header"},[e("img",{src:"/images/logo-blue.svg",alt:"header-logo2.png"})],-1)),fs={class:"header clearfix"},_s=["src"],ps={class:"active-user"},gs={key:0,class:"detail clearfix"},ms={class:"mb-0"},bs={key:0},vs=_(()=>e("i",{class:"far fa-clock"},null,-1)),$s=r(" Pending Properties "),ks={key:1},ys=_(()=>e("i",{class:"far fa-clock"},null,-1)),Ps=r(" Pending Properties "),Ds={key:2},Cs=_(()=>e("i",{class:"fa fa-trash"},null,-1)),ws=r(" Deleted Properties "),Ms=_(()=>e("i",{class:"fa fa-tachometer"},null,-1)),Ls=r(" Dashboard "),As=_(()=>e("i",{class:"fa fa-user"},null,-1)),Ss=r("Profile "),Is=_(()=>e("i",{class:"fa fa-list","aria-hidden":"true"},null,-1)),Os=r("My Properties "),qs=_(()=>e("i",{class:"fa fa-heart","aria-hidden":"true"},null,-1)),Fs=r("Favorited Properties "),Rs=_(()=>e("i",{class:"fas fa-laptop-house","aria-hidden":"true"},null,-1)),Ns=r("Add Property "),Ts=_(()=>e("i",{class:"fas fa-bell"},null,-1)),Bs=r("Alerts "),Hs=_(()=>e("i",{class:"fas fa-list"},null,-1)),Es=r("Request "),js=_(()=>e("i",{class:"fas fa-sign-out-alt"},null,-1)),Vs=r("Log Out "),Us={key:1,class:"detail clearfix"},Ys={class:"mb-0"},zs={key:0},Ks=_(()=>e("i",{class:"far fa-clock"},null,-1)),Ws=r(" Pending Properties "),Gs={key:1},Js=_(()=>e("i",{class:"far fa-clock"},null,-1)),Qs=r(" Pending Properties "),Xs={key:2},Zs=_(()=>e("i",{class:"fa fa-trash"},null,-1)),xs=r(" Deleted Properties "),eo=_(()=>e("i",{class:"fa fa-tachometer"},null,-1)),so=r(" Dashboard "),oo=_(()=>e("i",{class:"fa fa-user"},null,-1)),to=r("Profile "),ao=_(()=>e("i",{class:"fa fa-list","aria-hidden":"true"},null,-1)),ro=r("My Properties "),lo=_(()=>e("i",{class:"fas fa-sign-out-alt"},null,-1)),no=r("Log Out "),io={__name:"DashboardSidebar",setup(h){return(o,f)=>{const d=C("Link");return n(),c("div",hs,[e("div",{class:i(["user-profile-box mb-0",{scrollableSidebar:o.$page.props.auth.user.category=="agent"}])},[a(d,{href:o.route("home")},{default:t(()=>[us]),_:1},8,["href"]),e("div",fs,[e("img",{src:`/photos/${o.$page.props.auth.user.image}`,alt:"avatar",class:"img-fluid profile-img"},null,8,_s)]),e("div",ps,[e("h2",null,y(o.$page.props.auth.user.name),1)]),o.$page.props.auth.user.category=="agent"?(n(),c("div",gs,[e("ul",ms,[o.$page.props.auth.user.role_id==2?(n(),c("li",bs,[a(d,{href:o.route("showPendingProperties"),class:i({active:o.$page.component=="Dashboard/PendingProperties"})},{default:t(()=>[vs,$s]),_:1},8,["href","class"])])):u("",!0),o.$page.props.auth.user.role_id==3?(n(),c("li",ks,[a(d,{href:o.route("showPendingProperties"),class:i({active:o.$page.component=="Dashboard/PendingProperties"})},{default:t(()=>[ys,Ps]),_:1},8,["href","class"])])):u("",!0),o.$page.props.auth.user.role_id==3?(n(),c("li",Ds,[a(d,{href:o.route("showDeletedProperties"),class:i({active:o.$page.component=="Dashboard/DeletedProperties"})},{default:t(()=>[Cs,ws]),_:1},8,["href","class"])])):u("",!0),e("li",null,[a(d,{href:o.route("dashboard"),class:i({active:o.$page.component=="Dashboard/Dashboard"})},{default:t(()=>[Ms,Ls]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("profile"),class:i({active:o.$page.component=="Dashboard/Profile"})},{default:t(()=>[As,Ss]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("myProperties"),class:i({active:o.$page.component=="Dashboard/MyProperties"})},{default:t(()=>[Is,Os]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("bookmarks"),class:i({active:o.$page.component=="Dashboard/Bookmarks"})},{default:t(()=>[qs,Fs]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("addProperty"),class:i({active:o.$page.component=="Dashboard/AddProperty"})},{default:t(()=>[Rs,Ns]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("myAlerts"),class:i({active:o.$page.component=="Dashboard/MyAlerts"})},{default:t(()=>[Ts,Bs]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("myRequests"),class:i({active:o.$page.component=="Dashboard/MyRequests"})},{default:t(()=>[Hs,Es]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("logout"),method:"post",as:"button"},{default:t(()=>[js,Vs]),_:1},8,["href"])])])])):u("",!0),o.$page.props.auth.user.category=="agency"?(n(),c("div",Us,[e("ul",Ys,[o.$page.props.auth.user.role_id==2?(n(),c("li",zs,[a(d,{href:o.route("showPendingProperties"),class:i({active:o.$page.component=="Dashboard/PendingProperties"})},{default:t(()=>[Ks,Ws]),_:1},8,["href","class"])])):u("",!0),o.$page.props.auth.user.role_id==3?(n(),c("li",Gs,[a(d,{href:o.route("showPendingProperties"),class:i({active:o.$page.component=="Dashboard/PendingProperties"})},{default:t(()=>[Js,Qs]),_:1},8,["href","class"])])):u("",!0),o.$page.props.auth.user.role_id==3?(n(),c("li",Xs,[a(d,{href:o.route("showDeletedProperties"),class:i({active:o.$page.component=="Dashboard/DeletedProperties"})},{default:t(()=>[Zs,xs]),_:1},8,["href","class"])])):u("",!0),e("li",null,[a(d,{href:o.route("dashboard"),class:i({active:o.$page.component=="Dashboard/AgencyDashboard"})},{default:t(()=>[eo,so]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("profile"),class:i({active:o.$page.component=="Dashboard/Profile"})},{default:t(()=>[oo,to]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("agencyProperties"),class:i({active:o.$page.component=="Dashboard/AgencyProperties"})},{default:t(()=>[ao,ro]),_:1},8,["href","class"])]),e("li",null,[a(d,{href:o.route("logout"),method:"post",as:"button"},{default:t(()=>[lo,no]),_:1},8,["href"])])])])):u("",!0)],2)])}}},co=L(io,[["__scopeId","data-v-959035b1"]]),ho={class:"pagination-container"},uo={class:"pagination"},A={__name:"DashboardPagination",props:{paginations:Object},setup(h){return S(()=>{(()=>{let f=document.querySelectorAll(".page-link"),d=f.length-1;f[0].textContent="Previous",f[d].textContent="Next"})()}),(o,f)=>{const d=C("Link");return n(),c("div",ho,[e("nav",null,[e("ul",uo,[(n(!0),c(P,null,q(h.paginations,m=>(n(),c("li",{key:m.id,class:i(["page-item",{active:m.active}])},[a(d,{href:m.url,class:i(["page-link",{active:m.active}])},{default:t(()=>[r(y(m.label),1)]),_:2},1032,["href","class"])],2))),128))])])])}}};const D=h=>(w("data-v-c4260e27"),h=h(),M(),h),fo={class:"login-and-register-form modal alert-modal"},_o=D(()=>e("div",{class:"main-overlay"},null,-1)),po={class:"main-register-holder"},go={class:"main-register fl-wrap curved"},mo={key:0,class:"m-5 text-center"},bo={key:1,class:"m-5 text-center"},vo=D(()=>e("div",{class:"main-overlay"},null,-1)),$o=D(()=>e("h6",{class:"m-5 text-center"},"Are you sure you want to delete this ?",-1)),ko={class:"second-footer"},yo={class:"container"},Po=D(()=>e("p",null,[r("Made With "),e("i",{class:"fa fa-heart","aria-hidden":"true"}),r(),e("a",{target:"_blank",href:"https://cybaghost.com.ng"},"Cybaghost Technologies")],-1)),Do={__name:"DashboardFooter",props:{message:String},emits:["close","unClose"],setup(h,{emit:o}){const f=p=>{let l=p.target.getAttribute("data-one"),b=p.target.getAttribute("data-two");o("close",l,b),$(".modal").fadeOut()},d=()=>$(".modal").fadeOut();let s=new Date().getFullYear();return(p,l)=>(n(),c(P,null,[e("div",fo,[_o,e("div",po,[e("div",go,[h.message?(n(),c("h6",mo,y(h.message),1)):(n(),c("h6",bo,"Opertaion completed successfully")),e("div",{id:"tabs-container"},[e("ul",{class:"m-2 text-center justify-content-center"},[e("li",{class:""},[e("a",{"preserve-scroll":"",href:"javascript:void(0)",onClick:d},"OK")])])])])])]),e("div",{class:"login-and-register-form modal confirmation-modal"},[vo,e("div",{class:"main-register-holder"},[e("div",{class:"main-register fl-wrap curved"},[$o,e("div",{id:"tabs-container"},[e("ul",{class:"tabs-menu m-2 text-center justify-content-center"},[e("li",{class:"two"},[e("a",{onClick:d},"No")]),e("li",{class:"fl-r two"},[e("a",{onClick:f,id:"accept"},"Yes")])])])])])]),e("div",ko,[e("div",yo,[e("p",null,y(g(s))+" \xA9 Copyright - All Rights Reserved.",1),Po])])],64))}},Co=L(Do,[["__scopeId","data-v-c4260e27"]]),wo={class:"user-page section-padding"},Mo={class:"container-fluid"},Lo={class:"row"},Ao={class:"col-lg-9 col-md-12 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2"},So={key:0},Io={key:1},Oo=e("a",{"data-scroll":"",href:"#wrapper",class:"go-up"},[e("i",{class:"fa fa-angle-double-up","aria-hidden":"true"})],-1),Ro={__name:"DashboardLayout",props:{props:Object},setup(h){return(o,f)=>(n(),c(P,null,[a(cs),e("section",wo,[e("div",Mo,[e("div",Lo,[a(co),e("div",Ao,[F(o.$slots,"default",{onClose:f[0]||(f[0]=(...d)=>o.initiateDelete&&o.initiateDelete(...d))}),h.props?(n(),c("div",So,[h.props.property?(n(),v(A,{key:0,paginations:h.props.property.links},null,8,["paginations"])):h.props.links?(n(),v(A,{key:1,paginations:h.props.links},null,8,["paginations"])):u("",!0)])):u("",!0),o.$page.component=="Dashboard/DeletedProperties"?(n(),c("div",Io)):o.$page.component!="Dashboard/PendingProperties"?(n(),v(Co,{key:2})):u("",!0)])])])]),Oo],64))}};export{Co as D,Ro as _,A as a};
