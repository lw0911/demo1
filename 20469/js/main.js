!(function (e) {
    "use strict";

    e(window).on("load", function () {
        e(".preloader-wrap").fadeOut(1e3);
    });

    // For Venobox
    $(".venobox").venobox({
        spiner: "wave",
    });

    // For Top Button
    $(".top-btn").click(function () {
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });

    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling >= 900) {
            $(".top-btn").fadeIn();
        } else {
            $(".top-btn").fadeOut();
        }
    });

    //animation scroll js
    var html_body = $("html, body");
    $(".menu-btn a").on("click", function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                html_body.animate(
                    {
                        scrollTop: target.offset().top - -50,
                    },
                    1500
                );
                return false;
            }
        }
    });

    //for sticky
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll >= 100) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    });
})(jQuery);
