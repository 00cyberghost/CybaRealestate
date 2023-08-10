import{l as f,s as D,G as j,o as E,b as m,c as u,e,g as z,x as y,z as T,u as a,F as B,q as L,t as x,E as I,n as H,h as F,v as G,p as W,k as Y,f as k,r as N,d as r,w,a as K,H as J}from"./app.d90bbe21.js";import{G as Q}from"./GuestLayout.b53f0dbb.js";/* empty css                                                                   */import{_ as X}from"./_plugin-vue_export-helper.cdc0426e.js";import{R as Z,_ as ee}from"./PopularPlaces.14fa75ab.js";import"./Header.bc701b30.js";import"./Pagination.d34dce06.js";/* empty css                                                                         */const i=c=>(W("data-v-1c03df7c"),c=c(),Y(),c),te={class:"home17 overlay home-three bg-img3 maxw1600 m0a homepage-2 the-search hd-white"},ae={class:"hero-main"},se={class:"container",style:{"z-index":"10000 !important",postion:"relative"},"data-aos":"zoom-in"},oe={class:"row"},le=i(()=>e("div",{class:"col-12"},[e("div",{class:"banner-inner"},[e("h5",{class:"sub-title"},"We Have Over Million Properties For You"),e("h1",{class:"title"},[k("Find Your "),e("br"),k(" Dream Home")])])],-1)),ne=["onSubmit"],ie={class:"col-12"},ce={class:"banner-search-wrap"},de=F('<ul class="nav nav-tabs rld-banner-tab" data-v-1c03df7c><li class="nav-item" data-v-1c03df7c><a class="nas nav-link active" data-toggle="tab" data-value="sale" href="#tabs_1" data-v-1c03df7c>For Sale</a></li><li class="nav-item" data-v-1c03df7c><a class="nas nav-link" data-toggle="tab" data-value="rent" href="#tabs_2" data-v-1c03df7c>For Rent</a></li><li class="nav-item" data-v-1c03df7c><a class="nas nav-link" data-toggle="tab" data-value="shortlet" href="#tabs_3" data-v-1c03df7c>Shortlet</a></li></ul>',1),re={class:"tab-content"},me={class:"tab-pane fade show active"},ue={class:"rld-main-search"},pe={class:"row"},he={class:"col-md-4 form-group categories",id:"a"},ve={class:"autocomplete"},_e={class:"autocomplete-items"},fe={class:"rld-single-select ml-22",id:"b"},ge=i(()=>e("option",{disabled:"",value:""},"Please Select Type",-1)),be=i(()=>e("option",null,"Flat",-1)),ye=i(()=>e("option",null,"House",-1)),$e=i(()=>e("option",null,"Commercial Property",-1)),we=i(()=>e("option",null,"Land",-1)),Se=[ge,be,ye,$e,we],xe={class:"rld-single-select d-none",id:"c"},ke=i(()=>e("span",null,"more",-1)),Ee=[ke],Be={class:"col-xl-2 col-lg-2 col-md-4 pl-0"},Fe=["disabled"],Ae={class:"explore__form-checkbox-list full-filter"},Ie=i(()=>e("label",{class:"mb-5"},"Minimum Price",-1)),Le=i(()=>e("div",{class:"text-center"},[e("small",{id:"min-price-id",class:"text-danger"})],-1)),Ce=i(()=>e("label",{class:"mb-5"},"Max Price",-1)),Pe=i(()=>e("div",{class:"text-center"},[e("small",{id:"max-price-id",class:"text-danger"})],-1)),Re=F('<div class="col-lg-4 col-md-4 dropdown" data-v-1c03df7c><label class="mb-5" data-v-1c03df7c>Property Ref</label><div class="form-group categories" data-v-1c03df7c><input id="ref" type="number" name="ref" data-v-1c03df7c></div><div class="text-center" data-v-1c03df7c><small id="ref-id" class="text-danger" data-v-1c03df7c></small></div></div>',1),Te=F('<div class="col-lg-4 col-md-4 dropdown" data-v-1c03df7c><label class="mb-5" data-v-1c03df7c>No Of Bedrooms</label><div class="form-group categories" data-v-1c03df7c><input id="bedroom" type="range" min="0" max="10" value="0" class="slider" name="bedroom" data-v-1c03df7c><div class="float-left" data-v-1c03df7c>0</div><small data-v-1c03df7c>\xA0Bedrooms</small></div><div class="text-center" data-v-1c03df7c><small id="bed-id" class="text-danger" data-v-1c03df7c></small></div></div><div class="col-lg-4 col-md-4 dropdown" data-v-1c03df7c><label class="mb-5" data-v-1c03df7c>No Of Bathrooms</label><div class="form-group categories" data-v-1c03df7c><input id="bathroom" type="range" min="0" max="10" value="0" class="slider" name="bathroom" data-v-1c03df7c><div class="float-left" data-v-1c03df7c>0</div><small data-v-1c03df7c>\xA0Bathrooms</small></div><div class="text-center" data-v-1c03df7c><small id="bath-id" class="text-danger" data-v-1c03df7c></small></div></div><div class="col-lg-4 col-md-4 dropdown" data-v-1c03df7c><label class="mb-5" data-v-1c03df7c>Parking Space</label><div class="form-group categories" data-v-1c03df7c><input id="parking" type="range" min="0" max="10" value="0" class="slider" name="parking" data-v-1c03df7c><div class="float-left" data-v-1c03df7c>0</div><small data-v-1c03df7c>\xA0Cars</small></div><div class="text-center" data-v-1c03df7c><small id="park-id" class="text-danger" data-v-1c03df7c></small></div></div>',3),He=[Te],Ne={class:"row",id:"area-row"},qe={class:"col-lg-6 col-md-6 dropdown"},Me=i(()=>e("label",{class:"mb-5"},"Area",-1)),Oe={class:"form-group categories"},Ue=i(()=>e("div",{class:"text-center"},[e("small",{id:"area-id",class:"text-danger"})],-1)),Ve={class:"col-lg-6 col-md-6 dropdown"},De=i(()=>e("label",{class:"mb-5"},"Units",-1)),je={class:"form-group categories"},ze=F('<option data-v-1c03df7c></option><option value="Sqm (m2)" data-v-1c03df7c>Sqm (m2)</option><option value="Sqf (sqft)" data-v-1c03df7c>Sqf (sqft)</option><option value="Sqyards" data-v-1c03df7c>Sqyards</option><option value="Plot" data-v-1c03df7c>Plot</option><option value="Acre" data-v-1c03df7c>Acre</option><option value="Hectare" data-v-1c03df7c>Hectare</option>',7),Ge=[ze],We=i(()=>e("div",{class:"text-center"},[e("small",{id:"unit-id",class:"text-danger"})],-1)),Ye={__name:"SearchForm",setup(c){let l=f(!0);const p=()=>l.value=!l.value,h=d=>{let o=/[0-9]/,t=d.target;if(t.value.match(o)){let v=t.value.replaceAll(",",""),A=parseInt(v).toLocaleString();v.length>0&&(t.value=A)}else t.value=""},n=d=>{let o=d.target.value,t=document.querySelector(".nas.active").getAttribute("data-value");G.get(route("searchLocation",[t,o])).then(v=>C.value=v.data)},q=d=>{let o=d.target.textContent;document.getElementById("search").value=o;var t=document.querySelectorAll(".autocomplete-items div");t.forEach(v=>{v.remove()})};let M=f(!1);const s=D({category:"",location:"",type:"",subtype:"",minprice:null,maxprice:null,ref:null,bedroom:null,bathroom:null,parking:null,area:"",unit:""}),O=()=>{s.category=document.querySelector(".nas.active").getAttribute("data-value");let d=document.getElementById("search").value;d.length>0&&(s.location=encodeURI(d)),s.ref=document.getElementById("ref").value,s.bedroom=document.getElementById("bedroom").value,s.bathroom=document.getElementById("bathroom").value,s.parking=document.getElementById("parking").value,s.minprice=document.getElementById("min-price").value.replaceAll(",",""),s.maxprice=document.getElementById("max-price").value.replaceAll(",",""),s.get(route("searchResult"))};let C=f([]);f(null);let b=f(null),P=f(null),R=f(null);return f([]),j(()=>{b.value.destroy(),P.value.destroy(),R.value.destroy()}),E(()=>{b.value=NiceSelect.bind(document.getElementById("subtype"),{searchable:!0,placeholder:"Select Subtype"}),P.value=NiceSelect.bind(document.getElementById("type"),{searchable:!0,placeholder:"Select type"}),R.value=NiceSelect.bind(document.getElementById("unit"),{searchable:!0}),$("#area-row").hide(),$("#type").on("change",function(){document.getElementById("c").classList.remove("d-none");var S=["Penthouse","Bungalow","Mansion","Terrace","Detached","Semi-Detached","Block of Flat"],A=["Flat/Apartment","Mini-Flat","Self-Contain"],U=["Event Center","Warehouse/Store","Lockup Shop","Tank Farm","University Area","Petrol Station","Church","Factory","Hotel","Office Space","Plaza / Complex / Mall","Restaurant / Bar"],V=["commercial","Multi-Use","Residential","Farm Land","Industrial Land"],_=$("#subtype");$(this).val()=="Flat"&&(_.empty(),A.forEach(function(g){_.append("<option>"+g.toString()+"</option>")}),b.value.update()),$(this).val()=="House"&&(_.empty(),S.forEach(function(g){_.append("<option>"+g.toString()+"</option>")}),b.value.update()),$(this).val()=="Commercial Property"&&(_.empty(),U.forEach(function(g){_.append("<option>"+g.toString()+"</option>")}),b.value.update()),$(this).val()=="Land"?(_.empty(),V.forEach(function(g){_.append("<option>"+g.toString()+"</option>")}),b.value.update(),t(),o()):v()}),$(".property-search-type label").on("click",function(){$(".property-search-type label").each(function(S){$(this).removeClass("active")}),$(this).addClass("active")}),$("input[type=range]").change(function(){$(this).next().text($(this).val())});let d=()=>$("#area-row").hide(),o=()=>$("#area-row").show(),t=()=>$("#room-row").hide(),v=()=>$("#room-row").show();$("input[name=status]").on("change",function(){$(this).val()=="shortlet"?d():o()})}),(d,o)=>(m(),u("section",te,[e("div",ae,[e("div",se,[e("div",oe,[le,e("form",{onSubmit:z(O,["prevent"]),id:"form"},[e("div",ie,[e("div",ce,[de,e("div",re,[e("div",me,[e("div",ue,[e("div",pe,[e("div",he,[e("div",ve,[y(e("input",{onKeyup:n,"onUpdate:modelValue":o[0]||(o[0]=t=>a(s).location=t),id:"search",type:"text",name:"myCountry",placeholder:"search location"},null,544),[[T,a(s).location]]),e("div",_e,[(m(!0),u(B,null,L(a(C),t=>(m(),u("div",{onClick:q,key:t},x(t.locality)+", "+x(t.local_government)+", "+x(t.state),1))),128))])])]),e("div",fe,[y(e("select",{id:"type","onUpdate:modelValue":o[1]||(o[1]=t=>a(s).type=t),class:"select single-select"},Se,512),[[I,a(s).type]])]),e("div",xe,[y(e("select",{id:"subtype","onUpdate:modelValue":o[2]||(o[2]=t=>a(s).subtype=t),class:"select single-select mr-0"},null,512),[[I,a(s).subtype]])]),e("div",{class:"dropdown-filter",onClick:p},Ee),e("div",Be,[e("button",{disabled:a(M),id:"submit-button",type:"submit",class:"btn btn-yellow"},"Search Now",8,Fe)]),e("div",Ae,[e("div",{class:H(["row",{"d-none":a(l)==!0}])},[e("div",{class:"col-lg-4 col-md-4 dropdown"},[Ie,e("div",{class:"form-group categories"},[e("input",{onkeyup:h,id:"min-price",class:"curved",type:"tel",name:"min-price"})]),Le]),e("div",{class:"col-lg-4 col-md-4 dropdown"},[Ce,e("div",{class:"form-group categories"},[e("input",{onkeyup:h,id:"max-price",type:"tel",name:"max-price"})]),Pe]),Re],2),e("div",{class:H(["row",{"d-none":a(l)==!0}]),id:"room-row"},He,2),e("div",Ne,[e("div",qe,[Me,e("div",Oe,[y(e("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>a(s).area=t),type:"number",class:"full",placeholder:"Area",id:"area",name:"area"},null,512),[[T,a(s).area]])]),Ue]),e("div",Ve,[De,e("div",je,[y(e("select",{"onUpdate:modelValue":o[4]||(o[4]=t=>a(s).unit=t),name:"unit",id:"unit",class:"full nice-select form-control wide"},Ge,512),[[I,a(s).unit]])]),We])])])])])])])])])],40,ne)])])])]))}},Ke=X(Ye,[["__scopeId","data-v-1c03df7c"]]),Je={class:"team bg-white-3"},Qe={class:"container-fluid"},Xe=e("div",{class:"section-title col-md-5"},[e("h3",null,"Meet Our"),e("h2",null,"Agents")],-1),Ze={class:"row team-all"},et={class:"inner-box team-details"},tt={class:"image team-head"},at=["src"],st={class:"team-hover"},ot={class:"team-social"},lt=["href"],nt=e("i",{class:"fa fa-facebook"},null,-1),it=[nt],ct=["href"],dt=e("i",{class:"fa fa-twitter"},null,-1),rt=[dt],mt=["href"],ut=e("i",{class:"fa fa-instagram"},null,-1),pt=[ut],ht=["href"],vt=e("i",{class:"fa fa-youtube"},null,-1),_t=[vt],ft={class:"lower-box"},gt=e("div",{class:"designation"},"Real Estate Agent",-1),bt={__name:"AgentGrid",props:{props:Object},setup(c){return E(()=>{let l=document.querySelectorAll(".team-block").length,p;l<4?p=l:p=4,$(".team-all").slick({infinite:!1,slidesToShow:p,slidesToScroll:1,dots:!0,arrows:!1,adaptiveHeight:!0,responsive:[{breakpoint:1292,settings:{slidesToShow:3,slidesToScroll:2,dots:!0,arrows:!1}},{breakpoint:993,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}},{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]})}),(l,p)=>{const h=N("Link");return m(),u("section",Je,[e("div",Qe,[Xe,e("div",Ze,[(m(!0),u(B,null,L(c.props.data,n=>(m(),u("div",{key:n.id,class:"team-block col-sm-6 col-md-4 col-lg-4 col-xl-3","data-aos":"fade-up","data-aos-delay":"150"},[e("div",et,[e("div",tt,[r(h,{href:l.route("agentDetails",n.id)},{default:w(()=>[e("img",{src:`/photos/${n.photo}`,alt:""},null,8,at)]),_:2},1032,["href"]),e("div",st,[e("ul",ot,[e("li",null,[e("a",{href:n.facebook,class:"facebook"},it,8,lt)]),e("li",null,[e("a",{href:n.twitter,class:"twitter"},rt,8,ct)]),e("li",null,[e("a",{href:n.instagram,class:"instagram"},pt,8,mt)]),e("li",null,[e("a",{href:n.youtube,class:"linkedin"},_t,8,ht)])])])]),e("div",ft,[e("h3",null,[r(h,{href:l.route("agentDetails",n.id)},{default:w(()=>[k(x(n.name),1)]),_:2},1032,["href"])]),gt])])]))),128))])])])}}},yt={class:"partners bg-white-3"},$t={class:"container-fluid"},wt=e("div",{class:"section-title"},[e("h2",null,[e("span",null,"Our "),k("Partners")]),e("h3",null,"Agencies")],-1),St={class:"owl-carousel style2"},xt=["src"],kt={__name:"AgencyGrid",props:{props:Object},setup(c){return E(()=>{$(".style2").owlCarousel({loop:!0,margin:0,dots:!1,autoWidth:!1,autoplay:!0,autoplayTimeout:5e3,responsive:{0:{items:2,margin:20},400:{items:2,margin:20},500:{items:3,margin:20},768:{items:4,margin:20},992:{items:5,margin:20},1e3:{items:6,margin:20}}})}),(l,p)=>{const h=N("Link");return m(),u("section",yt,[e("div",$t,[wt,e("div",St,[(m(!0),u(B,null,L(c.props.data,n=>(m(),u("div",{key:n.id,class:"owl-item"},[r(h,{href:l.route("agencyDetails",n.id)},{default:w(()=>[e("img",{src:`/photos/${n.photo}`,alt:""},null,8,xt)]),_:2},1032,["href"])]))),128))])])])}}},Et=e("title",null,"Houses, Flats, Lands and real estate properties for rent, sale and shortlets in nigeria",-1),Bt=e("meta",{name:"description",content:"Houses, Flats, Lands and real estate properties for rent, sale and shortlets in nigeria"},null,-1),Ft=["content"],At=["content"],It=e("meta",{property:"og:title",content:"Houses, Flats, Lands and real estate in Nigeria"},null,-1),Lt=e("meta",{property:"og:type",content:"website"},null,-1),Ct=e("meta",{property:"og:description",content:"Real Estate in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments"},null,-1),Pt=e("meta",{name:"twitter:card",content:"summary_large_image"},null,-1),Rt=["content"],Tt=["content"],Ht=["content"],Nt=e("meta",{name:"twitter:title",content:"Houses, Flats, Lands and real estate in Nigeria"},null,-1),qt=e("meta",{name:"twitter:description",content:"Real Estate in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments"},null,-1),Wt={__name:"Home",props:{recentProperties:Object,agents:Object,agencies:Object},setup(c){let l=location.hostname,p=location.hostname+location.pathname;return E(()=>{$("body").addClass("homepage-9 hp-6 homepage-1 mh")}),K(()=>{$("body").removeClass("homepage-9 hp-6 homepage-1 mh")}),(h,n)=>(m(),u(B,null,[r(a(J),null,{default:w(()=>[Et,Bt,e("meta",{property:"og:url",content:`https://${a(p)}`},null,8,Ft),e("meta",{property:"og:image",content:`https://${a(l)}/images/logo.svg`},null,8,At),It,Lt,Ct,Pt,e("meta",{name:"twitter:site",content:`https://${a(l)}`},null,8,Rt),e("meta",{name:"twitter:creator",content:`https://${a(l)}`},null,8,Tt),e("meta",{name:"twitter:image",content:`https://${a(l)}/images/logo.png`},null,8,Ht),Nt,qt]),_:1}),r(Q,null,{default:w(()=>[r(Ke),r(Z,{props:c.recentProperties},null,8,["props"]),r(ee),r(kt,{props:c.agencies},null,8,["props"]),r(bt,{props:c.agents},null,8,["props"])]),_:1})],64))}};export{Wt as default};
