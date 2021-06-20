/**
 * Select2 Lithuanian translation.
 * 
 * @author  CRONUS Karmalakas <cronus dot karmalakas at gmail dot com>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['lt'] = {
        formatNoMatches: function () { return "AtitikmenÅ³ nerasta"; },
        formatInputTooShort: function (input, min) { return "Ä®raÅ¡ykite dar" + character(min - input.length); },
        formatInputTooLong: function (input, max) { return "PaÅ¡alinkite" + character(input.length - max); },
        formatSelectionTooBig: function (limit) {
        	return "JÅ«s galite pasirinkti tik " + limit + " element" + ((limit%100 > 9 && limit%100 < 21) || limit%10 == 0 ? "Å³" : limit%10 > 1 ? "us" : "Ä…");
        },
        formatLoadMore: function (pageNumber) { return "Kraunama daugiau rezultatÅ³â€¦"; },
        formatSearching: function () { return "IeÅ¡komaâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['lt']);

    function character (n) {
        return " " + n + " simbol" + ((n%100 > 9 && n%100 < 21) || n%10 == 0 ? "iÅ³" : n%10 > 1 ? "ius" : "Ä¯");
    }
})(jQuery);