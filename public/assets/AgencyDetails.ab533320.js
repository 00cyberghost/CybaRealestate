import{o as k,a as y,b as l,l as D,w as a,e as s,c as d,q as f,F as g,t,d as i,u as n,L as c,f as h,k as u}from"./app.dd45c33b.js";import{_ as A}from"./GuestLayout.4292a761.js";import{R as L,_ as V}from"./Review.18639360.js";import{_ as C}from"./SideBar.40595378.js";import{_ as B}from"./Pagination.b5f27621.js";import"./Header.e739d21c.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./InputError.3fc5590f.js";/* empty css                                                               */const x={class:"blog blog-section portfolio single-proper details mb-0 agents homepage-4 det ag-de hd-white"},j={class:"container"},N={class:"row"},F={class:"col-lg-8 col-md-12 col-xs-12"},S=["user-id"],U={class:"col-md-12 col-xs-12"},E={class:"headings-2 pt-0 hee"},M={class:"pro-wrapper"},P={class:"detail-wrapper-body"},R={class:"listing-title-bar"},q={class:"text-heading text-left"},H=h("Home "),I=h(" \xA0/\xA0 "),O=s("span",null,"Agencies Single",-1),T=s("h3",null,"Agencies Single",-1),z={class:"news-item news-item-sm"},G={class:"news-item-img homes"},J={class:"homes-tag button alt featured"},K=["src"],Q={class:"news-item-text"},W={class:"the-agents"},X={class:"the-agents-details"},Y=["href"],Z=s("i",{class:"fa fa-whatsapp mr-3"},null,-1),ss=h(" Message"),es=[Z,ss],ts=["href"],os=s("i",{class:"fa fa-phone mr-3"},null,-1),is=h(" Call"),as=[os,is],ls=s("i",{class:"fa fa-envelope mr-3"},null,-1),ns={class:"blog-pots py-0"},cs={class:"blog-info details mb-30"},ds=s("h5",{class:"mb-4"},"Description",-1),hs={class:"mb-3"},_s={class:"similar-property featured portfolio bshd p-0 bg-white"},rs={class:"container-px-0"},us=s("h5",null,"Listing",-1),ms={class:"row"},fs={class:"project-single"},gs={class:"project-inner project-head"},ps={class:"homes"},vs=s("div",{class:"homes-tag button alt featured d-none"},"Featured",-1),bs={id:"overlay",class:"homes-tag button alt sale"},ws={class:"homes-price"},ks=["src"],$s={class:"button-effect"},ys=s("i",{class:"fa fa-link"},null,-1),Ds=["href"],As=s("i",{class:"fas fa-video"},null,-1),Ls=[As],Vs=s("i",{class:"fa fa-photo"},null,-1),Cs={class:"homes-content"},Bs={class:"homes-address mb-3"},xs=s("i",{class:"fa fa-map-marker"},null,-1),js={class:"homes-list clearfix"},Ns={key:0},Fs={key:1},Ss={key:2},Us={key:3},Es={class:"blog blog-section portfolio py-0 age bg-white"},Ms={class:"container"},Ps=s("h5",null,"Agents",-1),Rs={class:"row"},qs={class:"col-lg-12 col-md-12 col-xs-12"},Hs={class:"row"},Is={class:"news-item news-item-sm"},Os={class:"news-item-img homes"},Ts={class:"homes-tag button alt featured"},zs=["src"],Gs={class:"news-item-text"},Js={class:"the-agents"},Ks={class:"the-agents-details"},Qs=s("i",{class:"fa fa-phone"},null,-1),Ws=h(),Xs=["href"],Ys=s("i",{class:"fa fa-whatsapp"},null,-1),Zs=h(),se=["href"],ee=s("i",{class:"fa fa-envelope"},null,-1),te=h(),oe=["href"],ie={class:"news-item-bottom"},ae=h("View Listings"),le={class:"admin company"},ne=["src"],ce={class:"col-lg-4 col-md-12 car"},be={__name:"AgencyDetails",props:{agencies:Object},setup(_){const r=o=>{let m=o.category.replaceAll(" ","-"),e=o.title.replaceAll(" ","-"),v=o.id,b=`for-${m}`,w=`${e}`.replaceAll("/","-");return[v,b,w]},p=`https://${location.hostname}${location.pathname}`;return k(()=>{$("body").addClass("inner-pages agents homepage-4 det ag-de hd-white"),$("#dashboard-style").remove(),$("#wrapper").removeClass("int_main_wraapper"),(()=>{let m=document.getElementById("user-id").getAttribute("user-id");axios.put(route("updateUserViews",[m])).catch(e=>console.error(e))})()}),y(()=>{$("body").removeClass("inner-pages agents homepage-4 det ag-de hd-white")}),(o,m)=>(l(),D(A,null,{default:a(()=>[s("section",x,[s("div",j,[s("div",N,[s("div",F,[(l(!0),d(g,null,f(_.agencies.agency,e=>(l(),d("div",{class:"row",key:e.id,id:"user-id","user-id":e.id},[i(V,{title:e,desc:"agency"},null,8,["title"]),s("div",U,[s("section",E,[s("div",M,[s("div",P,[s("div",R,[s("div",q,[s("p",null,[i(n(c),{href:o.route("home")},{default:a(()=>[H]),_:1},8,["href"]),I,O])]),T])])])]),s("div",z,[i(n(c),{href:o.route("agencyDetails",e.id),class:"news-img-link"},{default:a(()=>[s("div",G,[s("div",J,t(_.agencies.agency_property_count)+" Listings",1),s("img",{class:"resp-img",src:`/photos/${e.photo}`,alt:"blog image"},null,8,K)])]),_:2},1032,["href"]),s("div",Q,[i(n(c),{href:o.route("agencyDetails",e.id)},{default:a(()=>[s("h3",null,t(e.name),1)]),_:2},1032,["href"]),s("div",W,[s("ul",X,[s("li",null,[s("a",{target:"_blank",href:`https://api.whatsapp.com/send?phone=+234${e.whatsapp}&text=hello i am interested in a service you provide and i got your number from ${o.domain_name}`},es,8,Y)]),s("li",null,[s("a",{target:"_blank",href:`tel:${e.phone}`},as,8,ts)]),s("li",null,[i(n(c),{"preserve-scroll":"",href:"#"},{default:a(()=>[ls,h(" "+t(e.email),1)]),_:2},1024)])])])])])])],8,S))),128)),s("div",ns,[s("div",cs,[ds,s("p",hs,t(_.agencies.agency[0].about)+".",1)]),s("section",_s,[s("div",rs,[us,s("div",ms,[(l(!0),d(g,null,f(_.agencies.properties.data,e=>(l(),d("div",{key:e.id,class:"item col-lg-6 col-md-6 col-xs-12 landscapes sale"},[s("div",fs,[i(n(c),{href:o.route("propertyDetails",r(e))},{default:a(()=>[s("div",gs,[s("div",ps,[i(n(c),{href:o.route("propertyDetails",r(e)),class:"homes-img"},{default:a(()=>[vs,s("div",bs,t(e.category),1),s("div",ws,t(e.amount),1),e.images.length>0?(l(),d("img",{key:0,src:`/photos/${e.images[0].image_name}`,alt:"home-1",class:"img-responsive"},null,8,ks)):u("",!0)]),_:2},1032,["href"])]),s("div",$s,[i(n(c),{href:o.route("propertyDetails",r(e)),class:"btn"},{default:a(()=>[ys]),_:2},1032,["href"]),e.video?(l(),d("a",{key:0,href:e.video.replace(")","https://").replaceAll("(","."),class:"btn popup-video popup-youtube"},Ls,8,Ds)):u("",!0),i(n(c),{href:o.route("propertyDetails",r(e)),class:"img-poppu btn"},{default:a(()=>[Vs]),_:2},1032,["href"])])])]),_:2},1032,["href"]),s("div",Cs,[s("h3",null,[i(n(c),{href:o.route("propertyDetails",r(e))},{default:a(()=>[h(t(e.title),1)]),_:2},1032,["href"])]),s("p",Bs,[i(n(c),{href:o.route("propertyDetails",r(e))},{default:a(()=>[xs,s("span",null,t(e.location),1)]),_:2},1032,["href"])]),s("ul",js,[e.bedroom>0?(l(),d("li",Ns,[s("span",null,t(e.bedroom)+" Bedroom",1)])):u("",!0),e.bathroom>0?(l(),d("li",Fs,[s("span",null,t(e.bathroom)+" bathroom",1)])):u("",!0),e.area>0?(l(),d("li",Ss,[s("span",null,t(e.area)+"/"+t(e.unit),1)])):u("",!0),e.parking>0?(l(),d("li",Us,[s("span",null,t(e.parking)+" Cars",1)])):u("",!0)])])])]))),128))])])]),s("section",Es,[s("div",Ms,[Ps,s("div",Rs,[s("div",qs,[s("div",Hs,[(l(!0),d(g,null,f(_.agencies.agents.data,e=>(l(),d("div",{key:e.id,class:"col-md-12 col-xs-12"},[s("div",Is,[i(n(c),{href:o.route("agentDetails",e.id),class:"news-img-link"},{default:a(()=>[s("div",Os,[s("div",Ts,t(e.agent_property_count)+" Listings",1),s("img",{class:"resp-img",src:`/photos/${e.photo}`,alt:"blog image"},null,8,zs)])]),_:2},1032,["href"]),s("div",Gs,[i(n(c),{href:o.route("agentDetails",e.id)},{default:a(()=>[s("h3",null,t(e.name),1)]),_:2},1032,["href"]),s("div",Js,[s("ul",Ks,[s("li",null,[s("a",null,t(e.name),1)]),s("li",null,[Qs,Ws,s("a",{href:`tel:${e.phone}`},t(e.phone.slice(0,6))+"...",9,Xs)]),s("li",null,[Ys,Zs,s("a",{href:`whatsapp://send?phone=+234${e.whatsapp}&text=hello i am interested in your services and i saw your profile here ${p}`,target:"_blank"},t(e.whatsapp.slice(0,6))+"...",9,se)]),s("li",null,[ee,te,s("a",{target:"_blank",href:`mailto:${e.email}`},t(e.email),9,oe)])])]),s("div",ie,[i(n(c),{href:o.route("agentDetails",e.id),class:"news-link"},{default:a(()=>[ae]),_:2},1032,["href"]),s("div",le,[s("p",null,t(_.agencies.agency[0].name),1),s("img",{src:`/photos/${_.agencies.agency[0].photo}`,alt:""},null,8,ne)])])])])]))),128))])])])])]),i(L,{user_id:_.agencies.agency[0].id},null,8,["user_id"]),i(B,{paginations:_.agencies.properties.links},null,8,["paginations"])])]),s("aside",ce,[i(C)])])])])]),_:1}))}};export{be as default};
