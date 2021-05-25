//var myCenter = new google.maps.LatLng(40.712784, -74.005941);
//
//function initialize() {
//    var mapProp = {
//        center: myCenter,
//        zoom: 12,
//        scrollwheel: false,
//        mapTypeId: google.maps.MapTypeId.ROADMAP,
//        styles: [{
//            "featureType": "all",
//            "elementType": "labels.text.fill",
//            "stylers": [{
//                "saturation": 36
//                    }, {
//                "color": "#333333"
//                    }, {
//                "lightness": 40
//                    }]
//                }, {
//            "featureType": "all",
//            "elementType": "labels.text.stroke",
//            "stylers": [{
//                "visibility": "on"
//                    }, {
//                "color": "#ffffff"
//                    }, {
//                "lightness": 16
//                    }]
//                }, {
//            "featureType": "all",
//            "elementType": "labels.icon",
//            "stylers": [{
//                "visibility": "off"
//                    }]
//                }, {
//            "featureType": "administrative",
//            "elementType": "geometry.fill",
//            "stylers": [{
//                "color": "#fefefe"
//                    }, {
//                "lightness": 20
//                    }]
//                }, {
//            "featureType": "administrative",
//            "elementType": "geometry.stroke",
//            "stylers": [{
//                "color": "#fefefe"
//                    }, {
//                "lightness": 17
//                    }, {
//                "weight": 1.2
//                    }]
//                }, {
//            "featureType": "administrative.locality",
//            "elementType": "labels.text.fill",
//            "stylers": [{
//                "color": "#99CA3C"
//                    }]
//                }, {
//            "featureType": "landscape",
//            "elementType": "geometry",
//            "stylers": [{
//                "color": "#f5f5f5"
//                    }, {
//                "lightness": 20
//                    }]
//                }, {
//            "featureType": "poi",
//            "elementType": "geometry",
//            "stylers": [{
//                "color": "#f5f5f5"
//                    }, {
//                "lightness": 21
//                    }]
//                }, {
//            "featureType": "poi.park",
//            "elementType": "geometry",
//            "stylers": [{
//                "color": "#dedede"
//                    }, {
//                "lightness": 21
//                    }]
//                }, {
//            "featureType": "road.highway",
//            "elementType": "geometry.fill",
//            "stylers": [{
//                "color": "#ffffff"
//                    }, {
//                "lightness": 17
//                    }]
//                }, {
//            "featureType": "road.highway",
//            "elementType": "geometry.stroke",
//            "stylers": [{
//                "color": "#ffffff"
//                    }, {
//                "lightness": 29
//                    }, {
//                "weight": 0.2
//                    }]
//                }, {
//            "featureType": "road.arterial",
//            "elementType": "geometry",
//            "stylers": [{
//                "color": "#ffffff"
//                    }, {
//                "lightness": 18
//                    }]
//                }, {
//            "featureType": "road.local",
//            "elementType": "geometry",
//            "stylers": [{
//                "color": "#ffffff"
//                    }, {
//                "lightness": 16
//                    }]
//                }, {
//            "featureType": "transit",
//            "elementType": "geometry",
//            "stylers": [{
//                "color": "#f2f2f2"
//                    }, {
//                "lightness": 19
//                    }]
//                }, {
//            "featureType": "water",
//            "elementType": "geometry",
//            "stylers": [{
//                "color": "#e9e9e9"
//                    }, {
//                "lightness": 17
//                    }]
//                }]
//    };
//
//    var map = new google.maps.Map(document.getElementById("google_map"), mapProp);
//    var map2 = new google.maps.Map(document.getElementById("google_map3"), mapProp);
//
//    var marker = new google.maps.Marker({
//        position: myCenter,
//        animation: google.maps.Animation.ZOOM,
//        icon: 'images/map_marker_blue.png'
//    });    
//    var marker2 = new google.maps.Marker({
//        position: myCenter,
//        animation: google.maps.Animation.ZOOM,
//        icon: 'images/map_marker_blue.png'
//    });
//
//    var infowindow = new google.maps.InfoWindow({
//        content: "united-states"
//    });
//
//    marker.setMap(map);
//    marker2.setMap(map2);
//}
//
////google.maps.event.addDomListener(window, 'load', initialize);
//
//
//function attachTabClick()
//{
//
//  $('#myTabs').bind('click', function (e)
//   {
//      // e.target is the link
//      // so use its parent to check which map to show
//
//     var tabId = e.target;      
//
//     //check the ID and only call the resize you need -
//      if(tabId == 'office1-tab')
//      {
//         resizeMap(google_map)
//      }
//      else if(tabId == 'office2-tab')
//      {
//         resizeMap(google_map3);
//      }
//             
//    });
//}


// declare your maps outside of the functions like this and remove 
// your var where you create them.

var mapProp = {
    styles: [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
                    }, {
            "color": "#333333"
                    }, {
            "lightness": 40
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
                    }, {
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 17
                    }, {
            "weight": 1.2
                    }]
                }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#99CA3C"
                    }]
                }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dedede"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 17
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 29
                    }, {
            "weight": 0.2
                    }]
                }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 18
                    }]
                }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f2f2f2"
                    }, {
            "lightness": 19
                    }]
                }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e9e9e9"
                    }, {
            "lightness": 17
                    }]
                }]
};
var map1, map2, map3, map4, map5;

