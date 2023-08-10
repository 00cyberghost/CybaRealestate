<script setup>
    import InputError from '@/Components/InputError.vue';
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import { onMounted,onUnmounted,ref } from 'vue';


    defineProps({
        email:String
    })
    
    const form = useForm({
        name: '',
        email: '',
        phone: null,
        whatsapp: null,
        password: '',
        password_confirmation: '',
        agency_email: '',
        terms: false,
    });

    let processing = ref(false);
    
    const submit = () => {

        let agency_email = document.getElementById('agency_email').value
        
        form.post(route('registerAgent',agency_email), {
            onStart: () => {

                document.getElementById('sub').textContent = 'Processing...'

                processing.value = true
            } ,
            onFinish: () => {

                form.reset('password', 'password_confirmation');

                document.getElementById('sub').textContent = 'Register'

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
                                        
                                        <label id="name-label" for="name">Agent Name * </label>
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

                                        <input type="hidden" :value="email" required id="agency_email" name="agency_email" />
                                        
                                        
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
    <style scoped>
        /**this is very important because users in the system cant be sorted if this style ir removed */
        #name{

            text-transform: capitalize;
        }
    
    </style>
    