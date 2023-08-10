<script setup>
    import {onMounted} from 'vue'
        defineProps({
            paginations: Object
        })
    
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
    <div class="pagination-container">
        <nav>
            <ul class="pagination">
                <li v-for="link in paginations" :key="link.id" class="page-item" :class="{active: link.active}">
                    <Link :href="link.url" class="page-link" :class="{active: link.active}">{{ link.label }}</Link>
            
                </li>
            </ul>
        </nav>
    </div>
</template>
