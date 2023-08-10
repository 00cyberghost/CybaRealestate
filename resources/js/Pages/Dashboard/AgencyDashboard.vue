<script setup>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import DashboardLayout from "@/Layouts/DashboardLayout.vue"
import InputError from '@/Components/InputError.vue'

import { onMounted,onUnmounted,ref,onUpdated } from 'vue'

defineProps({
    
    props: Object,
    
    message: String
})


let processing = ref(false)


const launchConfirmationModal = (event) => {

    document.getElementById('accept').setAttribute('agent-id',event.target.getAttribute('agent-id'))

    document.getElementById('accept').setAttribute('agency-id',event.target.getAttribute('agency-id'))

    $('.confirmation-modal').fadeIn()

}

const initiateDelete = (agent_id,agency_id) => {

    const form = useForm({

        agent_id: null,

        agency_id: null
    })

    form.agent_id = agent_id

    form.agency_id = agency_id

    form.delete(route('deleteAgent'),{

        onStart: () => processing.value = true,
        onFinish: () => processing.value = false
    })
} 

let domain_name = location.hostname

//show or hide review details
const toggleReviewForm = (e) => {

    let hasClass = document.getElementById('review-form').classList.contains('d-none')

    if(hasClass == true){

    document.getElementById('review-form').classList.remove('d-none')

        e.target.textContent = 'Hide Reviews'

    }else{

        document.getElementById('review-form').classList.add('d-none')

        e.target.textContent = 'Show Reviews'
    }
}


//show or hide listing details
const toggleAgents = (e) => {

    let hasClass = document.getElementById('listing-form').classList.contains('d-none')

    if(hasClass == true){

    document.getElementById('listing-form').classList.remove('d-none')

        e.target.textContent = 'Hide Agents'

    }else{

        document.getElementById('listing-form').classList.add('d-none')

        e.target.textContent = 'Show Agents'
    }


}

//copy registration link
const copyLink = () => {

    var a = document.getElementById('myInput')
						
    a.select();
    
    a.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
    
    $('.alert-modal').fadeIn()
}


onMounted(() =>  $('body').addClass('inner-pages maxw1600 m0a dashboard-bd'))


onUnmounted(() => $('body').removeClass('inner-pages maxw1600 m0a dashboard-bd'))





</script>
<template>
    <Head title="Agency Dashboard" />
    <DashboardLayout :props="props">
        <div class="dashborad-box stat bg-white curved">
            <h4 class="title">Manage Dashboard</h4>
            <div class="section-body">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-xs-12 dar pro mr-3">
                        <div class="item">
                            <div class="icon">
                                <i class="fas fa-laptop-house" aria-hidden="true"></i>
                            </div>
                            <div class="info">
                                <h6 class="number">{{ props.dashboard_count.no_of_properties }}</h6>
                                <p class="type ml-1">Property By Agents</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12 dar rev mr-3">
                        <div class="item">
                            <div class="icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="info">
                                <h6 class="number">{{ props.dashboard_count.rating }}.0</h6>
                                <p class="type ml-1">Rating</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 dar com mr-3">
                        <div class="item mb-0">
                            <div class="icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="info">
                                <h6 class="number">{{ props.dashboard_count.no_of_agents }}</h6>
                                <p class="type ml-1">Agents</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 dar booked">
                        <div class="item mb-0">
                            <div class="icon">
                                <i class="fas fa-eye"></i>
                            </div>
                            <div class="info">
                                <h6 class="number">{{ props.agency.views }}</h6>
                                <p class="type ml-1">Views</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="dashborad-box curved">
            <h4 class="title">Register Agents</h4>
            <div class="section-body">
                <p>Register Your agents through this link</p>
                <div class="row mt-3">
                    <div class="col-md-10 col-sm-10 col-10">
                        <div class="form-group">
                            <input type="text" :value="`https://${domain_name}/register-agent/${props.agency.email}`"  id="myInput" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-2 col-2">
                        <i @click="copyLink" class="fa fa-copy"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="dashborad-box curved">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-6">
                    <h4 class="title">My agents</h4>
                    
                </div>
                <div class="col-md-6 col-sm-6 col-6">
                    <button id="listing-form-button" @click="toggleAgents" type="submit" class="btn btn-primary btn-sm rounded curved p-2 pl-2 pr-2 focus">Hide Agents</button>
                </div>
            </div>
            <div class="section-body listing-table" id="listing-form">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Agent Name</th>
                                <th>Date</th>
                                <th>Rating</th>
                                <th>Dashboard</th>
                                <th>Details</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="agent in props.agents.data" :key="agent">
                                <td>{{ agent.name }}</td>
                                <td>{{ agent.created_at_diff }}</td>
                                <td class="rating"><span>{{ agent.average_review }}.0</span></td>
                                <td class="status"><Link :href="route('agentDashboard',[agent.id,agent.agency_id])"><span class=" active">view</span></Link></td>
                                <td class="status"><Link :href="route('agentDetails',agent.id)"><span>view</span></Link></td>
                                <td class="edit"><a href="#"><i :disabled="processing" preserve-scroll  @click.prevent="launchConfirmationModal" :data-one-id="agent.id" :data-two="agent.agency_id" class="fa fa-trash"></i></a></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </DashboardLayout>

<a data-scroll href="#wrapper" class="go-up"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
<!-- END FOOTER -->
</template>
<style scoped>

    #review-form-button{

        float: right
    }

    #listing-form-button{

        float: right
    }

    .curved{
    
        border-radius: 30px !important;
    }

    button{

        border: none !important;
    }

    td{

        white-space: nowrap;
    }

    .fa-copy{

        font-size: 1.3em !important;
    }

    .fa-users{

        color:#f5f5f5
    }

    .fa-laptop-house{

        color:#f5f5f5
    }

    .fa-eye{

        color:#f5f5f5
    }

    input,textarea {
    
    background: #f5f5f5;
    border: none !important;
    width: 100%;
    height: 50px;
    padding-left: 20px;
    font-weight: 500;
    margin-bottom: 24px;
    border-radius: 2em;
}

    @media screen and (max-width: 600px) {

        #review-form-button{

            font-size: 0.7em;
        }

        #listing-form-button{

            font-size: 0.7em;
        }

    }
   

</style>

    

