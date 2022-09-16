<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="html 5 template">
    <meta name="author" content="">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <!-- FAVICON -->
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    @routes
        @vite('resources/js/app.js')
        @inertiaHead
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="/css/jquery-ui.css">
    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i%7CMontserrat:600,800" rel="stylesheet">
    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="/font/flaticon.css">
    <link rel="stylesheet" href="/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="/css/fontawesome-5-all.min.css">
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <!-- ARCHIVES CSS -->
    <link rel="stylesheet" href="/css/search-form.css">
    <link rel="stylesheet" href="/css/nice-select2.css" id="search-form">
    <link rel="stylesheet" href="/css/animate.css">
    <link rel="stylesheet" href="/css/magnific-popup.css">
    <link rel="stylesheet" href="/css/lightcase.css">
    <link rel="stylesheet" href="/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/menu.css">
    <link rel="stylesheet" href="/css/slick.css">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" id="color" href="/css/colors/dark-gray.css">
</head>

<body>
    <!-- Page Wrapper -->
    <div id="wrapper">

        @inertia


        <!-- START PRELOADER -->
        <!-- <div id="preloader">
            <div id="status">
                <div class="status-mes"></div>
            </div>
        </div> -->
        <!-- END PRELOADER -->

        <!-- ARCHIVES JS -->
       


    </div>
    <!-- page wrapper end -->

    <!-- ARCHIVES JS -->
    <script src="/js/jquery-3.5.1.min.js"></script>
    <script src="/js/tether.min.js"></script>
    <script src="/js/moment.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/mmenu.min.js"></script>
    <script src="/js/mmenu.js"></script>
    <script src="/js/aos.js"></script>
    <script src="/js/aos2.js"></script>
    <script src="/js/slick.min.js"></script>
    <script src="/js/slick2.js"></script>
    <script src="/js/fitvids.js"></script>
    <script src="/js/jquery.waypoints.min.js"></script>
    <script src="/js/jquery.counterup.min.js"></script>
    <script src="/js/imagesloaded.pkgd.min.js"></script>
    <script src="/js/isotope.pkgd.min.js"></script>
    <script src="/js/smooth-scroll.min.js"></script>
    <script src="/js/lightcase.js"></script>
    <script src="/js/jquery.barfiller.js"></script>
    <script src="/js/owl.carousel.js"></script>
    <script src="/js/jquery.magnific-popup.min.js"></script>
    <script src="/js/ajaxchimp.min.js"></script>
    <script src="/js/newsletter.js"></script>
    <script src="/js/jquery.form.js"></script>
    <script src="/js/jquery.validate.min.js"></script>
    <script src="/js/dashbord-mobile-menu.js"></script>
    <script src="/js/forms-2.js"></script>
    <script src="/js/range.js"></script>
    <script src="/js/color-switcher.js"></script>
    <script src="/js/dropzone.js"></script>
    <script src="/js/ui-lement.js"></script>
    <script src="/js/nice-select2.js"></script>      
    <script src="/tinymce/tinymce.min.js" id="mice"></script>
    
    

        
        <!-- Slider Revolution scripts -->
        <script src="/revolution/js/jquery.themepunch.tools.min.js"></script>
        <script src="/revolution/js/jquery.themepunch.revolution.min.js"></script>

        <!-- MAIN JS -->
        <script src="/js/script.js"></script>

</body>
</html>
