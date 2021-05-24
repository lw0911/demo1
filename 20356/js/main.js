(function ($) {
"use strict";
    
/*-- Menu Sticky --*/
var win = $(window);
var sticky = $('.header-area');
win.on('scroll', function() {
	var scroll = win.scrollTop();
	if (scroll < 245) {
		sticky.removeClass('stick');
	}else{
		sticky.addClass('stick');
	}
});

/*-- One Page Menu --*/
var TopOffsetId = $('.header-bottom').height() - 41;
$('#main-menu nav').onePageNav({
	currentClass: 'active',
	scrollThreshold: 0.2,
	scrollSpeed: 1000,
	scrollOffset: TopOffsetId,
});

/*-- Bootstrap Menu Fix For Mobile --*/
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

/*-- Hero Slider --*/
$('.hero-slider').slick({
    arrows: false,
    autoplay: false,
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    responsive: [
        {
          breakpoint: 950,
          settings: {
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
          }
        },
    ]
});

/*-- Achivment Slider --*/
$('.achivment-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
});

/*-- Magnific Popup --*/

/*-- Video --*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	}
});

/*-- Gallery --*/
var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}	
});

/*-- Smooth Scroll --*/
$('[data-scroll]').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
        speed: 1000,
        scrollTarget: link.hash,
        offset: -70,
	});
});

/*-- Scroll Up --*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
});
 

})(jQuery);	