//banner
$(function(){
	var $firstimg =  $('.banner img').eq(0);
	var img = new Image();	
		img.onload = function () {
		$('.banner').css({'height':$firstimg.innerHeight()});
	}
	img.src = $firstimg.attr("src");
	$(window).resize(function () {
		$('.banner').css({'height':'auto'});
	});
});
/*单选框*/
$(function () {
    $('.w-option').click(function () {
        $(this).siblings('.w-option').children('input').removeClass('checked');
        $(this).children('input').addClass('checked');
    });
});
/*复选框*/
$(function () {
    $('input[type="checkbox"]').on('change', function () {
        $(this)[$(this).prop('checked') ? 'addClass' : 'removeClass']('checked');
    });
});
/*选择下拉框*/
$(function () {
    var selects = $(".w-select-box");
    var i;
    for (i = 0; i < selects.length; i++) {
        selects.eq(i).parent().parent().css({'z-index': 100 - i});
        selects.eq(i).css({'z-index': 100 - i, 'position': 'relative'});
    }
    $('.w-select-option').hide();
    $('.w-select-box .w-select-dt').bind('click', function (e) {
        if ($(this).children('.select-icon').hasClass('select-down')) {
            $(this).children('.select-icon').removeClass('select-down');
            $(this).parent().find('.w-select-option').slideUp();
            e.stopPropagation();
        } else {
            $(this).children('.select-icon').addClass('select-down');
            $(this).parent().find('.w-select-option').slideDown();
            e.stopPropagation();
        }
    })
	$("body").bind("click", function (e) {
		 e = window.event || e; // 兼容IE7
		 obj = $(e.srcElement || e.target);
		 if ($(obj).is(".w-select-box *")) {
		   } else {
			$('.w-select-option').slideUp();
            $('.w-select-dt').children('.select-icon').removeClass('select-down');
		 }
	});
    $('.w-select-option div').click(function () {
        var itemContent = $(this).html();
        $(this).parents('.w-select-dl').find('.w-select-dt .selected').html(itemContent).trigger("contentchanged");
        $(this).parents('.w-select-dl').find('.w-select-option').slideUp();
        $(this).parents('.w-select-dl').find('.w-select-dt').children('.select-icon').removeClass('select-down');
    });
});
/*会员选择下拉框*/
$(function () {
    var selects = $(".select-box-gw");
    var i;
    for (i = 0; i < selects.length; i++) {
        selects.eq(i).parent().parent().css({'z-index': 100 - i});
        selects.eq(i).css({'z-index': 100 - i, 'position': 'relative'});
    }
    $('.select-option-gw').hide();
    $('.select-box-gw .select-dt-gw').bind('click', function (e) {
        if ($(this).data("select") === false) {
            return '';
        }
        $(this).parent().find('.select-option-gw').slideDown();
        e.stopPropagation();
        $(this).parents('.select-dl-gw').find('.select-option-gw div').click(function () {
            var itemContent = $(this).html();
            $(this).parents('.select-dl-gw').find('.select-dt-gw .selected').html(itemContent);
            $(this).parents('.select-dl-gw').find('.select-option-gw').slideUp();
        });

    })
	$("body").bind("click", function (e) {
		 e = window.event || e; // 兼容IE7
		 obj = $(e.srcElement || e.target);
		 if ($(obj).is(".select-box-gw *")) {
		   } else {
			$('.select-option-gw').slideUp();
		 }
	});
});

