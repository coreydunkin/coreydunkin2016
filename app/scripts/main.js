console.log('\'Allo \'Allo!');

// get browser height on load

var windowHeight = $(window).height();
var heroUnitHeight = $('.home .hero').height();

console.log(heroUnitHeight);

$('.hero-unit').css({
	"marginTop": windowHeight/2 - heroUnitHeight
});

