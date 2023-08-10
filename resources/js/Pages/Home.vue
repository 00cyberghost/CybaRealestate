<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue'
import SearchForm from '@/Components/SearchForm.vue'
import RecentProperties from '@/Components/RecentProperties.vue'
import PopularPlaces from '@/Components/PopularPlaces.vue'
import AgencyGrid from '@/Components/AgencyGrid.vue'
import AgentGrid from '@/Components/AgentGrid.vue'
import { onMounted,onUnmounted } from 'vue'

defineProps({
    
    recentProperties: Object,

    agents: Object,

    agencies: Object

})

let site_url = location.hostname
let loc = location.hostname + location.pathname

onMounted(() => {

    $('body').addClass('homepage-9 hp-6 homepage-1 mh');
   

    // $('.slick-lancers').slick({
    //     infinite: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: true,
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
    // });

    
})

//when the component is unmounted
onUnmounted(() => {
    //remove the classes that was added to the body tag during component mounting
    $('body').removeClass('homepage-9 hp-6 homepage-1 mh');
})


</script>
<template>
    <Head>
        <title>Houses, Flats, Lands and real estate properties for rent, sale and shortlets in nigeria</title>
        <meta name="description" :content="`Houses, Flats, Lands and real estate properties for rent, sale and shortlets in nigeria`" />
        <meta property="og:url" :content="`https://${loc}`" />
        <meta property="og:image" :content="`https://${site_url}/images/logo.svg`" />
        <meta property="og:title" :content="`Houses, Flats, Lands and real estate in Nigeria`" />
        <meta property="og:type" content="website" />
        <meta property="og:description" :content="`Real Estate in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`" />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" :content="`https://${site_url}`">
        <meta name="twitter:creator" :content="`https://${site_url}`">
        <meta name="twitter:image" :content="`https://${site_url}/images/logo.png`" />
        <meta name="twitter:title" :content="`Houses, Flats, Lands and real estate in Nigeria`" />
        <meta name="twitter:description" :content="`Real Estate in Nigeria - Flats, Houses, Land, Commercial Property,Event halls, hotels and apartments`">
    </Head>
    <GuestLayout>
        <SearchForm />
        <RecentProperties :props="recentProperties" />
        <PopularPlaces></PopularPlaces>
        <AgencyGrid :props="agencies" />
        <AgentGrid :props="agents" />
    </GuestLayout>
</template>

    

