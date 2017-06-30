
function initShowFirstScreen() {
	console.log('initShowFirstScreen');
	var $s1 =  $('#s1');
	$s1.find('h1').animate({
		'top': '0',
		'left': '60%'
	}, 1000);
};



function scrollParallax() {
	var sTop = $(window).scrollTop();
	var wHeight = $(window).height();

	var $s1 =  $('#s1');
	var $s2 =  $('#s2');
	var $s3 =  $('#s3');
	var $s4 =  $('#s4');

	var t = '-' + (sTop*0.6) + 'px';
	$s2.css({
		'marginTop': t
	});

	if (sTop < 90) {
		$('header').removeClass('scrolled');
		$('.up-btn').removeClass('active');
	} else {
		$('header').addClass('scrolled');
		$('.up-btn').addClass('active');
	}


	var s1t =  $s1.offset().top;
	var s2t =  $s2.offset().top;
	var s3t =  $s3.offset().top;
	var s4t =  $s4.offset().top;

	$('.menu-item').removeClass('active');

	if (sTop < s2t-wHeight*0.5) {
		$('.menu-item[data-go-to="#s1"]').addClass('active');
	} else 
	if (sTop < s3t-wHeight*0.5) {
		$('.menu-item[data-go-to="#s2"]').addClass('active');
	} else 
	if (sTop < s4t-wHeight*0.5) {
		$('.menu-item[data-go-to="#s3"]').addClass('active');
	} else {
		$('.menu-item[data-go-to="#s4"]').addClass('active');
	}

};



$(document).ready(function() {


	setTimeout(initShowFirstScreen, 1500);

	$(window).on('scroll', scrollParallax);
}); 