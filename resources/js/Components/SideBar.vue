<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useForm } from '@inertiajs/inertia-vue3'

let props =  defineProps({
    user: Object,
    category: String
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

let processing = ref(false);


const properties = ref([])

const currentUrl = `https://${location.hostname}${location.pathname}`

axios.get(`/sidebar/${props.category}`)
.then((res) => {

    properties.value = res.data

})
.catch((error)=> console.log(error))
.finally(() => console.log('success'))

    const form = useForm({
        user_id: '',
        name: '',
        phone: '',
        email: '',
        subject: ''
        
    });


    const mailAgent = () => {
        form.user_id = props.user.id
        form.name = document.getElementById('name').value
        form.phone = document.getElementById('phone').value
        form.email = document.getElementById('email').value
        form.subject = document.getElementById('subject').value

        form.post(route('mailAgent'),{
            onStart: () => {

                document.getElementById('submit-but').value = 'Sending>>>'

                processing.value = true
            } ,
            
            onFinish: () => {

                document.getElementById('submit-but').value = 'Sent!!!'

                processing.value = false
            }
        })

        
    }
  
onMounted(() => {

    

    // $('.slick-lancers').each(function() {
    //     var slider = $(this);
    //     $(this).slick({
    //         infinite: true,
    //         dots: false,
    //         arrows: true,
    //         centerMode: true,
    //         centerPadding: '0'
    //     });

    //     $(this).closest('.slick-slider-area').find('.slick-prev').on("click", function() {
    //         slider.slick('slickPrev');
    //     });
    //     $(this).closest('.slick-slider-area').find('.slick-next').on("click", function() {
    //         slider.slick('slickNext');
    //     });
    // });

})


    

</script>

<template>
   <div class="single widget">
        
        <!-- end author-verified-badge -->
        <div class="sidebar">
            <div v-if="user" class="widget-boxed mt-33 mt-5" >
                <div class="widget-boxed-header">
                    <h4>Agent Information</h4>
                </div>
                <div class="widget-boxed-body">
                    <div class="sidebar-widget author-widget2">
                        <div class="author-box clearfix">
                            <img :src="`/photos/${props.user.photo}`" alt="author-image" class="author__img">
                            <h6 class="author__title">{{ props.user.name }}</h6>
                            <p class="author__meta">Agent of Property</p>
                        </div>
                        <ul class="author__contact">
                            <li v-if="props.user.state"><address><span class="la la-map-marker"><i class="fa fa-map-marker"></i></span>{{ props.user.local_government }}, {{ props.user.state }}</address></li>
                            <li><a :href="`tel:${props.user.phone}`"><span class="la la-phone"><i class="fa fa-phone" aria-hidden="true"></i></span>{{ props.user.phone.slice(0,6) }}...</a></li>
                            <li><a target="_blank" :href="`whatsapp://send?phone=+234${props.user.whatsapp}&text=hello i am interested in this property ${currentUrl}`"><span class="la la-whatsapp"><i class="fa fa-whatsapp" aria-hidden="true"></i></span>{{ props.user.whatsapp.slice(0,6) }}...</a></li>
                            <li><span class="la la-envelope-o"><i class="fa fa-envelope" aria-hidden="true"></i></span><a href="#">{{ props.user.email }}</a></li>
                        </ul>
                        <div class="agent-contact-form-sidebar">
                            <h4>Request Inquiry</h4>
                            <form v-if="$page.props.auth.user" name="contact_form" @submit.prevent="mailAgent">
                            <input disabled type="text" id="name" :value="$page.props.auth.user.name" name="full_name" placeholder="Full Name" required />
                            <input disabled type="number" id="phone" :value="$page.props.auth.user.phone" name="phone_number" placeholder="Phone Number" required />
                            <input disabled type="email" id="email" :value="$page.props.auth.user.email" name="email_address" placeholder="Email Address" required />
                            <textarea placeholder="Message" id="subject" name="message" required></textarea>
                            <input type="submit" id="submit-but" name="sendmessage" class="multiple-send-message" value="Submit Request" />
                            </form>

                            <form v-else name="contact_form" @submit.prevent="mailAgent">
                            <input type="text" id="name" name="full_name" placeholder="Full Name" required />
                            <input type="number" id="phone" name="phone_number" placeholder="Phone Number" required />
                            <input type="email" id="email" name="email_address" placeholder="Email Address" required />
                            <textarea placeholder="Message" id="subject" name="message" required></textarea>
                            <input type="submit" id="submit-but" name="sendmessage"  value="Submit Request" />
                            </form>


                        </div>
                    </div>
                </div>
            </div>
            <div class="main-search-field-2">
                <div class="widget-boxed mt-5 d-none">
                    <div class="widget-boxed-header mb-5">
                        <h4>Feature Properties</h4>
                    </div>
                    <div class="widget-boxed-body">
                        <div class="slick-lancers">
                            
                            <div class="agents-grid mr-0">
                                <div class="listing-item compact">
                                    <a href="properties-details.html" class="listing-img-container">
                                        <div class="listing-badges">
                                            <span class="featured">$ 230,000</span>
                                            <span>For Sale</span>
                                        </div>
                                        <div class="listing-img-content">
                                            <span class="listing-compact-title">House Luxury <i>New York</i></span>
                                            <ul class="listing-hidden-content">
                                                <li>Area <span>720 sq ft</span></li>
                                                <li>Rooms <span>6</span></li>
                                                <li>Beds <span>2</span></li>
                                                <li>Baths <span>3</span></li>
                                            </ul>
                                        </div>
                                        <img src="/images/feature-properties/fp-1.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="widget-boxed mt-5" v-if="properties">
                    <div class="widget-boxed-header">
                        <h4>Related Properties</h4>
                    </div>
                    <div class="widget-boxed-body" v-for="property in properties.data" :key="property.id">
                        <div class="recent-post">

                            <div class="recent-main">
                                <div class="recent-img">
                                    <Link :href="route('propertyDetails',resolveLink(property))"><img v-if="property.image" :src="`/photos/${property.image.image_name}`" alt="" class="rounded-md"></Link>
                                </div>
                                <div class="info-img">
                                    <h6><Link :href="route('propertyDetails',resolveLink(property))">{{ property.title.slice(0,40) + '...'}}</Link></h6>
                                    <small>{{ property.location.substring(0,38) + '..' }}</small>
                                    <div>{{ property.amount }}</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


                <!-- Start: Specials offer -->
                <div class="widget-boxed popular mt-5 d-none">
                    <div class="widget-boxed-header">
                        <h4>Specials of the day</h4>
                    </div>
                    <div class="widget-boxed-body">
                        <div class="banner"><img src="/images/single-property/banner.jpg" alt=""></div>
                    </div>
                </div>
                <!-- End: Specials offer -->
                <div class="widget-boxed popular mt-5 d-none">
                    <div class="widget-boxed-header">
                        <h4>Popular Tags</h4>
                    </div>
                    <div class="widget-boxed-body">
                        <div class="recent-post">
                            <div class="tags">
                                <span><a href="#" class="btn btn-outline-primary">Houses</a></span>
                                <span><a href="#" class="btn btn-outline-primary">Real Home</a></span>
                            </div>
                            <div class="tags">
                                <span><a href="#" class="btn btn-outline-primary">Baths</a></span>
                                <span><a href="#" class="btn btn-outline-primary">Beds</a></span>
                            </div>
                            <div class="tags">
                                <span><a href="#" class="btn btn-outline-primary">Garages</a></span>
                                <span><a href="#" class="btn btn-outline-primary">Family</a></span>
                            </div>
                            <div class="tags">
                                <span><a href="#" class="btn btn-outline-primary">Real Estates</a></span>
                                <span><a href="#" class="btn btn-outline-primary">Properties</a></span>
                            </div>
                            <div class="tags no-mb">
                                <span><a href="#" class="btn btn-outline-primary">Location</a></span>
                                <span><a href="#" class="btn btn-outline-primary">Price</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
