<script setup>
import { Head,useForm } from '@inertiajs/inertia-vue3';
import DashboardLayout from "@/Layouts/DashboardLayout.vue"
import DashboardFooter from '@/Components/Dashboard/DashboardFooter.vue'
import { onMounted } from 'vue'
import DashboardPagination from '@/Components/Dashboard/DashboardPagination.vue';

defineProps({

    props : Object
})

const form = useForm({
        id: null,
})

const deleteAlert = (event) => {

    let id = event.target.id

    form.id = id

    form.delete(route('deleteAlert',id))

    event.target.setAttribute('disabled','')

}


onMounted(() => {

    $(".header-user-name").on("click", function() {
        $(".header-user-menu ul").toggleClass("hu-menu-vis");
        $(this).toggleClass("hu-menu-visdec");
    });



})





</script>
<template>
    <Head title="My Property Alerts" />
    <DashboardLayout>
        <div class="dashborad-box">
            <h4 class="title">Property Alerts!</h4>
            <Link :href="route('createAlert')">
                <button class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Create Alert!</button>
            </Link>
            <div class="row">

                <div v-for="prop in props.data" :key="prop.id" class="col-lg-3 col-md-3 shadow rounded mt-4 offset-md-1 offset-lg-1">
                    <table class="table ">

                        <tr>
                            <td data-label="Column 1">Category</td>
                            <td data-label="Column 2">For {{ prop.category }}</td>
                        </tr>

                        <tr>
                            <td data-label="Column 1">Type</td>
                            <td data-label="Column 2">{{ prop.type }}</td>
                        </tr>
                        <tr>
                            <td data-label="Column 1">Price</td>
                            <td data-label="Column 2">{{ prop.currency.replace('NGN','₦').replace('USD','$') }}{{ prop.price.toLocaleString() }}</td>
                        </tr>
                        <tr v-if="prop.bedroom">
                            <td data-label="Column 1">Bedrooms</td>
                            <td data-label="Column 2">{{ prop.bedroom }}</td>
                        </tr>
                        <tr v-if="prop.bathroom">
                            <td data-label="Column 1">Bathrooms</td>
                            <td data-label="Column 2">{{ prop.bathroom }}</td>
                        </tr>
                        <tr v-if="prop.area">
                            <td data-label="Column 1">Area</td>
                            <td data-label="Column 2">{{ prop.area }} {{ prop.unit }}</td>
                        </tr>
                        <tr>
                            <td data-label="Column 1">Date</td>
                            <td data-label="Column 2">{{ prop.created_at_diff }}</td>
                        </tr>
                        <tr>
                            <td data-label="Column 1">Location</td>
                            <td data-label="Column 2">{{ prop.state }}</td>
                        </tr>
                    </table>
                    <!--end of table-->
                    
                    <div class="d-flex flex-row justify-content-center p-4 f-20">
                        <Link :href="route('editAlert',[prop.id])"><i class="fas fa-pencil-alt"></i></Link>
                        <a :id="prop.id" :onclick="deleteAlert"  class="ml-5"><i :id="prop.id" class="fas fa-trash"></i></a>
                        <Link :href="route('alertDetails',[prop.id])" class="ml-5"><i class="fas fa-eye"></i></Link>
                    </div>
                        
                    
                </div>


                
        
            </div>

                
        </div>
        <!--pagination starts-->
        <div class="justify-content-center row">
            <DashboardPagination :paginations="props.links" />
        </div>
    </DashboardLayout>
</template> 

    

