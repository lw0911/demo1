// JavaScript Document
function getClass(parent,tag,name)
{
	var arr=parent.getElementsByTagName(tag);
	var arr2=[];
	var re=new RegExp('(^|\\s)*'+ name +'(\\s|$)*');
	for(var i=0;i<arr.length;i++)
	{
	 if(re.test(arr[i].className))
	  {
		arr2.push(arr[i]); 
	  }	
	}
	return arr2;
}
function addClass(obj,className)
{
	var aClass=obj.className.split(' ');
	if(!obj.className)
	{
	 obj.className=className;	
	}
	else
	{
	   for(var i=0;i<aClass.length;i++)
	   {
		  if(aClass[i]==className)
		  return ; 
	   }	
	   obj.className+=' '+className;
	}
}

function removeClass(obj,className)
{
	var aClass=obj.className.split(' ');
	if(!obj.className)return;
	for(var i=0;i<aClass.length;i++)
	{
	   	if(aClass[i]==className)
		{
			aClass.splice(i,1);
			obj.className=aClass.join(' ');
			break;
		}
	}
}
function getStyle(obj,name)//提取非行间样式
{
	if(obj.currentStyle)
	{
		if(name!='opacity')
		{
		return parseInt(obj.currentStyle[name]);	
		}
		else
		{
			return  Math.round(parseFloat(obj.currentStyle[name])*100);
		
		}
	}	
	else
	{
		if(name!='opacity')
		{
		return parseInt(getComputedStyle(obj,false)[name]);
		            //    getComputedStyle(obj,false)[name];
		}
		else
		{
			return Math.round(parseFloat(getComputedStyle(obj,false)[name])*100);
		}
	}
}
function startMove(obj,json,fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var but=true;
		for(var attr in json)
		{
			var cur=0;
			cur=getStyle(obj,attr);	

			var speed=(json[attr]-cur)/6;
			var speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if(cur!=json[attr])but=false;
			cur+=speed;
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity='+cur+')';
				obj.style.opacity=cur/100;
			}
			else
			{
				obj.style[attr]=cur+'px';
			}
		}
		if(but)
		{
		 clearInterval(obj.timer);
		 //if(fn)fn.call(obj);	
		 if(fn)fn();
		}
		},30)
}//多个值同时运动

function tab_menu(tab_li,len,text,now)
{
	for(var i=0;i<len;i++)
	{
		tab_li[i].index=i;
		tab_li[i].onclick=function()
		{   
		 if(now!=this.index)
		 {
			 text[now].style.zIndex=0;
			 text[this.index].style.zIndex=1;
			 removeClass(tab_li[now],'active');
			 addClass(tab_li[this.index],'active')
			 startMove(text[now],{opacity:0});
			 startMove(text[this.index],{opacity:100});
		 }
		    now=this.index;
		}
	}
}//切换tab菜单透明度

function body_space()
{
	 // var body_h=document.body.scrollHeight||document.documentElement.scrollHeight;//页面高度		  
	  var body_h=document.body.scrollHeight||document.documentElement.scrollHeight;//页面高度
	  var src_t=document.body.scrollTop||document.documentElement.scrollTop; //滚动高度
	  var src_l=document.body.scrollLeft||document.documentElement.scrollLeft; //滚动左边距
	  var client_h=document.documentElement.clientHeight || document.body.clientHeight;//页面工作区高度
	  var client_w=document.documentElement.clientWidth || document.body.clientWidth;//页面工作区高度
	  
	  return {b_h:body_h,s_t:src_t,s_l:src_l,c_h:client_h,c_w:client_w}
}
	
function left_top(obj)
{
	var L=0;
	var T=0;
	while(obj)
	{
	  L+=obj.offsetLeft;
	  T+=obj.offsetTop
	  obj=obj.offsetParent	
	}
	return {left:L,top:T}
}
//物体的上边距和左边距

function linear(obj,attr,targin,s,fn)
{

	obj.t=clearInterval(obj.t);
	obj.t=setInterval(function()
	{
		var cur=getStyle(obj,attr);
		
		if(cur > targin)
		{
		 speed=-s;
		}
		else
		{  speed=s;}
		
		if(Math.abs(cur-targin)<=Math.abs(speed))
		{
			 if(attr=='opacity')
			{
			obj.style.filter='alpha(opacity='+targin+')';
			obj.style.opacity=targin/100;
			}
			else
			{
				obj.style[attr]=targin+'px';
			}
			 clearInterval(obj.t);
			 if(fn)fn.call(obj);
		}
		else
		{
			cur+=speed;
			if(attr=='opacity')
			{
			obj.style.filter='alpha(opacity='+cur+')';
			obj.style.opacity=cur/100;
			}
			else
			{
				obj.style[attr]=cur+'px';
			}
		}
	
	},30);
}



