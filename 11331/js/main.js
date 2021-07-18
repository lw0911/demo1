(function ($) {
"use strict";


// One Page Nav
var top_offset = $('.header-area').height() - 0;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});






// sticky
var wind = $(window);
var sticky = $('#sticky-header');
wind.on('scroll', function () {
	var scroll = wind.scrollTop();
	if (scroll < 1) {
		sticky.removeClass('sticky');
	} else {
		sticky.addClass('sticky');
	}
});


    // menu toggle
    $(".navbar-toggle").on('click', function () {
        $(".navbar-nav").addClass("mobile_menu");
    });
    $(".navbar-nav li a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

// mainSlider

    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
			arrows:true,
		    prevArrow:'<button type="button" class="slick-prev"> <i class="fas fa-angle-left"></i> </button>',
            nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
mainSlider();

/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	autoplay:true,
	navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

/* gallery-active */
$('.gallery-active').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
})

/* image-link */
$('.image-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


// map
function basicmap() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 11,
		scrollwheel: false,
		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(40.6700, -73.9400), // New York
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
	};
	// Get the HTML DOM element that will contain your map
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('contact-map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	// Let's also add a marker while we're at it
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.6700, -73.9400),
		map: map,
		title: 'Cryptox'
	});
}
if ($('#contact-map').length != 0) {
	google.maps.event.addDomListener(window, 'load', basicmap);
}


})(jQuery);