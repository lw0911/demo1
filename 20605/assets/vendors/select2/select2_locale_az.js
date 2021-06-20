/**
 * Select2 Azerbaijani translation.
 *
 * Author: Farhad Safarov <farhad.safarov@gmail.com>
 */
(function ($) {
    "use strict";

     $.fn.select2.locales['az'] = {
        formatMatches: function (matches) { return matches + " nÉ™ticÉ™ mÃ¶vcuddur, hÉ™rÉ™kÉ™t etdirmÉ™k Ã¼Ã§Ã¼n yuxarÄ± vÉ™ aÅŸaÄŸÄ± dÃ¼ymÉ™lÉ™rindÉ™n istifadÉ™ edin."; },
        formatNoMatches: function () { return "NÉ™ticÉ™ tapÄ±lmadÄ±"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return n + " simvol daxil edin"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return n + " simvol silin"; },
        formatSelectionTooBig: function (limit) { return "SadÉ™cÉ™ " + limit + " element seÃ§É™ bilÉ™rsiniz"; },
        formatLoadMore: function (pageNumber) { return "Daha Ã§ox nÉ™ticÉ™ yÃ¼klÉ™nirâ€¦"; },
        formatSearching: function () { return "AxtarÄ±lÄ±râ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['az']);
})(jQuery);