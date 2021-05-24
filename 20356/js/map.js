	function initialize() {
	var mapOptions = {
		zoom: 11,
		scrollwheel: false,
		center: new google.maps.LatLng(40.061681, -75.167041)
	};
	var map = new google.maps.Map(document.getElementById('contact-map'),
		  mapOptions);
	var marker = new google.maps.Marker({
		position: map.getCenter(),
        animation:google.maps.Animation.BOUNCE,
		map: map
	});
}
google.maps.event.addDomListener(window, 'load', initialize);	