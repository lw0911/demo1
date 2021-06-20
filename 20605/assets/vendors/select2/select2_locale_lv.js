/**
 * Select2 Latvian translation.
 *
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['lv'] = {
        formatNoMatches: function () { return "SakritÄ«bu nav"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "LÅ«dzu ievadiet vÄ“l " + n + " simbol" + (n == 11 ? "us" : n%10 == 1 ? "u" : "us"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "LÅ«dzu ievadiet par " + n + " simbol" + (n == 11 ? "iem" : n%10 == 1 ? "u" : "iem") + " mazÄk"; },
        formatSelectionTooBig: function (limit) { return "JÅ«s varat izvÄ“lÄ“ties ne vairÄk kÄ " + limit + " element" + (limit == 11 ? "us" : limit%10 == 1 ? "u" : "us"); },
        formatLoadMore: function (pageNumber) { return "Datu ielÄdeâ€¦"; },
        formatSearching: function () { return "MeklÄ“Å¡anaâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['lv']);
})(jQuery);