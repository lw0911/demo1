$(function () {
    // 产品加入收藏
    $(".g-add-member-collections").click(function () {
        if ($(this).data("collectionid") > 0) {
            productAddCollection($(this).data("collectionid"));
        }
    });
    (function ($) {
        // 如果是IE7的情况
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            var re = /WIDTH: ([0-9\.]+)%/;
            $(".multi-imgs").each(function (key) {
                var _ulli = $(this).find("ul>li");
                if (re.test(_ulli.attr("style"))) {
                    if (!isNaN(parseFloat($.trim(RegExp.$1)))) {
                        var _width = (parseFloat($.trim(RegExp.$1)) - 0.1) + "%";
                        _ulli.css({"width": _width});
                        // 点击图片效果
                        _ulli.each(function () {
                            var _this = $(this);
                            _this.find("img").click(function () {
                                _this.find(".gallery-caption").click();
                            })
                        });
                    }
                }
            });
        }
		
		// $('.topLogBox').remove();
    })(jQuery);

    // 当图片加载失败的时候
    $('img').error(function () {
        $(this).attr('src', '/public/images/images-empty.png');
    });

    // menu 过长问题
//    $.getScript('/public/naples/js/jquery.menu_style.js', function () {
//        new GMenuStylePage(jQuery, $("#g-web-ul-menu"));
//    });



    if (!browser.versions.mobile) {
        idSetInterval()
        $(window).resize(function () {
            idSetInterval()
        });
    }
});

var idSetIntervalValue = -1;
// gMenuTooLong($("#g-web-ul-menu"));
function idSetInterval() {
    if (!$(".body").length) {
        return;
    }
    var time = 0;
    var bodyheight = $(".body").height();
	if(idSetIntervalValue != -1){
		clearInterval(idSetIntervalValue);
	}
    idSetIntervalValue = setInterval(function () {
        if ($(".body").height() < $(window).outerHeight(true)) {
            $(".w-main").css("min-height", ($(window).outerHeight(true) - $(".body").outerHeight(true) + $(".w-main").outerHeight(true)) + "px");
        }else{
			if($(window).outerHeight(true) - $(".body").height() < -20){
				$(".w-main").css("min-height", "0px");
			}
        }
        if (time++ > 100000) {
            clearInterval(idSetIntervalValue);
			idSetIntervalValue = -1;
        }
    }, 10);
}

// 手机下浏览产品详情页面的时候上一个跟下一个的标签显示问题
(function ($, window) {
    if ($(window).width() <= 767 && $(".prddetail_foot_fixed").length > 0 && $(".w-footer-in").length > 0 && $(".w-footer-in").height() < 1) {
        $(".news-others").css("padding-bottom", $(".prddetail_foot_fixed").height() + "px");
    }
})(jQuery, window);


