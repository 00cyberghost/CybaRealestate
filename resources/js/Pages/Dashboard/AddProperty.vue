<script setup>
    import { Head,useForm } from '@inertiajs/inertia-vue3';
    import DashboardLayout from "@/Layouts/DashboardLayout.vue"
    import InputError from '@/Components/InputError.vue'
    import { onMounted,onUnmounted,onBeforeUnmount,ref } from 'vue'
    

    //rewrite video links to avoid rejection by website host
    const destroyVideoLink = (string) => string.replace('https://',')').replaceAll('.','(')

    const form = useForm({
        category: '',
        title: '',
        type: '',
        subtype: '',
        bedroom: null,
        bathroom: null,
        parking: null,
        area: null,
        unit: '',
        currency: '',
        price: null,
        duration: '',
        description: '',
        video: '',
        state: '',
        local_government: '',
        locality: '',
        address: '',
        longitude: '',
        latitude: '',
        AC: '',
        SW: '',
        WH: '',
        security: '',
        gym: '',
        serviced: '',
        furnished: '',
        MQ: '',
        TC: '',
        wifi: '',
        
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

        //for //video
        form.video = document.getElementById('video').value.replace('https://',')').replaceAll('.','(')

        //for property features
        if(document.getElementById('AC').checked){

            form.AC = document.getElementById('AC').value
        }

        if(document.getElementById('SW').checked){

            form.SW = document.getElementById('SW').value

        }

        if(document.getElementById('WH').checked){

            form.WH = document.getElementById('WH').value

        }

        if(document.getElementById('security').checked){

            form.security = document.getElementById('security').value

        }

        if(document.getElementById('gym').checked){

            form.gym = document.getElementById('gym').value

        }

        if(document.getElementById('serviced').checked){

            form.serviced = document.getElementById('serviced').value

        }

        if(document.getElementById('furnished').checked){

            form.furnished = document.getElementById('furnished').value

        }

        if(document.getElementById('MQ').checked){

            form.MQ = document.getElementById('MQ').value

        }

        if(document.getElementById('TC').checked){

            form.TC = document.getElementById('TC').value

        }

        if(document.getElementById('wifi').checked){

            form.wifi = document.getElementById('wifi').value

        }




        
        form.post(route('submitProperty'), {
            onStart: () => {

                document.getElementById('submit-button').textContent = 'Processing>>>'

                processing.value = true
            } ,
            
            onFinish: () => {

                document.getElementById('submit-button').textContent = 'Save and Upload Pictures'

                processing.value = false
            }
            
        });

        
    };

    let stateArray = ref([])

    let localGovernmentArray = ref([])

    let locs = ref([])

    let local_governmentInstatnce =  ref(null)

    //loads states from a json file in when the document is loading
    let currState = ref(false)

    let canExecute = ref(null)

    const changeCurrstate = (e) =>{

       let selectedState = e.target.value

       if(selectedState.length > 0){

            let newArr = []

            for(let i = 0; i < localGovernmentArray.value.length; i++){

                if(localGovernmentArray.value[i].state.name == selectedState) {

                    for(let x = 0; x < localGovernmentArray.value[i].state.locals.length; x++){

                        newArr.push(localGovernmentArray.value[i].state.locals[x].name)
                    }
                }

            }

            locs.value = newArr

            currState.value = true

            setTimeout(() => local_governmentInstatnce.value.update(),1000)
        }

    }

    

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

//bind niceSelect to #subtype
let subtypeInstatnce =  NiceSelect.bind(document.getElementById('subtype'),{
    searchable: true
});

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

//bind niceSelect to #duration
let durationInstatnce =  NiceSelect.bind(document.getElementById('duration'),{
    searchable: true
});

//bind niceSelect to #state
let stateInstatnce =  NiceSelect.bind(document.getElementById('state'),{
    searchable: true
});

//bind niceSelect to #local_government
local_governmentInstatnce.value = NiceSelect.bind(document.getElementById('local_government'),{
    searchable: true
})



axios.get('/json/states.json')
.then(res => {
    stateArray.value = res.data

    localGovernmentArray.value = res.data

    
})
.catch((error)=> console.log(error))
.finally(() => {

    //clear the niceselect instatnce
    stateInstatnce.clear();

    //update the niceselect instance with the new values
    stateInstatnce.update();
})



//this function populates the property subtype select box based on the property type selected
$('#type').on('change',function(){
        
    var houseType = ['Penthouse','Bungalow','Mansion','Terrace','Detached','Semi-Detached','Block of Flat'];

    var flatType = ['Flat/Apartment','Mini-Flat','Self-Contain'];

    var commercialType = ['Event Center', 'Warehouse/Store','Lockup Shop','Tank Farm','University Area','Petrol Station','Church','Factory','Hotel','Office Space','Plaza / Complex / Mall','Restaurant / Bar'];

    var landType = ['commercial','Multi-Use','Residential','Farm Land','Industrial Land']; 

    var propertySubtype = $('#subtype');

    let el = $(this).val();

    switch (el) {
        
        //when property type is a flat
        case 'Flat':
            
       
            propertySubtype.empty();

            flatType.forEach(function(e){
                    
                propertySubtype.append('<option>' + e.toString() + '</option>');

            });

            //clear the niceselect instatnce
            subtypeInstatnce.clear();

            //update the niceselect instance with the new values
            subtypeInstatnce.update();

            showRoomRow();
            hideAreaRow();
            
            break;
        
        
        //when property type is a house
        case 'House':

            propertySubtype.empty();

            houseType.forEach(function(e){
                    
                propertySubtype.append('<option>' + e.toString() + '</option>');

            });

            //clear the niceselect instatnce
            subtypeInstatnce.clear();

            //update the niceselect instance with the new values
            subtypeInstatnce.update();
            
            showRoomRow();
            hideAreaRow();
            
            break;

        
        //when property type is a commercial property
        case 'Commercial Property':

            propertySubtype.empty();

            commercialType.forEach(function(e){
                    
                propertySubtype.append('<option>' + e.toString() + '</option>');

            });

            //clear the niceselect instatnce
            subtypeInstatnce.clear();

            //update the niceselect instance with the new values
            subtypeInstatnce.update();

            hideRoomRow();
            hideAreaRow();
            
            break;
        
        //when property type is a land
        case 'Land':
        propertySubtype.empty();

        landType.forEach(function(e){
                
            propertySubtype.append('<option>' + e.toString() + '</option>');

        });

        //clear the niceselect instatnce
        subtypeInstatnce.clear();

        //update the niceselect instance with the new values
        subtypeInstatnce.update();
        
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

// hide duration
let hideDuration = () => $('#duration-div').hide();

// show duration
let showDuration = () => $('#duration-div').show();

//hide area and units if the category = shortlet
$('input[name=category]').on('click',function(){


    let el = $(this).val();

    switch (el) {
        
        //when the property category is for sale
        case 'sale':
            hideDuration();
            break;

        //when the property category is for rent
        case 'rent':
            showDuration();
            break;

        //when the property category is for shortlet
        case 'shortlet':
            showDuration();

            break;
    
    }

});

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

//validate title
let validateTitle = () =>{

    let el = document.getElementById('title').value;

    let pattern = /[a-z0-9\s]{5,50}/i ;

    if(el.match(pattern)){

        removeError('title-id');

        return true;
   
    }else{

        addError('title-id','alphabets and numbers only. min of 5 and max of 50');

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

//validate duration
let validateDuration = () => {

    if ($('#duration').val().length > 0) {
        
        removeError('duration-id');

        return true;
    
    }else{

        addError('duration-id','select a duration from the above');

        return false;
    }
}

//validate address
let validateAddress = () => {

    let ad = $('#address').val().length;

    if ((ad > 5) && (ad < 51)) {
        
        removeError('address-id');

        return true;
    
    }else{

        addError('address-id','address must be min 5 and max 50 characters');

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
    validateTitle();
    validateType();

    if(validateCategory() && validateTitle() && validateType()){

        if($('#type').val() == 'Commercial Property'){
            
            //move to the next two tabs
            jumpTab();

            updateBar(40);

        }else{

            nextTab();

            //upadte the value of the progress bar
            updateBar(20);
        }
       
      

    
    }

}

//verify the second tab
let verifySecondTab = () =>{

    let el = $('#type').val();

    if(el == 'Commercial Property'){


        nextTab();

        //upadte the value of the progress bar
        updateBar(40);
    
    }else{
        
        
        if(el == 'Land'){

            validateArea();

            validateUnit();

            if(validateArea() && validateUnit()){

                nextTab();

                //upadte the value of the progress bar
                updateBar(40);
            }

            }else{

            validateBedroom();

            validateBathroom();

            if(validateBedroom() && validateBathroom()){

                nextTab();

                //upadte the value of the progress bar
                updateBar(40);
            }
        }
    }

    

}

//verify the third tab and move to the next tab
let verifyThirdTab = () =>{

    let el = document.querySelector('input[name="category"]:checked').value

   
    if(el == 'sale'){

        if(validatePrice()){

            nextTab();

            //upadte the value of the progress bar
            updateBar(60);
        
        }
    
    }else{

        validateDuration();

        validatePrice();

        if(validatePrice() && validateDuration()){

            nextTab();

            //upadte the value of the progress bar
            updateBar(60);
        
        }
    }

    

}

//verify the fourth tab and move to the next tab
let verifyFourthTab = () =>{

   nextTab();

    //upadte the value of the progress bar
    updateBar(80); 

}

//verify the fifth tab and move to the next tab
let verifyFifthTab = () =>{

    validateAddress();

    validateLocality();

    validateState();

    validateLocal();

    if(validateAddress() && validateLocality() && validateState() && validateLocal()){

        nextTab();

        //upadte the value of the progress bar
        updateBar(95);

       
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

        case 'three' :

        verifyThirdTab();

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
        <Head title="Add Property" />
        
        <DashboardLayout>
            <form @submit.prevent="submit" name="propertyform">
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
                                                        <label class="float-left shadow"><input value="rent" name="category" type="radio">Rent</label>
                                                        <label class="float-left shadow"><input value="sale" name="category" type="radio">Sale</label>
                                                        <label class="float-left shadow"><input value="shortlet" name="category" type="radio">Shortlet</label>
                                                    </div>
                                                    
                                                    <div class="text-center"><span id="category-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.category" />
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    
                                                    <label class="mb-4" for="title">Property Title</label>
                                                    <input class="curved" v-model="form.title" required type="text" name="title" id="title" placeholder="Enter your property title">
                                                    <div class="text-center"><span id="title-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.title" />
                                                    
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
                                                        <label>Property Sub-type</label>
                                                        
                                                        <select v-model="form.subtype" id="subtype" name="subtype" class="nice-select form-control wide subtype curved"> 
                                                            
                                                        </select>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="subtype-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.subtype" />
                                                </div>

                                                <div class="col-lg-4 col-md-4 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Currency</label>
                                                        
                                                        <select v-model="form.currency" id="currency" name="currency" class="nice-select form-control wide currency curved"> 
                                                            <option selected value="NGN">₦</option>
                                                            <option value="USD">$</option>
                                                        </select>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="currency-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.currency" />
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
                                                        
                                                        <input :onkeyup="formatNum" required v-model="form.price" type="tel" placeholder="amount" id="price" name="price" class="curved">
                                                    </p>
                                                    <div class="text-center"><span id="price-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.price" />
                                                </div>


                                                <div class="col-lg-6 col-md-12 dropdown faq-drop" id="duration-div">
                                                    <div class="form-group categories">
                                                        <label>Price Duration</label>
                                                        <select v-model="form.duration" id="duration" name="duration" class="curved nice-select form-control wide duration">
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
                                                    <div class="text-center"><span id="duration-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.duration" />
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

                                                <div class="col-md-12">
                                                    <label for="video">Video link</label>
                                                    <input class="curved" v-model="form.video" type="text" max="200" name="video" id="video" placeholder="https://www.youtube.com/watch?v=14semTlwyUY">
                                                    <InputError class="mt-2" :message="form.errors.video" />
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
                                                <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>State</label>
                                                        <select @change="changeCurrstate" required id="state" name="state" v-model="form.state" class="curved nice-select form-control wide state">
                                                            <option v-for="stateArr in stateArray" :key="stateArr">{{ stateArr.state.name }}</option>
                                                            
                                                        </select>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="state-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.state" />
                                                </div>
                                                <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Local Government</label>
                                                        <select required v-model="form.local_government" id="local_government" name="local_government" class="curved nice-select form-control wide local">
                                                            <option v-for="loc in locs" :key="loc">{{ loc }}</option>
                                                        </select>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="local-government-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.local_government" />
                                                </div>
                                            </div>

                                            
                                            <div class="row">
                                            
                                                <div class="col-lg-6 col-md-12">
                                                    <p>
                                                        <label for="locality">Locality</label>
                                                        <input class="curved" required min="3" max="50" v-model="form.locality" type="text" name="locality" placeholder="Ikoyi" id="locality">
                                                    </p>
                                                    <div class="text-center"><span id="locality-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.locality" />
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <p>
                                                        <label for="address">Street Address</label>
                                                        <input class="curved" required min="3" max="50" v-model="form.address" type="text" name="address" placeholder="23 adekunle street" id="address">
                                                    </p>
                                                    <div class="text-center"><span id="address-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.address" />
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
                                        <div>
                                            <ul v-for="error in form.errors" :key="error.id">
                                                <li class="text-danger">{{error}}</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="property-form-group">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="pro-feature-add pl-0">
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="AC" value="Air Conditioning" v-model="form.AC" type="checkbox" name="AC">
                                                                    <label for="AC">Air Conditioning</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="SW" value="Swimming Pool" v-model="form.SW" type="checkbox" name="SW">
                                                                    <label for="SW">Swimming Pool</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="WH" value="Water Heater" v-model="form.WH" type="checkbox" name="WH">
                                                                    <label for="WH">Water Heater</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="security" value="Security" v-model="form.security" type="checkbox" name="check">
                                                                    <label for="security">Security</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="gym" value="Gym" v-model="form.gym" type="checkbox" name="check">
                                                                    <label for="gym">Gym</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="serviced" value="Serviced" v-model="form.serviced" type="checkbox" name="check">
                                                                    <label for="serviced">Serviced</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="furnished" value="Furnished" v-model="form.furnished" type="checkbox" name="check">
                                                                    <label for="furnished">Furnished</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="MQ" value="Maid Quarters" v-model="form.MQ" type="checkbox" name="check">
                                                                    <label for="MQ">Maid Quarters</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="TC" value="TV Cable" v-model="form.TC" type="checkbox" name="check">
                                                                    <label for="TC">TV Cable</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="wifi" value="WiFi" v-model="form.wifi" type="checkbox" name="check">
                                                                    <label for="wifi">WiFi</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="prperty-submit-button pt-5">
                                        
                                            <button :disabled="processing" id="submit-button" type="submit">Save and Upload Pictures</button>
                                                    
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
                                        <li id="prev" class="page-item"><a class="btn btn-common bg-primary"><i class="fas fa-angle-double-left"></i> </a></li>
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div class="pagination-container float-right">
                                <nav>
                                    <ul >
                                        <li id="next" class="page-item"><a class="btn btn-common bg-primary"><i class="fas fa-angle-double-right"></i> </a></li>
                                        
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
        
    
    