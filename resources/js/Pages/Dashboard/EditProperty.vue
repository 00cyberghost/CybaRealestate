<script setup>
    import { Head,useForm } from '@inertiajs/inertia-vue3';
    import DashboardLayout from "@/Layouts/DashboardLayout.vue"
    import InputError from '@/Components/InputError.vue'
    import { onMounted,onUnmounted,onBeforeUnmount,ref } from 'vue'


    defineProps({
        props: Object
    })
    

    //rewrite video links to avoid rejection by website host
    const destroyVideoLink = (string) => string.replace('https://',')').replaceAll('.','(')

    //restore video links
    const reBuildVideoLink = (string) => string.replace('https://',')').replaceAll('.','(')

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

        //for title
        form.title = document.getElementById('title').value

        //for type
        form.type = document.getElementById('type').value

        //for subtype
        form.subtype = document.getElementById('subtype').value

        //for bedroom
        form.bedroom = document.getElementById('bedroom').value

        //for bathroom
        form.bathroom = document.getElementById('bathroom').value

        //for parking
        form.parking = document.getElementById('parking').value

        //for area
        form.area = document.getElementById('area').value

        //for unit
        form.unit = document.getElementById('unit').value

        //for currency
        form.currency = document.getElementById('currency').value

        //for price
        form.price = document.getElementById('price').value.replaceAll(',','')

        //for duration
        form.duration = document.getElementById('duration').value

        //for description
        form.description = document.getElementById('description').value

        //for //video
        form.video = document.getElementById('video').value.replace('https://',')').replaceAll('.','(')

        //for state
        form.state = document.getElementById('state').value

        //for local_government
        form.local_government = document.getElementById('local_government').value

        //for locality
        form.locality = document.getElementById('locality').value

        //for address
        form.address = document.getElementById('address').value
       
        //for longitude
        form.longitude = document.getElementById('longitude').value

        //for latitude
        form.latitude = document.getElementById('latitude').value

        

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



        let id = document.getElementById('form').getAttribute('data-id')
        
        form.put(route('updateProperty',id), {
            onStart: () => processing.value = true ,
            onFinish: () =>  processing.value = false
            
        });


        
    };

    let stateArray = ref([])

    let localGovernmentArray = ref([])

    let locs = ref([])

    let currState = ref(false)

    let canExecute = ref(null)

    const changeCurrstate = (e) =>{

       let selectedState = e.target.value

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

//set the video value
 let currentVideo =  document.getElementById('current-video')

 if(currentVideo != null) document.getElementById('video').value = currentVideo.value


const popLoc = () => {

let currentState = document.getElementById('current-state')

canExecute = currentState.value

if(canExecute.length > 0){

    let selectedState = currentState.value

    let newArr = []

    for(let i = 0; i < localGovernmentArray.value.length; i++){

            if(localGovernmentArray.value[i].state.name == selectedState) {

                for(let x = 0; x < localGovernmentArray.value[i].state.locals.length; x++){

                    newArr.push(localGovernmentArray.value[i].state.locals[x].name)
                }
            }
    
    }

    locs.value = newArr

    currState.value = true;

}
}

setTimeout(() => popLoc(),3000)


let states = document.getElementById('state');

let localGovernments = document.getElementById('local_government');

axios.get('/json/states.json')
.then(res => {
stateArray.value = res.data

localGovernmentArray.value = res.data
})
.catch((error)=> console.log(error))
.finally(console.log('success'));

//this function populates the property subtype select box based on the property type selected
$('#type').on('change',function(){
        
    var houseType = ['','Penthouse','Bungalow','Mansion','Terrace','Detached','Semi-Detached','Block of Flat'];

    var flatType = ['','Flat/Apartment','Mini-Flat','Self-Contain'];

    var commercialType = ['','Event Center', 'Warehouse/Store','Lockup Shop','Tank Farm','University Area','Petrol Station','Church','Factory','Hotel','Office Space','Plaza / Complex / Mall','Restaurant / Bar'];

    var landType = ['','commercial','Multi-Use','Residential','Farm Land','Industrial Land']; 

    var propertySubtype = $('#subtype');

    let el = $(this).val();

    switch (el) {
        
        //when property type is a flat
        case 'Flat':
            
       
            propertySubtype.empty();

            flatType.forEach(function(e){
                    
                propertySubtype.append('<option>' + e.toString() + '</option>');

            });


            showRoomRow();
            hideAreaRow();
            
            break;
        
        
        //when property type is a house
        case 'House':

            propertySubtype.empty();

            houseType.forEach(function(e){
                    
                propertySubtype.append('<option>' + e.toString() + '</option>');

            });

            
            showRoomRow();
            hideAreaRow();
            
            break;

        
        //when property type is a commercial property
        case 'Commercial Property':

            propertySubtype.empty();

            commercialType.forEach(function(e){
                    
                propertySubtype.append('<option>' + e.toString() + '</option>');

            });


            hideRoomRow();
            hideAreaRow();
            
            break;
        
        //when property type is a land
        case 'Land':
        propertySubtype.empty();

        landType.forEach(function(e){
                
            propertySubtype.append('<option>' + e.toString() + '</option>');

        });

        
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
        <Head title="Edit Property" />
        <DashboardLayout :props="props">
            <form v-for="prop in props" :data-id="prop.id" id="form" :key="prop.id" @submit.prevent="submit" name="propertyform">
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
                                                        <label class="float-left shadow" :class="{active: prop.category == 'rent'}"><input :checked="prop.category == 'rent'" value="rent" name="category" type="radio">Rent</label>
                                                        <label class="float-left shadow" :class="{active: prop.category == 'sale'}"><input :checked="prop.category == 'sale'" value="sale" name="category" type="radio">Sale</label>
                                                        <label class="float-left shadow" :class="{active: prop.category == 'shortlet'}"><input :checked="prop.category == 'shortlet'" value="shortlet" name="category" type="radio">Shortlet</label>
                                                    </div>
                                                    
                                                    <div class="text-center"><span id="category-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.category" />
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    
                                                    <label class="mb-4" for="title">Property Title</label>
                                                    <input class="curved" v-model="prop.title" required type="text" name="title" id="title" placeholder="Enter your property title">
                                                    <div class="text-center"><span id="title-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.title" />
                                                    
                                                </div>
                                            </div>

                                            <div class="row">
                        
                                                <div class="col-lg-4 col-md-4 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Property Type</label>
                                                        
                                                        <select required id="type" name="type" class="form-control wide type curved">
                                                            <option value="Flat" :selected="prop.type == 'Flat'">Flat</option>
                                                            <option :selected="prop.type == 'House'">House</option>
                                                            <option :selected="prop.type == 'Commercial Property'">Commercial Property</option>
                                                            <option :selected="prop.type == 'Land'">Land</option>
                                                        </select>
                                                        
                                                    </div>
                                                        <div class="text-center"><span id="type-id" class="text-danger"></span></div>
                                                        <InputError class="mt-2" :message="form.errors.type" />
                                                </div>

                                                <div class="col-lg-4 col-md-4 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Property Sub-type</label>
                                                        
                                                        <select id="subtype" name="subtype" class="form-control wide subtype curved">
                                                            <option :value="prop.subtype" selected>{{ prop.subtype }}</option>
                                                        </select>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="subtype-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.subtype" />
                                                </div>

                                                <div class="col-lg-4 col-md-4 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Currency</label>
                                                        
                                                        <select id="currency" name="currency" class="form-control wide currency curved">
                                                            <option value="NGN" :selected="prop.currency == 'NGN'">₦</option>
                                                            <option value="USD" :selected="prop.currency == 'USD'">$</option>
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
                                                        
                                                        <input id="bedroom" type="range" min="0" max="30" :value="prop.bedroom" class="slider curved" name="bedroom">
                                                        <div class="float-left" v-text="prop.bedroom"></div><span>&nbsp;Bedrooms</span>
                                                        <InputError class="mt-2" :message="form.errors.bedroom" />
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="bed-id" class="text-danger"></span></div>
                                                </div>
                                                <div class="col-lg-4 col-md-12 dropdown faq-drop">
                                                    <label class="mb-5">No Of Bathrooms</label>
                                                    <div class="form-group categories">
                                                        
                                                        <input id="bathroom" type="range" min="0" max="30" :value="prop.bathroom" class="slider curved" name="bathroom">
                                                        <div class="float-left" v-text="prop.bathroom"></div><span>&nbsp;Bathrooms</span>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="bath-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.bathroom" />
                                                </div>

                                                <div class="col-lg-4 col-md-12 dropdown faq-drop">
                                                    <label class="mb-5">Parking Space</label>
                                                    <div class="form-group categories">
                                                        
                                                        <input id="parking" type="range" min="0" max="30" :value="prop.parking" class="slider curved" name="parking">
                                                        <div class="float-left" v-text="prop.parking"></div><span>&nbsp;Cars</span>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="park-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.parking" />
                                                </div>
                                            </div>
                                            <div class="row" id="area-row">
                                                <div class="col-lg-6 col-md-12">
                                                    <label for="area">Area</label>
                                                    <p class="mt-4">
                                                        
                                                        <input type="number" v-model="prop.area" placeholder="Area" id="area" name="area" class="curved">
                                                    </p>
                                                    <div class="text-center"><span id="area-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.area" />
                                                </div>


                                                <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Units</label>
                                                        
                                                        <select name="unit" id="unit" class="curved nice-select form-control wide unit">
                                                            <!--do not remove the first <option> it is being used in form validation-->
                                                            <option></option>
                                                            <option :selected="prop.unit == 'Sqm (m2)'" value="Sqm (m2)" >Sqm (m2)</option>
                                                            <option :selected="prop.unit == 'Sqf (sqft)'" value="Sqf (sqft)" >Sqf (sqft)</option>
                                                            <option :selected="prop.unit == 'Sqyards'" value="Sqyards" >Sqyards</option>
                                                            <option :selected="prop.unit == 'Plot'" value="Plot" >Plot</option>
                                                            <option :selected="prop.unit == 'Acre'" value="Acre" >Acre</option>
                                                            <option :selected="prop.unit == 'Hectare'" value="Hectare">Hectare</option>
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
                                                        
                                                        <input :onkeyup="formatNum" v-model="prop.price" required type="tel" placeholder="amount" id="price" name="price" class="curved">
                                                    </p>
                                                    <div class="text-center"><span id="price-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.price" />
                                                </div>


                                                <div class="col-lg-6 col-md-12 dropdown faq-drop" id="duration-div">
                                                    <div class="form-group categories">
                                                        <label>Price Duration</label>
                                                        <select id="duration" name="duration" class="curved nice-select form-control wide duration">
                                                            <!--do not remove the first <option> it is being used in form validation-->
                                                            <option></option>
                                                            <option :selected="prop.duration == 'Year'" value="Year">Year</option>
                                                            <option :selected="prop.duration == 'Month'" value="Month">Month</option>
                                                            <option :selected="prop.duration == 'Week'" value="Week">Week</option>
                                                            <option :selected="prop.duration == 'Day'" value="Day">Day</option>
                                                            <option :selected="prop.duration == '6 Months'" value="6 Months">6 Months</option>
                                                            <option :selected="prop.duration == '2 Years'" value="2 Years">2 Years</option>
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
                                                        <textarea class="curved" id="description" name="description" placeholder="Describe about your property" :value="prop.description"> </textarea>
                                                    </p>
                                                    <InputError class="mt-2" :message="form.errors.description" />
                                                </div>

                                                <div class="col-md-12">
                                                    <label for="video">Video link</label>
                                                    <input class="curved" type="text" max="200" name="video" id="video" placeholder="https://www.youtube.com/watch?v=14semTlwyUY">
                                                    <input v-if="prop.video" type="hidden" :value="prop.video.replace(')','https://').replaceAll('(','.')" id="current-video">
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
                                                        <select @change="changeCurrstate" required id="state" name="state" class="curved nice-select form-control wide state">
                                                            <option>Select State</option>
                                                            <option v-for="stateArr in stateArray" :key="stateArr" :selected="stateArr.state.name == prop.state" :value="stateArr.state.name">{{ stateArr.state.name }}</option>
                                                            
                                                        </select>
                                                        
                                                    </div>
                                                    <div class="text-center"><span id="state-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.state" />
                                                </div>
                                                <div class="col-lg-6 col-md-12 dropdown faq-drop">
                                                    <div class="form-group categories">
                                                        <label>Local Government</label>
                                                        <select required id="local_government" name="local_government" class="curved nice-select form-control wide local">
                                                            <option></option>
                                                            <option v-for="loc in locs" :key="loc" :selected="loc == prop.local_government">{{ loc }}</option>
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
                                                        <input v-model="prop.locality" class="curved" required min="3" max="50" type="text" name="locality" placeholder="Ikoyi" id="locality">
                                                    </p>
                                                    <div class="text-center"><span id="locality-id" class="text-danger"></span></div>
                                                    <InputError class="mt-2" :message="form.errors.locality" />
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <p>
                                                        <label for="address">Street Address</label>
                                                        <input v-model="prop.address" class="curved" required min="3" max="50" type="text" name="address" placeholder="23 adekunle street" id="address">
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
                                                                    <input id="AC" :checked="prop.feature.AC == 'Air Conditioning'" value="Air Conditioning" type="checkbox" name="AC">
                                                                    <label for="AC">Air Conditioning</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="SW" :checked="prop.feature.SW == 'Swimming Pool'" value="Swimming Pool" type="checkbox" name="SW">
                                                                    <label for="SW">Swimming Pool</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="WH" :checked="prop.feature.WH == 'Water Heater'" value="Water Heater" type="checkbox" name="WH">
                                                                    <label for="WH">Water Heater</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="security" :checked="prop.feature.security == 'Security'" value="Security" type="checkbox" name="check">
                                                                    <label for="security">Security</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="gym" :checked="prop.feature.gym == 'Gym'" value="Gym" type="checkbox" name="check">
                                                                    <label for="gym">Gym</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="serviced" :checked="prop.feature.serviced == 'Serviced'" value="Serviced" type="checkbox" name="check">
                                                                    <label for="serviced">Serviced</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="furnished" :checked="prop.feature.furnished == 'Furnished'" value="Furnished" type="checkbox" name="check">
                                                                    <label for="furnished">Furnished</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="MQ" :checked="prop.feature.MQ == 'Maid Quarters'" value="Maid Quarters" type="checkbox" name="check">
                                                                    <label for="MQ">Maid Quarters</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="TC" :checked="prop.feature.TC == 'TV Cable'" value="TV Cable" type="checkbox" name="check">
                                                                    <label for="TC">TV Cable</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="fl-wrap filter-tags clearfix">
                                                            <div class="checkboxes float-left">
                                                                <div class="filter-tags-wrap">
                                                                    <input id="wifi" :checked="prop.feature.wifi == 'WiFi'" value="WiFi" type="checkbox" name="check">
                                                                    <label for="wifi">WiFi</label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="prperty-submit-button pt-5">
                                        
                                            <button :disabled="processing" id="submit-button" type="submit">Update and Upload Pictures</button>
                                                    
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
            <input type="hidden" id="current-state" :value="prop.state" >
            <input type="hidden" id="current-localgovernment" :value="prop.local_government" >
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
        
    
    