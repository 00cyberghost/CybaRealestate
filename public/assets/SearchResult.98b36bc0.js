import{j as U,s as B,o as E,a as j,b as i,c,l as N,w as h,u as s,k as u,d as _,F as H,t as a,e,H as q,L as f,f as d,q as V,p as A,m as G}from"./app.70a660d0.js";import{_ as M}from"./GuestLayout.48f08335.js";import{_ as O}from"./SearchPagination.8fa3d77d.js";import{_ as z}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Header.2c9a96b1.js";const l=o=>(A("data-v-05ced0d9"),o=o(),G(),o),J={key:0},K={key:1},Q=["content"],W=["content"],X=["content"],Y=l(()=>e("meta",{property:"og:type",content:"website"},null,-1)),Z=["content"],ee=l(()=>e("meta",{name:"twitter:card",content:"summary_large_image"},null,-1)),te=["content"],se=["content"],ae=["content"],oe=["content"],ne=["content"],ie={class:"properties-list featured portfolio blog"},le={class:"container"},re={class:"headings-2 pt-0 pb-0"},ce={class:"pro-wrapper"},de={class:"detail-wrapper-body"},he={class:"listing-title-bar"},ue={class:"text-heading text-left"},me=d("Home "),_e=d(" \xA0/\xA0 "),fe=l(()=>e("span",null,"Listings",-1)),ge=l(()=>e("h4",{class:"mb-3 mt-3",id:"p-title"},null,-1)),pe={key:0,class:"headings-2 pt-0"},ye={class:"pro-wrapper"},be={class:"detail-wrapper-body"},ve={class:"listing-title-bar"},ke={class:"text-heading text-left"},we={class:"font-weight-bold mb-0 mt-3"},Se={class:"cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center"},$e={class:"input-group border rounded input-group-lg w-auto mr-4"},Le=l(()=>e("label",{class:"input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3",for:"inputGroupSelect01"},[e("i",{class:"fas fa-align-left fs-16 pr-2"}),d("Sortby:")],-1)),Re=["selected"],Fe=["selected"],Pe=["selected"],xe=["selected"],Ce={key:1,class:"property-location curved mb-5"},Ne={key:0},He={key:0},Te={key:1},De=d(", Nigeria. The average price of "),Ie={key:2},Ue={key:3},Be={key:2,class:"property-location curved mb-5"},Ee={key:0},je={key:0},qe={key:1},Ve={key:2},Ae={class:"row featured portfolio-items"},Ge={class:"project-single","data-aos":"fade-up"},Me={class:"project-inner project-head"},Oe={class:"project-bottom"},ze=d("View Property"),Je=l(()=>e("span",{class:"category"},"Real Estate",-1)),Ke={class:"homes"},Qe=l(()=>e("div",{class:"homes-tag button alt featured d-none"},"Featured",-1)),We={id:"overlay",class:"homes-tag button alt sale"},Xe={class:"homes-price"},Ye=["src"],Ze={class:"button-effect"},et=l(()=>e("i",{class:"fa fa-link"},null,-1)),tt=["href"],st=l(()=>e("i",{class:"fas fa-video"},null,-1)),at=[st],ot=l(()=>e("i",{class:"fa fa-photo"},null,-1)),nt={class:"homes-content"},it={class:"truncate"},lt={class:"homes-address mb-3 truncate"},rt=l(()=>e("i",{class:"fa fa-map-marker"},null,-1)),ct={class:"homes-list clearfix pb-3"},dt={class:"the-icons"},ht=l(()=>e("i",{class:"flaticon-bed mr-2","aria-hidden":"true"},null,-1)),ut={class:"the-icons"},mt=l(()=>e("i",{class:"flaticon-bathtub mr-2","aria-hidden":"true"},null,-1)),_t={key:0,class:"the-icons"},ft=l(()=>e("i",{class:"flaticon-square mr-2","aria-hidden":"true"},null,-1)),gt={class:"the-icons"},pt=l(()=>e("i",{class:"flaticon-car mr-2","aria-hidden":"true"},null,-1)),yt={key:0,class:"price-properties"},bt={class:"title mt-3"},vt={class:"compare"},kt=l(()=>e("a",{href:"#",title:"Compare"},[e("i",{class:"fas fa-exchange-alt"})],-1)),wt=l(()=>e("a",{href:"#",title:"Share"},[e("i",{class:"fas fa-share-alt"})],-1)),St=l(()=>e("i",{class:"fa fa-heart"},null,-1)),$t=l(()=>e("i",{class:"flaticon-heart"},null,-1)),Lt={key:1,class:"price-properties"},Rt={class:"title mt-3"},Ft={class:"compare"},Pt=l(()=>e("a",{href:"#",title:"Compare"},[e("i",{class:"fas fa-exchange-alt"})],-1)),xt=l(()=>e("a",{href:"#",title:"Share"},[e("i",{class:"fas fa-share-alt"})],-1)),Ct=l(()=>e("i",{class:"flaticon-heart"},null,-1)),Nt={class:"footer"},Ht=l(()=>e("i",{class:"fa fa-user"},null,-1)),Tt=l(()=>e("i",{class:"fa fa-calendar"},null,-1)),Dt={__name:"SearchResult",props:{props:Object,stat:Object},setup(o){const y=n=>{let g=n.category.replaceAll(" ","-"),t=n.title.replaceAll(" ","-"),r=n.id,b=`for-${g}`,C=`${t}`.replaceAll("/","-");return[r,b,C]};let F=location.hostname;U(!1);const m=B({category:"",location:"",type:"",subtype:"",minprice:null,maxprice:null,ref:null,bedroom:null,bathroom:null,parking:null,area:"",param:"",unit:""}),T=n=>{let g=n.target.value,t=window.location.search,r=new URLSearchParams(t);m.category=r.get("category"),m.location=r.get("location"),m.type=r.get("type"),m.subtype=r.get("subtype"),m.minprice=r.get("minprice"),m.maxprice=r.get("maxprice"),m.ref=r.get("ref"),m.bedroom=r.get("bedroom"),m.bathroom=r.get("bathroom"),m.parking=r.get("parking"),m.area=r.get("area"),m.unit=r.get("unit"),m.param=n.target.value,m.get(route("sortSearch",g))},P=()=>{let n=window.location.search,t=new URLSearchParams(n).get("param");return t==null?"recent":t};let D=()=>{let n=window.location.search,g=new URLSearchParams(n),t=g.get("category"),r=g.get("bedroom"),b=g.get("type"),R=g.get("area"),C=g.get("unit"),k=g.get("location"),p;b.length==0?k.length>1?r>0?p=r+" bedroom for "+t+" in "+decodeURI(k):p="Houses, Flats, Commercial properties and Lands for "+t+" in "+decodeURI(k):r>0?p=r+" bedroom for "+t:p="Houses, Flats, Commercial properties and Lands for "+t:k.length>1?r>0?p=r+" bedroom "+b+" for "+t+" in "+decodeURI(k):R>0?p=R+" "+C+" of "+b+" for "+t+" in "+decodeURI(k):p=b+" for "+t+" in "+decodeURI(k):r>0?p=r+" bedroom "+b+" for "+t:R>0?p=R+" "+C+" of "+b+" for "+t:p=b+" for "+t,document.getElementById("p-title").textContent=p},I=window.location.search,L=new URLSearchParams(I),x=L.get("category");L.get("location");let v=decodeURI(L.get("location")),w=L.get("bedroom"),S=L.get("type");return E(()=>{$("body").addClass("inner-pages st-1 agents hp-6 full hd-white"),$(".dropdown-filter").on("click",function(){$(".explore__form-checkbox-list").toggleClass("filter-block")}),D()}),j(()=>$("body").removeClass("inner-pages st-1 agents hp-6 full hd-white")),(n,g)=>(i(),c(H,null,[o.props.data.length>0?(i(),N(s(q),{key:0},{default:h(()=>[o.stat?(i(),c("title",J,"Houses, Flats, Lands and real estate for "+a(o.props.data[0].category)+" in my area and Nigeria ("+a(o.stat.statcount)+" available)",1)):(i(),c("title",K,"Houses, Flats, Lands and real estate in "+a(o.props.data[0].category)+" in my area and Nigeria",1)),e("meta",{name:"description",content:`Real Estate for ${o.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,Q),e("meta",{property:"og:image",content:`https://${s(F)}/photos/${o.props.data[0].image.image_name}`},null,8,W),e("meta",{property:"og:title",content:`Houses, Flats, Lands and real estate for ${o.props.data[0].category} in my area and Nigeria`},null,8,X),Y,e("meta",{property:"og:description",content:`Real Estate for ${o.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,Z),ee,e("meta",{name:"twitter:site",content:`https://${s(F)}`},null,8,te),e("meta",{name:"twitter:creator",content:`https://${s(F)}`},null,8,se),e("meta",{name:"twitter:image",content:`https://${s(F)}/photos/${o.props.data[0].image.image_name}`},null,8,ae),e("meta",{name:"twitter:title",content:`Houses, Flats, Lands and real estate for ${o.props.data[0].category} in my area and Nigeria`},null,8,oe),e("meta",{name:"twitter:description",content:`Real Estate for ${o.props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`},null,8,ne)]),_:1})):u("",!0),_(M,null,{default:h(()=>[e("section",ie,[e("div",le,[e("section",re,[e("div",ce,[e("div",de,[e("div",he,[e("div",ue,[e("p",null,[_(s(f),{href:n.route("home")},{default:h(()=>[me]),_:1},8,["href"]),_e,fe])]),ge])])])]),o.props.data.length>0?(i(),c("section",pe,[e("div",ye,[e("div",be,[e("div",ve,[e("div",ke,[e("p",we,a(o.props.to)+" of "+a(o.props.total)+" results",1)])])]),e("div",Se,[e("div",$e,[Le,e("select",{onChange:T,class:"form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby","data-style":"bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3",id:"inputGroupSelect01",name:"sortby"},[e("option",{selected:P()=="recent",value:"recent"},"Recent",8,Re),e("option",{selected:P()=="views",value:"views"},"Most Viewed",8,Fe),e("option",{selected:P()=="min",value:"min"},"Price(low to high)",8,Pe),e("option",{selected:P()=="max",value:"max"},"Price(high to low)",8,xe)],32)])])])])):u("",!0),s(S).length>0?(i(),c("div",Ce,[e("p",null,[o.stat?(i(),c("span",Ne,[d(" There are "+a(o.stat.statcount)+" listings of ",1),s(w)>0?(i(),c("span",He,a(s(w))+" bedroom",1)):u("",!0),d(" "+a(s(S))+" for "+a(s(x))+" ",1),s(v)?(i(),c("span",Te," in "+a(s(v)),1)):u("",!0),De,s(w)>0?(i(),c("span",Ie,a(s(w))+" bedroom",1)):u("",!0),d(" "+a(s(S))+" for "+a(s(x))+" ",1),s(v)?(i(),c("span",Ue,"in "+a(s(v)),1)):u("",!0),d(" is \u20A6"+a(o.stat.average)+". The most expensive "+a(s(S))+" costs \u20A6"+a(o.stat.max)+" while the cheapest costs \u20A6"+a(o.stat.min)+". The "+a(s(S))+" have been listed by estate agents and agencies who can be contacted using the contact information provided for each house listing. The list can be filtered by price, views and recency.",1)])):u("",!0)])])):u("",!0),s(S).length==0?(i(),c("div",Be,[e("p",null,[o.stat?(i(),c("span",Ee,[d(" There are "+a(o.stat.statcount)+" listings ",1),s(w)>0?(i(),c("span",je,"of "+a(s(w))+" bedroom",1)):u("",!0),d(" for "+a(s(x))+" ",1),s(v)?(i(),c("span",qe," in "+a(s(v))+",",1)):u("",!0),d(" Nigeria. The average price of listings for "+a(s(x))+" ",1),s(v)?(i(),c("span",Ve," in "+a(s(v)),1)):u("",!0),d(" is \u20A6"+a(o.stat.average)+". The most expensive listing costs \u20A6"+a(o.stat.max)+" while the cheapest costs \u20A6"+a(o.stat.min)+". The listings have been listed by estate agents and agencies who can be contacted using the contact information provided for each house listing. The list can be filtered by price, views and recency.",1)])):u("",!0)])])):u("",!0),e("div",Ae,[(i(!0),c(H,null,V(o.props.data,t=>(i(),c("div",{key:t.id,class:"item col-lg-4 col-md-6 col-xs-12 landscapes sale"},[e("div",Ge,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[e("div",Me,[e("div",Oe,[e("h4",null,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[ze]),_:2},1032,["href"]),Je])]),e("div",Ke,[_(s(f),{href:n.route("propertyDetails",y(t)),class:"homes-img"},{default:h(()=>[Qe,e("div",We,"For "+a(t.category),1),e("div",Xe,a(t.type),1),t.image?(i(),c("img",{key:0,src:`/photos/${t.image.image_name}`,alt:"home-1",class:"img-responsive"},null,8,Ye)):u("",!0)]),_:2},1032,["href"])]),e("div",Ze,[_(s(f),{href:n.route("propertyDetails",y(t)),class:"btn"},{default:h(()=>[et]),_:2},1032,["href"]),t.video?(i(),c("a",{key:0,href:t.video.replace(")","https://").replaceAll("(","."),class:"btn popup-video popup-youtube"},at,8,tt)):u("",!0),_(s(f),{href:n.route("propertyDetails",y(t)),class:"img-poppu btn"},{default:h(()=>[ot]),_:2},1032,["href"])])])]),_:2},1032,["href"]),e("div",nt,[e("h3",it,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[d(a(t.title),1)]),_:2},1032,["href"])]),e("p",lt,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[rt,e("span",null,a(t.location),1)]),_:2},1032,["href"])]),e("ul",ct,[e("li",dt,[ht,e("span",null,a(t.bedroom)+" Bedrooms",1)]),e("li",ut,[mt,e("span",null,a(t.bathroom)+" Bathrooms",1)]),t.area?(i(),c("li",_t,[ft,e("span",null,a(t.area)+"/"+a(t.unit),1)])):u("",!0),e("li",gt,[pt,e("span",null,a(t.parking)+" Cars",1)])]),n.$page.props.auth.user?(i(),c("div",yt,[e("h3",bt,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[d(a(t.amount),1)]),_:2},1032,["href"])]),e("div",vt,[kt,wt,t.bookmarks.length>0?(i(),N(s(f),{key:0,"preserve-scroll":"",href:n.route("deleteBookmark",t.bookmarks[0].id),title:"Favorites"},{default:h(()=>[St]),_:2},1032,["href"])):(i(),N(s(f),{key:1,"preserve-scroll":"",href:n.route("addBookmark",t.id),title:"Favorites"},{default:h(()=>[$t]),_:2},1032,["href"]))])])):(i(),c("div",Lt,[e("h3",Rt,[_(s(f),{href:n.route("propertyDetails",y(t))},{default:h(()=>[d(a(t.amount),1)]),_:2},1032,["href"])]),e("div",Ft,[Pt,xt,_(s(f),{"preserve-scroll":"",href:n.route("addBookmark",t.id),title:"Favorites"},{default:h(()=>[Ct]),_:2},1032,["href"])])])),e("div",Nt,[_(s(f),{href:n.route("agentDetails",t.user.id)},{default:h(()=>[Ht,d(" "+a(t.user.name),1)]),_:2},1032,["href"]),e("span",null,[Tt,d(" "+a(t.created_at_diff),1)])])])])]))),128))]),_(O,{paginations:o.props.links},null,8,["paginations"])])])]),_:1})],64))}},qt=z(Dt,[["__scopeId","data-v-05ced0d9"]]);export{qt as default};