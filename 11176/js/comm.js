$(function(){
	
})

//页面跳转
function nav(url){
	// window.localhost.href= url+'.html';
	// window.location.href= url+'.html';
	parent.location.href= url+'.html';
}

// 子导航
function tab(name){
	window.location.href=name+'.html';
}

// 内容页
function content(){
	window.location.href= 'content.html';
}