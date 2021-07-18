(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		


        
        
        
        //hero-area height equation
		$(window).bind('resizeEnd', function () {
			$(".hero-area").height($(window).height() - 60);
		});
        
        var windowWidth = $(window).width();
        
        if(windowWidth < 991){
            $(window).bind('resizeEnd', function () {
                $(".hero-area").height($(window).height());
            });
        }
        
		$(window).resize(function () {
			if (this.resizeTO) clearTimeout(this.resizeTO);
			this.resizeTO = setTimeout(function () {
				$(this).trigger('resizeEnd');
			}, 300);
		}).trigger("resize");
        
        
        
        
        
		
		// Header-Area Sticky
			$(".header-area").sticky({topSpacing:0});
			
		
		// Header Menu collapse in will remove when will click menu to smooth scroll.
		$('.nav.navbar-nav').click(function(){
			$('.navbar-collapse').removeClass('in', 4000);
		});
		
		
		
		// Search box click Function
		$('.search-icon').find('span.search-trigger').on('click', function(){
			$('.search-box').toggleClass('visible').fedeIn(2000);
		});
		
		
		
		// jQuery for owl-Carousel-2
		$(".partner-slider").owlCarousel({
			items: 5,
			margin: 70,
			loop: true,
			autoplay: true,
			autoplayTimeout: 2000,
			smartSpeed: 1000
		});
		
		
			
			
			
			
			
		// this code is for instafeed jquery
		//var userFeed = new Instafeed({
			//limit: 6,
			//get: 'tagged',
			//tagName: 'food',
			//accessToken: '1189321718.467ede5.59564e795f3d4cedbd2d5c5a33b03ca1',
			//template: '<a target="_blank" href="{{link}}"><img src="{{image}}" /></a>',
		//});
		//userFeed.run(); 
		
		
	
		//GoogleMap Area
		
		 var map;
		  function initMap() {
			map = new google.maps.Map(document.getElementById('googleMap'), {
			  center: {lat: 23.810332, lng: 90.412518},
			  zoom: 8,
			  icon:'../images/map-marker.png',
			});
		  }

		
		
			
	
	
		
		//OnePage Nav for Section smooth Scroll when click the menu.
		$('#nav').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 1000,
		});
	

		//color-changer
        $('#style-one').click(function () {
            $('body').removeClass('style-one style-two style-three style-four');
            $('body').addClass('style-one');
        });
        $('#style-two').click(function () {
            $('body').removeClass('style-one style-two style-three style-four');
            $('body').addClass('style-two');
        });
        $('#style-three').click(function () {
            $('body').removeClass('style-one style-two style-three style-four');
            $('body').addClass('style-three');
        });
        $('#style-four').click(function () {
            $('body').removeClass('style-one style-two style-three style-four');
			$('body').addClass('style-four');
        });
		$('#style-five').click(function () {
            $('body').removeClass('style-one style-two style-three style-four');
        });
		
        $('#spinner').click(function () {
            $('.color-change').toggleClass('active');
        });
		
    });
	
	
	

	// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow', function(){
			$(this).remove();
		});
	});
	


}(jQuery));	

  