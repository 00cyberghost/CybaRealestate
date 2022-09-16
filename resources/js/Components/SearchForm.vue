<script setup>
    import { Head,Link } from "@inertiajs/inertia-vue3"
    import { onMounted } from 'vue'


    onMounted(() => {

    $('#area-row').hide();

    
        


    //this function populates the property subtype select box based on the property type selected
    $('#type').on('change',function(){
            
        var houseType = ['Select An Option','Penthouse','Bungalow','Mansion','Terrace','Detached','Semi-Detached','Block of Flat'];

        var flatType = ['Select An Option','Flat/Apartment','Mini-Flat','Self-Contain'];

        var commercialType = ['Select An Option','Event Center', 'Warehouse/Store','Lockup Shop','Tank Farm','University Area','Petrol Station','Church','Factory','Hotel','Office Space','Plaza / Complex / Mall','Restaurant / Bar'];

        var landType = ['Select An Option','commercial','Multi-Use','Residential','Farm Land','Industrial Land']; 

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

    let el = document.getElementById(id);

    if(el.getAttribute('data-val') !== 'Yes'){

        NiceSelect.bind(el,{
            searchable: true
        });

        el.setAttribute('data-val','Yes');
    }

    
    
}

//destroy niceselect2 binding on an element
let unbindSelectToOne = (id) => {

    var instance = NiceSelect.bind(document.getElementById(id));

    instance.destroy();
    
}



// //bind to type
// bindSelectToOne('type');

// //bind to unitd
// bindSelectToOne('unit');




})

</script>
<template>
    <!-- START SLIDER -->
    <section class="home17 overlay home-three bg-img3 maxw1600 m0a homepage-2 the-search hd-white">
        <div class="hero-main">
            <div class="container" data-aos="zoom-in">
                <div class="row">
                    <div class="col-12">
                        <div class="banner-inner">
                            <h5 class="sub-title">We Have Over Million Properties For You</h5>
                            <h1 class="title">Find Your <br> Dream Home</h1>
                        </div>
                    </div>
                    <!-- Search Form -->
                    <div class="col-12">
                        
                        <div class="banner-search-wrap">
                            <div class="property-search-type">
                                <label class="active" data-toggle="tab"><input value="sale" name="status" type="radio">Sale</label>
                                <label data-toggle="tab"><input id="mon" name="status" value="rent" type="radio">Rent</label>
                                <label data-toggle="tab"><input id="mon" name="status" value="shortlet" type="radio">Shortlet</label>    
                            </div>
                            <div class="tab-content">
                                
                                <div class="tab-pane fade show active">
                                    <div class="rld-main-search">
                                        <div class="row">
                                            <div class="rld-single-input">
                                                <input type="text" placeholder="Enter Keyword...">
                                            </div>
                                            <div class="rld-single-select ml-22">
                                                <select id="type" class="select single-select">
                                                    <option>Please Select Type</option>
                                                    <option>Flat</option>
                                                    <option>House</option>
                                                    <option>Commercial property</option>
                                                    <option>Land</option>
                                                </select>
                                            </div>
                                            <div class="rld-single-select">
                                                <select id="subtype" class="select single-select mr-0">
                                                    
                                                </select>
                                            </div>
                                            <div class="dropdown-filter"><span>Advanced Search</span></div>
                                            <div class="col-xl-2 col-lg-2 col-md-4 pl-0">
                                                <Link :href="route('searchResult')" class="btn btn-yellow">Search Now</Link>
                                            </div>
                                            <div class="explore__form-checkbox-list full-filter">
                                                <div class="row" id="room-row">

                                                    <div class="col-lg-4 col-md-4 dropdown">
                                                        <label class="mb-5">No Of Bedrooms</label>
                                                        <div class="form-group categories">
                                                            
                                                            <input id="bedroom" type="range" min="0" max="10" value="0" class="slider" name="bedroom">
                                                            <div class="float-left">0</div><small>&nbsp;Bedrooms</small>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="bed-id" class="text-danger"></small></div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-4 dropdown">
                                                        <label class="mb-5">No Of Bathrooms</label>
                                                        <div class="form-group categories">
                                                            
                                                            <input id="bathroom" type="range" min="0" max="10" value="0" class="slider" name="bathroom">
                                                            <div class="float-left">0</div><small>&nbsp;Bathrooms</small>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="bath-id" class="text-danger"></small></div>
                                                    </div>

                                                    <div class="col-lg-4 col-md-4 dropdown">
                                                        <label class="mb-5">Parking Space</label>
                                                        <div class="form-group categories">
                                                            
                                                            <input id="parking" type="range" min="0" max="10" value="0" class="slider" name="parking">
                                                            <div class="float-left">0</div><small>&nbsp;Cars</small>
                                                            
                                                        </div>
                                                        <div class="text-center"><small id="park-id" class="text-danger"></small></div>
                                                    </div>
                                                   
                                                    
                                                </div>

                                                <div class="row" id="area-row">
                                                    <div class="col-lg-6 col-md-6">
                                                        <label for="area">Area</label>
                                                        <p class="mt-4">
                                                            
                                                            <input type="number" placeholder="Area" id="area" name="area">
                                                        </p>
                                                        <div class="text-center"><small id="area-id" class="text-danger"></small></div>
                                                    </div>


                                                    <div class="col-lg-6 col-md-6 dropdown">
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


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/ End Search Form -->
                </div>
            </div>
        </div>
    </section>
    <!-- END SLIDER -->
    <!-- END SECTION HEADINGS -->
</template>
<style scoped>
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
        margin: 0 15px 0 0;
        transition: all 0.2s;
        border-radius: 4px;
        
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

    .property-search-type label:hover,
    .property-search-type label.active {
        background-color:#fd5332;
        color: #fff;
    }

 



</style>