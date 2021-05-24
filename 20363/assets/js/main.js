(function ($) {
    "use strict";


    /*--
		    Header Sticky
    -----------------------------------*/
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 350) {
            $(".header-bottom, .header-mobile").removeClass("sticky");
        } else{
            $(".header-bottom, .header-mobile").addClass("sticky");
        }
    });

    /*--
        Off Canvas Menu
	-----------------------------------*/	
	$('.mobile-menu-open').on('click', function(){
        $('.offcanvas-menu').addClass('open')
        $('.menu-overlay').addClass('open')
    });
    
    $('.menu-close').on('click', function(){
        $('.offcanvas-menu').removeClass('open')
        $('.menu-overlay').removeClass('open')
    });
    
    $('.menu-overlay').on('click', function(){
        $('.offcanvas-menu').removeClass('open')
        $('.menu-overlay').removeClass('open')
    });

    /*Variables*/
    var $offCanvasNav = $('.mobile-primary-menu'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu, .mega-sub-menu, .menu-item ');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active-expand');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active-expand');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active-expand');
                $this.siblings('ul').slideDown();
            }
        }
    });

    $( ".sub-menu, .mega-sub-menu, .menu-item" ).parent( "li" ).addClass( "menu-item-has-children" );
    $( ".primary-menu .mega-sub-menu" ).parent( "li" ).css( "position", "static" );

    /*--
        Mousemove ParallaxIt
    -----------------------------------*/    
    $(".slider-wrapper").on('mousemove', function(e) {
        parallaxIt(e, ".shape-1", -70);
        parallaxIt(e, ".shape", -50);
    });
      
    function parallaxIt(e, target, movement) {
        var $this = $(".slider-wrapper");
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;
      
        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    }

    /*--
        Search 
    -----------------------------------*/
    $('.search-open').on('click', function(){
        $('.search-box').fadeIn(400)
    });
    
    $('.search-close').on('click', function(){
        $('.search-box').fadeOut(400)
    });

    /*--
        Slider
    -----------------------------------*/
    var slider = new Swiper('.slider-active .swiper-container', {
        speed: 600,
        effect: "fade",
        loop: true,
        pagination: {
            el: '.slider-active .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-active .swiper-button-next',
            prevEl: '.slider-active .swiper-button-prev',
        },
        // autoplay: {
        //     delay: 8000,
        // },
    });

    /*--
        Data Tooltip
    -----------------------------------*/
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-tooltip="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
       return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    /*--
        Product Active
    -----------------------------------*/
    var product = new Swiper('.product-active .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        watchSlidesVisibility: true,
        autoplay: {
            delay: 8000,
        },
        navigation: {
            nextEl: '.product-active .swiper-button-next',
            prevEl: '.product-active .swiper-button-prev',
            hideOnClick: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
        },
        on: {
            init: function () {
                productInnerSlider();
            },
        }
    });

    /*--
        Product Slide
    -----------------------------------*/
    function productInnerSlider(){
        $('.product-slide').each(function(){
            var productSlide = new Swiper($(this)[0], {
                pagination: {
                    el: $(this).find('.swiper-pagination')[0],
                    clickable: true,
                },
            });
        });
    }
    productInnerSlider();

    /*--
        Product Gallery
    -----------------------------------*/
    $(".single-thumb > img").on('click', function(){
        $(".gallery-preview").attr("src",$(this).attr("src"));       
    });

    /*--
        Product Active 2
    -----------------------------------*/
    var product2 = new Swiper('.product-active-2 > .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        watchSlidesVisibility: true,
        // autoplay: {
        //     delay: 8000,
        // },
        navigation: {
            nextEl: '.product-active-2 > .swiper-button-next',
            prevEl: '.product-active-2 > .swiper-button-prev',
            hideOnClick: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
        }
    });

    /*--
        Product Active 3
    -----------------------------------*/
    var product3 = new Swiper('.product-active-3 > .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        watchSlidesVisibility: true,
        autoplay: {
            delay: 8000,
        },
        navigation: {
            nextEl: '.product-active-3 > .swiper-button-next',
            prevEl: '.product-active-3 > .swiper-button-prev',
            hideOnClick: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
        }
    });

    /*--
        Brand Active
    -----------------------------------*/
    var brand = new Swiper('.brand-active', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        watchSlidesVisibility: true,
        autoplay: {
            delay: 8000,
        },
        navigation: {
            nextEl: '.brand-active .swiper-button-next',
            prevEl: '.brand-active .swiper-button-prev',
            hideOnClick: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 5,
            },
        }
    });

    /*--
        Testimonial ACtive
	  -----------------------------------*/
      var testimonial = new Swiper('.testimonial-active .swiper-container', {
        speed: 600,
        loop: true,
        navigation: {
            nextEl: '.testimonial-active .swiper-button-next',
            prevEl: '.testimonial-active .swiper-button-prev',
        },
        autoplay: {
            delay: 8000,
        },
    });

    /*--
        Countdown Active
    -----------------------------------*/    
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,        
        thumbs: {
          swiper: galleryThumbs
        }
    });    

    /*--
        Countdown Active
    -----------------------------------*/    
    $('#countdown').countdown("2020/12/31", function(event) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        $(this).html(event.strftime( '<div class="countdown-count"><div class="single-count"><span> '+ totalHours +'h </span></div><div class="single-count"><span>%Mm</span></div><div class="single-count"><span>%Ss</span></div></div>'));
    });

    /*--
        Masonry Active
    -----------------------------------*/
    $('.container').imagesLoaded( function() {
        $('.grid').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 1,
        });
    });

    /*--
        Back To Top
    -----------------------------------*/
    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
      if ($(this).scrollTop() > 600) {
          $('.back-to-top').fadeIn(200)
      } else {
          $('.back-to-top').fadeOut(200)
      }
    });

    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: 0,
      }, 1000);
    });

    /*--
        Product Color Active
    -----------------------------------*/
    $('.color-list li').each(function() {
		var get_color = $(this).attr('data-color');
		$(this).css("background-color", get_color);
    });
    
	$('.color-list li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
    });

    /*--
        Product size Active
    -----------------------------------*/
    $('.size li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
    });

    /*--
        Product Quantity
    -----------------------------------*/
    $('.add').on('click', function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').on('click', function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    /*--
		Rating Script
	-----------------------------------*/

	$("#rating li").on('mouseover', function(){
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.add('hover')
			} else {
				child.classList.remove('hover')
			}
		})
	})

	$("#rating").on('mouseleave', function(){
		var child = $(this).find('li.star i');
		Array.from(child, function(item){
			item.classList.remove('hover');
		})
	})
	
	$('#rating li').on('click', function(e) {
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.remove('hover', 'fa-star-o');
				child.classList.add('fa-star')
			} else {
				child.classList.remove('fa-star');
				child.classList.add('fa-star-o')
			}
		})
    }) 

    /*--
		Checkout Account Active
	-----------------------------------*/
	$('#account').on('click', function () {
		if ($('#account:checked').length > 0) {
			$('.checkout-account').slideDown();
		} else {
			$('.checkout-account').slideUp();
		}
    });

    /*--
		Checkout Shipping Active
	-----------------------------------*/
	$('#shipping').on('click', function () {
		if ($('#shipping:checked').length > 0) {
			$('.checkout-shipping').slideDown();
		} else {
			$('.checkout-shipping').slideUp();
		}
    });

    /*--
		Checkout Payment Active
	-----------------------------------*/
	var checked = $('.payment-radio input:checked')
	if (checked) {
		$(checked).siblings('.payment-details').slideDown(500);
	};
	$('.payment-radio input').on('change', function() {
		$('.payment-details').slideUp(500);
		$(this).siblings('.payment-details').slideToggle(500);
	});
    
    /*--
		select2
	-----------------------------------*/
    $(".select2").select2({
        tags: true
    }); 

    /*--
        Nice Select
    -----------------------------------*/
    $('.select').niceSelect();

    
})(jQuery);

