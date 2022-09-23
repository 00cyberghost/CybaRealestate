<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import DashboardHeader from '@/Components/Dashboard/DashboardHeader.vue'
import DashboardSidebar from '@/Components/Dashboard/DashboardSidebar.vue'
import DashboardMobilebar from '@/Components/Dashboard/DashboardMobilebar.vue'
import DashboardFooter from '@/Components/Dashboard/DashboardFooter.vue'
import DashboardPagination from '@/Components/Dashboard/DashboardPagination.vue'
import Button from '@/Components/Button.vue';
import { onMounted,onUnmounted } from 'vue'


onMounted(() => {

$('body').addClass('inner-pages maxw1600 m0a dashboard-bd ui-elements');
    
var states = $('#state');

var localGovernments = $('#local_government');

//loads states from a json file in when the document is loading
function loadStates(){

    fetch('/json/states.json').
    then(function(response){

        return response.json();

    
    }).then(function(data){

        states.append('<option></option>');

        for(var i = 0; i < data.length; i++){

            states.append('<option>' + data[i].state.name + '</option>');


        }
        
        //bind to state
        bindSelectToOne('state');
    });
}

loadStates();

//loads the local governments of a given state when a state is selected
states.on('change',function(){

    localGovernments.empty();

    fetch('./json/states.json').
    then(function(response){

        return response.json();
    }).
    then(function(data){

        for(var i = 0; i < data.length; i++){

            if(states.val() == data[i].state.name){

                //clear the options
                localGovernments.empty();


                for(var x = 0; x < data[i].state.locals.length; x++){

                    localGovernments.append('<option>' + data[i].state.locals[x].name + '</option');
                }
            }
        }


    })
});

//this function populates the property subtype select box based on the property type selected
$('#type').on('change',function(){
        
    var houseType = ['Penthouse','Bungalow','Mansion','Terrace','Detached','Semi-Detached','Block of Flat'];

    var flatType = ['Flat/Apartment','Mini-Flat','Self-Contain'];

    var commercialType = ['Event Center', 'Warehouse/Store','Lockup Shop','Tank Farm','University Area','Petrol Station','Church','Factory','Hotel','Office Space','Plaza / Complex / Mall','Restaurant / Bar'];

    var landType = ['commercial','Multi-Use','Residential','Farm Land','Industrial Land']; 

    var propertySubtype = $('#subtype');

    //when property type is a flat
    if($(this).val() == 'Flat'){
            
        propertySubtype.empty();

        

        flatType.forEach(function(e){
                
            propertySubtype.append('<option>' + e.toString() + '</option>');

        });
            
     


            
    }

    //when property type is a house
    if($(this).val() == 'House'){
            
        propertySubtype.empty();

        

        houseType.forEach(function(e){
                
            propertySubtype.append('<option>' + e.toString() + '</option>');

        });

            
    }

    //when property type is a commercial property
    if($(this).val() == 'Commercial Properties'){
            
        propertySubtype.empty();

        

        commercialType.forEach(function(e){
                
            propertySubtype.append('<option>' + e.toString() + '</option>');

        });

        
            
    }

    //when property type is a land
    if($(this).val() == 'Land'){
            
        propertySubtype.empty();

        

        landType.forEach(function(e){
                
            propertySubtype.append('<option>' + e.toString() + '</option>');

        });


        hideRoomRow();
        showAreaRow();
    
    }else{

        showRoomRow();
       
    }

        
            
    



});



//add and remove class of active from property status
$('.property-search-type label').on('click',function(){
     
    $('.property-search-type label').each(function(e){
        
        $(this).removeClass('active');
    });


    $(this).addClass('active');

     
});

//add range value to the next element. This is used as an indicator for range value
$('input[type=range]').change(function(){
    
    $(this).next().text($(this).val());
});

//initiate tinymce text editor
tinymce.init({
    selector: '#description'
});

//hide area row
let hideAreaRow = () => $('#area-row').hide();

//show area row
let showAreaRow = () => $('#area-row').show();

//hide bedroom row
let hideRoomRow = () => $('#room-row').hide();

//show bedroom row
let showRoomRow = () => $('#room-row').show();

//hide area and units if the status = shortlet
$('input[name=status]').on('change',function(){

    let el = $(this);

    if(el.val() == 'shortlet'){

        hideAreaRow();
    
    }else{

        showAreaRow();
    }
});



//bind NiceSelect to all select elements
let bindSelectToAll = () => {

    let len = document.querySelectorAll('select');

    for (let i = 0; i < len.length; i++) {
       
        NiceSelect.bind(document.querySelectorAll("select")[i],{
            searchable: true
        });
    }
}

//bind NiceSelect to a specific select elements
//accepts the id of an element as function parameter
let bindSelectToOne = (id) => {

    NiceSelect.bind(document.getElementById(id),{
        searchable: true
    });
    
}

//destroy niceselect2 binding on an element
let unbindSelectToOne = (id) => {

    var instance = NiceSelect.bind(document.getElementById(id));

    instance.destroy();
    
}



//bind to type
bindSelectToOne('type');

//bind to subtype
//bindSelectToOne('subtype');

//bind to duration
bindSelectToOne('duration');

//bind to units
bindSelectToOne('unit');




})


//when the component is unmounted
onUnmounted(() => {
    //remove the classes that was added to the body tag during component mounting
    $('body').removeClass('inner-pages maxw1600 m0a dashboard-bd ui-elements');
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
                    <h3>Create Property Request</h3>

                    <div class="property-form-group">
                        <div class="row">

                            <div class="col-md-12">
                                <h3 class="text-center mb-5">This property is for:</h3>
                                
                                <div class="property-search-type">
                                    <label class="shadow"><input value="rent" name="status" type="radio">Rent</label>
                                    <label class="shadow"><input value="sale" name="status" type="radio">Sale</label>
                                    <label class="shadow"><input value="shortlet" name="status" type="radio">Shortlet</label>
                                </div>
                                
                                <div class="text-center"><small id="status-id" class="text-danger"></small></div>
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

                        </div>
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

                        <div class="row">
                            <Button class="mt-4">Create!</Button>
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
    

