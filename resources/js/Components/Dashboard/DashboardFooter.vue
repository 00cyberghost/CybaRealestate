<script setup>
    defineProps({
        
        message: String,
        props: String
    })
    const emit = defineEmits(['close', 'unClose'])

    const confirmation = (event) => {

        let data_one = event.target.getAttribute('data-one')

        let data_two = event.target.getAttribute('data-two')

        emit('close',data_one,data_two)

        $('.modal').fadeOut()

    }
    const closeModal = () => $('.modal').fadeOut()

    //footer year
    let date = new Date;
    let year = date.getFullYear()
</script>
<template>
   <!--alertmodal -->
   <div class="login-and-register-form modal alert-modal">
        <div class="main-overlay"></div>
        <div class="main-register-holder">
            <div class="main-register fl-wrap curved">
                <h6 class="m-5 text-center" v-if="message">{{ message }}</h6>

                <h6 class="m-5 text-center" v-else>Opertaion completed successfully</h6>
                
                <div id="tabs-container">
                    <ul class="m-2 text-center justify-content-center">
                        <li class=""><a preserve-scroll href="javascript:void(0)" @click="closeModal">OK</a></li>
                        
                    </ul>       
                </div>
            </div>
        </div>
    </div>
    <!--alert modal end -->

    <!--confirmation modal -->
    <div class="login-and-register-form modal confirmation-modal">
        <div class="main-overlay"></div>
        <div class="main-register-holder">
            <div class="main-register fl-wrap curved">
                <h6 class="m-5 text-center">Are you sure you want to delete this ?</h6>
                
                <div id="tabs-container">
                    <ul class="tabs-menu m-2 text-center justify-content-center">
                        <li class="two"><a @click="closeModal">No</a></li>
                        <li class="fl-r two"><a @click="confirmation" id="accept" >Yes</a></li>
                    </ul>       
                </div>
            </div>
        </div>
    </div>
    <!--confirmation modal end -->
    <!-- Footer -->
    <div class="second-footer" :class="{'d-none': props == 'yes'}">
        <div class="container">
            <p>{{ year }} © Copyright - All Rights Reserved.</p>
            <p>Made With <i class="fa fa-heart" aria-hidden="true"></i> <a target="_blank" href="https://cybaghost.com.ng">Cybaghost Technologies</a></p>
        </div>
    </div>
    <!-- Footer / End -->
</template>
<style scoped>
.fl-r{

    float:right !important
}

.curved{

border-radius: 5em !important;
}
.main-register,.fl-wrap {
    color: var(--DARKCOLOR) !important;
    background: var(--BGDARK) !important;
    background-color: var(--BGDARK) !important;
}

.tabs-menu li a{
    color: var(--DARKCOLOR) !important;
    background: var(--BGCOLOR) !important;
    background-color: var(--BGCOLOR) !important;
}

</style>
