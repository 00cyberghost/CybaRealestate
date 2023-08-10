<script setup>
defineProps({
    props: String
})
let date = new Date;
let year = date.getFullYear()
</script>

<template>
    <!-- START FOOTER -->
    <footer class="first-footer" :class="{'d-none': props == 'yes'}">
        <div class="top-footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg col-xl">
                        <div class="netabout">
                            <a href="index.html" class="logo">
                                <img src="images/logo-black.svg" alt="netcom">
                            </a>
                            <p>Cybaghost Realestate.</p>
                        </div>
                        <div class="contactus">
                            <ul>
                                <li>
                                    <div class="info">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <p class="in-p">Justine Lodge, Ihiagwa, Imo state, Nigeria</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="info">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <p class="in-p"><a href="tel:09061495389">+234 9061495389</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="info">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <p class="in-p ti">00cybaghost@gmail.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg col-xl">
                        <div class="navigation">
                            <h3>Navigation</h3>
                            <div class="nav-footer">
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/search?category=sale&location=&type=&subtype=&minprice=&maxprice=&ref=&bedroom=0&bathroom=0&parking=0&area=&unit=">For Sale</Link></li>
                                    <li><Link href="/search?category=rent&location=&type=&subtype=&minprice=&maxprice=&ref=&bedroom=0&bathroom=0&parking=0&area=&unit=">For Rent</Link></li>
                                    <li><Link href="/search?category=shortlet&location=&type=&subtype=&minprice=&maxprice=&ref=&bedroom=0&bathroom=0&parking=0&area=&unit=">Shortlets</Link></li>
                                    <li class="no-mgb"><Link href="/location/Abuja">Lagos</Link></li>
                                </ul>
                                <ul class="nav-right">
                                    <li><Link href="/agencies">Agencies</Link></li>
                                    <li><Link href="/agents">Agents</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/faq">Faq</Link></li>
                                    <li class="no-mgb"><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg col-xl">
                        <div class="newsletters">
                            <h3>Newsletters</h3>
                            <p>Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.</p>
                        </div>
                        <form class="bloq-email mailchimp form-inline" @submit.prevent="" method="post">
                            <label for="subscribeEmail" class="error"></label>
                            <div class="email">
                                <input type="email" id="subscribeEmail" name="EMAIL" placeholder="Enter Your Email">
                                <input type="submit" value="Subscribe">
                                <p class="subscription-success"></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="second-footer">
            <div class="container-fluid">
                <p>2023 - {{ year }} © Copyright - All Rights Reserved.</p>
                <p>Made With <i class="fa fa-heart" aria-hidden="true"></i><a target="_blank" href="https://cybaghost.com.ng"> by Cybaghost Technologies</a></p>
                <ul class="netsocials">
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>

    <a data-scroll href="#wrapper" class="go-up"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
    <!-- END FOOTER -->
</template>
