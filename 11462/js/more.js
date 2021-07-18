$(function() {	
	
	scrolly.init({
		wrapper: '#bloc',
		targets: '.scr-el',
		bgParallax: true,
		wrapperSpeed: 0.08
	});
	jQuery(".about .cont").slide({
		titCell: ".hd li",
		mainCell: ".bd"
	});

    jQuery(".main-product").slide({
		titCell: ".hd li",
		mainCell: ".bd"
	});


    
 
})

