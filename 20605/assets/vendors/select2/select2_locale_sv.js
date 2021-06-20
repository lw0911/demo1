/**
 * Select2 Swedish translation.
 *
 * Author: Jens Rantil <jens.rantil@telavox.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['sv'] = {
        formatNoMatches: function () { return "Inga trÃ¤ffar"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Var god skriv in " + n + (n>1 ? " till tecken" : " tecken till"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Var god sudda ut " + n + " tecken"; },
        formatSelectionTooBig: function (limit) { return "Du kan max vÃ¤lja " + limit + " element"; },
        formatLoadMore: function (pageNumber) { return "Laddar fler resultatâ€¦"; },
        formatSearching: function () { return "SÃ¶kerâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['sv']);
})(jQuery);