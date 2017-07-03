function scrollTo(top) {
	$("html, body").animate({
        scrollTop: top
    }, 1000);
};


function infiniteAutoPlaySlider(slider, pause) {
	if (slider) {
		var pause = pause || 4000;
		setTimeout(function(){
			slider.goToNextSlide();
			infiniteAutoPlaySlider(slider, pause);
		}, pause);
	}
};

$(document).ready(function() {

	var slogan_slider = $('#s1').find('.slogan-slider .bx-slider').bxSlider({
			mode: 'vertical',
			responsive: true,
			infiniteLoop: true,
			controls: false,
			adaptiveHeight: true,
			adaptiveHeightSpeed: 200,
			pager: false,
			speed: 500,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			slideMargin: 0,
			touchEnabled: true,
			auto: false,
			onSlideBefore: function($slideElement, oldIndex, newIndex) {

			},
			onSlideAfter: function($slideElement, oldIndex, newIndex) {

			}
		});
	infiniteAutoPlaySlider(slogan_slider);

	var detail_slider = $('#s2').find('.bxslider').bxSlider({
			responsive: true,
			infiniteLoop: true,
			controls: true,
			adaptiveHeight: true,
			adaptiveHeightSpeed: 200,
			pager: true,
			speed: 600,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			slideMargin: 0,
			touchEnabled: true,
			auto: true,
			onSlideBefore: function($slideElement, oldIndex, newIndex) {
				$('#s2').find('.slide').removeClass('active');
			},
			onSlideAfter: function($slideElement, oldIndex, newIndex) {
				$slideElement.addClass('active');
			}
		});

	$('.menu-btn').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.menu-list').toggleClass('active');
	});

	$('.close-menu').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.menu-list').removeClass('active');
	});



	$('.go-to').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.menu-list').removeClass('active');
		var sel = $(this).attr('data-go-to');
		var top = 0;
		if (sel == '#s2') {
			top = -parseFloat($('#s1').css('marginBottom')) + $(window).height()*0.58;
			if (detail_slider) {
				detail_slider.goToSlide(0);
				detail_slider.startAuto();
			}
		} else 
		if (sel == '#s3') {
			top = -parseFloat($('#s1').css('marginBottom')) + $(window).height()*1.6;
		}
		scrollTo(top);
	});

}); 