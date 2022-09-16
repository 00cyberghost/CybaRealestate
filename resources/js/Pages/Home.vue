<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Header from '@/Components/Header.vue'
import SearchForm from '@/Components/SearchForm.vue'
import RecentProperties from '@/Components/RecentProperties.vue'
import PopularPlaces from '@/Components/PopularPlaces.vue'
import AgentGrid from '@/Components/AgentGrid.vue'
import Footer from '@/Components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
   

    $('.slick-lancers').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1292,
            settings: {
                slidesToShow: 2,
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

</script>
<template>
    <Head title="Dashboard" ></Head>
    <Header></Header>
    <SearchForm></SearchForm>
    <RecentProperties></RecentProperties>
    <PopularPlaces></PopularPlaces>
    <AgentGrid></AgentGrid>
    <Footer></Footer>
</template>

    

