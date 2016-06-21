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
    TweenMax.staggerFrom(".shape", 1, {rotation:10, y:50, x:50, opacity: 0, onComplete: perspectiveHover}, 0.10); 
}

loadShapes();

// add a hover 3d effect to the shapes
// why it doesn't work on firefox?

function perspectiveHover() {
  // var shapes = $(".shapes");
  // TweenMax.staggerFromTo('.shape', 10,
  //   {
  //     scale: 0.9
  //   },
  //   {
  //     scale: 1,
  //     repeat: -1, /* Aka infinite amount of repeats */
  //     yoyo: true /* Make it go back and forth */
  //   }
  // );
  // $(document).on("mousemove",function(e) {  
  //   var ax = -($(window).innerWidth()/1.5- e.pageX)/30;
  //   var ay = ($(window).innerHeight()/1.5- e.pageY)/20;
  //   shapes.attr("style", "transform: perspective( 600px );perspective-origin: 25% 75%;opacity: 1;transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
  //   console.log(ax, ay);
  // });
}



