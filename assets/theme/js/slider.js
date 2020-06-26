"use strict";

function is_touch_enabled() {
	return ('ontouchstart' in window) ||
		(navigator.maxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0);
}


$(() => {
	var time = 5,
		$bar,
		$slick,
		isPause,
		tick,
		percentTime,
		pauseBtn = $(".slider-progress .fa-pause"),
		playBtn = $(".slider-progress .fa-play");

	$slick = $('.slider__one');

	$slick = $('.slider__one');
	$slick.on('beforeChange', function () {
		startProgressbar();
	});

	$slick.slick({
		draggable: true,
		speed: 750,
		adaptiveHeight: false,
		dots: true,
		mobileFirst: true,
		pauseOnDotsHover: true,
		cssEase: 'ease-in-out',
		prevArrow: '<button class="slick__btn slick__prev"></button>',
		nextArrow: '<button class="slick__btn slick__next"></button>'
	});

	$bar = $('.slider-progress .progress');
	if (is_touch_enabled()) {
		let s__o = document.querySelector(".slider__one")
		s__o.addEventListener("touchstart", () => {
			pause();
		})
		s__o.addEventListener("touchend", () => {
			play();
		})
	} else {
		$('.slider__one').on({
			mouseenter: function () {
				// isPause = true;
				pause();
			},
			mouseleave: function () {
				//isPause = false;
				play();
			}
		})
	}
	pauseBtn.click(() => {
		pause();
	})
	playBtn.click(() => {
		play();
	})

	function play() {
		isPause = false;
		pauseBtn.show();
		playBtn.hide();
	}

	function pause() {
		isPause = true;
		pauseBtn.hide();
		playBtn.show();
	}

	function startProgressbar() {
		resetProgressbar();
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
	}

	function interval() {
		if (isPause === false) {
			percentTime += 1 / time; //(time+0.1);
			$bar.css({
				width: percentTime + "%"
			});
			if (percentTime >= 100) {
				$slick.slick('slickNext');
				startProgressbar();
			}
			play();
		} else {
			pause();
		}

	}


	function resetProgressbar() {
		$bar.css({
			width: 0 + '%'
		});
		clearTimeout(tick);
	}

	startProgressbar();
	// ============== //slider__one ================ //


	// ============== vebdor__slider ================ //

	$(".vendor__credit .vendor__slider").slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: true,
		cssEase: 'ease-in-out',
		// prevArrow: false,nextArrow: false,
		arrows: false,
		responsive: [{
				breakpoint: 1400,
				settings: {
					slidesToShow: 11
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShopw: 9
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 7
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
	// ============== // vebdor__slider ================ //
});