var location1 = $('#google_map');
var location2 = $('#map-city');
var location3 = $('#map-box');
var location4 = $('#map-forest');
var location5 = $('#map-forest1');

function initialize() {

    var myLatlng1 = new google.maps.LatLng(-37.8122172, 144.965374);
    var myLatlng2 = new google.maps.LatLng(-37.818535, 145.12194);
    var myLatlng3 = new google.maps.LatLng(-37.834697, 145.165394);
    var myLatlng4 = new google.maps.LatLng(40.712784, -74.005941);
    var myLatlng5 = new google.maps.LatLng(-37.818535, 145.12194);

    var mapOptions1 = {
        zoom: 17,
        center: myLatlng1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles:[{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
                    }, {
            "color": "#333333"
                    }, {
            "lightness": 40
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
                    }, {
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 17
                    }, {
            "weight": 1.2
                    }]
                }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#99CA3C"
                    }]
                }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dedede"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 17
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 29
                    }, {
            "weight": 0.2
                    }]
                }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 18
                    }]
                }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f2f2f2"
                    }, {
            "lightness": 19
                    }]
                }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e9e9e9"
                    }, {
            "lightness": 17
                    }]
                }]
    }
    var mapOptions2 = {
        zoom: 17,
        center: myLatlng2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
                    }, {
            "color": "#333333"
                    }, {
            "lightness": 40
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
                    }, {
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 17
                    }, {
            "weight": 1.2
                    }]
                }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#99CA3C"
                    }]
                }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dedede"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 17
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 29
                    }, {
            "weight": 0.2
                    }]
                }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 18
                    }]
                }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f2f2f2"
                    }, {
            "lightness": 19
                    }]
                }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e9e9e9"
                    }, {
            "lightness": 17
                    }]
                }]
    }
    var mapOptions3 = {
        zoom: 17,
        center: myLatlng3,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
                    }, {
            "color": "#333333"
                    }, {
            "lightness": 40
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
                    }, {
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 17
                    }, {
            "weight": 1.2
                    }]
                }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#99CA3C"
                    }]
                }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dedede"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 17
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 29
                    }, {
            "weight": 0.2
                    }]
                }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 18
                    }]
                }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f2f2f2"
                    }, {
            "lightness": 19
                    }]
                }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e9e9e9"
                    }, {
            "lightness": 17
                    }]
                }]
    }
    var mapOptions4 = {
        center: myLatlng4,
        zoom: 12,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
                    }, {
            "color": "#333333"
                    }, {
            "lightness": 40
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
                    }, {
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 17
                    }, {
            "weight": 1.2
                    }]
                }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#99CA3C"
                    }]
                }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dedede"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 17
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 29
                    }, {
            "weight": 0.2
                    }]
                }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 18
                    }]
                }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f2f2f2"
                    }, {
            "lightness": 19
                    }]
                }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e9e9e9"
                    }, {
            "lightness": 17
                    }]
                }]
    }
    var mapOptions5 = {
        zoom: 17,
        center: myLatlng5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
                    }, {
            "color": "#333333"
                    }, {
            "lightness": 40
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
                    }, {
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#fefefe"
                    }, {
            "lightness": 17
                    }, {
            "weight": 1.2
                    }]
                }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#99CA3C"
                    }]
                }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 20
                    }]
                }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dedede"
                    }, {
            "lightness": 21
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 17
                    }]
                }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 29
                    }, {
            "weight": 0.2
                    }]
                }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 18
                    }]
                }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
                    }, {
            "lightness": 16
                    }]
                }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f2f2f2"
                    }, {
            "lightness": 19
                    }]
                }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e9e9e9"
                    }, {
            "lightness": 17
                    }]
                }]
    }


    if (location1.length) {
        map4 = new google.maps.Map(document.getElementById("google_map"), mapOptions4);
    }
    if (location2.length) {
        map1 = new google.maps.Map(document.getElementById('map-city'), mapOptions1);
    }
    if (location3.length) {
        map2 = new google.maps.Map(document.getElementById('map-box'), mapOptions2);
    }
    if (location3.length) {
        map3 = new google.maps.Map(document.getElementById('map-forest'), mapOptions3);
    }
    if (location5.length) {
        map5 = new google.maps.Map(document.getElementById('map-forest1'), mapOptions5);
    }


    var marker1 = new google.maps.Marker({
        position: myLatlng1,
        map: map1,

    });
    var marker2 = new google.maps.Marker({
        position: myLatlng2,
        map: map2,

    });
    var marker3 = new google.maps.Marker({
        position: myLatlng3,
        map: map3,

    });
    var marker4 = new google.maps.Marker({
        position: myLatlng4,
        map: map4,

    });
    var marker5 = new google.maps.Marker({
        position: myLatlng5,
        map: map5,

    });

    attachTabClick();

}

function attachTabClick() {

    $('.nav_tabs').bind('click', function (e) {
        var tabId = e.target;
        resizeMap(map1)
        resizeMap(map2);
        resizeMap(map3)
        resizeMap(map5)
    });
}

function resizeMap(map) {
    setTimeout(function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    }, 50);
}
google.maps.event.addDomListener(window, 'load', initialize);
