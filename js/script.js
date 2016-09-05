$("#about-us .image").css({
	"margin-right" : function() {
		// if (navigator.userAgent.search(/Firefox/) > -1)
		// 	return "70px";
		// return "100px";

		return navigator.userAgent.search(/Firefox/) > -1 ? "70px" : "100px";
	}
});

$("#about-us .btn>div:first-child").css({
	"padding-bottom" : function() {
		// if (navigator.userAgent.search(/Firefox/) > -1)
		// 	return "27px";
		// return "29px";

		return navigator.userAgent.search(/Firefox/) > -1 ? "27px" : "29px";
	}
});