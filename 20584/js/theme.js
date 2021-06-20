;(function($) {
    "use strict";

    // Preloader
    function preloader() {
        if( $('.preloader').length ){
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');  
            });
        };
    }
    preloader();

    // Owl Carousel
    function testimonial_carousel() {
       $('#ms-testimonial').owlCarousel({
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            autoplay: 5000,
            margin:30,
            items:1,
            loop: true,
            nav:true,
            dots: false,
            onInitialized  : counter,   // When the plugin has initialized.
            onTranslated : counter      // When the translation of the stage has finished.
        });
    }
    testimonial_carousel();

    // Homepage Clients counter section
    function counter(event) {
        var element   = event.target; 
        var items     = event.item.count;         // Number of items
        var item      = event.item.index + 1;     // Position of the current item
        // if loop is true then reset counter from 1
            if(item > items) {
                item = item - items
            }
            $('#counter').html(item+"/"+items)
        }

}) (jQuery);