console.log('\'Allo \'Allo!');

// get browser height on load

var windowHeight = $(window).height();
var heroUnitHeight = $('.home .hero').height();

$('.hero').css({
	'marginTop': windowHeight/2 - heroUnitHeight/2
});

// give us all the shape icons
// function createShapes () {
// 	var createOne;
// 	var num = 1+;
// 	for (var i = 0; i < 38; i++) {
// 		$('.shapes').html("<img class='shape"+num+"' src='images/shapes/layer "+num+".svg'/>");	
// 	};
// }

// createShapes();

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
	//var height = document.getElementByClassName.getBBox().height;
	//console.log(height);
}

resizeShapes();