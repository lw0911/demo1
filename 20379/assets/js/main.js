;(function ($) {
	"use strict";
	$(document).ready(function () {
		$('body').scrollspy({
			target: ".header-area",
			offset: 50
		});

		$('[data-toggle="tooltip"]').tooltip();

		$('.mainmenu').slicknav({
			label: '',
			duration: 500,
			prependTo: '',
			closedSymbol: '<i class="fa fa-angle-right"></i>',
			openedSymbol: '<i class="fa fa-angle-right"></i>',
			appendTo: '.header-area',
			menuButton: '.toggle',
			closeOnClick: 'true',
		});

		$(".toggle").on('click', function () {
			$(this).toggleClass("active");
		});


		$(".t-carousel").owlCarousel({
			loop: true,
			autoplay: true,
			smartSpeed: 1000,
			autoplayTimeout: 5000,
			dots: false,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				},
			}
		});

		$(".t-c-4").owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 1000,
			dots: false,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				1000: {
					items: 2,
				},
			}
		});

		$(".t-c-5").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 1000,
			dots: true,
			nav: false,
		});

		$(".c-logo-carousel").owlCarousel({
			margin: 30,
			loop: true,
			autoplay: true,
			smartSpeed: 1000,
			autoplayTimeout: 5000,
			dots: false,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 5,
				},
			}
		});

		$(".t6-carousel").owlCarousel({
			loop: true,
			autoplay: true,
			smartSpeed: 1000,
			autoplayTimeout: 5000,
			dots: false,
			nav: true,
			navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>", ],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				},
			}
		});

		$(".hero-7").owlCarousel({
			items: 1,
			loop: true,
			autoplay: false,
			autoplayTimeout: 5000,
			smartSpeed: 1000,
			dots: false,
			nav: true,
			navText: ["<i class='far fa-long-arrow-alt-left'></i>", "<i class='far fa-long-arrow-alt-right'></i>", ],
		});

		$(".t9-content").owlCarousel({
			items: 1,
			loop: true,
			autoplay: false,
			autoplayTimeout: 5000,
			smartSpeed: 1000,
			dots: false,
			nav: true,
			navText: ["<i class='far fa-long-arrow-alt-left'></i>", "<i class='far fa-long-arrow-alt-right'></i>", ],
		});

		$(".progress-slider").owlCarousel({
			loop: true,
			autoplay: false,
			autoplayTimeout: 5000,
			smartSpeed: 1000,
			dots: false,
			nav: true,
			navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>", ],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 4,
				},
			}
		});

		var owl = $('.nav-bar');
		$('.prevbtn').on('click', function () {
			owl.trigger('next.owl.carousel');
		})
		$('.nextbtn').on('click', function () {
			owl.trigger('prev.owl.carousel', [300]);
		})

		$('.counter-number span').counterUp({
			delay: 10,
			time: 2000
		});

		var swiper = new Swiper('.gallery-slider', {
			autoplay: false,
			speed: 3000,
			effect: 'coverflow',
			loop: true,
			centeredSlides: true,
			slidesPerView: 3.5,
			coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 1,
                slideShadows : false,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 1.5,
				},
				768: {
					slidesPerView: 2.5,
				},
				1000: {
					slidesPerView: 3.5,
				},
			}
		});

		var swiper = new Swiper('.hero-6-slider', {
			autoplay: true,
			speed: 8000,
			effect: 'coverflow',
			loop: true,
			centeredSlides: true,
			slidesPerView: 1.1,
			coverflow: {
				rotate: 0,
				stretch: 20,
				depth: 250,
				modifier: 1,
				slideShadows: false,
			},
		});


		$("#mainmenu-area").sticky({
			topSpacing: 0
		});

		new WOW().init({
			mobile: false,
		});

		$(".preloader").fadeOut("slow");

		$('#mc-form').ajaxChimp({
			url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&id=d0323b0697', //Set Your Mailchamp URL
			callback: function (resp) {
				if (resp.result === 'success') {
					$('.subscribe .input-box, .subscribe .bttn-4').fadeOut();
				}
			}
		});

		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 1000
		});
		if (typeof Typed === 'function') {
			var typed = new Typed('.typing', {
				strings: ["Work Speed"],
				loop: true,
				typeSpeed: 100,
				backSpeed: 80,
			});
		}

		$('#html').LineProgressbar({
			percentage: 30,
			radius: '30px',
			height: '15px',
			fillBackgroundColor: '#DA4453',
            backgroundColor: '#7783C3',
		});

		$(".single-progress").on('mouseenter', function(){
			$(".single-progress").removeClass("active");
			$(this).addClass("active");
		});

		$('#bar1').barfiller({
			barColor: '#F38550',
		});
		$('#bar2').barfiller({
			barColor: '#00C1B1',
		});
		$('#bar3').barfiller({
			barColor: '#1657E2',
		});

	});
})(jQuery);