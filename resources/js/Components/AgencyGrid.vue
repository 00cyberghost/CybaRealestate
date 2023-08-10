<script setup>
 import {onMounted} from 'vue'

 defineProps({
        
    props: Object
})
 
 onMounted(()=> {

    
    $('.style2').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoWidth: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 2,
                margin: 20
            },
            400: {
                items: 2,
                margin: 20
            },
            500: {
                items: 3,
                margin: 20
            },
            768: {
                items: 4,
                margin: 20
            },
            992: {
                items: 5,
                margin: 20
            },
            1000: {
                items: 6,
                margin: 20
            }
        }
    });


 })

    
</script>
<template>
   <!-- STAR SECTION PARTNERS -->
   <section class="partners bg-white-3">
        <div class="container-fluid">
            <div class="section-title">
                <h2><span>Our </span>Partners</h2>
                <h3>Agencies</h3>
            </div>
            <div class="owl-carousel style2">
                <div v-for="prop in props.data" :key="prop.id" class="owl-item"><Link :href="route('agencyDetails',prop.id)"><img :src="`/photos/${prop.photo}`" alt=""></Link></div>
            </div>
        </div>
    </section>
    <!-- END SECTION PARTNERS -->
</template>
