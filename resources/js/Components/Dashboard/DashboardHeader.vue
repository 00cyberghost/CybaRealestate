<script setup>
    import { Head } from '@inertiajs/inertia-vue3';
    import { onMounted,onUnmounted,ref } from 'vue'

    

    let isChecked = ref(false)
 
    const handleColorChange = {

        //start the methods
        changeColor: function(theme){
            this.storeThemeColor(theme)
            this.setThemeColor()
        },

        //write the theme color to localstorage
        storeThemeColor : function(theme){
            localStorage.setItem('theme-color',theme)
        },

        //get the theme color from local storage
        getThemeColor : function(){
            return localStorage.getItem('theme-color')
        },

        //set the theme color
        setThemeColor : function(){
            
            //first get the color from local storage
            let color = this.getThemeColor()
            
            //set the theme color by giving the document body an id
            document.querySelector('body').setAttribute('id',color)
        },

        //set darkmode
        darkMode : function(event){
            let mode = document.getElementById('mode')
            
            if(event.target.classList.contains('checked')){
                mode.removeAttribute('href')
                //remove darkmode from local storage
                localStorage.removeItem('dark-mode')
                isChecked.value = false
                
            }else{
                mode.setAttribute('href','css/colors/dark-mode.css')
                //write darkmode to local storage
                localStorage.setItem('dark-mode','yes')
                isChecked.value = true
            }
          
        },

        //check if user already dark mode
        checkMode : function(){
            
            let box = document.getElementById('mode')
            if(box.hasAttribute('href')) isChecked.value = true
             
        }
        
    }

    //launch mobile nav bar
    const launchMobileNav = () => document.getElementById('offcanvasNavbar').classList.remove('d-none')

    //remove mobile nav bar
    const removeMobileNav = () => document.getElementById('offcanvasNavbar').classList.add('d-none')

    onMounted(() => {
        document.querySelectorAll('.offcanvas-body a').forEach((e) => {
            e.addEventListener('click',removeMobileNav)
        })
        handleColorChange.checkMode()

        //add the dashboard css stylesheet immediately the component mounts and some other classes that are necessary for page responsiveness
        // $('#search-form').append('<link id="dashboard-style" rel="stylesheet"><link rel="stylesheet" href="/css/swiper.min.css">');
        $('body').addClass('maxw1600 m0a dashboard-bd');
        $('#wrapper').addClass('int_main_wraapper');
        $(".dropdown-filter").on('click', function() {
            $(".explore__form-checkbox-list").toggleClass("filter-block");
        });
        $(".header-user-name").on("click", function() {
            $(".header-user-menu ul").toggleClass("hu-menu-vis");
            $(this).toggleClass("hu-menu-visdec");
        });
        /*  User Menu */
        $('.user-menu').on('click', function(){
            $(this).toggleClass('active');
        });


    })

    //when the component is unmounted
    onUnmounted(() => {
        //remove the classes that was added to the body tag during component mounting
        $('body').removeClass('maxw1600 m0a dashboard-bd');
    })
