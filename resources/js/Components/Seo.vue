<script setup>
    import { Head,Link } from "@inertiajs/inertia-vue3"
    import { onMounted,onUnmounted, ref } from 'vue'

    let props = defineProps({

    title : Object,
    desc : String

    })
    let title = ref(null)
    let description = ref(null)
    let photo = ref(null)
    let site_url = location.hostname
    let full_site_url = location.hostname + location.pathname

    
    onMounted(() => {

        switch (props.desc) {
            case 'agent':
                title.value = `${props.title.name} real estate agent in ${props.title.locality} ${props.title.local_government} ${props.title.state}`
                description.value = `${props.title.name} is a real estate agent in ${props.title.locality} ${props.title.local_government} ${props.title.state}`
                photo.value = `${props.title.image}`
                break;

            case 'agency':
                title.value = `${props.title.name} a real estate and property agency in ${props.title.locality} ${props.title.local_government} ${props.title.state}`
                description.value = `${props.title.name} is a real estate agent in ${props.title.locality} ${props.title.local_government} ${props.title.state}`
                photo.value = `${props.title.image}`
                break;

            case 'property':
                title.value = `For ${props.title.category}: ${props.title.title}, ${props.title.locality}, ${props.title.local_government}, ${props.title.state}`
                description.value = `${props.title.title} in ${props.title.locality} ${props.title.local_government} ${props.title.state} | ${props.title.description}`
                if(props.title.images[0]){
                    photo.value = `${props.title.images[0].image_name}`
                }else{
                    photo.value = `no image`
                } 
                break;
        
            default:
            break;
        }

        document.title = title.value
        document.getElementById('ogurl').setAttribute('content',full_site_url)
        document.getElementById('ogimage').setAttribute('content',`https://${site_url}/photos/${photo.value}`)
        document.getElementById('ogtitle').setAttribute('content',title.value)
        document.getElementById('ogdescription').setAttribute('content',description.value)
        document.getElementById('twittersite').setAttribute('content',full_site_url)
        document.getElementById('twittercreator').setAttribute('content',full_site_url)
        document.getElementById('twitterimage').setAttribute('content',`https://${site_url}/photos/${photo.value}`)
        document.getElementById('twittertitle').setAttribute('content',title.value)
        document.getElementById('twitterdescription').setAttribute('content',description)

    })
</script>
<template>
   
        
   
</template>