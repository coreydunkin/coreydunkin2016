console.log('\'Allo \'Allo!');

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

// intro load

$('.hero').addClass('animated fadeInUp')
.one(animationEnd, particlesLoaded);

function particlesLoaded() {
  $('#particles-js').addClass('animated fadeInUp');
}


// setting up the fullpager
$('#fullpage').fullpage({
    // nav
    achors:['home','portfolio','contact'],

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: false,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '.element1, .element2, .element3',
    scrollOverflow: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    paddingTop: '0em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    //events
    onLeave: function(index, nextIndex, direction){

    },
    afterLoad: function(anchorLink, index){

    },
    afterRender: function(){

    },
    afterResize: function(){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){

    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
      console.log('leave');
    }
});

// starting all the shapes into a variable for later use
var homeShapes = [];


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

function applyShader () {

// set up webgl for shaders

    // try to create a WebGL canvas (will fail if WebGL isn't supported)
    try {
        var canvas = fx.canvas();
    } catch (e) {
        alert(e);
        return;
    }

    // convert the image to a texture
    var image = document.getElementById('shape21');
    var texture = canvas.texture(image);

    // apply the ink filter
    canvas.draw(texture).ink(0.25).update();

    // replace the image with the canvas
    image.parentNode.insertBefore(canvas, image);
    image.parentNode.removeChild(image);

    $(canvas).addClass('shape shape21')

    // Note: instead of swapping the <canvas> tag with the <img> tag
    // as done above, we could have just transferred the contents of
    // the image directly:
    //
    //     image.src = canvas.toDataURL('image/png');
    //
    // This has two disadvantages. First, it is much slower, so it
    // would be a bad idea to do this repeatedly. If you are going
    // to be repeatedly updating a filter it's much better to use
    // the <canvas> tag directly. Second, this requires that the
    // image is hosted on the same domain as the script because
    // JavaScript has direct access to the image contents. When the
    // two tags were swapped using the previous method, JavaScript
    // actually doesn't have access to the image contents and this
  

}

