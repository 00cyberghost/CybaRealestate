<script setup>
    import InputError from '@/Components/InputError.vue';
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import { onMounted,onUnmounted } from 'vue';
    
    const form = useForm({
        category: '',
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    let processing = ref(false);
    
    const submit = () => {
        let el = document.querySelector('.checked input').value;

        form.category = el;
        
        form.post(route('register'), {
            onStart: () => processing.value = true ,
            onFinish: () => {

                form.reset('password', 'password_confirmation');

                processing.value = false;
            }
            
        });

        
    };
    
    onMounted(() => {


        
    
        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('inner-pages ui-elements hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');
    
        //launch the register modal
        $('.modal').fadeIn();
    
        //when the modal is closed
        $('.close-reg').on("click", function () {
    
        $('.modal').fadeOut();
    
        history.back();
    
        });
    
                
        //add a class of checked to the div with a class of radio option
        $('.radio-option').on('click',function(){
        
            $('.radio-option').removeClass('checked');
        
            $(this).addClass('checked');
        
            //add an id of category to the input element which will be sent to the server when the form is submited 
            let currentEl = $(this).find('input').val();

            let name = $('#name-label');
        
            switch(currentEl){
        
                case 'agent':
                name.text('Agent Name *');
                break;
        
                case 'agency':
                name.text('Agency Name *');
                break;
        
                case 'customer':
                name.text('Full Name *');
                break;
            }

        
        });
        
        
    })
    
    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('inner-pages ui-elements hd-white');
    })
    
    
    
    
    </script>
    
    <template>
        <!--register form -->
        <div class="login-and-register-form modal">
            <div class="main-overlay"></div>
            <div class="main-register-holder">
                <div class="main-register fl-wrap">
                    <div class="close-reg"><i class="fa fa-times"></i></div>
                    <h3>Welcome to <span>Find<strong>Houses</strong></span></h3>
                    
                    <div id="tabs-container">
                        
                        <div class="tab">
                            <div id="tab-1" class="tab-contents">
                                <div class="custom-form">
                                    <form @submit.prevent="submit" name="registerform" class="main-register-form" id="main-register-form2">
                                        <h5>I am an :</h5>
                                        <p>
                                            <InputError class="mt-2" :message="form.errors.category" />
                                        </p>
                                        
                                        <div class="row full-width mt-5">
                                            <div class="the-check-list col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div class="radio-option mr-2">
                                                    <div class="inner"></div>
                                                    <input type="radio" name="cat" value="agent" />
                                                </div>
                                                <span class="mt-1">Agent</span>
                                            </div>
                                            <div class="the-check-list col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div class="radio-option mr-2">
                                                    <div class="inner"></div>
                                                    <input type="radio" name="cat" value="agency" />
                                                </div>
                                                <span class="mt-1">Agency</span>
                                            </div>
                                            <div class="the-check-list col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div class="radio-option mr-2">
                                                    <div class="inner"></div>
                                                    <input type="radio" name="cat" value="customer" />
                                                </div>
                                                <span class="mt-1">Customer</span>
                                            </div>
                                        </div>
                                        <label id="name-label" for="email">Agent Name * </label>
                                        <input id="name" minlength="3" v-model="form.name" required autofocus type="text">
                                        <InputError class="mt-2" :message="form.errors.name" />
                                        
                                        
                                        <label for="email">Email Address *</label>
                                        <input id="email" placeholder="example@email.com" v-model="form.email" required type="email">
                                        <InputError class="mt-2" :message="form.errors.email" />
                                        
                                        
                                        <label for="phone">Phone Number *</label>
                                        <input id="phone" v-model="form.phone" required autofocus type="tel" minlength="11" maxlength="11">
                                        <InputError class="mt-2" :message="form.errors.phone" />
                                        
                                        
                                        <label for="whatsapp">Whatsapp Number *</label>
                                        <input id="whatsapp" v-model="form.whatsapp" required autofocus type="tel" minlength="11" maxlength="11">
                                        <InputError class="mt-2" :message="form.errors.whatsapp" />
                                        
                                        
                                        <label for="password">Password *</label>
                                        <input id="password" minlength="6" v-model="form.password" required type="password">
                                        <InputError class="mt-2" :message="form.errors.password" />
                                        
                                        
                                        <label for="password_confirmation">confirm Password *</label>
                                        <input id="password_confirmation" minlength="6" v-model="form.password_confirmation" required  type="password">
                                        <InputError class="mt-2" :message="form.errors.password_confirmation" />

                                        <input type="hidden" v-model="form.category" required id="category" name="category" />
                                        
                                        
                                        <button :disabled="processing" type="submit" id="sub" class="log-submit-btn"><span>Register</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <!--register form end -->
    
            
    </template>
    