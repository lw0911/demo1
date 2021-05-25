(function ($) {
    "use strict";
    //-----menu------
    $("#navigation").navigation({
        effect: "fade",
        submenuTrigger: "hover",
        mobileBreakpoint: 991,
        offCanvasSide: "right"
    });

    $('.form--control').on('click', function () {
        $(this).children('.sSelect').toggleClass('down  up');
    });

    $('.post_carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        dots: true,
        items: 1,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        nav: false,
        dotsSpeed: 1000,
        smartSpeed: 700,
    });
    $('.post_carousel2').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        dots: true,
        items: 1,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        smartSpeed: 700,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dotsSpeed: 1000
    });

    function SelectFirst(SelVal) {
        var arrSelVal = SelVal.split(",")
        if (arrSelVal.length > 1) {
            Valuetoselect = arrSelVal[0];
            document.getElementById("select1").value = Valuetoselect;
        }
    }

    $('.nav_menu ul li').children('ul').addClass('dropDown');
    $('.nav_menu ul li').children('.dropDown').slideUp();
    $('.dropDown').parent('li').addClass('dClose');
    var mobileMenu = $('.nav_menu ul li');
    $('.nav_menu ul li').on('click', function () {
        $(this).children('.dropDown').slideToggle();
        $(this).toggleClass('dClose dOpen');
        $(this).siblings('li').children('.dropDown').slideUp();
        mobileMenu.not($(this)).removeClass('dOpen');
        $(this).toggleClass('dClose');
    });


    $('.social_share').on('click', function () {
        $(this).children('.social_poup').slideToggle();
    });



    //--------Scroll Top---------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll_top').fadeIn();
            $('.scroll_top').removeClass('not_visible');
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });


})(jQuery);
