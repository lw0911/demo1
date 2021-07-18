
//  Theme Custom jquery file, 

      // Created on   : 04/05/2017. 
      // Theme Name   : Bizco.
      // Description  : Bizco || Responsive html5 Business template.
      // Version      : 1.
      // Author       : @creativegigs.
      // Developed by : Jubayer Al Hasan (jubayer.hasan1991@gmail.com).
   



"use strict";




// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}


// Main Menu Function 
function themeMenu () {
  var menu= $("#mega-menu-holder");
  if(menu.length) {
    menu.menuzord({
      animation:"zoom-out"
    });
  }
}

// Theme Search Box 
function searchBox () {
  var search = $("#search-button"),
      mainSearch = $("#searchWrapper"),
      close = $("#close-button");
  if(search.length) {
    search.on('click', function(){
      mainSearch.addClass('show-box');
    });
    close.on('click', function() {
      mainSearch.removeClass('show-box');
    });
  }
}


// Business banner slider 
function BannerSlider () {
  var banner = $("#business-main-banner");
  if (banner.length) {
    banner.revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:true,
      delay:7000,
      navigation: {
          arrows: {
              style:"hesperiden",
              enable:true,
              hide_onmobile:true,
              hide_under:778,
              hide_onleave:true,
              hide_delay:200,
              hide_delay_mobile:1200,
              tmp:'',
              left: {
                h_align:"left",
                v_align:"center",
                h_offset:20,
                v_offset:0
              },
              right: {
                h_align:"right",
                v_align:"center",
                h_offset:20,
                v_offset:0
              }
            }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,320],
                gridheight:[900,900,900,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                },
    });
  };
}

// Business banner slider TWo
function BannerSliderTwo () {
  var banner = $("#business-main-banner-two");
  if (banner.length) {
    banner.revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:true,
      delay:7000,
      navigation: {
          arrows: {
              style:"hesperiden",
              enable:true,
              hide_onmobile:true,
              hide_under:778,
              hide_onleave:true,
              hide_delay:200,
              hide_delay_mobile:1200,
              tmp:'',
              left: {
                h_align:"left",
                v_align:"center",
                h_offset:20,
                v_offset:0
              },
              right: {
                h_align:"right",
                v_align:"center",
                h_offset:20,
                v_offset:0
              }
            }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,320],
                gridheight:[720,720,720,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                },
    });
  };
}


// WOW animation 
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated) 
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  }
}



// Fancybox Video
function FancypopUpVideo () {
  if ($(".fancy-video").length) {
      $(".fancy-video").fancybox({
      maxWidth  : 1080,
      maxHeight : 1080,
      fitToView : false,
      width   : '85%',
      height    : '85%',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
  };
}


// Service Slider 
function serviceSlide () {
  var ccSlider = $ (".service-slider");
  if(ccSlider.length) {
      ccSlider.owlCarousel({
        loop:true,
        nav:false,
        navText: ["",""],
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        navSpeed:1200,
        lazyLoad:true,
        singleItem:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                center:true,
                items:1
            },
            560:{
                items:2
            },
            992:{
                center:true,
                items:3
            }
        }
    })
  }
}

// Service Slider 
function serviceSlideTwo () {
  var ccSlider = $ (".service-slider-two");
  if(ccSlider.length) {
      ccSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        navSpeed:1200,
        lazyLoad:true,
        singleItem:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
  }
}

// Testimonial slider
function testimonialSlider () {
  var cSlider = $ (".testimonial-slider");
  if(cSlider.length) {
      cSlider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        lazyLoad:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
  }
}


// Partner Logo Footer 
function partnersLogo () {
  var logoslider = $ ("#partner-logo");
  if(logoslider.length) {
      logoslider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        lazyLoad:true,
        singleItem:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
  }
}



