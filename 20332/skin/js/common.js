$(document).ready(function(){
      //返回顶部
      $("#gototop").click(function(){
            $("html,body").animate({scrollTop :0}, 800);return false;
      });
      $("#gotoinquiry").click(function(){
            $("html,body").animate({scrollTop:$("#inquiry").offset().top-70},800);return false;
      });

      // 友情链接  网站建设
      $("#link_btn").click(function(){
            if ($(".link_list").css('display') == "none"){
              $("#link_btn").addClass("glyphicon-minus");
            }else{
              $("#link_btn").removeClass("glyphicon-minus");
            }
            $(".link_list").slideToggle();      
      });

      $("#tags_btn").click(function(){
            if ($(".tags_rows").css('display') == "none"){
              $("#tags_btn").addClass("glyphicon-minus");
            }else{
              $("#tags_btn").removeClass("glyphicon-minus");
            }
            $(".tags_rows").slideToggle();      
      });  

      if($(window).width()>768){
            //鼠标划过就展开子菜单
            $('ul.nav li.dropdown').hover(function() {
              $(this).find('.dropdown-menu').stop(true, true).slideDown();
            }, function() {
              $(this).find('.dropdown-menu').stop(true, true).slideUp();
            });
      }

      $("#search_btn").click(function(){
          $("#searchform").slideToggle();
      });

      //scrollTop
      $(window).scroll(function(){
          var scrolls = $(window).scrollTop()
          if (scrolls > 160) {
            $("#top_nav").addClass("navbar-fixed-top")
          }else{
            $("#top_nav").removeClass("navbar-fixed-top")
          }
      });

      //菜单选中高亮
     //  var urlstr = location.href;  
     //  var urlstatus=false; 
     //  var urlnum = 1;
     //  $("#navbar a").each(function () {  
     //    if ((urlstr + '/').indexOf($(this).attr('href').replace(/[\r\n ]/g,"")) > -1 && $(this).attr('href')!='' && urlnum != 1) {  
     //      $(this).addClass('active'); urlstatus = true;
     //    }else {  
     //      $(this).removeClass('active');  
     //    } 
     //    urlnum++;
     //  });  
     // if (!urlstatus) {$("#navbar a").eq(0).addClass('active'); }  

  
});