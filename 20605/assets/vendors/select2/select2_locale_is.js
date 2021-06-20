/**
 * Select2 Icelandic translation.
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['is'] = {
        formatNoMatches: function () { return "Ekkert fannst"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vinsamlegast skrifiÃ° " + n + " staf" + (n > 1 ? "i" : "") + " Ã­ viÃ°bÃ³t"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vinsamlegast styttiÃ° texta um " + n + " staf" + (n > 1 ? "i" : ""); },
        formatSelectionTooBig: function (limit) { return "ÃžÃº getur aÃ°eins valiÃ° " + limit + " atriÃ°i"; },
        formatLoadMore: function (pageNumber) { return "SÃ¦ki fleiri niÃ°urstÃ¶Ã°urâ€¦"; },
        formatSearching: function () { return "Leitaâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['is']);
})(jQuery);