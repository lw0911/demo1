

$(function () {
    function gMenuStylePage() {
        if (!!this.doMenuStyle && this.doMenuStyle === 1) {
            return '';
        }
        this.doMenuStyle = 1;
        $("#g-web-ul-menu").menuStyle();
    }
    gMenuStylePage();
    var n = 0;
    $(window).resize(function () {
        this.doMenuStyle = 0;
        if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0" || navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0")) {
            if (n % 2 == 0) {
                this.doMenuStyle = 1;
                gMenuStylePage();
            }
            n++;
        } else {
            gMenuStylePage();
        }
    });
    $(".w-system-in").addClass("clearfix");
});

function substrKeywordInfo(keyword) {
    if (keyword.length < 1) {
        return keyword;
    }
    var _keyword = $(".input-search-w").val();
    var html = "";
    var isSearch = true;
    for (var i = 0; i < keyword.length; i++) {
        if (keyword[i] == '<') {
            isSearch = false;
            html += keyword[i];
            continue;
        }
        if (isSearch == false && keyword[i] == '>') {
            isSearch = true;
            html += keyword[i];
            continue;
        }
        if (isSearch == false) {
            html += keyword[i];
        } else {
            var str = keyword[i];
            if (str == _keyword[0]) {
                var k = i;
                var isFull = false;
                for (var j = 0; j < _keyword.length; j++, k++) {
                    if (keyword[k] == _keyword[j]) {
                        isFull = true;
                    } else {
                        isFull = false;
                        break;
                    }
                }
                if (isFull == true) {
                    i = k;
                    str = "<span class=\"key_word\">" + _keyword + "</span>";
                }
            }
            html += str;
        }
    }
    return html;
}

