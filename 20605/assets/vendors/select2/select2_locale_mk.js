/**
 * Select2 Macedonian translation.
 * 
 * Author: Marko Aleksic <psybaron@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['mk'] = {
        formatNoMatches: function () { return "ÐÐµÐ¼Ð° Ð¿Ñ€Ð¾Ð½Ð°Ñ˜Ð´ÐµÐ½Ð¾ ÑÐ¾Ð²Ð¿Ð°Ñ“Ð°ÑšÐ°"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Ð’Ðµ Ð¼Ð¾Ð»Ð¸Ð¼Ðµ Ð²Ð½ÐµÑÐµÑ‚Ðµ ÑƒÑˆÑ‚Ðµ " + n + " ÐºÐ°Ñ€Ð°ÐºÑ‚ÐµÑ€" + (n == 1 ? "" : "Ð¸"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Ð’Ðµ Ð¼Ð¾Ð»Ð¸Ð¼Ðµ Ð²Ð½ÐµÑÐµÑ‚Ðµ " + n + " Ð¿Ð¾Ð¼Ð°Ð»ÐºÑƒ ÐºÐ°Ñ€Ð°ÐºÑ‚ÐµÑ€" + (n == 1? "" : "Ð¸"); },
        formatSelectionTooBig: function (limit) { return "ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð¸Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ ÑÐ°Ð¼Ð¾ " + limit + " ÑÑ‚Ð°Ð²Ðº" + (limit == 1 ? "Ð°" : "Ð¸"); },
        formatLoadMore: function (pageNumber) { return "Ð’Ñ‡Ð¸Ñ‚ÑƒÐ²Ð°ÑšÐµ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸â€¦"; },
        formatSearching: function () { return "ÐŸÑ€ÐµÐ±Ð°Ñ€ÑƒÐ²Ð°ÑšÐµâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['mk']);
})(jQuery);