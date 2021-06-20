/**
 * Select2 Uyghur translation
 */
(function ($) {
    "use strict";
    $.fn.select2.locales['ug-CN'] = {
        formatNoMatches: function () { return "Ù…Ø§Ø³ ÙƒÛÙ„Ù‰Ø¯Ù‰ØºØ§Ù† Ø¦Û‡Ú†Û‡Ø± ØªÛÙ¾Ù‰Ù„Ù…Ù‰Ø¯Ù‰"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "ÙŠÛ•Ù†Û• " + n + " Ú¾Û•Ø±Ù¾ ÙƒÙ‰Ø±Ú¯ÛˆØ²ÛˆÚ­";},
        formatInputTooLong: function (input, max) { var n = input.length - max; return "" + n + "Ú¾Û•Ø±Ù¾ Ø¦Û†Ú†ÛˆØ±ÛˆÚ­";},
        formatSelectionTooBig: function (limit) { return "Ø¦Û•Ú­ ÙƒÛ†Ù¾ Ø¨ÙˆÙ„ØºØ§Ù†Ø¯Ø§" + limit + " ØªØ§Ù„ Ø¦Û‡Ú†Û‡Ø± ØªØ§Ù„Ù„Ù‰ÙŠØ§Ù„Ø§ÙŠØ³Ù‰Ø²"; },
        formatLoadMore: function (pageNumber) { return "Ø¦Û‡Ú†Û‡Ø±Ù„Ø§Ø± Ø¦ÙˆÙ‚Û‡Ù„Ù‰Û‹Ø§ØªÙ‰Ø¯Û‡â€¦"; },
        formatSearching: function () { return "Ø¦Ù‰Ø²Ø¯Û•Û‹Ø§ØªÙ‰Ø¯Û‡â€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ug-CN']);
})(jQuery);