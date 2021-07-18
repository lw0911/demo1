(function($) {
	"use strict";

	if(typeof revslider_showDoubleJqueryError === "undefined") {
		function revslider_showDoubleJqueryError(sliderID) {
			var err = "<div class='rs_error_message_box'>";
			err += "<div class='rs_error_message_oops'>Oops...</div>";
			err += "<div class='rs_error_message_content'>";
			err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
			err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
			err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
			err += "</div>";
		err += "</div>";
			jQuery(sliderID).show().html(err);
		}
	}

	var	revapi1,
		tpj;
	jQuery(function() {
		tpj = jQuery;
		if(tpj("#rev_slider_1_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_1_1");
		}else{
			revapi1 = tpj("#rev_slider_1_1").show().revolution({
				jsFileLocation:"js/",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1440,1024,778,480",
				gridheight:"820,768,960,720",
				spinner:"spinner0",
				editorheight:"820,768,960,720",
				responsiveLevels:"1240,1024,778,480",
				navigation: {
					onHoverStop:false,
					arrows: {
						enable:true,
						tmp:"<div class=\"tp-title-wrap\">  	<div class=\"tp-arr-imgholder\"></div> </div>",
						style:"zeus",
						hide_onmobile:true,
						hide_under:778,
						left: {
							h_offset:30
						},
						right: {
							h_offset:30
						}
					},
					bullets: {
						enable:true,
						tmp:"",
						style:"hesperiden"
					}
				},
				parallax: {
					levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
					type:"mouse",
					origo:"slidercenter",
					speed:0
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
			});
		}
	});
})(jQuery);