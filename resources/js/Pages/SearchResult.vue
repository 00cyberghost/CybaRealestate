<script setup>
    import { Head,Link,useForm } from "@inertiajs/inertia-vue3"
    import GuestLayout from '@/Layouts/GuestLayout.vue'
    import SearchPagination from "@/Components/SearchPagination.vue"
    import { onMounted,onUnmounted,ref } from 'vue'


    defineProps({

        props: Object,

        stat: Object

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


    let processing = ref(false);

    const form = useForm({

        'category': '',
        'location': '',
        'type': '',
        'subtype': '',
        'minprice': null,
        'maxprice': null,
        'ref': null,
        'bedroom': null,
        'bathroom': null,
        'parking': null,
        'area': '',
        'param': '',
        'unit':''
    })

    const initiateSearch = (event) => {

        let val = event.target.value

        let queryString = window.location.search

        let urlParams = new URLSearchParams(queryString);

        form.category = urlParams.get('category')

        form.location = urlParams.get('location')

        form.type = urlParams.get('type')

        form.subtype = urlParams.get('subtype')

        form.minprice = urlParams.get('minprice')

        form.maxprice = urlParams.get('maxprice')

        form.ref =  urlParams.get('ref')

        form.bedroom =  urlParams.get('bedroom')

        form.bathroom =  urlParams.get('bathroom')

        form.parking =  urlParams.get('parking')

        form.area =  urlParams.get('area')

        form.unit =  urlParams.get('unit')

        form.param =  event.target.value

        form.get(route('sortSearch',val))
    }

    const currentParam = () => {

        let queryString = window.location.search

        let urlParams = new URLSearchParams(queryString)

        let result = urlParams.get('param')

        if(result == null){

            return 'recent'
      
      }else{

            return result
        }

    }

    let pageTitle = () => {

        let queryString = window.location.search

        let urlParams = new URLSearchParams(queryString)

        let category = urlParams.get('category')

        let bed = urlParams.get('bedroom')

        let type = urlParams.get('type')

        let area = urlParams.get('area')

        let unit = urlParams.get('unit')

        let locations = urlParams.get('location')

        let text

        if(type.length == 0){

            if(locations.length > 1){

                if(bed > 0){

                    text = bed + ' bedroom for ' + category + ' in ' + decodeURI(locations) 
                
                }else{
                    
                    text =  'Houses, Flats, Commercial properties and Lands for ' + category + ' in ' + decodeURI(locations) 
                }

            }else{

                if(bed > 0){

                    text = bed + ' bedroom for ' + category
                
                }else{

                    text =  'Houses, Flats, Commercial properties and Lands for ' + category
                }


            }


        }else{

            if(locations.length > 1){

                if(bed > 0){

                    text = bed + ' bedroom ' + type + ' for ' + category + ' in ' + decodeURI(locations)
                
                }else{

                    if(area > 0){

                        text = area + ' ' + unit + ' of ' + type + ' for ' + category + ' in ' + decodeURI(locations)
                    
                    }else{
                        
                        text =  type + ' for ' + category + ' in ' + decodeURI(locations)
                    }

                }

                

            }else{

                 if(bed > 0){

                    text = bed + ' bedroom ' + type + ' for ' + category
                
                }else{

                    if(area > 0){

                        text = area + ' ' + unit + ' of ' + type + ' for ' + category
                    
                    }else{
                        
                        text =  type + ' for ' + category
                    }
                }

                


            }


        }

        document.getElementById('p-title').textContent = text

    }

    let queryString = window.location.search

    let urlParams = new URLSearchParams(queryString)

    let category = urlParams.get('category')

    let locs = urlParams.get('location')

    let locations =  decodeURI(urlParams.get('location'))
    
    let bed = urlParams.get('bedroom')

    let type = urlParams.get('type')




    onMounted(() => {

        $('body').addClass('inner-pages st-1 agents hp-6 full hd-white')

        $(".dropdown-filter").on('click', function() {

            $(".explore__form-checkbox-list").toggleClass("filter-block");

        });

        

        pageTitle()
        
    

    })

    onUnmounted(() => $('body').removeClass('inner-pages st-1 agents hp-6 full hd-white'))

</script>

<template>

    <Head v-if="props.data.length > 0">
        <title v-if="stat">Houses, Flats, Lands and real estate for {{ props.data[0].category }} in my area and Nigeria ({{ stat.statcount }} available)</title>
        <title v-else>Houses, Flats, Lands and real estate in {{ props.data[0].category }} in my area and Nigeria</title>
        <meta name="description" :content="`Real Estate for ${props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`" />
        <meta property="og:url" :content="`https://${full_site_url}`" />
        <meta property="og:image" :content="`https://${site_url}/photos/${props.data[0].image.image_name}`" />
        <meta property="og:title" :content="`Houses, Flats, Lands and real estate for ${props.data[0].category} in my area and Nigeria`" />
        <meta property="og:type" content="website" />
        <meta property="og:description" :content="`Real Estate for ${props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`" />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" :content="`https://${site_url}`">
        <meta name="twitter:creator" :content="`https://${site_url}`">
        <meta name="twitter:image" :content="`https://${site_url}/photos/${props.data[0].image.image_name}`" />
        <meta name="twitter:title" :content="`Houses, Flats, Lands and real estate for ${props.data[0].category} in my area and Nigeria`" />
        <meta name="twitter:description" :content="`Real Estate for ${props.data[0].category} in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`">
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
    
                
                <section class="headings-2 pt-0" v-if="props.data.length > 0">
                    <div class="pro-wrapper">
                        <div class="detail-wrapper-body">
                            <div class="listing-title-bar">
                                <div class="text-heading text-left">
                                    <p class="font-weight-bold mb-0 mt-3">{{ props.to }} of  {{ props.total }} results</p>
                                </div>
                            </div>
                        </div>
                        <div class="cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center">
                            <div class="input-group border rounded input-group-lg w-auto mr-4">
                                <label class="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" for="inputGroupSelect01"><i class="fas fa-align-left fs-16 pr-2"></i>Sortby:</label>
                                <select @change="initiateSearch" class="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3" id="inputGroupSelect01" name="sortby">
                                    <option :selected="currentParam() == 'recent'" value="recent">Recent</option>
                                    <option :selected="currentParam() == 'views'" value="views">Most Viewed</option>
                                    <option :selected="currentParam() == 'min'"  value="min">Price(low to high)</option>
                                    <option :selected="currentParam() == 'max'" value="max">Price(high to low)</option>
                                </select>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <div class="property-location curved mb-5" v-if="type.length > 0">
                    
                    <p> 
                        <span v-if="stat"> There are {{ stat.statcount }} listings of <span v-if="bed > 0">{{ bed }} bedroom</span> {{ type }} for {{ category }} <span v-if="locations"> in {{ locations }}</span>, Nigeria. 
                        The average price of <span v-if="bed > 0">{{ bed }} bedroom</span> {{ type }} for {{ category }} <span v-if="locations">in {{ locations }}</span> is ₦{{ stat.average }}. 
                        The most expensive {{ type }} costs ₦{{ stat.max }} while the cheapest costs ₦{{ stat.min }}.
                        The {{ type }} have been listed by estate agents and agencies who can be contacted using the contact information provided for each house listing.
                        The list can be filtered by price, views and recency.</span>


                    </p>
                    
                </div>

                <div class="property-location curved mb-5" v-if="type.length == 0">
                    
                    <p> 
                        <span v-if="stat">
                        There are {{ stat.statcount }} listings <span v-if="bed > 0">of {{ bed }} bedroom</span> for {{ category }} <span v-if="locations"> in {{ locations }},</span> Nigeria.
                        The average price of listings for {{ category }} <span v-if="locations"> in {{ locations }}</span> is ₦{{ stat.average }}. 
                        The most expensive listing costs ₦{{ stat.max }} while the cheapest costs ₦{{ stat.min }}. 
                        The listings have been listed by estate agents and agencies who can be contacted using the contact information provided for each house listing.
                        The list can be filtered by price, views and recency.</span>


                    </p>
                    
                </div>
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
                                            <div class="homes-tag button alt featured d-none">Featured</div>
                                            <div id="overlay" class="homes-tag button alt sale">For {{ prop.category }}</div>
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