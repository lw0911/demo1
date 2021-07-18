
/*移动端部分*/

/*更多菜单*/
$('.login span').click(function(){
	$('#misk').show();
	miskShow('0%');
});
$('#misk').click(function(){
	miskShow('-60%');
	$('#misk').hide();
})

function miskShow(right){
  $('.global_nav_bottom').animate({'right':right},400);
}

/*hot拖曳效果*/
function load (){  
  /*单指拖动*/  
  var obj = document.getElementById('hot_phone_list');// alert(obj.offsetLeft); 
  obj.addEventListener("touchstart", function(event) {  
    var touch = event.targetTouches[0];  
    var left = parseInt(obj.offsetLeft);  
    var x = touch.pageX - left;  
    var y = touch.pageY - left;  
    obj.addEventListener('touchmove', function(event) {
    if (event.targetTouches.length == 1) {　　　　  
      event.preventDefault(); // 阻止浏览器默认事件
      var touch = event.targetTouches[0];  
  // 把元素放在手指所在的位置  
      obj.style.left = touch.pageX - x + 'px';
      if(parseInt(obj.style.left)>=0){
        obj.style.left = '0'+ 'px';
      }
      if(parseInt(obj.style.left)<=-480){
        obj.style.left = '-480'+ 'px';
      }
    }  
  }, false);  
});

obj.addEventListener("touchend",function(){  
  obj.removeEventListener("touchstart",load);  
  obj.removeEventListener("touchmove",load);  
}); 
}  
window.addEventListener('load',load, false);  