//判断访问终端
var browser = {
    versions: function () {
        var u = navigator.userAgent,
                app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}



// 产品加入收藏
function productAddCollection(id) {
    $.ajax({
        type: "POST",
        url: ajaxUrlMemberAddCollection,
        data: {
            id: id
        },
        dataType: "json",
        success: function (_ret) {
            // 非法操作
            if (_ret._return !== "success" && _ret.code == "110") {
                return  ajaxError();
            }
            // 登录超时
            if (_ret._return !== "success" && _ret.code == "1") {
                gotoMemberLoginPage();
            }
            // 产品不存在
            if (_ret._return !== "success" && _ret.code == "2") {
                layer.alert($.languagePack(_ret.language), function (index) {
                    window.location.reload();
                    layer.close(index);
                });
                return '';
            }
            // 错误信息提示
            if (_ret._return !== "success" && _ret.message !== "") {
                if (_ret.code == "1") {
                    layer.alert(_ret.message, function (index) {
                        window.location.href = $.ajaxUrl("memberLoginUrl");
                        layer.close(index);
                    });
                } else {
                    layer.alert(_ret.message, function (index) {
                        layer.close(index);
                    });
                }
                return false;
            }
            // 返回成功
            if (_ret._return === "success") {
                if (_ret.action === "add") {
                    $(".fa-star-o").each(function (key) {
                        $(this).removeClass("fa-star-o").addClass("fa-star");
                    });
                    if (!!_ret.language) {
                        layer.alert(languagePack(_ret.language), function (index) {
                            layer.close(index);
                        });
                    } else {
                        layer.alert(languagePack('hasBeenSuccessfullyAddedToTheFavoritesList'), function (index) {
                            layer.close(index);
                        });
                    }
                } else if (_ret.action === "del") {
                    $(".fa-star").each(function (key) {
                        $(this).removeClass("fa-star").addClass("fa-star-o");
                    });
                    if (!!_ret.language) {
                        layer.alert(languagePack(_ret.language), function (index) {
                            layer.close(index);
                        });
                    } else {
                        layer.alert(languagePack('hasBeenSuccessfullyDeletedToTheFavoritesList'), function (index) {
                            layer.close(index);
                        });
                    }
                } else {
                    $(".fa-star-o").each(function (key) {
                        $(this).removeClass("fa-star-o").addClass("fa-star");
                    });
                    layer.alert(languagePack('hasBeenSuccessfullyAddedToTheFavoritesList'), function (index) {
                        layer.close(index);
                    });
                }

            }
        },
        error: function () {
            return  ajaxError();
        }
    });
}

// 验证是否是登录用户的方法
function isUserLogin() {
    var login = false;
    $.ajax({
        type: "POST",
        url: ajaxMemberIsLogin,
        data: {},
        async: false,
        dataType: "json",
        success: function (result) {
            if (result._return === "success") {
                login = true;
            }
            return login;
        },
        error: function () {
            return ajaxError();
        }
    });
    return login;
}

function ajaxError() {
    layer.alert(languagePack('illegalOperation'), function (index) {
        layer.close(index);
    });
    return false;
}

// 点击购物车
function clickCart(obj) {
    obj = $.extend({
        link: ""
    }, obj);
    if (false === isUserLogin()) {
        layer.alert(languagePack('noLoginMessage'), function (index) {
            location.href = $.ajaxUrl("memberLoginUrl") + obj.link;
            layer.close(index);
        });
    }
}
// 类似php的implode方法
function implode(glue, pieces) {
    var i = "", retVal = "", tGlue = "";
    if (arguments.length === 1) {
        pieces = glue;
        glue = ""
    }
    if (typeof pieces === "object") {
        if (Object.prototype.toString.call(pieces) === "[object Array]") {
            return pieces.join(glue)
        }
        for (i in pieces) {
            retVal += tGlue + pieces[i];
            tGlue = glue
        }
        return retVal
    }
    return pieces
}
// 类似php的explode方法
function explode(delimiter, string, limit) {

    if (arguments.length < 2 ||
            typeof delimiter === 'undefined' ||
            typeof string === 'undefined') {
        return null
    }
    if (delimiter === '' ||
            delimiter === false ||
            delimiter === null) {
        return false
    }
    if (typeof delimiter === 'function' ||
            typeof delimiter === 'object' ||
            typeof string === 'function' ||
            typeof string === 'object') {
        return {
            0: ''
        }
    }
    if (delimiter === true) {
        delimiter = '1'
    }

    // Here we go...
    delimiter += ''
    string += ''

    var s = string.split(delimiter)

    if (typeof limit === 'undefined')
        return s

    // Support for limit
    if (limit === 0)
        limit = 1

    // Positive limit
    if (limit > 0) {
        if (limit >= s.length) {
            return s
        }
        return s
                .slice(0, limit - 1)
                .concat([s.slice(limit - 1)
                            .join(delimiter)
                ])
    }

    // Negative limit
    if (-limit >= s.length) {
        return []
    }

    s.splice(s.length + limit)
    return s
}

// 类似php的 number_format 方法
function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '')
            .replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + (Math.round(n * k) / k)
                        .toFixed(prec);
            };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
            .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
            .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
                .join('0');
    }
    return s.join(dec);
}

