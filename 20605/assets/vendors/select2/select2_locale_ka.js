/**
 * Select2 Georgian (Kartuli) translation.
 * 
 * Author: Dimitri Kurashvili dimakura@gmail.com
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ka'] = {
        formatNoMatches: function () { return "áƒ•áƒ”áƒ  áƒ›áƒáƒ˜áƒ«áƒ”áƒ‘áƒœáƒ"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "áƒ’áƒ—áƒ®áƒáƒ•áƒ— áƒ¨áƒ”áƒ˜áƒ§áƒ•áƒáƒœáƒáƒ— áƒ™áƒ˜áƒ“áƒ”áƒ• " + n + " áƒ¡áƒ˜áƒ›áƒ‘áƒáƒšáƒ"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "áƒ’áƒ—áƒ®áƒáƒ•áƒ— áƒ¬áƒáƒ¨áƒáƒšáƒáƒ— " + n + " áƒ¡áƒ˜áƒ›áƒ‘áƒáƒšáƒ"; },
        formatSelectionTooBig: function (limit) { return "áƒ—áƒ¥áƒ•áƒ”áƒœ áƒ¨áƒ”áƒ’áƒ˜áƒ«áƒšáƒ˜áƒáƒ— áƒ›áƒ®áƒáƒšáƒáƒ“ " + limit + " áƒ©áƒáƒœáƒáƒ¬áƒ”áƒ áƒ˜áƒ¡ áƒ›áƒáƒœáƒ˜áƒ¨áƒ•áƒœáƒ"; },
        formatLoadMore: function (pageNumber) { return "áƒ¨áƒ”áƒ“áƒ”áƒ’áƒ˜áƒ¡ áƒ©áƒáƒ¢áƒ•áƒ˜áƒ áƒ—áƒ•áƒâ€¦"; },
        formatSearching: function () { return "áƒ«áƒ”áƒ‘áƒœáƒâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ka']);
})(jQuery);