(function ($) {
    $.fn.extend({
        // 多个表演的验证
        "formsValidation": function (options) {
            // 默认值
            var defaults = {
            };
            var options = $.extend(defaults, options);
            if (typeof options.beginStyle === "function") {
                options.beginStyle($(this));
            }
            var result = true;
            this.each(function () {
                var _this = $(this);
                var o = options;
                if (typeof o.validation === "undefined") {
                    return false
                }
                for (var i in o.forms) {
                    if (result === false) {
                        break;
                    }
                    for (var j in o.validation[i]) {
                        if (result === false) {
                            break;
                        }
                        // 节点 名字 i
                        // var element = o.forms[i];
                        // var elementVal = o.datas[i];
                        if (typeof o.validation[i][j].rule !== "undefined") {
                            switch (o.validation[i][j].rule) {
                                case "required":
                                    if ($.trim(o.datas[i]) === "") {
                                        if (typeof o.validation[i][j].failure === "function") {
                                            o.validation[i][j].failure(o.forms[i]);
                                        }
                                        result = false;
                                    }
                                    break;
                                case "email":
                                    if (o.datas[i] !== "") {
                                        if (!/^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(o.datas[i])) {  //$.trim(o.datas[i]) === "") {
                                            if (typeof o.validation[i][j].failure === "function") {
                                                o.validation[i][j].failure(o.forms[i]);
                                            }
                                            result = false;
                                        }
                                    }
                                    break;
                                case "password":
                                    if (o.datas[i] !== o.validation[i][j].repwd) {
                                        if (typeof o.validation[i][j].failure === "function") {
                                            o.validation[i][j].failure(o.forms[i]);
                                        }
                                        result = false;
                                    }
                                    break;
                                case "length":
                                    var o_datas_length = strlen(o.datas[i]);
                                    if (o_datas_length !== 0) {
                                        if (typeof o.validation[i][j].min !== "undefined" && typeof o.validation[i][j].max !== "undefined") {
                                            if (o_datas_length < o.validation[i][j].min || o_datas_length > o.validation[i][j].max) {
                                                if (typeof o.validation[i][j].failure === "function") {
                                                    o.validation[i][j].failure(o.forms[i]);
                                                }
                                                result = false;
                                            }
                                        } else if (typeof o.validation[i][j].min === "undefined" && typeof o.validation[i][j].max !== "undefined") {
                                            if (o_datas_length > o.validation[i][j].max) {
                                                if (typeof o.validation[i][j].failure === "function") {
                                                    o.validation[i][j].failure(o.forms[i]);
                                                }
                                                result = false;
                                            }
                                        } else if (typeof o.validation[i][j].min !== "undefined" && typeof o.validation[i][j].max === "undefined") {
                                            if (o_datas_length < o.validation[i][j].min) {
                                                if (typeof o.validation[i][j].failure === "function") {
                                                    o.validation[i][j].failure(o.forms[i]);
                                                }
                                                result = false;
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    result = false;
                            }
                        } else if (typeof o.validation[i][j].preg !== "undefined") {

                        } else {
                            console.log("表单异常错误");
                        }
                    }
                }
            });

            if (typeof options.endStyle === "function") {
                options.endStyle($(this), result);
            }
            if (result === false) {
                return false
            } else {
                return options.datas;
            }
        }
    });
})(jQuery);