// 获取字符串长度
function strlen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1 
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        } else {
            len += 2;
        }
    }
    return len;
}
// 字符串截取
function substr(str, start, len) {
    str += ''
    var end = str.length

    var iniVal = (typeof require !== 'undefined' ? require('../info/ini_get')('unicode.emantics') : undefined) || 'off'

    if (iniVal === 'off') {
        // assumes there are no non-BMP characters;
        // if there may be such characters, then it is best to turn it on (critical in true XHTML/XML)
        if (start < 0) {
            start += end
        }
        if (typeof len !== 'undefined') {
            if (len < 0) {
                end = len + end
            } else {
                end = len + start
            }
        }
        if (start >= str.length || start < 0 || start > end) {
            return false
        }

        return str.slice(start, end)
    }

    // Full-blown Unicode including non-Basic-Multilingual-Plane characters
    var i = 0
    var allBMP = true
    var es = 0
    var el = 0
    var se = 0
    var ret = ''

    for (i = 0; i < str.length; i++) {
        if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
            allBMP = false
            break
        }
    }

    if (!allBMP) {
        if (start < 0) {
            for (i = end - 1, es = (start += end); i >= es; i--) {
                if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
                    start--
                    es--
                }
            }
        } else {
            var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
            while ((surrogatePairs.exec(str)) !== null) {
                var li = surrogatePairs.lastIndex
                if (li - 2 < start) {
                    start++
                } else {
                    break
                }
            }
        }

        if (start >= end || start < 0) {
            return false
        }
        if (len < 0) {
            for (i = end - 1, el = (end += len); i >= el; i--) {
                if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
                    end--
                    el--
                }
            }
            if (start > end) {
                return false
            }
            return str.slice(start, end)
        } else {
            se = start + len
            for (i = start; i < se; i++) {
                ret += str.charAt(i)
                if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
                    // Go one further, since one of the "characters" is part of a surrogate pair
                    se++
                }
            }
            return ret
        }
    }
}

// 显示省份
function showProvince(tag) {
    var province = getProvince(false);
    var html = "";
    var tagReplace = "";
    for (var p in province) {
        tagReplace = tag.replace("[province]", province[p].province);
        tagReplace = tagReplace.replace("[attributes]", "data-province=\"" + province[p].province + "\"" + "data-provinceId=\"" + province[p].province_id + "\"");
        html += tagReplace;
    }
    return html;
}

// 显示城市
function showCity(provinceId, tag) {
    var city = getCity(provinceId);
    var html = "";
    var tagReplace = "";
    for (var p in city) {
        tagReplace = tag.replace("[city]", city[p].city);
        tagReplace = tagReplace.replace("[attributes]", "data-city=\"" + city[p].city + "\"" + "data-cityId=\"" + city[p].city_id + "\"");
        html += tagReplace;
    }
    return html;
}

// 显示区县
function showArea(cityId, tag) {
    var area = getArea(cityId);
    var html = "";
    var tagReplace = "";
    for (var p in area) {
        tagReplace = tag.replace("[area]", area[p].area);
        tagReplace = tagReplace.replace("[attributes]", "data-area=\"" + area[p].area + "\"" + "data-areaId=\"" + area[p].area_id + "\"");
        html += tagReplace;
    }
    return html;
}

// 跳转到登录页面
function gotoMemberLoginPage() {
    setTimeout(function () {
        window.location.href = $.ajaxUrl("memberLoginUrl");
    }, 3000);
}

// 链接跳转
(function ($) {
    $.extend({
        "linkJump": function (options) {
            console.log($("#" + options).length);
            if ($("#" + options).length > 0) {
                $("#" + options).click();
            }
            return '';
        }
    });
})(jQuery);

// 列表页面布局修正
(function ($) {
    $.fn.extend({
        // 多个表演的验证
        "listRow": function (options) {
            var _this = $(this);
            var _col = Math.ceil(_this.find(options.rowList).length / options.row);
            var _kkey = 0;
            for (var i = 0; i < _col; i++) {
                var keyRang = {min: i * options.row, max: (i + 1) * options.row};
                var _height = 0;
                for (var j = keyRang.min; j < keyRang.max; j++) {
                    if (_this.find(options.rowList).eq(j).find(options.rowFind).height() > _height) {
                        _height = _this.find(options.rowList).eq(j).find(options.rowFind).height();
                    }
                }
                // 获取一排的最高高度
                for (var j = keyRang.min; j < keyRang.max; j++) {
                    _this.find(options.rowList).eq(j).find(options.rowFind).height(_height);
                }
            }
            return '';
        }
    });
})(jQuery);


