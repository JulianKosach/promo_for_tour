//jq функция которая разрешает ввод только циферных значений
jQuery.fn.ForceNumericOnly =
    function() {
        return this.each(function() {
            $(this).keydown(function(e) {
                var key = e.charCode || e.keyCode || 0;
                return (
                    key === 8 ||
                    key === 9 ||
                    key === 13 ||
                    key === 46 ||
                    key === 110 ||
                    key === 190 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            });
        });
    };

$.fn.datepicker.dates['ua'] = {
    days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
    daysShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    daysMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    monthsShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
    today: "Сьогодні",
    clear: "Очистити",
    format: "dd.mm.yyyy",
    titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
    weekStart: 1
};

$.fn.datepicker.dates['ru'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    format: "dd.mm.yyyy",
    titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
    weekStart: 1
};

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

var datepicker;

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

	$('.open-detail').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		detail_slider.stopAuto();
		var sel = $(this).attr('data-open-modal');
		$(sel).arcticmodal();
	});



	$('.close-modal').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).closest('.modal-pop').arcticmodal('close');
	});

	$('.go-to').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.menu-list').removeClass('active');
		var sel = $(this).attr('data-go-to');
		var top = 0;
		if (sel == '#s2') {
			top = $(window).height()*0.7;
			if (detail_slider) {
				detail_slider.goToSlide(0);
				detail_slider.startAuto();
			}
		} else 
		if (sel == '#s3') {
			top = ($(window).height()*1.2 + $('#s2').height())*0.6 - $('header').height()*0.6;
		} else 
		if (sel == '#s4') {
			top = $(window).height()*2.6;
		}
		scrollTo(top);
	});

	datepicker = $('#date_inp').datepicker({
	    format: 'dd.mm.yyyy',
	    language: 'ua',
	    todayHighlight: true,
	    startDate: '07.07.2017',
	    daysOfWeekDisabled: '0,1,2,3,4,6',
	    daysOfWeekHighlighted: '5'
	});

	$('#phone_inp').ForceNumericOnly();
	$('#count_inp').ForceNumericOnly();
	$('#date_inp').ForceNumericOnly();

	$('.inp-wrap input').on('focus', function(){
		$(this).closest('.inp-wrap').removeClass('error-input').addClass('focused');
	});

	$('.inp-wrap input').on('blur', function(){
		$(this).closest('.inp-wrap').removeClass('focused');
	});

	$('.submit-btn').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		var $form = $('#main-form');
		$form.find('.inp-wrap').removeClass('error-input');

		if ($form.find('#name_inp').val().length < 2) $form.find('#name_inp').closest('.inp-wrap').addClass('error-input');

		if ($form.find('#phone_inp').val().length < 7) $form.find('#phone_inp').closest('.inp-wrap').addClass('error-input');

		if ($form.find('#email_inp').val().length < 5) $form.find('#email_inp').closest('.inp-wrap').addClass('error-input');

		if ($form.find('#date_inp').val().length < 10) $form.find('#date_inp').closest('.inp-wrap').addClass('error-input');

		if ($form.find('#count_inp').val().length < 1) $form.find('#count_inp').closest('.inp-wrap').addClass('error-input');


		if ($form.find('.error-input').length < 1) $form.submit();
	});

}); 