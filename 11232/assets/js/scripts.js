(function ($) {
    "use strict";

    /*================================
    Preloader
    ==================================*/
    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () { $(this).remove(); });
    });

    /*================================
    stickey Header
    ==================================*/
    $(window).on('load', function () {
        var bottomHeader = $('.header-bottom'),
            headerWrapper = $('.header-bottom-wrapper'),
            headerHeight = bottomHeader.innerHeight();
        headerWrapper.css({ height: `${headerHeight}px` });
    })

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            mainHeader = $('.header-bottom'),
            topHeader = $('.header-top'),
            topHeaderHeight = topHeader.innerHeight();

        if (scroll > topHeaderHeight) {
            mainHeader.addClass("sticky-menu");
        } else {
            mainHeader.removeClass("sticky-menu");
        }

        // execute progressbar
        if ($('.dc-skills').length) {
            var wScroll = $(this).scrollTop();
            if (wScroll > $('.dc-skills').offset().top - ($(window).height() / 1.2)) {

                $('.progress-bar').each(function (i) {

                    setTimeout(function () {
                        $('.progress-bar').eq(i).addClass('left-anim');
                    }, (700 * (Math.exp(i * 0.14))) - 700);
                });
            } //if end here
        }
    });

    /*================================
    humburger| sidemenu
    ==================================*/
    var humburger = $('.humburger-btn'),
        sidebarMenu = $('.sidemenu-area'),
        overlay = $('.overlay'),
        closeBtn = $('.close-btn');
    humburger.on('click', function () {
        sidebarMenu.toggleClass('sidemenu-show');
        overlay.toggleClass('show');
    })
    closeBtn.on('click', function () {
        sidebarMenu.removeClass('sidemenu-show');
        overlay.removeClass('show');
    })

    /*================================
    overlay closing
    ==================================*/
    overlay.on('click', function () {
        sidebarMenu.removeClass('sidemenu-show');
        overlay.removeClass('show');
    })


    /*================================
    Owl Carousel
    ==================================*/
    // doctors-carousel
    var doctors_carousel = $('.doctors-carousel');
    if (doctors_carousel.length > 0) {
        doctors_carousel.owlCarousel({
            margin: 30,
            items: 4,
            loop: true,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }
    // tst-carousel
    var tst_carousel = $('.tst-carousel');
    if (tst_carousel.length > 0) {
        tst_carousel.owlCarousel({
            margin: 30,
            items: 1,
            dots: false,
            loop: true,
            autoplay: false,
            autoplayTimeout: 4000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            smartSpeed: 800
        });
    }
    // offer-lists
    var offer_lists = $('.offer-lists');
    if (offer_lists.length > 0) {
        offer_lists.owlCarousel({
            margin: 0,
            items: 3,
            loop: true,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
    }


    /*================================
    Magnific Popup
    ==================================*/
    $('.expand-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.expand-video').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });

    /*================================
    counter up
    ==================================*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*================================
    slicknav
    ==================================*/
    $('ul#nav_mobile_menu').slicknav({
        prependTo: "#mobile_menu"
    });

    if($('ul.submenu').length > 0){
        $('ul.submenu').parent().addClass('has-child');
    }
  


    /*================================
    Masonary
    ==================================*/
    $('#container').imagesLoaded(function () {

        // init Isotope
        var $grid = $('.masonary_container').isotope({
            itemSelector: '.grid',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid',
            }
        });
    });


    /*================================
    countdown
    ==================================*/
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });
    
})(jQuery);




