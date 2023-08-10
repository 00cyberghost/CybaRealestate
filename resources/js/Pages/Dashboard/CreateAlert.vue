<script setup>
    import { Head,useForm } from '@inertiajs/inertia-vue3';
    import DashboardLayout from "@/Layouts/DashboardLayout.vue"
    import InputError from '@/Components/InputError.vue'
    import { onMounted,onUnmounted,onBeforeUnmount,ref } from 'vue'

    

    //rewrite video links to avoid rejection by website host
    const destroyVideoLink = (string) => string.replace('https://',')').replaceAll('.','(')

    const form = useForm({
        category: '',
        type: '',
        bedroom: null,
        bathroom: null,
        parking: null,
        area: null,
        unit: '',
        currency: '',
        price: null,
        description: '',
        state: '',
        local_government: '',
        locality: '',
        longitude: '',
        latitude: '',
        
    });

    let processing = ref(false);

    
    const submit = () => {

        //for category
        form.category = document.querySelector('input[name="category"]:checked').value

        //for price
        form.price = document.getElementById('price').value.replaceAll(',','')
       
       
        //for bedroom
        form.bedroom = document.getElementById('bedroom').value

        //for bathroom
        form.bathroom = document.getElementById('bathroom').value

        //for parking
        form.parking = document.getElementById('parking').value

        //for longitude
        form.longitude = document.getElementById('longitude').value

        //for latitude
        form.latitude = document.getElementById('latitude').value

       

       
        form.post(route('submitPropertyAlert'), {
            onStart: () => processing.value = true ,
            onFinish: () =>  processing.value = false  
            
        });

        
    };

    let stateArray = []

    //loads states from a json file in when the document is loading
    const loadStates = () => {

        fetch('/json/states.json').
        then(res => res.json())
        .then(data => stateArray = data)
        .catch(err =>console.log(err.message))
    }

    loadStates();

    

//format price and add commas(,) to it
let formatNum = () => {

    let pattern = /[0-9]/ ;

    let el = document.getElementById('price')

    if(el.value.match(pattern)){

        let a = el.value.replaceAll(',','')

        let d = parseInt(a)

        let b = d.toLocaleString()

        if(a.length > 0) document.getElementById('price').value = b
   
    }else{

        el.value = ''
    }

    

}



