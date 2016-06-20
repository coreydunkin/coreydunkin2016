console.log('\'Allo \'Allo!');

// get browser height on load

var windowHeight = $(window).height();
var heroUnitHeight = $('.home .hero-unit').height();

console.log(windowHeight);

$('.hero').css({
	//'marginTop': windowHeight/2 - heroUnitHeight/2
});

function createShapes() {
    var i=0;
    var num=38;
    var shapes = $('.shapes');

    for(i=1;i<=num;i++)
    {

	var shape = $('<img>', {
	    class: 'shape shape'+i,
	    src: 'images/shapes/layer '+i+'.svg'
	}).appendTo(shapes);
    }

}
createShapes();

function resizeShapes() {

}

resizeShapes();


