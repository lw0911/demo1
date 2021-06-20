/**
 * Select2 Hungarian translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['hu'] = {
        formatNoMatches: function () { return "Nincs talÃ¡lat."; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "TÃºl rÃ¶vid. MÃ©g " + n + " karakter hiÃ¡nyzik."; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "TÃºl hosszÃº. " + n + " karakterrel tÃ¶bb, mint kellene."; },
        formatSelectionTooBig: function (limit) { return "Csak " + limit + " elemet lehet kivÃ¡lasztani."; },
        formatLoadMore: function (pageNumber) { return "TÃ¶ltÃ©sâ€¦"; },
        formatSearching: function () { return "KeresÃ©sâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['hu']);
})(jQuery);