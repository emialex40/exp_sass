$(document).ready(function() {

// ********** hendler click**************
$('#popup i, #parent_popup').on('click', function() {
	$('#parent_popup, #popup').css('display', 'none');
});

$('.call').on('click', function() {
	$('#parent_popup, #popup').css('display', 'block');
});

	// *******in top************
var top_show = 565;//при каком положении кнопка появляется
  var delay = 500; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

	    // anchor code
var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		event.preventDefault();
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 1000);
    return false;
});

$(".navigation").changeActiveNav();

	$('img[usemap]').maphilight(
		$.fn.maphilight.defaults = {
			fill: true,
			fillColor: '3A76F6',
			fillOpacity: 0.5,
			stroke: true,
			strokeColor: 'FD0101',
			strokeOpacity: 1,
			strokeWidth: 1,
			fade: true,
			alwaysOn: false,
			neverOn: false,
			groupBy: false,
			wrapClass: true,
			shadow: true,
			shadowX: 0,
			shadowY: 0,
			shadowRadius: 6,
			shadowColor: 'b8860b',
			shadowOpacity: 0.8,
			shadowPosition: 'outside',
			shadowFrom: false
		}
	);



	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".section_head").animated("fadeInUp", "fadeOutDown");
	// $(".s_left").animated("fadeInLeft", "fadeOutDown")
	// $(".s_right").animated("fadeInRight", "fadeOutDown");
	$(".img_b, .left_list").animated("fadeInLeft", "fadeOutDown");
	$(".s_list, .img_r").animated("fadeInRight", "fadeOutDown");

	function main() {
		$('.menu-btn').click(function() {
			$('.menu').animate({
				'left': '0px'
			}, 600);

			// *********close-menu**********
			$('.icon-close').click(function() {
				$('.menu').animate({
					'left': -285
				}, 600);
			});

		});
	};
	main();



	function haightDetect(argument) {
		$('#header').css('min-height', $(window).height());
	};

	haightDetect();

	$(window).resize(function() {
		haightDetect();
	});

$(window).load(function() {

	$("#my_courusele").flexisel({
		visibleItems: 3,
		animationSpeed: 1000,
		itemsToScroll: 1,
		autoPlay: {
			enable: true,
			interval: 5000,
			pauseOnHover: true
		},
		responsiveBreakpoints: {
			portrait: {
				changePoint: 320,
				visibleItems: 1,
				itemsToScroll: 1
			},
			landscape: {
				changePoint: 640,
				visibleItems: 1,
				itemsToScroll: 1
			},
			tablet: {
				changePoint: 768,
				visibleItems: 3,
				itemsToScroll: 3
			}
		}
	});

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$('img[usemap]').rwdImageMaps();

});

});