function createShapes() {
    var i=0;
    var num=38;
    var shapes = $('.shapes');
    
    for(i=1;i<=num;i++)
    {
      // fill the homeShapes var for preload
      homeShapes.push('images/shapes/layer '+i+'.svg');
    	var shape = $('<img>', {
          id: 'shape'+i,
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
//$('.shapes').css('opacity', 0);

// var $this = $('.shapes');
// var offset = $this.offset();
// var width = $this.width();
// var height = $this.height();

// var centerX = offset.left + width / 2;
// var centerY = offset.top + height / 2;

// console.log(centerX, centerY);





// $('.dot').css({
//   'top': cX1-cX2+'px',
//   'left': cY1-cY2+'px'
// });


// Returns a random number between min (inclusive) and max (exclusive)
// For this I want to target a random shape, apply an animation to it, then move onto another shape every few seconds.
function getRandomArbitrary(min, max) {
  var min = 1;
  var max = 38;

  var getNumber = Math.floor(Math.random() * (max - min)) + min;

  console.log(getNumber);
}

getRandomArbitrary();



function loadShapes(newX, newY) {
    
  var num = 1;
  var newX = 0;
  var newY = 400;

  TweenMax.to('.shapes', 0.2, {opacity: 1});
  
  function updateShape(newX, newY) {

  }  
  TweenMax.staggerFrom('.shape', 1, {
    rotation:10, 
    y: newY, 
    x: newX, 
    opacity: 0, 
    onComplete: function updateXY (newX, newY) {
        var newNum = num++;

        var cX1 = $('.shapes').offset().left + $('.shape').width()/2;
        var cY1 = $('.shapes').offset().top + $('.shape').height()/2;
        var cX2 = $('.shape'+newNum).offset().left + $('.shape').width()/2;
        var cY2 = $('.shape'+newNum).offset().top + $('.shape').height()/2;

        var newX = cX1 + cX2;
        var newY = cY1 + cY2;


        
      }
    //onUpdate: updateXY
    //transformOrigin: "50% 50%"
  }, 0.10); 
  setTimeout(function() {
    //applyShader();
    //shapesSlow();
  }, 10000);



  //console.log(updateXY.newX, updateXY.newY);
}

//loadShapes();

function shapesShow (argument) {
  anime({
    targets: '.shape',
    opacity: 0,
    easing: 'easeInOutCubic',
    translateX: function() { 
      return anime.random(-10, 10) + 'rem'; 
      
    },
    translateY: function() { 
      return anime.random(-10, 10) + 'rem'; 
    },
    //scale: function() { return anime.random(10, 20) / 10; },
    //duration: function() { return anime.random(3000, 8000); },
    duration: 1500,
    delay: function(el, index) {
      return index * 100;
    },
    direction: 'reverse',
    complete: function() {
      shapesFloat();
    }
  });
}

shapesShow();

function shapesFloat (argument) {
  anime({
    targets: '.shape',
    easing: 'linear',
    // translateX: function() { 
    //   return anime.random(-0.02, 0.02) + 'rem'; 
    // },
    // translateY: function() { 
    //   return anime.random(-0.02, 0.02) + 'rem'; 
    // },
    delay: function(el, index) {
      return index * 30;
      // body...
    },
    // rotateY: function(el, index) {
    //   return anime.random(-5, 5) + 'deg';
    // }, 
    // rotateX: function(el, index) {
    //   return anime.random(-5, 5) + 'deg';
    // },
    translateX: function(el, index) {
      return anime.random(-5, 5) + 'px';
    },
    translateY: function(el, index) {
      return anime.random(-5, 5) + 'px';
    },
    //scale: function() { return anime.random(10, 20) / 10; },
    //duration: function() { return anime.random(3000, 8000); },
    duration: 2000,
    complete: function() {
      setTimeout(function() {
        shapesFloat();
      }, 5000);
      
      //console.log('repeat');
    }
  });
}

console.log(anime.easings);

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

function responsiveShape (argument) {
var pageWidth, pageHeight;

var basePage = {
  width: 900,
  height: 900,
  scale: 1.1,
  scaleX: 1.1,
  scaleY: 1.1
};

$(function(){
  var $page = $('.shapes');
  
  getPageSize();
  scalePages($page, pageWidth, pageHeight);
  
  //using underscore to delay resize method till finished resizing window
  $(window).resize(_.debounce(function () {
    getPageSize();            
    scalePages($page, pageWidth, pageHeight);
  }, 150));
  

function getPageSize() {
  pageHeight = $('.shapes-container').height();
  pageWidth = $('.shapes-container').width();
}

function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1.1, scaleY = 1.1;                      
  scaleX = maxWidth / basePage.width;
  scaleY = maxHeight / basePage.height;
  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

  page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');opacity: 1;');
}
});
}

function checkSize () {
  var windowWidth = $(window).width();
  if (windowWidth < 901) {
    responsiveShape();
  };
  console.log(windowWidth);
}

$(window).resize(function() {
  //resize just happened, pixels changed
  checkSize();
});

checkSize();



function urlChange (checkURL) {

  function checkUrl () {
      if (window.location.hash == '#portfolio') {
        $('.slick-active').find('.info, .desktop, .mobile').removeClass('fadeOutDown').addClass('animated fadeInUp');
      } else{
        $('.slick-active').find('.info, .desktop, .mobile').removeClass('fadeInUp').addClass('fadeOutDown');
      };
  }

  $(window).on('hashchange', function(e){
    checkUrl();
  });
}

urlChange();


// work section

$('.list').slick({
  dots: false,
  infinite: false,
  speed: 500,
  waitForAnimate: true
});




// On before slide change
$('.list').on('beforeChange', function(event, slick, currentSlide, nextSlide){

  console.log(nextSlide);
  var getSlide = $('[data-slick-index='+nextSlide+']');
  var lastSlide = $('[data-slick-index='+currentSlide+']');

  if (nextSlide > currentSlide) {
    
    $(getSlide).find('.info, .desktop, .mobile').addClass('animated fadeInRight');
  } else{
    
    $(getSlide).find('.info, .desktop, .mobile').addClass('animated fadeInLeft');
  };
});

$('.list').on('afterChange', function(event, slick, currentSlide, nextSlide){
  
  console.log(nextSlide);
  var prevSlide = currentSlide-1;
  var newSlide = currentSlide+1;
  var getSlide = $('[data-slick-index='+newSlide+']');
  var lastSlide = $('[data-slick-index='+prevSlide+']');

  $(lastSlide).find('.info, .desktop, .mobile').removeClass('animated fadeInRight fadeInLeft fadeInUp fadeOutDown');
  $(getSlide).find('.info, .desktop, .mobile').removeClass('animated fadeInRight fadeInLeft fadeInUp fadeOutDown');
});

$('.card figure').on('mouseover', function(event) {
  event.preventDefault();
  /* Act on the event */
}).on('mouseout', function (event) {
  // body...
});

