<script setup>
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import DashboardLayout from "@/Layouts/DashboardLayout.vue"
    import InputError from '@/Components/InputError.vue'
    import { onMounted,onUnmounted,ref,onUpdated } from 'vue'
    
    defineProps({
        
        props: Object
    })
    
    //update users
    
        const form = useForm({
    
            phone: '',
            whatsapp: '',
            about: '',
            facebook: '',
            twitter: '',
            instagram: '',
            youtube: '',
            state: '',
            local_government: '',
            locality: '',
            address: '',
            longitude: '',
            latitude: '',
            
        });
    
        let processing = ref(false);
    
        
        const submit = () => {
    
            //for whatsapp
            form.whatsapp = document.getElementById('whatsapp').value
    
            //for phone
            form.phone = document.getElementById('phone').value
    
            //for about
            form.about = document.getElementById('about').value
    
            //for facebook
            form.facebook = document.getElementById('facebook').value
    
            //for twitter
            form.twitter = document.getElementById('twitter').value

            //for instagram
            form.instagram = document.getElementById('instagram').value
    
            //for youtue
            form.youtube = document.getElementById('youtube').value
    
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
    
    
            
            form.patch(route('updateUser'), {
                onStart: () => {
    
                    document.getElementById('sub').textContent = 'Processing...'
    
                    processing.value = true
                    } ,
                    onFinish: () => {
    
                    document.getElementById('sub').textContent = 'Update'
    
                    processing.value = false;
                }
                
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
    
    
    
    onMounted(() => {
        
        $('body').addClass('inner-pages maxw1600 m0a dashboard-bd');
    
        $(".header-user-name").on("click", function() {
            $(".header-user-menu ul").toggleClass("hu-menu-vis");
            $(this).toggleClass("hu-menu-visdec");
        });
    
        const popLoc = () => {
    
            let currentState = document.getElementById('currentState')
    
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
        .finally(console.log('success'))
    
        //dropzone.js for user image upload
        $(".dropzone").dropzone({
            dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> Click or Drop Images Here To Uplod",
            acceptedFiles: ".jpeg,.png,.gif,.JPEG,.Jpeg,.jpg,.PNG,.GIF",
            previewsContainer: document.querySelector('.dropzone'),
            maxFiles: 1,
    
        });
    
    
    
    })
    
    onUnmounted(() => $('body').addClass('inner-pages maxw1600 m0a dashboard-bd'))
    
    
    
    
    
    </script>
    <template>
        <Head title="My Profile" />
        <DashboardLayout :props="props">
            <div class="dashborad-box stat bg-white">
                <div class="section-body">
                    <form method="post" dd="/dashboard/user-image" action="/dashboard/user-image" class="dropzone" enctype="multipart/form-data">
                        <input type="hidden" :value="props.token" name="_token" id="token_id">
                    </form>
                </div>
            </div>
            
            
            <div class="dashborad-box mb-0">
                <h4 class="heading pt-0">Personal Information</h4>
                <div class="section-inforamation">
                    <form @submit.prevent="submit">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" :value="props.user.name" disabled id="name" class="form-control" placeholder="Name">
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="email" :value="props.user.email" disabled id="email" class="form-control" placeholder="Email">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="number" :value="props.user.whatsapp" id="whatsapp" class="form-control" placeholder="Whatsapp">
                                    <InputError class="mt-2" :message="form.errors.whatsapp" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">               
                                    <input type="number" :value="props.user.phone" id="phone" class="form-control" placeholder="Phone">
                                    <InputError class="mt-2" :message="form.errors.phone" />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <textarea :value="props.user.about" name="about" id="about" class="form-control" placeholder="About You or Agency"></textarea>
                                    <InputError class="mt-2" :message="form.errors.about" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <select @change="changeCurrstate" maxlength="20" minlength="2" required id="state" name="state" class="curved nice-select form-control wide state mb-5">
                                        <option>Select State</option>
                                        <option v-for="stateArr in stateArray" :key="stateArr" :selected="stateArr.state.name == props.user.state" :value="stateArr.state.name">{{ stateArr.state.name }}</option>
                                        
                                    </select>
                                    <InputError class="mt-2" :message="form.errors.state" />
                                </div>
                            </div>
                            <div class="col-lg-6" v-if="currState">
                                <div class="form-group">
                                    <select required id="local_government" maxlength="20" minlength="2" name="local_government" class="curved nice-select form-control wide local_government mb-5">
                                        <option value="">Select Local Government</option>
                                        <option v-for="loc in locs" :key="loc" :selected="loc == props.user.local_government">{{ loc }}</option>
                                    </select>
                                    <InputError class="mt-2" :message="form.errors.local_government" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" required maxlength="20" minlength="2" :value="props.user.locality" name="locality" id="locality" class="form-control" placeholder="Locality">
                                    <InputError class="mt-2" :message="form.errors.locality" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" :value="props.user.address" maxlength="30" minlength="2" name="address" id="address" class="form-control" placeholder="Street Address">
                                    <InputError class="mt-2" :message="form.errors.address" />
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <input type="text" :value="props.user.facebook" name="facebook" id="facebook" class="form-control" placeholder="Facebook">
                                    <InputError class="mt-2" :message="form.errors.facebook" />
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <input type="text" :value="props.user.twitter" name="twitter" id="twitter" class="form-control" placeholder="Twitter">
                                    <InputError class="mt-2" :message="form.errors.twitter" />
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <input type="text" :value="props.user.instagram" name="instagram" id="instagram" class="form-control" placeholder="Instagram">
                                    <InputError class="mt-2" :message="form.errors.instagram" />
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <input type="text" :value="props.user.youtube" name="youtube" id="youtube" class="form-control" placeholder="Youtube">
                                    <InputError class="mt-2" :message="form.errors.youtube" />
                                </div>
                            </div>
                            
                        </div>
                        <div class="password-section d-none">
                            <h6>Update Password</h6>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>New Password</label>
                                        <input type="password" class="form-control" placeholder="Write new password">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Repeat Password</label>
                                        <input type="password" class="form-control" placeholder="Write same password again">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" :disabled="processing" id="sub" class="btn btn-primary btn-lg mt-2">Update</button>
                        <input type="hidden" :value="props.user.longitude" id="longitude" name="longitude">
                        <input type="hidden" :value="props.user.latitude" id="latitude" name="latitude">
                        <input type="hidden" :value="props.user.state" id="currentState">
                        <input type="hidden" :value="props.user.localgovernment" id="currentLocalGovernment">
                    </form>
                </div>
            </div>
        </DashboardLayout>
    </template>
    <style scoped>
        input,textarea {
    
            background: #f5f5f5;
            border: none !important;
            width: 100%;
            height: 50px;
            padding-left: 20px;
            font-weight: 500;
            margin-bottom: 24px;
            border-radius: 2em;
        }
    
        textarea {
    
            height: 100px;
        }
    
    
    </style>
    
        
    
    