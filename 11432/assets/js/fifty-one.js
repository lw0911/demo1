$(document).ready(function(){

	/* PRELOADER SCRIPT */
	$(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").delay(5000).fadeOut("slow");;
    }); 
	/* PRELOADER SCRIPT ENDS */

	/* SLIDESHOW BACKGROUND SCRIPT */
	$(".background-container").vegas({
        delay: 7000,
        timer: false,
        shuffle: true,
        transition: [ 'swirlRight', 'swirlLeft' ],
        transitionDuration: 2000,
        slides: [
            { src: "assets/images/architect.jpg" },
            { src: "assets/images/fields.jpg" },
            { src: "assets/images/sky-scrapper.jpg" },
            { src: "assets/images/horse.jpg" }
        ]
    });
    $('.vegas-container').removeAttr('style');

    $(window).resize(function() {
      if ($('body').width() < 1000)
        $('.vegas-container').height(550);
      else
        $('.vegas-container').height(800);
    });
	/* SLIDESHOW BACKGROUND SCRIPT ENDS */

	/* COUNTDOWN SCRIPT */
	$('#getting-started').countdown('2018/01/01', function(event) {
        $(this).html(event.strftime(''
            + '<div class="days"><span>%D </span><hr/><span class="label"> Days </span></div>'
            + '<div class="hours"><span>%H </span><hr/><span class="label"> Hrs </span></div>'
            + '<div class="minutes"><span>%M </span><hr/><span class="label"> Mins </span></div> ' 
            + '<div class="seconds"><span>%S </span><hr/><span class="label"> Secs </span></div>'
        ));
    });
	/* COUNTDOWN SCRIPT ENDS*/

    /* NAVIGATION BAR SCRIPT */
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar-default');

        if (scrollPos > 200) {
          navbar.addClass('is-scroll');
        } else {
          navbar.removeClass('is-scroll');
        }
    });
    /* NAVIGATION BAR SCRIPT ENDS */

    /* COUNTER SCRIPT */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    /* COUNTER SCRIPT ENDS */

    /* TESTIMONINALS CAROUSEL SCRIPT */
    $("#owl-example").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay: 5000,
        stopOnHover: true
    });
    /* TESTIMONINALS CAROUSEL SCRIPT ENDS */

    /* THE TEAM CAROUSEL SCRIPT */
    $("#meet-team").owlCarousel({
        items: 3,
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        slideSpeed : 300,
        paginationSpeed : 400,
        autoPlay: 5000,
        stopOnHover: true
    });
	/* THE TEAM CAROUSEL SCRIPT ENDS */


	/* GOOGLE MAP SCRIPT */
	function initialize() {
        var map_marker = document.getElementById('map-marker');
        var map_options = {
        center: new google.maps.LatLng(40.674, -73.954),
        zoom: 8,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#93817c'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#a5b076'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#f5f1e6'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#f8c967'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#e9bc62'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#e98d58'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#db8555'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#806b63'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8f7d77'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }

        ],
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_marker, map_options)
        //map marker
        var myLatlng = new google.maps.LatLng(40.674, -73.954);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Locate us at!'
        });

    }
    google.maps.event.addDomListener(window, 'load', initialize);

	/* GOOGLE MAP SCRIPT ENDS */

	/* ================================== 
					ANIMATION 
	   ================================== */

	  if ( $('body').hasClass( 'play-animations' )) {
      var $animator = $( '*[data-animation]' );

      $animator.each( function( j, elem ) {

        var $elem = $( elem ),
          animationClass = $elem.data( 'animation' );

        $elem.addClass( animationClass );
        $elem.addClass( 'animated visible' );
        $elem.addClass( 'pause-animation' );

        $elem.one( 'inview', function() {
          $elem.removeClass( 'pause-animation' );
          $elem.addClass( 'finished-animation' );
        });
      });
    };

});	
