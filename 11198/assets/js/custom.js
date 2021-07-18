/* Global variables */
"use strict";

var $document = $(document),
	$window = $(window),
	plugins = {
		mainSlider: $('#slider'),
		carouselServices: $('.swiper-container-services'),
		carouselModels: $('.swiper-container-models'),
		carouselColumn: $('.swiper-container-column-first'),
		carouselColumnSecond: $('.swiper-container-column-second'),
		carouselBlockquote: $('.swiper-container-blockquote'),
		carouselPostList: $('.swiper-container-slider-format'),
		blogListCarousel: $('.swiper-container-blog'),
		googleMapFooter: $('#footer-map'),
		contactsMapFooter: $('#contacts-map'),
		effectMoveBlock: $('.move_img'), 
		wowEfects: $('.wow'),
		isotopeGallery: $('.gallery-isotope'),
		postGallery: $('.post-list-masonry'),
		gallery: $('#gallery'), 
		backToTop: $('.scrollup'),
		stickup: $('.stickUp'),
		telInput: $('.phone'),
		sliderdetails: $('#lightSlider'),
		reserveform: $('.order-details-form'),
		contactForm: $('#contactform'),
	};
var descwidth = window.innerWidth;

/* Initialize All Scripts */
$document.ready(function () {

	if (plugins.sliderdetails.length) {
		$('#lightSlider').lightSlider({
			gallery: true,
			item: 1,
			loop: true,
			slideMargin: 0,
			thumbItem: 4, 
			galleryMargin: 0,
			adaptiveHeight:false,
			thumbMargin: 20
		})
	}

	if (plugins.telInput.length) {
		$(".phone").intlTelInput();
	}
	
	if (plugins.backToTop.length) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
		}
		});
		$('.scrollup').on( "click", function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	}

	// wow effects
	if (plugins.wowEfects.length) {
		new WOW().init();
	}
	// slider
	if (plugins.mainSlider.length) {
		plugins.mainSlider.nivoSlider({
			animSpeed: 600,
			pauseTime: 6000,
			pauseOnHover: false,
			effect: 'boxRainGrow',
			prevText: '',
			nextText: '',
			controlNav: false
		});
	}
	if (plugins.carouselServices.length) {
		var swiper = new Swiper('.swiper-container-services', {
			pagination: '.swiper-pagination-services',
			paginationClickable: true,
			slidesPerView: 3,
			spaceBetween: 30,
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
		});
	}
	if (plugins.carouselModels.length) {
		var swiper_cars = new Swiper('.swiper-container-models', {
			pagination: '.swiper-pagination-models',
			slidesPerView: 2,
			initialSlide: 1,
			centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 0,
			autoplay: 5000,
			grabCursor: true,
			speed: 1000,
			loop: true,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			breakpoints: {
				767: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
		});
	}
	if (plugins.carouselColumn.length) {
		var swiper_column = new Swiper('.swiper-container-column-first', {
			pagination: '.swiper-pagination-services-second',
			slidesPerView: 2,
			slidesPerColumn: 2,
			paginationClickable: true,
			spaceBetween: 0,
			breakpoints: {
				1200: {
					slidesPerColumn: 1,
					spaceBetween: 30
				},
				620: {
					slidesPerView: 1,
					slidesPerColumn: 1,
					spaceBetween: 0
				}
			}
		});
	}
	if (plugins.carouselColumnSecond.length) {
		var swiper_column = new Swiper('.swiper-container-column-second', {
			pagination: '.swiper-pagination-column-main',
			slidesPerView: 2,
			slidesPerColumn: 3,
			paginationClickable: true,
			spaceBetween: 0,
			breakpoints: {
				1200: {
					slidesPerColumn: 1,
					spaceBetween: 30
				},
				620: {
					slidesPerView: 1,
					slidesPerColumn: 1,
					spaceBetween: 0
				}
			}
		});
	}
	if (plugins.carouselBlockquote.length) {
		var swiper_blockquote = new Swiper('.swiper-container-blockquote', {
			pagination: '.swiper-pagination-blockquote',
			slidesPerView: 2,
			paginationClickable: true,
			spaceBetween: 30,
			autoplay: 5000,
			speed: 1000,
			nextButton: '.swiper-button-next1',
			prevButton: '.swiper-button-prev1',
			breakpoints: {
				767: {
					slidesPerView: 1,
					spaceBetween: 10
				}
			}
		});
	}
	if (plugins.carouselPostList.length) {
		var swiper_blockquote = new Swiper('.swiper-container-slider-format', {
			pagination: '.swiper-pagination-slider-format',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 0,
			speed: 1000,
			nextButton: '.swiper-button-next-blog',
			prevButton: '.swiper-button-prev-blog',
		});
	}
	if (plugins.blogListCarousel.length) {
		var swiper_blog_carousel = new Swiper('.swiper-container-blog', {
			pagination: '.swiper-pagination-blog',
			slidesPerView: 3,
			paginationClickable: true,
			spaceBetween: 20,
			speed: 1000,
			nextButton: '.swiper-button-next2',
			prevButton: '.swiper-button-prev2',
			breakpoints: {
				767: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 10
				}
			}
		});
	}

	if (plugins.stickup.length) { 
		jQuery(function($) {
			$(document).ready( function() {
			  //enabling stickUp on the '.navbar-wrapper' class
			  $('.stickUp').stickUp();
			});
		});
	}
	if (plugins.reserveform.length) {
		$(document).ready(function() {
			var max_fields      = 10; //maximum input boxes allowed
			var wrapper         = $(".stop-location"); //Fields wrapper
			var add_button      = $(".add"); //Add button ID
			var x = 1; //initlal text box count
			 
			$(wrapper).on("click", ".add", function(e){ 
				e.preventDefault();
				$(wrapper).append('<div class="stop-location-new"><a href="#" class="remove_field"><i>-</i> <span>Remove</span></a><input type="text" name="stop-location" placeholder="Add stop"/></div>'); //add input box
			});
			$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
				e.preventDefault(); $(this).parent('div').remove(); x--;
			});
		});
	}

	if (plugins.isotopeGallery.length) {
		var $gallery = plugins.isotopeGallery;

		$gallery.isotope({
			itemSelector: '.gallery__item',
			masonry: {
				columnWidth: '.gallery__item:not(.doubleW)'
			}
		});
		isotopeFilters($gallery);
	}

		// Post Isotope
	if (plugins.postGallery.length) {
		var $postgallery = plugins.postGallery;
		$postgallery.isotope({
			itemSelector: '.post-list-masonry__item',
			masonry: {
				columnWidth: '.post-list-masonry__item:not(.doubleW)'
			}
		});
	}

	// Isotope Filters (for gallery)
	function isotopeFilters(gallery) {
		var gallery = $(gallery);
		if (gallery.length) {
			var container = gallery;
			var optionSets = $(".filters-by-category .option-set"),
				optionLinks = optionSets.find("a");
			optionLinks.on('click', function (e) {
				var thisLink = $(this);
				if (thisLink.hasClass("selected")) return false;
				var optionSet = thisLink.parents(".option-set");
				optionSet.find(".selected").removeClass("selected");
				thisLink.addClass("selected");
				var options = {},
					key = optionSet.attr("data-option-key"),
					value = thisLink.attr("data-option-value");
				value = value === "false" ? false : value;
				options[key] = value;
				if (key === "layoutMode" && typeof changeLayoutMode === "function") changeLayoutMode($this, options);
				else {
					container.isotope(options);
				}
				return false
			})
		}
	}

	// Contact page form
	if (plugins.contactForm.length) {
		var $contactform = plugins.contactForm;
		$contactform.validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				message: {
					required: true,
					minlength: 20
				},
				email: {
					required: true,
					email: true
				}

			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				message: {
					required: "Please enter message",
					minlength: "Your message must consist of at least 20 characters"
				},
				email: {
					required: "Please enter your email"
				}
			},
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					type: "POST",
					data: $(form).serialize(),
					url: "process-contact.php",
					success: function () {
						$('#success').fadeIn();
						$('#contactform').each(function () {
							this.reset();
						});
					},
					error: function () {
						$('#contactform').fadeTo("slow", 0, function () {
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	}
});

