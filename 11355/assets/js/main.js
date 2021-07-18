$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });





    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function(){
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });
    
    $('.canvas_close,.off_canvars_overlay').on('click', function(){
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });
    

    
    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fal fa-angle-down"></i></span>');
    
    $offcanvasNavSubMenu.slideUp();
    
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
            $this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
            $this.toggleClass('menu-open');
        }
    });








    $(".categories_btn").on('click', function() {
        $('.side_navbar_toggler').attr('aria-expanded', 'false');
        $('#navbarSidetoggle').removeClass('show');
    });
    

    
    var rclass = true;
    
    $("html").on('click', function () {
        if (rclass) {
            $('.categories_btn').addClass('collapsed');
            $('.categories_btn,.side_navbar_toggler').attr('aria-expanded', 'false');
            $('#navCatContent,#navbarSidetoggle').removeClass('show');
        }
        rclass = true;
    });
    
    $(".categories_btn,#navCatContent,#navbarSidetoggle .navbar-nav,.side_navbar_toggler").on('click', function() {
        rclass = false;
    });


    $('.more_slide_open').slideUp();    
    $('.more_categories').on('click', function (){
        $(this).toggleClass('show');
        $('.more_slide_open').slideToggle();
    });





    
    //===== banner animation slick slider

    function mainSlider() {
        var BasicSlider = $('.banner-slide');
        var BasicSlider2 = $('.banner-slide-2');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.banner-item:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider2.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.banner-2-area:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.banner-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider2.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.banner-2-area[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            fade: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
        BasicSlider2.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();















    

    //===== electronics slide slick slider
    $('.electronics-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        }
      ]
    });



    

    //===== electronics slide slick slider
    $('.electronics-active-2').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        }
      ]
    });



    

    //===== electronics slide slick slider
    $('.electronics-active-3').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                }
        },{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
        }
      ]
    });
    

    //===== electronics slide slick slider
    $('.electronics-active-4').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
        },{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
        }
      ]
    });


    //===== brand slide slick slider
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                }
        },{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
        }
      ]
    });



    //===== brand slide slick slider
    $('.banner-shop-item-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                }
        },{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
        }
      ]
    });


    

    //===== shop lookbook slide slick slider
    $('.shop-lookbook-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    });




    //===== shop details slide slick slider
    $('.shop-details-thumb-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,    
        fade: false,
        asNavFor: '.shop-thumb-active'
    });
    $('.shop-thumb-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.shop-details-thumb-active',
        dots: false,
        centerMode: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
        centerPadding: "0",
        focusOnSelect: true
    });


    
    //===== Isotope Project 1
    
    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
        // options
            transitionDuration: '1s'
        });
        
        // filter items on button click
        $('.project-menu ul').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.project-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });

    //===== nice select
    $('select').niceSelect();


    $('#simple_timer').syotimer({
      year: 2020,
      month: 9,
      day: 9,
      hour: 20,
      minute: 30,
    });
    
    
    
    //===== Back to top
    
    // Scroll Event
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    // Click Event
    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });

    
    //===== product quantity

    $('.add').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
    
    
    
    
    
    
        //===== Price Slider
    

    /*---slider-range here---*/
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 560,
        values: [ 0, 560 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + "k - $" + ui.values[ 1 ]+ "k" );
       }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
       "k - $" + $( "#slider-range" ).slider( "values", 1 ) + "k" );



    
    
    
    
        
    //===== 
    
    
    
    
});