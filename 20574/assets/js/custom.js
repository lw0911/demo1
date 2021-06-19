/*
Theme Name: Toor - Travel Booking HTML5 Template.
Author: codezionsoftwares
Author URL: https://themeforest.net/user/codezionsoftwares
Version: 1.0.0
*/
(function ($) {
  'use strict';
  	// custom-select
  	$(document).ready(function() {
        $('.custom-select').niceSelect();
    });
    $(document).ready(function () {
	    $(".hamburger-menu").click(function () {
	      $(".menu-btn").toggleClass("active");
	      $(".main-menu").toggleClass("active");
	      $("body").toggleClass("menu-open");
	      $('html').toggleClass('overflow');
	    });
	});
	// Navigation fix
	$(window).scroll(function () {
	    var sticky = $('.header .navigation'),
	      scroll = $(window).scrollTop();
	    if (scroll >= 100) sticky.addClass('sticky');
	    else sticky.removeClass('sticky');
	});
 	// Navigation
    $(document).ready(function () {
	    $('.main-navigation .main-menu li.menu-item-has-children>a, .main-navigation .main-menu li.menu-item-has-megamenu>a').on('click', function () {
	      $(this).removeAttr('href');
	      var element = $(this).parent('li');
	      if (element.hasClass('open')) {
	        element.removeClass('open');
	        element.find('li').removeClass('open');
	        element.find('ul.sub-menu, .megamenu').slideUp();
	      } else {
	        element.addClass('open');
	        element.children('ul.sub-menu, .megamenu').slideDown();
	        element.siblings('li').children('ul.sub-menu, .megamenu').slideUp();
	        element.siblings('li').removeClass('open');
	        element.siblings('li').find('li').removeClass('open');
	        element.siblings('li').find('ul.sub-menu, .megamenu').slideUp();
	      }
	    });
	    $('.menu-item-has-children>a').append('<span class="arrow"></span>');
    	$('.menu-item-has-megamenu>a').append('<span class="arrow"></span>');
	});
	// Main Slider
	$('.main-banner').slick({
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows:true,
	    dots:false,
	    autoplay: true,
  		autoplaySpeed: 2000,
  		speed:500,
  		cssEase: 'linear',
  		responsive: [{
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 1
	      }
	    }]
	});
	// Datepicker
	$(document).ready(function () {
	    $('.datepickr').datepicker({
	      timepicker: false,
	      minDate: new Date()
	    });
	    $('.dob').datepicker({
	      timepicker: false,
	    });
	    $('.timepickr').datepicker({
	      timepicker: true,
	      onlyTimepicker: true,
	      range: true,
	    });
	});
	// Hotels slider
	$('.hotel-slider').slick({
	    infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows:true,
	    dots:false,
	    autoplay: true,
  		autoplaySpeed: 2000,
  		speed:500,
  		cssEase: 'linear',
  		responsive: [{
	      breakpoint: 1200,
	      settings: {
	        arrows: true,
	        slidesToShow: 3
	      }
	    },{
	      breakpoint: 992,
	      settings: {
	        arrows: true,
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 576,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 1
	      }
	    }]
	});
	// Flights slider
	$('.flights-slider').slick({
	    infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows:true,
	    dots:false,
	    autoplay: true,
  		autoplaySpeed: 2000,
  		speed:500,
  		cssEase: 'linear',
  		responsive: [{
	      breakpoint: 992,
	      settings: {
	        arrows: true,
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 1
	      }
	    }, {
	      breakpoint: 576,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 1
	      }
	    }]
	});
	// Team slider
	$('.team-slider').slick({
	    infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows:true,
	    dots:false,
	    autoplay: true,
  		autoplaySpeed: 2000,
  		speed:500,
  		cssEase: 'linear',
  		responsive: [{
	      breakpoint: 1200,
	      settings: {
	        arrows: true,
	        slidesToShow: 3
	      }
	    },{
	      breakpoint: 992,
	      settings: {
	        arrows: true,
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 576,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 1
	      }
	    }]
	});
	// testimonial slider
  	$('.testimonial-nav').slick({
	    infinite: true,
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    arrows: false,
	    dots:false,
	    cssEase: 'linear',
	    centerMode: true,
	    centerPadding: '15px',
	    focusOnSelect:true,
	    asNavFor: '.testimonial-for',
	    responsive: [{
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 3
	      }
	    }]
	});
	$('.testimonial-for').slick({
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    dots:true,
	    vertical:true,
	    cssEase: 'linear',
	    asNavFor: '.testimonial-nav'
	});
	// blog slider
	$('.blog-slider').slick({
	    infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows:true,
	    dots:false,
	    autoplay: true,
  		autoplaySpeed: 2000,
  		speed:500,
  		cssEase: 'linear',
  		responsive: [{
	      breakpoint: 992,
	      settings: {
	        arrows: true,
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 1
	      }
	    }, {
	      breakpoint: 576,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 1
	      }
	    }]
	});
	// Partners slider
	$('.partners-slider').slick({
	    infinite: true,
	    slidesToShow: 7,
	    slidesToScroll: 1,
	    arrows:true,
	    dots:false,
	    autoplay: true,
  		autoplaySpeed: 2000,
  		speed:500,
  		cssEase: 'linear',
  		responsive: [
  		{
	      breakpoint: 1200,
	      settings: {
	        arrows: true,
	        slidesToShow: 5
	      }
	    },{
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 4
	      }
	    }, {
	      breakpoint: 576,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 3
	      }
	    }, {
	      breakpoint: 400,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 2
	      }
	    }]
	});
	// price range
	$(".js-range-slider1").ionRangeSlider({
	      type: "double",
	      skin: "round",
	      hide_min_max: true,
	      min: 0,
	      max: 1000,
	      from: 100,
	      to: 800,
	      grid: false,
	      prefix: "$"
	});
	$(".range-slider-time").ionRangeSlider({
        type: "double",
	      skin: "round",
	      hide_min_max: true,
        values: [
            "00:00", "00:15", "00:30", "00:45", 
            "01:00", "01:15", "01:30", "01:45", 
            "02:00", "02:15", "02:30", "02:45", 
            "03:00", "03:15", "03:30", "03:45", 
            "04:00", "04:15", "04:30", "04:45", 
            "05:00", "05:15", "05:30", "05:45", 
            "06:00", "06:15", "06:30", "06:45", 
            "07:00", "07:15", "07:30", "07:45",
            "08:00", "08:15", "08:30", "08:45", 
            "09:00", "09:15", "09:30", "09:45", 
            "10:00", "10:15", "10:30", "10:45", 
            "11:00", "11:15", "11:30", "11:45", 
            "12:00", "12:15", "12:30", "12:45", 
            "13:00", "13:15", "13:30", "13:45", 
            "14:00", "14:15", "14:30", "14:45", 
            "15:00", "15:15", "15:30", "15:45", 
            "16:00", "16:15", "16:30", "16:45", 
            "17:00", "17:15", "17:30", "17:45", 
            "18:00", "18:15", "18:30", "18:45", 
            "19:00", "19:15", "19:30", "19:45", 
            "20:00", "20:15", "20:30", "20:45", 
            "21:00", "21:15", "21:30", "21:45", 
            "22:00", "22:15", "22:30", "22:45", 
            "23:00", "23:15", "23:30", "23:45", 
        ],
        from_min: 8,
        to: 40,
        drag_interval: true,
        min_interval: 8,

    });
    $(".range-slider-cruise").ionRangeSlider({
        type: "single",
	    skin: "round",
	    hide_min_max: true,
        values: [
            "0", "1 Nights", "2 Nights", "3 Nights", "4 Nights", 
            "5 Nights", "6 Nights", "7 Nights", "8 Nights", 
            "9 Nights", "10 Nights", "11 Nights", "12 Nights", 
        ],
        from_min: 5,
        drag_interval: true,
        min_interval: 5,

    });
    // counter
	$('.count').each(function () {
	    $(this).prop('Counter', 0).animate({
	      Counter: $(this).text()
	    }, {
	      duration: 4000,
	      easing: 'swing',
	      step: function (now) {
	        $(this).text(Math.ceil(now));
	      }
	    });
	});
	// detail-slider
	$('.detail-slider-for').slick({
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    dots:false,
	    cssEase: 'linear',
	    asNavFor: '.detail-slider-nav'
	});
	$('.detail-slider-nav').slick({
	    infinite: true,
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    arrows: false,
	    dots:false,
	    cssEase: 'linear',
	    centerMode: true,
	    centerPadding: '0px',
	    focusOnSelect:true,
	    asNavFor: '.detail-slider-for',
	    responsive: [{
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 3
	      }
	    }]
	});
	$('.magnific-gallery').magnificPopup({
		delegate: 'a.popup', 
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery:{
			enabled: true
		}
	});
	// detail-testimonial
	$('.detail-testimonial').slick({
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay:true,
	    autoplaySpeed:2000,
	    speed:300,
	    arrows: false,
	    dots:false,
	    cssEase: 'linear',
	});
    // back to top
	var offset = 220;
	var duration = 500;
	$(window).on('scroll', function() {
	    if ($(this).scrollTop() > offset) {
	        $('.back-top').fadeIn(duration);
	    } else {
	        $('.back-top').fadeOut(duration);
	    }
	});
	$('.back-top').on('click', function(event) {
	    event.preventDefault();
	    $('html, body').animate({scrollTop: 0}, "slow");
	    return false;
	});
	if($(window).scrollTop() > offset) {
	    $('.back-top').fadeOut(0);
	}
	$('a[href="#"]').click(function(e) {
	    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	});
	// time counter
	function makeTimer() {
	    var endTime = new Date("01 January 2021 00:00:00 GMT+05:30");
	    endTime = (Date.parse(endTime) / 1000);
	    var now = new Date();
	    now = (Date.parse(now) / 1000);
	    var timeLeft = endTime - now;
	    var days = Math.floor(timeLeft / 86400);
	    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
	    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
	    if (hours < "10") {
	      hours = "0" + hours;
	    }
	    if (minutes < "10") {
	      minutes = "0" + minutes;
	    }
	    if (seconds < "10") {
	      seconds = "0" + seconds;
	    }
	    $("#cvdays").html(days);
	    $("#cvhours").html(hours);
	    $("#cvminutes").html(minutes);
	    $("#cvseconds").html(seconds);
	}
	setInterval(function () {
	    makeTimer();
	}, 1000);
	// filter gallery
	  $(document).ready(function () {
	    $('.gallery-grid').isotope(function () {
	      itemSelector: '.filter-box'
	    });
	    $('.filter-gallery>ul>li>a').click(function () {
	      $('.filter-gallery>ul>li>a').removeClass('active');
	      $(this).addClass('active');
	      var selector = $(this).attr('data-filter');
	      $('.gallery-grid').isotope({
	        filter: selector
	      })
	      return false;
	    });
	  });
	  $('.gallery-grid').magnificPopup({
		delegate: 'a.popup',
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery:{
			enabled: true
		}
	});
})(jQuery);