<script setup>
    import { Head,Link } from "@inertiajs/inertia-vue3"
    import Header from "@/Components/Header.vue"
    import Pagination from "@/Components/Pagination.vue"
    import Footer from "@/Components/Footer.vue"
    import { onMounted,onUnmounted } from 'vue'
    
    onMounted(() => {

        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('inner-pages agents hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');

    })

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('inner-pages agents hd-white');
    })
</script>

<template>
    <Header />

    <!-- START SECTION AGENTS -->
    <section class="team blog pt-5">
        <div class="container">
            <section class="headings-2 pt-0 pb-55">
                <div class="pro-wrapper">
                    <div class="detail-wrapper-body">
                        <div class="listing-title-bar">
                            <div class="text-heading text-left">
                                <p class="pb-2"><Link :href="route('home')">Home </Link> &nbsp;/&nbsp; <span>Listings</span></p>
                            </div>
                            <h3>All Agents</h3>
                        </div>
                    </div>
                </div>
            </section>
            <div class="row">
                <div class="col-lg-12 agent-mb">
                    <section class="headings-2 pt-0">
                        <div class="pro-wrapper">
                            <div class="detail-wrapper-body">
                                <div class="listing-title-bar">
                                    <div class="text-heading text-left">
                                        <p class="font-weight-bold mb-0 mt-3">4 Search results</p>
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
                                <div class="sorting-options">
                                    <a href="#" class="change-view-btn active-view-btn"><i class="fa fa-th-list"></i></a>
                                    <Link :href="route('agentDetails')" class="change-view-btn lde"><i class="fa fa-th-large"></i></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="agent agent-row shadow-hover">
                        <Link :href="route('agentDetails')" class="agent-img">
                            <div class="img-fade"></div>
                            <div class="button alt agent-tag">60 Properties</div>
                            <img src="images/team/t-1.jpg" alt="" />
                        </Link>
                        <div class="agent-content">
                            <div class="agent-details">
                                <h4><Link :href="route('agentDetails')">CARLS JHONS</Link></h4>
                                <p><i class="fa fa-tag icon"></i>Selling Agent</p>
                                <p><i class="fa fa-envelope icon"></i>carls@realhome.com</p>
                                <p><i class="fa fa-phone icon"></i>(234) 200-7813</p>
                            </div>
                            <div class="agent-text">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...</p>
                            </div>
                            <div class="agent-footer center">
                                <ul class="netsocials">
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                
                
                
            </div>
            <!-- end row -->
        </div>
    </section>
    <!-- END SECTION AGENTS -->

        <Pagination />


    <Footer />
</template>