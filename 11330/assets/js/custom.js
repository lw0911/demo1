/**
 * Main js code
 */

(function($) {
    
    // INIT SELECT STYLES
    $('.js-select2, .quantity select').select2({
        minimumResultsForSearch: -1,
    });

    // INIT SLIDERS
    if ( $('.js-slider').length ) {
        $('.js-slider').slick({
            prevArrow: '<button type="button" class="slick-prev flaticon-left-arrow-sign"></button>',
            nextArrow: '<button type="button" class="slick-next flaticon-right-direction"></button>'
        });
    }

    // HERO SLIDER
    if ( $('.js-hero-slider').length ) {
        $('.js-hero-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev flaticon-left-arrow-sign"></button>',
            nextArrow: '<button type="button" class="slick-next flaticon-right-direction"></button>',
            dots: false,
            arrows: true,
            touchMove: false,
            swipe: false,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        touchMove: true,
                        swipe: true
                    }
                },
            ]
        });
    }

    // SEARCH POPUP
    $('.js-open-search').on( 'click', function() {
        $('.full-search-wrap').addClass('active');
        $('#s-full').focus();
    });

    $('.js-close-search').on( 'click', function() {
        $('.full-search-wrap').removeClass('active');
    });

    // BACK TO TOP
    $('#js-back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    // SCROLL TO BOTTOM	 
    $('#js-scroll-down').on( 'click', function() {
        $('html, body').animate({
            scrollTop: $('#scroll-to').offset().top
        }, 700);
    });

    // SCROLL TO ANCOR
    $('a[href^="#"]').on('click', function (e) {
        if ( $(this).attr('href') && $(this).attr('href') != '#' ) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 40
            }, 700);
        }
    });

    // ADD SUB-MENU MOBILE TOGGLE
    $('.sub-menu').prev('a').after('<i class="sub-menu__toggle mdi mdi-plus"></i>');

    // SUB-MENU TOGGLE
    $('.header-navigation').on('click', '.sub-menu__toggle', function() {
        $(this).toggleClass('mdi-plus mdi-minus');
        $(this).closest('.nav-item').find('.sub-menu').slideToggle(400);
    });

    // TOGGLE MOBILE MENU    	
    $('#js-open-mob-menu').on( 'click', function() {
        $('.header-navigation').addClass('active');
    });
    $('#js-close-mob-menu').on( 'click', function() {
        $('.header-navigation').removeClass('active');
    });


    // PRODUCT SLIDER
    $('#js-product-nav .product-gallery-thumbs__item').on( 'click', function() {
        var src = $(this).attr('data-large-src');
        $('#js-product-nav .product-gallery-thumbs__item').removeClass('active');
        $(this).addClass('active');
        $('#js-product-big img').hide().attr('src', src).fadeIn(200);
    });

    // CHECKOUT
    $('#js-checkout-to-payment').on( 'click', function() {
        var is_valid = true;
        if ( is_valid ) {
            $('#payment-tab').removeClass('disabled').tab('show');
            $('html, body').animate({
                scrollTop: $('#payment-tab').offset().top
            }, 700);
        }
    });

    $('#js-checkout-to-overview').on( 'click', function() {
        var is_valid = true;
        if ( is_valid ) {
            $('#overview-tab').removeClass('disabled').tab('show');
            $('html, body').animate({
                scrollTop: $('#overview-tab').offset().top
            }, 700);
        }
    });


})(jQuery);