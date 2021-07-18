// strict mode
"use strict";


/**
 * Removing pre Loader
 */

$(window).on('load', function(){
	$('#pre-loader').fadeOut('slow').remove();
});

/**
 * Initializing bootstrap carousel
 */

$('.carousel').carousel();


/* animated carousel */
//Function to animate slider captions 
function doAnimations( elems ) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';
    
    elems.each(function () {
        var $this = $(this),
            $animationType = $this.data('animation');
        $this.addClass($animationType).one(animEndEv, function () {
            $this.removeClass($animationType);
        });
    });
}

//Variables on page load 
var $redoneCarousel = $('#redone-carousel'),
    $firstAnimatingElems = $redoneCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    
//Initialize carousel 
$redoneCarousel.carousel();

//Animate captions in first slide on page load 
doAnimations($firstAnimatingElems);

//Pause carousel  
//$redoneCarousel.carousel('pause');


//Other slides to be animated on carousel slide event 
$redoneCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
});



// bootstrap scrollspy
$('body').scrollspy({ target: '#redone-navbar' });


/**
 * Text Rotator for home-image
 */
if($('body').hasClass('home-image')){
	$(".rotate").textrotator({
	  animation: "flipCube", // Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
	  separator: ",", 
	  speed: 4000
	});
}


/**
 * Text Rotator for home-gradient
 */
if($('body').hasClass('home-gradient')){
	$(".rotate").textrotator({
	  animation: "flipUp", //Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
	  separator: ",",
	  speed: 4000 
	});
}


/**
 * Parallax Bg Initializing
 */
if($('body').hasClass('home-parallax')){

	$('#scene').parallax();
}



/**
 * Initializing portfolio filtering
 */
$(function(){
  $('#redone-portfolio').mixItUp({
   
  });
});


/**
 * Initializing the Magnific Popup js
 */
$('.magnific-popup').magnificPopup({
  type: 'image'
  // other options
});

/**
 * Initializing testimonial carousel (bx slider)
 */
$('.testimonial-carousel').bxSlider({
	controls: false
});


/**
 * Initializing recent cause carousel on Charity Demo (bx slider) 
 */
$('.cause-slider').bxSlider({
	pager: false,
	controls: true,
	slideWidth: 360,
    minSlides: 1, 
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30
});


/**
 * Initializing featured property slider on Real Estate Demo (bx slider)
 */
$('.featured-property-slider').bxSlider({
	controls: true,
	pager: false
});


/**
 * Initializing featured content slider on Political Demo (bx slider)
 */
$('.featured-content-slider-full').bxSlider({
	auto: true,
	mode: 'fade',
	controls: false,
	pager: false
});




/**
 * fun-facts Initialization
 */
	
	$('.fun-facts').waypoint(function(){

		$('.clients-number').countTo();

		$('.templates-number').countTo();

		$('.projects-number').countTo();
		$('.awards-number').countTo();

		// this is for pilitical demo
		
		$('.fun-facts .content-block h2').countTo();

	}, { offset:500});



	// initializing fun facts only for charity demo
	
	$('.facts-events').waypoint(function(){
		$('.facts-block h2 strong').countTo();
	}, {offset: 500});





/**
 * Progress-bar Initialization
 */


$('.our-skill').waypoint(function(){
	$('.progress .progress-bar').progressbar({
    	transition_delay: 0
    });
}, { offset: 0});


/**
 * Initializing the circular progressbar for charity 
 */


$('.circle').waypoint(function(){

	$('.circle').circleProgress({
        value: 0.85,
        size: 120,
        fill: {
            gradient: ["red", "orange"]
        }
    }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
	});

}, {offset: 500});



/**
 * Initializing smooth-scroll
 */

smoothScroll.init();


/**
 * Initializing Count down on Food & Restaurant demo
 */
if($('body').hasClass('home-food-restaurant')){

    $('.countdown').downCount({
        date: '09/09/2017 12:00:00',
        offset: +10
    });
}


/* date picker initializing for Food & Restaurant demo */
if($('body').hasClass('home-food-restaurant')){

	 $('#booking-date').datepicker({
	    format: 'dd/mm/yyyy',
	    autoclose: true
	});

}


/**
 * Initializing Count down on POLITICAL demo
 */
if($('body').hasClass('home-political')){

    $('.countdown').downCount({
        date: '09/09/2018 12:00:00',
        offset: +10
    });
}


/**
 * Carousel image to background image
 */

$('#redone-carousel .item .carousel-image').each(function(){
	var imgSrc = $(this).attr('src');

	$(this).parent().css('background-image', 'url(' + imgSrc + ')');

	$(this).remove();
});


/**
 * Controlling the collapse icon and active collapse header color
 */

