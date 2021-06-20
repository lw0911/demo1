/**
 * Select2 Chinese translation
 */
(function ($) {
    "use strict";
    $.fn.select2.locales['zh-CN'] = {
        formatNoMatches: function () { return "æ²¡æœ‰æ‰¾åˆ°åŒ¹é…é¡¹"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "è¯·å†è¾“å…¥" + n + "ä¸ªå­—ç¬¦";},
        formatInputTooLong: function (input, max) { var n = input.length - max; return "è¯·åˆ æŽ‰" + n + "ä¸ªå­—ç¬¦";},
        formatSelectionTooBig: function (limit) { return "ä½ åªèƒ½é€‰æ‹©æœ€å¤š" + limit + "é¡¹"; },
        formatLoadMore: function (pageNumber) { return "åŠ è½½ç»“æžœä¸­â€¦"; },
        formatSearching: function () { return "æœç´¢ä¸­â€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['zh-CN']);
})(jQuery);