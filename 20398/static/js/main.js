/**
*
* -----------------------------------------------------------------------------
*
* Budget - Responsive Landing HTML5 Template
* Author : thecodude
* Author URI : http://thecodude.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {

    "use strict";

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 80) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

    // scrollTop init
    var totop = $('#toTop');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });

    // totop scroller
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    // Magnific Pop up js (Home Video)
    if ($("#play-home-video").length) {
        $("#play-home-video").magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    }

    $('.mobile-menu-icon').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.menu-bar .mainmenu').slideToggle();
    });

    // Banner Slider
    if ($('.banner-slider').length) {
        // Banner Slider
        $('.banner-slider').owlCarousel({
            loop:true,
            items:1,
            margin:30,
            autoplay:true,
            slideSpeed : 300,
            nav:false,
            dots:true
        })

    }

    // Testimonial Slider
    if ($('.testi-slider').length) {
        // Testimonial Slider
        $('.testi-slider').owlCarousel({
            loop:true,
            items:2,
            margin:20,
            autoplay:true,
            slideSpeed : 300,
            nav:false,
            dots:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                992:{
                    items:2,
                },
            }
        })
    }

    // Feature Slider
    if ($('.feature-slider').length) {
        // Destination Slider
        $('.feature-slider').owlCarousel({
            loop:true,
            items:3,
            margin:20,
            autoplay:false,
            slideSpeed : 300,
            nav:true,
            dots:false,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
            }
        })
    }

    // Team Slider
    if ($('.team-slider').length) {
        // Destination Slider
        $('.team-slider').owlCarousel({
            loop:true,
            items:3,
            margin:20,
            autoplay:false,
            slideSpeed : 300,
            nav:true,
            dots:false,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
            }
        })
    }

    // Blog Slider
    if ($('.blog-slider').length) {
        // Destination Slider
        $('.blog-slider').owlCarousel({
            loop:true,
            items:3,
            margin:30,
            autoplay:true,
            slideSpeed : 300,
            nav:false,
            dots:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:3,
                },
            }
        })
    }

    // Post Slider
    if ($(".related_post_slide").length) {
        $(".related_post_slide").owlCarousel({
            items: 2,
            loop: true,
            dots: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 500,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
            }
        });
    }
	
})(jQuery);
