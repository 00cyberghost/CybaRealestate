//written by ozor clinton chibueze of cybaghost technologies www.cybaghost.com.ng 00cybaghost@gmail.com +2349061495389

$(function(){

	



    var states = $('#state');

	var localGovernments = $('#local_government');

    //loads states from a json file in when the document is loading
	function loadStates(){

		fetch('./json/states.json').
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
    

    //validate status
    let validateStatus = () => {

        if ($('input[name=status]:checked').length > 0) {
            
            removeError('status-id');

            return true;
        
        }else{

            addError('status-id','please choose from the above');

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

    //validate subtype
    let validateSubType = () => {

        if ($('#subtype').val().length > 0) {
            
            removeError('subtype-id');

            return true;
        
        }else{

            addError('subtype-id','please choose from the above');

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

        if ((ad >5) || (ad < 51)) {
            
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

        validateStatus();
        validateTitle();
        validateType();

        if(validateStatus() && validateTitle() && validateType()){
           
           nextTab();

           //upadte the value of the progress bar
           updateBar(20);

        
        }

    }

    //verify the second tab
    let verifySecondTab = () =>{

        if($('#type').val() == 'Land'){

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

    //verify the third tab and move to the next tab
    let verifyThirdTab = () =>{

        validatePrice();

        validateDuration();

        if(validatePrice() && validateDuration()){

           nextTab();

            //upadte the value of the progress bar
            updateBar(60);
        
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


    //tab control
    $(".tabbed-content").each(function () {
        $(this).append('<ul class="content"></ul>')
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


    



   

    
 //    //this function hides or shows the duration field when the status of the property changes
	// $('#status').on('change',function(){

	// 	var duration = $('#duration');

	// 	var shortlet = $('#shortlet');

	// 	if($(this).val() == 'rent' || $(this).val() == 'shortlet'){

	// 		duration.parent().show();
		
	// 	}else{

	// 		duration.parent().hide();
	// 	}
	// });

	// $('#phone-number').on('keyup',function(){

	// 	var pattern = /^[0][0-9]*$/;

 //        //making sure only acceptable values(numbers) are entered
    
 //        if (!$(this).val().match(pattern)) {

 //            $(this).val = $(this).val($(this).val().slice(0, $(this).val().length - 1));

 //        }//end of if statement

        
	// });


	// $('#price').on('keyup',function(){

	// 	var pattern = /^[1-9][0-9]*$/;

	
     

       

 //        //making sure only acceptable values(numbers) are entered
    
 //        if (!$(this).val().match(pattern)) {

 //            $(this).val = $(this).val($(this).val().slice(0, $(this).val().length - 1));

 //        }//end of if statement

        
	// });

	// //this function adds commas to figures
 //    function addCommas(){
	
 //        var Select = document.getElementById('price');

 //        var trim = Select.value.replace(',','');

 //        trim.replace(',',''); //handles error of 10,000 when user puts invalid figures

 //        trim.replace(',','');

 //        var secondTrim = trim.replace(',','');

 //        var thirdTrim = secondTrim.replace(',','');

 //        thirdTrim.replace(',',''); //handles error of 100,000,000,000 when user puts invalid figures

 //        formatNumber(Select,thirdTrim.trim().slice(1),0);//slice out the currency symbol and runs the function	

 //    }//end of function
	
	// //this function adds commas at the right places
 //    function formatNumber(a,n, p, ts, dp) {
 //        var t = [];
 //        // Get arguments, set defaults
 //        if (typeof p  == 'undefined') p  = 2;
        
 //        if (typeof ts == 'undefined') ts = ',';
        
 //        if (typeof dp == 'undefined') dp = '.';

 //        // Get number and decimal part of n
 //        n = Number(n).toFixed(p).split('.');

 //        // Add thousands separator and decimal point (if required):
 //        for (var iLen = n[0].length, i = iLen? iLen % 3 || 3 : 0, j = 0; i <= iLen; i+=3) {
        
 //        t.push(n[0].substring(j, i));
        
 //        j = i;
        
 //        }
        
        
 //        a.value = t.join(ts) + (n[1]? dp + n[1] : '');
 //    }

 //    $('#contact-checkbox').on('click',function(){

 //    	if($(this).prop('checked')){

 //    		$('#contact-row').empty();
    	
 //    	}else{

 //    		$('#contact-row').html('<div class="form-group col-md-4"><label>Name</label><input type="text" id="name" name="property_poster_name" class="form-control" minlength="2" maxlength="50" required></div><div class="form-group col-md-4"><label>Email</label><input type="email" minlength="5" maxlength="50" id="email" name="property_poster_email" class="form-control" placeholder="ozorclinton@gmail.com" required></div><div class="form-group col-md-4"><label>Phone</label><input type="number" name="property_poster_phone" maxlength="11" minlength="11" id="phone-number" placeholder="08079413738" class="form-control" required></div><div class="form-group col-md-4"><label>Whatsapp</label><input type="number" name="property_poster_whatsapp" maxlength="11" minlength="11" id="whatsapp-number" placeholder="08079413738" class="form-control" required></div>');
 //    	}

    		

    		
    	

    	
 //    });

 //    function hideTooltip(){

 //    	if(window.screen.width < 600){

 //    		$('.tip-topdata').hide();
 //    	}
 //    }
 //    hideTooltip();
});