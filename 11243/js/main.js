(function ($) {
 "use strict";
$('.mabile_menu').click(function() {
    $(this).find('.mobile_menus').first().stop(true, true).slideToggle(400);
    }, function() {
    $(this).find('.mobile_menus').first().stop(true, true).slideToggle(400)
});
	/*---------------------
	 TOP Menu Stick
	--------------------- */
		var s = $("#sticker");
		var pos = s.position();					   
		$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			if (windowpos > pos.top) {
			s.addClass("stick");
			} else {
				s.removeClass("stick");	
			}
		});					
	//one page selection page
	$('.navid').onePageNav({
		currentClass: 'current',
		changeHash: true,
		scrollSpeed: 1000,
		scrollThreshold: 0.5,
		filter: ':not(.external)',
		easing: 'swing',
		begin: function() {
			//I get fired when the animation is starting
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function(jQuerycurrentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});	
	/*---------------------
	gallery_owlt-list
	--------------------- */
	  $(".gallery_owl").owlCarousel({
	 
			autoPlay: false, //Set AutoPlay to seconds here					 
			slideSpeed:600,
			rewindNav : false,
			items : 1,
			itemsDesktop : [1169,1],
			itemsTablet: [991,1],
			itemsTabletSmall: [767,1],
			itemsMobile : [320,1],							  
			pagination : false,				 
			navigation : true,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	  	/*---------------------
		team_own-list
		--------------------- */
	  $(".team_own").owlCarousel({
	 
			autoPlay: false, //Set AutoPlay to seconds here					 
			slideSpeed:600,
			rewindNav : false,
			items : 4,
			itemsDesktop : [1169,3],
			itemsTablet: [991,2],
			itemsTabletSmall: [767,1],
			itemsMobile : [320,1],							  
			pagination : false,				 
			navigation : true,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	  
	  	/*---------------------
	    team_own2-list
		--------------------- */
	  $(".team_own2").owlCarousel({
	 
			autoPlay: false, //Set AutoPlay to seconds here					 
			slideSpeed:600,
			rewindNav : false,
			items : 3,
			itemsDesktop : [1169,3],
			itemsTablet: [991,2],
			itemsTabletSmall: [767,1],
			itemsMobile : [320,1],							  
			pagination : false,				 
			navigation : true,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	  
    /*---------------------
	newp_carsol-list
	--------------------- */
	  $(".newp_carsol").owlCarousel({
	 
			autoPlay: false, //Set AutoPlay to seconds here					 
			slideSpeed:600,
			rewindNav : false,
			items : 1,
			itemsDesktop : [1169,1],
			itemsTablet: [991,1],
			itemsTabletSmall: [767,1],
			itemsMobile : [320,1],							  
			pagination : false,				 
			navigation : false,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	  /*---------------------
	 blog_carsol-list
	--------------------- */
	  $(".blog_carsol").owlCarousel({
	 
			autoPlay: false, //Set AutoPlay to seconds here					 
			slideSpeed:600,
			rewindNav : false,			
			items : 2,
			itemsDesktopSmall : [1169,2],
			itemsTablet: [991,1],
			itemsTabletSmall: [767,1],
			itemsMobile : [320,1],							  
			pagination : false,				 
			navigation : false,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });	  
	  /*---------------------
	 single_blog_owl-list
	--------------------- */
	  $(".single_blog_owl").owlCarousel({	 
			autoPlay: false, //Set AutoPlay to seconds here					 
			slideSpeed:600,
			rewindNav : false,			
			items : 1,
			itemsDesktopSmall : [1169,1],
			itemsTablet: [991,1],
			itemsTabletSmall: [767,1],
			itemsMobile : [320,1],							  
			pagination : false,				 
			navigation : true,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
    /*---------------------
	 client_own-list
	--------------------- */
	  $(".client_own").owlCarousel({	 
			autoPlay: false, //Set AutoPlay to seconds here					 
			slideSpeed:600,
			rewindNav : false,			
			items : 1,
			itemsDesktop : [1169,1],
			itemsTablet: [991,1],
			itemsTabletSmall: [767,1],
			itemsMobile : [479,1],							  
			pagination : false,				 
			navigation : true,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });		  

	/*---------------------
	 collapse 
	--------------------- */ 
	$('.panel_heading a').on('click', function(){
		$('.panel_heading a').removeClass('active');
		$(this).addClass('active');
	})
	/*---------------------
	counterUp
	--------------------- */	
	$('.number').counterUp({
		delay: 10,
		time: 1000
	});
	/*----- maxitup -----*/		
	$(function(){
	$('.project_maxitup').mixItUp();
	});
	/* default settings */
    $('.venobox').venobox();
	/*----- main slider -----*/	
	$('#mainSlider').nivoSlider({
		directionNav: true,
		animSpeed: 500,
		slices: 18,
		pauseTime: 20000,
		pauseOnHover: false,
		controlNav: false,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	});

})(jQuery);    