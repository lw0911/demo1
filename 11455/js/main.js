(function ($) {
 "use strict";

	/*---------------------
	Active for preloader
	-----------------------*/
	$('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(100).css({'overflow':'visible'});
	
	/*---------------------
	Active for Mobile Menu
	-----------------------*/
	$('#mobile-menu').sidr();	
	
	/*-------------------------------
	 1. owl-carousel for Tab slider
	--------------------------------*/
	$(".short-width-slider .slider1").owlCarousel({
		autoPlay: false,
		center: true,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,4], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});
	/*-------------------------------
	 1. owl-carousel for Tab slider
	--------------------------------*/
	$(".featured_producs .slider1").owlCarousel({
		autoPlay: false,
		center: true,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,4], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});

	$(".short-width-slider .slider1").owlCarousel({
		autoPlay: false,
		center: true,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,4], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});

	$(".slider2").owlCarousel({
		autoPlay: false,
		center: true,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,4], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});

	$(".slider3").owlCarousel({
		autoPlay: false,
		center: true,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,4], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});		
	/*--------------------------------
	3.owl-carousel for brand item
	----------------------------------*/
	$(".brand_item").owlCarousel({
		autoPlay: false,
		center: true,
		items : 6, //10 items above 1000px browser width
		itemsDesktop : [1000,5], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,4], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,2], // itemsMobile disabled - inherit from itemsTablet option
		pagination:true ,
		navigation:false,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});	
	/*--------------------------------
	3.owl-carousel for brand item
	----------------------------------*/
	$(".brand_items").owlCarousel({
		autoPlay: false,
		center: true,
		items : 6, //10 items above 1000px browser width
		itemsDesktop : [1000,5], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,4], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,2], // itemsMobile disabled - inherit from itemsTablet option
		pagination: false ,
		navigation: true ,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});
		
	/*--------------------------------
	4.owl-carousel for small slider
	----------------------------------*/
	$(".small_slider").owlCarousel({
		autoPlay: true,
		center: true,
		items : 1, //1 items above 1000px browser width
		itemsDesktop : [1000,1], //1 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [600,1], //1 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:true,
		navigation:false,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});
		
	/*--------------------------------
	5.owl-carousel for client
	----------------------------------*/
	$(".all_client").owlCarousel({
		autoPlay: true,
		center: true,
		items : 1, //1 items above 1000px browser width
		itemsDesktop : [1000,1], //1 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [600,1], //1 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});
	
	/*--------------------------------
	6.owl-carousel for all blog
	----------------------------------*/
	$(".all_blog").owlCarousel({
		autoPlay: false,
		center: true,
		items : 3, //3 items above 1000px browser width
		itemsDesktop : [1000,3], //3 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,2], //1 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});
	
	
	/*--------------------------------
	7.owl-carousel for bxslider
	----------------------------------*/
	$(".bxpage_slider").owlCarousel({
		autoPlay: true,
		center: true,
		items : 4, //4 items above 1000px browser width
		itemsDesktop : [1000,4], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,2], //1 items between 600 and 0
		itemsMobile : [600,2], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:false,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});
		
	/*--------------------------------
	8.owl-carousel for slider8
	----------------------------------*/
	$(".slider8").owlCarousel({
		autoPlay: false,
		center: true,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,4], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination:false,
		navigation:false,
		navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"]
	});
		/*----------------------------
	 wow js active
	------------------------------ */
	 new WOW().init();
			
	/*---------------------
	GO-TOP
	-----------------------*/
	$(window).on('scroll',function() {
	  if ($(this).scrollTop() > 400) {
		$('.go-top').fadeIn(400);
	  } else {
		$('.go-top').fadeOut(200);
	  }
	});
	// Animate the scroll to top
	$('.go-top').on('click',function(event) {
	  event.preventDefault();
	  
	  $('html, body').animate({scrollTop: 0}, 3000);
	})
    // price slider=========
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 100,
			values: [ 10, 90 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
	/*-------------------------
	Active for bxslider
	--------------------------*/
	$('#gallery_imgs').bxSlider({
	  pagerCustom: '#bx-pager'
	});
	
	/*-------------------------
	Active for fancybox
	--------------------------*/
	$('.fancybox').fancybox();
	
	/*-------------------------
	login toggle function
	--------------------------*/
	 $( '#showlogin' ).on('click', function() {
        $( '#login' ).slideToggle(900);
     });
        
	/*-------------------------
	Create an account toggle function
	--------------------------*/
	 $( '#cbox' ).on('click', function() {
        $( '.cbox_info' ).slideToggle(900);
     });
	/*-------------------------
	Ship to a different address toggle function
	--------------------------*/
	 $( '#cboxss' ).on('click', function() {
        $( '#anotheraddress' ).slideToggle(900);
     });
        
	/*---------------------
	   scrollUp
	--------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });	
	/*---------------------
	Active for Easytabs
	-----------------------*/
	$('#tab-container').easytabs();

})(jQuery);