onMounted(() => {


$('body').addClass('inner-pages maxw1600 m0a dashboard-bd ui-elements');


//bind niceSelect to #type
let typeInstatnce =  NiceSelect.bind(document.getElementById('type'),{
    searchable: true
});

//bind niceSelect to #currency
let currencyInstatnce =  NiceSelect.bind(document.getElementById('currency'),{
    searchable: true
});

//bind niceSelect to #unit
let unitInstatnce =  NiceSelect.bind(document.getElementById('unit'),{
    searchable: true
});

//bind niceSelect to #state
let stateInstatnce =  NiceSelect.bind(document.getElementById('state'),{
    searchable: true
});

//bind niceSelect to #local_government
let local_governmentInstatnce =  NiceSelect.bind(document.getElementById('local_government'),{
    searchable: true
});

let states = $('#state');

let localGovernments = $('#local_government');


const appendState = () => {

    //clear the niceselect instatnce
    stateInstatnce.clear();

    for(var i = 0; i < stateArray.length; i++){

        states.append('<option>' + stateArray[i].state.name + '</option>');


    }

    //update the niceselect instance with the new values
    stateInstatnce.update();
}

setTimeout(() => appendState() ,20000)


//loads the local governments of a given state when a state is selected
states.on('change',function(){

    localGovernments.empty();
    
    localGovernments.append('<option></option');

    for(var i = 0; i < stateArray.length; i++){

        if(states.val() == stateArray[i].state.name){

            for(var x = 0; x < stateArray[i].state.locals.length; x++){

                localGovernments.append('<option>' + stateArray[i].state.locals[x].name + '</option');
            }
        }
    }

    //clear the niceselect instatnce
    local_governmentInstatnce.clear();

    //update the niceselect instance with the new values
    local_governmentInstatnce.update();

    
});


$('#type').on('change',function(){
        

    let el = $(this).val();

    switch (el) {
        
        //when property type is a flat
        case 'Flat':

            showRoomRow();
            hideAreaRow();
            
            break;
        
        
        //when property type is a house
        case 'House':
            
            showRoomRow();
            hideAreaRow();
            
            break;

        
        //when property type is a commercial property
        case 'Commercial Property':

            hideRoomRow();
            hideAreaRow();
            
            break;
        
        //when property type is a land
        case 'Land':
        
        hideRoomRow();
        showAreaRow();
        
        break;
    
    }

    
    
  
});



//add and remove class of active from property category
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

//hide area and units if the category = shortlet
// $('input[name=category]').on('click',function(){


//     let el = $(this).val();

//     switch (el) {
        
//         //when the property category is for sale
//         case 'sale':
//             hideDuration();
//             break;

//         //when the property category is for rent
//         case 'rent':
//             showDuration();
//             break;

//         //when the property category is for shortlet
//         case 'shortlet':
//             showDuration();

//             break;
    
//     }

// });

//add error
let addError = (id,text) =>{

    let err = text;

    let element = document.getElementById(id);

    let message = 'Invalid ' + err;

    element.focus();

   element.textContent = message;


}

//remove error
let removeError = (id) => {

    let element = document.getElementById(id);

    element.textContent = '';
}


//validate category
let validateCategory = () => {

    if ($('input[name=category]:checked').length > 0) {
        
        removeError('category-id');

        return true;
    
    }else{

        addError('category-id','please choose from the above');

        return false;
    }
}

//validate type
let validateType = () => {

    if ($('#type').val().length > 0) {

        removeError('type-id');

        return true;
    
    }else{

        addError('type-id','please choose from the above');

        return false;
    }
}

//validate bedroom
let validateBedroom = () => {

    if ($('#bedroom').val() > 0) {
        
        removeError('bed-id');

        return true;
    
    }else{

        addError('bed-id','slide the range to choose a value');

        return false;
    }
}

//validate bathroom
let validateBathroom = () => {

    if ($('#bathroom').val() > 0) {
        
        removeError('bath-id');

        return true;
    
    }else{

        addError('bath-id','slide the range to choose a value');

        return false;
    }
}

//validate area
let validateArea = () => {

    if ($('#area').val() > 0) {
        
        removeError('area-id');

        return true;
    
    }else{

        addError('area-id','please enter the area size');

        return false;
    }
}

//validate unit
let validateUnit = () => {

    if ($('#unit').val().length > 0) {
        
        removeError('unit-id');

        return true;
    
    }else{

        addError('unit-id','please select from the above');

        return false;
    }
}

//validate price
let validatePrice = () => {

    if ($('#price').val().length > 3) {
        
        removeError('price-id');

        return true;
    
    }else{

        addError('price-id','minimum price is 1000');

        return false;
    }
}



//validate locality
let validateLocality = () => {

    if ($('#locality').val().length > 0) {
        
        removeError('locality-id');

        return true;
    
    }else{

        addError('locality-id','locality must be min 2 and max 40 characters');

        return false;
    }
}

//validate state
let validateState = () => {

    if ($('#state').val().length > 0) {
        
        removeError('state-id');

        return true;
    
    }else{

        addError('state-id','Please choose a state from the above');

        return false;
    }
}

 //validate local
let validateLocal = () => {

    if ($('#local_government').val().length > 0) {
        
        removeError('local-government-id');

        return true;
    
    }else{

        addError('local-government-id','Please choose a local government from the above');

        return false;
    }
}

//move to the next tab
let nextTab = () =>{

   $('.tabs li.active ').next().click();
}

//move to the next two tab
let jumpTab = () =>{

    $('.tabs li.active ').next().next().click();
}

//move to the previous tab
let prevTab = () =>{

   $('.tabs li.active ').prev().click();
}

//update the progress bar value
let updateBar = (param) =>{

    let el = document.getElementById('p-bar');

    el.setAttribute('data-percentage',param);

    $('#bar1').barfiller();
}


//verify the first tab and move to the next tab
let verifyFirstTab = () =>{

    validateCategory();
    validateType();
    validatePrice();

    if(validateCategory() && validateType() && validatePrice()){

        if($('#type').val() == 'Commercial Property'){
            
            //move to the next two tabs
            jumpTab();

            updateBar(40);

        }else{

            nextTab();

            //upadte the value of the progress bar
            updateBar(40);
        }
       
      

    
    }

}

//verify the second tab
let verifySecondTab = () =>{

    let el = $('#type').val();

    if(el == 'Commercial Property'){


        nextTab();

        //upadte the value of the progress bar
        updateBar(70);
    
    }else{
        
        
        if(el == 'Land'){

            validateArea();

            validateUnit();

            if(validateArea() && validateUnit()){

                nextTab();

                //upadte the value of the progress bar
                updateBar(70);
            }

            }else{

            validateBedroom();

            validateBathroom();

            if(validateBedroom() && validateBathroom()){

                nextTab();

                //upadte the value of the progress bar
                updateBar(70);
            }
        }
    }

    

}

//verify the fourth tab and move to the next tab
let verifyFourthTab = () =>{

   nextTab();

    //upadte the value of the progress bar
    updateBar(99); 

}

//verify the fifth tab and move to the next tab
let verifyFifthTab = () =>{

    validateLocality();

    validateState();

    validateLocal();

    if(validateLocality() && validateState() && validateLocal()){

        nextTab();

        //upadte the value of the progress bar
        updateBar(99);

        $('#next').hide();
    }



         

}



$('#next').on('click',function(){

    let tabs = $('.tabs li.active').attr('id');

    switch (tabs){

        case 'one' :

        verifyFirstTab();

        break;

        case 'two' :

        verifySecondTab();

        break;

        case 'four' :

        verifyFourthTab();

        break;

        case 'five' :

        verifyFifthTab();

        break;  


    }

});

//move to the previous tab
$('#prev').on('click',function(){

    prevTab();

    $('#next').show();
});


//tab control(page control)
$(".tabbed-content").each(function () {
    $(this).append('<ul class="content tab-identifier"></ul>')
});

$(".tabs li").each(function () {
    var a = $(this),
        b = "";
    a.is(".tabs>li:first-child") && (b = ' class="active"');
    var c = a.find(".tab-content").detach().wrap("<li" + b + "></li>").parent();
    a.closest(".tabbed-content").find(".content").append(c)
});


$(".tabs li").click(function () {
    $(this).closest(".tabs").find("li").removeClass("active"), $(this).addClass("active");
    var a = $(this).index() + 1;
    $(this).closest(".tabbed-content").find(".content>li").removeClass("active"), $(this).closest(".tabbed-content").find(".content>li:nth-of-type(" + a + ")").addClass("active")
});



})



