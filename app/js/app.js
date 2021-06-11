// Import jQuery module (npm i jquery)
import {gsap} from 'gsap';
import Cursor from './cursor';
import ButtonCtrl from './buttonCtrl';
import $ from 'jquery'
window.jQuery = $
window.$ = $

var circle = document.getElementById('mainDiv');

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	//buttons
	const cursor = new Cursor(document.querySelector('.cursor'));
	const button = new ButtonCtrl(document.querySelector('.binance'));
	const arrow = document.querySelector('.footer-menu-center');

	button.on('enter', () => cursor.enter());
	button.on('leave', () => cursor.leave());


        let mouseX = 0
        let mouseY = 0
        //let intv = 0

        window.addEventListener('mousemove', (event) => {
            mouseY = (event.clientY)
            mouseX = (event.clientX)

            arrow.style.top = mouseY - 45;
            arrow.style.left = mouseX - 45;

            mouseY = (event.clientY / 16) - (45 / 16) + 'px'
            mouseX = (event.clientX / 16) - (45 / 16) + 'px'
            // console.log(arrow)
        })
		console.log(arrow)
        
        const mouseMove = () => {
            //intv += 1
            
            circle.style.top = mouseY + 'px'
            circle.style.left = mouseX + 'px'

            //circleSvg.style.opacity = 1 + Math.sin(intv * .04)
            //console.log(Math.sin(intv * .04))

            window.requestAnimationFrame(mouseMove)
        }

        mouseMove()


document.getElementById('try_circle').addEventListener("mouseover", function(){circle.style.opacity = "1";this.addEventListener("mouseout", function(){circle.style.opacity = "0";});
});

	// //custom cursor
	// let body = document.querySelector('body');
	// body.style.position = 'relative';
	// let valueX;
	// let valueY;
	// document.onmousemove = function (event) {
	// 	valueX = event.clientX;
	// 	valueY = event.clientY;
	// 	TweenMax.to('#ball1', 0.05, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball2', .1, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball3', .15, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball4', .2, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball5', .25, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball6', .3, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball7', .35, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball8', .4, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball9', .45, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball10', .5, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball11', .55, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball12', .6, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball13', .65, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball14', .7, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball15', .75, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball16', .8, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball17', .85, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball18', .9, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball19', .95, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// 	TweenMax.to('#ball20', 1, {
	// 		x: valueX,
	// 		y: valueY,
	// 		scale: 1,
	// 		ease: 'power1.in'
	// 	});
	// }
	
	//FAQ
	
	
	let accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
	let accordions = document.querySelectorAll('.stars_open')
	let accordionsText = document.querySelectorAll('.accordion-item-body')


	for( let i = 0; i< accordionItemHeaders.length; i++) {
		accordionItemHeaders[i].addEventListener('click', () => {
			accordions[i].classList.toggle('active')
			if(accordionsText[i].classList.contains('active')) {
				gsap.to(accordionsText[i], {
					height: 0,
					duration: 0.3,
				})
			} else {
				gsap.to(accordionsText[i], {
					height: 'auto',
					duration: 0.3,
				})
			}
			accordionsText[i].classList.toggle('active')
		})
		
		
	}
})
