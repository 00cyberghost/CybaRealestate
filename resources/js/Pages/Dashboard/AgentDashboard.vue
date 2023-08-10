<script setup>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import DashboardLayout from "@/Layouts/DashboardLayout.vue"
import InputError from '@/Components/InputError.vue'
import { onMounted,onUnmounted,ref,onUpdated } from 'vue'

defineProps({
    
    props: Object
})


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
const toggleListing = (e) => {

    let hasClass = document.getElementById('listing-form').classList.contains('d-none')

    if(hasClass == true){

    document.getElementById('listing-form').classList.remove('d-none')

        e.target.textContent = 'Hide Listings'

    }else{

        document.getElementById('listing-form').classList.add('d-none')

        e.target.textContent = 'Show Listings'
    }


}

//copy registration link
const copyLink = () => {

    var a = document.getElementById('myInput')
						
    a.select();
    
    a.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
    
    alert("Copied: " + a.value);
}





onMounted(() => {


    $('body').addClass('inner-pages maxw1600 m0a dashboard-bd')

})

onUnmounted(() => $('body').removeClass('inner-pages maxw1600 m0a dashboard-bd'))





</script>
<template>
    <Head title="Agent Dashboard" />
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
                                <h6 class="number">{{ props.dashboard_count.dashboard_property_count }}</h6>
                                <p class="type ml-1">Published Property</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12 dar rev mr-3">
                        <div class="item">
                            <div class="icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="info">
                                <h6 class="number">{{ props.average_review }}.0</h6>
                                <p class="type ml-1">Rating</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 dar com mr-3">
                        <div class="item mb-0">
                            <div class="icon">
                                <i class="fas fa-comments"></i>
                            </div>
                            <div class="info">
                                <h6 class="number">{{ props.user[0].views }}</h6>
                                <p class="type ml-1">Total Views</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 dar booked">
                        <div class="item mb-0">
                            <div class="icon">
                                <i class="fas fa-heart"></i>
                            </div>
                            <div class="info">
                                <h6 class="number">{{ props.dashboard_count.dashboard_bookmark_count }}</h6>
                                <p class="type ml-1">Times Bookmarked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="dashborad-box curved">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-6">
                    <h4 class="title">Listings</h4>
                    
                </div>
                <div class="col-md-6 col-sm-6 col-6">
                    <button id="listing-form-button" @click="toggleListing" type="submit" class="btn btn-primary btn-sm rounded curved p-2 pl-2 pr-2 focus">show Listings</button>
                </div>
            </div>
            <div class="section-body listing-table d-none" id="listing-form">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Listing Name</th>
                                <th>Date</th>
                                <th>Views</th>
                                <th>Rating</th>
                                <th>Status</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="property in props.property.data" :key="property.id">
                                <td>{{ property.title }}</td>
                                <td>{{ property.created_at_diff }}</td>
                                <td>{{ property.views }}</td>
                                <td class="rating"><span>{{ property.average_property_review }}</span></td>
                                <td class="status"><span class=" active">{{ property.status }}</span></td>
                                <td class="edit"><a href="#"><i class="fa fa-pencil"></i></a></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="dashborad-box d-none">
            <h4 class="title">Message</h4>
            <div class="section-body">
                <div class="messages">
                    <div class="message">
                        <div class="thumb">
                            <img class="img-fluid" src="images/testimonials/ts-1.jpg" alt="">
                        </div>
                        <div class="body">
                            <h6>Mary Smith</h6>
                            <p class="post-time">22 Minutes ago</p>
                            <p class="content mb-0 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            <div class="controller">
                                <ul>
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i class="far fa-trash-alt"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="dashborad-box curved">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-6">
                    <h4 class="title">Reviews ({{ props.average_review }}.0)</h4>
                    
                </div>
                <div class="col-md-6 col-sm-6 col-6">
                    <button id="review-form-button" @click="toggleReviewForm" type="submit" class="btn btn-primary btn-sm rounded curved p-2 pl-2 pr-2 focus">show Reviews</button>
                </div>
            </div>
            <div class="section-body d-none" id="review-form">
                <div class="messages">
                    
                    <div class="message" v-for="review in props.userReview.data" :key="review">
                        <div class="thumb">
                            <img class="img-fluid" :src="`/photos/${review.photo}`" alt="">
                        </div>
                        <div class="body">
                            <h6>{{ review.name }}</h6>
                            <p class="post-time">{{ review.created_at_diff }}</p>
                            <p class="content mb-0 mt-2">{{ review.review }}</p>
                            <ul class="starts mb-0">
                                <li v-if="review.star > 0"><i class="fa fa-star"></i></li>
                                <li v-else><i class="fa fa-star-o"></i></li>
                                <li v-if="review.star > 1"><i class="fa fa-star"></i></li>
                                <li v-else><i class="fa fa-star-o"></i></li>
                                <li v-if="review.star > 2"><i class="fa fa-star"></i></li>
                                <li v-else><i class="fa fa-star-o"></i></li>
                                <li v-if="review.star > 3"><i class="fa fa-star"></i></li>
                                <li v-else><i class="fa fa-star-o"></i></li>
                                <li v-if="review.star > 4"><i class="fa fa-star"></i></li>
                                <li v-else><i class="fa fa-star-o"></i></li>
                                
                            </ul>
                            <div class="controller">
                                <ul>
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i class="far fa-trash-alt"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </DashboardLayout>
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

    .fa-laptop-house{

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

    

