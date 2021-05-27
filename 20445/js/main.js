$(function(){


	/* ========================================================================= */
	/*  Init WOW js for css3 animation
	/* ========================================================================= */

	var wow = new WOW({
	    mobile: false // trigger animations on mobile devices (default is true)
	});
	wow.init();
	
    var windowHeight = $(window).height();

    $(".fullscreen").css("height", windowHeight);

    $(window).scroll(function() {
    	if ($(window).scrollTop() >= 85) {
    		$(".site-header").addClass("fixed");
    	}else {
    		$(".site-header").removeClass("fixed");
    	}
    });


    $(".testimonial-slider").owlCarousel({
        singleItem : true,
        autoPlay:true,
    });


    // menu toggle 
    $(".toggle-btn").on("click", function() {
    	$(this).toggleClass("active");
    	$(".site-header").toggleClass("active");
    });

    $('#mygallery').justifiedGallery({
        rowHeight : 240,
        lastRow : 'nojustify',
        margins : 6,
        captions: false,
        sizeRangeSuffixes: {
            100 : '_t', // used with images which are less than 100px on the longest side
            240 : '_m', // used with images which are between 100px and 240px on the longest side
            320 : '_n', // ...
            500 : '',
            640 : '_z',
            1024 : '_b' // used which images that are more than 640px on the longest side
        }
    });
    
});



$(window).load(function() {

    $("#preloader").fadeOut("slow");
});


                    








