<script setup>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import GuestLayout from '@/Layouts/GuestLayout.vue'
    import Review from '@/Components/Review.vue'
    import SideBar from '@/Components/SideBar.vue'
    import PropertyMap from '@/Components/PropertyMap.vue'
    import { onMounted,onUnmounted } from 'vue'

    defineProps({
        props: Object
    })



    
    onMounted(() => {

        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('inner-pages sin-1 homepage-4 hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');

        $(document).ready(function() {
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

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('inner-pages sin-1 homepage-4 hd-white');
    })
    
    
    </script>
    <template>
        
        <GuestLayout>


         <!-- START SECTION PROPERTIES LISTING -->
         <section class="single-proper blog details" v-for="prop in props" :key="prop.id">
            <Head :title="prop.bedroom + ' bedroom ' + prop.bathroom + ' bathroom ' + prop.type + ' for ' + prop.category + ' in ' + prop.location" />
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 blog-pots">
                        
                        <div class="single homes-content details mb-30">
                            <!-- title -->
                            <h5 class="mb-4">Property Details</h5>
                            <ul class="homes-list clearfix">
                                <li>
                                    <span class="font-weight-bold mr-1">Property Category:</span>
                                    <span class="det">For {{ prop.category }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Property Type:</span>
                                    <span class="det">{{ prop.type }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Property Price:</span>
                                    <span class="det">₦{{ prop.price.toLocaleString() }}</span>
                                </li>
                                
                                <li v-if="prop.bedroom">
                                    <span class="font-weight-bold mr-1">No Of Bedrooms:</span>
                                    <span class="det">{{ prop.bedroom }}</span>
                                </li>
                                <li v-if="prop.bathroom">
                                    <span class="font-weight-bold mr-1">No Of Bath:</span>
                                    <span class="det">{{ prop.bathroom }}</span>
                                </li>
                                <li v-if="prop.parking">
                                    <span class="font-weight-bold mr-1">Parking Space:</span>
                                    <span class="det">{{ prop.parking }}</span>
                                </li>
                                <li v-if="prop.area">
                                    <span class="font-weight-bold mr-1">Area:</span>
                                    <span class="det">{{ prop.area }} {{ prop.unit }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">State:</span>
                                    <span class="det">{{ prop.state }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Local Government:</span>
                                    <span class="det">{{ prop.local_government }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Locality:</span>
                                    <span class="det">{{ prop.locality }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Address:</span>
                                    <span class="det">{{ prop.locality }},{{ prop.local_government }},{{ prop.state }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">created:</span>
                                    <span class="det">{{ prop.created_at_diff }}</span>
                                </li>

                                <li>
                                    <span class="font-weight-bold mr-1">Updated:</span>
                                    <span class="det">{{ prop.updated_at_diff }}</span>
                                </li>
                            </ul>
                            
                        </div>

                        <div class="row" v-if="prop.description">
                            <div class="col-md-12">
                                
                                <div class="blog-info details mb-30">
                                    <h5 class="mb-4">Description</h5>
                                    <p class="mb-3">{{ prop.description }}</p>
                                </div>
                            </div>
                        </div>
                        
                        


                        <!-- map-->
                        <div class="property-location map d-none">
                            <h5>Location</h5>
                            <div class="divider-fade"></div>
                            <div id="map-contact" class="contact-map"></div>
                        </div>
                        <!-- map end-->

                    </div>
                    <aside class="col-lg-4 col-md-12 car">
                        <!-- SIDEBAR BEGIN-->
                        <SideBar />
                        <!--SIDEBAR END-->
                    </aside>
                </div>
                
            </div>
        </section>
        <!-- END SECTION PROPERTIES LISTING -->


        
        </GuestLayout>
    </template>