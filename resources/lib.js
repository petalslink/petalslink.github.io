/* JQuery callbacks */

$(document).ready( function() {
	if (buildMenu()) {
		initializePositions();

		var firstMenuId = $('#content h1:first').attr('id');
		highlightMenu(null, firstMenuId);
		
		$(window).scroll(highlightMenu);
	}
});


/* Page content is static, no need to compute positions every time. */

var titles = [];
function initializePositions() {

	// Positions must be disjoint.
	// We also consider top margins here
	// (40px is set in the CSS file).
	var estimatedTopMargin = 40;
	$('#content h1').each(function(i) {

		var id = $(this).attr('id');
		titles.push({
			id: id,
			offset: Math.round( $(this).offset().top) - estimatedTopMargin
		});
	});

	// Adjust the heights
	for (var i=0; i<titles.length; i++) {
		if (i < titles.length - 1 ) {
			titles[i].height = titles[i+1].offset - titles[i].offset - 1;
		} else {
			titles[i].height = Math.round( $('#content').height()) - titles[i].offset;
		}
	}
}


function highlightMenu(event, defaultId) {

	// 190 = header's height
	var scroll = $(window).scrollTop() + 190;
	var h1Id = titles.find( function(elt) {

		var min = elt.offset;
		var max = min + elt.height;
		var between = scroll >= min && scroll <= max;

		return between;
	});

	if (! h1Id && !! defaultId) {
		h1Id = {id: defaultId};
	}

	if (!! h1Id) {
		$('#sidebar a').removeClass('active');
		$('#menu-' + h1Id.id).addClass('active');
	}
}


function buildMenu() {

	var showMenu = false;
	$('#content h1').each(function(i) {
		showMenu = true;

		var id = $(this).attr('id');
		var text = $(this).text();
		$('#sidebar').append( '<p><a href="" id="menu-' + id + '">' + text + '</a></p>' );
		$('#menu-' + id).click(reachMenu);
	});
	
	return showMenu;
}


/* Functions for direct use in pages. */

function reachMenu(e) {
	e.preventDefault();

	// 200 = header's height (190) + small margin
	var id = $(this).attr('id').replace('menu-', '');
	var tag = $('#' + id);
	var offset = tag.offset().top - 230;
	$('html,body').animate({scrollTop: offset}, 'slow');
}

