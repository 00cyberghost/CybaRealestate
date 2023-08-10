<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3';
import DashboardLayout from "@/Layouts/DashboardLayout.vue"
import DashboardFooter from "@/Components/Dashboard/DashboardFooter.vue"
import { onMounted,ref } from 'vue'

defineProps({
    props: Object
})

const resolveLink = (prop) => {

    let category = prop.category.replaceAll(' ','-')

    let title = prop.title.replaceAll(' ','-')

    let id = prop.id

    let cat = `for-${category}`

    let final = `${title}`

    let f = final.replaceAll('/','-')

    return [id,cat,f]
}


let processing = ref(false)

const launchConfirmationModal = (event) => {

    document.getElementById('accept').setAttribute('data-one',event.target.getAttribute('data-one'))

    $('.confirmation-modal').fadeIn()

}

const initiateDelete = (id) => {

    const form = useForm()

    form.delete(route('deletePropertyFinally',id),{

        onStart: () => processing.value = true,
        onFinish: () => processing.value = false
    })
    
}

const restoreProperty = (event) => {

    let id = event.target.getAttribute('property-id')

    const form = useForm()

    form.patch(route('restoreProperty',id),{

        onStart: () => processing.value = true,
        onFinish: () => processing.value = false
    })
}






</script>
<template>
    <Head title="Pending Properties" />
    <DashboardLayout :props="props">

        <div class="my-properties">
            <h1 class="mb-3">Properties that need approval</h1>
            <table class="table-responsive">
                <thead>
                    <tr>
                        <th class="pl-2"></th>
                        <th class="p-0"></th>
                        <th>Date Added</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-for="prop in props.data" :key="prop.id">
                    
                    <tr>
                        <td class="image myelist">
                            <Link v-if="prop.image" :href="route('propertyDetails',resolveLink(prop))"><img alt="my-properties-3" :src="`/photos/${prop.image.image_name}`" class="img-fluid"></Link>
                        </td>
                        <td>
                            <div class="inner">
                                <Link :href="route('propertyDetails',resolveLink(prop))"><h2>{{ prop.title }}</h2></Link>
                                <address><i class="lni-map-marker"></i> {{ prop.location }}</address>
                                <span class="starts text-left mb-0">
                                    <i class="fa fa-user"></i>  {{ prop.user.name }}
                                </span>
                            </div>
                        </td>
                        <td>{{ prop.created_at_diff }}</td>
                        <td class="actions">
                            <Link class="edit"><i :disabled="processing" preserve-scroll  @click.prevent="restoreProperty" :property-id="prop.id" class="fas fa-check"></i></Link>
                            <a href="#"><i :disabled="processing" preserve-scroll  @click.prevent="launchConfirmationModal" :data-one="prop.id" class="far fa-trash-alt"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DashboardFooter @close="initiateDelete" />
    </DashboardLayout>
<!-- END FOOTER -->
</template>
<style scoped>
    .fas,fa,far{

        color:var(--BGCOLOR) !important
    }

    .fa{

    color:var(--BGCOLOR) !important
    }

    .far{

    color:var(--BGCOLOR) !important
    }



</style>
    

