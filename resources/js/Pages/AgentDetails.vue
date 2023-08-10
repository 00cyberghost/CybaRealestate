<script setup>
    import { Head,Link } from "@inertiajs/inertia-vue3"
    import GuestLayout from '@/Layouts/GuestLayout.vue'
    import Seo from "@/Components/Seo.vue"
    import Review from "@/Components/Review.vue"
    import SideBar from "@/Components/SideBar.vue"
    import Pagination from "@/Components/Pagination.vue"
    import { onMounted,onUnmounted } from 'vue'

    defineProps({

    props : Object

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
        $('body').addClass('inner-pages agents homepage-4 det hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');


        //update view count
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
        $('body').removeClass('inner-pages agents homepage-4 det hd-white');
    })

    

</script>

<template>
    
    <GuestLayout>

    <!-- START SECTION AGENTS DETAILS -->
    <section v-for="user in props.user" :key="user.id" id="user-id" :user-id="user.id" class="blog blog-section portfolio single-proper details mb-0  agents homepage-4 det hd-white">
        <Seo :title="user" desc="agent" />
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-xs-12">
                    <div class="row">
                        <div class="col-md-12 col-xs-12">
                            <section class="headings-2 pt-0 hee">
                                <div class="pro-wrapper">
                                    <div class="detail-wrapper-body">
                                        <div class="listing-title-bar">
                                            <div class="text-heading text-left">
                                                <p> <Link :href="route('home')">Home </Link> &nbsp;/&nbsp; <span>Agent Single</span></p>
                                            </div>
                                            <h3>{{user.name}}</h3>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div class="news-item news-item-sm">
                                <Link :href="route('agentDetails',user.id)" class="news-img-link">
                                    <div class="news-item-img homes">
                                        <div class="homes-tag button alt featured">{{ props.property_count }} Listings</div>
                                        <img class="resp-img" :src="`/photos/${user.photo}`" alt="blog image">
                                    </div>
                                </Link>
                                <div class="news-item-text">
                                    <Link :href="route('agentDetails',user.id)"><h3>{{user.name}}</h3></Link>
                                    <div class="the-agents">
                                        <ul class="the-agents-details">
                                            <li><a>{{user.name}}</a></li>
                                            <li><i class="fa fa-phone"></i> <a :href="`tel:${user.phone}`">{{user.phone.slice(0,6)}}...</a></li>
                                            <li><i class="fa fa-whatsapp"></i> <a :href="`whatsapp://send?phone=+234${user.whatsapp}&text=hello i am interested in your services and i saw your profile here ${currentUrl}`" target="_blank">{{user.whatsapp.slice(0,6)}}...</a></li>
                                            <li><i class="fa fa-envelope"></i> <a target="_blank" :href="`mailto:${user.email}`">{{user.email}}</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-item-bottom">
                                        <Link :href="route('agentDetails',user.id)" class="news-link">My Listings</Link>
                                        <div class="admin">
                                            <p>{{user.name}}</p>
                                            <img src="/images/partners/1.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-pots py-0">
                        <div v-if="user.about" class="blog-info details mb-30">
                            <h5  class="mb-4">About</h5>
                            <p class="mb-3">{{user.about}}</p>
                        </div>
                        <!-- START SIMILAR PROPERTIES -->
                        <section v-if="props.properties.data[0]" class="similar-property featured portfolio bshd mt-4 p-0 bg-white">
                            <div class="container">
                                <h5>Listing By {{user.name}}</h5>
                                <div class="row">
                                    <div v-for="property in props.properties.data" :key="property.id" class="item col-lg-6 col-md-6 col-xs-12 landscapes sale">
                                        <div class="project-single">
                                            <Link :href="route('propertyDetails',resolveLink(property))" class="news-img-link">
                                                <div class="project-inner project-head">
                                                    <div class="homes">
                                                        <!-- homes img -->
                                                        <Link :href="route('propertyDetails',resolveLink(property))" class="homes-img">
                                                            <div class="homes-tag button alt featured d-none">Featured</div>
                                                            <div id="overlay" class="homes-tag button alt sale">{{ property.category }}</div>                                                        
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
                                                <h3 class="truncate"> <Link :href="route('propertyDetails',resolveLink(property))">{{ property.title }}</Link></h3>
                                                <p class="homes-address mb-3 truncate">
                                                     <Link :href="route('propertyDetails',resolveLink(property))">
                                                        <i class="fa fa-map-marker"></i><span>{{ property.location }}</span>
                                                     </Link>
                                                </p>
                                                <!-- homes List -->
                                                <ul class="homes-list clearfix">
                                                    <li>
                                                        <span>6 Beds</span>
                                                    </li>
                                                    <li>
                                                        <span>3 Baths</span>
                                                    </li>
                                                    <li>
                                                        <span>720 sq ft</span>
                                                    </li>
                                                    <li>
                                                        <span>2 Garages</span>
                                                    </li>
                                                </ul>
                                                
                                                <div>{{ property.amount }}</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </section>
                        <!-- END SIMILAR PROPERTIES -->


                        <!-- pagination -->
                        <Pagination v-if="props.properties.data[0]" :paginations="props.properties.links" />
                        <!-- pagination -->
                        
                        
                        <!-- Star Reviews -->

                        <Review :user_id="user.id" />
                        
                        <!-- End Reviews -->
                        
                    </div>
                </div>
                <aside class="col-lg-4 col-md-12 car">
                    <!--SIDEBAR-->
                    <SideBar :user="user" />
                    <!--SIDEBAR END---->
                </aside>
            </div>
        </div>
    </section>
    <!-- END SECTION AGENTS DETAILS -->

    </GuestLayout>
</template>