</script>
<template>
    <!-- START SECTION HEADINGS -->
    <!-- Header Container
    ================================================== -->
        <div class="offcanvas d-none p-3" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <a href="#" @click="removeMobileNav"><i class="fas fa-times"></i></a>    
        </div>
        <div class="offcanvas-body">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li v-if="$page.props.auth.user" class="nav-item" role="presentation">
                    <button class="nav-link active" id="dashboard-tab" data-toggle="tab" data-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div v-if="$page.props.auth.user" class="tab-pane fade show active" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <div class="row mt-5" v-if="$page.props.auth.user.category == 'agent'">
                        <Link v-if="$page.props.auth.user.role_id > 1" class="col-6 truncate" :href="route('showPendingProperties')">Pending</Link>
                         <Link class="col-6" :href="route('dashboard')">Dashboard</Link>
                        <Link class="col-6" :href="route('profile')">Profile</Link>
                        <Link class="col-6 truncate" :href="route('myProperties')">My Properties</Link>
                        <Link class="col-6 truncate" :href="route('bookmarks')">My Favourites</Link>
                        <Link class="col-6 truncate" :href="route('myAlerts')">My Property Alerts</Link>
                        <Link class="col-6 truncate" :href="route('myRequests')">My Property Requests</Link>
                        <Link class="col-6" :href="route('logout')" method="post">Log Out</Link>
                        <Link class="ui-elements col-6">
                            <div class="checkbox-option pull-right mt-2" :class="{'checked': isChecked == true}" @click="handleColorChange.darkMode">
                                <div class="inner" :class="{'checked': isChecked == true}"></div>
                                <input type="checkbox" name="checkbox" value="Checkbox" :class="{'checked': isChecked == true}" />
                            </div>
                        </Link>
                    </div>

                    <div class="row mt-5" v-if="$page.props.auth.user.category == 'agency'">
                        <Link class="col-6" :href="route('dashboard')">Dashboard</Link>
                        <Link class="col-6" :href="route('profile')">Profile</Link>
                        <Link class="col-6 truncate" :href="route('myProperties')">My Properties</Link>
                        <Link class="col-6" :href="route('logout')" method="post">Log Out</Link>
                        <Link class="ui-elements col-6">
                            <div class="checkbox-option pull-right mt-2" :class="{'checked': isChecked == true}" @click="handleColorChange.darkMode">
                                <div class="inner" :class="{'checked': isChecked == true}"></div>
                                <input type="checkbox" name="checkbox" value="Checkbox" :class="{'checked': isChecked == true}" />
                            </div>
                        </Link>
                    </div>

                    <div class="row mt-5" v-if="$page.props.auth.user.category == 'customer'">
                         <Link class="col-6" :href="route('dashboard')">Dashboard</Link>
                        <Link class="col-6" :href="route('profile')">Profile</Link>
                        <Link class="col-6 truncate" :href="route('bookmarks')">My Favourites</Link>
                        <Link class="col-6 truncate" :href="route('myAlerts')">My Property Alerts</Link>
                        <Link class="col-6 truncate" :href="route('myRequests')">My Property Requests</Link>
                        <Link class="col-6" :href="route('logout')" method="post">Log Out</Link>
                        <Link class="ui-elements col-6">
                            <div class="checkbox-option pull-right mt-2" :class="{'checked': isChecked == true}" @click="handleColorChange.darkMode">
                                <div class="inner" :class="{'checked': isChecked == true}"></div>
                                <input type="checkbox" name="checkbox" value="Checkbox" :class="{'checked': isChecked == true}" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <div class="row mt-5">
                        <Link class="col-4" :href="route('home')">Home</Link>
                        <Link class="col-4" :href="route('forRent')">For Rent</Link>
                        <Link class="col-4" :href="route('forSale')">For Sale</Link>
                        <Link class="col-4" :href="route('forShortlet')">Shortlets</Link>
                        <Link class="col-4" :href="route('agencies')">Agencies</Link>
                        <Link class="col-4" :href="route('agents')">Agents</Link>
                        <Link class="col-4" :href="route('requests')">Requests</Link>    
                        <Link class="col-4" :href="route('about')">About Us</Link>
                        <Link class="col-4" :href="route('faq')">Faq</Link>
                        <Link class="col-4" :href="route('contact')">Contact Us</Link>
                        
                    
                        <Link class="col-4" v-if="!$page.props.auth.user" :href="route('register')">Register</Link>
                        <Link class="col-4 d-none d-xl-none d-block d-lg-block" v-if="!$page.props.auth.user" :href="route('login')">Login</Link>
                        <Link class="col-4 d-none d-xl-none d-block d-lg-block" v-if="!$page.props.auth.user" :href="route('register')">Register</Link>
                        <Link class="col-4 d-none d-xl-none d-block d-lg-block"  v-if="$page.props.auth.user" :href="route('logout')" method="post" as="button">Log Out</Link>
                        <Link class="ui-elements">
                            <div class="checkbox-option pull-right mt-2" :class="{'checked': isChecked == true}" @click="handleColorChange.darkMode">
                                <div class="inner" :class="{'checked': isChecked == true}"></div>
                                <input type="checkbox" name="checkbox" value="Checkbox" :class="{'checked': isChecked == true}" />
                            </div>
                        </Link>
                        
                    </div>



                </div>
            </div>
            
        </div>
    </div>
    <div class="dash-content-wrap">
        <header id="header-container" class="db-top-header">
            <!-- Header -->
            <div id="header">
                <div class="container-fluid">
                    <!-- Left Side Content -->
                    <div class="left-side">
                        <!-- Logo -->
                        <div id="logo">
                            <Link :href="route('home')"><img src="/images/logo.svg" alt=""></link>
                        </div>
                        <!-- Mobile Navigation -->
                        <div class="mmenu-trigger" @click="launchMobileNav">
                            <button class="hamburger hamburger--collapse" type="button">
                                <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                        <!-- Main Navigation -->
                        <nav id="navigation" class="style-1">
                            <ul id="responsive" v-if="$page.props.auth.user.category == 'agent'">
                                <li><Link :href="route('home')">Home</Link></li>
                                <li><Link :href="route('profile')">Profile</Link></li>
                                <li><Link :href="route('myProperties')">My properties</Link></li>
                                <li><Link :href="route('bookmarks')">Favourites</Link></li>
                                    
                                <li class="d-none d-xl-none d-block d-lg-block"><Link as="button" :href="route('logout')" method="post">Log Out</Link></li>
                            </ul>
                            <ul id="responsive" v-if="$page.props.auth.user.category == 'agency'">
                                <li><Link :href="route('home')">Home</Link></li>
                                <li><Link :href="route('profile')">Profile</Link></li>
                                <li><Link :href="route('agencyProperties')">My properties</Link></li>
                                <li class="d-none d-xl-none d-block d-lg-block"><Link as="button" :href="route('logout')" method="post">Log Out</Link></li>
                            </ul>
                             <ul id="responsive" v-if="$page.props.auth.user.category == 'customer'">
                                <li><Link :href="route('home')">Home</Link></li>
                                <li><Link :href="route('profile')">Profile</Link></li>
                                <li><Link :href="route('bookmarks')">Favourites</Link></li>
                                <li class="d-none d-xl-none d-block d-lg-block"><Link as="button" :href="route('logout')" method="post">Log Out</Link></li>
                            </ul>
                        </nav>
                        <!-- Main Navigation / End -->
                    </div>
                    <!-- Left Side Content / End -->
                    <!-- Right Side Content / --> 
                    <div class="header-user-menu user-menu">
                        <div class="header-user-name">
                            <span><img :src="`/photos/${ $page.props.auth.user.image}`" alt=""></span>{{ $page.props.auth.user.name.slice(0,6) + '..' }}!
                        </div>
                        <ul>
                            <li><Link class="pl-3" :href="route('logout')" method="post" as="button">Log Out</Link></li>
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
<style scoped>