$('.redone-accordion .panel-default').on('show.bs.collapse', function () {
     $(this).addClass('active');
});

$('.redone-accordion .panel-default').on('hide.bs.collapse', function () {
     $(this).removeClass('active');
});


/**
 * navbar search
 */
$(function() { 

    $('a[href="#toggle-search"], .redone-navbar .redone-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
		event.preventDefault();
		$('.redone-navbar .redone-search .input-group > input').val('');
		$('.redone-navbar .redone-search').toggleClass('open');
		$('a[href="#toggle-search"]').closest('li').toggleClass('active');

		if ($('.redone-navbar .redone-search').hasClass('open')) {
			/* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
			setTimeout(function() { 
				$('.redone-navbar .redone-search .form-control').focus();
			}, 100);
		}			
	});

	$(document).on('keyup', function(event) {
		if (event.which == 27 && $('.redone-navbar .redone-search').hasClass('open')) {
			$('a[href="#toggle-search"]').trigger('click');
		}
	});
    
});


/**
 * navbar fixed top
 */
var navbar = $('.redone-navbar');
var heroSection = $('.hero-section');
var pageBanner = $('.page-title-banner');
//var origOffsetY = heroSection.offset().top;
var targetHeight = '';

if($('body').hasClass('home')){

	targetHeight = heroSection.offset().top + heroSection.height();
}else{
	targetHeight = pageBanner.offset().top + pageBanner.height();
}

function scroll() {

	if($('body').hasClass('home-main')){ 

	    if ($(window).scrollTop() >= targetHeight) {
	        navbar.addClass('navbar-fixed-top');
	        $('body').addClass('navbar-padding');
	    } else {
	        navbar.removeClass('navbar-fixed-top');
	        $('body').removeClass('navbar-padding');
	    }

	    /**
		 * navbar auto hide
		 */
		
		if($('.redone-navbar').hasClass('navbar-1')){


			// this feature is enabled only on multipage
		   // $(".navbar-fixed-top").autoHidingNavbar({
			  // see next for specifications
			  
			 // });

		}

	}


	if($('body').hasClass('home-political')){

		if ($(window).scrollTop() >= targetHeight) {
	        navbar.addClass('navbar-bg');
	        
	    } else {
	        navbar.removeClass('navbar-bg');
	        
	    }


	}


	if($('.navbar').hasClass('navbar-2')){

		if ($(window).scrollTop() >= targetHeight) {
	        navbar.addClass('navbar-fixed-top');
	        $('body').css('padding-top', navbar.height());
	    } else {
	        navbar.removeClass('navbar-fixed-top');
	        $('body').css('padding-top', 0);
	    }

	}


	if($('.navbar').hasClass('navbar-3')){

		if($(window).scrollTop() >= targetHeight){

			$('.navbar').addClass('navbar-fixed-top');
			 $('body').css('padding-top', navbar.height());

		}else{
			$('.navbar').removeClass('navbar-fixed-top');
			$('body').css('padding-top', 0);
		}
	}


	if($('.navbar').hasClass('navbar-5')){

		if ($(window).scrollTop() >= targetHeight) {
	        navbar.addClass('navbar-fixed-top');
	        $('body').css('padding-top', navbar.height());
	    } else {
	        navbar.removeClass('navbar-fixed-top');
	        $('body').css('padding-top', 0);
	    }

	}


}

document.onscroll = scroll;



/**
 * controlling height of some blocks
 */

// why choose us section height
var whyChooseUsHeight = $('.why-choose-us').height();

if($(window).width() > 992){
	$('.why-choose-us .image-area').css('height', whyChooseUsHeight);
}


// how we work section height
var howWeWorkHeight = $('.how-we-work').height();

if($(window).width() > 992){
	$('.how-we-work .image-area').css('height', howWeWorkHeight);

}


// facts-block height of charity demo

var factsEventsHeight = $('.facts-events').height();

if( $(window).width() > 1200){

	$('.facts-events .facts-block').css('height', factsEventsHeight);
}



/**
 * WINDO RESIZE EVENT
 */
$(window).resize(function(){

	/**
	 * controlling height of some blocks on resize
	 */

	// why choose us section height
	var whyChooseUsHeight = $('.why-choose-us').height();

	if($(window).width() > 992){
		$('.why-choose-us .image-area').css('height', whyChooseUsHeight);
	}


	// how we work section height
	var howWeWorkHeight = $('.how-we-work').height();

	if($(window).width() > 992){
		$('.how-we-work .image-area').css('height', howWeWorkHeight);

	}


	// facts-block height of charity demo

	var factsEventsHeight = $('.facts-events').height();

	if( $(window).width() > 1200){

		$('.facts-events .facts-block').css('height', factsEventsHeight);
	}

});