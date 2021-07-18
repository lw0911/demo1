/* =================================
------------------------------------
	Pulse - Restaurant HTML Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	}).on('changed.owl.carousel',function(event){
		$('.hero-slider .owl-dots:last-child').remove();
		currentHSnumber();
	})
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});
	function currentHSnumber() {
		$('.hero-slider .owl-dots').clone().appendTo('.hero-slider');
		$('.hero-slider .owl-dots:last-child').addClass('owl-dots-number');
		var av = $('.owl-dots-number').innerHeight() / 2;
		$('.owl-dots-number').css('marginTop', -av);
	}
	currentHSnumber();
	


	/*------------------
		Testimonials 
	--------------------*/
	$('.testimonials-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplay: true
	});



	/*------------------
		Brands Slider
	--------------------*/
	$('.brands-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		margin : 40,
		autoplay: true,
		responsive : {
			0 : {
				items: 2,
			},
			480 : {
				items: 3,
			},
			768 : {
				items: 5,
			}
		}
	});

	
	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-value"><h3>'+ cpvalue +'%</h3></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 123,
				thickness: 6,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 240,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});

})(jQuery);

