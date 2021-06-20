/**
 * Select2 Polish translation.
 *
 * @author  Jan Kondratowicz <jan@kondratowicz.pl>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 * @author  MichaÅ‚ PoÅ‚tyn <mike@poltyn.com>
 * @author  Damian Zajkowski <damian.zajkowski@gmail.com>
 */
(function($) {
    "use strict";

    $.fn.select2.locales['pl'] = {
        formatNoMatches: function() {
            return "Brak wynikÃ³w";
        },
        formatInputTooShort: function(input, min) {
            return "Wpisz co najmniej" + character(min - input.length, "znak", "i");
        },
        formatInputTooLong: function(input, max) {
            return "Wpisana fraza jest za dÅ‚uga o" + character(input.length - max, "znak", "i");
        },
        formatSelectionTooBig: function(limit) {
            return "MoÅ¼esz zaznaczyÄ‡ najwyÅ¼ej" + character(limit, "element", "y");
        },
        formatLoadMore: function(pageNumber) {
            return "Åadowanie wynikÃ³wâ€¦";
        },
        formatSearching: function() {
            return "Szukanieâ€¦";
        }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['pl']);

    function character(n, word, pluralSuffix) {
        //Liczba pojedyncza - brak suffiksu
        //jeden znak
        //jeden element
        var suffix = '';
        if (n > 1 && n < 5) {
            //Liczaba mnoga iloÅ›Ä‡ od 2 do 4 - wÅ‚asny suffiks
            //Dwa znaki, trzy znaki, cztery znaki.
            //Dwa elementy, trzy elementy, cztery elementy
            suffix = pluralSuffix;
        } else if (n == 0 || n >= 5) {
            //IloÅ›Ä‡ 0 suffiks Ã³w
            //Liczaba mnoga w iloÅ›ci 5 i wiÄ™cej - suffiks Ã³w (nie poprawny dla wszystkich wyrazÃ³w, np. 100 wiadomoÅ›ci)
            //Zero znakÃ³w, PiÄ™Ä‡ znakÃ³w, szeÅ›Ä‡ znakÃ³w, siedem znakÃ³w, osiem znakÃ³w.
            //Zero elementÃ³w PiÄ™Ä‡ elementÃ³w, szeÅ›Ä‡ elementÃ³w, siedem elementÃ³w, osiem elementÃ³w.
            suffix = 'Ã³w';
        }
        return " " + n + " " + word + suffix;
    }
})(jQuery);