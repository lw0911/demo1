/* JavaScript Document */

var LaviOwl = function(){
	
	var mainSlider = function(){
		jQuery('.main-slider').owlCarousel({
			loop:true,
			margin:0,
			center: true,
			nav:false,
			autoplay:true,
			autoplaySpeed: 2000,
			navSpeed: 2000,
			items:1,
			paginationSpeed: 2000,
			slideSpeed: 2000,
			dots: true,
			navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
		});
	}
	
	/* Function ============ */
	return {
		init:function(){
			mainSlider();
		},
		
		load:function(){
			
		},
		
		resize:function(){
			//alert(1);
			mainSlider();
		}
	}
}();

jQuery(document).ready(function() {
    'use strict';
	LaviOwl.init();
	/* image-carousel no margin function by = owl.carousel.js */
	
	
});

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	
	setTimeout(function(){
		jQuery('.main-slider').data('owl.carousel')._invalidated.width = true;
		jQuery('.main-slider').trigger('refresh.owl.carousel');
	}, 2000); 
	
});
/*  Window Resize END */

/* Document .ready END */