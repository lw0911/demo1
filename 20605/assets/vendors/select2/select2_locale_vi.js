/**
 * Select2 Vietnamese translation.
 * 
 * Author: Long Nguyen <olragon@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['vi'] = {
        formatNoMatches: function () { return "KhÃ´ng tÃ¬m tháº¥y káº¿t quáº£"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vui lÃ²ng nháº­p nhiá»u hÆ¡n " + n + " kÃ½ tá»±" + (n == 1 ? "" : "s"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vui lÃ²ng nháº­p Ã­t hÆ¡n " + n + " kÃ½ tá»±" + (n == 1? "" : "s"); },
        formatSelectionTooBig: function (limit) { return "Chá»‰ cÃ³ thá»ƒ chá»n Ä‘Æ°á»£c " + limit + " tÃ¹y chá»n" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "Äang láº¥y thÃªm káº¿t quáº£â€¦"; },
        formatSearching: function () { return "Äang tÃ¬mâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['vi']);
})(jQuery);
