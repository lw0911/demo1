"use strict";


$(function() {

    var wow = new WOW({
        animateClass: 'animated',
        offset: 200
    });
    wow.init();
    
    // ======================================
    // Search
    // ======================================

    $(".close_icon").on("click", function() {
        $(".search-box").removeClass("show");
    })

    $(".nav-link.search").on("click", function() {
        $(".search-box").addClass("show");
    })

	// ======================================
    // Projects filter
    // ======================================

    var $grid = $('.portfolio_area').isotope({
        itemSelector: '.element-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
    });

    // bind filter button click
    $('.portfolioFilter').on('click', '.button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    
    // change is-checked class on buttons
    $('.portfolioFilter.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

	
	// ======================================
    // Set team image height
    // ======================================    
    var imgWidth = $('.team_img').width();
	$('.team_img').css({'height':imgWidth+'px'});
	$('.team_info, .team_member').css({'margin-top':imgWidth/2+'px'});

	// ======================================
    // Sticky Header
    // ======================================  
	function makeHeaderSticky() {
        var header = $('.stickyHeader .navbar');

        if ($(document).scrollTop() >= 250) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    }

    $(document).scroll(function() {
        makeHeaderSticky();
    });

    // ======================================
    // End Sticky Header
    // ======================================  


    // ======================================
    // Owl carousel
    // ======================================  
    $('.timeline-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })

    $('.client-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })
    // ======================================
    // End Owl carousel
    // ======================================

    // =================================
    // Mouse move parallax
    // =================================
    var scene = document.getElementById('js-scene');
    if (scene)
        var parallax = new Parallax(scene);

    var scene2 = document.getElementById('js-scene2');
    if (scene2) 
        var parallax2 = new Parallax(scene2);
    // =================================
    // End Mouse move parallax
    // =================================

    



});