@media screen and (max-width:1024px) {
    .offcanvas a, a:active,a:focus,a:visited{
        color: #fff !important;
    }

    .offcanvas{
        position: fixed !important;
        min-height: 100vmax;
        background: #212529 !important;
        z-index: 999999999999999999999999999999999 !important;
        width: 100% !important;
        max-width: 100%;
        color: #fff !important;
    }

    .offcanvas-body{
        position: relative !important;
    }

    .tab-content{
        position: absolute !important;
        min-height: 80vmax !important;
        height: 80vmax !important;
        overflow-y: auto !important;
        width: 100%;
        padding-left: 5px;
        margin-top: 1.5rem;
        overflow-y: hidden !important;
    }

    .offcanvas-header{
        min-height: 3rem;
    }

    .offcanvas-header a{
        float: right;
        margin-right: 1rem;
        font-size: 1.5rem;
        color: #fff !important;
    }

    .offcanvas-body .tab-pane .row{
        
        row-gap: 2em !important;
    }


    .offcanvas-body .tab-pane .row a:hover,a:focus,a:active{
        background: var(--BGCOLOR) !important;
    }

    .checkbox-options{
        color: #fff !important;
    }

    #offcanvasNavbar .ui-elements div{
        background: #fff !important;
        background-color: #fff !important;
        padding: 0 !important;
    }
    
}


</style>