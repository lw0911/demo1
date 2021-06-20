/**
 * Select2 Turkish translation.
 * 
 * Author: Salim KAYABAÅžI <salim.kayabasi@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['tr'] = {
        formatNoMatches: function () { return "SonuÃ§ bulunamadÄ±"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "En az " + n + " karakter daha girmelisiniz"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return n + " karakter azaltmalÄ±sÄ±nÄ±z"; },
        formatSelectionTooBig: function (limit) { return "Sadece " + limit + " seÃ§im yapabilirsiniz"; },
        formatLoadMore: function (pageNumber) { return "Daha fazlaâ€¦"; },
        formatSearching: function () { return "AranÄ±yorâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['tr']);
})(jQuery);