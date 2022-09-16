<script setup>

</script>

<template>
    <div class="col-lg-12 mobile-dashbord dashbord">
        <div class="dashboard_navigationbar dashxl">
            <div class="dropdown">
                <button onclick="myFunction()" class="dropbtn"><i class="fa fa-bars pr10 mr-2"></i> Dashboard Navigation</button>
                <ul id="myDropdown" class="dropdown-content">
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
