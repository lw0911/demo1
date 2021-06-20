/**
 * Select2 Arabic translation.
 *
 * Author: Adel KEDJOUR <adel@kedjour.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ar'] = {
        formatNoMatches: function () { return "Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ù…Ø·Ø§Ø¨Ù‚Ø§Øª"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; if (n == 1){ return "Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ø­Ø±Ù ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£ÙƒØ«Ø±"; } return n == 2 ? "Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ø­Ø±ÙÙŠÙ† Ø¹Ù„Ù‰ Ø§Ù„Ø£ÙƒØ«Ø±" : "Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ " + n + " Ø¹Ù„Ù‰ Ø§Ù„Ø£ÙƒØ«Ø±"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; if (n == 1){ return "Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ø­Ø±Ù ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„"; } return n == 2 ? "Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ø­Ø±ÙÙŠÙ† Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„" : "Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ " + n + " Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„ "; },
        formatSelectionTooBig: function (limit) { if (limit == 1){ return "ÙŠÙ…ÙƒÙ†Ùƒ Ø£Ù† ØªØ®ØªØ§Ø± Ø¥Ø®ØªÙŠØ§Ø± ÙˆØ§Ø­Ø¯ ÙÙ‚Ø·"; } return limit == 2 ? "ÙŠÙ…ÙƒÙ†Ùƒ Ø£Ù† ØªØ®ØªØ§Ø± Ø¥Ø®ØªÙŠØ§Ø±ÙŠÙ† ÙÙ‚Ø·" : "ÙŠÙ…ÙƒÙ†Ùƒ Ø£Ù† ØªØ®ØªØ§Ø± " + limit + " Ø¥Ø®ØªÙŠØ§Ø±Ø§Øª ÙÙ‚Ø·"; },
        formatLoadMore: function (pageNumber) { return "ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ø²ÙŠØ¯ Ù…Ù† Ø§Ù„Ù†ØªØ§Ø¦Ø¬â€¦"; },
        formatSearching: function () { return "Ø§Ù„Ø¨Ø­Ø«â€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ar']);
})(jQuery);