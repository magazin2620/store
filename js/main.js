$(function () {

	$('.bunner-section__slider').slick({
		dots: true,
		prevArrow: '<button class="bunner-section__slider-btn bunner-section__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="bunner-section__slider-btn bunner-section__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
	})

	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');
	});

	$('.product-item__favorite').on('click', function () {
		$('.product-item__favorite').toggleClass('product-item__favorite--active')
	});

	$('.product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/icons/arrow-black-left.svg" alt=""></button>',
		nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/icons/arrow-black-right.svg" alt=""></button>',
	})

	$('.filter-style').styler();

});

