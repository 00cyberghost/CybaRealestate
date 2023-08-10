<script setup>
    import { Head,Link } from "@inertiajs/inertia-vue3";
</script>
<template>
    <!-- START SECTION POPULAR PLACES -->
    <section class="popular-places home18">
        <div class="container-fluid">
            <div class="section-title">
                <h3>Popular</h3>
                <h2>Places</h2>
            </div>
            <div class="row">
                
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                    <!-- Image Box -->
                    <Link :href="'location/Lagos'" class="img-box hover-effect no-mb x3">
                        <img src="images/popular-places/lagos.webp" class="img-fluid w100" alt="">
                        <!-- Badge -->
                        <div class="listing-badges d-none">
                            <span class="featured">Featured</span>
                        </div>
                        <div class="img-box-content visible">
                            <h4>Lagos</h4>
                            <!-- <span>507 Properties</span> -->
                        </div>
                    </Link>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                    <!-- Image Box -->
                    <Link :href="'location/Abuja'" class="img-box hover-effect no-mb x3">
                        <img src="images/popular-places/abuja.jpg" class="img-fluid w100" alt="">
                        <!-- Badge -->
                        <div class="listing-badges d-none">
                            <span class="featured">Featured</span>
                        </div>
                        <div class="img-box-content visible">
                            <h4>Abuja</h4>
                            <!-- <span>507 Properties</span> -->
                        </div>
                    </Link>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                    <!-- Image Box -->
                    <Link :href="'location/Rivers'" class="img-box hover-effect no-mb x3">
                        <img src="images/popular-places/rivers.jpg" class="img-fluid w100" alt="">
                        <!-- Badge -->
                        <div class="listing-badges d-none">
                            <span class="featured">Featured</span>
                        </div>
                        <div class="img-box-content visible">
                            <h4>Rivers</h4>
                            <!-- <span>507 Properties</span> -->
                        </div>
                    </Link>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                    <!-- Image Box -->
                    <Link :href="'location/Ogun'" class="img-box hover-effect no-mb x3">
                        <img src="images/popular-places/ogun.jpg" class="img-fluid w100" alt="">
                        <!-- Badge -->
                        <div class="listing-badges d-none">
                            <span class="featured">Featured</span>
                        </div>
                        <div class="img-box-content visible">
                            <h4>Ogun</h4>
                            <!-- <span>507 Properties</span> -->
                        </div>
                    </Link>
                </div>

            </div>
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                    <!-- Image Box -->
                    <Link :href="'location/Enugu'" class="img-box hover-effect no-mb x3">
                        <img src="images/popular-places/enugu.jpg" class="img-fluid w100" alt="">
                        <!-- Badge -->
                        <div class="listing-badges d-none">
                            <span class="featured">Featured</span>
                        </div>
                        <div class="img-box-content visible">
                            <h4>Enugu</h4>
                            <!-- <span>507 Properties</span> -->
                        </div>
                    </Link>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                    <!-- Image Box -->
                    <Link :href="'location/Anambra'" class="img-box hover-effect no-mb x3">
                        <img src="images/popular-places/anambra.jpg" class="img-fluid w100" alt="">
                        <!-- Badge -->
                        <div class="listing-badges d-none">
                            <span class="featured">Featured</span>
                        </div>
                        <div class="img-box-content visible">
                            <h4>Anambra</h4>
                            <!-- <span>507 Properties</span> -->
                        </div>
                    </Link>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                    <!-- Image Box -->
                    <Link :href="'location/Imo'" class="img-box hover-effect no-mb x3">
                        <img src="images/popular-places/imo.jpg" class="img-fluid w100" alt="">
                        <!-- Badge -->
                        <div class="listing-badges d-none">
                            <span class="featured">Featured</span>
                        </div>
                        <div class="img-box-content visible">
                            <h4>Imo</h4>
                            <!-- <span>507 Properties</span> -->
                        </div>
                    </Link>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                    <!-- Image Box -->
                    <Link :href="'location/Kano'" class="img-box hover-effect no-mb x3">
                        <img src="images/popular-places/kano.jpg" class="img-fluid w100" alt="">
                        <!-- Badge -->
                        <div class="listing-badges d-none">
                            <span class="featured">Featured</span>
                        </div>
                        <div class="img-box-content visible">
                            <h4>Kano</h4>
                            <!-- <span>507 Properties</span> -->
                        </div>
                    </Link>
                </div>

                
            </div>
        </div>
    </section>
    <!-- END SECTION POPULAR PLACES -->
</template>
