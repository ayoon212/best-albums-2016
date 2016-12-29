$(document).ready(function() {
	$('.tier-contents li').hover(function(event) {
		$(event.currentTarget).children('.label').show();
	}, function(event) {
		$(event.currentTarget).children('.label').hide();
	});

	window.setInterval(function() {
		$('.wrapper').toggleClass('inverted');
	}, 322);
});