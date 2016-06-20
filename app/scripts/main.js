console.log('\'Allo \'Allo!');

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'scripts/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

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

// animate shapes
//TweenMax.to("body", 0.5, {opacity:1, onComplete: loadShapes}, 1);
$('.shapes').css('opacity', 0);

function loadShapes() {
    TweenMax.to(".shapes", 0.2, {opacity: 1});
    TweenMax.staggerFrom(".shape", 1, {rotation:10, y:50, x:50, opacity: 0}, 0.10); 
}

loadShapes();
