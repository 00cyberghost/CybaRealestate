<script setup>
import Header from "@/Components/Header.vue"
import Footer from "@/Components/Footer.vue"

let isApp = localStorage.getItem('isApp')

//launch mobile nav bar
const launchMobileNav = () => document.getElementById('offcanvasNavbar').classList.remove('d-none')

</script>
<template>
    <!-- page headaer -->
    <Header />

    
    <!-- injected content goes here -->
    <slot />

    <!-- Page footer -->
    <Footer />

</template>
<style scoped>
@media screen and (max-width: 1024px){

    .appHeader{
        width: 100% !important;
        min-width: 100% !important;
        background: var(--BGCOLOR);
        color: #fff !important;
        min-height: 8vh !important;
        max-height: 8vh !important;
        height: 8vh !important;
        position: fixed !important;
        top: 0 !important;
        z-index: 9999999999999999999999999 !important;
    }

    .appHeader div.row{
        padding-top: 1.8vh;
    }

    .appHeader .back{
        padding-left: 8vh !important;
    }

    .appHeader i{
        font-size: 5vh !important;
    }

    .appFooter{
        width: 100% !important;
        min-width: 100% !important;
        background: #fff;
        min-height: 10vh !important;
        max-height: 10vh !important;
        height: 10vh !important;
        position: fixed !important;
        bottom: 0 !important;
        z-index: 9999999999999999999999999 !important;
        color: var(--BGCOLOR);
    }

    .appFooter .col-3{
        text-align: center;
        font-size: max(4vw,15px);
        padding: 5px;
        padding-top: 2vh;
    }

    .appFooter .col-3 span{
        font-size: 12px;
    }

    .appFooter a:hover,a:focus,a:active{
        background-color: none !important;
        background: none !important;
        color: none !important;
    }

    .appFooter .active{
        background-color: var(--BGCOLOR) !important;
        background: var(--BGCOLOR) !important;
        color: #fff !important;
    }
    
}
</style>