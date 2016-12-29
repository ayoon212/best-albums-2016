$(document).ready(function() {
	$('.tier-contents li').hover(function(event) {
		$(event.currentTarget).children('.label').show();
	}, function(event) {
		$(event.currentTarget).children('.label').hide();
	});
});