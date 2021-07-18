/*下载豆瓣客户端的隐藏显示*/
$('#download,.download_box').on('mouseover',function(){
  $('.download_box').show();
}).on('mouseout',function(){
	$('.download_box').hide();
});

/*正在热映轮播图*/
var hot_ani=false;
$('#hot_prev').on('click',function(){
	if(hot_ani){return;}
	var hot_page=parseInt($('#hot_lunbo_page').html());
		if(parseInt($('#hot_lunbo_page').html())==1){
			$('#hot_lunbo_page').html('4');
		}else{
			$('#hot_lunbo_page').html(hot_page-1);
		}
		$('#hot_lunbo_page').css({'font-size':'14px','color':'#333'});
	hot_ani=true;
	$('.hot_lunbo_list').animate({'marginLeft':parseInt($('.hot_lunbo_list').css('marginLeft'))+592},500,function(){
		if(parseInt($('.hot_lunbo_list').css('marginLeft'))>-592){
			$('.hot_lunbo_list').css('marginLeft','-2368px');
		}
		
		hot_ani=false;
	})
});
$('#hot_next').on('click',function(){
	if(hot_ani){return;}
	var hot_page=parseInt($('#hot_lunbo_page').html());
		if(parseInt($('#hot_lunbo_page').html())==4){
			$('#hot_lunbo_page').html('1');
		}else{
			$('#hot_lunbo_page').html(hot_page+1);
		}
		$('#hot_lunbo_page').css({'font-size':'14px','color':'#333'});
	hot_ani=true;
	$('.hot_lunbo_list').animate({'marginLeft':parseInt($('.hot_lunbo_list').css('marginLeft'))-592},500,function(){
		if(parseInt($('.hot_lunbo_list').css('marginLeft'))<-2368){
			$('.hot_lunbo_list').css('marginLeft','-592px');
		}
		hot_ani=false;
	})
});
function hot_go(){
	var hot_page=parseInt($('#hot_lunbo_page').html());
		if(parseInt($('#hot_lunbo_page').html())==4){
			$('#hot_lunbo_page').html('1');
		}else{
			$('#hot_lunbo_page').html(hot_page+1);
		}
		$('#hot_lunbo_page').css({'font-size':'14px','color':'#333'});
  $('.hot_lunbo_list').animate({'marginLeft':parseInt($('.hot_lunbo_list').css('marginLeft'))-592},500,function(){
		if(parseInt($('.hot_lunbo_list').css('marginLeft'))<-2368){
			$('.hot_lunbo_list').css('marginLeft','-592px');
		}
	})
}
var hot_time=setInterval(hot_go,2200);
$('.hot_lunbo,.hot_tit').on('mouseover',function(){
	clearInterval(hot_time);
}).on('mouseout',function(){
  hot_time=setInterval(hot_go,2200);
});

/*热映电影蒙板特效*/
$(".hot_img").on("mouseenter mouseleave",function(e) {  
  var w = $(this).width();  
  var h = $(this).height();  
  var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);  
  var y=(e.pageY-this.offsetTop-(h/2))*(h>w?(w/h):1);  
  var dirNum=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;   
  var eventType = e.type;  
  var aPos=[{left:0,top:-192},{left:128,top:0},{left:0,top:192},{left:-128,top:0}];  
  if(eventType == 'mouseenter'){  
    $(this).children(".hot_synopsis").css(aPos[dirNum]).stop(true,true).animate({left:0,top:0},200);  
  }else{  
    $(this).children(".hot_synopsis").stop(true,true).animate(aPos[dirNum],200);  
  }  
});

$(function(){
  showRadio();
  $("input[name=Choices_mover]").click(function(){
    showRadio();
  });
});
function showRadio(){
  switch($("input[name=Choices_mover]:checked").attr("value")){
    case "1":
      $(".Choices_list_hot").show();
      $(".Choices_list_time").hide();
      $(".Choices_list_score").hide();
      break;
    case "2":
      $(".Choices_list_hot").hide();
     $(".Choices_list_time").show();
     $(".Choices_list_score").hide();
     break;
    case "3":
      $(".Choices_list_hot").hide();
      $(".Choices_list_time").hide();
      $(".Choices_list_score").show();
      break;
    default:
      break;
  }
}

/*城市选择*/
$('#esc_city').click(function(){
	$('.city_box').hide(200);
});
$('.city_btn').click(function(){
	$('.city_box').toggle(200);
})
$('.city_box_tit span').click(function(){
	var thisName=$(this).attr('name');
	$('.city_box_tit span').removeClass();
	$(this).addClass('city_on');
	cityShow(thisName);
});
function cityShow(tN){
	switch(tN){
		case 'listHot':
		  $('.city_list').hide();
		  $('.city_list_hot').show();
		  break;
    case 'listAG':
      $('.city_list').hide();
		  $('.city_list_AG').show();
		  break;
		case 'listHL':
      $('.city_list').hide();
		  $('.city_list_HL').show();
		  break;
		case 'listMT':
      $('.city_list').hide();
		  $('.city_list_MT').show();
		  break;
		case 'listWZ':
      $('.city_list').hide();
		  $('.city_list_WZ').show();
		  break;
	}
}
$('.city_list_c span').click(function(){
	var $thisCT=$(this).html();
	$('#cityName').html($thisCT);
	$('.city_box').hide(200);
});

/*回顶部*/
$('.scroll').mouseover(function(){
	$('#scroll_over').hide();
	$('#scroll_out').show();
}).mouseout(function(){
	$('#scroll_over').show();
	$('#scroll_out').hide();
}).click(function(){
	$('html,body').animate({scrollTop:'0'},300);
});
$(window).scroll(function(){
	if($(this).scrollTop()<300){
		$('.scroll').fadeOut(200);
	}else{	
		$('.scroll').fadeIn(200);
	}
});
$('.phone_scroll').click(function(){
	$('html,body').animate({'scrollTop':'0'},200);
});
$(window).scroll(function(){
	if($(this).scrollTop()<300){
		$('.phone_scroll').fadeOut(200);
	}else{	
		$('.phone_scroll').fadeIn(200);
	}
});







