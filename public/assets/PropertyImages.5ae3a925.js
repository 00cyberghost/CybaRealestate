import{o as n,a as d,r as i,b as p,c,d as s,u as l,w as t,F as u,H as m,e,f as _}from"./app.8edf34a8.js";import{_ as h}from"./DashboardLayout.1941c56a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const f={class:"my-properties"},g={class:"property-form-group"},v={class:"row"},y={class:"col-md-12"},b={class:"prperty-submit-button pt-5"},k=_("I Am Done With Pictures"),C={class:"col-md-12"},w={method:"post",action:"/dashboard/uploads",class:"dropzone",enctype:"multipart/form-data"},x=["value"],P=["value"],j={__name:"PropertyImages",props:{props:Object},setup(o){return n(()=>{$("body").addClass("inner-pages maxw1600 m0a dashboard-bd"),$(".header-user-name").on("click",function(){$(".header-user-menu ul").toggleClass("hu-menu-vis"),$(this).toggleClass("hu-menu-visdec")}),$(".dropzone").dropzone({dictDefaultMessage:"<i class='fa fa-cloud-upload'></i> Click or Drop Images Here To Uplod",acceptedFiles:".jpeg,.png,.gif,.JPEG,.Jpeg,.jpg,.PNG,.GIF",previewsContainer:document.querySelector(".dropzone"),maxFiles:20})}),d(()=>{$("body").removeClass("inner-pages maxw1600 m0a dashboard-bd")}),(a,F)=>{const r=i("Link");return p(),c(u,null,[s(l(m),{title:"Property Images"}),s(h,{props:o.props},{default:t(()=>[e("div",f,[e("div",g,[e("div",v,[e("div",y,[e("div",b,[s(r,{href:a.route("myProperties"),as:"button"},{default:t(()=>[k]),_:1},8,["href"])])]),e("div",C,[e("form",w,[e("input",{type:"hidden",value:o.props.token,name:"_token",id:"token_id"},null,8,x),e("input",{type:"hidden",value:o.props.property_id,name:"property_id",id:"property_id"},null,8,P)])])])])])]),_:1},8,["props"])],64)}}};export{j as default};