<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
</script>

<template>
    <!-- START SECTION RECENTLY PROPERTIES -->
    <section class="featured portfolio home18 bg-white-3">
        <div class="container-fluid">
            <div class="section-title ml-3">
                <h3>Recent</h3>
                <h2>Properties</h2>
            </div>
            <div class="portfolio col-xl-12">
                <div class="slick-lancers">


                    <div class="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div class="landscapes">
                            <div class="project-single">
                                <div class="project-inner project-head">
                                    <div class="homes">
                                        <!-- homes img -->
                                        <Link :href="route('propertyDetails')" class="homes-img">
                                            <div class="homes-tag button alt featured">Featured</div>
                                            <div class="homes-tag button alt sale">For Sale</div>
                                            <div class="homes-price">$9,000/mo</div>
                                            <img src="images/blog/b-11.jpg" alt="home-1" class="img-responsive">
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
                                    <h3><Link :href="route('propertyDetails')">Real House Luxury Villa</Link></h3>
                                    <p class="homes-address mb-3">
                                        <Link :href="route('propertyDetails')">
                                            <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </Link>
                                    </p>
                                    <!-- homes List -->
                                    <ul class="homes-list clearfix pb-0">
                                        <li class="the-icons">
                                            <i class="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li class="the-icons">
                                            <i class="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li class="the-icons">
                                            <i class="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li class="the-icons">
                                            <i class="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
        
        
                </div>
            </div>
        </div>
    </section>
    <!-- END SECTION RECENTLY PROPERTIES -->
</template>
