<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue'

import { onMounted,onUnmounted } from 'vue'

onMounted(() => {

    //add some classes to the body tag. these classes are used to track page responsiveness
    $('body').addClass('inner-pages hd-white');
    $('#dashboard-style').remove();
    $('#wrapper').removeClass('int_main_wraapper');

    $(".accordion li").click(function() {
        $(this).closest(".accordion").hasClass("one-open") ? ($(this).closest(".accordion").find("li").removeClass("active"), $(this).addClass("active")) : $(this).toggleClass("active"), "undefined" != typeof window.mr_parallax && setTimeout(mr_parallax.windowLoad, 500)
    });
   

})

//when the component is unmounted
onUnmounted(() => {
//remove the classes that was added to the body tag during component mounting
$('body').removeClass('inner-pages ui-elements hd-white');
})


</script>
<template>
    <Head title="Frequently Asked Questions" />
    <GuestLayout>

    <section class="headings">
        <div class="text-heading text-center">
            <div class="container">
                <h1>FAQ’S</h1>
                <h2><a href="index.html">Home </a> &nbsp;/&nbsp; FAQ’S</h2>
            </div>
        </div>
    </section>
    <!-- END SECTION HEADINGS -->

    <!-- START SECTION FAQ -->
    <section class="faq service-details bg-white ui-elements">
        <div class="container">
            <h3 class="mb-5">FREQUENTLY ASKED QUESTIONS</h3>
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h5 class="uppercase mb40">Questions about Selling</h5>
                    <ul class="accordion accordion-1 one-open">
                        <li class="active">
                            <div class="title">
                                <span>What payment methods are available?</span>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                <span>How can i get findhouses aid to live off campus?</span>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                <span>Does findhouses share my information with others?</span>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                <span>What kind of real estate advice do you give?</span>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                <span>How do i link multiple accounts with my profile?</span>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                <span>What kind of real estate advice do you give?</span>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                <span>Is your advice really be helf full?</span>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                <span>How can i get real estate aid to live off campus?</span>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                <span>Does realhome share my information with others?</span>
                            </div>
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <!--end of accordion-->
                </div>
            </div>
        </div>
    </section>
    <!-- END SECTION FAQ -->
    
    </GuestLayout>
</template>
    

