
/*=====================================================
           Javascript Editable
======================================================*/

$(document).ready(function(){

    /*=== testimonial Slider ====*/
    $(".testimonial-slider").slick({
        autoplay: false,
        slidesToScroll: 1,
        dots: true,
        fade: true,
        infinite: true,
        arrows: false,
    });



    /* smooth scroll */
    $(function() {
        $('.scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 0
                    }, 800);
                    return false;
                }
            }
        });
    });

});