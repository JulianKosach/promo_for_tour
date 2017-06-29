$(document).ready(function() {


	function initShowFirstScreen() {
		console.log('initShowFirstScreen');
		var $s1 =  $('#s1');
		$s1.find('h1').animate({
			'top': '0',
			'left': '60%'
		}, 1000);
	}



	function scrollParallax() {
		var sTop = $(window).scrollTop();
		var wHeight = $(window).height();

		var $s1 =  $('#s1');
		var t = '-' + (sTop*0.6) + 'px';
		$s1.css({
			'marginBottom': t
		});

	}

	setTimeout(initShowFirstScreen, 1500);

	$(window).on('scroll', scrollParallax);
});