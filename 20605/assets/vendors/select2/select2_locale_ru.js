/**
 * Select2 Russian translation.
 *
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ru'] = {
        formatNoMatches: function () { return "Ð¡Ð¾Ð²Ð¿Ð°Ð´ÐµÐ½Ð¸Ð¹ Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾"; },
        formatInputTooShort: function (input, min) { return "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÐµÑ‰Ðµ Ñ…Ð¾Ñ‚Ñ Ð±Ñ‹" + character(min - input.length); },
        formatInputTooLong: function (input, max) { return "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð°" + character(input.length - max) + " Ð¼ÐµÐ½ÑŒÑˆÐµ"; },
        formatSelectionTooBig: function (limit) { return "Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð²Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð½Ðµ Ð±Ð¾Ð»ÐµÐµ " + limit + " ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚" + (limit%10 == 1 && limit%100 != 11 ? "Ð°" : "Ð¾Ð²"); },
        formatLoadMore: function (pageNumber) { return "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð´Ð°Ð½Ð½Ñ‹Ñ…â€¦"; },
        formatSearching: function () { return "ÐŸÐ¾Ð¸ÑÐºâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ru']);

    function character (n) {
        return " " + n + " ÑÐ¸Ð¼Ð²Ð¾Ð»" + (n%10 < 5 && n%10 > 0 && (n%100 < 5 || n%100 > 20) ? n%10 > 1 ? "a" : "" : "Ð¾Ð²");
    }
})(jQuery);