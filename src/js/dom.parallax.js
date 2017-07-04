
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



	var s1h =  $('#s1').height()
	var s2h =  $('#s2').height()
	var s3h =  $('#s3').height()
	var s4h =  $('#s4').height()

	var s1t =  $s1.offset().top;
	var s2t =  $s2.offset().top;
	var s3t =  $s3.offset().top;
	var s4t =  $s4.offset().top;

	if (sTop < 90) {
		$('header').removeClass('scrolled');
		$('.up-btn').removeClass('active');
	} else {
		$('header').addClass('scrolled');
		$('.up-btn').addClass('active');
	}

	$('.menu-item').removeClass('active');

	if (sTop < s1t+s1h-wHeight*0.5) {
		$('.menu-item[data-go-to="#s1"]').addClass('active');
	} else 
	if (sTop < s2t+s2h-wHeight*0.5) {
		$('.menu-item[data-go-to="#s2"]').addClass('active');
	} else 
	if (sTop < s3t+s3h-wHeight*0.5) {
		$('.menu-item[data-go-to="#s3"]').addClass('active');
	} else {
		$('.menu-item[data-go-to="#s4"]').addClass('active');
	}


	var mt2 = '-' + (sTop*0.6) + 'px';
	$s2.css({
		'marginTop': mt2
	});

	var mt3 = '-' + (s2t + s2h - sTop)*0.6 + 'px';
	$s3.css({
		'marginTop': mt3
	});

	var mt4 = Math.min(s3t + s3h - sTop - 300, 0);
	var pwt = mt4*0.6 + 'px';
	mt4 = mt4 + 'px';
	console.log(mt4);
	$s4.css({
		'marginTop': mt4
	});

	console.log(mt4);
	$('.price-wrap').css({
		'top': pwt
	});

};



$(document).ready(function() {


	setTimeout(initShowFirstScreen, 1500);

	$(window).on('scroll', scrollParallax);
	// scrollParallax();
}); 