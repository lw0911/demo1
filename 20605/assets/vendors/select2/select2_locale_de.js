/**
 * Select2 German translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['de'] = {
        formatNoMatches: function () { return "Keine Ãœbereinstimmungen gefunden"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Bitte " + n + " Zeichen mehr eingeben"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Bitte " + n + " Zeichen weniger eingeben"; },
        formatSelectionTooBig: function (limit) { return "Sie kÃ¶nnen nur " + limit + " Eintr" + (limit === 1 ? "ag" : "Ã¤ge") + " auswÃ¤hlen"; },
        formatLoadMore: function (pageNumber) { return "Lade mehr Ergebnisseâ€¦"; },
        formatSearching: function () { return "Sucheâ€¦"; },
        formatMatches: function (matches) { return matches + " Ergebnis " + (matches > 1 ? "se" : "") + " verfÃ¼gbar, zum Navigieren die Hoch-/Runter-Pfeiltasten verwenden."; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['de']);
})(jQuery);