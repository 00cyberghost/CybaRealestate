<script setup>
    import { onMounted,ref,onBeforeUnmount } from 'vue'
    import { Link,useForm } from "@inertiajs/inertia-vue3"
    import axios from "axios";
   

    let toggler = ref(true)
    
    //show or hide row
    const toggleRow = () => toggler.value = !toggler.value

    //format price and add commas(,) to it
    const formatNum = (event) => {

        let pattern = /[0-9]/ ;

        let el = event.target

        if(el.value.match(pattern)){

            let a = el.value.replaceAll(',','')

            let d = parseInt(a)

            let b = d.toLocaleString()

            if(a.length > 0) el.value = b
    
        }else{

            el.value = ''
        }

    }

    //searchLocation
    const searchLocation = (event) => {

        let text = event.target.value

        let cat = document.querySelector('.nas.active').getAttribute('data-value')

        axios.get(route('searchLocation',[cat,text]))
        .then(res => locationArray.value = res.data)
        // .catch(error => console.log(error))
    }
    //hide location suggestion dropdown
    const hideItems = () => document.querySelector('.autocomplete-items').classList.add('d-none')
    
    //show location suggestion dropdown
    const showItems = () => document.querySelector('.autocomplete-items').classList.remove('d-none')
    
     /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    const closeAllLists =  (event) => {

        let el = event.target.textContent

        document.getElementById('search').value = el
   
        var x = document.querySelectorAll(".autocomplete-items div");
        
        x.forEach((e) => {

            e.remove()
        })
    }


    

    let processing = ref(false);

    const form = useForm({

        'category': '',
        'location': '',
        'type': '',
        'subtype': '',
        'minprice': null,
        'maxprice': null,
        'ref': null,
        'bedroom': null,
        'bathroom': null,
        'parking': null,
        'area': '',
        'unit':''
    })

    const initiateSearch = () => {

        
        form.category = document.querySelector('.nas.active').getAttribute('data-value')

        let locat = document.getElementById('search').value

        if(locat.length > 0){

            form.location = encodeURI(locat)
        }

        form.ref = document.getElementById('ref').value

        form.bedroom = document.getElementById('bedroom').value

        form.bathroom = document.getElementById('bathroom').value

        form.parking = document.getElementById('parking').value

        form.minprice = document.getElementById('min-price').value.replaceAll(',','')

        form.maxprice = document.getElementById('max-price').value.replaceAll(',','')

        form.get(route('searchResult'))
    }


    let locationArray = ref([])

    let searchInstatnce = ref(null)

    let subtypeInstatnce = ref(null)

    let typeInstatnce = ref(null)

    let unitInstatnce = ref(null)

    let propType = ref([])

   

    onBeforeUnmount(() => {

        subtypeInstatnce.value.destroy()

        typeInstatnce.value.destroy()

        unitInstatnce.value.destroy()
    })
    onMounted(() => {

        // document.getElementById('search').addEventListener('blur',closeAllLists,false)

        // document.getElementById('search').addEventListener('focus',showItems,false)

        
    
    //bind niceSelect to #subtype
    subtypeInstatnce.value =  NiceSelect.bind(document.getElementById('subtype'),{
        searchable: true,
        placeholder: 'Select Subtype'
    });

    //bind niceSelect to #type
    typeInstatnce.value =  NiceSelect.bind(document.getElementById('type'),{
        searchable: true,
        placeholder: 'Select type'
    });

    //bind niceSelect to #unit
    unitInstatnce.value =  NiceSelect.bind(document.getElementById('unit'),{
        searchable: true
    });

    
    $('#area-row').hide();

    //this function populates the property subtype select box based on the property type selected
    $('#type').on('change',function(){

        document.getElementById('c').classList.remove('d-none')
            
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

            subtypeInstatnce.value.update()
                
        }

        //when property type is a house
        if($(this).val() == 'House'){
                
            propertySubtype.empty();

            

            houseType.forEach(function(e){
                    
                propertySubtype.append('<option>' + e.toString() + '</option>');

            });

            subtypeInstatnce.value.update()

                
        }

        //when property type is a commercial property
        if($(this).val() == 'Commercial Property'){
                
            propertySubtype.empty();

            

            commercialType.forEach(function(e){
                    
                propertySubtype.append('<option>' + e.toString() + '</option>');

            });

            subtypeInstatnce.value.update()

            
                
        }

        //when property type is a land
        if($(this).val() == 'Land'){
                
            propertySubtype.empty();

            

            landType.forEach(function(e){
                    
                propertySubtype.append('<option>' + e.toString() + '</option>');

            });

            subtypeInstatnce.value.update()


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
            <div class="container" style="z-index: 10000 !important;postion:relative" data-aos="zoom-in">
                <div class="row">
                    <div class="col-12">
                        <div class="banner-inner">
                            <h5 class="sub-title">We Have Over Million Properties For You</h5>
                            <h1 class="title">Find Your <br> Dream Home</h1>
                        </div>
                    </div>
                    <!-- Search Form -->
                    <form @submit.prevent="initiateSearch" id="form"> 
                        <div class="col-12">
                            
                            <div class="banner-search-wrap">
                               
                                <ul class="nav nav-tabs rld-banner-tab">
                                    <li class="nav-item">
                                        <a class="nas nav-link active" data-toggle="tab" data-value="sale" href="#tabs_1">For Sale</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nas nav-link" data-toggle="tab" data-value="rent" href="#tabs_2">For Rent</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nas nav-link" data-toggle="tab" data-value="shortlet" href="#tabs_3">Shortlet</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    
                                    <div class="tab-pane fade show active">
                                        <div class="rld-main-search">
                                            <div class="row">
                                                <div class="col-md-4 form-group categories" id="a">
                                                    
                                                    <div class="autocomplete">
                                                        <input @keyup="searchLocation" v-model="form.location" id="search" type="text" name="myCountry" placeholder="search location">
                                                        <div class="autocomplete-items">
                                                           <div @click="closeAllLists" v-for="loc in locationArray" :key="loc">{{ loc.locality }}, {{ loc.local_government }}, {{ loc.state }}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rld-single-select ml-22" id="b">
                                                    <select id="type" v-model="form.type" class="select single-select">
                                                        <option disabled value="">Please Select Type</option>
                                                        <option>Flat</option>
                                                        <option>House</option>
                                                        <option>Commercial Property</option>
                                                        <option>Land</option>
                                                    </select>
                                                </div>
                                                <div class="rld-single-select d-none" id="c">
                                                    <select id="subtype" v-model="form.subtype" class="select single-select mr-0">
                                                        
                                                    </select>
                                                </div>
                                                <div class="dropdown-filter" @click="toggleRow"><span>more</span></div>
                                                <div class="col-xl-2 col-lg-2 col-md-4 pl-0">
                                                    <button :disabled="processing" id="submit-button" type="submit" class="btn btn-yellow">Search Now</button>
                                                </div>
                                                <div class="explore__form-checkbox-list full-filter">

                                                    <div class="row" :class="{'d-none': toggler == true}">
                                                        <div class="col-lg-4 col-md-4 dropdown">
                                                            <label class="mb-5">Minimum Price</label>
                                                            <div class="form-group categories">
                                                                <input :onkeyup="formatNum" id="min-price" class="curved" type="tel" name="min-price">
                                                            </div>
                                                            <div class="text-center"><small id="min-price-id" class="text-danger"></small></div>
                                                        </div>

                                                        <div class="col-lg-4 col-md-4 dropdown">
                                                            <label class="mb-5">Max Price</label>
                                                            <div class="form-group categories">
                                                                <input :onkeyup="formatNum" id="max-price" type="tel" name="max-price">
                                                            </div>
                                                            <div class="text-center"><small id="max-price-id" class="text-danger"></small></div>
                                                        </div>

                                                        <div class="col-lg-4 col-md-4 dropdown">
                                                            <label class="mb-5">Property Ref</label>
                                                            <div class="form-group categories">
                                                                <input id="ref" type="number" name="ref">
                                                            </div>
                                                            <div class="text-center"><small id="ref-id" class="text-danger"></small></div>
                                                        </div>
                                                    </div>
                                                    <div class="row" :class="{'d-none': toggler == true}" id="room-row">

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
                                                        <div class="col-lg-6 col-md-6 dropdown">
                                                            <label class="mb-5">Area</label>
                                                            <div class="form-group categories">
                                                                
                                                                <input v-model="form.area" type="number" class="full" placeholder="Area" id="area" name="area">
                                                                
                                                            </div>
                                                            <div class="text-center"><small id="area-id" class="text-danger"></small></div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6 dropdown">
                                                            <label class="mb-5">Units</label>
                                                            <div class="form-group categories">
                                                                
                                                                <select v-model="form.unit" name="unit" id="unit" class="full nice-select form-control wide">
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
                    </form>
                    <!--/ End Search Form -->
                </div>
            </div>
        </div>
    </section>
    <!-- END SLIDER -->
    <!-- END SECTION HEADINGS -->
</template>
<style scoped>

@media screen and (max-width: 600px) {


    .nav-item{

        font-size:0.8em !important
    }

    .nav-link{

        padding:1em !important;
        height: 40px !important;
        line-height: 20px !important;
        border-radius: 30px !important;
    }

}


    input[type="text"],input[type="number"],input[type="tel"],textarea {
    
        background: #f1f1f1;
        border: none !important;
        width: 100%;
        height: 50px;
        padding-left: 20px;
        font-weight: 500;
        margin-bottom: 24px;
        border-radius: 2em;
    }
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
        border: 3px solid var(--BGCOLOR);
        
          
    }
    .slider {
      -webkit-appearance: none;
      appearance: none;
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
      background: var(--BGCOLOR);
      cursor: pointer;
    }

    .slider::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: var(--BGCOLOR);
      cursor: pointer;
    }

    .property-search-type label:hover,
    .property-search-type label.active {
        background-color:#fd5332;
        color: #fff;
    }

    .full{

        width: 100% !important;
    }

    #a{

        z-index:1100 !important
    }

    #b{
        z-index:1010
    }

    #c{
        z-index: 1005;
    }

    #full-filter{

        z-index: 1 !important;
    }

    
    #room-row{

        z-index: 1 !important;
    }

    section{

        position:relative;z-index:2
    }

    

    .autocomplete-items {
        position: absolute;
        border: 1px solid #d4d4d4;
        border-bottom: none;
        border-top: none;
        z-index: 99;
        /*position the autocomplete items to be the same width as the container:*/
        top: 100%;
        left: 0;
        right: 0;
        box-sizing: border-box;
    }
    .autocomplete-items div {
        padding: 10px;
        cursor: pointer;
        background-color: #fff;
        border-bottom: 1px solid #d4d4d4;
    }
    .autocomplete-items div:hover {
        /*when hovering an item:*/
        background-color: #e9e9e9;
    }
    .autocomplete-active {
        /*when navigating through the items using the arrow keys:*/
        background-color: DodgerBlue !important;
        color: #ffffff;
    }

    form{
        min-width: 100%;
    }



</style>