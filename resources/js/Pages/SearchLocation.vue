<script setup>
    import { Head,Link,useForm } from "@inertiajs/inertia-vue3"
    import GuestLayout from '@/Layouts/GuestLayout.vue'
    import SearchPagination from "@/Components/SearchPagination.vue"
         
    import { onMounted,onUnmounted,ref } from 'vue'


    defineProps({

        props: Object,

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

    let site_url = location.hostname
    let full_site_url = location.hostname + location.pathname


    
    

    



    onMounted(() => {

        $('body').addClass('inner-pages st-1 agents hp-6 full hd-white')

        $(".dropdown-filter").on('click', function() {

            $(".explore__form-checkbox-list").toggleClass("filter-block");

        });

        
        
    

    })

    onUnmounted(() => $('body').removeClass('inner-pages st-1 agents hp-6 full hd-white'))

</script>

<template>
    
    <Head v-if="props.data.length > 0">
        <title v-if="stat">Houses, Flats, Lands and real estate in {{ props.data[0].state }}, Nigeria ({{ stat.statcount }} available)</title>
        <title v-else>Houses, Flats, Lands and real estate in {{ props.data[0].state }}, Nigeria</title>
        <meta name="description" :content="`Real Estate for ${props.data[0].state} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`" />
        <meta property="og:url" :content="`https://${full_site_url}`" />
        <meta property="og:image" :content="`https://${site_url}/photos/${props.data[0].image.image_name}`" />
        <meta property="og:title" :content="`Houses, Flats, Lands and real estate in ${props.data[0].state}, Nigeria`" />
        <meta property="og:type" content="website" />
        <meta property="og:description" :content="`Real Estate in ${props.data[0].state}, Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`" />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" :content="`https://${site_url}`">
        <meta name="twitter:creator" :content="`https://${site_url}`">
        <meta name="twitter:image" :content="`https://${site_url}/photos/${props.data[0].image.image_name}`" />
        <meta name="twitter:title" :content="`Houses, Flats, Lands and real estate in ${props.data[0].state}, Nigeria`" />
        <meta name="twitter:description" :content="`Real Estate in ${props.data[0].state}, Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`">
    </Head>
    <GuestLayout>

    <!-- START SECTION PROPERTIES LISTING -->
        <section class="properties-list featured portfolio blog">
            <div class="container">
                <section class="headings-2 pt-0 pb-0">
                    <div class="pro-wrapper">
                        <div class="detail-wrapper-body">
                            <div class="listing-title-bar">
                                <div class="text-heading text-left">
                                    <p><Link :href="route('home')">Home </Link> &nbsp;/&nbsp; <span>Listings</span></p>
                                </div>
                                <h4 class="mb-3 mt-3" id="p-title"></h4>
                            </div>
                        </div>
                    </div>
                </section>
    
                
                <section class="headings-2 pt-0">
                    <div class="pro-wrapper">
                        <div class="detail-wrapper-body">
                            <div class="listing-title-bar">
                                <div class="text-heading text-left">
                                    <p class="font-weight-bold mb-0 mt-3">{{ props.to }} of  {{ props.total }} results</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
               

                
                <!-- Block heading end -->
                <div class="row featured portfolio-items">
                    <div v-for="prop in props.data" :key="prop.id" class="item col-lg-4 col-md-6 col-xs-12 landscapes sale">
                        <div class="project-single" data-aos="fade-up">
                            <Link :href="route('propertyDetails',resolveLink(prop))">
                                <div class="project-inner project-head">
                                    <div class="project-bottom">
                                        <h4><Link :href="route('propertyDetails',resolveLink(prop))">View Property</Link><span class="category">Real Estate</span></h4>
                                    </div>
                                    <div class="homes">
                                        <!-- homes img -->
                                        <Link :href="route('propertyDetails',resolveLink(prop))" class="homes-img">
                                            <div class="homes-tag button alt featured">Featured</div>
                                            <div class="homes-tag button alt sale">For {{ prop.category }}</div>
                                            <div class="homes-price">{{ prop.type }}</div>
                                            <img v-if="prop.image" :src="`/photos/${prop.image.image_name}`" alt="home-1" class="img-responsive">
                                        </Link>
                                    </div>
                                    <div class="button-effect">
                                        <Link :href="route('propertyDetails',resolveLink(prop))" class="btn"><i class="fa fa-link"></i></Link>
                                        <a v-if="prop.video" :href="prop.video.replace(')','https://').replaceAll('(','.')" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                                        <Link :href="route('propertyDetails',resolveLink(prop))" class="img-poppu btn"><i class="fa fa-photo"></i></Link>
                                    </div>
                                </div>
                            </Link>
                            <!-- homes content -->
                            <div class="homes-content">
                                <!-- homes address -->
                                <h3 class="truncate"><Link :href="route('propertyDetails',resolveLink(prop))">{{ prop.title }}</Link></h3>
                                <p class="homes-address mb-3 truncate">
                                   <Link :href="route('propertyDetails',resolveLink(prop))">
                                        <i class="fa fa-map-marker"></i><span>{{ prop.location }}</span>
                                    </Link>
                                </p>
                                <!-- homes List -->
                                <ul class="homes-list clearfix pb-3">
                                    <li class="the-icons">
                                        <i class="flaticon-bed mr-2" aria-hidden="true"></i>
                                        <span>{{ prop.bedroom }} Bedrooms</span>
                                    </li>
                                    <li class="the-icons">
                                        <i class="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                        <span>{{ prop.bathroom }} Bathrooms</span>
                                    </li>
                                    <li class="the-icons" v-if="prop.area">
                                        <i class="flaticon-square mr-2" aria-hidden="true"></i>
                                        <span>{{ prop.area }}/{{ prop.unit }}</span>
                                    </li>
                                    <li class="the-icons">
                                        <i class="flaticon-car mr-2" aria-hidden="true"></i>
                                        <span>{{ prop.parking }} Cars</span>
                                    </li>
                                </ul>
                                <!-- Price -->
                                <div  v-if="$page.props.auth.user" class="price-properties">
                                    <h3 class="title mt-3">
                                        <Link :href="route('propertyDetails',resolveLink(prop))">{{ prop.amount }}</Link>
                                    </h3>
                                    <div class="compare">
                                        <a href="#" title="Compare">
                                            <i class="fas fa-exchange-alt"></i>
                                        </a>
                                        <a href="#" title="Share">
                                            <i class="fas fa-share-alt"></i>
                                        </a>
                                        <Link v-if="prop.bookmarks.length > 0" preserve-scroll :href="route('deleteBookmark',prop.bookmarks[0].id)" title="Favorites">
                                        <i class="fa fa-heart"></i>
                                        </Link>
                                        <Link v-else preserve-scroll :href="route('addBookmark',prop.id)" title="Favorites">
                                            <i class="flaticon-heart"></i>
                                        </Link>
                                    </div>
                                </div>
                                 <div  v-else class="price-properties">
                                    <h3 class="title mt-3">
                                        <Link :href="route('propertyDetails',resolveLink(prop))">{{ prop.amount }}</Link>
                                    </h3>
                                    <div class="compare">
                                        <a href="#" title="Compare">
                                            <i class="fas fa-exchange-alt"></i>
                                        </a>
                                        <a href="#" title="Share">
                                            <i class="fas fa-share-alt"></i>
                                        </a>
                                        <Link preserve-scroll :href="route('addBookmark',prop.id)" title="Favorites">
                                            <i class="flaticon-heart"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div class="footer">
                                    <Link :href="route('agentDetails',prop.user.id)">
                                        <i class="fa fa-user"></i> {{ prop.user.name }}
                                    </Link>
                                    <span><i class="fa fa-calendar"></i> {{ prop.created_at_diff }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <SearchPagination :paginations="props.links" />
            </div>
        </section>
        <!-- END SECTION PROPERTIES LISTING -->

    


    </GuestLayout>
</template>
<style scoped>
.sale{

    white-space: nowrap;
}

.curved{

    border-radius: 30px;
}
</style>