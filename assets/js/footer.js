//FOOTER
document.getElementById("footer").innerHTML =
"<div class='col-md-3 col-md-offset-1'><a class='footerText' href='assets/static/about.html'>About</a></div>" +
"<div class='col-md-3'><a class='footerText' href='mailto:folsomchineseschool@gmail.com'>folsomchineseschool@gmail.com</a></div>" +
"<div class='col-md-4 footerText'>Copyright © Folsom Chinese School, Xiaoxu Wu, Danny Yang</div>";

// Window load event used just in case window height is dependant upon images
$(window).bind("load", function() {

	var footerHeight = 0,
	footerTop = 0,
	$footer = $("#footer");

	footerAlign();

	function footerAlign() {
		footerHeight = $footer.height();
		footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";

		if ( ($(document.body).height()+footerHeight) < $(window).height()) {
			$footer.css({
				position: "absolute"
			}).animate({
				top: footerTop
			})
		} else {
			$footer.css({
				position: "static"
			})
		}
	};

	$(window)
	.scroll(positionFooter)
	.resize(positionFooter)
});
