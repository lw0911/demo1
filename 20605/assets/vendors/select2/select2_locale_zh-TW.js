/**
 * Select2 Traditional Chinese translation
 */
(function ($) {
    "use strict";
    $.fn.select2.locales['zh-TW'] = {
        formatNoMatches: function () { return "æ²’æœ‰æ‰¾åˆ°ç›¸ç¬¦çš„é …ç›®"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "è«‹å†è¼¸å…¥" + n + "å€‹å­—å…ƒ";},
        formatInputTooLong: function (input, max) { var n = input.length - max; return "è«‹åˆªæŽ‰" + n + "å€‹å­—å…ƒ";},
        formatSelectionTooBig: function (limit) { return "ä½ åªèƒ½é¸æ“‡æœ€å¤š" + limit + "é …"; },
        formatLoadMore: function (pageNumber) { return "è¼‰å…¥ä¸­â€¦"; },
        formatSearching: function () { return "æœå°‹ä¸­â€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['zh-TW']);
})(jQuery);