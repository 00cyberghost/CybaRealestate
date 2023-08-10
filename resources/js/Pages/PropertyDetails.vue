<script setup>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import GuestLayout from '@/Layouts/GuestLayout.vue'
    import Seo from "@/Components/Seo.vue"
    import Review from '@/Components/Review.vue'
    import SideBar from '@/Components/SideBar.vue'
    import PropertyMap from '@/Components/PropertyMap.vue'
    import MobileCaller from '@/Components/MobileCaller.vue'
    import { onMounted,onUnmounted } from 'vue'



    defineProps({

        props: Object,
    })

    let loc = location.hostname + location.pathname



    onMounted(() => {

        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('inner-pages sin-1 homepage-4 hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');

        
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });



        //remove the class of active from all elementn with the class of 'carousel-item' that is not the first on the nodelist
        //this initiates the slider
        const initiateSlider = () => {

            let items = document.querySelectorAll('.carousel-item')

            let indicators = document.querySelectorAll('.ol')

            for (let i = 0; i < items.length; i++) {
                
                if(i !== 0) {

                    items[i].classList.remove('active')

                    indicators[i].classList.remove('active')

                }
                
            }
        }

        initiateSlider()

        const upadatePropertyView = () => {

            let id = document.getElementById('property-id').getAttribute('property-id')

            axios.put(route('updatePropertyViews',[id]))
            .catch(err => console.error(err))
        }

        upadatePropertyView()
        
        

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
         <section id="property-id" v-for="prop in props" :key="prop.id" :property-id="prop.id" class="single-proper blog details">
            <Seo :title="prop" desc="property" />
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 blog-pots">
                        <div class="row">
                            <div class="col-md-12">
                                <section class="headings-2 pt-0">
                                    <div class="pro-wrapper">
                                        <div class="detail-wrapper-body">
                                            <div class="listing-title-bar">
                                                <h3>{{ prop.title }} <span class="mrg-l-5 category-tag">For {{ prop.category }}</span></h3>
                                                <div class="mt-0">
                                                    <address class="listing-address">
                                                        <i class="fa fa-map-marker pr-2 ti-location-pin mrg-r-5"></i>{{ prop.location }}
                                                    </address>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single detail-wrapper mr-2">
                                            <div class="detail-wrapper-body">
                                                <div class="listing-title-bar">
                                                    <h4>{{ prop.amount }}</h4>
                                                    <div class="mt-0">
                                                        <a href="#listing-location" class="listing-address">
                                                            <p v-if="prop.area > 0">{{ prop.area }}/{{ prop.unit }} </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <!-- main slider carousel items -->
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li v-for="image in prop.images" :key="image.id" data-target="#carouselExampleIndicators" :data-slide-to="image.id" class="ol active"></li>
                                        
                                    </ol>
                                    <div class="carousel-inner carus curved" role="listbox">
                                        <div v-for="image in prop.images" :key="image.id" class="carousel-item active">
                                            <img class="d-block img-fluid" :src="`/photos/${image.image_name}`" alt="First slide">
                                        </div>
                                        
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                                
                                <div class="blog-info details mb-30 curved mt-5" style="max-width:100%">
                                    <h5 class="mb-4">Description</h5>
                                    <p class="mb-3 pre">{{ prop.description }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="single homes-content details mb-30 curved">
                            <!-- title -->
                            <h5 class="mb-4">Property Details</h5>
                            <ul class="homes-list clearfix">
                                <li>
                                    <span class="font-weight-bold mr-1">Property Ref:</span>
                                    <span class="det">{{ prop.ref }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Property Type:</span>
                                    <span class="det">{{ prop.type }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Property Category:</span>
                                    <span class="det">For {{ prop.category }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Property Price:</span>
                                    <span class="det">{{ prop.amount }}</span>
                                </li>
                                <li v-if="prop.bedroom > 0">
                                    <span class="font-weight-bold mr-1">Bedrooms:</span>
                                    <span class="det">{{ prop.bedroom }}</span>
                                </li>
                                <li v-if="prop.bathroom > 0">
                                    <span class="font-weight-bold mr-1">Bathrooms:</span>
                                    <span class="det">{{ prop.bathroom }}</span>
                                </li>
                                <li v-if="prop.area > 0">
                                    <span class="font-weight-bold mr-1">Area:</span>
                                    <span class="det">{{ prop.area }}/{{ prop.unit }} </span>
                                </li>
                                <li v-if="prop.parking > 0">
                                    <span class="font-weight-bold mr-1">Garages:</span>
                                    <span class="det">{{ prop.parking }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Created:</span>
                                    <span class="det">{{ prop.created_at_diff }}</span>
                                </li>
                                <li>
                                    <span class="font-weight-bold mr-1">Updated:</span>
                                    <span class="det">{{ prop.updated_at_diff }}</span>
                                </li>
                            </ul>
                            <!-- title -->
                            <h5 class="mt-5">Amenities</h5>
                            <!-- cars List -->
                            <ul class="homes-list clearfix">
                                <li v-if="prop.feature.AC">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.AC }}</span>
                                </li>

                                <li v-if="prop.feature.SW">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.SW }}</span>
                                </li>

                                <li v-if="prop.feature.WH">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.WH }}</span>
                                </li>

                                <li v-if="prop.feature.security">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.security }}</span>
                                </li>

                                <li v-if="prop.feature.gym">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.gym }}</span>
                                </li>

                                <li v-if="prop.feature.serviced">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.serviced }}</span>
                                </li>

                                <li v-if="prop.feature.furnished">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.furnished }}</span>
                                </li>

                                <li v-if="prop.feature.MQ">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.MQ }}</span>
                                </li>

                                <li v-if="prop.feature.TC">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.TC }}</span>
                                </li>

                                <li v-if="prop.feature.wifi">
                                    <i class="fa fa-check-square" aria-hidden="true"></i>
                                    <span>{{ prop.feature.wifi }}</span>
                                </li>
                                
                            </ul>
                        </div>
                        
                        
                        <div v-if="prop.video" class="property wprt-image-video w50 pro curved">
                            <h5>Property Video</h5>
                            <img alt="image" src="/images/slider/home-slider-4.jpg">
                            <a class="icon-wrap popup-video popup-youtube" style="top:57% !important;position:absolute !important;" :href="prop.video.replace(')','https://').replaceAll('(','.')">
                                <i class="fa fa-play"></i>
                            </a>
                            <div class="iq-waves">
                                <div class="waves wave-1"></div>
                                <div class="waves wave-2"></div>
                                <div class="waves wave-3"></div>
                            </div>
                        </div>


                        <!-- map-->
                        <div v-if="prop.longitude" class="property-location map curved">
                            <h5>Location</h5>
                            <div class="divider-fade"></div>
                            <div id="map-contact" class="contact-map"></div>
                        </div>
                        <!-- map end-->



                        <!-- Star Reviews -->
                        <Review :property_id="prop.id" />
                        <!-- End Reviews -->
                        
                    </div>
                    <aside class="col-lg-4 col-md-12 car curved">
                        <!-- SIDEBAR BEGIN-->
                        <SideBar :user="prop.user" :category="prop.category" />
                        <!--SIDEBAR END-->
                    </aside>
                </div>
                
            </div>
        </section>
        <!-- END SECTION PROPERTIES LISTING -->
        </GuestLayout>
        <MobileCaller :user="props[0].user" />
    </template>

<style scoped>
    h3 .category-tag{

        border:none !important
    }

    .pre{

        white-space: pre-wrap;
    }

    .carousel-inner{

        max-height:600px
    }

    .curved{
    
        border-radius: 30px !important;
    }
</style>
    
        
    
    