//when the component is unmounted
onUnmounted(() => {
//remove the classes that was added to the body tag during component mounting
$('body').removeClass('inner-pages maxw1600 m0a dashboard-bd ui-elements');


})
 
</script>
    <template>
        <Head title="Create Property Alert" />
        <DashboardLayout :props="props">
            <form @submit.prevent="submit" name="propertyform">
            <div class="single-add-property">
                <h3>Add Alert Details</h3>
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
                                                        <label class="float-left shadow"><input value="rent" name="category" type="radio">Rent</label>
                                                        <label class="float-left shadow"><input value="sale" name="category" type="radio">Sale</label>
                                                        
                                                    </div>
                                                    
                                                    <div class="text-center"><span id="category-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.category" />
                                                </div>

                                            </div>
                    
                                            <div class="row">
                        
                                                <div class="col-lg-4 col-md-4 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Property Type</label>
                                                        
                                                        <select v-model="form.type" required id="type" name="type" class="nice-select form-control wide type curved">
                                                            <!--do not remove the first <option> it is being used in form validation-->
                                                            <option></option>
                                                            <option>Flat</option>
                                                            <option>House</option>
                                                            <option>Commercial Property</option>
                                                            <option>Land</option>
                                                        </select>
                                                        
                                                    </div>
                                                        <div class="text-center"><span id="type-id" class="text-danger"></span></div>
                                                        <InputError class="mt-2" :message="form.errors.type" />
                                                </div>

                                                <div class="col-lg-4 col-md-4 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Currency</label>
                                                        
                                                        <select v-model="form.currency" required id="currency" name="currency" class="nice-select form-control wide currency curved">
                                                            <option value="NGN">₦</option>
                                                            <option value="USD">$</option>
                                                        </select>
                                                        
                                                    </div>
                                                        <div class="text-center"><span id="currency-id" class="text-danger"></span></div>
                                                        <InputError class="mt-2" :message="form.errors.currency" />
                                                </div>



                                                <div class="col-lg-4 col-md-4">
                                                    <label for="price">Max Price</label>
                                                    <p class="mt-4">
                                                        
                                                        <input :onkeyup="formatNum" required v-model="form.price" type="tel" placeholder="amount" id="price" name="price" class="curved">
                                                    </p>
                                                    <div class="text-center"><span id="price-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.price" />
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
                                                        
                                                        <input id="bedroom" type="range" min="0" max="30" value="0" class="slider curved" name="bedroom">
                                                        <div class="float-left">0</div><span>&nbsp;Bedrooms</span>
                                                        <InputError class="mt-2" :message="form.errors.bedroom" />
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="bed-id" class="text-danger"></span></div>
                                                </div>
                                                <div class="col-lg-4 col-md-12 dropdown faq-drop">
                                                    <label class="mb-5">No Of Bathrooms</label>
                                                    <div class="form-group categories">
                                                        
                                                        <input id="bathroom" type="range" min="0" max="30" value="0" class="slider curved" name="bathroom">
                                                        <div class="float-left">0</div><span>&nbsp;Bathrooms</span>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="bath-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.bathroom" />
                                                </div>

                                                <div class="col-lg-4 col-md-12 dropdown faq-drop">
                                                    <label class="mb-5">Parking Space</label>
                                                    <div class="form-group categories">
                                                        
                                                        <input id="parking" type="range" min="0" max="30" value="0" class="slider curved" name="parking">
                                                        <div class="float-left">0</div><span>&nbsp;Cars</span>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="park-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.parking" />
                                                </div>
                                            </div>
                                            <div class="row" id="area-row">
                                                <div class="col-lg-6 col-md-12">
                                                    <label for="area">Area</label>
                                                    <p class="mt-4">
                                                        
                                                        <input v-model="form.area" type="number" placeholder="Area" id="area" name="area" class="curved">
                                                    </p>
                                                    <div class="text-center"><span id="area-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.area" />
                                                </div>


                                                <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Units</label>
                                                        
                                                        <select v-model="form.unit" name="unit" id="unit" class="curved nice-select form-control wide unit">
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
                                                    <div class="text-center"><span id="unit-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.unit" />
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
                                                    <label for="description">Property Description</label>
                                                    <p id="desc-p">
                                                        <textarea class="curved" v-model="form.description" id="description" name="description" placeholder="Describe about your property"></textarea>
                                                    </p>
                                                    <InputError class="mt-2" :message="form.errors.description" />
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

                                            <div class="row d-none">
                                                <div class="col-lg-12 col-md-12">
                                                    <label for="address">Enter address</label>
                                                    <p>
                                                        <span>allow google to find my address</span>
                                                        <input class="curved" id="address1" type="text" name="google" placeholder="23 adekunle street ikoyi">
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div>
                                                    <ul v-for="error in form.errors" :key="error.id">
                                                        <li class="text-danger">{{error}}</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="row">
                                                
                                                <div class="col-lg-4 col-md-4 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>State</label>
                                                        <select required v-model="form.state" id="state" name="state" class="curved nice-select form-control wide state">
                                                            
                                                        </select>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="state-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.state" />
                                                </div>
                                                <div class="col-lg-4 col-md-4 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Local Government</label>
                                                        <select required v-model="form.local_government" id="local_government" name="local_government" class="curved nice-select form-control wide local">
                                                            
                                                        </select>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="local-government-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.local_government" />
                                                </div>
                                                <div class="col-lg-4 col-md-4">
                                                    <div class="form-group categories">
                                                        <label for="locality">Locality</label>
                                                        <input class="curved mt-4" required min="3" max="50" v-model="form.locality" type="text" name="locality" placeholder="Ikoyi" id="locality">
                                                    </div>
                                                    <div class="text-center"><span id="locality-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.locality" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <button :disabled="processing" id="submit-button" type="submit" class="mt-5 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Create Alert!</button>
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
                                        <li id="prev" class="page-item"><a class="btn btn-common b-primary"><i class="fas fa-angle-double-left"></i> </a></li>
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div class="pagination-container float-right">
                                <nav>
                                    <ul >
                                        <li id="next" class="page-item"><a class="btn btn-common b-primary"><i class="fas fa-angle-double-right"></i> </a></li>
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="hidden" id="longitude" name="longitude" v-model="form.longitude">
            <input type="hidden" id="latitude" name="latitude" v-model="form.latitude">
            </form>
        </DashboardLayout>
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
          border: 3px solid var(--BGCOLOR);
        
          
        }
    
        .sphere{
    
            border-radius: 50% !important;
        }
    
        .property-search-type label:hover,
        .property-search-type label.active {
            background-color:var(--BGCOLOR);
            color: #fff;
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

        .curved{

            border-radius: 30px !important;
        }

        
    
        .tab-title{
    
            display: none !important;
        }
    
        .button-tabs .tabs {
    
            display: none !important;
        }
       
    
    
    
    </style>
        
    
    