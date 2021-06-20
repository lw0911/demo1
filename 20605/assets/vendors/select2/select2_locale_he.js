/**
* Select2 Hebrew translation.
*
* Author: Yakir Sitbon <http://www.yakirs.net/>
*/
(function ($) {
    "use strict";

    $.fn.select2.locales['he'] = {
        formatNoMatches: function () { return "×œ× × ×ž×¦××• ×”×ª××ž×•×ª"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "× × ×œ×”×–×™×Ÿ ×¢×•×“ " + n + " ×ª×•×•×™× × ×•×¡×¤×™×"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "× × ×œ×”×–×™×Ÿ ×¤×—×•×ª " + n + " ×ª×•×•×™×"; },
        formatSelectionTooBig: function (limit) { return "× ×™×ª×Ÿ ×œ×‘×—×•×¨ " + limit + " ×¤×¨×™×˜×™×"; },
        formatLoadMore: function (pageNumber) { return "×˜×•×¢×Ÿ ×ª×•×¦××•×ª × ×•×¡×¤×•×ªâ€¦"; },
        formatSearching: function () { return "×ž×—×¤×©â€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['he']);
})(jQuery);