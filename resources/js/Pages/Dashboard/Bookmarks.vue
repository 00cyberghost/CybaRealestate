<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import DashboardHeader from '@/Components/Dashboard/DashboardHeader.vue'
import DashboardSidebar from '@/Components/Dashboard/DashboardSidebar.vue'
import DashboardMobilebar from '@/Components/Dashboard/DashboardMobilebar.vue'
import DashboardFooter from '@/Components/Dashboard/DashboardFooter.vue'
import DashboardPagination from '@/Components/Dashboard/DashboardPagination.vue'
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

                <div class="my-properties">
                    <table class="table-responsive">
                        <thead>
                            <tr>
                                <th class="pl-2">My Favourites</th>
                                <th class="p-0"></th>
                                <th>Date Added</th>
                                <th>Views</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td class="image myelist">
                                    <a href="single-property-1.html"><img alt="my-properties-3" src="/images/feature-properties/fp-1.jpg" class="img-fluid"></a>
                                </td>
                                <td>
                                    <div class="inner">
                                        <a href="single-property-1.html"><h2>Luxury Villa House</h2></a>
                                        <figure><i class="lni-map-marker"></i> Est St, 77 - Central Park South, NYC</figure>
                                        <ul class="starts text-left mb-0">
                                            <li class="mb-0"><i class="fa fa-star"></i>
                                            </li>
                                            <li class="mb-0"><i class="fa fa-star"></i>
                                            </li>
                                            <li class="mb-0"><i class="fa fa-star"></i>
                                            </li>
                                            <li class="mb-0"><i class="fa fa-star"></i>
                                            </li>
                                            <li class="mb-0"><i class="fa fa-star"></i>
                                            </li>
                                            <li class="ml-3">(6 Reviews)</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>08.14.2020</td>
                                <td>163</td>
                                <td class="actions">
                                    <a href="#" class="edit"><i class="lni-pencil"></i>Edit</a>
                                    <a href="#"><i class="far fa-trash-alt"></i></a>
                                </td>
                            </tr>
                            
                            
                            
                        </tbody>
                    </table>
                    <!--Pagination-->
                    <DashboardPagination />
                    <!--Pagination--/ends-->
                </div>
                <!-- START FOOTER -->
                <DashboardFooter />
                <!--STOP FOOTER-->
            </div>
        </div>
    </div>
</section>
<!-- END SECTION DASHBOARD -->

<a data-scroll href="#wrapper" class="go-up"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
<!-- END FOOTER -->
</template>

    

