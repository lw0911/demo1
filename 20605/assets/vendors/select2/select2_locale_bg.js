/**
 * Select2 Bulgarian translation.
 * 
 * @author  Lubomir Vikev <lubomirvikev@gmail.com>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['bg'] = {
        formatNoMatches: function () { return "ÐÑÐ¼Ð° Ð½Ð°Ð¼ÐµÑ€ÐµÐ½Ð¸ ÑÑŠÐ²Ð¿Ð°Ð´ÐµÐ½Ð¸Ñ"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "ÐœÐ¾Ð»Ñ Ð²ÑŠÐ²ÐµÐ´ÐµÑ‚Ðµ Ð¾Ñ‰Ðµ " + n + " ÑÐ¸Ð¼Ð²Ð¾Ð»" + (n > 1 ? "Ð°" : ""); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "ÐœÐ¾Ð»Ñ Ð²ÑŠÐ²ÐµÐ´ÐµÑ‚Ðµ Ñ " + n + " Ð¿Ð¾-Ð¼Ð°Ð»ÐºÐ¾ ÑÐ¸Ð¼Ð²Ð¾Ð»" + (n > 1 ? "Ð°" : ""); },
        formatSelectionTooBig: function (limit) { return "ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð½Ð°Ð¿Ñ€Ð°Ð²Ð¸Ñ‚Ðµ Ð´Ð¾ " + limit + (limit > 1 ? " Ð¸Ð·Ð±Ð¾Ñ€Ð°" : " Ð¸Ð·Ð±Ð¾Ñ€"); },
        formatLoadMore: function (pageNumber) { return "Ð—Ð°Ñ€ÐµÐ¶Ð´Ð°Ñ‚ ÑÐµ Ð¾Ñ‰Ðµâ€¦"; },
        formatSearching: function () { return "Ð¢ÑŠÑ€ÑÐµÐ½Ðµâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['bg']);
})(jQuery);