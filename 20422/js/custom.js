/******************************************
    File Name: custom.js
    Template Name: Evernest - Responsive HTML5 Theme 
    Created By: htmldotdesign
    Envato Profile: https://themeforest.net/user/htmldotdesign
    Website: https://html.design
    Version: 1.0
******************************************/

/**== loader js ==*/

setTimeout(function() {
  $(".bg_load").fadeOut("slow");
}, 700);

// search input show/hide

$(".user_search_btn").click(function(e) {
  e.preventDefault();
  $(".user_search_input").toggleClass("search_active");
});

// nice select
$(document).ready(function() {
  $("select").niceSelect();
});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    991: {
      items: 2
    }
  }
});

//  team section owl carousel

$(".team_owl-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 20,
  autoHeight: true,
  nav: true,
  autoWidth: true
});

// gradient background for slider section and contact section on mouse move
$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  $(".slider_section .section_bg").css("background", "radial-gradient(at " + mouseXpercentage + "% " + mouseYpercentage + "%, #440ead, #8322da)");
  $(".contact_section .section_bg").css("background", "radial-gradient(at " + mouseXpercentage + "% " + mouseYpercentage + "%, #440ead, #8322da)");
  $(".team_section .section_bg").css("background", "radial-gradient(at " + mouseXpercentage + "% " + mouseYpercentage + "%, #440ead, #8322da)");
  $(".bg_load").css("background", "radial-gradient(at " + mouseXpercentage + "% " + mouseYpercentage + "%, #440ead, #8322da)");
});

// second carousel indicators
$(".carousel").on("slid.bs.carousel", function() {
  $(".second_indicator li").removeClass("active");
  indicators = $(".carousel-indicators li.active").data("slide-to");
  a = $(".second_indicator")
    .find("[data-slide-to='" + indicators + "']")
    .addClass("active");
});

// showing current year on footer
function displayYear() {
  var d = new Date();
  var currentYear = d.getFullYear();
  document.querySelector("#displayDate").innerHTML = currentYear;
}
displayYear();

// navlink toggle

$(".page_link_dmenu").click(function() {
  $(".page_link_sm-menu").slideToggle(300);
  $(this)
    .find(".dropdown-toggle")
    .toggleClass("drop_active");
});

$(".blog_link_dmenu").click(function() {
  $(".blog_link_sm-menu").slideToggle(300);
  $(this)
    .find(".dropdown-toggle")
    .toggleClass("drop_active");
});

/** google_map js **/

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
