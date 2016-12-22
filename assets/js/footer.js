//FOOTER
document.getElementById("footer").innerHTML =
"<div class='col-md-2 col-md-offset-2'><a class='footerText link' href='assets/static/about.html'>About</a></div>" +
"<div class='col-md-3'><a class='footerText link' href='mailto:folsomchineseschool@gmail.com'>folsomchineseschool@gmail.com</a></div>" +
"<div class='col-md-3 footerText'>Copyright © Folsom Chinese School</div>";

// Window load event used just in case window height is dependant upon images
// Align footer at the bottom properly regardless of content above
$(window).bind("load", function() {

	var footerHeight = 0,
	footerTop = 0,
	$footer = $("#footer");

	footerAlign();

	function footerAlign() {
		footerHeight = $footer.height();
		footerTop = ($(window).scrollTop()+$(window).height()-footerHeight) + "px";

		if ( ($(document.body).height()+footerHeight) < $(window).height()) {
			$footer.css({
				position: "absolute",
				top: footerTop
			})
		} else {
			$footer.css({
				position: "static",
				top: footerTop
			})
		}
	};

	$(window)
	.resize(footerAlign)
});
