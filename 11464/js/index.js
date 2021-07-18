$(function() {
	//banner
	function setImgMax(img, imgW, imgH, tW, tH) {
		var tWidth = tW || w_width;
		var tHeight = tH || w_height;
		var coe = imgH / imgW;
		var coe2 = tHeight / tWidth;
		if(coe < coe2) {
			var imgWidth = tHeight / coe;
			img.css({
				height: tHeight,
				width: imgWidth,
				left: -(imgWidth - tWidth) / 2,
				top: 0
			});
		} else {
			var imgHeight = tWidth * coe;
			img.css({
				height: imgHeight,
				width: tWidth,
				left: 0,
				top: -(imgHeight - tHeight) / 2
			});
		};
	};

	function initBox() {
		w_width = jQuery(window).width();
		w_height = jQuery('.banner').height();
		$('.banner').css('height', w_height);
		$('.banner .bannerfix >li').css('height', w_height);
		setImgMax($('.banner .bannerfix li .bimg'), 1920, 830, w_width, w_height);
	};
	initBox();
	jQuery(window).resize(function() {
		initBox();
	});
	jQuery(".banner").flexslider({
		animation: "fade",
		easing: "swing",
		slideshowSpeed: 6000,
		animationSpeed: 0,
		pauseOnAction: false,
		directionNav: false,
		controlNav: true,
		start: function(slider) {
			jQuery('.banner .bannerfix li').eq(slider.currentSlide).addClass("imgIn").siblings().removeClass("imgIn");
		},
		after: function(slider) {
			jQuery('.banner .bannerfix li').eq(slider.currentSlide).addClass("imgIn").siblings().removeClass("imgIn");
		}
	});	
	
	
	

})