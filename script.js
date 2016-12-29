$(document).ready(function() {
	var nodes = $('.tier-contents li');

	/*nodes.hover(function(event) {
		$(event.currentTarget).children('.label').show();
	}, function(event) {
		$(event.currentTarget).children('.label').hide();
	});*/

	nodes.click(function(event) {
		var node = $(event.currentTarget).children('.label');
		if (node.css('display') == 'none') {
			node.show();
		} else {
			node.hide();
		}
	})
});