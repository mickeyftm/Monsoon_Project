// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	
	// Custom JS

})
var body = document.querySelector('body');
body.style.position = 'relative';
let valueX;
let valueY;
document.onmousemove = function(event){
  valueX = event.clientX;
  valueY = event.clientY;
TweenMax.to("#ball1", 0.05,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
TweenMax.to("#ball2", .1,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball3", .15,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball4", .2,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball5", .25,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball6", .3,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball7", .35,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball8", .4,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball9", .45,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball10", .5,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball11", .55,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball12", .6,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball13", .65,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball14", .7,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball15", .75,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball16", .8,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball17", .85,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball18", .9,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball19", .95,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
  TweenMax.to("#ball20", 1,{ 
  x:valueX,
  y:valueY,
  scale: 1,
  ease: "power1.in"
});
}
