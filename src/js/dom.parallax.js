
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

	var $s2 =  $('#s2');
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

};



$(document).ready(function() {


	setTimeout(initShowFirstScreen, 1500);

	$(window).on('scroll', scrollParallax);
}); 