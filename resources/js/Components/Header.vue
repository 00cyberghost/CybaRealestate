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
        // handleColorChange.changeColor('light-purple')
        //add some classes to the body tag. these classes are used to track page responsiveness
        $('body').addClass('maxw1600 m0a homepage-2 the-search hd-white');
        $('#dashboard-style').remove();
        $('#wrapper').removeClass('int_main_wraapper');
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
    <div class="d-none offcanvas p-3" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <a href="#" @click="removeMobileNav"><i class="fas fa-times"></i></a>    
        </div>
        <div class="offcanvas-body">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                </li>
                <li v-if="$page.props.auth.user" class="nav-item" role="presentation">
                    <button class="nav-link" id="dashboard-tab" data-toggle="tab" data-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <div class="row">
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
                        <Link class="col-4"  v-if="$page.props.auth.user" :href="route('dashboard')">Dashboard</Link>
                    
                        <Link class="col-4" v-if="!$page.props.auth.user" :href="route('register')">Register</Link>
                        <Link class="col-4 d-none d-xl-none d-block d-lg-block" v-if="!$page.props.auth.user" :href="route('login')">Login</Link>
                        <Link class="col-4 d-none d-xl-none d-block d-lg-block" v-if="!$page.props.auth.user" :href="route('register')">Register</Link>
                        <Link class="col-4 d-none d-xl-none d-block d-lg-block"  v-if="$page.props.auth.user" :href="route('logout')" method="post" as="button">Log Out</Link>
                        <Link class="ui-elements col-6">
                            <div class="checkbox-option pull-right mt-2" :class="{'checked': isChecked == true}" @click="handleColorChange.darkMode">
                                <div class="inner" :class="{'checked': isChecked == true}"></div>
                                <input type="checkbox" :class="{'checked': isChecked == true}" class="ao" name="checkbox" value="Checkbox" />
                            </div>
                        </Link>
                        <div v-if="$page.props.auth.user">
                        <Link v-if="$page.props.auth.user.category == 'agent'" :href="route('addProperty')" class="button border btn-lg btn-block text-center d-none d-xl-none d-block d-lg-block mt-1 pb-4 ml-5 border-bottom-0">Add Listing<i class="fas fa-laptop-house ml-2"></i></Link>
                        </div>
                        
                    </div>



                </div>
                <div v-if="$page.props.auth.user" class="tab-pane fade" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <div class="row" v-if="$page.props.auth.user.category == 'agent'">
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
                                <div class="inner"></div>
                                <input type="checkbox" name="checkbox" value="Checkbox" />
                            </div>
                        </Link>
                        <Link :href="route('addProperty')" class="button border btn-lg btn-block text-center d-none d-xl-none d-block d-lg-block mt-1 pb-4 ml-5 border-bottom-0">Add Listing<i class="fas fa-laptop-house ml-2"></i></Link> 
                    </div>

                    <div class="row" v-if="$page.props.auth.user.category == 'agency'">
                        <Link class="col-6" :href="route('dashboard')">Dashboard</Link>
                        <Link class="col-6" :href="route('profile')">Profile</Link>
                        <Link class="col-6 truncate" :href="route('agencyProperties')">My Properties</Link>
                        <Link class="col-6" :href="route('logout')" method="post">Log Out</Link>
                        <Link class="ui-elements col-6">
                            <div class="checkbox-option pull-right mt-2" :class="{'checked': isChecked == true}" @click="handleColorChange.darkMode">
                                <div class="inner"></div>
                                <input type="checkbox" name="checkbox" value="Checkbox" />
                            </div>
                        </Link>
                    </div>
                    <div class="row" v-if="$page.props.auth.user.category == 'customer'">
                        <Link class="col-6" :href="route('dashboard')">Dashboard</Link>
                        <Link class="col-6" :href="route('profile')">Profile</Link>
                        <Link class="col-6 truncate" :href="route('bookmarks')">My Favourites</Link>
                        <Link class="col-6 truncate" :href="route('myAlerts')">My Property Alerts</Link>
                        <Link class="col-6 truncate" :href="route('myRequests')">My Property Requests</Link>
                        <Link class="col-6" :href="route('logout')" method="post">Log Out</Link>
                        <Link class="ui-elements col-6">
                            <div class="checkbox-option pull-right mt-2" :class="{'checked': isChecked == true}" @click="handleColorChange.darkMode">
                                <div class="inner"></div>
                                <input type="checkbox" name="checkbox" value="Checkbox" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
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
                    <div class="mmenu-trigger" @click="launchMobileNav">
                        <button class="hamburger hamburger--collapse" type="button">
                            <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <!-- Main Navigation -->
                    <nav id="navigation" class="style-1">
                        <ul id="responsive">
                            <li><Link :href="route('forRent')">Rent</Link></li>
                            <li><Link :href="route('forSale')">Sale</Link></li>
                            <li><Link :href="route('forShortlet')">Shortlets</Link></li>
                            <li>
                                <a>Agencies</a>
                                <ul>
                                    <li><Link :href="route('agencies')">Agencies</Link></li>
                                    <li><Link :href="route('agents')">Agents</Link></li>
                                    <li><Link :href="route('about')">About Us</Link></li>
                                    <li><Link :href="route('faq')">Faq</Link></li>
                                    <li><Link :href="route('contact')">Contact Us</Link></li>
                                </ul>
                            </li>
                            <li><Link :href="route('requests')">Requests</Link></li>
                            <li v-if="$page.props.auth.user">
                                <a>Dashboard</a>
                                <ul v-if="$page.props.auth.user.category == 'agent'">
                                    <li v-if="$page.props.auth.user.role_id > 1"><Link :href="route('showPendingProperties')">Pending Properties</Link></li>
                                    <li><Link :href="route('dashboard')">Dashboard</Link></li>
                                    <li><Link :href="route('profile')">Profile</Link></li>
                                    <li><Link :href="route('myProperties')">My Properties</Link></li>
                                    <li><Link :href="route('bookmarks')">My Favourites</Link></li>
                                    <li><Link :href="route('myAlerts')">My Property Alerts</Link></li>
                                    <li><Link :href="route('myRequests')">My Property Requests</Link></li>
                                </ul>
                                <ul v-if="$page.props.auth.user.category == 'agency'">
                                    <li v-if="$page.props.auth.user.role_id > 1"><Link :href="route('showPendingProperties')">Pending Properties</Link></li>
                                    <li><Link :href="route('dashboard')">Dashboard</Link></li>
                                    <li><Link :href="route('profile')">Profile</Link></li>
                                    <li><Link :href="route('myProperties')">My Properties</Link></li>
                                </ul>
                            </li>
                            <li v-else><Link :href="route('register')">Register</Link></li>
                            <li v-if="!$page.props.auth.user" class="d-none d-xl-none d-block d-lg-block"><Link :href="route('login')">Login</Link></li>
                            <li v-if="!$page.props.auth.user" class="d-none d-xl-none d-block d-lg-block"><Link :href="route('register')">Register</Link></li>
                            <li v-if="$page.props.auth.user" class="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0"><Link :href="route('addProperty')" class="button border btn-lg btn-block text-center">Add Listing<i class="fas fa-laptop-house ml-2"></i></Link></li>
                            <li class="ui-elements">
                                <div class="checkbox-option pull-right mt-2" :class="{'checked': isChecked == true}" @click="handleColorChange.darkMode">
                                    <div class="inner" @click="handleColorChange.darkMode"></div>
                                    <input type="checkbox" name="checkbox" value="Checkbox" />
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <!-- Main Navigation / End -->
                </div>
                <!-- Left Side Content / End -->

                <!-- Right Side Content / End -->
                <div class="right-side d-none d-none d-lg-none d-xl-flex">
                    <!-- Header Widget -->
                    <div class="header-widget" v-if="!$page.props.auth.user">
                        <Link :href="route('login')" class="button border b-primary">Add Listing<i class="fas fa-laptop-house ml-2"></i></Link>
                    </div>
                    <div class="header-widget" v-else>
                        <Link v-if="$page.props.auth.user.category == 'agent'" :href="route('addProperty')" class="button border b-primary">Add Listing<i class="fas fa-laptop-house ml-2"></i></Link>
                    </div>
                    <!-- Header Widget / End -->
                </div>
                <!-- Right Side Content / End -->

                <!-- Right Side Content / End -->
                <div class="header-user-menu user-menu add" v-if="$page.props.auth.user">
                    <div class="header-user-name">
                        <span><img :src="`/photos/${ $page.props.auth.user.photo}`" alt=""></span><em v-if="$page.props.auth.user">{{$page.props.auth.user.name.slice(0,6) + '..'}}</em><em v-else>Guest !</em>
                    </div>
                    <ul>
                        <li v-if="$page.props.auth.user"><Link :href="route('profile')">My Profile</Link></li>
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





.mt-2{
    margin-top: 10px !important;
}
</style>