// 更新购物显示数量
function updateCartNumber() {
    $.ajax({
        type: "POST",
        url: $.ajaxUrl("ajaxUrlGetCartNumber"),
        data: {},
        dataType: "json",
        success: function (_ret) {
            if (_ret._return === "failure") {
                // 非法操作
                if (!!_ret.code && _ret.code == "110") {
                    return  ajaxError();
                }
                // 登录超时
                if (!!_ret.code && _ret.code == "1") {
                    gotoMemberLoginPage();
                }
                // language && message
                if (!!_ret.language) {
                    layer.alert($.languagePack(_ret.language), function (index) {
                        layer.close(index);
                    });
                } else if (!!_ret.message) {
                    layer.alert(_ret.message, function (index) {
                        layer.close(index);
                    });
                }
            } else if (_ret._return === "success") {
                if ($(".w-shopCart").length > 0) {
                    if ($(".w-shopCart").find("num").length > 0) {
                        $(".w-shopCart").find("num").html(_ret.cartNum);
                    } else {
                        $(".w-shopCart>a").find("span").remove();
                        $(".w-shopCart>a").append("<span class=\"num\">" + _ret.cartNum + "</span>");
                    }
                }

            }
        },
        error: function () {
            return ajaxError();
        }
    });
}

/**
 * 会员添加收货地址信息
 * $.fn.formsValidation({
 *      beginStyle: // 执行验证前的方法 _this 参数 $.fn 对象
 *      endStyle: // 验证执行后的方法 _this 参数 $.fn 对象 result 是验证结果
 *      forms:      // 验证的表单的节点
 *      datas:      // 验证表单的值
 *      validation: // 验证过程
 * });
 * @param object dataJson
 * @returns {undefined}
 */
