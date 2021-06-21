// Import jQuery module (npm i jquery)
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MorphSVGPlugin } from './MorphSVGPlugin';
import Cursor from './cursor';
import ButtonCtrl from './buttonCtrl';
import $ from 'jquery';
import * as marquee from 'jquery.marquee'
window.jQuery = $
window.$ = $

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MorphSVGPlugin)

// require('jquery.marquee');

$('.marquee').marquee({
	duration: 14000,
	gap: 0,
	duplicated: true,
	startVisible: true,

})

var circle = document.getElementById('mainDiv');

document.addEventListener('DOMContentLoaded', () => {

	let arrow = document.querySelector('.footer-menu-center');
	// Custom JS
	//buttons
	let cursor = new Cursor(document.querySelector('.cursor'));
	let button = new ButtonCtrl(document.querySelector('.binance'));
	let buttonTwo = new ButtonCtrl(document.querySelector('.testnet'));

	buttonTwo.on('enter', () => {
		cursor.enter()
	});
	buttonTwo.on('leave', () => {
		cursor.leave()
	});

	button.on('enter', () => {
		cursor.enter()
	});
	button.on('leave', () => {
		cursor.leave()
	});

	//FAQ

	let mobileButton = document.querySelector('.bt-menu')
	let mobileMenu = document.querySelector('.mobile_menu')

	mobileButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('active')
		mobileButton.classList.toggle('active')
	})


	let accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
	let accordions = document.querySelectorAll('.stars_open')
	let accordionsText = document.querySelectorAll('.accordion-item-body')


	for (let i = 0; i < accordionItemHeaders.length; i++) {
		accordionItemHeaders[i].addEventListener('click', () => {
			accordions[i].classList.toggle('active')
			if (accordionsText[i].classList.contains('active')) {
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

	//product screen scrool function
	// let product = document.querySelector('.products')
	// let productRight = document.querySelector('.products-right')
	// let header = document.querySelector('header')
	// let requireOffset = header.getBoundingClientRect().height
	// let productTop
	// let productBottom
	// function productSroll() {
	// 	productTop = product.getBoundingClientRect().y
	// 	productBottom = product.getBoundingClientRect().y + product.getBoundingClientRect().height - window.innerHeight
	// 	// console.log(productBottom)
	// 	if(productTop < requireOffset && !productRight.classList.contains('sticky') && !productRight.classList.contains('bottom')) {
	// 		productRight.classList.add('sticky')
	// 		console.log('1')
	// 	} else if(productTop > requireOffset && productRight.classList.contains('sticky')) {
	// 		productRight.classList.remove('sticky')
	// 		console.log('2')
	// 	}

	// 	if(productBottom < -requireOffset && productRight.classList.contains('sticky')) {
	// 		productRight.classList.add('bottom')
	// 		productRight.classList.remove('sticky')
	// 		console.log(productRight.getBoundingClientRect().y + productRight.getBoundingClientRect().height - window.innerHeight)
	// 		console.log('3')
	// 	} else if (productBottom > -requireOffset && productRight.classList.contains('bottom') && !productRight.classList.contains('sticky')) {
	// 		productRight.classList.add('sticky')
	// 		productRight.classList.remove('bottom')
	// 		console.log('4')
	// 	}

	// }

	// window.addEventListener('scroll', () => {
	// 	productSroll()
	// })

	ScrollTrigger.create({
		trigger: '.products',
		start: "top top",
		end: "bottom bottom",
		pin: '.products-right'
	})

	//header hide
	function headerAnimation() {

		var doc = document.documentElement;
		var w = window;

		var prevScroll = w.scrollY || doc.scrollTop;
		var curScroll;
		var direction = 0;
		var prevDirection = 0;

		var header = document.querySelector('header');

		var checkScroll = function () {

			/*
			** Find the direction of scroll
			** 0 - initial, 1 - up, 2 - down
			*/

			curScroll = w.scrollY || doc.scrollTop;
			if (curScroll > prevScroll) {
				//scrolled up
				direction = 2;
			}
			else if (curScroll < prevScroll) {
				//scrolled down
				direction = 1;
			}

			if (direction !== prevDirection) {
				toggleHeader(direction, curScroll);
			}

			prevScroll = curScroll;
		};

		var toggleHeader = function (direction, curScroll) {
			if (direction === 2 && curScroll > 52) {

				//replace 52 with the height of your header in px

				header.classList.add('hide');
				prevDirection = direction;
			}
			else if (direction === 1) {
				header.classList.remove('hide');
				prevDirection = direction;
			}
		};

		window.addEventListener('scroll', checkScroll);
	}

	headerAnimation()

	//inwiev animation
	let animItems = document.querySelectorAll('.anim-items')
	function inviewAnimation() {
		for (let i = 0; i < animItems.length; i++) {
			ScrollTrigger.create({
				trigger: animItems[i],
				start: 'top 100%',
				end: 'bottom 0%',
				// markers: true,
				toggleActions: 'restart reverse restart reverse',
				// invalidateOnRefresh: true,
				onEnter: () => {
					gsap.fromTo(animItems[i], 0.7,
						{ autoAlpha: 0, y: '0.4rem' },
						{ autoAlpha: 1, y: 0, ease: 'power2', delay: 0.3 });
				},
				onEnterBack: () => {
					gsap.fromTo(animItems[i], 0.7,
						{ autoAlpha: 0, y: '-0.4rem' },
						{ autoAlpha: 1, y: 0, ease: 'power2', delay: 0.3 });
				},
				onLeave: () => {
					gsap.fromTo(animItems[i], 0.7,
						{ autoAlpha: 1, y: 0 },
						{ autoAlpha: 0, y: '0.4rem', ease: 'power2' });
				},
				onLeaveBack: () => {
					gsap.fromTo(animItems[i], 0.7,
						{ autoAlpha: 1, y: 0 },
						{ autoAlpha: 0, y: '-0.4rem', ease: 'power2' });
				}
			})

		}
	}

	// inviewAnimation()

	//to top on footer
	let footerHandle = document.querySelector('.footer-menu-center')
	let body = document.querySelector('body')

	footerHandle.addEventListener('click', () => {
		gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2' });
	})
    //mackground SVG animation
	
	function backgroundSvgAnimation() {
		gsap.to('#start', {duration: 1, morphSVG: '#end'})
	}	
	let sections = document.querySelectorAll('section')
	let sectionsTopOffset = []
	let isInwievd = []
	for (let i = 0; i < sections.length; i++) {
		sectionsTopOffset.push(sections[i].getBoundingClientRect().y)
	}
	function inviewCore() {
		for (let i = 0; i < sections.length; i++) {
			sectionsTopOffset[i] = sections[i].getBoundingClientRect().y
		}
		console.log(sectionsTopOffset)
	}
	inviewCore()
	window.addEventListener('scroll', () => {
		inviewCore()
		console.log(body.getBoundingClientRect().y)
	})
})
