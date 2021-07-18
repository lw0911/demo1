/**
 * Javascript functions for theme appa
 * 
 * @author: Themehexa
 * @author-url: http://themehexa.com
 * @email: support@themehexa.com
 *  
 */

$(document).ready( function($) {

	/*-----------------------/
	/* PRELOADER
	/*----------------------*/
	$(window).load(function(){
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

	/*------------------------------/
	/* DISPLAY FIXED MENU ON SCROLL
	/*-----------------------------*/

	$(window).on( 'scroll', function() {
		if( $(document).scrollTop() > 500 ) {
			$('.main-menu').addClass('active');
		} else {
			$('.main-menu').removeClass('active');
		}
	});


	/*------------------------/
	/* SMOOTH SCROLLING
	/*-----------------------*/

    $('.scroll-section').bind('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        event.preventDefault();        
    });

    /*------------------------------/
    /* HILIGHT MENU ITEMS ON SCROLL
    /*-----------------------------*/
    
    jQuery('body').scrollspy({
       target: '#main-menu'
    })

    /*---------------------------------/
	/* CLOSE MOBILE MENU ON CLICK
	/*--------------------------------*/

    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
    });


	/*-------------------------------/
	/* HERO SHOUT CAROUSEL
	/*------------------------------*/
	
	$('.shout-carousel').owlCarousel({
	    items: 1,
	    autoplay: true,
	    loop: true,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn'
	});

	/*-------------------------------/
	/* SCREENSHOT CAROUSEL
	/*------------------------------*/

	$('.screenshot-carousel').owlCarousel({
	    loop: true,
	    autoplay: true,
	    margin: 25,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        1024:{
	            items:3
	        },
	        1200:{
	        	items: 4
	        }
	    }
	});

	/*---------------------------/
	/* REVIEW CAROUSEL
	/*--------------------------*/

	$('.review-carousel').owlCarousel({
		items: 1,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    loop: true,
	    dots: false,
	    autoplaySpeed: 1000,
	    nav: true,
	    navText: ['<i class="ti-angle-double-left"></i>', '<i class="ti-angle-double-right"></i>']
	})

	/*---------------------------------------/
	/* SCREENSHOT MAGNIFIC POPUP
	/*--------------------------------------*/

	$('.screenshot-carousel').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		fixedContentPos: false,
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	/*-----------------------/
	/* VIDEO MAGNIFIC POPUP
	/*----------------------*/

	$('.play-button').magnificPopup({		
		disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade mfp-with-zoom mfp-img-mobile',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
	});

	/*-----------------------------------/
	/* TRIGGER SUBSCRIBE FORM SUBMIT
	/*----------------------------------*/

	$('#mc-submit').on('click', function(event) {
		event.preventDefault();
		$('#mc-form').trigger('submit');
	});

	/*-------------------------------------------/
	/* Initialize WOW for reveal animation
	/*------------------------------------------*/

	new WOW({ mobile: false	}).init();

	/*-----------------------/
	/* SCROLL TO TOP
	/*----------------------*/

	$(window).scroll( function() {
		if( $(window).scrollTop() > 700 ) {
			$('.move-top').css('bottom', '30px');
		} else {
			$('.move-top').css('bottom', '-100px');
		}
	});

	/*------------------------------------------------------/
	/* MAINCHIMP SUBSCRIPTION USING AJAXCHIMP JQUERY PLUGIN
	/*-----------------------------------------------------*/

	$('#mc-form').ajaxChimp({
	    callback: mailchimpCallback,
	    url: "http://busysimon.us13.list-manage.com/subscribe/post?u=e57b6372c1631c89693a1207f&id=3b2041c804" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
	});

	function mailchimpCallback(resp) {
	     if (resp.result === 'success') {
	     	/*===== Requirs jQuery Toast Plugin =====*/
			$.toast({
			    heading: 'Success',
			    text: 'You have successfully subscribed, please confirm your email.',
			    showHideTransition: 'fade',
			    icon: 'success',
			    hideAfter: 5000, 
			})
	        
	    } else if(resp.result === 'error') {
	        $.toast({
			    heading: 'Error',
			    text: 'Subscription faild! Please try again later.',
			    showHideTransition: 'fade',
			    icon: 'error',
			    hideAfter: 5000, 
			})
	    }  
	}
	
});