/**
 * Select2 Persian translation.
 * 
 * Author: Ali Choopan <choopan@arsh.co>
 * Author: Ebrahim Byagowi <ebrahim@gnu.org>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['fa'] = {
        formatMatches: function (matches) { return matches + " Ù†ØªÛŒØ¬Ù‡ Ù…ÙˆØ¬ÙˆØ¯ Ø§Ø³ØªØŒ Ú©Ù„ÛŒØ¯Ù‡Ø§ÛŒ Ø¬Ù‡Øª Ø¨Ø§Ù„Ø§ Ùˆ Ù¾Ø§ÛŒÛŒÙ† Ø±Ø§ Ø¨Ø±Ø§ÛŒ Ú¯Ø´ØªÙ† Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯."; },
        formatNoMatches: function () { return "Ù†ØªÛŒØ¬Ù‡â€ŒØ§ÛŒ ÛŒØ§ÙØª Ù†Ø´Ø¯."; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Ù„Ø·ÙØ§Ù‹ " + n + " Ù†ÙˆÛŒØ³Ù‡ Ø¨ÛŒØ´ØªØ± ÙˆØ§Ø±Ø¯ Ù†Ù…Ø§ÛŒÛŒØ¯"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Ù„Ø·ÙØ§Ù‹ " + n + " Ù†ÙˆÛŒØ³Ù‡ Ø±Ø§ Ø­Ø°Ù Ú©Ù†ÛŒØ¯."; },
        formatSelectionTooBig: function (limit) { return "Ø´Ù…Ø§ ÙÙ‚Ø· Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒØ¯ " + limit + " Ù…ÙˆØ±Ø¯ Ø±Ø§ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯"; },
        formatLoadMore: function (pageNumber) { return "Ø¯Ø± Ø­Ø§Ù„ Ø¨Ø§Ø±Ú¯ÛŒØ±ÛŒ Ù…ÙˆØ§Ø±Ø¯ Ø¨ÛŒØ´ØªØ±â€¦"; },
        formatSearching: function () { return "Ø¯Ø± Ø­Ø§Ù„ Ø¬Ø³ØªØ¬Ùˆâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['fa']);
})(jQuery);