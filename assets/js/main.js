(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

function enableLoader(){
	document.getElementById("my-loader-element").classList.remove("d-none");
    document.getElementById("my-loader-wrapper").classList.remove("d-none");
}
function disableLoader(){
    document.getElementById("my-loader-element").classList.add("d-none");
	document.getElementById("my-loader-wrapper").classList.add("d-none");
}