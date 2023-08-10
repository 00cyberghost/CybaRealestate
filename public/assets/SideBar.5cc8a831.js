import{l as f,v as q,s as B,o as A,r as E,b as n,c as l,e,u as i,t as o,f as c,i as u,g as y,F as N,q as F,d as w,w as x,h as p}from"./app.d90bbe21.js";const j={class:"single widget"},I={class:"sidebar"},P={key:0,class:"widget-boxed mt-33 mt-5"},R=e("div",{class:"widget-boxed-header"},[e("h4",null,"Agent Information")],-1),L={class:"widget-boxed-body"},V={class:"sidebar-widget author-widget2"},M={class:"author-box clearfix"},C=["src"],D={class:"author__title"},H=e("p",{class:"author__meta"},"Agent of Property",-1),T={class:"author__contact"},G={key:0},O=e("span",{class:"la la-map-marker"},[e("i",{class:"fa fa-map-marker"})],-1),U=["href"],Y=e("span",{class:"la la-phone"},[e("i",{class:"fa fa-phone","aria-hidden":"true"})],-1),z=["href"],J=e("span",{class:"la la-whatsapp"},[e("i",{class:"fa fa-whatsapp","aria-hidden":"true"})],-1),K=e("span",{class:"la la-envelope-o"},[e("i",{class:"fa fa-envelope","aria-hidden":"true"})],-1),Q={href:"#"},W={class:"agent-contact-form-sidebar"},X=e("h4",null,"Request Inquiry",-1),Z=["onSubmit"],ee=["value"],se=["value"],ae=["value"],te=e("textarea",{placeholder:"Message",id:"subject",name:"message",required:""},null,-1),ie=e("input",{type:"submit",id:"submit-but",name:"sendmessage",class:"multiple-send-message",value:"Submit Request"},null,-1),ne=["onSubmit"],le=p('<input type="text" id="name" name="full_name" placeholder="Full Name" required><input type="number" id="phone" name="phone_number" placeholder="Phone Number" required><input type="email" id="email" name="email_address" placeholder="Email Address" required><textarea placeholder="Message" id="subject" name="message" required></textarea><input type="submit" id="submit-but" name="sendmessage" value="Submit Request">',5),oe=[le],de={class:"main-search-field-2"},re=p('<div class="widget-boxed mt-5 d-none"><div class="widget-boxed-header mb-5"><h4>Feature Properties</h4></div><div class="widget-boxed-body"><div class="slick-lancers"><div class="agents-grid mr-0"><div class="listing-item compact"><a href="properties-details.html" class="listing-img-container"><div class="listing-badges"><span class="featured">$ 230,000</span><span>For Sale</span></div><div class="listing-img-content"><span class="listing-compact-title">House Luxury <i>New York</i></span><ul class="listing-hidden-content"><li>Area <span>720 sq ft</span></li><li>Rooms <span>6</span></li><li>Beds <span>2</span></li><li>Baths <span>3</span></li></ul></div><img src="/images/feature-properties/fp-1.jpg" alt=""></a></div></div></div></div></div>',1),ce={key:0,class:"widget-boxed mt-5"},ue=e("div",{class:"widget-boxed-header"},[e("h4",null,"Related Properties")],-1),me={class:"recent-post"},pe={class:"recent-main"},he={class:"recent-img"},_e=["src"],ge={class:"info-img"},ve=p('<div class="widget-boxed popular mt-5 d-none"><div class="widget-boxed-header"><h4>Specials of the day</h4></div><div class="widget-boxed-body"><div class="banner"><img src="/images/single-property/banner.jpg" alt=""></div></div></div><div class="widget-boxed popular mt-5 d-none"><div class="widget-boxed-header"><h4>Popular Tags</h4></div><div class="widget-boxed-body"><div class="recent-post"><div class="tags"><span><a href="#" class="btn btn-outline-primary">Houses</a></span><span><a href="#" class="btn btn-outline-primary">Real Home</a></span></div><div class="tags"><span><a href="#" class="btn btn-outline-primary">Baths</a></span><span><a href="#" class="btn btn-outline-primary">Beds</a></span></div><div class="tags"><span><a href="#" class="btn btn-outline-primary">Garages</a></span><span><a href="#" class="btn btn-outline-primary">Family</a></span></div><div class="tags"><span><a href="#" class="btn btn-outline-primary">Real Estates</a></span><span><a href="#" class="btn btn-outline-primary">Properties</a></span></div><div class="tags no-mb"><span><a href="#" class="btn btn-outline-primary">Location</a></span><span><a href="#" class="btn btn-outline-primary">Price</a></span></div></div></div></div>',2),ye={__name:"SideBar",props:{user:Object,category:String},setup(h){const a=h,_=s=>{let b=s.category.replaceAll(" ","-"),r=s.title.replaceAll(" ","-"),t=s.id,S=`for-${b}`,$=`${r}`.replaceAll("/","-");return[t,S,$]};let g=f(!1);const m=f([]),k=`https://${location.hostname}${location.pathname}`;q.get(`/sidebar/${a.category}`).then(s=>{m.value=s.data}).catch(s=>console.log(s)).finally(()=>console.log("success"));const d=B({user_id:"",name:"",phone:"",email:"",subject:""}),v=()=>{d.user_id=a.user.id,d.name=document.getElementById("name").value,d.phone=document.getElementById("phone").value,d.email=document.getElementById("email").value,d.subject=document.getElementById("subject").value,d.post(route("mailAgent"),{onStart:()=>{document.getElementById("submit-but").value="Sending>>>",g.value=!0},onFinish:()=>{document.getElementById("submit-but").value="Sent!!!",g.value=!1}})};return A(()=>{}),(s,b)=>{const r=E("Link");return n(),l("div",j,[e("div",I,[h.user?(n(),l("div",P,[R,e("div",L,[e("div",V,[e("div",M,[e("img",{src:`/photos/${i(a).user.photo}`,alt:"author-image",class:"author__img"},null,8,C),e("h6",D,o(i(a).user.name),1),H]),e("ul",T,[i(a).user.state?(n(),l("li",G,[e("address",null,[O,c(o(i(a).user.local_government)+", "+o(i(a).user.state),1)])])):u("",!0),e("li",null,[e("a",{href:`tel:${i(a).user.phone}`},[Y,c(o(i(a).user.phone.slice(0,6))+"...",1)],8,U)]),e("li",null,[e("a",{target:"_blank",href:`whatsapp://send?phone=+234${i(a).user.whatsapp}&text=hello i am interested in this property ${k}`},[J,c(o(i(a).user.whatsapp.slice(0,6))+"...",1)],8,z)]),e("li",null,[K,e("a",Q,o(i(a).user.email),1)])]),e("div",W,[X,s.$page.props.auth.user?(n(),l("form",{key:0,name:"contact_form",onSubmit:y(v,["prevent"])},[e("input",{disabled:"",type:"text",id:"name",value:s.$page.props.auth.user.name,name:"full_name",placeholder:"Full Name",required:""},null,8,ee),e("input",{disabled:"",type:"number",id:"phone",value:s.$page.props.auth.user.phone,name:"phone_number",placeholder:"Phone Number",required:""},null,8,se),e("input",{disabled:"",type:"email",id:"email",value:s.$page.props.auth.user.email,name:"email_address",placeholder:"Email Address",required:""},null,8,ae),te,ie],40,Z)):(n(),l("form",{key:1,name:"contact_form",onSubmit:y(v,["prevent"])},oe,40,ne))])])])])):u("",!0),e("div",de,[re,m.value?(n(),l("div",ce,[ue,(n(!0),l(N,null,F(m.value.data,t=>(n(),l("div",{class:"widget-boxed-body",key:t.id},[e("div",me,[e("div",pe,[e("div",he,[w(r,{href:s.route("propertyDetails",_(t))},{default:x(()=>[t.image?(n(),l("img",{key:0,src:`/photos/${t.image.image_name}`,alt:"",class:"rounded-md"},null,8,_e)):u("",!0)]),_:2},1032,["href"])]),e("div",ge,[e("h6",null,[w(r,{href:s.route("propertyDetails",_(t))},{default:x(()=>[c(o(t.title.slice(0,40)+"..."),1)]),_:2},1032,["href"])]),e("small",null,o(t.location.substring(0,38)+".."),1),e("div",null,o(t.amount),1)])])])]))),128))])):u("",!0),ve])])])}}};export{ye as _};
