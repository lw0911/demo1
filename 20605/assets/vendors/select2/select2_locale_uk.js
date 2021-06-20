/**
 * Select2 Ukrainian translation.
 * 
 * @author  bigmihail <bigmihail@bigmir.net>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['uk'] = {
        formatMatches: function (matches) { return character(matches, "Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚") + " Ð·Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾, Ð²Ð¸ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¾Ð²ÑƒÐ¹Ñ‚Ðµ ÐºÐ»Ð°Ð²Ñ–ÑˆÑ– Ð·Ñ– ÑÑ‚Ñ€Ñ–Ð»ÐºÐ°Ð¼Ð¸ Ð²Ð²ÐµÑ€Ñ… Ñ‚Ð° Ð²Ð½Ð¸Ð· Ð´Ð»Ñ Ð½Ð°Ð²Ñ–Ð³Ð°Ñ†Ñ–Ñ—."; },
        formatNoMatches: function () { return "ÐÑ–Ñ‡Ð¾Ð³Ð¾ Ð½Ðµ Ð·Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾"; },
        formatInputTooShort: function (input, min) { return "Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ Ð±ÑƒÐ»ÑŒ Ð»Ð°ÑÐºÐ° Ñ‰Ðµ " + character(min - input.length, "ÑÐ¸Ð¼Ð²Ð¾Ð»"); },
        formatInputTooLong: function (input, max) { return "Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ Ð±ÑƒÐ»ÑŒ Ð»Ð°ÑÐºÐ° Ð½Ð° " + character(input.length - max, "ÑÐ¸Ð¼Ð²Ð¾Ð»") + " Ð¼ÐµÐ½ÑˆÐµ"; },
        formatSelectionTooBig: function (limit) { return "Ð’Ð¸ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð²Ð¸Ð±Ñ€Ð°Ñ‚Ð¸ Ð»Ð¸ÑˆÐµ " + character(limit, "ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚"); },
        formatLoadMore: function (pageNumber) { return "Ð—Ð°Ð²Ð°Ð½Ñ‚Ð°Ð¶ÐµÐ½Ð½Ñ Ð´Ð°Ð½Ð¸Ñ…â€¦"; },
        formatSearching: function () { return "ÐŸÐ¾ÑˆÑƒÐºâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['uk']);

    function character (n, word) {
        return n + " " + word + (n%10 < 5 && n%10 > 0 && (n%100 < 5 || n%100 > 19) ? n%10 > 1 ? "Ð¸" : "" : "Ñ–Ð²");
    }
})(jQuery);