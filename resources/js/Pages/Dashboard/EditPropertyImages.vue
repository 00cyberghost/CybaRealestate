<script setup>
import { Head,useForm } from '@inertiajs/inertia-vue3';
import DashboardLayout from "@/Layouts/DashboardLayout.vue"
import { onMounted,onUnmounted } from 'vue'

defineProps({

   props: Object

})

const form = useForm({
        id: null,
})

const clickedMe = (event) => {

    let id = event.target.id

    let name = event.target.getAttribute('data-name')

    form.id = id

    axios.delete(route('deletes',[id,name])).then(res =>{

        let result = res.data
        
        if(result.trim() == 'success') event.target.parentNode.parentNode.parentNode.remove()
        
    })
    .catch(err =>{
       
        console.error(err)

        event.target.removeAttribute('disabled')
    })
    .finally(() => {
        
        console.log('success')
    })
   
    event.target.setAttribute('disabled','')
    event.target.parentNode.querySelector('small').textContent = 'Deleting...'

    
    

    
}



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
    <Head title="Edit Property Images" />
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
                        <div class="row">
                            <div v-for="image in props.images" :key="image.id" class="col-md-3 col-6 col-sm-6 col-lg-3">
                                <img :src="`/photos/${image.image_name}`">
                                <div class="checkboxes float-left">
                                    <div class="filter-tags-wrap">
                                        <input @change="clickedMe" :id="image.id" :value="image.id" :data-name="image.image_name" type="checkbox" name="check">
                                        <label :for="image.id"><small>Delete</small></label>
                                    </div>
                                </div>
                            </div>
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
</template>

    

