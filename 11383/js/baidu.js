// JavaScript Document

window.onload=function(){
  (function(){
	  var nav=document.getElementsByTagName('nav')[0];
	  var aLi=getClass(nav,'ul','nav')[0].children;

		  for(var i=0;i<aLi.length;i++)
	      {
		    aLi[i].onmouseover=function()
			{  
				if(this.getElementsByTagName('ul')[0])
				this.getElementsByTagName('ul')[0].style.display='block';
			}
			aLi[i].onmouseout=function()
			{
				if(this.getElementsByTagName('ul')[0])
				this.getElementsByTagName('ul')[0].style.display='none';
			}
	      }
	  })();//导航
	
	(function(){
	  	var sea=getClass(document,'div','seartch')[0];
		var bor=getClass(sea,'div','border2')[0];
		
		var but=getClass(sea,'input','but')[0];
		var ss=getClass(sea,'input','ss')[0];
        var kg=/^\s*$/
        var now=false;
		
		but.onclick=function(e){
            var e=e||event;
			   e = e || window.event;  
				if(e.stopPropagation) { //W3C阻止冒泡方法  
					e.stopPropagation(); 
					now=true; 
				} else {  
					e.cancelBubble = true; //IE阻止冒泡方法
					now=true;  
				}  
			  bor.style.display='block';
			  ss.focus();
			  startMove(bor,{width:190})
			  if(kg.test(ss.value))
			  {
				  return false;
			  }
		}
		sea.onmouseout=function()
		{
			if(now)bor.className='border';
		}
		sea.onmouseover=function()
		{ 
			bor.className='border2';
		}
		document.onclick=function(){ 
		now=false;
		bor.style.width=0;
		bor.style.display='none';
		
		}
	})();//搜索框

  (function(){
		
		var not=getClass(document,'div','text')[0];
	    var not_ul=not.getElementsByTagName('ul')
	    var ul_len=not_ul.length;
	    var li_len=not_ul[0].getElementsByTagName('li').length;
		
		var li_list=not_ul[0].getElementsByTagName('li');
		var li_list2=not_ul[1].getElementsByTagName('li');
		
	    var li_h=getStyle(li_list[0],'height');
	    var now=0;
		var t=null;
		var not_prenext=not.getElementsByTagName('p')[0].getElementsByTagName('a');
		
		
	  function auto_src()
	  {
		  startMove(not_ul[0],{marginTop:-li_h},function(){
			   not_ul[0].style.marginTop='0'+'px';
			   not_ul[0].appendChild(li_list[0]);
			   
			   startMove(not_ul[1],{marginTop:-li_h},function(){
			   not_ul[1].style.marginTop='0'+'px';
			   not_ul[1].appendChild(li_list2[0]);
			  }); 
			});
	    }
	/*  function auto_src2()
	  {
		  
		  startMove(not_ul[0],{marginTop:-li_h},function(){
			   not_ul[0].style.marginTop=-0+'px';
			   not_ul[0].insertBefore(li_list[0],li_list[li_len]);
			   
			   startMove(not_ul[1],{marginTop:-li_h},function(){
			   not_ul[1].style.marginTop=0+'px';
			     not_ul[1].insertBefore(li_list2[0],li_list2[li_len]);
			  }); 
			});
	    }*/
/*-----------------------向上走-------------------------------------	*/	
		
	  function auto_src3()
	  {
		  not_ul[0].style.marginTop=-li_h+'px';
		  not_ul[1].style.marginTop=-li_h+'px';
		  not_ul[0].insertBefore(li_list[0],li_list[li_len]);
		  not_ul[1].insertBefore(li_list2[0],li_list2[li_len]);
		   
		  startMove(not_ul[0],{marginTop:0},function()
		     {
			   startMove(not_ul[1],{marginTop:0},function(){
			 }); 
			});
	    }//向下走
	   not_prenext[0].onclick=function()
	   {
		   auto_src();
		}
		var top=0,n=2;
	    not_prenext[1].onclick=function()
	   {
			/*if(not_ul[0].style.marginTop=='' || n==0)
			{
				startMove(not_ul[0],{marginTop:-2*li_h},function(){
                   n=2; 
				   startMove(not_ul[1],{marginTop:-2*li_h});    
                });
				
			}
			else
			{  
				n--;
				if(n==-1)
				{n++}
				startMove(not_ul[0],{marginTop:-n*li_h},function(){
					startMove(not_ul[1],{marginTop:-n*li_h});
					});
			    console.log(n);
			}*/
		   auto_src3();
		}
		
		t=setInterval(auto_src,3000);
		not.onmouseover=function(){clearInterval(t);}
		not.onmouseout=function(){t=setInterval(auto_src,3000);}// 滚动公告
		
		
		 var  tTag=not.getElementsByTagName('time');
		 var date=new Date();
		 var Y=date.getFullYear();
		 var M=date.getMonth()+1
		 var D=date.getDate();
		
		function Zero(num)
		{
			if(num<10)
			{
			 return  num='0'+num;	
			}
			else
			{
			return num=''+num;	
			}
		}
		for(var i=0;i<tTag.length;i++)
		{
		  tTag[i].innerHTML=Y+'-'+Zero(M)+'-'+Zero(D);	
		}//公告时间
  })(); //滚动公告版块
	 (function(){
	 var platform=document.getElementsByClassName('platform')[0];
	 var tab_plat=getClass(platform,'ul','tab_plat')[0];
	 var con_plat=getClass(platform,'div','con_plat');
	
	 var tab_li=tab_plat.getElementsByTagName('li');
	 var tab_li_len=tab_li.length;
	 var tab_li_w=getStyle(tab_li[0],'width');
	 var now=0;
	 var w=0;
	 var bor_plat=getClass(platform,'div','bor_plat')[0];
	 var bor_pos=getStyle(bor_plat,'left');

	 for(var i=0;i<tab_li_len;i++)
	 {
		 tab_li[i].index=i;
		
		 tab_li[i].onmouseover=function()
		 {
			 w=bor_pos+this.index*tab_li_w;
		     startMove(bor_plat,{left:w})
	     }
	 }
	  tab_menu(tab_li,tab_li_len,con_plat,now);

  })();/*-----------------------平台-----------------------*/
 
  
  (function(){
	  
	  var product=document.getElementsByClassName('product')[0];
	  var ali=product.getElementsByTagName('ul')[0].getElementsByTagName('li');
	  var ali_len=ali.length;
	  var ahref=[];
	  for(var i=0;i<ali_len;i++)
	  {
		  ahref.push(ali[i].getElementsByTagName('a')[0].getAttribute('href'));
	  }
	  for(var i=0;i<ali_len;i++)
	  {
		  ali[i].index=i;
		  ali[i].onclick=function()
		  {
			  //window.location.href=ahref[this.index];
			  window.open(ahref[this.index],'_blank'); 
		  }
	  }
  })();/*------------------点击进入新页面------------------------------*/

 (function(){
	var  oCase=document.getElementsByClassName('case')[0];
	var  tab_case=getClass(oCase,'ul','tab_case')[0];	
	var  tab_li=tab_case.getElementsByTagName('li');
	var  tab_li_len=tab_li.length;
	var  now=0;
	var  text_case=getClass(oCase,'div','text_case');
      tab_menu(tab_li,tab_li_len,text_case,now);
	  
	})();/*--------------------案例-----------------------------------------*/

}
