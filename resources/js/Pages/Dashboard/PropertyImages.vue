<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import DashboardHeader from '@/Components/Dashboard/DashboardHeader.vue'
import DashboardSidebar from '@/Components/Dashboard/DashboardSidebar.vue'
import DashboardMobilebar from '@/Components/Dashboard/DashboardMobilebar.vue'
import DashboardFooter from '@/Components/Dashboard/DashboardFooter.vue'
import DashboardPagination from '@/Components/Dashboard/DashboardPagination.vue'
import { onMounted,onUnmounted } from 'vue'

defineProps({

   props: Object

})



let image_destination = '/uploads'



onMounted(() => {
    

    //add some classes to the body tag. these classes are used to track page responsiveness
    $('body').addClass('inner-pages maxw1600 m0a dashboard-bd');

    $(".header-user-name").on("click", function() {
        $(".header-user-menu ul").toggleClass("hu-menu-vis");
        $(this).toggleClass("hu-menu-visdec");
    });
  

    $(".dropzone").dropzone({
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> Click here or drop files to upload",
        acceptedFiles: ".jpeg,.png,.gif,.JPEG,.Jpeg,.jpg,.PNG,.GIF",
        previewsContainer: null,

    });

   
})

onUnmounted(() => {
    $('body').removeClass('inner-pages maxw1600 m0a dashboard-bd');
    
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
                    
                    <div class="property-form-group">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="prperty-submit-button pt-5">
                                                   
                                    <Link :href="route('myProperties')" as="button">I Am Done With Pictures</Link>
                                            
                                </div>
                            </div>
                            <div class="col-md-12">
                                <form method="post" action="/dashboard/uploads" class="dropzone" enctype="multipart/form-data">
                                   <input type="hidden" :value="props.token" name="_token" id="token_id">
                                   <input type="hidden" :value="props.property_id" name="property_id" id="property_id" />
                                </form>
                            </div>
                        </div>
                    </div>
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

    

