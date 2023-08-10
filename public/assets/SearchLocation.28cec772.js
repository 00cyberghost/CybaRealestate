import{o as w,a as L,b as d,c as h,l as p,w as n,u as o,k as m,d as c,F as v,t as i,e as t,H as F,L as r,q as C,f as u,p as D,m as N}from"./app.70a660d0.js";import{_ as H}from"./GuestLayout.48f08335.js";import{_ as B}from"./SearchPagination.8fa3d77d.js";import{_ as S}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Header.2c9a96b1.js";const s=l=>(D("data-v-10c4d278"),l=l(),N(),l),E={key:0},j={key:1},V=["content"],A=["content"],I=["content"],P=s(()=>t("meta",{property:"og:type",content:"website"},null,-1)),R=["content"],q=s(()=>t("meta",{name:"twitter:card",content:"summary_large_image"},null,-1)),M=["content"],O=["content"],T=["content"],U=["content"],z=["content"],G={class:"properties-list featured portfolio blog"},J={class:"container"},K={class:"headings-2 pt-0 pb-0"},Q={class:"pro-wrapper"},W={class:"detail-wrapper-body"},X={class:"listing-title-bar"},Y={class:"text-heading text-left"},Z=u("Home "),x=u(" \xA0/\xA0 "),tt=s(()=>t("span",null,"Listings",-1)),et=s(()=>t("h4",{class:"mb-3 mt-3",id:"p-title"},null,-1)),st={class:"headings-2 pt-0"},at={class:"pro-wrapper"},ot={class:"detail-wrapper-body"},lt={class:"listing-title-bar"},it={class:"text-heading text-left"},nt={class:"font-weight-bold mb-0 mt-3"},ct={class:"row featured portfolio-items"},rt={class:"project-single","data-aos":"fade-up"},dt={class:"project-inner project-head"},ht={class:"project-bottom"},_t=u("View Property"),ut=s(()=>t("span",{class:"category"},"Real Estate",-1)),ft={class:"homes"},mt=s(()=>t("div",{class:"homes-tag button alt featured"},"Featured",-1)),pt={class:"homes-tag button alt sale"},gt={class:"homes-price"},vt=["src"],yt={class:"button-effect"},bt=s(()=>t("i",{class:"fa fa-link"},null,-1)),kt=["href"],$t=s(()=>t("i",{class:"fas fa-video"},null,-1)),wt=[$t],Lt=s(()=>t("i",{class:"fa fa-photo"},null,-1)),Ft={class:"homes-content"},Ct={class:"truncate"},Dt={class:"homes-address mb-3 truncate"},Nt=s(()=>t("i",{class:"fa fa-map-marker"},null,-1)),Ht={class:"homes-list clearfix pb-3"},Bt={class:"the-icons"},St=s(()=>t("i",{class:"flaticon-bed mr-2","aria-hidden":"true"},null,-1)),Et={class:"the-icons"},jt=s(()=>t("i",{class:"flaticon-bathtub mr-2","aria-hidden":"true"},null,-1)),Vt={key:0,class:"the-icons"},At=s(()=>t("i",{class:"flaticon-square mr-2","aria-hidden":"true"},null,-1)),It={class:"the-icons"},Pt=s(()=>t("i",{class:"flaticon-car mr-2","aria-hidden":"true"},null,-1)),Rt={key:0,class:"price-properties"},qt={class:"title mt-3"},Mt={class:"compare"},Ot=s(()=>t("a",{href:"#",title:"Compare"},[t("i",{class:"fas fa-exchange-alt"})],-1)),Tt=s(()=>t("a",{href:"#",title:"Share"},[t("i",{class:"fas fa-share-alt"})],-1)),Ut=s(()=>t("i",{class:"fa fa-heart"},null,-1)),zt=s(()=>t("i",{class:"flaticon-heart"},null,-1)),Gt={key:1,class:"price-properties"},Jt={class:"title mt-3"},Kt={class:"compare"},Qt=s(()=>t("a",{href:"#",title:"Compare"},[t("i",{class:"fas fa-exchange-alt"})],-1)),Wt=s(()=>t("a",{href:"#",title:"Share"},[t("i",{class:"fas fa-share-alt"})],-1)),Xt=s(()=>t("i",{class:"flaticon-heart"},null,-1)),Yt={class:"footer"},Zt=s(()=>t("i",{class:"fa fa-user"},null,-1)),xt=s(()=>t("i",{class:"fa fa-calendar"},null,-1)),te={__name:"SearchLocation",props:{props:Object},setup(l){const _=a=>{let g=a.category.replaceAll(" ","-"),e=a.title.replaceAll(" ","-"),y=a.id,b=`for-${g}`,k=`${e}`.replaceAll("/","-");return[y,b,k]};let f=location.hostname;return w(()=>{$("body").addClass("inner-pages st-1 agents hp-6 full hd-white"),$(".dropdown-filter").on("click",function(){$(".explore__form-checkbox-list").toggleClass("filter-block")})}),L(()=>$("body").removeClass("inner-pages st-1 agents hp-6 full hd-white")),(a,g)=>(d(),h(v,null,[l.props.data.length>0?(d(),p(o(F),{key:0},{default:n(()=>[a.stat?(d(),h("title",E,"Houses, Flats, Lands and real estate in "+i(l.props.data[0].state)+", Nigeria ("+i(a.stat.statcount)+" available)",1)):(d(),h("title",j,"Houses, Flats, Lands and real estate in "+i(l.props.data[0].state)+", Nigeria",1)),t("meta",{name:"description",content:`Real Estate for ${l.props.data[0].state} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,V),t("meta",{property:"og:image",content:`https://${o(f)}/photos/${l.props.data[0].image.image_name}`},null,8,A),t("meta",{property:"og:title",content:`Houses, Flats, Lands and real estate in ${l.props.data[0].state}, Nigeria`},null,8,I),P,t("meta",{property:"og:description",content:`Real Estate in ${l.props.data[0].state}, Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,R),q,t("meta",{name:"twitter:site",content:`https://${o(f)}`},null,8,M),t("meta",{name:"twitter:creator",content:`https://${o(f)}`},null,8,O),t("meta",{name:"twitter:image",content:`https://${o(f)}/photos/${l.props.data[0].image.image_name}`},null,8,T),t("meta",{name:"twitter:title",content:`Houses, Flats, Lands and real estate in ${l.props.data[0].state}, Nigeria`},null,8,U),t("meta",{name:"twitter:description",content:`Real Estate in ${l.props.data[0].state}, Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,z)]),_:1})):m("",!0),c(H,null,{default:n(()=>[t("section",G,[t("div",J,[t("section",K,[t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[t("p",null,[c(o(r),{href:a.route("home")},{default:n(()=>[Z]),_:1},8,["href"]),x,tt])]),et])])])]),t("section",st,[t("div",at,[t("div",ot,[t("div",lt,[t("div",it,[t("p",nt,i(l.props.to)+" of "+i(l.props.total)+" results",1)])])])])]),t("div",ct,[(d(!0),h(v,null,C(l.props.data,e=>(d(),h("div",{key:e.id,class:"item col-lg-4 col-md-6 col-xs-12 landscapes sale"},[t("div",rt,[c(o(r),{href:a.route("propertyDetails",_(e))},{default:n(()=>[t("div",dt,[t("div",ht,[t("h4",null,[c(o(r),{href:a.route("propertyDetails",_(e))},{default:n(()=>[_t]),_:2},1032,["href"]),ut])]),t("div",ft,[c(o(r),{href:a.route("propertyDetails",_(e)),class:"homes-img"},{default:n(()=>[mt,t("div",pt,"For "+i(e.category),1),t("div",gt,i(e.type),1),e.image?(d(),h("img",{key:0,src:`/photos/${e.image.image_name}`,alt:"home-1",class:"img-responsive"},null,8,vt)):m("",!0)]),_:2},1032,["href"])]),t("div",yt,[c(o(r),{href:a.route("propertyDetails",_(e)),class:"btn"},{default:n(()=>[bt]),_:2},1032,["href"]),e.video?(d(),h("a",{key:0,href:e.video.replace(")","https://").replaceAll("(","."),class:"btn popup-video popup-youtube"},wt,8,kt)):m("",!0),c(o(r),{href:a.route("propertyDetails",_(e)),class:"img-poppu btn"},{default:n(()=>[Lt]),_:2},1032,["href"])])])]),_:2},1032,["href"]),t("div",Ft,[t("h3",Ct,[c(o(r),{href:a.route("propertyDetails",_(e))},{default:n(()=>[u(i(e.title),1)]),_:2},1032,["href"])]),t("p",Dt,[c(o(r),{href:a.route("propertyDetails",_(e))},{default:n(()=>[Nt,t("span",null,i(e.location),1)]),_:2},1032,["href"])]),t("ul",Ht,[t("li",Bt,[St,t("span",null,i(e.bedroom)+" Bedrooms",1)]),t("li",Et,[jt,t("span",null,i(e.bathroom)+" Bathrooms",1)]),e.area?(d(),h("li",Vt,[At,t("span",null,i(e.area)+"/"+i(e.unit),1)])):m("",!0),t("li",It,[Pt,t("span",null,i(e.parking)+" Cars",1)])]),a.$page.props.auth.user?(d(),h("div",Rt,[t("h3",qt,[c(o(r),{href:a.route("propertyDetails",_(e))},{default:n(()=>[u(i(e.amount),1)]),_:2},1032,["href"])]),t("div",Mt,[Ot,Tt,e.bookmarks.length>0?(d(),p(o(r),{key:0,"preserve-scroll":"",href:a.route("deleteBookmark",e.bookmarks[0].id),title:"Favorites"},{default:n(()=>[Ut]),_:2},1032,["href"])):(d(),p(o(r),{key:1,"preserve-scroll":"",href:a.route("addBookmark",e.id),title:"Favorites"},{default:n(()=>[zt]),_:2},1032,["href"]))])])):(d(),h("div",Gt,[t("h3",Jt,[c(o(r),{href:a.route("propertyDetails",_(e))},{default:n(()=>[u(i(e.amount),1)]),_:2},1032,["href"])]),t("div",Kt,[Qt,Wt,c(o(r),{"preserve-scroll":"",href:a.route("addBookmark",e.id),title:"Favorites"},{default:n(()=>[Xt]),_:2},1032,["href"])])])),t("div",Yt,[c(o(r),{href:a.route("agentDetails",e.user.id)},{default:n(()=>[Zt,u(" "+i(e.user.name),1)]),_:2},1032,["href"]),t("span",null,[xt,u(" "+i(e.created_at_diff),1)])])])])]))),128))]),c(B,{paginations:l.props.links},null,8,["paginations"])])])]),_:1})],64))}},ne=S(te,[["__scopeId","data-v-10c4d278"]]);export{ne as default};