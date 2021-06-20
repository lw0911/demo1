/**
 * Select2 Finnish translation
 */
(function ($) {
    "use strict";
    $.fn.select2.locales['fi'] = {
        formatNoMatches: function () {
            return "Ei tuloksia";
        },
        formatInputTooShort: function (input, min) {
            var n = min - input.length;
            return "Ole hyvÃ¤ ja anna " + n + " merkkiÃ¤ lisÃ¤Ã¤";
        },
        formatInputTooLong: function (input, max) {
            var n = input.length - max;
            return "Ole hyvÃ¤ ja anna " + n + " merkkiÃ¤ vÃ¤hemmÃ¤n";
        },
        formatSelectionTooBig: function (limit) {
            return "Voit valita ainoastaan " + limit + " kpl";
        },
        formatLoadMore: function (pageNumber) {
            return "Ladataan lisÃ¤Ã¤ tuloksiaâ€¦";
        },
        formatSearching: function () {
            return "EtsitÃ¤Ã¤nâ€¦";
        }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['fi']);
})(jQuery);