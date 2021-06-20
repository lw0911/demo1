/**
 * Select2 Slovak translation.
 *
 * Author: David Vallner <david@vallner.net>
 */
(function ($) {
    "use strict";
    // use text for the numbers 2 through 4
    var smallNumbers = {
        2: function(masc) { return (masc ? "dva" : "dve"); },
        3: function() { return "tri"; },
        4: function() { return "Å¡tyri"; }
    };
    $.fn.select2.locales['sk'] = {
        formatNoMatches: function () { return "NenaÅ¡li sa Å¾iadne poloÅ¾ky"; },
        formatInputTooShort: function (input, min) {
            var n = min - input.length;
            if (n == 1) {
                return "ProsÃ­m, zadajte eÅ¡te jeden znak";
            } else if (n <= 4) {
                return "ProsÃ­m, zadajte eÅ¡te ÄalÅ¡ie "+smallNumbers[n](true)+" znaky";
            } else {
                return "ProsÃ­m, zadajte eÅ¡te ÄalÅ¡Ã­ch "+n+" znakov";
            }
        },
        formatInputTooLong: function (input, max) {
            var n = input.length - max;
            if (n == 1) {
                return "ProsÃ­m, zadajte o jeden znak menej";
            } else if (n >= 2 && n <= 4) {
                return "ProsÃ­m, zadajte o "+smallNumbers[n](true)+" znaky menej";
            } else {
                return "ProsÃ­m, zadajte o "+n+" znakov menej";
            }
        },
        formatSelectionTooBig: function (limit) {
            if (limit == 1) {
                return "MÃ´Å¾ete zvoliÅ¥ len jednu poloÅ¾ku";
            } else if (limit >= 2 && limit <= 4) {
                return "MÃ´Å¾ete zvoliÅ¥ najviac "+smallNumbers[limit](false)+" poloÅ¾ky";
            } else {
                return "MÃ´Å¾ete zvoliÅ¥ najviac "+limit+" poloÅ¾iek";
            }
        },
        formatLoadMore: function (pageNumber) { return "NaÄÃ­tavajÃº sa ÄalÅ¡ie vÃ½sledkyâ€¦"; },
        formatSearching: function () { return "VyhÄ¾adÃ¡vanieâ€¦"; }
    };

	$.extend($.fn.select2.defaults, $.fn.select2.locales['sk']);
})(jQuery);