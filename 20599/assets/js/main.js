; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.menu').click (function(){
            $(this).toggleClass('open');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").click(function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });


        /* -------------------------------------------------------------
            menu show Form
        ------------------------------------------------------------- */
        if ( $(window).width() > 991 ) {
            if ($('.cat-menu').length){
                $(".cat-menu").on('click', function(){
                    $(".cat-menu-wrap .sidebar-categories").fadeToggle("sidebar-categories-show", "linear");
                    $('.cat-menu').toggleClass('open');
                });

                $('body').on('click', function(event) {
                    if (!$(event.target).closest('.cat-menu').length && !$(event.target).closest('.cat-menu-wrap .sidebar-categories').length) {
                        $(".cat-menu-wrap .sidebar-categories").fadeOut("sidebar-categories-show");
                    }
                    if (!$(event.target).closest('.cat-menu').length && !$(event.target).closest('.cat-menu-wrap .sidebar-categories').length) {
                        $('.cat-menu').removeClass('open');
                    }
                });
            }
        }
          

        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });


        /*------------------
           back to top
       ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });


    });


    $(window).on("scroll", function() {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/
        // var mainMenuTop = $(".navbar-area");
        // if ($(window).scrollTop() >= 1) {
        //     mainMenuTop.addClass('navbar-area-fixed');
        // }
        // else {
        //     mainMenuTop.removeClass('navbar-area-fixed');
        // }
        
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

        /*--------------------------
            trending-product-slider
        ---------------------------*/
        $('.trending-product-slider').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
            dots:true,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });

        /*--------------------------
            banner-slider
        ---------------------------*/
        $('.banner-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
            dots:true,
            items:1,
            autoplay:false,
            smartSpeed: 1500,
            autoplayTimeout:5000,
            animateOut: 'fadeOut',
        })
        /*--------------------------
            category-slider
        ---------------------------*/
        $('.category-slider').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            dots:false,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
        /*--------------------------
            category-slider
        ---------------------------*/
        $('.recent-slider').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            smartSpeed: 1500,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });
        /*---------------------------------------
            Thumbnail Slider
        ---------------------------------------*/
        var productDetailSlider = $('.single-thumbnail-slider');
        var pThumbanilSlider = $('.product-thumbnail-carousel');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                speed: 2500,
                asNavFor: '.product-thumbnail-carousel'
            });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                arrows:false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-down"></i></div>',
            });
        }

        var productDetailSlider = $('.single-thumbnail-slider2');
        var pThumbanilSlider = $('.product-thumbnail-carousel2');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                asNavFor: '.product-thumbnail-carousel2'
            });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider2',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                vertical: true,
                arrows:false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-down"></i></div>',
            });
        }


        /*---------------------------------------
            Nice Select
        ---------------------------------------*/
        if($('select').length){
            $('select').niceSelect();
        }
        /*---------------------------------------
            Range slider
        ---------------------------------------*/
        $( "#slider-range" ).slider({
          range: true,
          min: 0.00,
          max: 2500.00,
          values: [ 5.00, 1999.00 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
          " - $" + $( "#slider-range" ).slider( "values", 1 ) );


        /*---------------------------------------
            Quantity
        ---------------------------------------*/
        function wcqib_refresh_quantity_increments() {
            jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
                var c = jQuery(b);
                c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
            })
        }
        String.prototype.getDecimals || (String.prototype.getDecimals = function() {
            var a = this,
                b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
        }), jQuery(document).ready(function() {
            wcqib_refresh_quantity_increments()
        }), jQuery(document).on("updated_wc_div", function() {
            wcqib_refresh_quantity_increments()
        }), jQuery(document).on("click", ".plus, .minus", function() {
            var a = jQuery(this).closest(".quantity").find(".qty"),
                b = parseFloat(a.val()),
                c = parseFloat(a.attr("max")),
                d = parseFloat(a.attr("min")),
                e = a.attr("step");
            b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
        });

    });



})(jQuery);