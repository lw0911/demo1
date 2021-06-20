/**
 * Select2 Portuguese (Portugal) translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['pt-PT'] = {
        formatNoMatches: function () { return "Nenhum resultado encontrado"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Introduza " + n + " car" + (n == 1 ? "Ã¡cter" : "acteres"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Apague " + n + " car" + (n == 1 ? "Ã¡cter" : "acteres"); },
        formatSelectionTooBig: function (limit) { return "SÃ³ Ã© possÃ­vel selecionar " + limit + " elemento" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "A carregar mais resultadosâ€¦"; },
        formatSearching: function () { return "A pesquisarâ€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['pt-PT']);
})(jQuery);