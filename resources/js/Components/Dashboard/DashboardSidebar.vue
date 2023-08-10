<script setup>
import { onMounted,onUnmounted } from 'vue'

// onMounted(() => {

//     //add some classes to the body tag. these classes are used to track page responsiveness
//     $('body').addClass('maxw1600 m0a dashboard-bd');
   

// })

// //when the component is unmounted
// onUnmounted(() => {
//     //remove the classes that was added to the body tag during component mounting
//     $('body').removeClass('maxw1600 m0a dashboard-bd');
// })

</script>
<template>
    <div class="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
        <div class="user-profile-box mb-0" :class="{scrollableSidebar: $page.props.auth.user.category == 'agent'}">
            <Link :href="route('home')"><div class="sidebar-header"><img src="/images/logo-blue.svg" alt="header-logo2.png"> </div></Link>
            <div class="header clearfix">
            <img :src="`/photos/${$page.props.auth.user.image}`" alt="avatar" class="img-fluid profile-img">
            </div>
            <div class="active-user">
                <h2>{{ $page.props.auth.user.name }}</h2>
            </div>
            <div v-if="$page.props.auth.user.category == 'agent'" class="detail clearfix">
                <ul class="mb-0">
                    <li v-if="$page.props.auth.user.role_id == 2">
                        <Link :href="route('showPendingProperties')" :class="{'active': $page.component == 'Dashboard/PendingProperties'}">
                            <i class="far fa-clock"></i> Pending Properties
                        </Link>
                    </li>
                    <li v-if="$page.props.auth.user.role_id == 3">
                        <Link :href="route('showPendingProperties')" :class="{'active': $page.component == 'Dashboard/PendingProperties'}">
                            <i class="far fa-clock"></i> Pending Properties
                        </Link>
                    </li>
                    <li v-if="$page.props.auth.user.role_id == 3">
                        <Link :href="route('showDeletedProperties')" :class="{'active': $page.component == 'Dashboard/DeletedProperties'}">
                            <i class="fa fa-trash"></i> Deleted Properties
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('dashboard')" :class="{'active': $page.component == 'Dashboard/Dashboard'}">
                            <i class="fa fa-tachometer"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('profile')" :class="{'active': $page.component == 'Dashboard/Profile'}">
                            <i class="fa fa-user"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('myProperties')" :class="{'active': $page.component == 'Dashboard/MyProperties'}">
                            <i class="fa fa-list" aria-hidden="true"></i>My Properties
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('bookmarks')" :class="{'active': $page.component == 'Dashboard/Bookmarks'}">
                            <i class="fa fa-heart" aria-hidden="true"></i>Favorited Properties
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('addProperty')" :class="{'active': $page.component == 'Dashboard/AddProperty'}">
                            <i class="fas fa-laptop-house" aria-hidden="true"></i>Add Property
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('myAlerts')" :class="{'active': $page.component == 'Dashboard/MyAlerts'}">
                            <i class="fas fa-bell"></i>Alerts
                        </link>
                    </li>
                    <li>
                        <Link :href="route('myRequests')" :class="{'active': $page.component == 'Dashboard/MyRequests'}">
                            <i class="fas fa-list"></i>Request
                        </link>
                    </li>
                    <li>
                        <Link :href="route('logout')" method="post" as="button">
                            <i class="fas fa-sign-out-alt"></i>Log Out
                        </Link>
                    </li>
                </ul>
            </div>
            <div v-if="$page.props.auth.user.category == 'agency'" class="detail clearfix">
                <ul class="mb-0">
                    <li v-if="$page.props.auth.user.role_id == 2">
                        <Link :href="route('showPendingProperties')" :class="{'active': $page.component == 'Dashboard/PendingProperties'}">
                            <i class="far fa-clock"></i> Pending Properties
                        </Link>
                    </li>
                    <li v-if="$page.props.auth.user.role_id == 3">
                        <Link :href="route('showPendingProperties')" :class="{'active': $page.component == 'Dashboard/PendingProperties'}">
                            <i class="far fa-clock"></i> Pending Properties
                        </Link>
                    </li>
                    <li v-if="$page.props.auth.user.role_id == 3">
                        <Link :href="route('showDeletedProperties')" :class="{'active': $page.component == 'Dashboard/DeletedProperties'}">
                            <i class="fa fa-trash"></i> Deleted Properties
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('dashboard')" :class="{'active': $page.component == 'Dashboard/AgencyDashboard'}">
                            <i class="fa fa-tachometer"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('profile')" :class="{'active': $page.component == 'Dashboard/Profile'}">
                            <i class="fa fa-user"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('agencyProperties')" :class="{'active': $page.component == 'Dashboard/AgencyProperties'}">
                            <i class="fa fa-list" aria-hidden="true"></i>My Properties
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('logout')" method="post" as="button">
                            <i class="fas fa-sign-out-alt"></i>Log Out
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>

    /* making dashboard sidebar scrollable */
    .scrollableSidebar{
        overflow:scroll;
        overflow-x:hidden;
    }
</style>
