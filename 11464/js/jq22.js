$(function() {
	var $panels = $('#slider .scrollContainer > li');
	var $parent = $panels.parent();
	var $length = $panels.length;
	var $first = $panels.eq(0).clone().addClass("panel cloned").attr("id", 'panel_' + ($length + 1));
	var $last = $panels.eq($length - 1).clone().addClass("cloned").attr("id", 'panel_0');;
	$parent.append($first);
	$parent.prepend($last);
	var totalPanels = $(".scrollContainer").children().size();
	var regWidth = $(".panel").css("width");
	var regImgWidth = $(".panel img").css("width");
	var movingDistance = 375;
	var curWidth =500;
	var curHeight =670;
	var curImgWidth = 500;
	var curImgHeight = 670;
	var othersW = 345;
	var othersH = 465;
	var othersImgW = 345;
	var othersImgH = 465;
	var $panels = $('#slider .scrollContainer > li');
	var $container = $('#slider .scrollContainer');
	$panels.css({
		'float': 'left',
		'position': 'relative'
	});
	$("#slider").data("currentlyMoving", false);
	$container.css('width', (($panels[0].offsetWidth + 30) * $panels.length) +300).css('left', '0');
	var scroll = $('#slider .scroll').css('overflow', 'hidden');

	function returnToNormal(element) {
		$(element).animate({
			width: othersW,
			height: othersH
		}).find("img").animate({
			width: othersImgW,
			height: othersImgH
		});
	};

	function growBigger(element) {
		$(element).addClass("current").animate({
			width: curWidth,
			height: curHeight
		}).siblings().removeClass("current").end().find("img").animate({
			width: curImgWidth,
			height: curImgHeight
		})
	}

	function change(direction) {
		if((direction && !(curPanel < totalPanels - 2)) || (!direction && (curPanel <= 1))) {
			return false;
		}
		if(($("#slider").data("currentlyMoving") == false)) {
			$("#slider").data("currentlyMoving", true);
			var next = direction ? curPanel + 1 : curPanel - 1;
			var leftValue = $(".scrollContainer").css("left");
			var movement = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;
			$(".scrollContainer").stop().animate({
				"left": movement
			}, function() {
				$("#slider").data("currentlyMoving", false);
			});
			returnToNormal("#panel_" + curPanel);
			growBigger("#panel_" + next);
			curPanel = next;
			$("#panel_" + (curPanel + 1)).unbind();
			$("#panel_" + (curPanel + 1)).click(function() {
				change(true);
			});
			$("#panel_" + (curPanel - 1)).unbind();
			$("#panel_" + (curPanel - 1)).click(function() {
				change(false);
			});
			$("#panel_" + curPanel).unbind();
		}
	}
	growBigger("#panel_1");
	var curPanel = 1;
	$("#panel_" + (curPanel + 1)).click(function() {
		change(true);
		return false;
	});
	$("#panel_" + (curPanel - 1)).click(function() {
		change(false);
		return false;
	});
	$("#slider .next").click(function() {
		change(true);
	});
	$("#slider .prev").click(function() {
		change(false);
	});
	$(window).keydown(function(event) {
		switch(event.keyCode) {
			case 13:
				$(".next").click();
				break;
			case 37:
				$(".prev").click();
				break;
			case 39:
				$(".next").click();
				break;
		}
	});
});


