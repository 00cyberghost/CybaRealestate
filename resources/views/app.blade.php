<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XZ2VGR42XZ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-XZ2VGR42XZ');
</script>
    @routes
    @vite('resources/js/app.js')
    @inertiaHead
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="robots" content="index, follow" />
	<meta name="keywords" content="property for sale in ikeja, property for sale in lekki, property for sale in ajah, property for sale in surulere, property for sale in maryland, property for sale in yaba, property for sale in victoria island, property for sale in ojota, property for sale in mende, property for sale in ojodu, property for sale in ogudu, property for sale in anthony village, property for sale in lagos, house for sale in surulere, house for sale in lekki, house for sale in ikeja, house for sale in yaba, real estate agent in lagos, house for sale in ikoyi, house for sale in ojota, house for sale shomolu, house for sale in ketu, house for sale in lagos, real estate in nigeria, flat for sale in lagos, land for sale in lagos, duplex for sale in lagos, office space for sale in lagos, house for sale in berger, nigeria property website, duplex for sale in lagos, house for sale in banana island, real estate agents in lagos, house for sale in nigeria" />
    <meta name="author" content="<?php echo 'https://'.$_SERVER['SERVER_NAME'] ?>" />
    <meta id="ogurl" property="og:url" content="<?php echo 'https://'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'] ?>" />
    <meta id="ogimage" property="og:image" content="<?php echo 'https://'.$_SERVER['SERVER_NAME'] ?>/images/logo.svg" />
    <meta id="ogtitle" property="og:title" content="Property for rent,sale and shortlet" />
    <meta id="ogtype" property="og:type" content="website" />
    <meta id="ogdescription" property="og:description" content="property for sale in ikeja, property for sale in lekki, property for sale in ajah, property for sale in surulere, property for sale in maryland, property for sale in yaba, property for sale in victoria island, property for sale in ojota, property for sale in mende, property for sale in ojodu, property for sale in ogudu, property for sale in anthony village, property for sale in lagos, house for sale in surulere, house for sale in lekki, house for sale in ikeja, house for sale in yaba, real estate agent in lagos, house for sale in ikoyi, house for sale in ojota, house for sale shomolu, house for sale in ketu, house for sale in lagos, real estate in nigeria, flat for sale in lagos, land for sale in lagos, duplex for sale in lagos, office space for sale in lagos, house for sale in berger, nigeria property website, duplex for sale in lagos, house for sale in banana island, real estate agents in lagos, house for sale in nigeria" />
    <meta id="twittercard" name="twitter:card" content="summary_large_image">
    <meta id="twittersite" name="twitter:site" content="">
    <meta id="twittercreator" name="twitter:creator" content="">
    <meta id="twitterimage" name="twitter:image" content="" />
    <meta id="twittertitle" name="twitter:title" content="" />
    <meta id="twitterdescription" name="twitter:description" content="">
    <!-- FAVICON -->
    <link rel="shortcut icon" type="image/x-icon" href="/images/logo.svg">
    
    <link rel="shortcut icon" type="image/x-icon" href="/images/logo.svg">
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
    <link rel="stylesheet" href="css/search.css">
    <link rel="stylesheet" href="/css/dropzone.css">
    <link rel="stylesheet" href="/css/nice-select2.css" id="search-form">
    <link rel="stylesheet" href="/css/magnific-popup.css">
    <link rel="stylesheet" href="/css/owl.carousel.min.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/menu.css">
    <link rel="stylesheet" href="/css/slick.css">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" id="color" href="css/colors/colors.css">
    <link rel="stylesheet" id="mode">
    <script>
        setTimeout(() => {
            let color = localStorage.getItem('theme-color')
            if(color != null) document.body.setAttribute('id',color)
            let item = localStorage.getItem('dark-mode')
            if(item != null) document.getElementById('mode').setAttribute('href','css/colors/dark-mode.css')                
            
        }, 1000)
    </script>
    <script>
        // setTimeout(() => {
        //     //write the theme color to localstorage
        //     const storeThemeColor = (theme) => localStorage.setItem('theme-color',theme)

        //     //get the theme color from local storage
        //     const getThemeColor = () => localStorage.getItem('theme-color')

        //     //set the theme color
        //     const setThemeColor = () => {
                
        //         //first get the color from local storage
        //         let color = getThemeColor()
                
        //         //set the theme color by giving the document body an id
        //         document.body.setAttribute('id',color)
        //     }
        //     storeThemeColor('yellow')
            
        // }, 2000)
    </script>
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
    <script src="/js/slick.min.js"></script>
    <script src="/js/slick2.js"></script>
    <script src="/js/fitvids.js"></script>
    <script src="/js/smooth-scroll.min.js"></script>
    <script src="/js/jquery.barfiller.js"></script>
    <script src="/js/owl.carousel.js"></script>
    <script src="/js/jquery.magnific-popup.min.js"></script>
    <script src="/js/dropzone.js"></script>
    <script src="/js/ui-lement.js"></script>
    <script src="/js/nice-select2.js"></script>      
    <!-- MAIN JS -->
    <script src="/js/script.js"></script>

</body>
</html>
