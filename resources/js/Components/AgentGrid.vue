<script setup>
    import { Head, Link } from '@inertiajs/inertia-vue3'
    </script>
<template>
    <!-- START SECTION AGENTS -->
    <section class="team bg-white-3">
        <div class="container-fluid">
            <div class="section-title col-md-5">
                <h3>Meet Our</h3>
                <h2>Agents</h2>
            </div>
            <div class="row team-all">
                <!--Team Block-->
                <div class="team-block col-sm-6 col-md-4 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="150">
                    <div class="inner-box team-details">
                        <div class="image team-head">
                            <Link :href="'/agent-details/' + 1"><img src="images/team/t-5.jpg" alt="" /></Link>
                            <div class="team-hover">
                                <ul class="team-social">
                                    <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="lower-box">
                            <h3><Link :href="'/agent-details/' + 1">Carls Jhons</Link></h3>
                            <div class="designation">Real Estate Agent</div>
                        </div>
                    </div>
                </div>
                
                
                
                
            </div>
        </div>
    </section>
    <!-- END SECTION AGENTS -->
</template>
