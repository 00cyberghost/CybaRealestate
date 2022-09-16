<script setup>
    import { Head,Link } from "@inertiajs/inertia-vue3"
    import Header from "@/Components/Header.vue"
    import Pagination from "@/Components/Pagination.vue"
    import Footer from "@/Components/Footer.vue"
         
    import { onMounted } from 'vue'

    onMounted(() => {

        $(".dropdown-filter").on('click', function() {

        $(".explore__form-checkbox-list").toggleClass("filter-block");

        });

        jQuery(function () {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });
    

    })

</script>

<template>
    <Header />

    <!-- START SECTION PROPERTIES LISTING -->
    <section class="properties-list featured portfolio blog agents">
        <div class="container">
            <section class="headings-2 pt-0 pb-0">
                <div class="pro-wrapper">
                    <div class="detail-wrapper-body">
                        <div class="listing-title-bar">
                            <div class="text-heading text-left">
                                <p><a href="index.html">Home </a> &nbsp;/&nbsp; <span>Listings</span></p>
                            </div>
                            <h3>Grid View</h3>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="headings-2 pt-0 inner-pages st-1">
                <div class="pro-wrapper">
                    <div class="detail-wrapper-body">
                        <div class="listing-title-bar">
                            <div class="text-heading text-left">
                                <p class="font-weight-bold mb-0 mt-3">9 Search results</p>
                            </div>
                        </div>
                    </div>
                    <div class="cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center">
                        <div class="input-group border rounded input-group-lg w-auto mr-4">
                            <label class="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" for="inputGroupSelect01"><i class="fas fa-align-left fs-16 pr-2"></i>Sortby:</label>
                            <select class="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3" id="inputGroupSelect01" name="sortby">
                                <option selected>Top Selling</option>
                                <option value="1">Most Viewed</option>
                                <option value="2">Price(low to high)</option>
                                <option value="3">Price(high to low)</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
            </section>
            <!-- Block heading end -->
            <div class="row featured portfolio-items">
               
                <div class="item col-lg-4 col-md-6 col-xs-12 landscapes sale">
                    <div class="project-single" data-aos="fade-up">
                        <div class="project-inner project-head">
                            <div class="project-bottom">
                                <h4><Link :href="route('propertyDetails')">View Property</Link><span class="category">Real Estate</span></h4>
                            </div>
                            <div class="homes">
                                <!-- homes img -->
                                <Link :href="route('propertyDetails')" class="homes-img">
                                    <div class="homes-tag button alt featured">Featured</div>
                                    <div class="homes-tag button alt sale">For Sale</div>
                                    <div class="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-1.jpg" alt="home-1" class="img-responsive">
                                </Link>
                            </div>
                            <div class="button-effect">
                                <Link :href="route('propertyDetails')" class="btn"><i class="fa fa-link"></i></Link>
                                <a target="_blank" href="https://www.youtube.com/watch?v=2xHQqYRcrx4" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
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
                            <ul class="homes-list clearfix pb-3">
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
                            <!-- Price -->
                            <div class="price-properties">
                                <h3 class="title mt-3">
                                    <Link :href="route('propertyDetails')">$ 230,000</Link>
                            </h3>
                                <div class="compare">
                                    <a href="#" title="Compare">
                                        <i class="fas fa-exchange-alt"></i>
                                    </a>
                                    <a href="#" title="Share">
                                        <i class="fas fa-share-alt"></i>
                                    </a>
                                    <a href="#" title="Favorites">
                                        <i class="fa fa-heart-o"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="footer">
                                <Link :href="route('agentDetails')">
                                    <i class="fa fa-user"></i> Jhon Doe
                                </Link>
                                <span>
                            <i class="fa fa-calendar"></i> 2 months ago
                        </span>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
    <!-- END SECTION PROPERTIES LISTING -->

    <Pagination />


    <Footer />
</template>