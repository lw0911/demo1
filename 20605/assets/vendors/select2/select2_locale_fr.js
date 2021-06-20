/**
 * Select2 French translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['fr'] = {
        formatMatches: function (matches) { return matches + " rÃ©sultats sont disponibles, utilisez les flÃ¨ches haut et bas pour naviguer."; },
        formatNoMatches: function () { return "Aucun rÃ©sultat trouvÃ©"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Saisissez " + n + " caractÃ¨re" + (n == 1? "" : "s") + " supplÃ©mentaire" + (n == 1? "" : "s") ; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Supprimez " + n + " caractÃ¨re" + (n == 1? "" : "s"); },
        formatSelectionTooBig: function (limit) { return "Vous pouvez seulement sÃ©lectionner " + limit + " Ã©lÃ©ment" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "Chargement de rÃ©sultats supplÃ©mentairesâ€¦"; },
        formatSearching: function () { return "Recherche en coursâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['fr']);
})(jQuery);