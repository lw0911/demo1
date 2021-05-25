$(document).ready(function(){
	"use strict";
	/*==============================================================
        * Table of Contents :
        * 1.0 - DL Menu Script Start
		* 2.0 - Language Change Dwopdown Script Start
		* 3.0 - Search Form Script
		* 4.0 - Class For Child Script
		* 5.0 - Teacher Slider Script Start
		* 6.0 - Class Single Script Start
		* 7.0 - Testimonial Script Start
		* 8.0 - Photo Gallery Script
		* 9.0 - Circle Progress Bar Script Start
		* 10.0 - Number Count Up(WayPoints) Script
		* 11.0 - Time Counter Script
		* 12.0 - Bootstrap Accordian Script
		* 13.0 - Onclick animate to another Div Script
		* 14.0 - Magnific Gallery Script
		* 15.0 - Side Menu Script
		* 16.0 - Map Script Script
		* 17.0 - Google Map Function for Custom Style
		* 18.0 - Isotop Gallery
        ==============================================================*/

	/*
  	==============================================================
   		DL Menu Script Start
   	============================================================== */
	if($('#dl-menu').length){
	   	$(function() {
	   		$( '#dl-menu' ).dlmenu({
	   			animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
	   		});
	   	});
	}
	/*
  	==============================================================
   		Language Change Dwopdown Script Start
   	============================================================== */
	if($('.language').length){
	   	$('.language').on('click',function(){
	   		$('.keo_sub_lang').slideToggle();
	   	})
	}

	/*
      ==============================================================
           Search Form Script
      ============================================================== */
    $('.search-fld').on('click', function() {
        $('.search-wrapper-area').addClass('search_open');
        $('.keo_search_remove_btn').on('click', function() {
            $('.search-wrapper-area').removeClass('search_open');
        })
    });
    /*
   	==============================================================
    	Class For Child Script
   	==============================================================
   	*/
   	if($('#keo_child_class_slider').length){
	   	$('#keo_child_class_slider').slick({
	   		dots: true,
	   		arrows: false,
	   		autoplay:false,
  			autoplaySpeed:1500,
	   		prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	   		nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	   		infinite: false,
	   		speed: 1000,
	   		slidesToShow: 3,
	   		slidesToScroll: 1,
	   		centerMode: false,
	   		responsive: [
	   		{
	   			breakpoint: 1024,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1,
	   			}
	   		},
	   		{
	   			breakpoint: 767,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 620,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 520,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 480,
	   			settings: {
	   				slidesToShow: 1,
	   				slidesToScroll: 1
	   			}
	   		}
	   		]
	   	});
   	}

   	/*
	==============================================================
		Teacher Slider Script Start
	============================================================== */
	if($('#keo_teacher_slider').length){
		$('#keo_teacher_slider').slick({
			dots: true,
	   		arrows: false,
	   		autoplay:true,
  			autoplaySpeed:1500,
	   		prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	   		nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	   		infinite: false,
	   		speed: 1000,
	   		slidesToShow: 3,
	   		slidesToScroll: 1,
	   		centerMode: false,
			responsive: [
			{
				breakpoint: 1367,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
			{
	   			breakpoint: 767,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 620,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 520,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 480,
	   			settings: {
	   				slidesToShow: 1,
	   				slidesToScroll: 1
	   			}
	   		}
			]
		});
	}
	/*
	==============================================================
		Class Single Script Start
	============================================================== */
	if($('#keo_class_single_slider').length){
		$('#keo_class_single_slider').slick({
			dots: false,
	   		arrows: false,
	   		autoplay:true,
  			autoplaySpeed:1500,
	   		prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	   		nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	   		infinite: true,
	   		speed: 1000,
	   		slidesToShow: 3,
	   		centerMode: true,
			responsive: [
			{
				breakpoint: 1367,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
			{
	   			breakpoint: 767,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 520,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1,
	   			}
	   		},
	   		{
	   			breakpoint: 480,
	   			settings: {
	   				slidesToShow: 1,
	   				slidesToScroll: 1,
	   			}
	   		}
			]
		});
	}

	/*
	==============================================================
		Testimonial Script Start
	============================================================== */
	if($('#keo_testimonial_slider').length){
		$('#keo_testimonial_slider').slick({
			dots: false,
	   		arrows: false,
	   		autoplay:true,
  			autoplaySpeed:1500,
	   		prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	   		nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	   		infinite: false,
	   		speed: 1000,
	   		slidesToShow: 1,
	   		centerMode: false,
			responsive: [
			{
				breakpoint: 1367,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
				}
			},
			{
	   			breakpoint: 767,
	   			settings: {
	   				slidesToShow: 1,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 520,
	   			settings: {
	   				slidesToShow: 1,
	   				slidesToScroll: 1,
	   			}
	   		},
	   		{
	   			breakpoint: 480,
	   			settings: {
	   				slidesToShow: 1,
	   				slidesToScroll: 1,
	   			}
	   		}
			]
		});
	}
	/*
   	==============================================================
    	Photo Gallery Script
   	==============================================================
   	*/
   	if($('#keo_photo_gallery_slider').length){
	   	$('#keo_photo_gallery_slider').slick({
	   		dots: true,
	   		arrows: false,
	   		autoplay:false,
  			autoplaySpeed:1500,
	   		prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	   		nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	   		infinite: true,
	   		speed: 1000,
	   		slidesToShow: 6,
	   		slidesToScroll: 1,
	   		centerMode: true,
	   		responsive: [
	   		{
	   			breakpoint: 1367,
	   			settings: {
	   				slidesToShow: 5,
	   				slidesToScroll: 1,
	   			}
	   		},
	   		{
	   			breakpoint: 1024,
	   			settings: {
	   				slidesToShow: 3,
	   				slidesToScroll: 1,
	   			}
	   		},
	   		{
	   			breakpoint: 767,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 520,
	   			settings: {
	   				slidesToShow: 2,
	   				slidesToScroll: 1
	   			}
	   		},
	   		{
	   			breakpoint: 480,
	   			settings: {
	   				slidesToShow: 1,
	   				slidesToScroll: 1
	   			}
	   		}
	   		]
	   	});
   	}
	/*
	==============================================================
		Circle Progress Bar Script Start
	============================================================== */
	if($('.keo_skill_bar').length){
		$('.keo_skill_bar').percentageLoader({
			valElement: 'h3',
			strokeWidth: 5,
			bgColor: 'rgba(0,0,0,0.30)',
			ringColor: '#ffffff',
			textColor: '#ffffff',
			fontSize: '40px',
			fontWeight: 'bold'
		});
	}

    /* ==================================================================
		Number Count Up(WayPoints) Script
	=================================================================	*/		
	if($('.keo_counter').length){
		$('.keo_counter').counterUp({
			delay: 10,
			time: 1000
		});
	}

	/* ==================================================================
		Time Counter Script
	=================================================================	*/
	if($('.countdown').length){
		$('.countdown').downCount({ date: '06/01/2019 12:00:00', offset: +1 });
	}

	/* ==================================================================
		Bootstrap Accordian Script
	=================================================================	*/
	$('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
	}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
	});

	/* ==================================================================
		Onclick animate to another Div Script
	=================================================================	*/
	$(".keo_banner_arrow_down").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".keo_build_web_bg").offset().top
	    }, 2000);
	});
	/* ==================================================================
		Magnific Gallery Script
	=================================================================	*/
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by kode4everyone</small>';
			}
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	/*
	  ==============================================================
		   Side Menu Script
	  ==============================================================
	*/
		//Submenu Dropdown Toggle
		if($('.main-header li.dropdown ul').length){
			$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
			
			//Dropdown Button
			$('.main-header li.dropdown .dropdown-btn').on('click', function() {
				$(this).prev('ul').slideToggle(500);
			});
			
			//Disable dropdown parent link
			$('.navigation li.dropdown > a').on('click', function(e) {
				e.preventDefault();
			});
		}
		
		//Hidden Bar Menu Config
		function hiddenBarMenuConfig() {
			var menuWrap = $('.hidden-bar .side-menu');
			// appending expander button
			menuWrap.find('.dropdown').children('a').append(function () {
				return '<button type="button" class="btn expander"><i class="icon fas fa-bars"></i></button>';
			});
			// hidding submenu 
			menuWrap.find('.dropdown').children('ul').hide();
			// toggling child ul
			menuWrap.find('.btn.expander').each(function () {
				$(this).on('click', function () {
					$(this).parent() // return parent of .btn.expander (a) 
						.parent() // return parent of a (li)
							.children('ul').slideToggle();
		
					// adding class to expander container
					$(this).parent().toggleClass('current');
					// toggling arrow of expander
					$(this).find('i').toggleClass('fa-minus fa-bars');
		
					return false;
		
				});
			});
		}
		
		hiddenBarMenuConfig();
		
		//Custom Scroll for Hidden Sidebar
		if ($('.hidden-bar-wrapper').length) {
			$('.hidden-bar-wrapper').mCustomScrollbar();
		}
		
		
		//Hidden Bar Toggler
		if ($('.hidden-bar-closer').length) {
			$('.hidden-bar-closer').on('click', function () {
				$('.hidden-bar').removeClass('visible-sidebar');
			});
		}
		if ($('.hidden-bar-opener').length) {
			$('.hidden-bar-opener').on('click', function () {
				$('.hidden-bar').addClass('visible-sidebar');
			});
		}

	/*
  	=======================================================================
	  	Map Script Script
  	=======================================================================*/
	if($('#map-canvas').length){
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	/*
	=======================================================================
		Google Map Function for Custom Style
	=======================================================================*/
	  function initialize() {
	  	var MY_MAPTYPE_ID = 'custom_style';
	  	var map;
	  	var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
	  	var featureOpts = [
	  	{
	  		stylers: [
	  		{ hue: '#f9f9f9' },			
	  		{ visibility: 'simplified' },
	  		{ gamma: 0.7 },
	  		{ saturation: -200 },
	  		{ lightness: 45 },
	  		{ weight: 0.6 }
	  		]
	  	},
	  	{
	  		featureType: "road",
	  		elementType: "geometry",
	  		stylers: [
	  		{ lightness: 200 },
	  		{ visibility: "simplified" }
	  		]
	  	},
	  	{
	  		elementType: 'labels',
	  		stylers: [		  
	  		{ visibility: 'on' }
	  		]
	  	},
	  	{
	  		featureType: 'water',
	  		stylers: [
	  		{ color: '#ffffff' }
	  		]
	  	}
	  	];	
	  	var mapOptions = {
	  		zoom: 15,
	  		scrollwheel: false,
	  		center: brooklyn,
	  		mapTypeControlOptions: {
	  			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	  		},
	  		mapTypeId: MY_MAPTYPE_ID
	  	};
	  	map = new google.maps.Map(document.getElementById('map-canvas'),
	  		mapOptions);
	  	var styledMapOptions = {
	  		name: 'Custom Style'
	  	};
	  	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	  	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	  }

	});

	/*
  	=======================================================================
		Isotop Gallery
  	=======================================================================
  	*/
  	$(window).on('load', function() {
  		$('.isotopeFilter a').on('click', function(){
  			$('.isotopeFilter .current').removeClass('current');
  			$(this).addClass('current');
  			var selector = $(this).attr('data-filter');
  			$container.isotope({
  				filter: selector,
  				animationOptions: {
  					duration: 750,
  					easing: 'linear',
  					queue: false
  				}
  			});
  			return false;
  		});

	    // init Isotope
	    if ($('.isotopeContainer').length) {
	    	var $container = $('.isotopeContainer');
	    	$container.isotope({
	    		filter: '*',
	    		animationOptions: {
	    			duration: 750,
	    			easing: 'linear',
	    			queue: false
	    		}
	    	});
	    }
	});