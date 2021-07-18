/**
* Necessery javascript functions
*/

jQuery(document).ready(function($) {
    var dt = new Date();
    jQuery('#flipcountdownbox').flipcountdown({
        size: 'md',
        beforeDateTime: '1/01/' + (dt.getFullYear() + 1) + ' 00:00:01'
    });
});
