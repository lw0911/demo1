/**
 * Select2 Catalan translation.
 * 
 * Author: David Planella <david.planella@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ca'] = {
        formatNoMatches: function () { return "No s'ha trobat cap coincidÃ¨ncia"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "IntroduÃ¯u " + n + " carÃ cter" + (n == 1 ? "" : "s") + " mÃ©s"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "IntroduÃ¯u " + n + " carÃ cter" + (n == 1? "" : "s") + "menys"; },
        formatSelectionTooBig: function (limit) { return "NomÃ©s podeu seleccionar " + limit + " element" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "S'estan carregant mÃ©s resultatsâ€¦"; },
        formatSearching: function () { return "S'estÃ  cercantâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ca']);
})(jQuery);