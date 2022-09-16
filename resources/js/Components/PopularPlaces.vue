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
                <div class="col-md-12">
                </div>
                
                
                
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                    <!-- Image Box -->
                    <Link :href="route('searchResult')" class="img-box hover-effect no-mb x3">
                        <img src="images/popular-places/15.jpg" class="img-fluid w100" alt="">
                        <!-- Badge -->
                        <div class="listing-badges">
                            <span class="featured">Featured</span>
                        </div>
                        <div class="img-box-content visible">
                            <h4>Miami</h4>
                            <span>507 Properties</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    <!-- END SECTION POPULAR PLACES -->
</template>
