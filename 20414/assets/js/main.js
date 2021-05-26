$(function () {

    "use strict";


    //===== Prealoder

   //===== Prealoder
    $(window).load(function() {
        $("#loading").fadeOut(500);
    });


    // Search Menu JS
    $(".search-box i").on("click", function(){
        $(".search-overlay").toggleClass("search-overlay-active");
    });
    $(".search-overlay-close").on("click", function(){
        $(".search-overlay").removeClass("search-overlay-active");
    });


    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });

    }


    //===== banner animation slick slider

    function mainSlider() {
        var BasicSlider = $('.banner-area');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.banner-item:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.banner-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-angle-double-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1330,
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

    //===== FEATURES Active slick slider
    $('.features-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-double-right"></i></span>',
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        }
      ]
    });


    //===== STORE Active slick slider
    $('.store-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-double-right"></i></span>',
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
      ]
    });


    //===== FEEDBACK Active slick slider
    $('.feedback-active').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-double-right"></i></span>',
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        }
      ]

    });



    //===== FEEDBACK Active slick slider
    $('.feedback-2-active').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-double-right"></i></span>',
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        }
      ]

    });



    //===== FEEDBACK Active slick slider
    $('.feedback-3-active').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        prevArrow: '<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-double-right"></i></span>',
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1300,
                settings: {
                    arrows: false,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
        }
      ]

    });



    //===== FEEDBACK Active slick slider
    $('.gallery-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-angle-double-right"></i></span>',
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        }
      ]

    });



    //===== FEEDBACK Active slick slider
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [

            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 6,
                    arrows: false,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    arrows: false,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
        }
      ]

    });



    //===== FEEDBACK Active slick slider
    $('.farmers-active').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
        }
      ]

    });
    
    
    
    
    
    // shop slide js
    $('.shop-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,    
        fade: false,
        asNavFor: '.shop-thumb-active'
    });
    $('.shop-thumb-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.shop-active',
        dots: false,
        centerMode: true,
        arrows: false,
        centerPadding: "0",
        focusOnSelect: true,
        vertical: true
    });
    

    //===== Isotope Project 1

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.project-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
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
        gallery: {
            enabled: true
        }
    });


    //===== counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



    // Single Features Active
    $('.blog-area').on('mouseover', '.blog-item', function () {
        $('.blog-item.active').removeClass('active');
        $(this).addClass('active');
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
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





    
    
    




    //===== 








});