function substrKeyword(keyword) {
    if (keyword.length < 1) {
        return keyword;
    }
    function htmlspecialchars(string, quoteStyle, charset, doubleEncode) {
        var optTemp = 0
        var i = 0
        var noquotes = false
        if (typeof quoteStyle === 'undefined' || quoteStyle === null) {
            quoteStyle = 2
        }
        string = string || ''
        string = string.toString()

        if (doubleEncode !== false) {
            // Put this first to avoid double-encoding
            string = string.replace(/&/g, '&amp;')
        }

        string = string
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')

        var OPTS = {
            'ENT_NOQUOTES': 0,
            'ENT_HTML_QUOTE_SINGLE': 1,
            'ENT_HTML_QUOTE_DOUBLE': 2,
            'ENT_COMPAT': 2,
            'ENT_QUOTES': 3,
            'ENT_IGNORE': 4
        }
        if (quoteStyle === 0) {
            noquotes = true
        }
        if (typeof quoteStyle !== 'number') {
            // Allow for a single string or an array of string flags
            quoteStyle = [].concat(quoteStyle)
            for (i = 0; i < quoteStyle.length; i++) {
                // Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
                if (OPTS[quoteStyle[i]] === 0) {
                    noquotes = true
                } else if (OPTS[quoteStyle[i]]) {
                    optTemp = optTemp | OPTS[quoteStyle[i]]
                }
            }
            quoteStyle = optTemp
        }
        if (quoteStyle & OPTS.ENT_HTML_QUOTE_SINGLE) {
            string = string.replace(/'/g, '&#039;')
        }
        if (!noquotes) {
            string = string.replace(/"/g, '&quot;')
        }
        return string
    }
    function htmlspecialchars_decode(string, quoteStyle) {
        var optTemp = 0
        var i = 0
        var noquotes = false

        if (typeof quoteStyle === 'undefined') {
            quoteStyle = 2
        }
        string = string.toString()
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
        var OPTS = {
            'ENT_NOQUOTES': 0,
            'ENT_HTML_QUOTE_SINGLE': 1,
            'ENT_HTML_QUOTE_DOUBLE': 2,
            'ENT_COMPAT': 2,
            'ENT_QUOTES': 3,
            'ENT_IGNORE': 4
        }
        if (quoteStyle === 0) {
            noquotes = true
        }
        if (typeof quoteStyle !== 'number') {
            // Allow for a single string or an array of string flags
            quoteStyle = [].concat(quoteStyle)
            for (i = 0; i < quoteStyle.length; i++) {
                // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
                if (OPTS[quoteStyle[i]] === 0) {
                    noquotes = true
                } else if (OPTS[quoteStyle[i]]) {
                    optTemp = optTemp | OPTS[quoteStyle[i]]
                }
            }
            quoteStyle = optTemp
        }
        if (quoteStyle & OPTS.ENT_HTML_QUOTE_SINGLE) {
            // PHP doesn't currently escape if more than one 0, but it should:
            string = string.replace(/&#0*39;/g, "'")
            // This would also be useful here, but not a part of PHP:
            // string = string.replace(/&apos;|&#x0*27;/g, "'");
        }
        if (!noquotes) {
            string = string.replace(/&quot;/g, '"')
        }
        // Put this in last place to avoid escape being double-decoded
        string = string.replace(/&amp;/g, '&')

        return string
    }
    var _keyword = htmlspecialchars(htmlspecialchars_decode($(".input-search-w").val()));
    keyword = htmlspecialchars(htmlspecialchars_decode(keyword));
    return keyword.replace(_keyword, "<span class=\"key_word\">" + _keyword + "</span>");
}

function inputKeyword(string) {
    function htmlspecialchars(string, quoteStyle, charset, doubleEncode) {
        var optTemp = 0
        var i = 0
        var noquotes = false
        if (typeof quoteStyle === 'undefined' || quoteStyle === null) {
            quoteStyle = 2
        }
        string = string || ''
        string = string.toString()

        if (doubleEncode !== false) {
            // Put this first to avoid double-encoding
            string = string.replace(/&/g, '&amp;')
        }

        string = string
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')

        var OPTS = {
            'ENT_NOQUOTES': 0,
            'ENT_HTML_QUOTE_SINGLE': 1,
            'ENT_HTML_QUOTE_DOUBLE': 2,
            'ENT_COMPAT': 2,
            'ENT_QUOTES': 3,
            'ENT_IGNORE': 4
        }
        if (quoteStyle === 0) {
            noquotes = true
        }
        if (typeof quoteStyle !== 'number') {
            // Allow for a single string or an array of string flags
            quoteStyle = [].concat(quoteStyle)
            for (i = 0; i < quoteStyle.length; i++) {
                // Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
                if (OPTS[quoteStyle[i]] === 0) {
                    noquotes = true
                } else if (OPTS[quoteStyle[i]]) {
                    optTemp = optTemp | OPTS[quoteStyle[i]]
                }
            }
            quoteStyle = optTemp
        }
        if (quoteStyle & OPTS.ENT_HTML_QUOTE_SINGLE) {
            string = string.replace(/'/g, '&#039;')
        }
        if (!noquotes) {
            string = string.replace(/"/g, '&quot;')
        }
        return string
    }
    function htmlspecialchars_decode(string, quoteStyle) {
        var optTemp = 0
        var i = 0
        var noquotes = false

        if (typeof quoteStyle === 'undefined') {
            quoteStyle = 2
        }
        string = string.toString()
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
        var OPTS = {
            'ENT_NOQUOTES': 0,
            'ENT_HTML_QUOTE_SINGLE': 1,
            'ENT_HTML_QUOTE_DOUBLE': 2,
            'ENT_COMPAT': 2,
            'ENT_QUOTES': 3,
            'ENT_IGNORE': 4
        }
        if (quoteStyle === 0) {
            noquotes = true
        }
        if (typeof quoteStyle !== 'number') {
            // Allow for a single string or an array of string flags
            quoteStyle = [].concat(quoteStyle)
            for (i = 0; i < quoteStyle.length; i++) {
                // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
                if (OPTS[quoteStyle[i]] === 0) {
                    noquotes = true
                } else if (OPTS[quoteStyle[i]]) {
                    optTemp = optTemp | OPTS[quoteStyle[i]]
                }
            }
            quoteStyle = optTemp
        }
        if (quoteStyle & OPTS.ENT_HTML_QUOTE_SINGLE) {
            // PHP doesn't currently escape if more than one 0, but it should:
            string = string.replace(/&#0*39;/g, "'")
            // This would also be useful here, but not a part of PHP:
            // string = string.replace(/&apos;|&#x0*27;/g, "'");
        }
        if (!noquotes) {
            string = string.replace(/&quot;/g, '"')
        }
        // Put this in last place to avoid escape being double-decoded
        string = string.replace(/&amp;/g, '&')

        return string
    }
    return  htmlspecialchars(htmlspecialchars_decode(string));
}