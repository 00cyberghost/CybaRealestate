import{j as B,s as E,o as j,a as q,b as i,c,l as N,w as h,u as s,k as u,d as _,F as H,t as a,e,H as V,L as f,f as d,q as A,p as G,m as M}from"./app.63348114.js";import{_ as O}from"./GuestLayout.f93c0bef.js";import{_ as z}from"./SearchPagination.0db6c41f.js";import{_ as J}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Header.17199a03.js";const l=o=>(G("data-v-7004120c"),o=o(),M(),o),K={key:0},Q={key:1},W=["content"],X=["content"],Y=["content"],Z=["content"],ee=l(()=>e("meta",{property:"og:type",content:"website"},null,-1)),te=["content"],se=l(()=>e("meta",{name:"twitter:card",content:"summary_large_image"},null,-1)),ae=["content"],oe=["content"],ne=["content"],ie=["content"],le=["content"],re={class:"properties-list featured portfolio blog"},ce={class:"container"},de={class:"headings-2 pt-0 pb-0"},he={class:"pro-wrapper"},ue={class:"detail-wrapper-body"},me={class:"listing-title-bar"},_e={class:"text-heading text-left"},fe=d("Home "),ge=d(" \xA0/\xA0 "),pe=l(()=>e("span",null,"Listings",-1)),ye=l(()=>e("h4",{class:"mb-3 mt-3",id:"p-title"},null,-1)),be={key:0,class:"headings-2 pt-0"},ve={class:"pro-wrapper"},ke={class:"detail-wrapper-body"},we={class:"listing-title-bar"},Se={class:"text-heading text-left"},$e={class:"font-weight-bold mb-0 mt-3"},Le={class:"cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center"},Re={class:"input-group border rounded input-group-lg w-auto mr-4"},Fe=l(()=>e("label",{class:"input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3",for:"inputGroupSelect01"},[e("i",{class:"fas fa-align-left fs-16 pr-2"}),d("Sortby:")],-1)),Pe=["selected"],xe=["selected"],Ce=["selected"],Ne=["selected"],He={key:1,class:"property-location curved mb-5"},Te={key:0},De={key:0},Ie={key:1},Ue=d(", Nigeria. The average price of "),Be={key:2},Ee={key:3},je={key:2,class:"property-location curved mb-5"},qe={key:0},Ve={key:0},Ae={key:1},Ge={key:2},Me={class:"row featured portfolio-items"},Oe={class:"project-single","data-aos":"fade-up"},ze={class:"project-inner project-head"},Je={class:"project-bottom"},Ke=d("View Property"),Qe=l(()=>e("span",{class:"category"},"Real Estate",-1)),We={class:"homes"},Xe=l(()=>e("div",{class:"homes-tag button alt featured d-none"},"Featured",-1)),Ye={id:"overlay",class:"homes-tag button alt sale"},Ze={class:"homes-price"},et=["src"],tt={class:"button-effect"},st=l(()=>e("i",{class:"fa fa-link"},null,-1)),at=["href"],ot=l(()=>e("i",{class:"fas fa-video"},null,-1)),nt=[ot],it=l(()=>e("i",{class:"fa fa-photo"},null,-1)),lt={class:"homes-content"},rt={class:"truncate"},ct={class:"homes-address mb-3 truncate"},dt=l(()=>e("i",{class:"fa fa-map-marker"},null,-1)),ht={class:"homes-list clearfix pb-3"},ut={class:"the-icons"},mt=l(()=>e("i",{class:"flaticon-bed mr-2","aria-hidden":"true"},null,-1)),_t={class:"the-icons"},ft=l(()=>e("i",{class:"flaticon-bathtub mr-2","aria-hidden":"true"},null,-1)),gt={key:0,class:"the-icons"},pt=l(()=>e("i",{class:"flaticon-square mr-2","aria-hidden":"true"},null,-1)),yt={class:"the-icons"},bt=l(()=>e("i",{class:"flaticon-car mr-2","aria-hidden":"true"},null,-1)),vt={key:0,class:"price-properties"},kt={class:"title mt-3"},wt={class:"compare"},St=l(()=>e("a",{href:"#",title:"Compare"},[e("i",{class:"fas fa-exchange-alt"})],-1)),$t=l(()=>e("a",{href:"#",title:"Share"},[e("i",{class:"fas fa-share-alt"})],-1)),Lt=l(()=>e("i",{class:"fa fa-heart"},null,-1)),Rt=l(()=>e("i",{class:"flaticon-heart"},null,-1)),Ft={key:1,class:"price-properties"},Pt={class:"title mt-3"},xt={class:"compare"},Ct=l(()=>e("a",{href:"#",title:"Compare"},[e("i",{class:"fas fa-exchange-alt"})],-1)),Nt=l(()=>e("a",{href:"#",title:"Share"},[e("i",{class:"fas fa-share-alt"})],-1)),Ht=l(()=>e("i",{class:"flaticon-heart"},null,-1)),Tt={class:"footer"},Dt=l(()=>e("i",{class:"fa fa-user"},null,-1)),It=l(()=>e("i",{class:"fa fa-calendar"},null,-1)),Ut={__name:"SearchResult",props:{props:Object,stat:Object},setup(o){const y=n=>{let g=n.category.replaceAll(" ","-"),t=n.title.replaceAll(" ","-"),r=n.id,b=`for-${g}`,C=`${t}`.replaceAll("/","-");return[r,b,C]};let F=location.hostname,T=location.hostname+location.pathname;B(!1);const m=E({category:"",location:"",type:"",subtype:"",minprice:null,maxprice:null,ref:null,bedroom:null,bathroom:null,parking:null,area:"",param:"",unit:""}),D=n=>{let g=n.target.value,t=window.location.search,r=new URLSearchParams(t);m.category=r.get("category"),m.location=r.get("location"),m.type=r.get("type"),m.subtype=r.get("subtype"),m.minprice=r.get("minprice"),m.maxprice=r.get("maxprice"),m.ref=r.get("ref"),m.bedroom=r.get("bedroom"),m.bathroom=r.get("bathroom"),m.parking=r.get("parking"),m.area=r.get("area"),m.unit=r.get("unit"),m.param=n.target.value,m.get(route("sortSearch",g))},P=()=>{let n=window.location.search,t=new URLSearchParams(n).get("param");return t==null?"recent":t};let I=()=>{let n=window.location.search,g=new URLSearchParams(n),t=g.get("category"),r=g.get("bedroom"),b=g.get("type"),R=g.get("area"),C=g.get("unit"),k=g.get("location"),p;b.length==0?k.length>1?r>0?p=r+" bedroom for "+t+" in "+decodeURI(k):p="Houses, Flats, Commercial properties and Lands for "+t+" in "+decodeURI(k):r>0?p=r+" bedroom for "+t:p="Houses, Flats, Commercial properties and Lands for "+t:k.length>1?r>0?p=r+" bedroom "+b+" for "+t+" in "+decodeURI(k):R>0?p=R+" "+C+" of "+b+" for "+t+" in "+decodeURI(k):p=b+" for "+t+" in "+decodeURI(k):r>0?p=r+" bedroom "+b+" for "+t:R>0?p=R+" "+C+" of "+b+" for "+t:p=b+" for "+t,document.getElementById("p-title").textContent=p},U=window.location.search,L=new URLSearchParams(U),x=L.get("category");L.get("location");let v=decodeURI(L.get("location")),w=L.get("bedroom"),S=L.get("type");return j(()=>{$("body").addClass("inner-pages st-1 agents hp-6 full hd-white"),$(".dropdown-filter").on("click",function(){$(".explore__form-checkbox-list").toggleClass("filter-block")}),I()}),q(()=>$("body").removeClass("inner-pages st-1 agents hp-6 full hd-white")),(n,g)=>(i(),c(H,null,[o.props.data.length>0?(i(),N(s(V),{key:0},{default:h(()=>[o.stat?(i(),c("title",K,"Houses, Flats, Lands and real estate for "+a(o.props.data[0].category)+" in my area and Nigeria ("+a(o.stat.statcount)+" available)",1)):(i(),c("title",Q,"Houses, Flats, Lands and real estate in "+a(o.props.data[0].category)+" in my area and Nigeria",1)),e("meta",{name:"description",content:`Real Estate for ${o.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,W),e("meta",{property:"og:url",content:`https://${s(T)}`},null,8,X),e("meta",{property:"og:image",content:`https://${s(F)}/photos/${o.props.data[0].image.image_name}`},null,8,Y),e("meta",{property:"og:title",content:`Houses, Flats, Lands and real estate for ${o.props.data[0].category} in my area and Nigeria`},null,8,Z),ee,e("meta",{property:"og:description",content:`Real Estate for ${o.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,te),se,e("meta",{name:"twitter:site",content:`https://${s(F)}`},null,8,ae),e("meta",{name:"twitter:creator",content:`https://${s(F)}`},null,8,oe),e("meta",{name:"twitter:image",content:`https://${s(F)}/photos/${o.props.data[0].image.image_name}`},null,8,ne),e("meta",{name:"twitter:title",content:`Houses, Flats, Lands and real estate for ${o.props.data[0].category} in my area and Nigeria`},null,8,ie),e("meta",{name:"twitter:description",content:`Real Estate for ${o.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,le)]),_:1})):u("",!0),_(O,null,{default:h(()=>[e("section",re,[e("div",ce,[e("section",de,[e("div",he,[e("div",ue,[e("div",me,[e("div",_e,[e("p",null,[_(s(f),{href:n.route("home")},{default:h(()=>[fe]),_:1},8,["href"]),ge,pe])]),ye])])])]),o.props.data.length>0?(i(),c("section",be,[e("div",ve,[e("div",ke,[e("div",we,[e("div",Se,[e("p",$e,a(o.props.to)+" of "+a(o.props.total)+" results",1)])])]),e("div",Le,[e("div",Re,[Fe,e("select",{onChange:D,class:"form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby","data-style":"bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3",id:"inputGroupSelect01",name:"sortby"},[e("option",{selected:P()=="recent",value:"recent"},"Recent",8,Pe),e("option",{selected:P()=="views",value:"views"},"Most Viewed",8,xe),e("option",{selected:P()=="min",value:"min"},"Price(low to high)",8,Ce),e("option",{selected:P()=="max",value:"max"},"Price(high to low)",8,Ne)],32)])])])])):u("",!0),s(S).length>0?(i(),c("div",He,[e("p",null,[o.stat?(i(),c("span",Te,[d(" There are "+a(o.stat.statcount)+" listings of ",1),s(w)>0?(i(),c("span",De,a(s(w))+" bedroom",1)):u("",!0),d(" "+a(s(S))+" for "+a(s(x))+" ",1),s(v)?(i(),c("span",Ie," in "+a(s(v)),1)):u("",!0),Ue,s(w)>0?(i(),c("span",Be,a(s(w))+" bedroom",1)):u("",!0),d(" "+a(s(S))+" for "+a(s(x))+" ",1),s(v)?(i(),c("span",Ee,"in "+a(s(v)),1)):u("",!0),d(" is \u20A6"+a(o.stat.average)+". The most expensive "+a(s(S))+" costs \u20A6"+a(o.stat.max)+" while the cheapest costs \u20A6"+a(o.stat.min)+". The "+a(s(S))+" have been listed by estate agents and agencies who can be contacted using the contact information provided for each house listing. The list can be filtered by price, views and recency.",1)])):u("",!0)])])):u("",!0),s(S).length==0?(i(),c("div",je,[e("p",null,[o.stat?(i(),c("span",qe,[d(" There are "+a(o.stat.statcount)+" listings ",1),s(w)>0?(i(),c("span",Ve,"of "+a(s(w))+" bedroom",1)):u("",!0),d(" for "+a(s(x))+" ",1),s(v)?(i(),c("span",Ae," in "+a(s(v))+",",1)):u("",!0),d(" Nigeria. The average price of listings for "+a(s(x))+" ",1),s(v)?(i(),c("span",Ge," in "+a(s(v)),1)):u("",!0),d(" is \u20A6"+a(o.stat.average)+". The most expensive listing costs \u20A6"+a(o.stat.max)+" while the cheapest costs \u20A6"+a(o.stat.min)+". The listings have been listed by estate agents and agencies who can be contacted using the contact information provided for each house listing. The list can be filtered by price, views and recency.",1)])):u("",!0)])])):u("",!0),e("div",Me,[(i(!0),c(H,null,A(o.props.data,t=>(i(),c("div",{key:t.id,class:"item col-lg-4 col-md-6 col-xs-12 landscapes sale"},[e("div",Oe,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[e("div",ze,[e("div",Je,[e("h4",null,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[Ke]),_:2},1032,["href"]),Qe])]),e("div",We,[_(s(f),{href:n.route("propertyDetails",y(t)),class:"homes-img"},{default:h(()=>[Xe,e("div",Ye,"For "+a(t.category),1),e("div",Ze,a(t.type),1),t.image?(i(),c("img",{key:0,src:`/photos/${t.image.image_name}`,alt:"home-1",class:"img-responsive"},null,8,et)):u("",!0)]),_:2},1032,["href"])]),e("div",tt,[_(s(f),{href:n.route("propertyDetails",y(t)),class:"btn"},{default:h(()=>[st]),_:2},1032,["href"]),t.video?(i(),c("a",{key:0,href:t.video.replace(")","https://").replaceAll("(","."),class:"btn popup-video popup-youtube"},nt,8,at)):u("",!0),_(s(f),{href:n.route("propertyDetails",y(t)),class:"img-poppu btn"},{default:h(()=>[it]),_:2},1032,["href"])])])]),_:2},1032,["href"]),e("div",lt,[e("h3",rt,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[d(a(t.title),1)]),_:2},1032,["href"])]),e("p",ct,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[dt,e("span",null,a(t.location),1)]),_:2},1032,["href"])]),e("ul",ht,[e("li",ut,[mt,e("span",null,a(t.bedroom)+" Bedrooms",1)]),e("li",_t,[ft,e("span",null,a(t.bathroom)+" Bathrooms",1)]),t.area?(i(),c("li",gt,[pt,e("span",null,a(t.area)+"/"+a(t.unit),1)])):u("",!0),e("li",yt,[bt,e("span",null,a(t.parking)+" Cars",1)])]),n.$page.props.auth.user?(i(),c("div",vt,[e("h3",kt,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[d(a(t.amount),1)]),_:2},1032,["href"])]),e("div",wt,[St,$t,t.bookmarks.length>0?(i(),N(s(f),{key:0,"preserve-scroll":"",href:n.route("deleteBookmark",t.bookmarks[0].id),title:"Favorites"},{default:h(()=>[Lt]),_:2},1032,["href"])):(i(),N(s(f),{key:1,"preserve-scroll":"",href:n.route("addBookmark",t.id),title:"Favorites"},{default:h(()=>[Rt]),_:2},1032,["href"]))])])):(i(),c("div",Ft,[e("h3",Pt,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[d(a(t.amount),1)]),_:2},1032,["href"])]),e("div",xt,[Ct,Nt,_(s(f),{"preserve-scroll":"",href:n.route("addBookmark",t.id),title:"Favorites"},{default:h(()=>[Ht]),_:2},1032,["href"])])])),e("div",Tt,[_(s(f),{href:n.route("agentDetails",t.user.id)},{default:h(()=>[Dt,d(" "+a(t.user.name),1)]),_:2},1032,["href"]),e("span",null,[It,d(" "+a(t.created_at_diff),1)])])])])]))),128))]),_(z,{paginations:o.props.links},null,8,["paginations"])])])]),_:1})],64))}},At=J(Ut,[["__scopeId","data-v-7004120c"]]);export{At as default};