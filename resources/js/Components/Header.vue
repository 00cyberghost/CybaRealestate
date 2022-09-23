<script setup>
    import { Head } from '@inertiajs/inertia-vue3';
    import { onMounted,onUnmounted } from 'vue'
    
    onMounted(() => {

        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('maxw1600 m0a homepage-2 the-search hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');
        
        

        //handles mobile menu dropdown
        mmenuInit();
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

        /*  User Menu */
        $('.user-menu').on('click', function(){
            $(this).toggleClass('active');
        });
        
        $(".dropdown-filter").on('click', function() {

            $(".explore__form-checkbox-list").toggleClass("filter-block");

        });
      
       
    })

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('maxw1600 m0a homepage-2 the-search hd-white');
    })
       
    
</script>
<template>
    <!-- START SECTION HEADINGS -->
    <!-- Header Container
    ================================================== -->
    <header id="header-container">
        <!-- Header -->
        <div id="header">
            <div class="container container-header">
                <!-- Left Side Content -->
                <div class="left-side">
                    <!-- Logo -->
                    <div id="logo">
                        <Link :href="route('home')"><img src="/images/logo-gray.svg" alt=""></Link>
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
                            <li>
                                <a>Agencies</a>
                                <ul>
                                    <li><Link :href="route('agencies')">Agencies</Link></li>
                                    <li><Link :href="route('agents')">Agents</Link></li>
                                </ul>
                            </li>
                            <li><Link :href="route('requests')">Requests</Link></li>
                            <li>
                                <a>About</a>
                                <ul>
                                    <li><Link :href="route('about')">About Us</Link></li>
                                    <li><Link :href="route('faq')">Faq</Link></li>
                                    <li><Link :href="route('contact')">Contact Us</Link></li>
                                </ul>
                            </li>
                            <li v-if="$page.props.auth.user">
                                <a>Dashboard</a>
                                <ul>
                                    <li><Link :href="route('dashboard')">Dashboard</Link></li>
                                    <li><Link :href="route('profile')">Profile</Link></li>
                                    <li><Link :href="route('myProperties')">My Properties</Link></li>
                                    <li><Link :href="route('bookmarks')">My Favourites</Link></li>
                                    <li><Link :href="route('myAlerts')">My Property Alerts</Link></li>
                                    <li><Link :href="route('myRequests')">My Property Requests</Link></li>
                                </ul>
                            </li>
                            <li v-else><Link :href="route('register')">Register</Link></li>
                            <li v-if="!$page.props.auth.user" class="d-none d-xl-none d-block d-lg-block"><Link :href="route('login')">Login</Link></li>
                            <li v-if="!$page.props.auth.user" class="d-none d-xl-none d-block d-lg-block"><Link :href="route('register')">Register</Link></li>
                            <li v-if="$page.props.auth.user" class="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0"><Link :href="route('addProperty')" class="button border btn-lg btn-block text-center">Add Listing<i class="fas fa-laptop-house ml-2"></i></Link></li>
                        </ul>
                    </nav>
                    <!-- Main Navigation / End -->
                </div>
                <!-- Left Side Content / End -->

                <!-- Right Side Content / End -->
                <div class="right-side d-none d-none d-lg-none d-xl-flex">
                    <!-- Header Widget -->
                    <div class="header-widget">
                        <Link :href="route('addProperty')" class="button border">Add Listing<i class="fas fa-laptop-house ml-2"></i></Link>
                    </div>
                    <!-- Header Widget / End -->
                </div>
                <!-- Right Side Content / End -->

                <!-- Right Side Content / End -->
                <div class="header-user-menu user-menu add">
                    <div class="header-user-name">
                        <span><img src="/images/testimonials/ts-1.jpg" alt=""></span><em v-if="$page.props.auth.user">{{$page.props.auth.user.name.slice(0,6) + '..'}}</em><em v-else>Guest !</em>
                    </div>
                    <ul>
                        <li v-if="$page.props.auth.user"><Link :href="route('profile')">My Profile</Link></li>
                        <li v-if="$page.props.auth.user"><Link :href="route('myProperties')">My Properties</Link></li>
                        <li v-if="$page.props.auth.user"><Link :href="route('myAlerts')">My Alerts</Link></li>
                        <li v-if="$page.props.auth.user"><Link class="pl-3" :href="route('logout')" method="post" as="button">Log Out</Link></li>
                        <li v-if="!$page.props.auth.user"><Link class="pl-3" :href="route('login')" as="button">Log In</Link></li>
                        <li v-if="!$page.props.auth.user"><Link class="pl-3" :href="route('register')" as="button">Register</Link></li>
                    </ul>
                </div>
                <!-- Right Side Content / End -->

                <div class="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
                    <!-- Header Widget -->
                    <div class="header-widget sign-in">
                        <div class="show-reg-form modal-open">
                            <Link  v-if="$page.props.auth.user" :href="route('logout')" method="post" as="button">Log Out</Link>
                            <Link v-else :href="route('login')">Sign In</Link>
                        </div>
                    </div>
                    <!-- Header Widget / End -->
                </div>
                <!-- Right Side Content / End -->
                

            </div>
        </div>
        <!-- Header / End -->

    </header>
    <div class="clearfix"></div>
    <!-- Header Container / End -->
</template>
