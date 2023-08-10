<script setup>
    import { Head,Link } from "@inertiajs/inertia-vue3"
    import GuestLayout from '@/Layouts/GuestLayout.vue'
    import Seo from "@/Components/Seo.vue"
    import Review from "@/Components/Review.vue"
    import SideBar from "@/Components/SideBar.vue"
    import Pagination from "@/Components/Pagination.vue"
    import { onMounted,onUnmounted } from 'vue'

    defineProps({
        agencies: Object
    })

    const resolveLink = (prop) => {

        let category = prop.category.replaceAll(' ','-')

        let title = prop.title.replaceAll(' ','-')

        let id = prop.id

        let cat = `for-${category}`

        let final = `${title}`

        let f = final.replaceAll('/','-')

        return [id,cat,f]
    }

    const currentUrl = `https://${location.hostname}${location.pathname}`

    onMounted(() => {

        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('inner-pages agents homepage-4 det ag-de hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');

        const upadatePropertyView = () => {

            let id = document.getElementById('user-id').getAttribute('user-id')

            axios.put(route('updateUserViews',[id]))
            .catch(err => console.error(err))
            
        }

        upadatePropertyView()

    })

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('inner-pages agents homepage-4 det ag-de hd-white');
    })

</script>

<template>
    
    <GuestLayout>

     <!-- START SECTION AGENCY DETAILS -->
     <section  class="blog blog-section portfolio single-proper details mb-0 agents homepage-4 det ag-de hd-white">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-xs-12">
                    <div class="row" v-for="agency in agencies.agency" :key="agency.id" id="user-id" :user-id="agency.id">
                        <Seo :title="agency" desc="agency" />
                        <div class="col-md-12 col-xs-12">
                            <section class="headings-2 pt-0 hee">
                                <div class="pro-wrapper">
                                    <div class="detail-wrapper-body">
                                        <div class="listing-title-bar">
                                            <div class="text-heading text-left">
                                                <p><Link :href="route('home')">Home </Link> &nbsp;/&nbsp; <span>Agencies Single</span></p>
                                            </div>
                                            <h3>Agencies Single</h3>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div class="news-item news-item-sm">
                                <Link :href="route('agencyDetails',agency.id)" class="news-img-link">
                                    <div class="news-item-img homes">
                                        <div class="homes-tag button alt featured">{{ agencies.agency_property_count }} Listings</div>
                                        <img class="resp-img" :src="`/photos/${agency.photo}`" alt="blog image">
                                    </div>
                                </Link>
                                <div class="news-item-text">
                                    <Link :href="route('agencyDetails',agency.id)"><h3>{{ agency.name }}</h3></Link>
                                    <div class="the-agents">
                                        <ul class="the-agents-details">
                                            <li><a target="_blank" :href="`https://api.whatsapp.com/send?phone=+234${agency.whatsapp}&text=hello i am interested in a service you provide and i got your number from ${domain_name}`"><i class="fa fa-whatsapp mr-3"></i>  Message</a></li>
                                            <li><a target="_blank" :href="`tel:${agency.phone}`"><i class="fa fa-phone mr-3"></i>  Call</a></li>
                                            <li><Link preserve-scroll href="#"><i class="fa fa-envelope mr-3"></i>  {{ agency.email }}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-pots py-0">
                        <div class="blog-info details mb-30">
                            <h5 class="mb-4">Description</h5>
                            <p class="mb-3">{{ agencies.agency[0].about }}.</p>
                            
                        </div>
                        <!-- START LISTING PROPERTIES -->
                        <section class="similar-property featured portfolio bshd p-0 bg-white">
                            <div class="container-px-0">
                                <h5>Listing</h5>
                                <div class="row">
                                    <div v-for="property in agencies.properties.data" :key="property.id" class="item col-lg-6 col-md-6 col-xs-12 landscapes sale">
                                        <div class="project-single">
                                            <Link :href="route('propertyDetails',resolveLink(property))">
                                                <div class="project-inner project-head">
                                                    <div class="homes">
                                                        <!-- homes img -->
                                                        <Link :href="route('propertyDetails',resolveLink(property))" class="homes-img">
                                                            <div class="homes-tag button alt featured d-none">Featured</div>
                                                            <div id="overlay" class="homes-tag button alt sale">{{ property.category }}</div>
                                                            <div class="homes-price">{{ property.amount }}</div>
                                                            <img v-if="property.images.length > 0" :src="`/photos/${property.images[0].image_name}`" alt="home-1" class="img-responsive">
                                                        </Link>
                                                    </div>
                                                    <div class="button-effect">
                                                        <Link :href="route('propertyDetails',resolveLink(property))" class="btn"><i class="fa fa-link"></i></Link>
                                                        <a v-if="property.video" :href="property.video.replace(')','https://').replaceAll('(','.')" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                                                        <Link :href="route('propertyDetails',resolveLink(property))" class="img-poppu btn"><i class="fa fa-photo"></i></Link>
                                                    </div>
                                                </div>
                                            </Link>
                                            <!-- homes content -->
                                            <div class="homes-content">
                                                <!-- homes address -->
                                                <h3><Link :href="route('propertyDetails',resolveLink(property))">{{ property.title }}</Link></h3>
                                                <p class="homes-address mb-3">
                                                    <Link :href="route('propertyDetails',resolveLink(property))">
                                                        <i class="fa fa-map-marker"></i><span>{{ property.location }}</span>
                                                    </Link>
                                                </p>
                                                <!-- homes List -->
                                                <ul class="homes-list clearfix">
                                                    <li v-if="property.bedroom > 0">
                                                        <span>{{ property.bedroom }} Bedroom</span>
                                                    </li>
                                                    <li v-if="property.bathroom > 0">
                                                        <span>{{ property.bathroom }} bathroom</span>
                                                    </li>
                                                    <li v-if="property.area > 0">
                                                        <span>{{ property.area }}/{{ property.unit }} </span>
                                                    </li>
                                                    <li v-if="property.parking > 0">
                                                        <span>{{ property.parking }} Cars</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                                
                            </div>
                        </section>
                        <!-- END LISTING PROPERTIES -->
                        <!-- START SECTION AGENTS -->
                        <section class="blog blog-section portfolio py-0 age bg-white">
                            <div class="container">
                                <h5>Agents</h5>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-xs-12">
                                        <div class="row">
                                            
                                            <div v-for="agent in agencies.agents.data" :key="agent.id" class="col-md-12 col-xs-12">
                                                <div class="news-item news-item-sm">
                                                    <Link :href="route('agentDetails',agent.id)" class="news-img-link">
                                                        <div class="news-item-img homes">
                                                            <div class="homes-tag button alt featured">{{ agent.agent_property_count }} Listings</div>
                                                            <img class="resp-img" :src="`/photos/${agent.photo}`" alt="blog image">
                                                        </div>
                                                    </Link>
                                                    <div class="news-item-text">
                                                        <Link :href="route('agentDetails',agent.id)"><h3>{{ agent.name }}</h3></Link>
                                                        <div class="the-agents">
                                                            <ul class="the-agents-details">
                                                                <li><a>{{agent.name}}</a></li>
                                                                <li><i class="fa fa-phone"></i> <a :href="`tel:${agent.phone}`">{{agent.phone.slice(0,6)}}...</a></li>
                                                                <li><i class="fa fa-whatsapp"></i> <a :href="`whatsapp://send?phone=+234${agent.whatsapp}&text=hello i am interested in your services and i saw your profile here ${currentUrl}`" target="_blank">{{agent.whatsapp.slice(0,6)}}...</a></li>
                                                                <li><i class="fa fa-envelope"></i> <a target="_blank" :href="`mailto:${agent.email}`">{{agent.email}}</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="news-item-bottom">
                                                            <Link :href="route('agentDetails',agent.id)" class="news-link">View Listings</Link>
                                                            <div class="admin company">
                                                                <p>{{ agencies.agency[0].name }}</p>
                                                                <img :src="`/photos/${agencies.agency[0].photo}`" alt="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- END SECTION AGENTS -->
                        
                        <!-- Star Reviews -->
                        <Review :user_id="agencies.agency[0].id" />                        
                        <!-- End Reviews -->

                        <!-- pagination -->
                        <Pagination :paginations="agencies.properties.links" />
                        <!-- pagination -->

                    </div>
                </div>
                <aside class="col-lg-4 col-md-12 car">
                    <!--SIDEBAR-->
                    <SideBar />
                    <!--SIDEBAR END---->
                </aside>
            </div>
        </div>
    </section>
    <!-- END SECTION AGENCY DETAILS -->

    </GuestLayout>
</template>
