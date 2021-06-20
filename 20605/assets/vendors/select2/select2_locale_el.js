/**
 * Select2 Greek translation.
 * 
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['el'] = {
        formatNoMatches: function () { return "Î”ÎµÎ½ Î²ÏÎ­Î¸Î·ÎºÎ±Î½ Î±Ï€Î¿Ï„ÎµÎ»Î­ÏƒÎ¼Î±Ï„Î±"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Î Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ ÎµÎ¹ÏƒÎ¬Î³ÎµÏ„Îµ " + n + " Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ¿" + (n > 1 ? "Ï…Ï‚" : "") + " Ï‡Î±ÏÎ±ÎºÏ„Î®Ï" + (n > 1 ? "ÎµÏ‚" : "Î±"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Î Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ Î´Î¹Î±Î³ÏÎ¬ÏˆÏ„Îµ " + n + " Ï‡Î±ÏÎ±ÎºÏ„Î®Ï" + (n > 1 ? "ÎµÏ‚" : "Î±"); },
        formatSelectionTooBig: function (limit) { return "ÎœÏ€Î¿ÏÎµÎ¯Ï„Îµ Î½Î± ÎµÏ€Î¹Î»Î­Î¾ÎµÏ„Îµ Î¼ÏŒÎ½Î¿ " + limit + " Î±Î½Ï„Î¹ÎºÎµÎ¯Î¼ÎµÎ½" + (limit > 1 ? "Î±" : "Î¿"); },
        formatLoadMore: function (pageNumber) { return "Î¦ÏŒÏÏ„Ï‰ÏƒÎ· Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÏ‰Î½â€¦"; },
        formatSearching: function () { return "Î‘Î½Î±Î¶Î®Ï„Î·ÏƒÎ·â€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['el']);
})(jQuery);