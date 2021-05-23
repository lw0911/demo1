/*蓝科企业网站系统PHP版
http://www.lankecms.com*/

$(document).ready(function(){
      //返回顶部
      $("#gototop").click(function(){
          $("html,body").animate({scrollTop :0}, 800);return false;
      });
      // $("#gotocate").click(function(){
      //      $("html,body").animate({scrollTop:$("#categories").offset().top},800);return false;
      // });

      // 搜索
      // $("#small_search").click(function(){
      //     $("#topsearch").slideToggle();
      // });

      // 友情链接
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

      //scrollTop
      $(window).scroll(function(){
          var scrolls = $(window).scrollTop()
          if (scrolls > 160) {
            $("#top_nav").addClass("navbar-fixed-top")
          }else{
            $("#top_nav").removeClass("navbar-fixed-top")
          }
      });

      //左侧导航菜单
      // if ($("#firstpane .menu_body:eq(0)").text().replace(/[\r\n ]/g,"").length>0) {
      //   $("#firstpane .menu_body:eq(0)").show().prev().html("-").prev().addClass("left_active");
      // };
      $("ul.menu_body").each(function(){
       if ($(this).text().replace(/[\r\n ]/g,"").length<=0) {$(this).prev().remove();} //去掉span
      });

      $("#firstpane span.menu_head").click(function(){
          var spanatt = $(this).next("ul.menu_body").css('display');
          if (spanatt == "block"){
              var spantext = "+";
               $(this).prev().removeClass("left_active");
          }else{
              var spantext = "-";
              $(this).prev().addClass("left_active");
          }
          $(this).html(spantext).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body");
      });



  
});