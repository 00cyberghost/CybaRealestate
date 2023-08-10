<script setup>
    import { Head,Link,useForm } from "@inertiajs/inertia-vue3"
    import GuestLayout from '@/Layouts/GuestLayout.vue'
    import SideBar from "@/Components/SideBar.vue"
    import Pagination from "@/Components/Pagination.vue"
    import { onMounted,onUnmounted,ref } from 'vue'



    defineProps({

        agencies: Object
    })

    const currentUrl = `https://${location.hostname}${location.pathname}`

    const sortAgencies = (event) => {

        let form = useForm()

        let param = event.target.value

        form.get(route('sortAgencies',param))

        
    }

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
    
    let domain_name = location.hostname
    onMounted(() => {

        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('inner-pages agents homepage-4 hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');

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

    })

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('inner-pages agents homepage-4 hd-white');
    })
</script>

<template>
    <Head title="property and house agencies in Lagos, Abuja, Porthacourt nigeria">
        <meta name="description" content="Find property agencies in lagos,mushin,lekki,lekki-phase 1,osopa london, ajegunle, eti-osa,ikorodu,epe,amuwo-oddofin,kuje,zubwa,maitama,elele,obigbo,aba,osisioma,zaria,kano state,enugu state,umuahia,asokoro,abia state,adamawa state,akwa-ibom state,anambra state,bauchi state,benue state,cross-river state,delta state,ebonyi state,edo state,ekiti state,gombe state,imo state,jigawa state,kaduna state,katsina state,kano state,kebbi state,kogi state,kwara state,niger state,ogun state,ondo state,oyo state,ibadan,plateau state,jos,nasarawa state,taraba state,yobe state, zamfara state and all over nigeria" />
    </Head>
    <GuestLayout>

    <!-- START SECTION Agencies -->
    <section class="blog blog-section portfolio pt-5">
        <div class="container">
            <section class="headings-2 pt-0 pb-55">
                <div class="pro-wrapper">
                    <div class="detail-wrapper-body">
                        <div class="listing-title-bar">
                            <div class="text-heading text-left">
                                <p class="pb-2"><Link :href="route('home')">Home </Link> &nbsp;/&nbsp; <span>Listings</span></p>
                            </div>
                            <h3>Our Agencies</h3>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Search Form -->
                <div class="col-12 px-0 parallax-searchs mb-5 d-none">
                    <div class="banner-search-wrap">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="tabs_1">
                                <div class="rld-main-search">
                                    <div class="row">
                                        <div class="rld-single-input">
                                            <input type="text" placeholder="Enter Keyword...">
                                        </div>
                                        <div class="rld-single-select ml-22">
                                            <select @change="changeCurrstate" required id="state" name="state" class="select single-select">
                                                <option v-for="stateArr in stateArray" :key="stateArr">{{ stateArr.state.name }}</option>
                                            </select>
                                        </div>

                                        <div class="rld-single-select ml-22">
                                            <select class="select single-select" id="local_government" name="local_government">
                                                <option v-for="loc in locs" :key="loc">{{ loc }}</option>
                                            </select>
                                        </div>
                                        
                                        
                                        <div class="col-xl-2 col-lg-2 col-md-4 pl-0">
                                            <a class="btn btn-yellow" href="#">Search Now</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ End Search Form -->

            <div class="row">
                <div class="col-lg-8 col-md-12 col-xs-12">
                    <section class="headings-2 pt-0">
                        <div class="pro-wrapper">
                            <div class="detail-wrapper-body">
                                <div class="listing-title-bar">
                                    <div class="text-heading text-left">
                                        <p class="font-weight-bold mb-0 mt-3">7 Search results</p>
                                    </div>
                                </div>
                            </div>
                            <div class="cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center grid">
                                <div class="input-group border rounded input-group-lg w-auto mr-4">
                                    <label class="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" for="inputGroupSelect01"><i class="fas fa-align-left fs-16 pr-2"></i>Sortby:</label>
                                   
                                    <select preserve-scroll @change="sortAgencies" class="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3" id="inputGroupSelect01" name="sortby">
                                        <option value="">sort</option>
                                        <option value="alphabet">Alphabet</option>
                                        <option value="rating">Rating</option>
                                        <option value="number">Number of property</option>
                                        <option value="date">Date Registered</option>
                                    </select>
                                   
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="row">
                        <div v-for="agency in agencies.data" :key="agency.id" class="col-md-12 col-xs-12 mt-3">
                            <div class="news-item news-item-sm">
                                <Link :href="route('agencyDetails',agency.id)" class="news-img-link">
                                    <div class="news-item-img homes">
                                        <div class="homes-tag button alt featured">{{ agency.property_count }} Listings</div>
                                        <img class="resp-img" :src="`/photos/${agency.photo}`" :alt="agency.name">
                                    </div>
                                </Link>
                                <div class="news-item-text">
                                    <Link :href="route('agencyDetails',agency.id)"><h3>{{ agency.name }}</h3></Link>
                                    <div class="the-agents">
                                        <ul class="the-agents-details">
                                            <li><a :href="`tel:${agency.phone}`"><i class="fa fa-phone icon mr-3"></i> Call</a></li>
                                            <li><a target="_blank" :href="`whatsapp://send?phone=+234${agency.whatsapp}&text=hello i am interested in a service you provide and i saw your profile here ${currentUrl}`"><i class="fa fa-whatsapp icon mr-3"></i> Message</a></li>
                                            <li><a target="_blank" :href="`mailto:${agency.email}`"><i class="fa fa-envelope icon mr-3"></i> {{ agency.email.slice(0,6) }}...</a></li>
                                            <li><a href="#"><i class="fa fa-star icon mr-3"></i> {{agency.rating}}.0 </a></li>
                                            <li><a href="#"><i class="fas fa-clock icon mr-3"></i> {{agency.created_at_diff}} </a></li>
                                        </ul>
                                    </div>
                                    <div class="news-item-bottom">
                                        <Link :href="route('agencyDetails',agency.id)" class="news-link">View Agency</Link>
                                        <div class="admin">
                                            <p>{{ agency.name }}</p>
                                            <img :src="`/photos/${agency.photo}`" :alt="agency.name">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <!-- pagination -->
                    <Pagination :paginations="agencies.links" />
                    <!-- pagination -->


                </div>
                
                <aside class="col-lg-4 col-md-12 car">

                    <SideBar />

                </aside>
      
            </div>
        </div>
    </section>
    <!-- END SECTION Agencies -->
    </GuestLayout>
</template>
