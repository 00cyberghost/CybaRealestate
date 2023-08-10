<script setup>
import { Head } from '@inertiajs/inertia-vue3';
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

    $(".header-user-name").on("click", function() {
        $(".header-user-menu ul").toggleClass("hu-menu-vis");
        $(this).toggleClass("hu-menu-visdec");
    });

   
})





</script>
<template>
    <Head title="My properties" />
    <DashboardLayout :props="props">

        <div class="my-properties">
            <table class="table-responsive">
                <thead>
                    <tr>
                        <th class="pl-2">My Properties</th>
                        <th class="p-0"></th>
                        <th>Date Added</th>
                        <th>Views</th>
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
                                <ul class="starts text-left mb-0">
                                    <li v-if="prop.star > 0"><i class="fa fa-star"></i></li>
                                    <li v-else><i class="fa fa-star-o"></i></li>
                                    <li v-if="prop.star > 1"><i class="fa fa-star"></i></li>
                                    <li v-else><i class="fa fa-star-o"></i></li>
                                    <li v-if="prop.star > 2"><i class="fa fa-star"></i></li>
                                    <li v-else><i class="fa fa-star-o"></i></li>
                                    <li v-if="prop.star > 3"><i class="fa fa-star"></i></li>
                                    <li v-else><i class="fa fa-star-o"></i></li>
                                    <li v-if="prop.star > 4"><i class="fa fa-star"></i></li>
                                    <li v-else><i class="fa fa-star-o"></i></li>
                                    <li class="ml-3">({{ prop.total_review }} Reviews)</li>
                                </ul>
                            </div>
                        </td>
                        <td>{{ prop.created_at_diff }}</td>
                        <td>{{ prop.views }} views</td>
                        <td class="actions">
                            <Link :href="route('editProperty',prop.id)" class="edit"><i class="lni-pencil"></i>Edit</Link>
                            <a href="#"><i class="far fa-trash-alt"></i></a>
                        </td>
                    </tr>
                    
                    
                    
                </tbody>
            </table>
        </div>
    </DashboardLayout>
</template>

    

