<script setup>
    import { Head,Link } from "@inertiajs/inertia-vue3"
    import Header from "@/Components/Header.vue"
    import Review from "@/Components/Review.vue"
    import SideBar from "@/Components/SideBar.vue"
    import Pagination from "@/Components/Pagination.vue"
    import Footer from "@/Components/Footer.vue"
    import { onMounted,onUnmounted } from 'vue'
    
    onMounted(() => {

        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('inner-pages agents homepage-4 det hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');

    })

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('inner-pages agents homepage-4 det hd-white');
    })

    defineProps({
        user : Array

    })

</script>

<template>
    
    <Header />

    <!-- START SECTION AGENTS DETAILS -->
    <section class="blog blog-section portfolio single-proper details mb-0  agents homepage-4 det hd-white">
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
                                <Link :href="`/agent-details/${user.id}`" class="news-img-link">
                                    <div class="news-item-img homes">
                                        <div class="homes-tag button alt featured">4 Listings</div>
                                        <img class="resp-img" src="/images/team/a-1.png" alt="blog image">
                                    </div>
                                </Link>
                                <div class="news-item-text">
                                    <Link :href="`/agent-details/${user.id}`"><h3>{{user.name}}</h3></Link>
                                    <div class="the-agents">
                                        <ul class="the-agents-details">
                                            <li><a>{{user.name}}</a></li>
                                            <li><a>{{user.phone}}</a></li>
                                            <li><a>{{user.whatsapp}}</a></li>
                                            <li><a>{{user.email}}</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-item-bottom">
                                        <Link :href="`/agent-details/${user.id}`" class="news-link">View My Listings</Link>
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
                        <div class="blog-info details mb-30">
                            <h5 class="mb-4">Description</h5>
                            <p class="mb-3">{{user.about}}</p>
                        </div>
                        <!-- START SIMILAR PROPERTIES -->
                        <section class="similar-property featured portfolio bshd p-0 bg-white">
                            <div class="container">
                                <h5>Listing By Carls Jhons</h5>
                                <div class="row">
                                    <div class="item col-lg-6 col-md-6 col-xs-12 landscapes sale">
                                        <div class="project-single">
                                            <div class="project-inner project-head">
                                                <div class="homes">
                                                    <!-- homes img -->
                                                    <Link :href="route('propertyDetails')" class="homes-img">
                                                        <div class="homes-tag button alt featured">Featured</div>
                                                        <div class="homes-tag button alt sale">For Sale</div>
                                                        <div class="homes-price">$9,000</div>
                                                        <img src="/images/blog/b-11.jpg" alt="home-1" class="img-responsive">
                                                    </Link>
                                                </div>
                                                <div class="button-effect">
                                                     <Link :href="route('propertyDetails')" class="btn"><i class="fa fa-link"></i></Link>
                                                    <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                                                    <Link :href="route('propertyDetails')" class="img-poppu btn"><i class="fa fa-photo"></i></Link>
                                                </div>
                                            </div>
                                            <!-- homes content -->
                                            <div class="homes-content">
                                                <!-- homes address -->
                                                <h3> <Link :href="route('propertyDetails')">Luxury House</Link></h3>
                                                <p class="homes-address mb-3">
                                                     <Link :href="route('propertyDetails')">
                                                        <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park, NYC</span>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </section>
                        <!-- END SIMILAR PROPERTIES -->
                        <!-- Star Reviews -->

                        <Review />
                        
                        <!-- End Reviews -->
                        
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
    <!-- END SECTION AGENTS DETAILS -->


    <Pagination />




    <Footer />
</template>