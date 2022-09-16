<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import DashboardHeader from '@/Components/Dashboard/DashboardHeader.vue'
import DashboardSidebar from '@/Components/Dashboard/DashboardSidebar.vue'
import DashboardMobilebar from '@/Components/Dashboard/DashboardMobilebar.vue'
import DashboardFooter from '@/Components/Dashboard/DashboardFooter.vue'
import Button from '@/Components/Button.vue'
import { onMounted } from 'vue'


onMounted(() => {

    $(".header-user-name").on("click", function() {
        $(".header-user-menu ul").toggleClass("hu-menu-vis");
        $(this).toggleClass("hu-menu-visdec");
    });



})





</script>
<template>
<Head title="Dashboard" />
<DashboardHeader />
<!-- START SECTION DASHBOARD -->
<section class="user-page section-padding pt-5">
    <div class="container-fluid">
        <div class="row">

            <!--dashboardsidebar-->
            <DashboardSidebar />
            <!--dashboardsidebar---->

            <div class="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">

                <!--MobileSidebar-->
                <DashboardMobilebar />
                <!--MobileSidebar end-->
                <div class="dashborad-box">
                    <h4 class="title">Property Requests!</h4>
                    <Link :href="route('createRequest')">
                        <Button>Create Request!</Button>
                    </Link>
                    <div class="row">

                        <div class="col-lg-3 col-md-3 shadow rounded mt-4 offset-md-1 offset-lg-1">
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
                                <a href="#">Edit</a>
                                <a class="ml-3"><i class="far fa-trash-alt"></i></a>
                            </div>
                               
                            
                        </div>


                        
                
                    </div>

                        
                </div>
              
                <!-- START FOOTER -->
                <DashboardFooter />
            </div>
        </div>
    </div>
</section>
<!-- END SECTION DASHBOARD -->

<a data-scroll href="#wrapper" class="go-up"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
<!-- END FOOTER -->
</template>

    

