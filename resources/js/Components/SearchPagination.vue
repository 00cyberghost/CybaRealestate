<script setup>
import {onMounted} from 'vue'
    
    defineProps({
        paginations: Object
    })

        let queryString = window.location.search

        let urlParams = new URLSearchParams(queryString);

        let category = urlParams.get('category')

        let location = urlParams.get('location')

        let type = urlParams.get('type')

        let subtype = urlParams.get('subtype')

        let minprice = urlParams.get('minprice')

        let maxprice = urlParams.get('maxprice')

        let ref =  urlParams.get('ref')

        let bedroom =  urlParams.get('bedroom')

        let bathroom =  urlParams.get('bathroom')

        let parking =  urlParams.get('parking')

        let area =  urlParams.get('area')

        let unit =  urlParams.get('unit')

        let params = `&category=${category}&location=${location}&type=${type}&subtype=${subtype}&minprice=${minprice}`

        params += `&maxprice=${maxprice}&ref=${ref}&bedroom=${bedroom}&bathroom=${bathroom}&parking=${parking}`

        params += `&area=${area}&unit=${unit}`



    onMounted(() => {

        const cleanPagination = () => {

            let li = document.querySelectorAll('.page-link')

            let lastList = li.length - 1

            li[0].textContent = 'Previous'

            li[lastList].textContent = 'Next'

        }

        cleanPagination()
    })
</script>

<template>
    <!-- START PAGINATION -->
    <section class="team blog pt-5">
        <div class="container">
            <nav aria-label="..." class="pt-0">
                <ul class="pagination mt-0">
                    
                    <li v-for="link in paginations" :key="link.id" class="page-item" :class="{active: link.active}">
                        <Link :href="link.url + params" class="page-link" :class="{active: link.active}">{{ link.label }}</Link>
                
                    </li> 
                </ul>
                
            </nav>
            
        </div>
    </section>
    <!--PAGINATION END -->
</template>
