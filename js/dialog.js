$(function() {
    $(".back-dialog").click(function(e) {
    	// coordinates of dialog window
		var dialogHeight = $(".dialog-content").height();
		var dialogWidth = $(".dialog-content").width();
		var dialog_pos = $(".dialog-content").offset();
		var dialogXTopLeft = dialog_pos.left;
		var dialogYTopLeft = dialog_pos.top;
		var dialogXTopRight = dialogXTopLeft + dialogWidth;
		var dialogYBottomLeft = dialogYTopLeft + dialogHeight;

		// click coordinates
		var clkX = e.pageX;
		var clkY = e.pageY;

		if (!(clkX >= dialogXTopLeft  &&
			  clkX <= dialogXTopRight &&
			  clkY >= dialogYTopLeft  &&
			  clkY <= dialogYBottomLeft)) {
			closedialog();
		}
	});
});

function opendialog() {
    $("#dialog").fadeIn(); // smooth display block
}

function closedialog() {
    $("#dialog").fadeOut(); // smooth hide block
}
