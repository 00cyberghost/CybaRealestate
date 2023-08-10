import{o as F,a as N,b as d,c as h,l as p,w as n,u as l,k as f,d as r,F as y,e as t,t as a,H as C,L as c,q as D,f as u,p as L,m as B}from"./app.dd45c33b.js";import{_ as H}from"./GuestLayout.4292a761.js";import{_ as S}from"./SearchPagination.a902ef11.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Header.e739d21c.js";const o=s=>(L("data-v-8a2c8a8e"),s=s(),B(),s),j=["content"],V=["content"],A=["content"],I=["content"],P=o(()=>t("meta",{property:"og:type",content:"website"},null,-1)),R=o(()=>t("meta",{property:"og:description",content:"Real Estate for {{ props.data[0].category }} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments"},null,-1)),T=o(()=>t("meta",{name:"twitter:card",content:"summary_large_image"},null,-1)),x=["content"],q=["content"],O=["content"],M=["content"],U=["content"],z={class:"properties-list featured portfolio blog"},G={class:"container"},J={class:"headings-2 pt-0 pb-0"},K={class:"pro-wrapper"},Q={class:"detail-wrapper-body"},W={class:"listing-title-bar"},X={class:"text-heading text-left"},Y=u("Home "),Z=u(" \xA0/\xA0 "),tt=o(()=>t("span",null,"Listings",-1)),et={key:0,class:"headings-2 pt-0"},st={class:"pro-wrapper"},at={class:"detail-wrapper-body"},ot={class:"listing-title-bar"},lt={class:"text-heading text-left"},it={class:"font-weight-bold mb-0 mt-3"},nt={class:"property-location curved mb-5"},rt={key:0},ct={class:"row featured portfolio-items"},dt={class:"project-single","data-aos":"fade-up"},ht={class:"project-inner project-head"},_t={class:"project-bottom"},ut=u("View Property"),ft=o(()=>t("span",{class:"category"},"Real Estate",-1)),mt={class:"homes"},pt=o(()=>t("div",{class:"homes-tag button alt featured d-none"},"Featured",-1)),gt={id:"overlay",class:"homes-tag button alt sale"},yt={class:"homes-price"},vt=["src"],bt={class:"button-effect"},kt=o(()=>t("i",{class:"fa fa-link"},null,-1)),wt=["href"],$t=o(()=>t("i",{class:"fas fa-video"},null,-1)),Ft=[$t],Nt=o(()=>t("i",{class:"fa fa-photo"},null,-1)),Ct={class:"homes-content"},Dt={class:"truncate"},Lt={class:"homes-address mb-3 truncate"},Bt=o(()=>t("i",{class:"fa fa-map-marker"},null,-1)),Ht={class:"homes-list clearfix pb-3"},St={class:"the-icons"},Et=o(()=>t("i",{class:"flaticon-bed mr-2","aria-hidden":"true"},null,-1)),jt={class:"the-icons"},Vt=o(()=>t("i",{class:"flaticon-bathtub mr-2","aria-hidden":"true"},null,-1)),At={key:0,class:"the-icons"},It=o(()=>t("i",{class:"flaticon-square mr-2","aria-hidden":"true"},null,-1)),Pt={class:"the-icons"},Rt=o(()=>t("i",{class:"flaticon-car mr-2","aria-hidden":"true"},null,-1)),Tt={key:0,class:"price-properties"},xt={class:"title mt-3"},qt={class:"compare"},Ot=o(()=>t("a",{href:"#",title:"Compare"},[t("i",{class:"fas fa-exchange-alt"})],-1)),Mt=o(()=>t("a",{href:"#",title:"Share"},[t("i",{class:"fas fa-share-alt"})],-1)),Ut=o(()=>t("i",{class:"fa fa-heart"},null,-1)),zt=o(()=>t("i",{class:"flaticon-heart"},null,-1)),Gt={key:1,class:"price-properties"},Jt={class:"title mt-3"},Kt={class:"compare"},Qt=o(()=>t("a",{href:"#",title:"Compare"},[t("i",{class:"fas fa-exchange-alt"})],-1)),Wt=o(()=>t("a",{href:"#",title:"Share"},[t("i",{class:"fas fa-share-alt"})],-1)),Xt=o(()=>t("i",{class:"flaticon-heart"},null,-1)),Yt={class:"footer"},Zt=o(()=>t("i",{class:"fa fa-user"},null,-1)),te=o(()=>t("i",{class:"fa fa-calendar"},null,-1)),ee={__name:"ForSale",props:{props:Object,stat:Object},setup(s){const _=i=>{let g=i.category.replaceAll(" ","-"),e=i.title.replaceAll(" ","-"),b=i.id,k=`for-${g}`,w=`${e}`.replaceAll("/","-");return[b,k,w]};let m=location.hostname,v=location.hostname+location.pathname;return F(()=>{$("body").addClass("inner-pages st-1 agents hp-6 full hd-white"),$(".dropdown-filter").on("click",function(){$(".explore__form-checkbox-list").toggleClass("filter-block")})}),N(()=>$("body").removeClass("inner-pages st-1 agents hp-6 full hd-white")),(i,g)=>(d(),h(y,null,[s.props.data.length>0?(d(),p(l(C),{key:0},{default:n(()=>[t("title",null,"Houses, Flats, Lands and real estate for "+a(s.props.data[0].category)+" in my area and Nigeria ("+a(s.stat.statcount)+" available)",1),t("meta",{name:"description",content:`Real Estate for ${s.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,j),t("meta",{property:"og:url",content:`https://${l(v)}`},null,8,V),t("meta",{property:"og:image",content:`https://${l(m)}/photos/${s.props.data[0].image.image_name}`},null,8,A),t("meta",{property:"og:title",content:`Houses, Flats, Lands and real estate for ${s.props.data[0].category} in my area and Nigeria`},null,8,I),P,R,T,t("meta",{name:"twitter:site",content:`https://${l(m)}`},null,8,x),t("meta",{name:"twitter:creator",content:`https://${l(m)}`},null,8,q),t("meta",{name:"twitter:image",content:`https://${l(m)}/photos/${s.props.data[0].image.image_name}`},null,8,O),t("meta",{name:"twitter:title",content:`Houses, Flats, Lands and real estate for ${s.props.data[0].category} in my area and Nigeria`},null,8,M),t("meta",{name:"twitter:description",content:`Real Estate for ${s.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,U)]),_:1})):f("",!0),r(H,null,{default:n(()=>[t("section",z,[t("div",G,[t("section",J,[t("div",K,[t("div",Q,[t("div",W,[t("div",X,[t("p",null,[r(l(c),{href:i.route("home")},{default:n(()=>[Y]),_:1},8,["href"]),Z,tt])])])])])]),s.props.data.length>0?(d(),h("section",et,[t("div",st,[t("div",at,[t("div",ot,[t("div",lt,[t("p",it,a(s.props.to)+" of "+a(s.props.total)+" results",1)])])])])])):f("",!0),t("div",nt,[t("p",null,[s.stat?(d(),h("span",rt," There are "+a(s.stat.statcount)+" listings for "+a(s.props.data[0].category)+" in Nigeria. The average price of listings for "+a(s.props.data[0].category)+" in Nigeria is \u20A6"+a(s.stat.average)+". The most expensive listing costs \u20A6"+a(s.stat.max)+" while the cheapest costs \u20A6"+a(s.stat.min)+". ",1)):f("",!0)])]),t("div",ct,[(d(!0),h(y,null,D(s.props.data,e=>(d(),h("div",{key:e.id,class:"item col-lg-4 col-md-6 col-xs-12 landscapes sale"},[t("div",dt,[r(l(c),{href:i.route("propertyDetails",_(e))},{default:n(()=>[t("div",ht,[t("div",_t,[t("h4",null,[r(l(c),{href:i.route("propertyDetails",_(e))},{default:n(()=>[ut]),_:2},1032,["href"]),ft])]),t("div",mt,[r(l(c),{href:i.route("propertyDetails",_(e)),class:"homes-img"},{default:n(()=>[pt,t("div",gt,"For "+a(e.category),1),t("div",yt,a(e.type),1),e.image?(d(),h("img",{key:0,src:`/photos/${e.image.image_name}`,alt:"home-1",class:"img-responsive"},null,8,vt)):f("",!0)]),_:2},1032,["href"])]),t("div",bt,[r(l(c),{href:i.route("propertyDetails",_(e)),class:"btn"},{default:n(()=>[kt]),_:2},1032,["href"]),e.video?(d(),h("a",{key:0,href:e.video.replace(")","https://").replaceAll("(","."),class:"btn popup-video popup-youtube"},Ft,8,wt)):f("",!0),r(l(c),{href:i.route("propertyDetails",_(e)),class:"img-poppu btn"},{default:n(()=>[Nt]),_:2},1032,["href"])])])]),_:2},1032,["href"]),t("div",Ct,[t("h3",Dt,[r(l(c),{href:i.route("propertyDetails",_(e))},{default:n(()=>[u(a(e.title),1)]),_:2},1032,["href"])]),t("p",Lt,[r(l(c),{href:i.route("propertyDetails",_(e))},{default:n(()=>[Bt,t("span",null,a(e.location),1)]),_:2},1032,["href"])]),t("ul",Ht,[t("li",St,[Et,t("span",null,a(e.bedroom)+" Bedrooms",1)]),t("li",jt,[Vt,t("span",null,a(e.bathroom)+" Bathrooms",1)]),e.area?(d(),h("li",At,[It,t("span",null,a(e.area)+"/"+a(e.unit),1)])):f("",!0),t("li",Pt,[Rt,t("span",null,a(e.parking)+" Cars",1)])]),i.$page.props.auth.user?(d(),h("div",Tt,[t("h3",xt,[r(l(c),{href:i.route("propertyDetails",_(e))},{default:n(()=>[u(a(e.amount),1)]),_:2},1032,["href"])]),t("div",qt,[Ot,Mt,e.bookmarks.length>0?(d(),p(l(c),{key:0,"preserve-scroll":"",href:i.route("deleteBookmark",e.bookmarks[0].id),title:"Favorites"},{default:n(()=>[Ut]),_:2},1032,["href"])):(d(),p(l(c),{key:1,"preserve-scroll":"",href:i.route("addBookmark",e.id),title:"Favorites"},{default:n(()=>[zt]),_:2},1032,["href"]))])])):(d(),h("div",Gt,[t("h3",Jt,[r(l(c),{href:i.route("propertyDetails",_(e))},{default:n(()=>[u(a(e.amount),1)]),_:2},1032,["href"])]),t("div",Kt,[Qt,Wt,r(l(c),{"preserve-scroll":"",href:i.route("addBookmark",e.id),title:"Favorites"},{default:n(()=>[Xt]),_:2},1032,["href"])])])),t("div",Yt,[r(l(c),{href:i.route("agentDetails",e.user.id)},{default:n(()=>[Zt,u(" "+a(e.user.name),1)]),_:2},1032,["href"]),t("span",null,[te,u(" "+a(e.created_at_diff),1)])])])])]))),128))]),r(S,{paginations:s.props.links},null,8,["paginations"])])])]),_:1})],64))}},re=E(ee,[["__scopeId","data-v-8a2c8a8e"]]);export{re as default};