// Latest News slider
function newslSlider () {
  var nSlider = $ (".latest-news-sldier");
  if(nSlider.length) {
      nSlider.owlCarousel({
        loop:true,
        nav:true,
        navText: ["",""],
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1300,
        lazyLoad:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            580:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}



// Product Slider
function productSlider () {
  var nSlider = $ (".related-product-slider");
  if(nSlider.length) {
      nSlider.owlCarousel({
        loop:true,
        nav:true,
        navText: ["",""],
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1300,
        lazyLoad:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// Counter function
function CounterNumberChanger () {
  var timer = $('.timer');
  if(timer.length) {
      timer.appear(function () {
        timer.countTo();
    })
  }
}

// Mixitup gallery
function mixitupGallery () {
  if ($("#mixitUp-item").length) {
    $("#mixitUp-item").mixItUp()
  };
}


// Area Chart function
function areaChart () {
  if($("#chartContainer").length) {
        var chart = new CanvasJS.Chart("chartContainer",
            {
                animationEnabled: true,
                axisX:{
                  tickColor: "rgba(0,0,0,0.0)",
                  gridColor: "rgba(0,0,0,0.0)" ,
                },
                axisY:{
                  tickColor: "rgba(0,0,0,0.0)" ,
                  gridColor: "rgba(0,0,0,0.05)" ,
                  gridThickness: 1
                },

                data: [{        
                    legendMarkerType: "square",
                    type: "area",
                    color: "rgba(172,239,255,1)",
                    markerSize: 0,
                    
                    dataPoints: [
                        { x: 10, y: 55 },
                        { x: 20, y: 70 },
                        { x: 30, y: 80 },
                        { x: 40, y: 65 },
                        { x: 50, y: 60 },
                        { x: 60, y: 70 },
                        { x: 70, y: 90 },
                        { x: 80, y: 95 },
                        { x: 90, y: 80 },
                        { x: 100, y: 70 },
                        { x: 110, y: 60 },
                        { x: 120, y: 70 },
                        { x: 130, y: 85 },
                        { x: 140, y: 90 },
                      ]
                },
                {        
                    legendMarkerType: "square",
                    type: "area",
                    color: "rgba(139,240,218,1)",
                    markerSize: 0,
                    label: "",
                    dataPoints: [
                        { x: 10, y: 35 },
                        { x: 20, y: 50 },
                        { x: 30, y: 60 },
                        { x: 40, y: 45 },
                        { x: 50, y: 40 },
                        { x: 60, y: 50 },
                        { x: 70, y: 70 },
                        { x: 80, y: 75 },
                        { x: 90, y: 60 },
                        { x: 100, y: 50 },
                        { x: 110, y: 40 },
                        { x: 120, y: 50 },
                        { x: 130, y: 65 },
                        { x: 140, y: 70 },
                      ]
                }
                
                
                
                ]
            });

        chart.render();
  }
}


// shop price ranger
function priceRanger () {
  if ($('.price-ranger').length) {
    $( '.price-ranger #slider-range' ).slider({
      range: true,
      min: 0,
      max: 1200,
      values: [ 99, 1035 ],
      slide: function( event, ui ) {
        $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + ui.values[ 0 ] );
        $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + ui.values[ 1 ] );
      }
    });
      $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 0 ) );
    $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 1 ) );        
  };  
}


// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  var activeform = $(".form-validation");
  if(activeform.length){
      activeform.validate({ // initialize the plugin
        rules: {
          Fname: {
            required: true
          },
          Lname: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          message: {
            required: true
          }
        },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeform.fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        activeform.fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


// Sticky header
function stickyHeader () {
  if ($('.main-header').length) {
    var sticky = $('.main-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}

// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");

    });

    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });

    $('.panel-heading a').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.stopPropagation();
        }
    });

  };
}




// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     themeMenu ();
     searchBox ();
     BannerSlider ();
     BannerSliderTwo ();
     wowAnimation ();
     FancypopUpVideo ();
     serviceSlide ();
     serviceSlideTwo ();
     testimonialSlider ();
     partnersLogo ();
     newslSlider ();
     productSlider ();
     mixitupGallery ();
     CounterNumberChanger ();
     areaChart ();
     priceRanger ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     themeAccrodion ()
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
		  prealoader ();
  })(jQuery);
 });


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ();
  })(jQuery);
});
