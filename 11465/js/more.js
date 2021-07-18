$(function() {
	if(/msie (6.0|7.0|8.0|9.0)/i.test(navigator.userAgent)) {
		window.location.href = 'abandoned.html';
	}

	var swiper = new Swiper('.swiper-container', {
		speed: 1500,
		parallax: true,
		autoplay:true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

	});

	/* 外层tab切换 */
	jQuery(".service .w1200").slide({
		titCell: ".hd li",
		mainCell: ".bd"
	});
	jQuery(".youlian").slide({
		mainCell: ".bd ul",
		vis: 10,
		autoPlay: true,
		effect: "leftMarquee",
		interTime: 50,
		trigger: "click",
	});

})