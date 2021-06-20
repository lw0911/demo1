/**
 * Select2 Japanese translation.
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ja'] = {
        formatNoMatches: function () { return "è©²å½“ãªã—"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "å¾Œ" + n + "æ–‡å­—å…¥ã‚Œã¦ãã ã•ã„"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "æ¤œç´¢æ–‡å­—åˆ—ãŒ" + n + "æ–‡å­—é•·ã™ãŽã¾ã™"; },
        formatSelectionTooBig: function (limit) { return "æœ€å¤šã§" + limit + "é …ç›®ã¾ã§ã—ã‹é¸æŠžã§ãã¾ã›ã‚“"; },
        formatLoadMore: function (pageNumber) { return "èª­è¾¼ä¸­ï½¥ï½¥ï½¥"; },
        formatSearching: function () { return "æ¤œç´¢ä¸­ï½¥ï½¥ï½¥"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ja']);
})(jQuery);