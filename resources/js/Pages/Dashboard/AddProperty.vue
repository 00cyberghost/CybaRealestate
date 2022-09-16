<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import DashboardHeader from '@/Components/Dashboard/DashboardHeader.vue'
import DashboardSidebar from '@/Components/Dashboard/DashboardSidebar.vue'
import DashboardMobilebar from '@/Components/Dashboard/DashboardMobilebar.vue'
import DashboardFooter from '@/Components/Dashboard/DashboardFooter.vue'
import DashboardPagination from '@/Components/Dashboard/DashboardPagination.vue'
import Button from '@/Components/Button.vue'
import { onMounted } from 'vue'


onMounted(() => {
    
    //link the submit property javascript script to the component
    $('#mice').append('<script src="/js/submit-property.js">');





})





</script>
<template>
<Head title="Dashboard" />
<DashboardHeader />
<!-- START SECTION DASHBOARD -->
<section class="user-page section-padding pt-5">
    <div class="container-fluid">
        <div class="row">

            <!--dashboardsidebar-->
            <DashboardSidebar />
            <!--dashboardsidebar---->

            <div class="col-lg-9 col-md-12 col-xs-12 pl-0 royal-add-property-area section_100 user-dash2">

                <!--MobileSidebar-->
                <DashboardMobilebar />
                <!--MobileSidebar end-->

                <div class="single-add-property">
                    <h3>Add Property</h3>
                    <div class="property-form-group">
                    
                        <div class="row">
                            <div class="col-lg-12 col-md-12 mb70">
                            <h5 class="uppercase mb40">
                                <div id="bar1" class="barfiller">
                                    <div class="tipWrap">
                                        <span class="tip"></span>
                                    </div>
                                    <span id="p-bar" class="fill" data-percentage="0"></span>
                                </div>
                            </h5>
                            <div class="tabbed-content button-tabs">
                                <ul class="tabs">
                                    <li id="one" class="active">
                                        <div class="tab-title">
                                            <span>1</span>
                                        </div>
                                        <div class="tab-content">
                                            
                                            
                                            <div class="property-form-group">
                                                <div class="row">

                                                    <div class="col-md-12">
                                                        <h3 class="text-center mb-5">This property is for:</h3>
                                                        
                                                        <div class="property-search-type">
                                                            <label class="float-left shadow"><input value="rent" name="status" type="radio">Rent</label>
                                                            <label class="float-left shadow"><input value="sale" name="status" type="radio">Sale</label>
                                                            <label class="float-left shadow"><input value="shortlet" name="status" type="radio">Shortlet</label>
                                                        </div>
                                                        
                                                        <div class="text-center"><small id="status-id" class="text-danger"></small></div>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        
                                                        <label class="mb-4" for="title">Property Title</label>
                                                        <input type="text" name="title" id="title" placeholder="Enter your property title">
                                                        <div class="text-center"><small id="title-id" class="text-danger"></small></div>
                                                        
                                                    </div>
                                                </div>

                                                <div class="row">
                            
                                                    <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                        <div class="form-group categories">
                                                            <label>Property Type</label>
                                                            
                                                            <select id="type" name="type" class="nice-select form-control wide">
                                                                <!--do not remove the first <option> it is being used in form validation-->
                                                                <option></option>
                                                                <option>Flat</option>
                                                                <option>House</option>
                                                                <option>Commercial property</option>
                                                                <option>Land</option>
                                                            </select>
                                                            
                                                        </div>
                                                            <div class="text-center"><small id="type-id" class="text-danger"></small></div>
                                                    </div>

                                                    <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                        <div class="form-group categories">
                                                            <label>Property Sub-type</label>
                                                            
                                                            <select id="subtype" name="sub_type" class="nice-select form-control wide"> 
                                                                
                                                            </select>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="subtype-id" class="text-danger"></small></div>
                                                    </div>
                                                    
                                                    
                                                </div>

                                                
                                            </div>
                                            
                                        </div>
                                    </li>
                                    <li id="two">
                                        <div class="tab-title">
                                            <span>2</span>
                                        </div>
                                        <div class="tab-content">
                                            
                                            <div class="property-form-group">
                                                <div class="row" id="room-row">
                                                    <div class="col-lg-4 col-md-12 dropdown faq-drop">
                                                        <label class="mb-5">No Of Bedrooms</label>
                                                        <div class="form-group categories">
                                                            
                                                            <input id="bedroom" type="range" min="0" max="10" value="0" class="slider" name="bedroom">
                                                            <div class="float-left">0</div><small>&nbsp;Bedrooms</small>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="bed-id" class="text-danger"></small></div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-12 dropdown faq-drop">
                                                        <label class="mb-5">No Of Bathrooms</label>
                                                        <div class="form-group categories">
                                                            
                                                            <input id="bathroom" type="range" min="0" max="10" value="0" class="slider" name="bathroom">
                                                            <div class="float-left">0</div><small>&nbsp;Bathrooms</small>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="bath-id" class="text-danger"></small></div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-12 dropdown faq-drop">
                                                        <label class="mb-5">Parking Space</label>
                                                        <div class="form-group categories">
                                                            
                                                            <input id="parking" type="range" min="0" max="10" value="0" class="slider" name="parking">
                                                            <div class="float-left">0</div><small>&nbsp;Cars</small>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="park-id" class="text-danger"></small></div>
                                                    </div>
                                                </div>
                                                <div class="row" id="area-row">
                                                    <div class="col-lg-6 col-md-12">
                                                        <label for="area">Area</label>
                                                        <p class="mt-4">
                                                            
                                                            <input type="number" placeholder="Area" id="area" name="area">
                                                        </p>
                                                        <div class="text-center"><small id="area-id" class="text-danger"></small></div>
                                                    </div>


                                                    <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                        <div class="form-group categories">
                                                            <label>Units</label>
                                                            
                                                            <select name="unit" id="unit" class="nice-select form-control wide">
                                                                <!--do not remove the first <option> it is being used in form validation-->
                                                                <option></option>
                                                                <option value="Sqm (m2)" >Sqm (m2)</option>
                                                                <option value="Sqf (sqft)" >Sqf (sqft)</option>
                                                                <option value="Sqyards" >Sqyards</option>
                                                                <option value="Plot" >Plot</option>
                                                                <option value="Acre" >Acre</option>
                                                                <option value="Hectare" >Hectare</option>
                                                            </select>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="unit-id" class="text-danger"></small></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="three">
                                        <div class="tab-title">
                                            <span>3</span>
                                        </div>
                                        <div class="tab-content">

                                            <div class="property-form-group">
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-12">
                                                        <label for="price">Price</label>
                                                        <p class="mt-4">
                                                            
                                                            <input type="number" placeholder="amount" id="price" name="price">
                                                        </p>
                                                        <div class="text-center"><small id="price-id" class="text-danger"></small></div>
                                                    </div>


                                                    <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                        <div class="form-group categories">
                                                            <label>Price Duration</label>
                                                            <select id="duration" name="duration" class="nice-select form-control wide">
                                                                <!--do not remove the first <option> it is being used in form validation-->
                                                                <option></option>
                                                                <option value="Year">Year</option>
                                                                <option value="Month">Month</option>
                                                                <option value="Week">Week</option>
                                                                <option value="Day">Day</option>
                                                                <option value="6 Months">6 Months</option>
                                                                <option value="2 Years">2 Years</option>
                                                            </select>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="duration-id" class="text-danger"></small></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="four">
                                        <div class="tab-title">
                                            <span>4</span>
                                        </div>
                                        <div class="tab-content">
                                            <div class="property-form-group">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>
                                                            <label for="description">Property Description</label>
                                                            <textarea id="description" name="description" placeholder="Describe about your property"></textarea>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="five">
                                        <div class="tab-title">
                                            <span>5</span>
                                        </div>
                                        <div class="tab-content">
                                            <div class="property-form-group">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12">
                                                        <label for="address">Enter address</label>
                                                        <p>
                                                            <small>allow google to find my address</small>
                                                            <input id="address1" type="text" name="google" placeholder="23 adekunle street ikoyi">
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-12">
                                                        <p>
                                                            <label for="address">Street Address</label>
                                                            <input type="text" name="address" placeholder="23 adekunle street ikoyi" id="address">
                                                        </p>
                                                        <div class="text-center"><small id="address-id" class="text-danger"></small></div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-12">
                                                        <p>
                                                            <label for="city">Locality</label>
                                                            <input type="text" name="locality" placeholder="Ikoyi" id="locality">
                                                        </p>
                                                        <div class="text-center"><small id="locality-id" class="text-danger"></small></div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                        <div class="form-group categories">
                                                            <label>State</label>
                                                            <select id="state" name="state" class="nice-select form-control wide">
                                                                
                                                            </select>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="state-id" class="text-danger"></small></div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                        <div class="form-group categories">
                                                            <label>Local Government</label>
                                                            <select id="local_government" name="local_government" class="nice-select form-control wide">
                                                                <option>Loading</option>
                                                            </select>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="local-government-id" class="text-danger"></small></div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </li>
                                    <li id="six">
                                        <div class="tab-title">
                                            <span>6</span>
                                        </div>
                                        <div class="tab-content">
                                            
                                            <div class="property-form-group">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ul class="pro-feature-add pl-0">
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-a" type="checkbox" name="check">
                                                                        <label for="check-a">Air Conditioning</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-b" type="checkbox" name="check">
                                                                        <label for="check-b">Swimming Pool</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-c" type="checkbox" name="check">
                                                                        <label for="check-c">Water Heater</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-d" type="checkbox" name="check">
                                                                        <label for="check-d">Security</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-e" type="checkbox" name="check">
                                                                        <label for="check-e">Gym</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-g" type="checkbox" name="check">
                                                                        <label for="check-g">Serviced</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-h" type="checkbox" name="check">
                                                                        <label for="check-h">Furnished</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-i" type="checkbox" name="check">
                                                                        <label for="check-i">Maid Quarters</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-j" type="checkbox" name="check">
                                                                        <label for="check-j">TV Cable</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fl-wrap filter-tags clearfix">
                                                                <div class="checkboxes float-left">
                                                                    <div class="filter-tags-wrap">
                                                                        <input id="check-k" type="checkbox" name="check">
                                                                        <label for="check-k">WiFi</label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="add-property-button pt-5">
                                               
                                                <Button>Save and Upload Pictures</Button>
                                                        
                                            </div>
                                        </div>
                                    </li>
                                    <li id="seven">
                                        <div class="tab-title">
                                            <span>7</span>
                                        </div>
                                        <div class="tab-content">
                                            <p>Upload Images</p>
                                            <div class="property-form-group">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <form action="https://code-theme.com/file-upload" class="dropzone"></form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!--end of button tabs-->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div class="pagination-container float-left">
                                    <nav>
                                        <ul >
                                            <li id="prev" class="page-item"><a class="btn btn-common"><i class="lni-chevron-left"></i> <i class="fas fa-angle-double-left"></i> </a></li>
                                            
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div class="pagination-container float-right">
                                    <nav>
                                        <ul >
                                            <li id="next" class="page-item"><a class="btn btn-common"><i class="lni-chevron-left"></i> <i class="fas fa-angle-double-right"></i> </a></li>
                                            
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- START FOOTER -->
                <DashboardFooter />
                <!--STOP FOOTER-->
            </div>
        </div>
    </div>
</section>
<!-- END SECTION DASHBOARD -->

<a data-scroll href="#wrapper" class="go-up"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
<!-- END FOOTER -->
</template>


<style scoped>
    /* Search Type Buttons*/
    .property-search-type {
        display: table;
        padding-bottom: 35px;
        position: relative;
        margin: 0 auto;
    }

    .property-search-type input[type="radio"] { display: none; }

    .property-search-type label {
        background-color: #fff;
      color: #333;
      cursor: pointer;
      display: inline-block;
      text-align: center;
      padding: 11px 15px;
      margin: 0 0.6em 0 0;
      transition: all 0.2s;
      border-radius: 4px;
      border: 3px solid rgba(0, 22, 84, 0.1);
    
      
    }

    .sphere{

        border-radius: 50% !important;
    }

    .property-search-type label:hover,
    .property-search-type label.active {
        background-color:black;
        color: #fff;
    }


    .slider {
      -webkit-appearance: none;
      width: 100%;
      height: 15px;
      border-radius: 5px;  
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%; 
      background: black;
      cursor: pointer;
    }

    .slider::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: black;
      cursor: pointer;
    }

    .tab-title{

        display: none !important;
    }

    .button-tabs .tabs {

        display: none !important;
    }



</style>
    

