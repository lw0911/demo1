// JavaScript Document

	$('.nav').nav();

	$(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");;
    });

/* ------------ fix-hight JS Start ------------- */
$(function(){
	var windowH = $(window).height();
	var wrapperH = $('.max-fix-height').height();
	//if(windowH > wrapperH) 
	{                            
		$('.max-fix-height').css({'max-height':($(window).height())+'px'});
	}
	$(window).resize(function(){
		var windowH = $(window).height();
		$('.max-fix-height').css('max-height', (windowH)+'px');
	})          
});
/* ------------ fix-hight JS End ------------- */


/* ------------ fix-hight JS Start ------------- */
$(function(){
	var windowH = $(window).height();
	var wrapperH = $('.fix-height').height();
	//if(windowH > wrapperH) 
	{                            
		$('.fix-height').css({'height':($(window).height())+'px'});
	}
	$(window).resize(function(){
		var windowH = $(window).height();
		$('.fix-height').css('height', (windowH)+'px');
	})          
});
/* ------------ fix-hight JS End ------------- */


/* ------------ Header JS Start ------------- */
	
	$(document).ready(function () {
		$('#menu-toggle').click(function(){
			if($('#menu').hasClass('open')){
				$('#menu').removeClass('open');
				$('#menu-toggle').removeClass('open');
			}else{
				$('#menu').addClass('open');
				$('#menu-toggle').addClass('open');
			}
		});
		
	});
	
	;
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('header').addClass("sticky");
		}
		else{	
			$('header').removeClass("sticky");
		}
	  });
	  
	  $(document).ready(function () {
		$('.opener').click(function(){
			if($('.top-search-bar').hasClass('open')){
				$('.top-search-bar').removeClass('open');
			}else{
				$('.top-search-bar').addClass('open');
			}
		});
	});
/* ------------ Header JS Start  ------------- */

/* ------------ Home Flex-banner JS Start ------------- */
	$(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        sync: '.text-slider',
        directionNav: true
      });
    });
    
    $('.text-slider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: false,
        direction: "vertical",
        animationSpeed: 500,
        smoothHeight: false
    });
/* ------------ Home Flex-banner JS End ------------- */

/* ------------ OWL Slider Start  ------------- */
	$(document).ready(function() {
	  $(".client").owlCarousel({
	 
		  //navigation : true,  Show next and prev buttons
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoPlay: false,
		  pagination:true,
		  singleItem:true
	 
	  });
	});
	
	$(document).ready(function() {
	  $(".autoplay").owlCarousel({
	 
		  //navigation : true,  Show next and prev buttons
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoPlay: true,
		  pagination:true,
		  singleItem:true
	 
	  });
	});
	
	$(document).ready(function() {

	  var owl = $("#team-slider");
	 
	  owl.owlCarousel({
		  items : 4, //10 items above 1000px browser width
		  itemsDesktop : [991,2], //5 items between 1000px and 901px
		  itemsDesktopSmall : [991,2], // betweem 900px and 601px
		  itemsTablet: [767,1], //2 items between 600 and 0
		  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option/**/
		  pagination: false,
	  });
	 
	  // Custom Navigation Events
	  $(".owl_next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".owl_prev").click(function(){
		owl.trigger('owl.prev');
	  })
	});
	
	
	/*  Blog Page Slider  */
	$(document).ready(function() {
	  var owl = $("#blog-slider");
	  owl.owlCarousel({
		  items : 1, //1 items above 1000px browser width
		  itemsDesktop : [991,1], //5 items between 1000px and 901px
		  itemsDesktopSmall : [991,1], // betweem 900px and 601px
		  itemsTablet: [767,1], //2 items between 600 and 0
		  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option/**/
		  pagination: false,
	  });
	 
	  // Custom Navigation Events
	  $(".owl_next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".owl_prev").click(function(){
		owl.trigger('owl.prev');
	  })
	});

	/* Shop Page JS Start*/
	$(document).ready(function() {
		var owl = $("#related-products");
		owl.owlCarousel({
			  items : 4, //10 items above 1000px browser width
			  itemsDesktop : [1000,4], //5 items between 1000px and 901px
			  itemsDesktopSmall : [900,2], // betweem 900px and 601px
			  itemsTablet: [600,1], //2 items between 600 and 0
			  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			  pagination: false
		  });
		   // Custom Navigation Events
		  $(".owl_next").click(function(){
			owl.trigger('owl.next');
		  })
		  $(".owl_prev").click(function(){
			owl.trigger('owl.prev');
		  })    
		});


	$("#tabs li a").click(function(e){
		var title = $(e.currentTarget).attr("title");
		$("#tabs li a").removeClass("selected")
		$(".tab_content li div").removeClass("selected")
		$(".tab-"+title).addClass("selected")
		$(".items-"+title).addClass("selected")
		$("#items").attr("class","tab-"+title);
	  });

	/* brand logo */
		$(document).ready(function() {
		  var owl = $("#brand-logo");
		  owl.owlCarousel({
			  items : 5, //10 items above 1000px browser width
			  itemsDesktop : [1000,3], //5 items between 1000px and 901px
			  itemsDesktopSmall : [900,2], // betweem 900px and 601px
			  itemsTablet: [600,1], //2 items between 600 and 0
			  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			   pagination: false
		  });
		  // Custom Navigation Events
		  $(".brand_next").click(function(){
			owl.trigger('owl.next');
		  })
		  $(".brand_prev").click(function(){
			owl.trigger('owl.prev');
		  })
		});
	/* brand logo */
	
	/* Shop Page JS End*/

	/* Single Work Slider JS Start*/
	$(document).ready(function() {
		  var owl = $("#single-work-slider");
		  owl.owlCarousel({
			  items : 1, //1 items above 1000px browser width
			  itemsDesktop : [991,1], //5 items between 1000px and 901px
			  itemsDesktopSmall : [991,1], // betweem 900px and 601px
			  itemsTablet: [767,1], //2 items between 600 and 0
			  pagination: false,
		  });
		 
		  // Custom Navigation Events
		  $(".owl_next").click(function(){
			owl.trigger('owl.next');
		  })
		  $(".owl_prev").click(function(){
			owl.trigger('owl.prev');
		  })
		});
	/* Single Work Slider JS End*/

/* ------------ OWL Slider End  ------------- */

/* ------------ Blog JS Start  ------------- */
	$(window).load(function(){
		
		$('.blog-content').css({visibility:'visible'});
	
		$('.blog-content').masonry({
			itemSelector: '.blog-item:not(.filtered)',
			//isFitWidth: true,
			isResizable: true,
			
		});
		
	});
	
	$( window ).resize(function() {
			$('.blog-content').masonry('reload');
		});
/* ------------ Blog JS End  ------------- */

/* ------------ work JS start  ------------- */
$(document).ready(function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.grid-item',
    getSortData: {
    }
  });

  // bind filter click

    $('.portfolio-filter').on('click', 'li a', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    $container.isotope({
      filter: filterValue
    });
  });

});
/* ------------ work JS End  ------------- */


/* ------------ Product Zoom JS Start ------------- */
$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});

/* ------------ Product Zoom JS End ------------- */