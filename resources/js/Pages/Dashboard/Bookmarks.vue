<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import DashboardLayout from "@/Layouts/DashboardLayout.vue"
import { onMounted } from 'vue'

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


onMounted(() => {

    // $(".header-user-name").on("click", function() {
    //     $(".header-user-menu ul").toggleClass("hu-menu-vis");
    //     $(this).toggleClass("hu-menu-visdec");
    // });



})





</script>
<template>
    <Head title="My Favourites" />
    <DashboardLayout :props="props">

        <div class="my-properties">
            <table class="table-responsive">
                <thead class="d-n">
                    <tr>
                        <th class="pl-2">My Favourites</th>
                        <th class="p-0"></th>
                        <th>Date Added</th>
                        <th>Views</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-for="prop in props.data" :key="prop.id">
                    
                    <tr>
                        <td class="image myelist">
                            <Link :href="route('propertyDetails',resolveLink(prop.property))"><img alt="my-properties-3" :src="`/photos/${prop.images[0].image_name}`" class="img-fluid"></Link>
                        </td>
                        <td>
                            <div class="inner">
                                <Link :href="route('propertyDetails',resolveLink(prop.property))"><h2>{{ prop.property.title }}</h2></Link>
                                <address><i class="lni-map-marker"></i> {{ prop.property.location }}</address>
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
                        <td>{{ prop.property.created_at_diff }}</td>
                        <td>{{ prop.property.views }} views</td>
                        <td class="actions">
                            <Link preserve-scroll :href="route('deleteBookmark',prop.id)"><i class="far fa-trash-alt"></i></Link>
                        </td>
                    </tr>
                    
                    
                    
                </tbody>
            </table>
        </div>
    </DashboardLayout>
<!-- END FOOTER -->
</template>
<style scoped>
@media screen and (max-width: 600px) {
    .d-n{
        display: none;
    }
}
</style>
    

