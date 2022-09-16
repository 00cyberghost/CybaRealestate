<script setup>
    import { Head,Link } from "@inertiajs/inertia-vue3"
    import Header from "@/Components/Header.vue"
    import Pagination from "@/Components/Pagination.vue"
    import Footer from "@/Components/Footer.vue"
    import { onMounted,onUnmounted } from 'vue'
    
    onMounted(() => {

        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('inner-pages agents homepage-4 hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');

    })

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('inner-pages agents homepage-4 hd-white');
    })
</script>

<template>
    <Header />

    <!-- START SECTION Agencies -->
    <section class="blog blog-section portfolio pt-5">
        <div class="container">
            <section class="headings-2 pt-0 pb-55">
                <div class="pro-wrapper">
                    <div class="detail-wrapper-body">
                        <div class="listing-title-bar">
                            <div class="text-heading text-left">
                                <p class="pb-2"><a href="index.html">Home </a> &nbsp;/&nbsp; <span>Listings</span></p>
                            </div>
                            <h3>Our Agencies</h3>
                        </div>
                    </div>
                </div>
            </section>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12">
                    <section class="headings-2 pt-0">
                        <div class="pro-wrapper">
                            <div class="detail-wrapper-body">
                                <div class="listing-title-bar">
                                    <div class="text-heading text-left">
                                        <p class="font-weight-bold mb-0 mt-3">7 Search results</p>
                                    </div>
                                </div>
                            </div>
                            <div class="cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center grid">
                                <div class="input-group border rounded input-group-lg w-auto mr-4">
                                    <label class="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" for="inputGroupSelect01"><i class="fas fa-align-left fs-16 pr-2"></i>Sortby:</label>
                                    <select class="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3" id="inputGroupSelect01" name="sortby">
                                        <option selected>Alphabet</option>
                                        <option value="1">Random</option>
                                        <option value="1">Rating</option>
                                        <option value="1">Number of property</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="row">
                        <div class="col-md-12 col-xs-12">
                            <div class="news-item news-item-sm">
                                <Link :href="route('agencyDetails')" class="news-img-link">
                                    <div class="news-item-img homes">
                                        <div class="homes-tag button alt featured">3 Listings</div>
                                        <img class="resp-img" src="images/partners/ag-1.jpg" alt="blog image">
                                    </div>
                                </Link>
                                <div class="news-item-text">
                                    <Link :href="route('agencyDetails')"><h3>Capital Partners</h3></Link>
                                    <div class="the-agents">
                                        <ul class="the-agents-details">
                                            <li><a href="#">Office: (234) 0200 17813</a></li>
                                            <li><a href="#">Mobile: (657) 9854 12095</a></li>
                                            <li><a href="#">Fax: 809 123 0951</a></li>
                                            <li><a href="#">Email: info@agent.com</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-item-bottom">
                                        <Link :href="route('agencyDetails')" class="news-link">View My Listings</Link>
                                        <div class="admin">
                                            <p>Arling Tracy</p>
                                            <img src="images/testimonials/ts-1.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
      
            </div>
        </div>
    </section>
    <!-- END SECTION Agencies -->

        <Pagination />


    <Footer />
</template>