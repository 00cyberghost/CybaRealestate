<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import { onMounted } from '@vue/runtime-core';


defineProps({
   
    pageProps: Object
})


</script>

<template>
    <Head title="Welcome" />

    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
       <button @click="a">abcs</button>
       <br>
       <div>{{pageProps.token}}</div>
        <input type="text" :value="pageProps.message" />
    </div>
</template>