$window.on('load', function () { 

	setTimeout(function () {
		$('.plash').fadeOut(500);
	}, 500);

	function createMap(id, mapZoom){
		// Create google map
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: mapZoom,
			scrollwheel: false, // The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.59244777, -74.08844948), 
			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ececec"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f6f6f6"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 29
				}, {
					"weight": 0.2
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 18
				}]
			}, {
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}, {
					"lightness": 21
				}]
			}, {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#dedede"
				}, {
					"lightness": 21
				}]
			}, {
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"elementType": "labels.text.fill",
				"stylers": [{
					"saturation": 36
				}, {
					"color": "#333333"
				}, {
					"lightness": 40
				}]
			}, {
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f2f2f2"
				}, {
					"lightness": 19
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#fefefe"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#fefefe"
				}, {
					"lightness": 17
				}, {
					"weight": 1.2
				}]
			}]
		};
		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById(id);
		// Create the Google Map using our element and options defined above 
		var map = new google.maps.Map(mapElement, mapOptions);
		var image = 'assets/images/map-marker.png';
		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.59244777, -74.08844948),
			map: map,
			icon: image
		});		
		
	}

	if (plugins.googleMapFooter.length) {
		createMap('footer-map', 14)
	}
	if (plugins.contactsMapFooter.length) {
		createMap('contacts-map', 14)
	}

});

	
function a(){
	this.classList.toggle('opened'); 
} 
document.querySelector('.navbar-toggle').addEventListener('click', a );
