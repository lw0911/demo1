function handlePreloader() {
	if($(".preloader").length){
		$(".preloader").delay(300).fadeOut(300);
		$("#umBody").css("overflow-y","auto");
	}
}

$('#owl0').owlCarousel({
	    loop:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsiveClass:true,
		dots:true,
		navText : ["<i class='iconfont'>&#xe660;</i>", "<i class='iconfont'>&#xe65f;</i>"],
		responsive:{
			0:{items:1,nav:false},
			414:{items:1,nav:false},
			750:{items:1,nav:true},
			1200:{items:1,nav:true,}
		}
});

$(function() {	
var wow = new WOW({ boxClass:'anim',offset: 100,mobile: true,live: true});
    wow.init();	
	var bLazy = new Blazy({
			breakpoints: [{
		}]
      , success: function(element){
	    setTimeout(function(){
		var parent = element.parentNode;
		parent.className = parent.className.replace(/\bloading\b/,'');
	    }, 200);
        }
   });
});

$(function(){
	handlePreloader();
    //视频跟随
	$(window).scroll(function(){
	var videoOut = document.getElementById("videoBox");
	if(videoOut){
		var divH = ( $('.video').offset().top + $('.video').height());
		var this_scrollTop = $(this).scrollTop();
		if(this_scrollTop>divH ){
		 $(".videoBox").addClass('out');
		} else {
		 $(".videoBox").removeClass('out');
		}
	}
});

		$('#owl1,#owl2').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:6000,
			autoplayHoverPause:false,
			dots:false,
			responsiveClass:true,
			navText : ["<i class='iconfont'>&#xeb91;</i>", "<i class='iconfont'>&#xe66b;</i>"],
			responsive:{
			0:{items:1,margin:10,nav:false},
			320:{items:2,margin:5,nav:false},
			480:{items:2,margin:5,nav:false},
			600:{items:3,margin:10,nav:false},
			749:{items:4,margin:15,nav:true},
			959:{items:4,margin:15,nav:true},
			1023:{items:4,margin:20,nav:true
			}
		  }
		});
		$('.owl1').owlCarousel({
			loop:true,
			autoplay:false,
			autoplayTimeout:6000,
			autoplayHoverPause:true,
			dots:true,
			lazyLoad: true,
            lazyLoadEager: 1,
			responsiveClass:true,
			navText : ["<i class='iconfont'>&#xeb91;</i>", "<i class='iconfont'>&#xe66b;</i>"],
			responsive:{
			0:{items:1,margin:0},
			440:{items:2,margin:40},
			639:{items:3,margin:30},
			749:{items:3,margin:40},
			990:{items:4,margin:50},
		  }
		});
		
		$('.owl3').owlCarousel({
			loop:true,
			autoplay:false,
			dots:false,
			lazyLoad: true,
			nav:true,
            lazyLoadEager: 1,
			responsiveClass:true,
			navText : ["<i class='iconfont'>&#xeb91;</i>","<i class='iconfont'>&#xe66b;</i>"],
			responsive:{
			0:{items:1,margin:0,nav:false},
			440:{items:2,margin:10,nav:false},
			639:{items:3,margin:10,nav:false},
			749:{items:3,margin:20,nav:true},
			990:{items:4,margin:25,nav:true}
		  }
		});
		
		$('.owl4').owlCarousel({
			loop:false,
			autoplay:false,
			dots:false,
			lazyLoad: false,
			nav:true,
            lazyLoadEager: 1,
			responsiveClass:true,
			navText : ["<i class='iconfont'>&#xeb91;</i>","<i class='iconfont'>&#xe66b;</i>"],
			responsive:{
			0:{items:2,margin:0},
			440:{items:2,margin:10},
			639:{items:3,margin:10},
			749:{items:4,margin:20},
			990:{items:5,margin:30}
		  }
		});
		
		$('.owl5').owlCarousel({
			loop:true,
			autoplay:false,
			dots:true,
			nav:true,
            lazyLoadEager: 1,
			responsiveClass:true,
			navText : ["<i class='iconfont'>&#xeb91;</i>","<i class='iconfont'>&#xe66b;</i>"],
			responsive:{
			0:{items:2,margin:10,nav:false},
			440:{items:3,margin:15,nav:false},
			639:{items:4,margin:20,nav:false},
			749:{items:4,margin:18,nav:true},
			990:{items:6,margin:20,nav:true}
		  }
		});
		
	$('.moble').after('<a class="search-btn"><i class="fa iconfont">&#xe627;</i></div><div class="search-bg"></a>');
	$('.header .search-pup').clone(false).appendTo('.search-bg');
	$('.sbtn').click(function(){
		$('.searchBox,.page-bg').fadeIn(0);
	});
	$('.search-btn').click(function(){
		$('.page-bg,.search-bg').fadeIn(0);
	});
	
	$('.s-weixin').click(function(){
		$('.page-bg').fadeIn(0);
		$('.weixinBox').addClass("open");
	});
	
	$('.page-bg').click(function(){
		$(this).fadeOut(300);
		$('.search-bg,.searchBox').fadeOut(300);
		$('.weixinBox').removeClass("open");
	});
	$('.moble-bars').after('<div class="mLogo"></div>');
	$('.header .logo').clone(false).appendTo('.mLogo');
	$('.moble-bars').after('<nav id="nav" class="inner"></nav>');
	$('.header .navbar').clone(false).appendTo('#nav');
	$('#btn-bars i').click(function(){
		$('#nav').slideToggle('500');
	});
	
	 $('.inner li i').click(function(){
       $(this).parent('.inner li').toggleClass('navOn');  
     });
	 
	 $('.mapBtn').click(function(){
       $('.contactBg').toggleClass('on'); 
	   $('.contBox .contText').fadeToggle(300);
	   //$('.contBox .contText').toggleClass('anim zoomInDown');
	     
     });
	
	$('#navBox li').hover(function(){
       $(this).addClass('on');
      },
	 function(){
       $(this).removeClass('on'); 
    });
	
	if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
	  $('html').addClass('mac');
	} else {
	  $('html').addClass('wds');
	}
});


