$(document).ready(function() {
	function scrollParallax() {
		console.log('scroll');


	}

	function initShowFirstScreen() {
		console.log('initShowFirstScreen');
		var $s1 =  $('#s1');
		$s1.find('h1').animate({
			'top': '0',
			'left': '60%'
		}, 1000);
 

	}

	setTimeout(initShowFirstScreen, 1500);
	$(window).on('scroll', scrollParallax);
});