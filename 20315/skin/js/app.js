$(function(){

	$(".rightFix .share").hover(function(){
		$(this).find(".box").stop(true,true).slideDown();
	},function(){
		$(this).find(".box").stop(true,true).slideUp();
	});
	$(".fix_top").click(function(){
		 $("body, html").stop().animate({"scrollTop":"0px"});
	})
	$("#timeline .icon").hover(function(){
		$(this).addClass("hvrrat").siblings(".icon").removeClass("hvrrat");
		},function(){
		$(this).removeClass("hvrrat");
	})
	//设置计数
	$.fn.countTo = function (options) {
		options = options || {};
		return $(this).each(function () {
			//当前元素的选项
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			//更新值
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
			    increment = (settings.to - settings.from) / loops;
			//更改应用和变量
			var self = this,
			$self = $(this),
			loopCount = 0,
			value = settings.from,
			data = $self.data('countTo') || {};
			$self.data('countTo', data);
			//如果有间断，找到并清除
			if (data.interval) {
				clearInterval(data.interval);
			};
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			//初始化起始值
			render(value);
			function updateTimer() {
				value += increment;
				loopCount++;
				render(value);
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				if (loopCount >= loops) {
					//移出间隔
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
			});
        };
        $.fn.countTo.defaults={
        	from:0,               //数字开始的值
        	to:0,                 //数字结束的值
        	speed:1000,           //设置步长的时间
        	refreshInterval:100,  //隔间值
        	decimals:0,           //显示小位数
        	formatter: formatter, //渲染之前格式化
        	onUpdate:null,        //每次更新前的回调方法
        	onComplete:null       //完成更新的回调方法
        };
        function formatter(value, settings){
        	return value.toFixed(settings.decimals);
        }
        //自定义格式
        $('#count-number').data('countToOptions',{
        	formmatter:function(value, options){
        		return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        	}
        });
        //定时器
        $('.timer').each(count);
        function count(options){
        	var $this=$(this);
        	options=$.extend({}, options||{}, $this.data('countToOptions')||{});
        	$this.countTo(options);
        }


	// Handle click on toggle search button
	$('#toggle-search').click(function() {
		$('#search-form, #toggle-search').toggleClass('open');
		return false;
	});

	// Handle click on search submit button
	$('#search-form input[type=submit]').click(function() {
		$('#search-form, #toggle-search').toggleClass('open');
		return true;
	});

	// Clicking outside the search form closes it
	$(document).click(function(event) {
		var target = $(event.target);
  
		if (!target.is('#toggle-search') && !target.closest('#search-form').size()) {
			$('#search-form, #toggle-search').removeClass('open');
		}
	});



	$(".lijizhuce .tijiao").click(function(){	
		if($(".ydewm").is(":visible")){
			$(".ydewm").hide();
		}else{
			$(".ydewm").show();
		}
		if($(".ydewmbg").is(":visible")){
			$(".ydewmbg").hide();
		}else{
			$(".ydewmbg").show();
		}
	});
	$(".modal-close").click(function(){	
			$(".ydewmbg").hide();
	});
});
	window._bd_share_config = {
		share : [{
			"bdSize" : 16
		}],
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];