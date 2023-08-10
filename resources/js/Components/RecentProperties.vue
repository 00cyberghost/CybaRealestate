<script setup>
import { onMounted } from 'vue'
import Pagination from './Pagination.vue';

defineProps({
    
    props: Object

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


onMounted(() => {

    // $('.slick-lancers').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: true,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     arrows: false,
    //     adaptiveHeight: true,
    //     responsive: [{
    //         breakpoint: 1292,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             dots: true,
    //             arrows: false
    //         }
    //     }, {
    //         breakpoint: 993,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: true,
    //             arrows: false
    //         }
    //     }, {
    //         breakpoint: 769,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: true,
    //             arrows: false
    //         }
    //     }]
    // })

   
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

   

   
})

</script>

<template>
    <!-- START SECTION FEATURED PROPERTIES -->
    <section class="featured portfolio bg-white-2 rec-pro full-l">
        <div class="container-fluid">
            <div class="section-title">
                <h3>Latest</h3>
                <h2>Properties</h2>
            </div>
            
            <div class="row portfolio-items">
                <div v-for="prop in props.data" :key="prop.id" class="item col-xl-6 col-lg-12 col-md-12 col-xs-12 landscapes sale curved">
                    <div class="project-single curved curved-two" >
                        <Link :href="route('propertyDetails',resolveLink(prop))" class="homes-img">
                            <div class="project-inner project-head curved">
                                <div class="homes">
                                    <!-- homes img -->
                                    <Link :href="route('propertyDetails',resolveLink(prop))" class="homes-img">
                                        <div class="homes-tag button alt featured d-none">Featured</div>
                                        <div id="overlay" class="homes-tag button alt sale">{{ prop.category }}</div>
                                        <img v-if="prop.image" :src="`/photos/${prop.image.image_name}`" alt="home-1" class="img-responsive">
                                    </Link>
                                </div>
                                
                            </div>
                        </Link>
                        <!-- homes content -->
                        <div class="homes-content curved-two" id="homes-content">
                            <!-- homes address -->
                            <h3 class="truncate"><Link :href="route('propertyDetails',resolveLink(prop))">{{ prop.title }}</Link></h3>
                            <p class="homes-address mb-3 truncate">
                                <Link :href="route('propertyDetails',resolveLink(prop))">
                                    <i class="fa fa-map-marker"></i><span>{{ prop.location }}</span>
                                </Link>
                            </p>
                            <!-- homes List -->
                            <ul class="homes-list clearfix pb-3">
                                <li v-if="prop.bedroom" class="the-icons">
                                    <i class="flaticon-bed mr-2" aria-hidden="true"></i>
                                    <span>{{ prop.bedroom }} Bedrooms</span>
                                </li>
                                <li v-if="prop.bathroom" class="the-icons">
                                    <i class="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                    <span>{{ prop.bathroom }} Bathrooms</span>
                                </li>
                                <li v-if="prop.area" class="the-icons">
                                    <i class="flaticon-square mr-2" aria-hidden="true"></i>
                                    <span>{{ prop.area }}/{{ prop.unit }}</span>
                                </li>
                                <li v-if="prop.parking" class="the-icons">
                                    <i class="flaticon-car mr-2" aria-hidden="true"></i>
                                    <span>{{ prop.parking }} Parking</span>
                                </li>
                            </ul>
                            <div v-if="$page.props.auth.user" class="price-properties footer pt-3 pb-0">
                                <h3 class="title mt-3">
                                    <Link :href="route('propertyDetails',resolveLink(prop))">{{ prop.amount }}</Link>
                                </h3>
                                <div class="compare">
                                    <a href="#" title="Compare">
                                        <i class="flaticon-compare"></i>
                                    </a>
                                    <a href="#" title="Share">
                                        <i class="flaticon-share"></i>
                                    </a>
                                    <Link v-if="prop.bookmarks.length > 0" preserve-scroll :href="route('deleteBookmark',prop.bookmarks[0].id)" title="Favorites">
                                        <i class="fa fa-heart"></i>
                                    </Link>
                                    <Link v-else preserve-scroll :href="route('addBookmark',resolveLink(prop))" title="Favorites">
                                        <i class="flaticon-heart"></i>
                                    </Link>
                                    
                                    
                                </div>
                            </div>
                            <div v-if="!$page.props.auth.user" class="price-properties footer pt-3 pb-0">
                                <h3 class="title mt-3">
                                    <Link :href="route('propertyDetails',resolveLink(prop))">{{ prop.amount }}</Link>
                                </h3>
                                <div class="compare">
                                    <a href="#" title="Compare">
                                        <i class="flaticon-compare"></i>
                                    </a>
                                    <a href="#" title="Share">
                                        <i class="flaticon-share"></i>
                                    </a>
                                    
                                    <Link preserve-scroll :href="route('addBookmark',prop.id)" title="Favorites">
                                        <i class="flaticon-heart"></i>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                
  
            </div>
            <div class="bg-all">
                <Pagination :paginations="props.links" />
            </div>
        </div>
    </section>
    <!-- END SECTION FEATURED PROPERTIES -->
</template>
<style scoped>
section{

    position:relative;
    z-index:1
}

.curved{

    border-top-left-radius: 30px !important;

    border-bottom-left-radius: 30px !important;
}

.curved-two{

    border-top-right-radius: 30px !important;

    border-bottom-right-radius: 30px !important;
}

@media screen and (max-width: 767px) {
    .curved{

        border-top-left-radius: 0 !important;

        border-bottom-left-radius: 0 !important;
    }

    .curved-two{

        border-top-right-radius: 0 !important;

        border-bottom-right-radius: 0 !important;
    }
}


</style>
