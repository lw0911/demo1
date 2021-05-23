var hasclick1=false,hasclick2=false,hasclick3=false,hasclick4=false,hasclick5=false,hasclick6=false;
var nav=function(){
	$('.w-nav li').hover(function(){
	var $submenu1 = $(".w-nav .nav_inner >li > .submenu");
	$(this).children('.submenu').slideDown();
	for(var i=0; i<$submenu1.length;i++){
		var position_left=$submenu1.eq(i).offset().left;
		if((position_left+$submenu1.eq(i).width())>document.body.clientWidth ){
			$submenu1.eq(i).css({'right':0,'left':'auto'});
		}
	}
	var $submenu2 = $(".submenu .submenu");
	for(var i=0; i<$submenu2.length;i++){
		var position_left=$submenu2.eq(i).offset().left;
		if((position_left+$submenu2.eq(i).width())>document.body.clientWidth ){
			$submenu2.eq(i).css({'right':$submenu2.eq(i).width(),'left':'auto'});
		}
	}
	},function(){
		$(this).children('.submenu').stop(true,true);
		$(this).children('.submenu').removeAttr("style");
		$(this).children('.submenu').hide();
	});
}
var nav_mobile=function(){
	if(hasclick1){$('.mobile-nav-toggle').unbind('click');}
	$('.mobile-nav-toggle').click(function(){
		 if( $('.col-right').css('left')!=0 ){
			$('.nav_right_mask').show();
		 	$('.col-right').animate({'left':0},500);
		 }else{
			 $('.nav_right_mask').hide();
			$('.col-right').animate({'left':'-70%'},500);
		 }
		 if( $('.w-admin-nav').css('left')!=0){
			$('.nav_right_mask').show();
		 	$('.w-admin-nav').animate({'left':0},500);
		 }else{
			$('.w-admin-nav').animate({'left':'-70%'},500);
			$('.nav_right_mask').hide();
		 } 
		 return false;
	});
	if(hasclick1){$('.nav_right_mask').unbind('click');}
	$('.nav_right_mask').click(function(){
		$('.col-right').animate({'left':'-70%'},500);
		$('.w-admin-nav').animate({'left':'-70%'},500);
		$('.nav_right_mask').hide();
		$('.w-nav').find('.open').removeClass('open');
		$('.w-nav').find('.submenu').slideUp();
		return false;
	});
	if(hasclick1){$('.w-nav li .fa').unbind('click');}
	$('.w-nav li .fa').click(function(){
		$(this).parent().parent().parent().siblings().find('.li-parent-div').removeClass('open');
		$(this).parent().parent().parent().siblings().find('.submenu').slideUp();
			if($(this).parent().parent().hasClass('open')){
				$(this).parent().parent().removeClass('open');
				$(this).parent().parent().siblings().find('.open').removeClass('open');
				$(this).parent().parent().siblings('.submenu').slideUp();
				$(this).parent().parent().siblings().find('.submenu').slideUp();
			}else{
				$(this).parent().parent().addClass('open');
				$(this).parent().parent().siblings('.submenu').slideDown();
				}
		return false;
	});
	hasclick1=true;
}
var conMenu=function(){
	$('.w-com-menu-H li').hover(function(){
	    var $conSubMenu=$(this).children('.ul-submenu');
		$conSubMenu.show();
		var wid_parent=$conSubMenu.parent().width();
		var wid_parent_left=$(this).offset().left;
		var window_w=$(window).width();
		var wid=0;
		var $conSubMenuli=$conSubMenu.children('ul').children('li');
		for(var j=0; j<$conSubMenuli.length;j++){
			var li_width=$conSubMenuli.eq(j).width();
			wid=wid+li_width;
		}
		if(wid_parent_left>(wid-wid_parent)/2){
			if((window_w-wid_parent_left)>(wid+wid_parent)/2){
		        $conSubMenu.css({'width':wid+1,'left':-(wid-wid_parent)/2});
			}else{
				$conSubMenu.css({'width':wid+1,'right':-(window_w-wid_parent_left-wid_parent)});
			}
		}else{
			$conSubMenu.css({'width':wid+1,'left':-wid_parent_left});
		}
		},function(){	
		  $(this).children('.ul-submenu').removeAttr("style");
	});
	if(hasclick4 || hasclick5){$('.w-com-menu li .div-parent .fa').unbind('click');}
	$('.w-com-menu-V > .w-com-menu-in > .ul-parent > li').mouseleave(function(){
		$(this).find('.ul-submenu').find('.open').removeClass('open');
		$(this).find('.ul-submenu').find('.ul-submenu').slideUp();
	});
	$('.w-com-menu-V li .div-parent .fa').click(function(){
		$(this).parent().parent().siblings().find('.ul-submenu').slideUp();
		$(this).parent().parent().siblings().removeClass('open');
		$(this).parent().parent().siblings().find('.open').removeClass('open');
		if($(this).parent().siblings('.ul-submenu').is(':hidden')){
			$(this).parent().siblings('.ul-submenu').slideDown();
			$(this).parent().parent().addClass('open');
		}else{
			$(this).parent().siblings('.ul-submenu').slideUp();
			$(this).parent().siblings('.ul-submenu').find('.ul-submenu').slideUp();
			$(this).parent().parent().removeClass('open');
			$(this).parent().parent().find('.open').removeClass('open');
		}
		return false;
	});
	hasclick4=true;
}
var conMenu_tel=function(){
	if(hasclick5 || hasclick4){$('.w-com-menu .fa-plus').unbind('click');}
	$('.w-com-menu .fa-plus').click(function(){
		$(this).parent().parent().siblings('li').find('.ul-submenu').slideUp();
		$(this).parent().parent().siblings('li').removeClass('open');
		$(this).parent().parent().siblings('li').find('.open').removeClass('open');
		if($(this).parent().siblings('.ul-submenu').is(':hidden')){
			$(this).parent().siblings('.ul-submenu').slideDown();
			$(this).parent().parent().addClass('open');
		}else{
			$(this).parent().siblings('.ul-submenu').slideUp();
			$(this).parent().siblings('.ul-submenu').find('.ul-submenu').slideUp();
			$(this).parent().parent().removeClass('open');
			$(this).parent().parent().find('.open').removeClass('open');
		}
		return false;
	});
	hasclick5=true;
}
$(function(){
	if($('.mobile-nav-toggle').is(':hidden')){
		$('.col-right').css('padding-bottom',0);
	}else{ 
	    $('.col-right').css('padding-bottom',$('.topLogBoxTel').height());
	}
	if($(window).width()>960){
		nav();
		if($(window).scrollTop()> $('.row_top').outerHeight()){
			$('.menuPc').css({'position':'fixed','left':0,'right':0,'top':0});
		}else{
			$('.menuPc').removeAttr('style');
		}
	}else{
		nav_mobile();
	}
	if($(window).width()>767){
	 conMenu();
	}else{
	conMenu_tel();
	}
	$(window).scroll(function(){
		if($(window).width()>960){
			if($(window).scrollTop()> $('.row_top').outerHeight()){
			$('.menuPc').css({'position':'fixed','left':0,'right':0,'top':0});
			}else{
				$('.menuPc').removeAttr('style');
			}
		}
	});
	var oldWidth=$(window).width();
	$(window).resize(function(){
		var newWidth=$(window).innerWidth();
		if(oldWidth>960){
		    if(newWidth<961){
				$('.w-nav li').unbind('mouseenter').unbind('mouseleave');
				$(".w-nav .submenu").removeAttr("style");
			   nav_mobile();
		    }
		}else{
			if(newWidth>960){
		       $('.col-right').removeAttr("style");
		       $('.w-admin-nav').removeAttr("style");
		       $('.nav_right_mask').hide();
		       $('.w-nav .open').removeClass('open');
		       $(".w-nav .submenu").removeAttr("style");
			   nav();
		       }
		}
		if(oldWidth>767){
		    if(newWidth<768){
			   $('.w-com-menu-H .ul-submenu').removeAttr("style");
			   $('.w-com-menu li').unbind('mouseenter').unbind('mouseleave');
			   $('.w-com-menu-V .ul-submenu').slideUp();
			   $('.w-com-menu-V .open').removeClass('open');
			   conMenu_tel();
		    }
		}else{
			if(newWidth>768){
		       $('.w-com-menu .ul-submenu').removeAttr("style");
			   $('.w-com-menu .ul-submenu').removeAttr("style");
			   $('.w-com-menu .open').removeClass('open');
			   conMenu();
		       }
		}
		oldWidth=$(window).width();
		if($('.mobile-nav-toggle').is(':hidden')){
		$('.col-right').css('padding-bottom',0);
		}else{ 
			$('.col-right').css('padding-bottom',$('.topLogBoxTel').height());
		}
	});
});