/*tab切换*/
$(function () {
    $(".info_tab li[data-tab]").click(function () {
        $(this).siblings().removeClass('cur_tab');
        $(this).addClass('cur_tab');
        var data = $(this).attr('data-tab');
        $("div[id^='Tabitem']").hide();
        $("#Tabitem" + data).show();
    });
});
/*收藏滚动*/
$(function () {
    var conBoxChild = $('.collect_listA').html();
    var slideC = function () {
        var visC;
        if ($(window).width() > 960) {
            visC = 5;
        } else if ($(window).width() > 767) {
            visC = 4;
        } else {
            visC = 3;
        }
        $(".myCollectA").slideNew({
            mainCell: ".collect_listA ul",
            autoPage: false,
            effect: "leftLoop",
            autoPlay: true,
            scroll: 1,
            vis: visC,
            prevCell: ".slide_lA",
            nextCell: ".slide_rA"
        });
    }
    slideC();
	var widthOld=$(window).width();
    var widthNew;
    $(window).resize(function () {
	   widthNew=$(window).width();
	   if(widthOld > 960){
		   if(widthNew < 960){
			   $('.collect_listA').html(conBoxChild); slideC();
		   }
	   }else if(widthOld > 768){
		   if(widthNew < 768){
			   $('.collect_listA').html(conBoxChild); slideC();
		   }else if(widthNew > 960){
			   $('.collect_listA').html(conBoxChild); slideC();
		   }
	   }else{
		   if(widthNew > 768){
			   $('.collect_listA').html(conBoxChild); slideC();
		   }
	   }
	   widthOld=$(window).width();
    });
});
/*新闻组件3的右边图片大小自适应*/
/*图片位置计算*/
var imgCount = function () {
    $('.img-count').each(function (index, element) {
        var imgH = $(this).height();
        var imgW = $(this).width();
        var $thisimg = $(this).find('img');
        var img = new Image();
        img.onload = function () {
            if ($thisimg.data("img") === false) {
                return '';
            }
            if ($thisimg.data("img") === 'AutoImageSize') {
                $.AutoImageSize($thisimg);
                return '';
            }
            if ($thisimg.data("img") === 'AutoProductImgSize') {
                $.AutoProductImgSize($thisimg);
                return '';
            }
            var imgWidth = img.width;
            var imgHeight = img.height;
            if ((imgWidth / imgHeight) < (imgW / imgH)) {
                $thisimg.css({'height': (imgW / imgH) * ((imgHeight * 1.00) / imgWidth) * imgH, 'max-height': (imgW / imgH) * ((imgHeight * 1.00) / imgWidth) * imgH, 'top': -((imgW / imgH) * ((imgHeight * 1.00) / imgWidth) - 1) / 2 * imgH})
            } else {
				$thisimg.css({'width': (imgH / imgW) * ((imgWidth * 1.00) / imgHeight) * imgW, 'max-width': (imgH / imgW) * ((imgWidth * 1.00) / imgHeight) * imgW, 'left': -((imgH / imgW) * ((imgWidth * 1.00) / imgHeight) - 1) / 2 * imgW})     
            }
        }
        img.src = $thisimg.attr("src");
    });
}
$(function () {
    var adimgwh = function () {
        var $adnews = $('.w-adNews3');
        for (var i = 0; i < $adnews.length; i++) {
            var adimgw = $adnews.eq(i).find('.w-adNews-imgs').width();
            var adimgh = $adnews.eq(i).find('.w-adNews-texts').height();
            $adnews.eq(i).find('.news-img .aspectRatio').css('padding-bottom', (adimgh * 1.0 / adimgw) * 100 + '%');

        }
    }
    adimgwh();
    imgCount();
    var time = 0;
    var interval = setInterval(function () {
        imgCount();
        if (time++ > 50) {
            clearInterval(interval);
        }
    }, 100);
    $(window).resize(function () {
        adimgwh();
        imgCount();
    });
});

