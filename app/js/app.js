// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

var circle = document.getElementById('mainDiv');

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS


})
var body = document.querySelector('body');
body.style.position = 'relative';
let valueX;
let valueY;
document.onmousemove = function (event) {
	valueX = event.clientX;
	valueY = event.clientY;
	TweenMax.to("#ball1", 0.05, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball2", .1, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball3", .15, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball4", .2, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball5", .25, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball6", .3, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball7", .35, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball8", .4, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball9", .45, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball10", .5, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball11", .55, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball12", .6, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball13", .65, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball14", .7, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball15", .75, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball16", .8, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball17", .85, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball18", .9, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball19", .95, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
	TweenMax.to("#ball20", 1, {
		x: valueX,
		y: valueY,
		scale: 1,
		ease: "power1.in"
	});
}

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
	accordionItemHeader.addEventListener("click", event => {

		// Uncomment in case you only want to allow for the display of only one collapsed item at a time!

		// const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
		// if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
		//   currentlyActiveAccordionItemHeader.classList.toggle("active");
		//   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
		// }

		accordionItemHeader.classList.toggle("active");
		const accordionItemBody = accordionItemHeader.nextElementSibling;
		if (accordionItemHeader.classList.contains("active")) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
		}
		else {
			accordionItemBody.style.maxHeight = 0;
		}

	});
});

// let fillTest = document.getElementById('fill_stars')
// let bb = document.querySelectorAll("accordion-item-header")
// console.log(fillTest,bb)

// bb.onclick = function() {
//     fillTest.setAttribute("fill: red;");
// 	console.log('_______________')
//   };

let switchButton = document.querySelectorAll('.buttons_left_right') 
let slideContent = document.querySelectorAll('.slide_parent_teacher')

let accordions = document.querySelectorAll(".fill_stars")

 for(let i = 0; i < 8; i++) {
    accordionItemHeaders[i].addEventListener('click', () => {
        for(let i = 0; i < 8; i++) {
            accordions[i].setAttribute('fill', '#fff')
        }
    })
 }

// let accordions = document.querySelectorAll(".fill_stars")


// accordionItemHeaders.forEach(accordionItemHeader => {
// 	accordionItemHeader.addEventListener("click", event => {
// 		accordionItemHeader
// 	});
// });


//   let fillTest = document.getElementById('fill_stars')
//   let testaccord = document.getElementById('test_accord')
//   let accordion = document.querySelectorAll(".accordion-item-header")
  
//   test_accord.onclick = function() {
// 	  console.log('======')
// 	  fillTest.setAttribute('fill', '#fff');
// 	};

