jQuery(function($) {
    "use strict";

	// for popup video
    if ($('.popup-video').length > 0) {
    	$('.popup-video').magnificPopup({
    		type: 'iframe',
    		mainClass: 'mfp-fade',
    		removalDelay: 160,
    		preloader: false,
    		fixedContentPos: false
    	});
    }
	
	/*==========  PAGE LOAD EFFECT  ==========*/
    if ($('.animsition').length > 0) {
	    $('.animsition').animsition({
	    	loading: false
	    });
    }

    /*==========  PRELOADER  ==========*/
	$(window).on('load', function() {
        //Preloader
        $('.preloader').addClass('load-anim');

        var dataLoading = $('.p-loading').data('loading');
        $('.preloader .p-loading')
        .prepend('<div class="progressFull" data-loading="' + dataLoading + '"></div>');
        setTimeout(function() {
        	$('.preloader').addClass('preloader-hide');
        }, 500);
    });

	/*==========  INITIAT WOW JS  ==========*/
	new WOW().init();


    /*==========  BUTTON RIPPLE EFFECT  ==========*/
	$('.ripple').rippleria({
	  // aniamtion speed
	  duration: 400,

	  // custom easing effect
	  easing: 'linear'
	});


	/*==========  MEGA MENU  ==========*/
    $('.main-nav').parent().css('position','static').parent().css('position', 'relative');
    $('.menu-full').each(function(){
        $(this).parent().addClass('menu-justify');
    });
 	

	$('.menu-justify').mouseover(function(){
		$( '.box-header' ).addClass( 'no-shadow' );
	});
	$('.menu-justify').mouseout(function(){
		$( '.box-header' ).removeClass( 'no-shadow' );
	});



	/*==========  ONEPAGE NAV  ==========*/
	if ($('.main-nav').length > 0) {
		$('.main-nav, .mobile-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 1500,
			easing: "easeInOutExpo",
			filter: ':not(.dropdown-items>li>a)'
		});
	}

	//For local scroll
	if ($('.next-section').length > 0) {
		$('.next-section').on('click', function(event){
			event.preventDefault();
			var hash = $(this).prop('hash');
			var $this = $(this);
			if(hash) {
				$('html, body').stop().animate({
					scrollTop: $($this.attr('href')).offset().top
				}, 900);
			}
		});
	}


	/*==========  MOBILE NAV  ==========*/
	if ($('#offcanvas-opener').length > 0) {
		$('#offcanvas-opener').on('click', function(event){
			event.preventDefault();
			$('body').addClass('offcanvas');
			$('.offcanvas-toggler').addClass('active');
		});
	}

	if ($('#offcanvas-closer').length > 0) {
		$('#offcanvas-closer, .offcanvas-overlay, .mobile-nav>ul>li:not(.has-child)>a').on('click', function(event){
			event.preventDefault();
			$('body').removeClass('offcanvas');
			$('.offcanvas-toggler').removeClass('active');
		});
	}
	

	/*==========  Mobile dropdown menu collapse  ==========*/
	var submenuLiA = $('.mobile-nav li.has-child > a');
	var submenuUl = $('.mobile-nav ul.dropdown-items');

	submenuUl.addClass('submenu-hidden');

	if( submenuLiA.length > 0 ) {
		submenuLiA.on('click', function(e) {

			e.preventDefault();

			var submenuVisible = $('.mobile-nav ul.dropdown-items:not(.submenu-hidden)'),
				submenuParent = $(this).closest('li.has-child'),
				submenInner = submenuParent.children('ul.dropdown-items');

			submenInner.slideToggle(200).toggleClass('submenu-hidden');

			var openULschildUL = submenInner.find('ul.dropdown-items');
			var openULschildUlLi = openULschildUL.parent('li.has-child');

			openULschildUlLi.removeClass('children-open');

			if( ! openULschildUL.hasClass('submenu-hidden') ) {
				openULschildUL.addClass('submenu-hidden').hide();
			}

			if( ! submenInner.hasClass('submenu-hidden')) {
				submenuParent.addClass('children-open');
			} else {
				submenuParent.removeClass('children-open');
			}

		});
	}


	/*==========  STICKY MENU  ==========*/
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>500 ){
			$('.sticky').addClass('sticky-header');
		} else {
			$('.sticky').removeClass('sticky-header');
		}
	});


	/*==========  SIMPLE SLIDER  ==========*/
	if ($('.simple-slider').length > 0) {
		$(".simple-slider").owlCarousel({
			nav: true,
			navText: [
			"<i class='icon-angle-left'></i>",
			"<i class='icon-angle-right'></i>"
			],
			loop: true,
			autoplay: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			items: 1
		});
	}

	//for advanced-slider
	if ($('.advanced-slider').length > 0) {
		$( ".advanced-slider .owl-controls" ).addClass( "container");
	}


	/*==========  TEAM SLIDER  ==========*/
	if ($('.team-slider').length > 0) {
		$(".team-slider").owlCarousel({
			dotsContainer: '.team-slider-thumb',
			nav: false,
			loop: true,
			items: 1,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
		});
	}

	//Screenshots
	if ($('.screenshots').length > 0) {
		$(".screenshots").owlCarousel({
			margin: 35,
			loop: true,
      		nav: true,
			responsive:{
				0:{
					items: 1
				},
				480:{
					items:2
				},
				768:{
					items:3
				},
				992:{
					items:3
				},
				1366:{
					items:4
				}
			}
		});
	}

	//People saying
	if ($('.people').length > 0) {
		$(".people").owlCarousel({
			margin: 35,
			loop: true,
			responsive:{
				0:{
					items: 1
				},
				480:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:2
				},
				1366:{
					items:2
				}
			}
		});
	}


	/*==========  TESTIMONIAL  SLIDER  ==========*/
	if ($('.testimonial-slider-thumb').length > 0) {
		 $('.testimonial-slider-thumb').flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    itemWidth: 245,
		    asNavFor: '.testimonial-slider'
		});
	}

	if ($('.testimonial-slider').length > 0) {
		$('.testimonial-slider').flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    sync: ".testimonial-slider-thumb"
		});
	}

	//testimonial-slider-v2
	$('.testimonial-slider-v2').flexslider({
		animation: "slide",
		controlNav: "thumbnails"
	});

	/*==========  TWITTER SLIDER  ==========*/
	(function(){
		var twitterSlider = $('#tweetSlider');
		if ( twitterSlider.length > 0 ) {

			twitterSlider.twittie({
				count : 3, // Change it as how many tweets you need to show
				template : '<div class="twitter-info"><div class="tweet-text ft-fm-2"><p>{{tweet}}</p></div><div class="twitt-tools"><ul class="twiiter-options"><li><a class="relpy-btn" href="https://twitter.com/intent/tweet?in_reply_to={{tweetId}}"><i class="fa fa-mail-reply"></i><span class="ft-fm-2">Reply</span></a></li><li><a class="retweet-btn" href="https://twitter.com/intent/retweet?tweet_id={{tweetId}}"><i class="fa fa-repeat"></i><span>Retweet</span></a></li><li><a class="favorite-btn" href="https://twitter.com/intent/favorite?tweet_id={{tweetId}}"><i class="fa fa-heart"></i><span>Favorite</span></a></li></ul></div></div>'

			}, function(){

				var tweetSlider = $('#allTweets');

				tweetSlider.owlCarousel({
					singleItem : true,
					dots : true,
					loop: true,
					navText: [
					"<i class='icon-angle-left'></i>",
					"<i class='icon-angle-right'></i>"
					],
					autoPlay : true,
					stopOnHover : true,
					items: 1
				});

			});

		}

	}());


	/*==========  TWITTER SLIDER V2  ==========*/
	(function(){
		var twitterSlider = $('#tweetSlider-v2');
		if ( twitterSlider.length > 0 ) {

			twitterSlider.twittie({
				count : 9, // Change it as how many tweets you need to show
				template : '<div class="twitter-info"><div class="tweet-text ft-fm-2"><p>{{tweet}}</p></div><div class="twitt-tools"><ul class="twiiter-options"><li><a class="relpy-btn" href="https://twitter.com/intent/tweet?in_reply_to={{tweetId}}"><i class="fa fa-mail-reply"></i><span class="ft-fm-2">Reply</span></a></li><li><a class="retweet-btn" href="https://twitter.com/intent/retweet?tweet_id={{tweetId}}"><i class="fa fa-repeat"></i><span>Retweet</span></a></li><li><a class="favorite-btn" href="https://twitter.com/intent/favorite?tweet_id={{tweetId}}"><i class="fa fa-heart"></i><span>Favorite</span></a></li></ul></div></div>'

			}, function(){

				var tweetSlider = $('#allTweets');

				tweetSlider.owlCarousel({
					singleItem : true,
					dots : true,
					loop: true,
          margin: 50,
					navText: [
					"<i class='icon-angle-left'></i>",
					"<i class='icon-angle-right'></i>"
					],
					autoPlay : true,
					stopOnHover : true,
          responsive:{
            0:{
              items:1
            },
            510:{
              items:2
            },
            1000:{
              items:3
            }
          }
				});

			});

		}

	}());


	/*==========  PARTNERS SLIDER  ==========*/
	if ($('.partners-slider').length > 0) {
		$(".partners-slider").owlCarousel({
			margin: 30,
			navText: [
			"<i class='icon-angle-left'></i>",
			"<i class='icon-angle-right'></i>"
			],
			loop: true,
			responsive:{
				0:{
					items:2
				},
				768:{
					items:3
				},
				1000:{
					items:6
				}
			}
		});
	}



	/* ======= SHUFFLE JS (FILTERABLE PORTFOLIO) ======= */
	$(window).on('load', function () {

		$('.portfolio-container').each(function(i, e){

			var ttGrid = $(this).find('.portfolio-items');
			var self = this;
			ttGrid.shuffle({
                    itemSelector: '.item' // the selector for the items in the grid
                });

			/* reshuffle when user clicks button filter item */
			$(this).find('.item-filter li').on('click',function (e) {
				e.preventDefault();

                    // set active class
                    $(self).find('.item-filter li').removeClass('active');
                    $(this).addClass('active');

                    // get group name from clicked item
                    var ttGroupName = $(this).attr('data-group');

                    // reshuffle grid
                    ttGrid.shuffle('shuffle', ttGroupName);
                });

		});

	});

	/*==========  RELATED POST  ==========*/
    if ($('.related-post').length > 0) {
		$(".related-post").owlCarousel({
			margin: 15,
			nav: true,
			dots: false,
			navText: [
			"<i class='icon-angle-left'></i>",
			"<i class='icon-angle-right'></i>"
			],
			loop: true,
			responsive:{
				0:{
					items:1
				},
				510:{
					items:2
				},
				992:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});
	}

	if ($('.related-post-v2').length > 0) {
		$(".related-post-v2").owlCarousel({
			margin: 30,
			nav: false,
			dots: false,
			responsive:{
				0:{
					items:1
				},
				510:{
					items:2
				},
				992:{
					items:2
				},
				1000:{
					items:4
				}
			}
		});
	}

	/*==========  MAGNIFIC POPUP ==========*/
    if ($('.popup').length > 0) {
        $('.popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }

        });
    }

    // for popup video
    if ($('.popup-video').length > 0) {
    	$('.popup-video').magnificPopup({
    		type: 'iframe',
    		mainClass: 'mfp-fade',
    		removalDelay: 160,
    		preloader: false,
    		fixedContentPos: false
    	});
    }


	/*==========  COUNTER  ==========*/
	$('.counter, .counter-v2, .social-feedback').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	/*==========  CIRCLE CHART  ==========*/
	var el = $('.circle'),
	inited = false;
	el.appear({ force_process: true });
	el.on('appear', function() {
		if (!inited) {
			el.circleProgress();
			inited = true;
		}
	});

	if ($('.circle').length > 0) {
		$('.circle').circleProgress({
			size:105,
			fill: {color: "#536dfe"},
			emptyFill: '#eee',
			startAngle: 300,
			lineCap: 'round',
			animation: {duration: 1800}
		})
		.on('circle-animation-progress', function (event, progress, stepValue) {
			$(this).find('span').text((stepValue * 100).toFixed(1));
		});
	}

	// presets 2
	if ($('.circle-red').length > 0) {
		$('.circle-red').circleProgress({
			fill: {color: "#f3474b"},
		});
	}


	/*==========  TOOLTIP  ==========*/
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});


	/*==========  ACCORDIAN  ==========*/
	if ($('.accordion-toggle').length > 0) {
		$('.accordion-toggle').on('click', function(){
			$(this).closest('.panel-group').children().each(function(){
				$(this).find('>.panel-heading').removeClass('active');
			});

			$(this).closest('.panel-heading').toggleClass('active');
		});
	}


	/*==========  FEATURED POSTS  ==========*/
	if ($('.featured-posts-slider').length > 0) {
	    var $featuredPosts = $('.featured-posts-slider');
	    $featuredPosts.owlCarousel({
	        loop: true,
	        autoplaySpeed: 1500,
            items: 1
	    });
	    $('.prev').click(function() {
	        $featuredPosts.trigger('prev.owl.carousel', [400]);
	    });
	    $('.next').click(function() {
	        $featuredPosts.trigger('next.owl.carousel', [400]);
	    });
	}


	/*==========  MAILCHIMP  ==========*/
	if ($('.mailchimpForm').length > 0) {
		$('.mailchimpForm').ajaxChimp({
			callback: function(resp) {
				if (resp.result === 'success') {
					$('.mailchimpForm .input').removeClass('is-dirty').find('input[type=text]').val('');
					swal("Thanks!", "Almost finished... Please confirm your email address.", "success");

				} else if(resp.result === 'error') {

					swal("Ops!", "Please enter a valid email address.", "error");
				}
			},
			url: "https://NorthUIs.us13.list-manage.com/subscribe/post?u=a0768f1a241fb6f918f581839&amp;id=025a318a87"
			//Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".

		});
	}


	/*==========  CONTACT FORM ANIMATION  ==========*/
	$(function() {
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( '.input-field' ) ).forEach( function( inputEl ) {
			// in case the input is already filled..
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input-filled' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input-filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input-filled' );
			}
		}
	});


	/*==========  MAP  ==========*/
	var mapStyle=[{featureType:"landscape",stylers:[{saturation:-100},{lightness:50},{visibility:"on"}]},
	{featureType:"poi",stylers:[{saturation:-100},{lightness:40},{visibility:"simplified"}]},
	{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},
	{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:20},{visibility:"on"}]},
	{featureType:"road.local",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},
	{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},
	{featureType:"administrative.province",stylers:[{visibility:"off"}]},
	{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},
	{lightness:-0},{saturation:-0}]},
	{featureType:"water",elementType:"geometry",stylers:[{hue:"#00baff"},
	{lightness:-10},{saturation:-95}]}];

	var mapWrapperID = '#map', draggableOp = ( $.browser.mobile === true ) ? false : true;

	if ( $(mapWrapperID).length > 0 && window.google && window.google.maps ) {

		window.mapOps = {
			lat : 23.7948619,	// Provide your latitude
			lng : 90.4122873, // Provide your longitude
			content: '<p>NorthUI, Gulshan 2, Dhaka, Bangladesh</p>', // Provide your address to show on pop up
			icon: 'img/icon-location.svg',
			zoom : 16,
			panBy : { x: 0, y: -40 }
		};

		window.map = new GMaps({
			div: mapWrapperID,
			lat : mapOps.lat,
			lng : mapOps.lng,
			scrollwheel: false,
			draggable: draggableOp,
			zoom: mapOps.zoom,
			disableDefaultUI: true,
			styles : mapStyle
		});


		map.addMarker({
			lat : mapOps.lat,
			lng : mapOps.lng,
			icon: mapOps.icon,
			infoWindow: {
				content: mapOps.content
			}
		});

		map.panBy(mapOps.panBy.x, mapOps.panBy.y);
	}


	/*==========  GOTO TOP  ==========*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.go-top').addClass('active');
		} else {
			$('.go-top').removeClass('active');
		}
	});
	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();

		$('html, body').animate({scrollTop: 0}, 500);
	});


	/*==========  FLICKR GALLERY  ==========*/
	if ($('#gallery').length > 0) {
	  	$("#gallery").flickrGallery({
	    	//FLICKR API KEY
	        Key: 'c1e6ee1e750c255bd1316f6e5b5aaedc',
	        //Secret
	        Secret: '88fec5022a1aade2',
	        //FLICKR user ID
	        User: '144403984@N07',
	        //Flickr PhotoSet ID
	        PhotoSet: '72157674512718820',
	 	});
  	}


	/*==========  CONTACT FORM  ==========*/
	if ($('#contactForm').length > 0) {
  		$("#contactForm").validator().on("submit", function (event) {
		    if (event.isDefaultPrevented()) {
		        // handle the invalid form...
		        formError();
		    } else {
		        // everything looks good!
		        event.preventDefault();
		        submitForm();
		    }
		});


		function submitForm(){
		    // Initiate Variables With Form Content
		    var name = $("#name").val();
		    var email = $("#email").val();
		    var subject = $("#subject").val();
		    var message = $("#message").val();

		    $.ajax({
		        type: "POST",
		        url: "php/form-process.php",
		        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
		        success : function(text){
		            if (text == "success"){
		                formSuccess();
		            } else {
		                formError();
		                submitMSG(false,text);
		            }
		        }
		    });
		}

		function formSuccess(){
		    $("#contactForm")[0].reset();
		    submitMSG(true, "Message Submitted!")
		}

		function formError(){
		    $("#form-submit-wrapper").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		        $(this).removeClass();
		    });
		}

		function submitMSG(valid, msg){
		    if(valid){
		        var msgClasses = "h3 text-center fadeIn animated text-success";
		    } else {
		        var msgClasses = "h3 text-center text-danger";
		    }
		    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
		}
  	}
});
