<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import Button from '@/Components/Button.vue'
import Pagination from '@/Components/Pagination.vue'

defineProps({

    props: Object
})

let domain_name = location.hostname


</script>
<template>
    <Head title="Property Requests" />
    <GuestLayout>

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
                    
                <div class="row row-gap-3">

                    <div  v-for="prop in props.data" :key="prop.id" class="col-lg-3 col-md-3 shadow rounded mt-1 offset-md-1 offset-lg-1">
                        <table class="table">
                            <tr>
                                <td data-label="Column 1">Type</td>
                                <td data-label="Column 2">{{ prop.type }}</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Category</td>
                                <td data-label="Column 2">For {{ prop.category }}</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Price</td>
                                <td data-label="Column 2">{{ prop.amount }}</td>
                            </tr>
                            <tr v-if="prop.bedroom > 0">
                                <td data-label="Column 1">Bedrooms</td>
                                <td data-label="Column 2">{{ prop.bedroom }}</td>
                            </tr>
                            <tr v-if="prop.bathroom > 0">
                                <td data-label="Column 1">Bathrooms</td>
                                <td data-label="Column 2">{{ prop.bathroom }}</td>
                            </tr>
                            <tr v-if="prop.area > 0">
                                <td data-label="Column 1">Area</td>
                                <td data-label="Column 2">{{ prop.area }}/{{ prop.unit }}</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Date</td>
                                <td data-label="Column 2">{{ prop.created_at_diff }}</td>
                            </tr>
                            <tr>
                                <td data-label="Column 1">Location</td>
                                <td data-label="Column 2">{{ prop.location }}</td>
                            </tr>
                        </table>
                        <!--end of table-->
                        
                        <div class="d-flex flex-row justify-between p-4 f-20">
                            <a :href="`whatsapp://send?phone=+234${prop.user.whatsapp}&text=hello i am interested in a service you provide and i got your number from ${domain_name}`" target="_blank"><button id="message" class="btn b-primary btn-sm rounded curved p-2 pl-2 pr-2"><i class="fa fa-whatsapp"></i> Message</button></a>
                            <Link :href="route('requestDetails',prop.id)"><button id="message" class="btn b-primary btn-sm rounded curved p-2 pl-2 pr-2"><i class="fa fa-eye"></i> View</button></Link>
                            <a :href="`tel:${prop.user.phone}`" target="_blank"><button id="call" class="btn b-primary btn-sm rounded curved p-2 pl-2 pr-2 "><i class="fa fa-phone"></i> Call Agent</button></a>
                        </div>
                            
                        
                    </div>


                    
            
                </div>
            </div>
        </section>
        <!-- END SECTION CONTACT US -->

        <Pagination :paginations="props.links"></Pagination>
    
    </GuestLayout>
</template>
<style scoped>
    .curved{
        
        border-radius: 30px !important;
    }

    button{

        border: none !important;
    }

    #call{

        float: right
    }

    #message{

        float: left
    }


</style>
    

