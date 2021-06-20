$(function() {
	'use strict';
	// Preloader
	$(window).on('load', function(event) {
		$('#preLoader')
			.delay(500)
			.fadeOut(500);
	});
	//Sticky Menu
	$(window).on('scroll', function(event) {
		var scroll = $(window).scrollTop();
		if (scroll < 250) {
			$('.header-menu-area').removeClass('sticky');
			$('.header-two').removeClass('sticky');
		} else {
			$('.header-menu-area').addClass('sticky');
			$('.header-two').addClass('sticky');
		}
	});
	// Search Icon
	$('.search-icon').on('click', function(e) {
		$('.search-wrap').toggleClass('search-active');
		e.preventDefault();
	});
	// Mobile Menu
	$('header .main-menu').meanmenu({
		meanMenuContainer: '.mobilemenu',
		meanScreenWidth: '991',
		meanRevealPosition: 'none',
		meanMenuOpen: '<i class="far fa-bars"/>',
		meanMenuClose: '<i class="far fa-times"/>',
		meanMenuCloseSize: '25px'
	});
	//Date time picker
	$('#arrive-date, #depart-date').datepicker({
		format: 'd-m-yyyy',
		autoclose: true
	});
	// Counter UP init
	$('.counter-number').counterUp({
		delay: 100,
		time: 3000
	});
	// latest room slider
	var roomArrow = $('.room-arrows');
	var $status = $('.pagingInfo');
	var roomSlider = $('#roomSliderActive');
	roomSlider.on('init reInit afterChange', function(
		event,
		slick,
		currentSlide,
		nextSlide
	) {
		if (!slick.$dots) {
			return;
		}
		var i = (currentSlide ? currentSlide : 0) + 1;
		var statusText = i > 10 ? i : '0' + i;
		$status.html(
			'<span class="big-num">' +
				statusText +
				'<span class="small">' +
				slick.$dots[0].children.length +
				'</span>' +
				'</span> '
		);
	});
	roomSlider.slick({
		dots: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1500,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: roomArrow,
		prevArrow:
			'<span class="prev"><i class="fal fa-angle-left"></i></span>',
		nextArrow:
			'<span class="next"><i class="fal fa-angle-right"></i></span>',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	// feature slider active
	$('#featureSlideActive').slick({
		dots: false,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:
			'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
		nextArrow:
			'<span class="next"><i class="fal fa-angle-double-right"></i></span>'
	});
	// Feedback slider ome
	$('#feedbackSlideActive').slick({
		dots: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1500,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow:
			'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
		nextArrow:
			'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
		responsive: [
			{
				breakpoint: 1599,
				settings: {
					arrows: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});
	// Feedback slider two
	$('#feedSliderTWo').slick({
		dots: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:
			'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
		nextArrow:
			'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false
				}
			}
		]
	});
	// Brand Slider Active
	$('#brandsSlideActive').slick({
		dots: false,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: false,
		speed: 1500,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});
	// Bootstrap Accordion Icon
	$('.feature-accordion .card-header button').on('click', function(e) {
		$('.feature-accordion .card-header button').removeClass(
			'active-accordion'
		);
		$(this).addClass('active-accordion');
	});
	// Wow js and nice select init
	$('select').niceSelect();
	new WOW().init();
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	// Isotop Active

	$('.gallery-filter li').on('click', function() {
		$('.gallery-filter li').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$('.gallery-filter-items').isotope({
			filter: selector
		});
	});
	$(window).load(function() {
		$('.gallery-filter-items').isotope();
	});
	// Back to Top
	$('.back-to-top').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: 0
			},
			1500
		);
	});
	// Slider One
	function sliderOne() {
		var slider = $('#heroSlideActive');
		slider.on('init', function(e, slick) {
			var $firstAnimatingElements = $(
				'.single-hero-slide:first-child'
			).find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		slider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $(
				'.single-hero-slide[data-slick-index="' + nextSlide + '"]'
			).find('[data-animation]');
			doAnimations($animatingElements);
		});
		slider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			infinite: true,
			speed: 1500,
			prevArrow:
				'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
			nextArrow:
				'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false
					}
				}
			]
		});

		function doAnimations(elements) {
			var animationEndEvents =
				'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this
					.addClass($animationType)
					.one(animationEndEvents, function() {
						$this.removeClass($animationType);
					});
			});
		}
	}
	sliderOne();
	// Slider Two
	function sliderTwo() {
		var slider = $('#secondSlider');
		slider.on('init', function(e, slick) {
			var $firstAnimatingElements = $(
				'.single-hero-slide:first-child'
			).find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		slider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $(
				'.single-hero-slide[data-slick-index="' + nextSlide + '"]'
			).find('[data-animation]');
			doAnimations($animatingElements);
		});
		slider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: true,
			infinite: true,
			speed: 1500,
			prevArrow:
				'<span class="prev"><i class="fal fa-angle-double-left"></i></span>',
			nextArrow:
				'<span class="next"><i class="fal fa-angle-double-right"></i></span>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false
					}
				}
			]
		});

		function doAnimations(elements) {
			var animationEndEvents =
				'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this
					.addClass($animationType)
					.one(animationEndEvents, function() {
						$this.removeClass($animationType);
					});
			});
		}
	}
	sliderTwo();
	// Map for Contact page
	function contactMap() {
		var mapOptions = {
			zoom: 11,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.7128, -74.006), // New York
			// This is where you would paste any style found on Snazzy Maps.
			styles: [
				{
					featureType: 'all',
					elementType: 'geometry.fill',
					stylers: [
						{
							weight: '2.00'
						}
					]
				},
				{
					featureType: 'all',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#9c9c9c'
						}
					]
				},
				{
					featureType: 'all',
					elementType: 'labels.text',
					stylers: [
						{
							visibility: 'on'
						}
					]
				},
				{
					featureType: 'landscape',
					elementType: 'all',
					stylers: [
						{
							color: '#f2f2f2'
						}
					]
				},
				{
					featureType: 'landscape',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#ffffff'
						}
					]
				},
				{
					featureType: 'landscape.man_made',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#ffffff'
						}
					]
				},
				{
					featureType: 'poi',
					elementType: 'all',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'all',
					stylers: [
						{
							saturation: -100
						},
						{
							lightness: 45
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#eeeeee'
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#7b7b7b'
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#ffffff'
						}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'all',
					stylers: [
						{
							visibility: 'simplified'
						}
					]
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'transit',
					elementType: 'all',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'water',
					elementType: 'all',
					stylers: [
						{
							color: '#46bcec'
						},
						{
							visibility: 'on'
						}
					]
				},
				{
					featureType: 'water',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#c8d7d4'
						}
					]
				},
				{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#070707'
						}
					]
				},
				{
					featureType: 'water',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#ffffff'
						}
					]
				}
			]
		};

		var mapElement = document.getElementById('contactMap');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var iconBase = '../assets/img/mappin.png';
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.7128, -74.006),
			map: map,
			icon: iconBase,
			title: 'Cryptox'
		});
	}
	if ($('#contactMap').length != 0) {
		google.maps.event.addDomListener(window, 'load', contactMap);
	}
	// Map for Home Page
	function contactMapOne() {
		var mapOptions = {
			zoom: 11,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.7128, -74.006), // New York
			// This is where you would paste any style found on Snazzy Maps.
			styles: []
		};

		var mapElement = document.getElementById('contactMapOne');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var iconBase = '../assets/img/mappin.png';
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.7128, -74.006),
			map: map,
			icon: iconBase,
			title: 'Cryptox'
		});
	}
	if ($('#contactMapOne').length != 0) {
		google.maps.event.addDomListener(window, 'load', contactMapOne);
	}
});
