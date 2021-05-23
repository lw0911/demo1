(function ($, window) {
    $.fn.extend({
        "menuStyle": function (options) {
            var _config = $.extend({
                parent: ".w-nav-in",
                second: 1000,
                again: true
            }, options);
            var menu_node = $(this);
            var _tempStyle = menu_node.attr("style") ? menu_node.attr("style").split(';'):[];
            var _style = '';
            for (var i in _tempStyle) {
                if (!!_tempStyle[i] && _tempStyle[i].length > 0) {
                    if (_tempStyle[i].toLowerCase().indexOf('display') < 0 ) {
                        _style = _style + _tempStyle[i] + ";";
                    }
                }
            }
            // 加入定时器
            if (menu_node.children(".active").length < 1 && _config.again === true) {
                setTimeout(function () {
                    _config.again = false;
                    menu_node.menuStyle(_config)
                    if (!!_config.callBack) {
                        _config.callBack();
                    }
                }, 100);
                return '';
            }
            // 判断是否是pc，menu长度是否超出
            var menu_node_parent = menu_node.parent(_config.parent);
            var goback = function () {
                menu_node.attr("style", _style);
            }
            // 剔除所有的样式还原操作
            var clearMenu = function (menu_node, menu_node_parent) {
                menu_node.removeAttr("style");
                menu_node_parent.removeAttr("style");
                menu_node.children("li").each(function (key) {
                    $(this).removeAttr("style");
                });
                menu_node.next(".g-prev-next-ul").remove();
                goback();
                if (!!_config.callBack) {
                    _config.callBack();
                }
            }
            menu_node.removeAttr("style");

            // 外部控制是否执行菜单分页效果
            if (typeof window.document.menuStyle === 'boolean' && window.document.menuStyle === false) {
                goback();
                if (!!_config.callBack) {
                    _config.callBack();
                }
                return '';
            }

            // IE7 不执行分页效果
            if (window.navigator.appName == "Microsoft Internet Explorer" && window.navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
                goback();
                if (!!_config.callBack) {
                    _config.callBack();
                }
                return '';
            }
            if (menu_node_parent.parent().width() < menu_node_parent.width()) {
                var menu_node_parent_width = menu_node_parent.parent().width();
            } else {
                var menu_node_parent_width = menu_node_parent.width();
            }
            // 判断上下结构的宽度是否需要写入插件
            if (menu_node_parent_width === 0 || ((menu_node.children("li").eq(0).outerWidth(true) + 10) >= menu_node_parent_width)) {
                clearMenu(menu_node, menu_node_parent);
                return '';
            }
            // 判断总长度是否超过
            var isLanger = (function () {
                var lang = 0;
                menu_node.children("li").each(function () {
                    lang += $(this).outerWidth(true);
                });
                if (lang > (menu_node_parent_width) + 2) {
                    return true;
                }
                return false;
            })();
            if (!isLanger) {
                clearMenu(menu_node, menu_node_parent);
                return '';
            }
            clearMenu(menu_node, menu_node_parent);
            menu_node.css("visibility", "hidden");
            // 开始执行
            $("body").css("overflow-x", "hidden");
            // 添加左右翻页标识
            menu_node_parent.append("<ul data-going=\"0\" class=\"nav_inner clearfix g-prev-next-ul\"><li class=\"g-prev-li\" style=\"margin-left:1px;margin-right:1px;padding-left:1px;padding-right:1px;float:left;border:0px;\"><a href=\"javascript:void(0);\" class=\"g-prev\" style=\"margin-left:1px;margin-right:1px;padding-left:1px;padding-right:1px;\">&#9668</a></li><li class=\"g-next-li\" style=\"margin-left:1px;margin-right:1px;padding-left:1px;padding-right:1px;float:right;border:0px;\"><a href=\"javascript:void(0);\" class=\"g-next\" style=\"margin-left:1px;margin-right:1px;padding-left:1px;padding-right:1px;\">&#9658</a></li></ul>");
            // 是否存在 min-width:xx%
            if (menu_node.children("li").eq(0).css("min-width").indexOf("%") > 0) {
                menu_node.children("li").css("min-width", (parseInt(menu_node_parent_width / 100 * parseFloat(menu_node.children("li").eq(0).css("min-width"))) + 1) + "px");
            }
            // 定义 ul 的总长度
            var menu_node_width = 2;
            var borderLW = parseInt(menu_node.css('border-left-width'));
            var borderRW = parseInt(menu_node.css('border-right-width'));
            if (isNaN(borderLW)) {
                borderLW = 0;
            }
            if (isNaN(borderRW)) {
                borderRW = 0;
            }
            menu_node_width += borderLW + borderRW;

            menu_node.children("li").each(function (key) {
                var li_this = $(this);
                var li_this_width = li_this.outerWidth(true);
                menu_node_width += li_this_width;
            });
            menu_node_width = menu_node_width + parseInt(menu_node.css("padding-left")) + parseInt(menu_node.css("padding-right"));
            // 设置 .w-nav-in overflow:hidden 以及 估计宽度
            menu_node_parent.css({"overflow": "hidden", "width": menu_node_parent_width + "px", "position": "relative"});
            // 设置 menu 的宽度
            var menu_node_height = menu_node.children("li").eq(0).outerHeight(true) + parseInt(menu_node.css("padding-top")) + parseInt(menu_node.css("padding-bottom"));
            menu_node.css({"height": menu_node_height + "px", "width": menu_node_width + "px", "position": "relative", "left": "0px", "top": "0px"});
            // 上一个以及下一个
            var menu_node_next = menu_node.next(".g-prev-next-ul");
            var _prev = menu_node_next.children(".g-prev-li").eq(0);
            var _next = menu_node_next.children(".g-next-li").eq(0);
            if (parseInt(_prev.css("min-width")) > 0) {
                _prev.css("min-width", "0px");
            }
            if (parseInt(_prev.children("a").css("min-width")) > 0) {
                _prev.children("a").css("min-width", "0px");
            }
            if (parseInt(_next.css("min-width")) > 0) {
                _next.css("min-width", "0px");
            }
            if (parseInt(_next.children("a").css("min-width")) > 0) {
                _next.children("a").css("min-width", "0px");
            }
            menu_node_next.css({"width": ((_prev.outerWidth(true) + _next.outerWidth(true)) + 3) + "px", "position": "absolute", "right": "0px", "top": "0px"});
            // 设置prev以及next的显示位置
            var setNodePrevNextCss = function () {
                var _left = menu_node_parent_width + menu_node_parent.offset().left - (_prev.outerWidth(true) + _next.outerWidth(true));
                menu_node_next.css({"right": "0px", "top": "0px"});
            }
            setNodePrevNextCss(0);
            menu_node_parent_width = menu_node_parent_width - parseInt(menu_node.css("padding-left")) - parseInt(menu_node.css("padding-right"));
            // 设置初始化时 加入左右标识的样式以及各个菜单的样式
            var initNodeLiCss = function (menu_node_parent_width, menu_node, _prev, _next) {
                var tempWidth = 0;
                var showWidth = menu_node_parent_width - (_prev.outerWidth(true) + _next.outerWidth(true))
                var isShow = true;
                menu_node.children("li").each(function (key) {
                    if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                        return '';
                    }
                    if (true === isShow) {
                        if (($(this).outerWidth(true) + tempWidth) > showWidth) {
                            isShow = false;
                            $(this).css("visibility", "hidden");
                        } else {
                            tempWidth += $(this).outerWidth(true);
                            $(this).css("visibility", "visible");
                        }
                    } else {
                        $(this).css("visibility", "hidden");
                    }
                });
                menu_node_parent.css("overflow", "visible");
            }
            // 显示当前菜单的标签页
            var fromToShow = function (init) {
                if (menu_node.children(".active").length < 1) {
                    init();
                    return '';
                }
                var start = false;
                var end = false;
                var isTrue = false;
                var tempWidth = 0;
                var showWidth = menu_node_parent_width - (_prev.outerWidth(true) + _next.outerWidth(true))
                menu_node.children("li").each(function (key) {
                    if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                        return '';
                    }
                    if (($(this).outerWidth(true) + tempWidth) > showWidth) {
                        if (false === end) {
                            if (true === isTrue) {
                                end = key - 1;
                            } else {
                                tempWidth = $(this).outerWidth(true);
                                start = key;
                                end = false;
                            }
                        }
                    } else {
                        if (false === start) {
                            start = key;
                        }
                        tempWidth += $(this).outerWidth(true);
                    }
                    if ($(this).hasClass("active")) {
                        isTrue = true;
                    }
                });
                if (start === 0) {
                    init();
                } else {
                    // 计算左移长度
                    if (false === end) {
                        end = menu_node.children("li").length - 1;
                    }
                    var left = 0;
                    var isAdd = true;
                    menu_node.children("li").each(function (key) {
                        if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                            return '';
                        }
                        if (start <= key && key <= end) {
                            if (true === isAdd) {
                                isAdd = false;
                            }
                            $(this).css("visibility", "visible");
                        } else {
                            if (true === isAdd) {
                                left += $(this).outerWidth(true);
                            }
                            $(this).css("visibility", "hidden");
                        }
                    });
                    menu_node.css({"left": "-" + left + "px"});
                    menu_node_parent.css("overflow", "visible");
                }

            }
            fromToShow(function () {
                initNodeLiCss(menu_node_parent_width, menu_node, _prev, _next);
            });
            // 设置是否显示上一页或者下一页
            var setIsShow = function (menu_node, _prev, _next) {
                if (menu_node.children("li").eq(0).css("visibility") === "visible") {
                    _prev.css("visibility", "hidden");
                } else {
                    _prev.css("visibility", "visible");
                }
                if (menu_node.children("li").eq(menu_node.children("li").length - 1).css("visibility") === "visible") {
                    _next.css("visibility", "hidden");
                } else {
                    _next.css("visibility", "visible");
                }
            }
            setIsShow(menu_node, _prev, _next);
            // 开始滚动，点击下一页
            _next.children(".g-next").click(function () {
                if (menu_node.children("li").eq(menu_node.children("li").length - 1).css("visibility") === "visible") {
                    return '';
                }
                var _this = $(this);
                if (menu_node_next.data("going") == 1 || menu_node_next.is(":animated")) {
                    return '';
                }
                menu_node_next.data("going", "1");
                setTimeout(function () {
                    menu_node_next.data("going", "0");
                    menu_node_parent.css("overflow", "visible");
                }, _config.second + 200);
                menu_node_parent.css("overflow", "hidden");
                var _left = 0;
                var sstart = false;
                var hstart = false;
                if (menu_node.children("li").eq(0).css("visibility") === "hidden") {
                    var isAdd = true;
                    menu_node.children("li").each(function (key) {
                        if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                            return '';
                        }
                        if ($(this).css("visibility") === "visible") {
                            isAdd = false;
                            return '';
                        }
                        if (true === isAdd) {
                            _left += $(this).outerWidth(true);
                        }
                    });
                }
                menu_node.children("li").each(function (key) {
                    if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                        return '';
                    }
                    if ($(this).css("visibility") === "visible") {
                        if (hstart === false) {
                            hstart = key;
                        }
                        sstart = key + 1;
                        _left += $(this).outerWidth(true);
                    }
                });

                var tempWidth = 0;
                var showWidth = menu_node_parent_width - (_prev.outerWidth(true) + _next.outerWidth(true))
                var isShow = true;
                menu_node.children("li").each(function (key) {
                    if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                        return '';
                    }
                    if (false != sstart) {
                        if (sstart <= key) {
                            if (true === isShow) {
                                if (($(this).outerWidth(true) + tempWidth) > showWidth) {
                                    isShow = false;
                                    $(this).css("visibility", "hidden");
                                } else {
                                    tempWidth += $(this).outerWidth(true);
                                    $(this).css("visibility", "visible");
                                }
                            } else {
                                $(this).css("visibility", "hidden");
                            }
                        }
                    }
                });
                menu_node.animate({"left": "-" + _left + "px"}, _config.second, function () {
                    menu_node.children("li").each(function (key) {
                        if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {

                        } else {
                            if (false != sstart) {
                                if (sstart > key) {
                                    $(this).css("visibility", "hidden");
                                }
                            }
                        }

                    });
                    setIsShow(menu_node, _prev, _next);
                    menu_node_parent.css("overflow", "visible");

                })
            });
            _prev.click(function () {
                if (menu_node.children("li").eq(0).css("visibility") === "visible") {
                    return '';
                }
                var _this = $(this);
                if (menu_node_next.data("going") == 1 || menu_node_next.is(":animated")) {
                    return '';
                }
                menu_node_next.data("going", "1");
                setTimeout(function () {
                    menu_node_next.data("going", "0");
                    menu_node_parent.css("overflow", "visible");
                }, _config.second + 200);
                menu_node_parent.css("overflow", "hidden");
                var left = parseInt(menu_node.css("left"));
                var _left = false;
                var enNo = menu_node.children("li").length - 1;
                var showWidth = menu_node_parent_width - (_prev.outerWidth(true) + _next.outerWidth(true))
                // 是否到头
                var tmp = true;
                var tmpLeft = 0;
                menu_node.children("li").each(function (key) {
                    if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                        return '';
                    }
                    if (true === tmp) {
                        if ($(this).css("visibility") === "hidden") {
                            tmpLeft += $(this).outerWidth(true);
                        } else {
                            tmp = false;
                        }
                    }
                });
                // tmpLeft < showWidth
                if (tmpLeft < showWidth) {
                    menu_node.children("li").each(function (key) {
                        if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                            return '';
                        }
                        $(this).css("visibility", "visible");
                    });
                    menu_node.animate({"left": "0px"}, _config.second, function () {
                        initNodeLiCss(menu_node_parent_width, menu_node, _prev, _next);
                        setIsShow(menu_node, _prev, _next);
                    })
                    return '';
                } else {
                    // 需要知道从哪里到哪里
                    var end = false;
                    var start = false;
                    var tLeft = 0;
                    var rs = false;
                    if (menu_node.children("li").eq(enNo).css("visibility") === "visible") {
                        for (var i = enNo; i >= 0; i--) {
                            if (menu_node.children("li").eq(i).css("visibility") === "hidden") {
                                if (end === false) {
                                    end = i;
                                }
                                if ((tLeft + menu_node.children("li").eq(i).outerWidth(true)) > showWidth) {
                                    if (start === false) {
                                        start = i + 1;
                                    }
                                } else {
                                    tLeft += menu_node.children("li").eq(i).outerWidth(true);
                                }
                            }
                        }
                    } else {
                        for (var i = enNo - 1; i >= 0; i--) {
                            if (rs === false && menu_node.children("li").eq(i).css("visibility") === "visible") {
                                rs = true;
                            }
                            if (rs === true) {
                                if (menu_node.children("li").eq(i).css("visibility") === "hidden") {
                                    if (end === false) {
                                        end = i;
                                    }
                                    if ((tLeft + menu_node.children("li").eq(i).outerWidth(true)) > showWidth) {
                                        if (start === false) {
                                            start = i + 1;
                                        }
                                    } else {
                                        tLeft += menu_node.children("li").eq(i).outerWidth(true);
                                    }
                                }
                            }
                        }
                        if (start === false) {
                            start = 0;
                            tLeft = Math.abs(left);
                        }
                    }
                    menu_node.children("li").each(function (key) {
                        if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                            return '';
                        }
                        $(this).css("visibility", "visible");
                    });
                    menu_node.animate({"left": (left + tLeft) + "px"}, _config.second, function () {
                        menu_node.children("li").each(function (key) {
                            if ($(this).hasClass("g-prev-li") || $(this).hasClass("g-next-li")) {
                                return '';
                            }
                            if (start <= key && key <= end) {
                                $(this).css("visibility", "visible");
                            } else {
                                $(this).css("visibility", "hidden");
                            }
                        });
                        setIsShow(menu_node, _prev, _next);
                        menu_node_parent.css("overflow", "visible");
                    });
                }

            });
            menu_node.css("visibility", "visible");
            if (!!_config.callBack) {
                _config.callBack();
            }
        }
    });
})(jQuery, window);