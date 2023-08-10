import{o as F,a as L,b as r,c as h,m as p,w as i,u as l,i as f,d as c,F as y,e as t,t as a,H as N,L as d,q as C,f as u,p as D,k as B}from"./app.d90bbe21.js";import{G as H}from"./GuestLayout.b53f0dbb.js";import{_ as E}from"./SearchPagination.52929367.js";import{_ as R}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Header.bc701b30.js";const o=s=>(D("data-v-6bc529e7"),s=s(),B(),s),j=["content"],S=["content"],V=["content"],A=["content"],I=o(()=>t("meta",{property:"og:type",content:"website"},null,-1)),P=["content"],T=o(()=>t("meta",{name:"twitter:card",content:"summary_large_image"},null,-1)),x=["content"],q=["content"],G=["content"],O=["content"],M=["content"],U={class:"properties-list featured portfolio blog"},z={class:"container"},J={class:"headings-2 pt-0 pb-0"},K={class:"pro-wrapper"},Q={class:"detail-wrapper-body"},W={class:"listing-title-bar"},X={class:"text-heading text-left"},Y=u("Home "),Z=u(" \xA0/\xA0 "),tt=o(()=>t("span",null,"Listings",-1)),et={key:0,class:"headings-2 pt-0"},st={class:"pro-wrapper"},at={class:"detail-wrapper-body"},ot={class:"listing-title-bar"},lt={class:"text-heading text-left"},nt={class:"font-weight-bold mb-0 mt-3"},it={key:1,class:"property-location curved mb-5"},rt={key:0},ct={class:"row featured portfolio-items"},dt={class:"project-single","data-aos":"fade-up"},ht={class:"project-inner project-head"},_t={class:"project-bottom"},ut=u("View Property"),ft=o(()=>t("span",{class:"category"},"Real Estate",-1)),mt={class:"homes"},pt=o(()=>t("div",{class:"homes-tag button alt featured d-none"},"Featured",-1)),gt={id:"overlay",class:"homes-tag button alt sale"},yt={class:"homes-price"},vt=["src"],bt={class:"button-effect"},kt=o(()=>t("i",{class:"fa fa-link"},null,-1)),wt=["href"],$t=o(()=>t("i",{class:"fas fa-video"},null,-1)),Ft=[$t],Lt=o(()=>t("i",{class:"fa fa-photo"},null,-1)),Nt={class:"homes-content"},Ct={class:"truncate"},Dt={class:"homes-address mb-3 truncate"},Bt=o(()=>t("i",{class:"fa fa-map-marker"},null,-1)),Ht={class:"homes-list clearfix pb-3"},Et={class:"the-icons"},Rt=o(()=>t("i",{class:"flaticon-bed mr-2","aria-hidden":"true"},null,-1)),jt={class:"the-icons"},St=o(()=>t("i",{class:"flaticon-bathtub mr-2","aria-hidden":"true"},null,-1)),Vt={key:0,class:"the-icons"},At=o(()=>t("i",{class:"flaticon-square mr-2","aria-hidden":"true"},null,-1)),It={class:"the-icons"},Pt=o(()=>t("i",{class:"flaticon-car mr-2","aria-hidden":"true"},null,-1)),Tt={key:0,class:"price-properties"},xt={class:"title mt-3"},qt={class:"compare"},Gt=o(()=>t("a",{href:"#",title:"Compare"},[t("i",{class:"fas fa-exchange-alt"})],-1)),Ot=o(()=>t("a",{href:"#",title:"Share"},[t("i",{class:"fas fa-share-alt"})],-1)),Mt=o(()=>t("i",{class:"fa fa-heart"},null,-1)),Ut=o(()=>t("i",{class:"flaticon-heart"},null,-1)),zt={key:1,class:"price-properties"},Jt={class:"title mt-3"},Kt={class:"compare"},Qt=o(()=>t("a",{href:"#",title:"Compare"},[t("i",{class:"fas fa-exchange-alt"})],-1)),Wt=o(()=>t("a",{href:"#",title:"Share"},[t("i",{class:"fas fa-share-alt"})],-1)),Xt=o(()=>t("i",{class:"flaticon-heart"},null,-1)),Yt={class:"footer"},Zt=o(()=>t("i",{class:"fa fa-user"},null,-1)),te=o(()=>t("i",{class:"fa fa-calendar"},null,-1)),ee={__name:"ForRent",props:{props:Object,stat:Object},setup(s){const _=n=>{let g=n.category.replaceAll(" ","-"),e=n.title.replaceAll(" ","-"),b=n.id,k=`for-${g}`,w=`${e}`.replaceAll("/","-");return[b,k,w]};let m=location.hostname,v=location.hostname+location.pathname;return F(()=>{$("body").addClass("inner-pages st-1 agents hp-6 full hd-white"),$(".dropdown-filter").on("click",function(){$(".explore__form-checkbox-list").toggleClass("filter-block")})}),L(()=>$("body").removeClass("inner-pages st-1 agents hp-6 full hd-white")),(n,g)=>(r(),h(y,null,[s.props.data.length>0?(r(),p(l(N),{key:0},{default:i(()=>[t("title",null,"Houses, Flats, Lands and real estate for "+a(s.props.data[0].category)+" in my area and Nigeria ("+a(s.stat.statcount)+" available)",1),t("meta",{name:"description",content:`Real Estate for ${s.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,j),t("meta",{property:"og:url",content:`https://${l(v)}`},null,8,S),t("meta",{property:"og:image",content:`https://${l(m)}/photos/${s.props.data[0].image.image_name}`},null,8,V),t("meta",{property:"og:title",content:`Houses, Flats, Lands and real estate for ${s.props.data[0].category} in my area and Nigeria`},null,8,A),I,t("meta",{property:"og:description",content:`Real Estate for ${s.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,P),T,t("meta",{name:"twitter:site",content:`https://${l(m)}`},null,8,x),t("meta",{name:"twitter:creator",content:`https://${l(m)}`},null,8,q),t("meta",{name:"twitter:image",content:`https://${l(m)}/photos/${s.props.data[0].image.image_name}`},null,8,G),t("meta",{name:"twitter:title",content:`Houses, Flats, Lands and real estate for ${s.props.data[0].category} in my area and Nigeria`},null,8,O),t("meta",{name:"twitter:description",content:`Real Estate for ${s.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,M)]),_:1})):f("",!0),c(H,null,{default:i(()=>[t("section",U,[t("div",z,[t("section",J,[t("div",K,[t("div",Q,[t("div",W,[t("div",X,[t("p",null,[c(l(d),{href:n.route("home")},{default:i(()=>[Y]),_:1},8,["href"]),Z,tt])])])])])]),s.props.data.length>0?(r(),h("section",et,[t("div",st,[t("div",at,[t("div",ot,[t("div",lt,[t("p",nt,a(s.props.to)+" of "+a(s.props.total)+" results",1)])])])])])):f("",!0),s.props.data.length>0?(r(),h("div",it,[t("p",null,[s.stat?(r(),h("span",rt," There are "+a(s.stat.statcount)+" listings for "+a(s.props.data[0].category)+" in Nigeria. The average price of listings for "+a(s.props.data[0].category)+" in Nigeria is \u20A6"+a(s.stat.average)+". The most expensive listing costs \u20A6"+a(s.stat.max)+" while the cheapest costs \u20A6"+a(s.stat.min)+". ",1)):f("",!0)])])):f("",!0),t("div",ct,[(r(!0),h(y,null,C(s.props.data,e=>(r(),h("div",{key:e.id,class:"item col-lg-4 col-md-6 col-xs-12 landscapes sale"},[t("div",dt,[c(l(d),{href:n.route("propertyDetails",_(e))},{default:i(()=>[t("div",ht,[t("div",_t,[t("h4",null,[c(l(d),{href:n.route("propertyDetails",_(e))},{default:i(()=>[ut]),_:2},1032,["href"]),ft])]),t("div",mt,[c(l(d),{href:n.route("propertyDetails",_(e)),class:"homes-img"},{default:i(()=>[pt,t("div",gt,"For "+a(e.category),1),t("div",yt,a(e.type),1),e.image?(r(),h("img",{key:0,src:`/photos/${e.image.image_name}`,alt:"home-1",class:"img-responsive"},null,8,vt)):f("",!0)]),_:2},1032,["href"])]),t("div",bt,[c(l(d),{href:n.route("propertyDetails",_(e)),class:"btn"},{default:i(()=>[kt]),_:2},1032,["href"]),e.video?(r(),h("a",{key:0,href:e.video.replace(")","https://").replaceAll("(","."),class:"btn popup-video popup-youtube"},Ft,8,wt)):f("",!0),c(l(d),{href:n.route("propertyDetails",_(e)),class:"img-poppu btn"},{default:i(()=>[Lt]),_:2},1032,["href"])])])]),_:2},1032,["href"]),t("div",Nt,[t("h3",Ct,[c(l(d),{href:n.route("propertyDetails",_(e))},{default:i(()=>[u(a(e.title),1)]),_:2},1032,["href"])]),t("p",Dt,[c(l(d),{href:n.route("propertyDetails",_(e))},{default:i(()=>[Bt,t("span",null,a(e.location),1)]),_:2},1032,["href"])]),t("ul",Ht,[t("li",Et,[Rt,t("span",null,a(e.bedroom)+" Bedrooms",1)]),t("li",jt,[St,t("span",null,a(e.bathroom)+" Bathrooms",1)]),e.area?(r(),h("li",Vt,[At,t("span",null,a(e.area)+"/"+a(e.unit),1)])):f("",!0),t("li",It,[Pt,t("span",null,a(e.parking)+" Cars",1)])]),n.$page.props.auth.user?(r(),h("div",Tt,[t("h3",xt,[c(l(d),{href:n.route("propertyDetails",_(e))},{default:i(()=>[u(a(e.amount),1)]),_:2},1032,["href"])]),t("div",qt,[Gt,Ot,e.bookmarks.length>0?(r(),p(l(d),{key:0,"preserve-scroll":"",href:n.route("deleteBookmark",e.bookmarks[0].id),title:"Favorites"},{default:i(()=>[Mt]),_:2},1032,["href"])):(r(),p(l(d),{key:1,"preserve-scroll":"",href:n.route("addBookmark",e.id),title:"Favorites"},{default:i(()=>[Ut]),_:2},1032,["href"]))])])):(r(),h("div",zt,[t("h3",Jt,[c(l(d),{href:n.route("propertyDetails",_(e))},{default:i(()=>[u(a(e.amount),1)]),_:2},1032,["href"])]),t("div",Kt,[Qt,Wt,c(l(d),{"preserve-scroll":"",href:n.route("addBookmark",e.id),title:"Favorites"},{default:i(()=>[Xt]),_:2},1032,["href"])])])),t("div",Yt,[c(l(d),{href:n.route("agentDetails",e.user.id)},{default:i(()=>[Zt,u(" "+a(e.user.name),1)]),_:2},1032,["href"]),t("span",null,[te,u(" "+a(e.created_at_diff),1)])])])])]))),128))]),c(E,{paginations:s.props.links},null,8,["paginations"])])])]),_:1})],64))}},re=R(ee,[["__scopeId","data-v-6bc529e7"]]);export{re as default};