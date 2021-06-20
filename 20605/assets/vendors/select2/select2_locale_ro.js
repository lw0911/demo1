/**
 * Select2 Romanian translation.
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ro'] = {
        formatNoMatches: function () { return "Nu a fost gÄƒsit nimic"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "VÄƒ rugÄƒm sÄƒ introduceÈ›i incÄƒ " + n + " caracter" + (n == 1 ? "" : "e"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "VÄƒ rugÄƒm sÄƒ introduceÈ›i mai puÈ›in de " + n + " caracter" + (n == 1? "" : "e"); },
        formatSelectionTooBig: function (limit) { return "AveÈ›i voie sÄƒ selectaÈ›i cel mult " + limit + " element" + (limit == 1 ? "" : "e"); },
        formatLoadMore: function (pageNumber) { return "Se Ã®ncarcÄƒâ€¦"; },
        formatSearching: function () { return "CÄƒutareâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ro']);
})(jQuery);