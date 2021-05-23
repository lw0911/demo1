
//副导航焦点定位
var leftNavFocus = {
    init: function() {
        var elnav = $("[navcrumbs]").find("a");
        var elbody = $("[navvicefocus]").find("a");
        if (elnav && elbody) {
        	for (var n = (elnav.length - 1); n >= 0; n --) {
        		$.each(elbody, function(i, item) {
	                if (elnav.eq(n).attr("href") === $(item).attr("href")) {
	                    $(item).parent().siblings().removeClass("sidenavcur");
	                    $(item).parent().addClass("sidenavcur");
	                    return false;
	                }
	            });
        	}
        }
    }
};

//主导航高亮
$(function () {
    /*如果没有各栏目的中心页面(如产品的中心页面index.aspx),
    *就指定一个默认的替代导航选中 写上要选中主导航的索引
    *一般用的最多的是资讯
    */
    var MARK = "";
    var newsDefaultURL = 7;
    var productDefaultURL = 4;
    var agentDefaultURL = 0;
    var helpDefaultURL = 9;
    var projectDefaultURL = 0;
    var downloadDefaultURL = 0;
    var jobDefaultURL = 0;
    //定义链接地址
    var current = "";
    var currentshort = "";
    //面包屑导航的获取
    var $plc = $("div.plc");
    var $plc2 = $("div.t2-wz");
    var $pro = $("div.pro_curmbs");


    /*面包屑导航的判断*/
    var $tmp = $plc.size() ? $plc : $plc2;
    var $location = $tmp.size() ? $tmp : $pro;
    //主导航的父级DIV
    var $menu = $("div.menu");
    //主导航的li,仅能选中一级,不带下拉列表样式
    var $menuli = $menu.find("ul").eq(0).children("li");
    //面包屑导航的超链接
    var $info = $location.find("a");
    //面包屑导航超链接的数量
    var count = $info.size();
    //定义选中样式
    var _cur = "curz";
    //取消所有选中
    $menu.find("li").removeClass(_cur);
    //定义一个对象
    var Obj = new Object();
    
    //给对象添加一个方法,用来获取默认的链接地址
    Obj.getCurrentURL = function () {
        //判断MARK
        //并查看是取默认MARK 还是取之前定义好的替代栏目导航
        switch (MARK) {
            case "product":
                current = productDefaultURL ? productDefaultURL : MARK;
                break;
            case "news":
                current = newsDefaultURL ? newsDefaultURL : MARK;
                break;
            case "project":
                current = projectDefaultURL ? projectDefaultURL : MARK;
                break;
            case "agent":
                current = agentDefaultURL ? agentDefaultURL : MARK;
                break;
            case "help":
                current = helpDefaultURL ? helpDefaultURL : MARK;
                break;
            case "download":
                current = downloadDefaultURL ? downloadDefaultURL : MARK;
                break;
            case "job":
                current = jobDefaultURL ? jobDefaultURL : MARK;
                break;
            default:
                current = MARK;
                break;
        }
        //返回判断值
        return current;
    };
    //首页选中
    Obj.firstLiCur = function () {
        $menu.find("li:first").addClass(_cur);
    };
    //不区分大小写的选中
    Obj.selectedCur = function () {
        $menuli.each(function () {
            var _href = $(this).children('a').attr("href").toLowerCase();
            var _href2 = _href.substring(_href.lastIndexOf("/") + 1);
            //判断地址是否一样 一样的话添加选中
            if (_href == current||(_href2 ==currentshort&&currentshort!='index.html') && _href2!='' ) {
                $(this).addClass(_cur);
                //这个return false 只是跳出each ,并不跳出此方法
                return false;
            } else if (typeof (current) == "number") {
                $menuli.eq(current).addClass(_cur);
                //这个return false 只是跳出each ,并不跳出此方法
                return false;
            }
        });
    };
    //文字形式导航的选择.jQuery的contains默认会把所有的匹配到文字的链接加上样式  所以还得循环判断
    Obj.selectedTxtCur = function () {
        $menuli.children("a").each(function () {
            var _txt = $.trim($(this).text());
            //一般面包屑导航的最后一个都是首页[或者说"项目名称"加首页],然后在选择的时候如果主导航只有个首页的话,就会先把主导航选中,所以这里判断一下
            if (_txt == txt && txt.indexOf("首页") == -1) {
                $(this).parent("li").addClass(_cur);
                //这个return false 只是跳出each ,并不跳出此方法
                return false;
            }
        });
        //返回jQuery对象
        return $menu.find("ul").eq(0).children("li." + _cur);
    };
    //判断是否有主导航选中
    Obj.hasCur = function () {
        var _hascur = $menu.find("ul").eq(0).children("li." + _cur).size();
        return _hascur;
    };

    //判断MARK,如果不存在 直接首页选中并返回程序
    if (typeof (MARK) == 'undefined') {
        Obj.firstLiCur();
        return false;
    }

    //判断面包屑导航是否存在
    if (!count) {
        //如果不存在直接判断MARK 和栏目 的默认选中链接
        current = Obj.getCurrentURL();
        //获取添加
        Obj.selectedCur();
    }
    //循环面包屑导航 倒序
    for (var i = count - 1; i >= 0; i--) {
        //取链接地址
        current = $info.eq(i).attr("href");
        //取文本
        var txt = $.trim($info.eq(i).text());
        //截取"/"后面的链接
        currentshort = current.substring(current.lastIndexOf("/") + 1).toLowerCase();
        //如果截取到是空的话,一般就是最后一次循环还没有匹配到主导航的样式
        if (current == "" || current == undefined) {
            //判断MARK
            current = Obj.getCurrentURL();
        }
        //主导航的匹配文字 [一般情况下是没有用的,有时候会碰到说是这个文字,但是链接确是另外一个,但是导航选中还是要加在文字上面]
        //比如 二级分类是成功案例,但是它下面还有一个三级分类是经典案例,主导航上的是二级分类确标着三级分类的链接,这个文字就有用了
        //况且这里还要先判断文字再判断链接
        var $t = Obj.selectedTxtCur();
        //var $t = $("div.menu a:contains('" + txt + "')");
        //最后一次循环txt是首页,往往主导航的第一个都是**首页,所以要判断一下
        //判断文字
        if ($t.size() && txt.indexOf("首页") == -1) {
            $t.parent("li").addClass(_cur);
            return false;
        } else {//判断链接
            Obj.selectedCur();
            //如果选中导航,则跳出循环
            if (Obj.hasCur()) { return false; }
        }
    }
    //如果都没有主导航选中,给MARK加链接 各栏目首页 主要是产品首页没有面包屑导航,没有办法判断
    if (!Obj.hasCur()) {
        current = MARK;
        Obj.selectedCur();
        //如果还没有主导航选中,给第一个加样式
        if (!Obj.hasCur()) {
            Obj.firstLiCur();
        }
    } else {
    }
});
(function(){
    leftNavFocus.init();
})();
