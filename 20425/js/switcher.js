jQuery(document).ready(function($){
	$('.preset-list li a').on('click',function(event){
		event.preventDefault();
		var color = $(this).data('color'),
			url = 'css/presets/'+color+'.css';
			logoSrc = 'img/presets/'+color+'/logo.png';
			logoSrc2 = 'img/presets/'+color+'/logo@2x.png';
		
		$('#logo .standard-logo img').attr('src', logoSrc);
		$('#logo .retina-logo img').attr('src', logoSrc2);
		$('#preset').attr('href', url);
	});

	$('.toggler').on('click',function(){
		$(this).toggleClass('hide-icon')
		$('.style-chooser').toggleClass('active');
	});
});