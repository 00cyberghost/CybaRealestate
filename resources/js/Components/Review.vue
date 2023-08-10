<script setup>
    import { useForm } from '@inertiajs/inertia-vue3'
    import { onMounted,ref } from 'vue'
    import InputError from '@/Components/InputError.vue'

    
    defineProps({
        
        property_id : null,
    
        user_id : null,
    })

    let reviews = ref([])

    let average_review = ref([])

    let total_review = ref(null)
    
    let form = useForm({
        'property_id' : null,
        'user_id' : null,
        'name' : '',
        'email' : '',
        'file' : null,
        'review' : '',
        'star' : null,
        'type' : ''
    })
    
    let processing = ref(false)
        
        const submit = () => {
    
            let property_id = document.getElementById('form').getAttribute('property_id')
    
            let user_id = document.getElementById('form').getAttribute('user_id')
    
            let id = (user_id == null) ? property_id : user_id
            
            //for type
            form.type = (user_id == null) ? 'property' : 'user'
    
            //for star
            
           
            form.post(route('addReview',id), {
                onStart: () => {
    
                    document.getElementById('submit-button').textContent = 'Processing>>>'
    
                    processing.value = true
                } ,
                onFinish: () => {
    
                    document.getElementById('submit-button').textContent = 'Submit Review'
    
                    processing.value = false
                },
                onSuccess: () => {

                    form.reset('name','email','review','star','file')

                    document.getElementById('error-text').textContent = 'Your Review Was Submitted Successsfully'
                }
                
            })
    
            
        }

        //show or hide review details
        const toggleReviewDetails = (e) => {

            let hasClass = document.getElementById('review-details').classList.contains('d-none')

            if(hasClass == true){

                document.getElementById('review-details').classList.remove('d-none')

                document.getElementById('rev-add').classList.remove('d-none')

                e.target.textContent = 'Hide Reviews'
            
            }else{

                document.getElementById('review-details').classList.add('d-none')

                document.getElementById('rev-add').classList.add('d-none')


                e.target.textContent = 'Show Reviews'
            }

            
        }
        
        
        //show or hide review details
        const toggleReviewForm = (e) => {

            let hasClass = document.getElementById('review-form').classList.contains('d-none')

            if(hasClass == true){

               document.getElementById('review-form').classList.remove('d-none')

                e.target.textContent = 'Hide Reviews Form'

            }else{

                document.getElementById('review-form').classList.add('d-none')

                e.target.textContent = 'Add Reviews'
            }


        }
    
    
    onMounted(() => {

        let property_id = document.getElementById('form').getAttribute('property_id')
    
        let user_id = document.getElementById('form').getAttribute('user_id')

        let id = (user_id == null) ? property_id : user_id
    
        //for type
        let type = (user_id == null) ? 'property' : 'user'

        let body = {type: type}

        axios.get(route('getReviews',[id,type]))
        .then((res) => {

            reviews.value = res.data[0]

            average_review.value = res.data[1]

            total_review.value = res.data[2]

           
        })
        .catch((error)=> console.log(error))
        .finally(() => console.log('success'))

    
    })
    </script>
    
    
    <template>
        
        <!-- Star Reviews -->
        <section class="reviews comments curved">
            <div class="row mb-5">
                <div class="col-md-6">
                    <div class="leave-rating margin-bottom-30" id="rating-display">
                        <input type="radio" :checked="average_review == 5" id="rating-5" value="5" />
                        <label for="rating-5" class="fa fa-star"></label>
                        <input type="radio" :checked="average_review == 4" id="rating-4" value="4" />
                        <label for="rating-4" class="fa fa-star"></label>
                        <input type="radio" :checked="average_review == 3" id="rating-3" value="3" />
                        <label for="rating-3" class="fa fa-star"></label>
                        <input type="radio" :checked="average_review == 2" id="rating-2" value="2" />
                        <label for="rating-2" class="fa fa-star"></label>
                        <input type="radio" :checked="average_review == 1" id="rating-1" value="1" />
                        <label for="rating-1" class="fa fa-star"></label>
                        <br>
                        <span style="float:left"> {{ total_review }} reviews</span>
                    </div>
                    
                </div>
                <div class="col-md-6">
                    <button id="review-button" @click="toggleReviewDetails" type="submit" class="btn btn-primary btn-sm rounded curved p-2 pl-4 pr-4 b-primary">Show Reviews</button>
                </div>
            </div>
            <div class="row mb-5 d-none" id="review-details">
                <ul class="col-12 commented pl-0" v-for="review in reviews.data" :key="review.id">
                    <li class="comm-inf">
                        <div class="col-md-2">
                            <img :src="`/photos/${review.photo}`" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-10 comments-info">
                            <div class="conra">
                                <h5 class="mb-2">{{ review.name.slice(0,15) }}</h5>
                                <div class="rating-box">
                                    <div class="leave-rating margin-bottom-30" id="rating-display">
                                        <input type="radio" :checked="review.star == 5" id="rating-5" value="5" />
                                        <label for="rating-5" class="fa fa-star"></label>
                                        <input type="radio" :checked="review.star == 4" id="rating-4" value="4" />
                                        <label for="rating-4" class="fa fa-star"></label>
                                        <input type="radio" :checked="review.star == 3" id="rating-3" value="3" />
                                        <label for="rating-3" class="fa fa-star"></label>
                                        <input type="radio" :checked="review.star == 2" id="rating-2" value="2" />
                                        <label for="rating-2" class="fa fa-star"></label>
                                        <input type="radio" :checked="review.star == 1" id="rating-1" value="1" />
                                        <label for="rating-1" class="fa fa-star"></label>
                                    </div>
                                </div>
                            </div>
                            <p class="mb-4">{{ review.created_at_diff }}</p>
                            <p>{{ review.review }}</p>
                        </div>
                    </li>
    
                </ul>
            </div>
            <div class="row d-none" id="rev-add">
                <div class="col-md-12">
                    <button id="review-form-button" @click="toggleReviewForm" type="submit" class="btn btn-primary btn-sm rounded curved p-2 pl-4 pr-4 b-primary">Add Your Reviews</button>
                </div>
            </div>
            
            
        </section>
        <!-- End Reviews -->
        <!-- Star Add Review -->
        <section id="review-form" class="single reviews leve-comments details d-none curved">
            <div id="add-review" class="add-review-box">
                <!-- Add Review -->
                <h3 class="listing-desc-headline margin-bottom-20 mb-4">Add Review</h3>
                <span class="leave-rating-title">Rate this listing</span>
                <div>
                    <ul v-for="error in form.errors" :key="error.id">
                        <li class="text-danger">{{error}}</li>
                    </ul>
                </div>
                <!-- Rating / Upload Button -->
                <form @submit.prevent="submit" id="form" :property_id="property_id" :user_id="user_id" name="propertyform" enctype="multipart/form-data">
                    <span class="text-success text-center" id="error-text"></span>
                    <div class="row mb-4">
                        <div class="col-md-6 col-sm-12 col-12">
                            <!-- Leave Rating -->
                            <div class="clearfix"></div>
                            <div class="leave-rating mr-3 st-review">
                                <input type="radio" id="rating-6" v-model="form.star" value="5" />
                                <label for="rating-6" class="fa fa-star"></label>
                                <input type="radio" name="star" v-model="form.star" id="rating-7" value="4" />
                                <label for="rating-7" class="fa fa-star"></label>
                                <input type="radio" name="star" v-model="form.star" id="rating-8" value="3" />
                                <label for="rating-8" class="fa fa-star"></label>
                                <input type="radio" name="star" v-model="form.star" id="rating-9" value="2" />
                                <label for="rating-9" class="fa fa-star"></label>
                                <input type="radio" name="star" v-model="form.star" id="rating-10" value="1" />
                                <label for="rating-10" class="fa fa-star"></label>
                            </div>
                            <InputError class="mt-2" :message="form.errors.star" />
                            <div class="clearfix"></div>
                        </div> 
                        <div class="col-md-6 col-sm-12 col-12">
                            <!-- Uplaod Photos -->
                            <div class="add-review-photos margin-bottom-30">
                                <div class="photoUpload">
                                    <span class="upload"><i class="sl sl-icon-arrow-up-circle"></i> Upload Photos</span>
                                    <input id="image" type="file" @input="form.file = $event.target.files[0]" name="file" class="upload" />
                                </div>
                                <InputError class="mt-2" :message="form.errors.file" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 data">
                            
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" v-model="form.name" name="name" class="form-control" placeholder="Full Name" maxlength="40" minlength="3" required>
                                    <InputError class="mt-2" :message="form.errors.name" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="email" v-model="form.email" max="40" name="email" class="form-control" placeholder="Email" required>
                                    <InputError class="mt-2" :message="form.errors.email" />
                                </div>
                            </div>
                            <div class="col-md-12 form-group">
                                <textarea class="form-control" v-model="form.review" minlength="4" maxlength="5000" id="review" rows="8" placeholder="Write your review here" required></textarea>
                                <InputError class="mt-2" :message="form.errors.review" />
                            </div>
                            <button preserve-scroll :disabled="processing" id="submit-button" type="submit" class="btn btn-primary btn-lg mt-2 b-primary">Submit Review</button>
                        
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <!-- End Add Review -->
    
    </template>
    
<style scoped>
    input,textarea {

        background: #f5f5f5;
        border: none;
        width: 100%;
        height: 50px;
        padding-left: 20px;
        font-weight: 500;
        margin-bottom: 24px;
        border-radius: 2em;
    }

    textarea {

        min-height: 200px;
    }
    
    .curved{
    
        border-radius: 30px !important;
    }

    #rating-display label{

        font-size: 1em !important;
    }

    #review-button{

        float : right
    }
    #review-form-button{

        float:right !important
    }

    button{

        border: none !important;
    }

    @media screen and (max-width: 600px) {

        .upload{

            font-size: 0.8em;
        }

        .st-review label{

            font-size: 1.3em;
        }
    }

  
    

    
</style>