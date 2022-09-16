<script setup>
import { Head,Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <div class="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
        <div class="user-profile-box mb-0">
            <Link :href="route('home')"><div class="sidebar-header"><img src="/images/logo-blue.svg" alt="header-logo2.png"> </div></Link>
            <div class="header clearfix">
            <img src="/images/testimonials/ts-1.jpg" alt="avatar" class="img-fluid profile-img">
            </div>
            <div class="active-user">
                <h2>Mary Smith</h2>
            </div>
            <div class="detail clearfix">
                <ul class="mb-0">
                    <li>
                        <Link :href="route('dashboard')" :class="{'active': $page.component == 'Dashboard/Dashboard'}">
                            <i class="fa fa-map-marker"></i> Dashboard
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
        </div>
    </div>
</template>
