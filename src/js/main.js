function scrollTo(top) {
	$("html, body").animate({
        scrollTop: top
    }, 1000);
};

$(document).ready(function() {

	$('.go-to').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
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