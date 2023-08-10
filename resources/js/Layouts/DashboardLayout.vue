<script setup>
    import DashboardMobilebar from "@/Components/Dashboard/DashboardMobilebar.vue";
    import DashboardHeader from "@/Components/Dashboard/DashboardHeader.vue";
    import DashboardSidebar from "@/Components/Dashboard/DashboardSidebar.vue";
    import DashboardPagination from "@/Components/Dashboard/DashboardPagination.vue";
    import DashboardFooter from "@/Components/Dashboard/DashboardFooter.vue";



    //launch mobile nav bar
    const launchMobileNav = () => document.getElementById('offcanvasNavbar').classList.remove('d-none')

    defineProps({
        
        props: Object
    })
</script>

<template>
<!-- Dashboard header -->
<DashboardHeader />


<!-- START SECTION DASHBOARD -->
<section class="user-page section-padding">
    <div class="container-fluid">
        <div class="row">

            <!--dashboardsidebar-->
            <DashboardSidebar />
            <!--dashboardsidebar---->

            <div class="col-lg-9 col-md-12 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2">

               

                <!-- injected content goes here -->
                <slot @close="initiateDelete" />
                
                
                
            
                <!--pagination-->
                <div v-if="props">
                    <DashboardPagination v-if="props.property" :paginations="props.property.links" />
                    <DashboardPagination v-else-if="props.links" :paginations="props.links" />
                </div>
                
                <!--pagination ends-->

                <!-- START FOOTER -->
                <div v-if="$page.component == 'Dashboard/DeletedProperties'"></div>
                <DashboardFooters v-else-if="$page.component != 'Dashboard/PendingProperties'" />
                
               
            </div>
        </div>
    </div>
</section>
<!-- END SECTION DASHBOARD -->

<a data-scroll href="#wrapper" class="go-up"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
<!-- END FOOTER -->

<!-- Mobile app footer -->
<div class="appFooter" id="appFooter" :class="{'d-none': isApp != 'yes'}">
    <div class="row">
        <div class="col-3" :class="{'active': $page.component == 'Home'}">
            <Link href="/">
                <i class="fas fa-home"></i><br>
                <span>Home</span>
            </Link>
        </div>
        <div class="col-3" :class="{'active': $page.component == 'Dashboard/Bookmarks'}">
            <Link :href="route('bookmarks')">
                <i class="fas fa-heart"></i><br>
                <span>Favourites</span>
            </Link>
        </div>
        <div class="col-3" :class="{'active': $page.component == 'Dashboard/AddProperty'}">
            <Link :href="route('addProperty')">
                <i class="fas fa-laptop-house"></i><br>
                <span>Add</span>
            </Link>
        </div>
        <div class="col-3">
            <a href="#" @click="launchMobileNav">
                <i class="fa fa-list"></i><br>
                <span>Menu</span>
            </a>
        </div>
    </div>
</div>
</template>