function memberAddress(_this) {
    if ($("input[name='languageId']").val() == 1) {
        var _provincer = [
            {rule: "required", failure: function (ele) {
                    layer.alert(languagePack('pleaseSelectProvinces'), function (index) {
                        ele.focus();
                        layer.close(index);
                    });
                }
            }
        ];
        var _city = [
            {rule: "required", failure: function (ele) {
                    layer.alert(languagePack('pleaseSelectCite'), function (index) {
                        ele.focus();
                        layer.close(index);
                    });
                }
            }
        ];
        var _area = [
            {rule: "required", failure: function (ele) {
                    layer.alert(languagePack('pleaseSelectArea'), function (index) {
                        ele.focus();
                        layer.close(index);
                    });
                }
            }
        ];
    } else {
        var _provincer = '';
        var _city = '';
        var _area = '';
    }
    return _this.formsValidation({
        forms: {
            consignee: $("input[name='consignee']"),
            province: $("input[name='province']"),
            city: $("input[name='city']"),
            area: $("input[name='area']"),
            address: $("input[name='address']"),
            phone: $("input[name='phone']"),
            fixed_tel: $("input[name='fixed_tel']"),
            email: $("input[name='email']"),
            address_alias: $("input[name='address_alias']"),
            zip: $("input[name='zip']")
        },
        datas: {
            consignee: $("input[name='consignee']").val(),
            province: $("input[name='province']").val(),
            city: $("input[name='city']").val(),
            area: $("input[name='area']").val(),
            address: $("input[name='address']").val(),
            phone: $("input[name='phone']").val(),
            fixed_tel: $("input[name='fixed_tel']").val(),
            email: $("input[name='email']").val(),
            address_alias: $("input[name='address_alias']").val(),
            zip: $("input[name='zip']").val()
        },
        validation: {
            consignee: [
                {rule: "required", failure: function (ele) {
                        layer.alert(languagePack('consigneeCanNotBeEmpty'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                },
                {rule: "length", max: 50, failure: function (ele) {
                        layer.alert(languagePack('consigneeLengthCanNotExceed50'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                }
            ],
            province: _provincer,
            city: _city,
            area: _area,
            address: [
                {rule: "required", failure: function (ele) {
                        layer.alert(languagePack('theDetailedAddressCannotBeEmpty'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                },
                {rule: "length", max: 200, failure: function (ele) {
                        layer.alert(languagePack('theDetailedAddressLengthCanNotExceed200'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                }
            ],
            phone: [
                {rule: "required", failure: function (ele) {
                        layer.alert(languagePack('phoneCannotBeEmpty'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                },
                {rule: "length", min: 6, max: 30, failure: function (ele) {
                        layer.alert($.languagePack('phoneLengthCanNotExceed30'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                }
            ],
            fixed_tel: [
                {rule: "length", min: 6, max: 30, failure: function (ele) {
                        layer.alert(languagePack('fixedTelLengthCanNotExceed30'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                }
            ],
            email: [
                {rule: "email", failure: function (ele) {
                        layer.alert(languagePack('mailboxFormatError'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                },
                {rule: "length", max: 80, failure: function (ele) {
                        layer.alert(languagePack('emailLengthCanNotExceed80'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                }
            ],
            address_alias: [
                {rule: "length", max: 200, failure: function (ele) {
                        layer.alert(languagePack('theAddressAliasLengthCanNotExceed200'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                }
            ],
            zip: [
                {rule: "length", max: 20, failure: function (ele) {
                        layer.alert(languagePack('zipLengthCanNotExceed20'), function (index) {
                            ele.focus();
                            layer.close(index);
                        });
                    }
                }
            ]
        }
    });
}

// url 美化过滤
function languageFill(url) {
    var r = url.match(/^(\/[a-z]{2}\/)/i);
    if (r && window.location.pathname.indexOf(r[1]) == -1) {
        return url.replace(r[1], '/');
    }
    return url;
}

function fileUserdown(obj) {
    var _this = $(obj);
    var token = _this.data("token");
    if (token.length < 1) {
        return false;
    }
    var _return = false;
    $.ajax({
        type: "POST",
        url: $.ajaxUrl("ajaxUrlComponentFile"),
        data: {token: token},
        dataType: "json",
        async: false,
        success: function (_ret) {
            if (_ret._return === "failure") {
                // 登录超时
                if (!!_ret.code && _ret.code == "1") {
                    layer.alert($.languagePack(_ret.language), function (index) {
                        layer.close(index);
                    });
                    return false;
                }
            } else if (_ret._return === "success") {
                _return = true;
            }
        },
        error: function () {
            return ajaxError();
        }
    });
    return _return;
}

function productFileUserdown(obj) {
    var _this = $(obj);
    var token = _this.data("token");
    if (token.length < 1) {
        return false;
    }
    var _return = false;
    $.ajax({
        type: "POST",
        url: $.ajaxUrl("ajaxUrlProductsFile"),
        data: {token: token},
        dataType: "json",
        async: false,
        success: function (_ret) {
            if (_ret._return === "failure") {
                if (!!_ret.code && _ret.code == "1") {
                    layer.alert($.languagePack(_ret.language), function (index) {
                        layer.close(index);
                    });
                    return false;
                }
            } else if (_ret._return === "success") {
                _return = true;
            }
        },
        error: function () {
            return ajaxError();
        }
    });
    return _return;
}

function fileSystemUserdown(obj) {
    var _this = $(obj);
    var token = _this.data("token");
    if (token.length < 1) {
        return false;
    }
    var _return = false;
    $.ajax({
        type: "POST",
        url: $.ajaxUrl("ajaxUrlFileSystemDownload"),
        data: {token: token},
        dataType: "json",
        async: false,
        success: function (_ret) {
            if (_ret._return === "failure") {
                if (!!_ret.code && _ret.code == "1") {
                    layer.alert($.languagePack(_ret.language), function (index) {
                        layer.close(index);
                    });
                    return false;
                }
            } else if (_ret._return === "success") {
                _return = true;
            }
        },
        error: function () {
            return ajaxError();
        }
    });
    return _return;
}

function gCloseWindow() {
    var userAgent = navigator.userAgent;
    try {
        window.parent.page
        if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
            window.location.href = "about:blank";
            window.close();
        } else {
            window.opener = null;
            window.open("", "_self");
            window.close();
        }
    } catch (err) {
        if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
            window.parent.location.href = "about:blank";
            window.parent.close();
        } else {
            window.parent.opener = null;
            window.parent.open("", "_self");
            window.parent.close();
        }
    }
}