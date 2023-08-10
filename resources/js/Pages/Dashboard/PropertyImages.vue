<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import DashboardLayout from "@/Layouts/DashboardLayout.vue"
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
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> Click or Drop Images Here To Uplod",
        acceptedFiles: ".jpeg,.png,.gif,.JPEG,.Jpeg,.jpg,.PNG,.GIF",
        previewsContainer: document.querySelector('.dropzone'),
        maxFiles: 20,

    });

   
})

onUnmounted(() => {
    $('body').removeClass('inner-pages maxw1600 m0a dashboard-bd');
    
})





</script>
<template>
    <Head title="Property Images" />
    <DashboardLayout :props="props">

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
        
    </DashboardLayout>
<!-- END FOOTER -->
</template>

