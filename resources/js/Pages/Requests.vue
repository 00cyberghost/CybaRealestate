<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Footer from '@/Components/Footer.vue'
import Header from '@/Components/Header.vue'
import Button from '@/Components/Button.vue'
import Pagination from '@/Components/Pagination.vue';


</script>
<template>
    <Head title="Dashboard" />
    <Header />

    <section class="headings">
            <div class="text-heading text-center">
                <div class="container">
                    
                </div>
            </div>
        </section>
        <!-- END SECTION HEADINGS -->

        <!-- START SECTION CONTACT US -->
        <section class="contact-us featured portfolio home18 bg-white-3">
            <div class="container">
                    
                <div class="row">

                    <div class="col-lg-3 col-md-3 shadow rounded mt-1 offset-md-1 offset-lg-1">
                        <table class="table ">
                            <tr>
                                <td data-label="Column 1">Type</td>
                                <td data-label="Column 2">House</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Status</td>
                                <td data-label="Column 2">For Sale</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Price</td>
                                <td data-label="Column 2">$230,000</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Bedrooms</td>
                                <td data-label="Column 2">3</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Bathrooms</td>
                                <td data-label="Column 2">3</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Area</td>
                                <td data-label="Column 2">3</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Date</td>
                                <td data-label="Column 2">3</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Location</td>
                                <td data-label="Column 2">ikoyi,Lagos state</td>
                            </tr>
                        </table>
                        <!--end of table-->
                        
                        <div class="d-flex flex-row justify-content-center p-4 f-20">
                            <Button>Whatsapp</Button>
                        </div>
                            
                        
                    </div>


                    
            
                </div>
            </div>
        </section>
        <!-- END SECTION CONTACT US -->

        <Pagination></Pagination>
    
    <Footer />
</template>

    

