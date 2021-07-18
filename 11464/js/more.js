$(function() {

	$(':input[type=text]').bind({
		focus: function() {
			if(this.value == this.defaultValue) {
				this.value = '';
			}
		},
		blur: function() {
			if(this.value == '') {
				this.value = this.defaultValue;
			}
		}
	})
	//返回顶部
	$('.to-top').click(function() {
		$('body,html').stop().animate({
			scrollTop: 0
		}, 500)
	});
	//导航
	$(window).scroll(function() {
		var ST = $(window).scrollTop();
		if(ST > 0) {
			$('.top').addClass('on');
		} else {
			$('.top').removeClass('on')
		}
		topShow();
	})
	topShow();

	function topShow() {
		ST = $(window).scrollTop();
		if(ST > 0) {
			$('.to-top').removeClass('tophide');
		} else {
			$('.to-top').addClass('tophide');
		}
	};
	jQuery(".section6").slide({
		titCell: ".tab-hd li",
		mainCell: ".tab-bd",
		delayTime: 0
	});
	jQuery(".txtMarquee-top").slide({
		mainCell: ".bd ul",
		autoPlay: true,
		effect: "top",
		interTime: 1500,
		trigger: "click",
		vis: 1
	});
	jQuery(".zs-sec8 .right").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});
	jQuery(".zs-sec9 .right").slide({
		mainCell: ".bd ul",
		autoPlay: true
	});
	
	
	jQuery(".sec7-rewrite .bd li").first().before(jQuery(".sec7-rewrite .bd li").last());	
	jQuery(".sec7-rewrite").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: true,
		vis: 3,
		autoPage: true,
		trigger: "click"
	});
	
	

	//tab选项卡	
	$('.s6-fen li').mouseenter(function() {
		var $this = $(this),
			index = $this.index();
		$this.addClass('on').siblings().removeClass('on');
		$('.sec6-recont .tab-pal').eq(index).addClass('on').siblings('.tab-pal').removeClass('on')
	})





})