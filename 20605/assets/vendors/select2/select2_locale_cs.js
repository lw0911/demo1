/**
 * Select2 Czech translation.
 * 
 * Author: Michal Marek <ahoj@michal-marek.cz>
 * Author - sklonovani: David Vallner <david@vallner.net>
 */
(function ($) {
    "use strict";
    // use text for the numbers 2 through 4
    var smallNumbers = {
        2: function(masc) { return (masc ? "dva" : "dvÄ›"); },
        3: function() { return "tÅ™i"; },
        4: function() { return "ÄtyÅ™i"; }
    }
    $.fn.select2.locales['cs'] = {
        formatNoMatches: function () { return "Nenalezeny Å¾Ã¡dnÃ© poloÅ¾ky"; },
        formatInputTooShort: function (input, min) {
            var n = min - input.length;
            if (n == 1) {
                return "ProsÃ­m zadejte jeÅ¡tÄ› jeden znak";
            } else if (n <= 4) {
                return "ProsÃ­m zadejte jeÅ¡tÄ› dalÅ¡Ã­ "+smallNumbers[n](true)+" znaky";
            } else {
                return "ProsÃ­m zadejte jeÅ¡tÄ› dalÅ¡Ã­ch "+n+" znakÅ¯";
            }
        },
        formatInputTooLong: function (input, max) {
            var n = input.length - max;
            if (n == 1) {
                return "ProsÃ­m zadejte o jeden znak mÃ©nÄ›";
            } else if (n <= 4) {
                return "ProsÃ­m zadejte o "+smallNumbers[n](true)+" znaky mÃ©nÄ›";
            } else {
                return "ProsÃ­m zadejte o "+n+" znakÅ¯ mÃ©nÄ›";
            }
        },
        formatSelectionTooBig: function (limit) {
            if (limit == 1) {
                return "MÅ¯Å¾ete zvolit jen jednu poloÅ¾ku";
            } else if (limit <= 4) {
                return "MÅ¯Å¾ete zvolit maximÃ¡lnÄ› "+smallNumbers[limit](false)+" poloÅ¾ky";
            } else {
                return "MÅ¯Å¾ete zvolit maximÃ¡lnÄ› "+limit+" poloÅ¾ek";
            }
        },
        formatLoadMore: function (pageNumber) { return "NaÄÃ­tajÃ­ se dalÅ¡Ã­ vÃ½sledkyâ€¦"; },
        formatSearching: function () { return "VyhledÃ¡vÃ¡nÃ­â€¦"; }
    };

	$.extend($.fn.select2.defaults, $.fn.select2.locales['cs']);
})(jQuery);