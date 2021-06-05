/* ===================================================================
    Author          : CreandyStudio
    Template Name   : Donto - Creative Dentist & Medical Landing page
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', function() {


    // Preloading
    $(window).on('load', function() {
        // Animate loader off screen
        $(".pre-loader").delay(500).fadeOut();
    });

    // aos int
     AOS.init();


    /*==================================
     # home page one - slide Item Carousel 
     ==================================*/
    $('.clients-nav-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.clients-review-list'
    });

    $('.clients-review-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.clients-nav-list',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        prevArrow: '<i class="fal fa-arrow-left"></i>',
        nextArrow: '<i class="fal fa-arrow-right"></i>',
    });   


    $('.our-specialist-list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
        ],
        prevArrow: '<i class="fal fa-arrow-left"></i>',
        nextArrow: '<i class="fal fa-arrow-right"></i>',
    });    


    /*==================================
     # home page two - Testimonial  
     ==================================*/
    $('.testimonail-patients-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.patients-review-items'
    });

    $('.patients-review-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonail-patients-list',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        prevArrow: '<i class="fal fa-arrow-left"></i>',
        nextArrow: '<i class="fal fa-arrow-right"></i>',
    });    



    /* ==================================
     # Logo carousel active
    ===================================== */
     $(".brand-logo-carousel").owlCarousel({
        loop:true,
        margin: 30,
        nav: false,
        dots: false,
        autoplayTimeout:5000,
        autoplay:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            },
            // breakpoint from 992 up
            992 : {
                items: 4
            }
        }
     });

    /* ==================================
     # Blog Two  carousel active
    ===================================== */
     $(".blog-two-carousel-active").owlCarousel({
        loop:true,
        nav: false,
        dots: false,
        autoplayTimeout:5000,
        autoplay:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 1,
                center:true,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
                margin: 30

            },
            // breakpoint from 992 up
            992 : {
                items: 2
            },
            // breakpoint from 992 up
            1200 : {
                items: 3,
                margin: 30
            }
        }
     });


    /*==========================
       Count up init
    ============================*/
    $('.single-funfact span, .single-round-box span, .single-am-funfact span, .single-funfact-one span').counterUp({
        delay: 20,
        time: 3500
    });


    /* =============================================
        # Magnific popup init
     ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

    /*==================================
     # meanmenu active - mobile menu 
     ==================================*/
    $('#responsive-menu').meanmenu({
        meanMenuContainer: '.responsive-menu',
        meanScreenWidth: "991"
    });


    /*==========================
       Scroll To Up init
    ============================*/
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '1110', // Distance from top before showing element (px)
      topSpeed: 2000, // Speed back to top (ms)
      animation: 'slide', // Fade, slide, none
      animationInSpeed: 300, // Animation in speed (ms)
      animationOutSpeed: 300, // Animation out speed (ms)
      scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });


    // Sticky Menu
    $(window).scroll(function(){
      var Width = $(document).width();

        if($("body").scrollTop() > 100 || $("html").scrollTop() > 100 ) {
          if (Width > 767 ) {
            $(".header-one, .header-two").addClass("sticky");
          }
        } else {
            $(".header-one, .header-two").removeClass("sticky");
        }
    });



    }); // end document ready function
})(jQuery); // End jQuery