//palceholder
$(function () {

    // 判断浏览器是否是IE7
    if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
        if ($(".w-prd-imgbox>a").length > 0 && $(".w-prd-imgbox>a").find("img").length > 0) {
            $(".w-prd-imgbox>a").find("img").css("cursor", "pointer").click(function () {
                $(this).parents("a").children().click();
            });
        }
        if ($(".news-imgbox>a").length > 0 && $(".news-imgbox>a").find("img").length > 0) {
            $(".news-imgbox>a").find("img").css("cursor", "pointer").click(function () {
                $(this).parents("a").children().click();
            });
        }
    }

    //判断浏览器是否支持placeholder属性
    supportPlaceholder = 'placeholder'in document.createElement('input'),
            placeholder = function (input) {
                var text = input.attr('placeholder');
                var defaultValue = input.val();
                if (!defaultValue) {
                    if ($.trim(input.attr("type")) === "password") {
                        input.hide();
                        var inputpassHtml = '<input name="text-password" class="login-input-A g-text-password" type="text" value="' + text + '"/>';
                        input.parent("div").append(inputpassHtml);
                        input.parent().children(".g-text-password").focus(function () {
                            $(this).hide();
                            input.show().focus();
                        });
                        input.blur(function () {
                            if ($.trim($(this).val()) == text || $.trim($(this).val()) == "") {
                                $(this).hide();
                                input.parent().children(".g-text-password").show();
                            }
                        });
                    } else {
                        input.val(text).addClass("phcolor");
                        input.focus(function () {
                            if (input.val() == text) {
                                $(this).val("");
                            }
                        });
                        input.blur(function () {
                            if (input.val() == "") {
                                $(this).val(text).addClass("phcolor");
                            }
                        });
                        //输入的字符不为灰色
                        input.keydown(function () {
                            $(this).removeClass("phcolor");
                        });
                    }
                }
            };

    //当浏览器不支持placeholder属性时，调用placeholder函数
    if (!supportPlaceholder) {

        $('input').each(function () {

            text = $(this).attr("placeholder");

            if ($(this).attr("type") == "text" || $(this).attr("type") == "tel" || $(this).attr("type") == "email" || $(this).attr("type") == "password") {

                placeholder($(this));
            }
        });
    }

});
//文章广告7移入背景颜色变化
$(function () {
    var adNewsLH;
    $('.w-adNews7 .adNewsL li').hover(function () {
        $(this).find('.date').addClass('bg_main');
        $(this).find('.triangle-bottomright').addClass('border_colorbottom_main');
    }, function () {
        $(this).find('.date').removeClass('bg_main');
        $(this).find('.triangle-bottomright').removeClass('border_colorbottom_main');
    });

    $('.w-adNews7').each(function (index, element) {
        adNewsLH = $(this).find('.adNewsL').height() - parseInt($(this).find('.adNewsL li').css('margin-bottom'));
        if ($(window).width() > 767) {
            $(this).find('.adNewsR').css({"min-height": adNewsLH});
        }
    });
    $(window).resize(function () {
        $('.w-adNews7').each(function (index, element) {
            if ($(window).width() > 767) {
                adNewsLH = $(this).find('.adNewsL').height() - parseInt($(this).find('.adNewsL li').css('margin-bottom'));
                $(this).find('.adNewsR').css({"min-height": adNewsLH});
            } else {
                $(this).find('.adNewsR').removeAttr("style");
            }
        });
    })
});
//文章广告16移入背景颜色变化
$(function () {
    $('.w-adNews16 li .news-item').hover(function () {
        $(this).find('.adnew_mask').addClass('bg_main');
    }, function () {
        $(this).find('.adnew_mask').removeClass('bg_main');
    });
});
//系统菜单导航手机显示隐藏
$(function(){
	if($(window).width()<768){
	    $('.systitle').bind('click',function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open');
				$(this).siblings('.ul-parent').slideUp();
				$(this).siblings('.ul-parent').find('.ul-submenu').slideUp();
				$(this).siblings('.ul-parent').find('.open').removeClass('open');
			}else{
				$(this).addClass('open');
				$(this).siblings('.ul-parent').slideDown();
			}
	    });
	}
	var oldWidth=$(window).width();
	$(window).resize(function(){
		var newWidth=$(window).width();
		if(oldWidth>767){
		    if(newWidth<768){
			  $('.systitle').siblings('.ul-parent').slideUp();
			  $('.systitle').bind('click',function(){
					if($(this).hasClass('open')){
						$(this).removeClass('open');
						$(this).siblings('.ul-parent').slideUp();
						$(this).siblings('.ul-parent').find('.ul-submenu').slideUp();
						$(this).siblings('.ul-parent').find('.open').removeClass('open');
					}else{
						$(this).addClass('open');
						$(this).siblings('.ul-parent').slideDown();
					}
			  });
		    }
		}else{
			if(newWidth>768){
		        $('.systitle').unbind('click');
				$('.systitle').removeClass('open'); 
				$('.systitle').siblings('.ul-parent').slideDown();
				$('.systitle').siblings('.ul-parent').find('.ul-submenu').removeAttr('style');
				$('.systitle').siblings('.ul-parent').find('.open').removeClass('open');
		    }
		}
		oldWidth=$(window).width();
	});
});
//faq3点击缩放
$(function(){
	$('.w-faq-list3 li').eq(0).addClass('open');
	$('.w-faq-list3 li').eq(0).find('.faq_det').slideDown();
	$('.w-faq-list3 li .faq_tit').click(function(){
		$(this).parents('li').siblings('li').removeClass('open');
		$(this).parents('li').siblings('li').find('.faq_det').slideUp();
		if($(this).parents('li').hasClass('open')){
			$(this).parents('li').removeClass('open');
		    $(this).siblings('.faq_det').slideUp();
		}else{
			$(this).parents('li').addClass('open');
		    $(this).siblings('.faq_det').slideDown();
		}
	});
});
//手机滚动到顶部
$(function(){
	if($(window).scrollTop()>10){
		if($(window).width()<960){
		   $('.topTel').show();
		}
	}
	$(window).scroll(function(){
		if($(window).width()<960){
			if($(window).scrollTop()>10){
				$('.topTel').show();
			}else{
				$('.topTel').hide();
			}
		}
	})
});
//产品详情
$(function(){
	$('.product-detail-info .product-short-sum').each(function(){
	   if($(this).height()<25){
		$(this).remove();
		}
	})
	$('.product-detail-info .prd_detInfo_con').each(function(){
	   if($(this).height()<25){
		$(this).remove();
		}
	})
})