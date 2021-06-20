/**
 * Select2 Korean translation.
 * 
 * @author  Swen Mun <longfinfunnel@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ko'] = {
        formatNoMatches: function () { return "ê²°ê³¼ ì—†ìŒ"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "ë„ˆë¬´ ì§§ìŠµë‹ˆë‹¤. "+n+"ê¸€ìž ë” ìž…ë ¥í•´ì£¼ì„¸ìš”."; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "ë„ˆë¬´ ê¹ë‹ˆë‹¤. "+n+"ê¸€ìž ì§€ì›Œì£¼ì„¸ìš”."; },
        formatSelectionTooBig: function (limit) { return "ìµœëŒ€ "+limit+"ê°œê¹Œì§€ë§Œ ì„ íƒí•˜ì‹¤ ìˆ˜ ìžˆìŠµë‹ˆë‹¤."; },
        formatLoadMore: function (pageNumber) { return "ë¶ˆëŸ¬ì˜¤ëŠ” ì¤‘â€¦"; },
        formatSearching: function () { return "ê²€ìƒ‰ ì¤‘â€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ko']);
})(jQuery);