//导航高亮
jQuery(document).ready(function($){ 
var datatype=$("#navBox").attr("data-type");
    $(".navbar>li").each(function(){
        try{
            var myid=$(this).attr("id");
            if("index"==datatype){
                if(myid=="nvabar-item-index"){
                    $("#nvabar-item-index").addClass("active");
                }
            }else if("category"==datatype){
                var infoid=$("#navBox").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+"").addClass("active");
                        }
                    }
                }
	
            }else if("article"==datatype){
                var infoid=$("#navBox").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+"").addClass("active");
                        }
                    }
                }
            }else if("page"==datatype){
                var infoid=$("#navBox").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-page-"+infoid){
                        $("#navbar-page-"+infoid+"").addClass("active");
                    }
                }
            }else if("tag"==datatype){
                var infoid=$("#navBox").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-tag-"+infoid){
                        $("#navbar-tag-"+infoid+"").addClass("active");
                    }
                }
            }
        }catch(E){}
    });
	$("#navBox").delegate("a","click",function(){
		$(".navbar>li").each(function(){
			$(this).removeClass("active");
		});
		if($(this).closest("ul")!=null && $(this).closest("ul").length!=0){
			if($(this).closest("ul").attr("id")=="munavber"){
				$(this).addClass("active");
			}else{
				$(this).closest("ul").closest("li").addClass("active");
			}
		}
	});
});

//子分类高亮
jQuery(document).ready(function($){ 
var datatype=$("#subcate").attr("data-type");
    $(".subcate li").each(function(){
        try{
            var myid=$(this).attr("id");
            if("category"==datatype){
                var infoid=$("#subcate").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="cate-category-"+b[i]){
                            $("#cate-category-"+b[i]+"").addClass("active");
                        }
                    }
                }
	
            } 
        }catch(E){}
    });
	
	$("#subcate").delegate("a","click",function(){
		$(".subcate li").each(function(){
			$(this).removeClass("active");
		});
		if($(this).closest("ul")!=null && $(this).closest("ul").length!=0){
			if($(this).closest("ul").attr("id")=="subcate"){
				$(this).addClass("active");
			}else{
				$(this).closest("ul").closest("li").addClass("active");
			}
		}
	});	
});
//返回顶部，隐藏导航
$(function() {
	    $(window).scroll(function(){		
		    if($(window).scrollTop()>500){		
			    //$("#gttop").css({'opacity':1});
				$("#gttop").fadeIn(300);
		    }else{
			    //$("#gttop").css({'opacity':0});
				$("#gttop").fadeOut(300);
		    }
	    });		
	    $("#gttop").click(function(){
		    $("body,html").animate({scrollTop:0},1200);
		    return false;
	    });	
		$(window).resize(function(){
			var $width = $('body').width();
			if($width > 480){
				$('.fixed-search,.fixed-bg').hide();
			}
			if($width > 950){
				$('#nav').hide();
			}			
		});		
});		
	
//导航跟随
$(function(){
var oDiv=document.getElementById("navBox");
    var H=0,iE6;
    var Y=oDiv;
    while(Y){H+=Y.offsetTop;Y=Y.offsetParent};
    iE6=window.ActiveXObject&&!window.XMLHttpRequest;
    if(!iE6){
        window.onscroll=function()
        {
            var s=document.body.scrollTop||document.documentElement.scrollTop;
            if(s>H){oDiv.className="header-nav menu fixed";if(iE6){oDiv.style.top=(s-H)+"px";}}
            else{oDiv.className="header-nav menu";}
        };
    }	
});

//数字滚动
$(".about").appear(function () {
	$(".about [data-to]").each(function () {
		var e = $(this).attr("data-to");
		$(this).delay(6e3).countTo({
			from: 50,
			to: e,
			speed: 3e3,
			refreshInterval: 50
		})
	})
});