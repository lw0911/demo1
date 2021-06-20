/**
 * Select2 Thai translation.
 *
 * Author: Atsawin Chaowanakritsanakul <joke@nakhon.net>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['th'] = {
        formatNoMatches: function () { return "à¹„à¸¡à¹ˆà¸žà¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "à¹‚à¸›à¸£à¸”à¸žà¸´à¸¡à¸žà¹Œà¹€à¸žà¸´à¹ˆà¸¡à¸­à¸µà¸ " + n + " à¸•à¸±à¸§à¸­à¸±à¸à¸©à¸£"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "à¹‚à¸›à¸£à¸”à¸¥à¸šà¸­à¸­à¸ " + n + " à¸•à¸±à¸§à¸­à¸±à¸à¸©à¸£"; },
        formatSelectionTooBig: function (limit) { return "à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸¥à¸·à¸­à¸à¹„à¸”à¹‰à¹„à¸¡à¹ˆà¹€à¸à¸´à¸™ " + limit + " à¸£à¸²à¸¢à¸à¸²à¸£"; },
        formatLoadMore: function (pageNumber) { return "à¸à¸³à¸¥à¸±à¸‡à¸„à¹‰à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹€à¸žà¸´à¹ˆà¸¡â€¦"; },
        formatSearching: function () { return "à¸à¸³à¸¥à¸±à¸‡à¸„à¹‰à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥â€¦"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['th']);
})(jQuery);