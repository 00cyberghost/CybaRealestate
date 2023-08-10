<script setup>
    import { Head,Link,useForm } from "@inertiajs/inertia-vue3"
    import GuestLayout from '@/Layouts/GuestLayout.vue'
    import Pagination from "@/Components/Pagination.vue"
    import { onMounted,onUnmounted } from 'vue'

    
    defineProps({
        users : Object

    })

    const sortAgencies = (event) => {

        let form = useForm()

        let param = event.target.value

        form.get(route('sortAgents',param))

        
    }

    let domain_name = location.hostname

    
    
    onMounted(() => {

        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('inner-pages agents hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');

    })

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('inner-pages agents hd-white');
    })
</script>

<template>
    <Head title="property agents in Lagos, Abuja, Porthacourt nigeria">
        <meta name="description" content="Find property and house agents in lagos,mushin,lekki,lekki-phase 1,osopa london, ajegunle, eti-osa,ikorodu,epe,amuwo-oddofin,kuje,zubwa,maitama,elele,obigbo,aba,osisioma,zaria,kano state,enugu state,umuahia,asokoro,abia state,adamawa state,akwa-ibom state,anambra state,bauchi state,benue state,cross-river state,delta state,ebonyi state,edo state,ekiti state,gombe state,imo state,jigawa state,kaduna state,katsina state,kano state,kebbi state,kogi state,kwara state,niger state,ogun state,ondo state,oyo state,ibadan,plateau state,jos,nasarawa state,taraba state,yobe state, zamfara state and all over nigeria" />
     </Head>
    <GuestLayout>
    <!-- START SECTION AGENTS -->
    <section class="team blog pt-5">
        <div class="container">
            <section class="headings-2 pt-0 pb-55">
                <div class="pro-wrapper">
                    <div class="detail-wrapper-body">
                        <div class="listing-title-bar">
                            <div class="text-heading text-left">
                                <p class="pb-2"><Link :href="route('home')">Home </Link> &nbsp;/&nbsp; <span>Listings</span></p>
                            </div>
                            <h3>All Agents</h3>
                        </div>
                    </div>
                </div>
            </section>
            <div class="row">
                <div class="col-lg-12 agent-mb">
                    <section class="headings-2 pt-0">
                        <div class="pro-wrapper">
                            <div class="detail-wrapper-body">
                                <div class="listing-title-bar">
                                    <div class="text-heading text-left">
                                        <p class="font-weight-bold mb-0 mt-3">Search results</p>
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
                                <div class="sorting-options">
                                    <a href="#" class="change-view-btn active-view-btn"><i class="fa fa-th-list"></i></a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                <div class="col-lg-12 agent-mb" v-for="user in users.data" :key="user.id">
                    <div class="agent agent-row shadow-hover mt-5">
                        <Link :href="route('agentDetails',user.id)" class="agent-img">
                            <div class="img-fade"></div>
                            <div class="button alt agent-tag">{{ user.property_count }} Properties</div>
                            <img :src="`/photos/${user.photo}`" alt="" />
                        </Link>
                        <div class="agent-content">
                            <div class="agent-details">
                                <h4><Link :href="route('agentDetails',user.id)">{{user.name}}</Link></h4>
                                <p><i class="fa fa-envelope icon"></i>{{user.email}}</p>
                                <p><a :href="`tel:${user.phone}`"><i class="fa fa-phone"></i> <small class="f-10">Call</small></a></p>
                                <p><a :href="`whatsapp://send?phone=+234${user.whatsapp}&text=hello i am interested in a service you provide and i got your number from ${domain_name}`"><i class="fa fa-whatsapp icon"></i><small>Message</small></a></p>
                                <p><a><i class="fa fa-star icon"></i><small>{{ user.rating }}.0</small></a></p>
                            </div>
                            <div class="user-text">
                                <p>{{user.about}}</p>
                            </div>
                            <div class="agent-footer center">
                                <ul class="netsocials">
                                    <li><a target="_blank" href="{{user.facebook}}"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a target="_blank" href="{{user.twitter}}"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a target="_blank" href="{{user.email}}"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a target="_blank" href="{{user.youtube}}"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
          
             
            </div>
            <!-- end row -->
        </div>
    </section>
    <!-- END SECTION AGENTS -->

    <Pagination :paginations="users.links" />


    </GuestLayout>
</template>
