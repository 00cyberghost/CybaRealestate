<script setup>

defineProps({
    user: Object,
})

const currentUrl = `https://${location.hostname}${location.pathname}`

</script>

<template>
    <div class="d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none caller shadow">
        <div class="d-flex flex-row justify-content-between gap-2">
            <div class="col">
                <a :href="`tel:${user.phone}`">
                    <div class="w-25">
                        <i class="fa fa-phone"></i>
                    </div>
                    <div class="w-75">{{ user.phone.slice(0,6) }}...</div>
                </a>
            </div>
            <div class="col">
                <a target="_blank" :href="`whatsapp://send?phone=+234${user.whatsapp}&text=hello i am interested in this property ${currentUrl}`">
                    <div class="w-25">
                        <i class="fa fa-whatsapp"></i>
                    </div>
                    <div class="w-75">{{ user.whatsapp.slice(0,6) }}...</div>
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
.caller{
    position: fixed !important;
    bottom: 0 !important;
    min-height: 3.5rem;
    background: #fff;
    z-index: 99999999999999999999999 !important;
    width: 100% !important;
    max-width: 100%;
    color: #fff !important;
    padding: 0.5rem;
    
}

a,a:active,a:focus,a:hover{
    color: #fff !important;
}

.caller .col{
   
    height: 2.5rem;
    padding: 0;
    margin: 0;
    background: var(--BGCOLOR);
   
}

.caller .w-25{
    width: 25% !important;
    min-width: 25% !important;
    max-width: 25% !important;
    display: inline-block;
    height: 100%;
    text-align: center;
    background: black !important;
    padding-top: 6px;
}

.caller .w-75{
    width: 75% !important;
    min-width: 75% !important;
    max-width: 75% !important;
    display: inline-block;
    top: 0 !important;
    height: 100%;
    padding-left: 10px;
}

</style>