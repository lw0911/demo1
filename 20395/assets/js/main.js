(function ($) {
    "use strict";

    $(document).ready(function () {
        /*---------------------------------
        Home 5 Slider
        -----------------------------------*/
        let hero5 = $(".h5-hero-slider");
        if (hero5.length) {
            hero5.owlCarousel({
                items: 1,
                loop: true,
                dots: false,
                smartSpeed: 1000,
                autoplay: true,
                smartSpeed: 2000,
            });
        }
        /*---------------------------------
        Home 2 Slider
        -----------------------------------*/
        let heroTwo = $(".hero-slider-2");
        if (heroTwo.length) {
            heroTwo.slick({
                arrows: false,
                dots: true,
                dotsClass: "hero-slider-2__dots",
                autoplay: true,
                speed: 1500,
            });
        }
        /*---------------------------------
        Off Canvas Function
        -----------------------------------*/
        var $offCanvasToggle = $(".offcanvas-toggle");
        var $offcanvasWishList = $(".offcanvas-wishlist");
        var $offcanvasWish = $(".offcanvas-wish");
        var $offCanvas = $(".offcanvas-cart");
        var $offCanvasOverlay = $(".offcanvas-overlay");
        var $body = $("body");

        $offCanvasToggle.on("click", function (e) {
            e.preventDefault();
            $body.addClass("offcanvas-open");
            $offCanvas.addClass("offcanvas-open");
            $offCanvasOverlay.fadeIn();
        });
        $offcanvasWishList.on("click", function (e) {
            e.preventDefault();
            $body.addClass("offcanvas-open");
            $offcanvasWishList.addClass("offcanvas-open");
            $offcanvasWish.addClass("offcanvas-open");
            $offCanvasOverlay.fadeIn();
        });
        $(".offcanvas__head-close, .offcanvas-overlay").on("click", function (
            e
        ) {
            e.preventDefault();
            $body.removeClass("offcanvas-open");
            $offCanvas.removeClass("offcanvas-open");
            $offcanvasWish.removeClass("offcanvas-open");
            $offCanvasOverlay.fadeOut();
        });
        $(".offcanvas-close").on("click", function (e) {
            e.preventDefault();
            $body.toggleClass("offcanvas-open");
            $offcanvasWish.toggleClass("offcanvas-open");
            $offCanvasOverlay.fadeOut();
        });

        /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
        var CartPlusMinus = $(".cart-plus-minus");
        CartPlusMinus.prepend('<div class="dec qtybutton cart-quantity__button cart-quantity__button-up">-</div>');
        CartPlusMinus.append('<div class="inc qtybutton cart-quantity__button cart-quantity__button-down">+</div>');
        $(".qtybutton").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 1) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });

        /**-----------------------------
         *  Related Product Slider
         * ---------------------------*/
        let relatedPorduct = $(".related-slider");
        if (relatedPorduct.length) {
            relatedPorduct.slick({
                mobileFirst: true,
                prevArrow:
                    '<span class="client-slider__arrow client-slider__arrow-prev las la-angle-left"></span>',
                nextArrow:
                    '<span class="client-slider__arrow client-slider__arrow-next las la-angle-right"></span>',
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                ],
            });
        }
        /**-----------------------------
         *  Counter UP
         * ---------------------------*/
        let counterUp = $(".counter-up-card__counter");
        if (counterUp.length) {
            counterUp.counterUp({
                delay: 10,
                time: 1000,
            });
        }
        /**-----------------------------
         *  Client Slider Alt
         * ---------------------------*/
        let clientAlt = $(".client-slider--alt");
        if (clientAlt.length) {
            clientAlt.slick({
                mobileFirst: true,
                prevArrow:
                    '<span class="client-slider__arrow client-slider__arrow-prev las la-angle-left"></span>',
                nextArrow:
                    '<span class="client-slider__arrow client-slider__arrow-next las la-angle-right"></span>',
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                ],
            });
        }
        /**-----------------------------
         *  Client Slider
         * ---------------------------*/
        let client = $(".client-slider");
        if (client.length) {
            client.slick({
                mobileFirst: true,
                prevArrow:
                    '<span class="client-slider__arrow client-slider__arrow-prev las la-angle-left"></span>',
                nextArrow:
                    '<span class="client-slider__arrow client-slider__arrow-next las la-angle-right"></span>',
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 5,
                        },
                    },
                ],
            });
        }
        /**-----------------------------
         *  Banner Slider
         * ---------------------------*/
        let bannerSlider = $(".banner-slider");
        if (bannerSlider.length) {
            bannerSlider.slick({
                arrows: false,
                autoplay: true,
                autoplaySpeed: 6000,
            });
        }
        /**-----------------------------
         *  Tab Slider
         * ---------------------------*/
        let tabSlider = $(".owl-carousel");
        if (tabSlider.length) {
            tabSlider.owlCarousel({
                items: 1,
                loop: true,
                dots: false,
                nav: true,
                smartSpeed: 1000,
            });
        }
        /**-----------------------------
         *  On Sale Countdown
         * ---------------------------*/
        let count = $(".on-sale__countdown-clock");
        if (count.length) {
            count.countdown("2020/11/29").on("update.countdown", function (e) {
                let $this = $(this).html(
                    e.strftime(
                        "" +
                            '<div class="on-sale__countdown-clock-num">%H <div class="on-sale__countdown-clock-text">hr</div></div>' +
                            '<div class="on-sale__countdown-clock-num">%M <div class="on-sale__countdown-clock-text">min</div></div>' +
                            '<div class="on-sale__countdown-clock-num">%S <div class="on-sale__countdown-clock-text">sec</div></div>'
                    )
                );
            });
        }
        /**-----------------------------
         *  Hero 4 Slider
         * ---------------------------*/
        let hero4 = $(".h4-slider");
        if (hero4.length) {
            hero4.slick({
                mobileFirst: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                speed: 2000,
            });
        }
        /**-----------------------------
         *  Hero 3 Slider
         * ---------------------------*/
        let hero3 = $(".hero-3__slider");
        if (hero3.length) {
            hero3.slick({
                mobileFirst: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                speed: 2000,
            });
        }
        /**-----------------------------
         *  Hero Slider
         * ---------------------------*/
        let hero = $(".hero");
        if (hero.length) {
            hero.slick({
                mobileFirst: true,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                speed: 2000,
            });
        }
        /**-----------------------------
         *  Nice Select
         * ---------------------------*/
        let filter = $(".search__filter");
        if (filter.length) {
            filter.niceSelect();
        }
        let currency = $(".currency-drop");
        if (currency.length) {
            currency.niceSelect();
        }
        let user = $(".user-drop");
        if (user.length) {
            user.niceSelect();
        }

        /**-----------------------------
         *  Category Menu
         * ---------------------------*/
        let category = $(".category-menu__toggle");
        let categorySub = $(".category-menu__sub");
        if (category.length) {
            category.on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("active");
                categorySub.slideToggle();
            });
        }
        $(".cat-menu-close").on("click", function () {
            categorySub.slideUp();
        });
        $(".category-menu__has-sub-list > .category-menu__sub-link").on(
            "click",
            function (e) {
                e.preventDefault();
            }
        );

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(".menu__has-sub > .menu__link").on("click", function (e) {
            e.preventDefault();
        });
        $(".menu__has-sub-right > .menu__sub-link").on("click", function (e) {
            e.preventDefault();
        });

        /**-----------------------------
         *  Hamburger Icon fix
         * ---------------------------*/
        let menuBar = $(".menu__toggle-bar");
        let menuCross = $(".menu__toggle-cross");
        let menu = $(".menu__bar");
        menuBar.on("click", function () {
            $(this).addClass("d-none");
            menuCross.addClass("active");
            menu.slideToggle();
        });
        menuCross.on("click", function () {
            $(this).removeClass("active");
            menuBar.removeClass("d-none");
            menu.slideToggle();
        });
    });
    /*------------------
            back to top
        ------------------*/
    $(document).on("click", ".back-to-top", function () {
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            2000
        );
    });
})(jQuery);

$(window).on("scroll", function () {
    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 1200) {
        ScrollTop.fadeIn(1000);
    } else {
        ScrollTop.fadeOut(1000);
    }
});

$(window).on("load", function () {
    /*-----------------
        preloader
    ------------------*/
    var preLoder = $(".preloader");
    preLoder.fadeOut(1000);
});
