<script setup>
 import {onMounted} from 'vue'


    onMounted(()=>{

        let len = document.querySelectorAll('.team-block').length

        let slide_to_show

        if(len < 4){

            slide_to_show = len
        
        }else{

            slide_to_show = 4
        }




       $('.team-all').slick({
            infinite: false,
            slidesToShow: slide_to_show,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 1292,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false
                }
            }, {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }]
        });

    })

    defineProps({
        
        props: Object
    })
    
</script>
<template>
    <!-- START SECTION AGENTS -->
    <section class="team bg-white-3">
        <div class="container-fluid">
            <div class="section-title col-md-5">
                <h3>Meet Our</h3>
                <h2>Agents</h2>
            </div>
            <div class="row team-all">
                <!--Team Block-->
                <div v-for="prop in props.data" :key="prop.id" class="team-block col-sm-6 col-md-4 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="150">
                    <div class="inner-box team-details">
                        <div class="image team-head">
                            <Link :href="route('agentDetails',prop.id)"><img :src="`/photos/${prop.photo}`" alt="" /></Link>
                            <div class="team-hover">
                                <ul class="team-social">
                                    <li><a :href="prop.facebook" class="facebook"><i class="fa fa-facebook"></i></a></li>
                                    <li><a :href="prop.twitter" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                    <li><a :href="prop.instagram" class="instagram"><i class="fa fa-instagram"></i></a></li>
                                    <li><a :href="prop.youtube" class="linkedin"><i class="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="lower-box">
                            <h3><Link :href="route('agentDetails',prop.id)">{{ prop.name }}</Link></h3>
                            <div class="designation">Real Estate Agent</div>
                        </div>
                    </div>
                </div>
                
                
                
                
                
            </div>
        </div>
    </section>
    <!-- END SECTION AGENTS -->
</template>
