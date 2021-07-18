 $(function(){

             //加载轮播图
             // var banner = data.data.banner;
             var banner = [{
                 'pic' : 'img/banner2.jpg',
             },{
                 'pic' : 'img/banner1.jpg',
             },{
                 'pic' : 'img/banner3.jpg',
             }];
             console.log(banner[0]['pic']);
             var ban = '';
             var xyq = '';
             for(var i=0;i<banner.length;i++){
                 ban += '<li> <a href="javascript:;"> <img src="'+banner[i]['pic']+'"  /> </a> </li>';
                 xyq += '<a href="javascript:;"></a>';
             }

             //$('.ws_images ul').html(ban);
             //$('.ws_bullets div').html(xyq);

});

