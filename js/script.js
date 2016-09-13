$("#about-us .image").css({
	"margin-right" : function() {
		return navigator.userAgent.search(/Firefox/) > -1 ? "70px" : "100px";
	}
});

$("#about-us .btn>div:first-child").css({
	"padding-bottom" : function() {
		return navigator.userAgent.search(/Firefox/) > -1 ? "27px" : "29px";
	}
});