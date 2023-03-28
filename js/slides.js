$(window).load(function() {

function BowlSlides() {
	setTimeout(function() {
	$("#Bowls-slide1").addClass("slide-in");
		}, 0);
	
	setTimeout(function() {
		$("#Bowls-slide1").removeClass("slide-in");
		$("#Bowls-slide1").addClass("slide-out");
		$("#Bowls-slide2").removeClass("slide-out");
		$("#Bowls-slide2").addClass("slide-in");
      }, 20 * 1000);
	setTimeout(function() {
		$("#Bowls-slide2").removeClass("slide-in");
		$("#Bowls-slide2").addClass("slide-out");
		$("#Bowls-slide3").removeClass("slide-out");
		$("#Bowls-slide3").addClass("slide-in");
      }, 40 * 1000);
	setTimeout(function() {
		$("#Bowls-slide3").removeClass("slide-in");
		$("#Bowls-slide3").addClass("slide-out");
		$("#Bowls-slide4").removeClass("slide-out");
		$("#Bowls-slide4").addClass("slide-in");
      }, 60 * 1000);
	setTimeout(function() {
		$("#Bowls-slide4").removeClass("slide-in");
		$("#Bowls-slide4").addClass("slide-out");
		$("#Bowls-slide1").removeClass("slide-out");
		$("#Bowls-slide1").addClass("slide-in");
      }, 80 * 1000);
	
	setTimeout(BowlSlides, 80 * 1000);
};

	BowlSlides();
	
	});