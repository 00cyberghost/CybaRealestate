<script setup>
    import { Link } from '@inertiajs/inertia-vue3'
    import { onMounted,onUnmounted } from 'vue'

    onMounted(() => {

            //add the dashboard css stylesheet immediately the component mounts and some other classes that are necessary for page responsiveness
            $('#search-form').append('<link id="dashboard-style" rel="stylesheet" href="css/dashbord-mobile-menu.css"><link rel="stylesheet" href="css/swiper.min.css">');
            $('body').addClass('inner-pages maxw1600 m0a dashboard-bd ui-elements');
            $('#wrapper').addClass('int_main_wraapper');
        

            $(".dropdown-filter").on('click', function() {

                $(".explore__form-checkbox-list").toggleClass("filter-block");

            });

            

            $(".header-user-name").on("click", function() {
                $(".header-user-menu ul").toggleClass("hu-menu-vis");
                $(this).toggleClass("hu-menu-visdec");
            });

            
            $(window).resize(function() { mmenuInit(); });

            function mmenuInit() {
            var wi = $(window).width();
            if(wi <= '992') {

                $('#footer').removeClass("sticky-footer");

                $(".mmenu-init" ).remove();
                $("#navigation").clone().addClass("mmenu-init").insertBefore("#navigation").removeAttr('id').removeClass('style-1 style-2').find('ul').removeAttr('id');
                $(".mmenu-init").find(".container").removeClass("container");

                $(".mmenu-init").mmenu({
                    "counters": true
                }, {
                // configuration
                offCanvas: {
                    pageNodetype: "#wrapper"
                }
                });

                var mmenuAPI = $(".mmenu-init").data( "mmenu" );
                var $icon = $(".hamburger");

                $(".mmenu-trigger").click(function() {
                    mmenuAPI.open();
                });

                mmenuAPI.bind( "open:finish", function() {
                setTimeout(function() {
                    $icon.addClass( "is-active" );
                });
                });
                mmenuAPI.bind( "close:finish", function() {
                setTimeout(function() {
                    $icon.removeClass( "is-active" );
                });
                });


            }

            
            $(".mm-next").addClass("mm-fullsubopen");
        }

        mmenuInit();

        /*  User Menu */
        $('.user-menu').on('click', function(){
            $(this).toggleClass('active');
        });


    })

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('inner-pages maxw1600 m0a dashboard-bd ui-elements');
    })
</script>
<template>
    <!-- START SECTION HEADINGS -->
    <!-- Header Container
    ================================================== -->
    <div class="dash-content-wrap">
        <header id="header-container" class="db-top-header">
            <!-- Header -->
            <div id="header">
                <div class="container-fluid">
                    <!-- Left Side Content -->
                    <div class="left-side">
                        <!-- Logo -->
                        <div id="logo">
                            <a href="index.html"><img src="/images/logo.svg" alt=""></a>
                        </div>
                        <!-- Mobile Navigation -->
                        <div class="mmenu-trigger">
                            <button class="hamburger hamburger--collapse" type="button">
                                <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                        <!-- Main Navigation -->
                        <nav id="navigation" class="style-1">
                            <ul id="responsive">
                                <li><Link :href="route('home')">Home</Link></li>
                                <li><Link :href="route('myProperties')">My properties</Link></li>
                                <li><Link :href="route('bookmarks')">Favourites</Link></li>
                                <li><Link :href="route('addProperty')">Add Listing <i class="fas fa-laptop-house ml-2"></i></Link></li>
                                    
                                <li class="d-none d-xl-none d-block d-lg-block"><Link as="button" :href="route('logout')" method="post">Log Out</Link></li>
                                <li class="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0"><Link :href="route('addProperty')" class="button border btn-lg btn-block text-center">Add Listing<i class="fas fa-laptop-house ml-2"></i></Link></li>
                            </ul>
                        </nav>
                        <!-- Main Navigation / End -->
                    </div>
                    <!-- Left Side Content / End -->
                    <!-- Right Side Content / --> 
                    <div class="header-user-menu user-menu">
                        <div class="header-user-name">
                            <span><img src="/images/testimonials/ts-1.jpg" alt=""></span>Hi, {{ $page.props.auth.user.name }}!
                        </div>
                        <ul>
                            <li><Link :href="route('myRequests')">My requests</Link></li>
                            <li><Link :href="route('myAlerts')">My alerts</Link></li>
        
                            <li><Link :href="route('logout')" method="post" as="button">Log Out</Link></li>
                        </ul>
                    </div>
                    <!-- Right Side Content / End -->
                </div>
            </div>
            <!-- Header / End -->
        </header>
    </div>
    <div class="clearfix"></div>
    <!-- Header Container / End -->
</template>
