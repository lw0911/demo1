// JavaScript Document
$(document).ready(function(e) {
    var pre=$('.banner .prenext .pre');
	var next=$('.banner .prenext .next');
	var len=$('.banner').children('div').length-1;
	var now=0;
	var but=true;
	
	function cButton(now,num)
	{
	 
	   if(now==0)
		{
		$('.banner .an').children('a').eq(now).attr('class','on');
		$('.banner .an').children('a').eq(num).attr('class','');
		}
		else
		{
		$('.banner .an').children('a').eq(now).attr('class','on2');
		$('.banner .an').children('a').eq(num).attr('class','');
		}
		/*$('.banner a').children('div').eq(now).css('z-index','1').fadeIn('fast');//z-index: 0; display: none;
		$('.banner a').children('div').eq(now).css('z-index','0').fadeOut('fast');*/
		$('.banner').children('div').eq(now).css('z-index','1').animate({opacity:1},'fast');
		$('.banner').children('div').eq(num).css('z-index','0').animate({opacity:0},'fast');
	 
	}//点击按钮
	
	function firstRun()
	{
		$('.banner .banner_1_1').find('img').css('top',10);
		$('.banner .banner_1_1').find('span').css('opacity',0); but=false;
		$('.banner .banner_1_1').find('img').animate({top:0,opacity:1},1000,'swing',function(){but=true;});
		$('.banner .banner_1_1').find('span').animate({opacity:1},800,'swing');
	}//第一张图片的运动
	
    function duoRun(now)
	{
	  
		$('.banner').children('div').eq(now).css({opacity:0});
		$('.banner').children('div').eq(now).find('.r').css({top:30});
		$('.banner').children('div').eq(now).find('.l').css({left:20});
		
		//$('.banner').children('div').eq(now).animate({opacity:1},200,'swing');
		$('.banner').children('div').eq(now).find('.r').animate({top:0},1000,'swing',function(){but=true;});
		$('.banner').children('div').eq(now).find('.l').animate({left:60},'slwo','swing');
	
    }//其他图片的运动
	
	function cPre(now,num,cName)
	{
		$('.banner').children('div').eq(now).css('z-index','1').animate({opacity:1},'fast');
		$('.banner').children('div').eq(num).css('z-index','0').animate({opacity:0},'fast');
		$('.banner .an').children('a').eq(now).attr('class',cName);
		$('.banner .an').children('a').eq(num).attr('class','');
	
    }//当前值，上一个/下一个， 类名
	
	 function run()
	 {
		++now;
		if(now==len)
		{
		  now=0;
		  firstRun();
		  cButton(now,len-1);	
		}
		else
		{
			duoRun(now);
			cButton(now,now-1);
		}
		//console.log(now);
	 }//运动
	 
	$('.banner').hover(function()
	  {
		clearInterval(timer);
	  },function()
	  {
		timer=setInterval(run,5000);
	  }).trigger('mouseleave');//自动轮播
	
  pre.click(function(){
	  if(but==true)
	  { but=false;
			--now;
			if(now==0)
			{
				firstRun();
				cPre(now,now+1,'on');
			}
		
		  else  if(now==-1)
			{
				now=len-1;
				duoRun(now);
				cPre(now,0,'on2');
			}
			else
			{
				duoRun(now);
				cPre(now,now+1,'on2');
			}
			//console.log(now);
	  }
	});//上一个
		
	next.click(function(){
	   if(but==true)
	   {but=false;
			++now;
			if(now==len)
			{now=0;}
			if(now==0)
			{
				firstRun();
				cPre(now,len-1,'on');
			}
			else
			{
				duoRun(now);
				cPre(now,now-1,'on2');
			}
			//console.log(now);
	   }
	});//下一个	
		
	
$('.banner .an').children('a').each(function(index) {
		var Index=$(this).index();
        $(this).click(function(e) {
          //alert(e.type)//click
		  /*console.log(index);
		  console.log(Index);*/
        if(but==true)
		{ but=false;
		
		  if(Index!=now)
		  {
			  if(Index==0)
			  {
				firstRun();
			  }
			  else
			  {
				  duoRun(Index);
			  }
			   cButton(Index,now);//当前值， 上一个/下一个
		  }
		  now=Index;
		}
        });
    });//鼠标点击切换
/*-----------------------轮播图结束------------------------------------*/	

/*(function(){
	
	var notice_ul=$('.notice .text ul');
	var ul_len=notice_ul.length;
	
	var li_len=notice_ul.eq(0).children('li').length;

	var li_h=notice_ul.eq(0).children('li').eq(0).height();
	var t=null;
	
	 function not_scr(obji,ele,h,num)
	 {
	    notice_ul.eq(obji).animate({marginTop:h},'slow','swing',function(){
			  
				 $(this).css('margin-top',0).children(ele).slice(0,num).appendTo(this);
		 })
	 }

	 function auto_src()
	 {
		 for(var i=0;i<ul_len;i++)
		 {
			not_scr(i,'li',-li_h,1); 
		 }
	 }
	 $('.notice .text').hover(function()
	    {
		 clearInterval(t)
		},function()
		{ t=setInterval(auto_src,3000);}).trigger('mouseleave');
		 
	var not_pre=$('.notice p a').first();	 
	var not_next=$('.notice p a').last();
	not_pre.click(function(){auto_src();});
		 
	var top=null,now=li_len-1;
	var n=0;
	not_next.click(function()
	{
		for(var i=0;i<ul_len;i++)
		{
		//	notice_ul.eq(i).css('margin-top',-li_h)
			notice_ul.eq(i).css('margin-top',-li_h).children('li').slice(now,li_len).prependTo(notice_ul.eq(i));
			notice_ul.eq(i).animate({marginTop:0},'slow','swing');
		}
	 });	
	 
	})(); */ //滚动公告
	
});