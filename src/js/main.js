function scrollTo(top) {
	$("html, body").animate({
        scrollTop: top
    }, 1000);
};

$(document).ready(function() {

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
		} else 
		if (sel == '#s3') {
			top = -parseFloat($('#s1').css('marginBottom')) + $(window).height()*1.6;
		}
		scrollTo(top);
	});

}); 