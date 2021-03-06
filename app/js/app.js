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
$(document).ready(function(){
    $(this).scrollTop(0);
});
// gsap.to(window, { duration: 0, scrollTo: 0, ease: 'power2', delay: 0 });
document.addEventListener('DOMContentLoaded', () => {
	
	let background = document.querySelector('.back')
	// background.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`)

	//preolader
	let body = document.querySelector('body')
	let preloader = document.querySelector('.preloader')
	let preloaderIcon = document.querySelector('.preloader_icon')
	let logo = document.querySelector('.logo')
	let btMenu = document.querySelector('.bt-menu')

	///timer
	var count = 300;

	var counter = setInterval(timer, 1); //10 will  run it every 100th of a second

	function timer()
	{
	    if (count <= 0)
	    {
			document.getElementById("timer").innerHTML='00.00'
	        clearInterval(counter);
	        return;
	     }
	     count--;
	     document.getElementById("timer").innerHTML='0' + count /100; 
		 console.log(counter)
	 }
	 	/////////////////////////
	setTimeout(() => {
		preloader.classList.add('loaded')
		body.classList.remove('loading')
	}, 3000);

	gsap.to(preloaderIcon, {
		autoAlpha: 0,
		duration: 1,
		delay: 4,
	})
	let counterWrapper = document.querySelector('.counter-wrapper')

	gsap.to(logo, {
		autoAlpha: 1,
		duration: 1,
		delay: 4,
	})
	gsap.to(btMenu, {
		autoAlpha: 1,
		duration: 1,
		delay: 4,
	})

	//marquee 

	$('.marquee').marquee({
		duration: 14000,
		gap: 0,
		duplicated: true,
		startVisible: true,
	})


	//mobile_menu
	let mobileButton = document.querySelector('.bt-menu')
	let mobileMenu = document.querySelector('.mobile_menu')

	mobileButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('active')
		mobileButton.classList.toggle('active')
	})

	//FAQ
	let faqHandle = document.querySelectorAll(`a[href='#faq']`)
	
	for(let i=0; i< faqHandle.length; i++) {
		faqHandle[i].addEventListener('click', (e) => {
			e.preventDefault()
			console.log('scroll')
			gsap.to(window, { duration: 1, scrollTo: '#faq', ease: 'power2' });
		})
	}

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

	//products animation
	
	if(window.innerWidth > 1024) {
		ScrollTrigger.create({
			trigger: '.products',
			start: "top top",
			end: "bottom bottom",
			pin: '.products-right'
		})
	}

	//header hide
	var header = document.querySelector('header');
	let headerHeight = header.getBoundingClientRect().height

	window.addEventListener('scroll', () => {
		if (window.scrollY > headerHeight && !header.classList.contains('fixed')) {
			header.classList.add('fixed')
			setTimeout(() => {
				header.style.transition = 'top 0.3s ease'
				console.log('asdalskdj')
			}, 400);

		} else if (window.scrollY == 0 && header.classList.contains('fixed')) {
			header.classList.remove('fixed')
			header.style.removeProperty('transition')
		}
	})
	function headerAnimation() {
		var doc = document.documentElement;
		var w = window;
		var prevScroll = w.scrollY || doc.scrollTop;
		var curScroll;
		var direction = 0;
		var prevDirection = 0;
		var checkScroll = function () {
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

	//to top on footer
	let footerHandle = document.querySelector('.footer-menu-center')
	
	footerHandle.addEventListener('click', () => {
		gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2' });
	})

	//footer animation  on inwiev
	let footer = document.querySelector('footer')
	let faq = document.querySelector('.faq')
	let faqOffsetBottom = faq.getBoundingClientRect().y + faq.getBoundingClientRect().height - window.innerHeight

	function footerAnimation() {
		if(window.innerWidth > 1024) {
			window.addEventListener('scroll', () => {
				faqOffsetBottom = faq.getBoundingClientRect().y + faq.getBoundingClientRect().height - window.innerHeight
				if (faqOffsetBottom < 20) {
					footer.classList.add('active')
				} else if (faqOffsetBottom > 20 && footer.classList.contains('active')) {
					footer.classList.remove('active')
				}
			})
		}
	}

	footerAnimation()

	//buttons & cursor


	if (window.innerWidth > 1024) {
		let cursor = new Cursor(document.querySelector('.cursor'));
		new ButtonCtrl(document.querySelector('.binance'));
		new ButtonCtrl(document.querySelector('.testnet'));
		let cursorHoverItems = document.querySelectorAll('.cursor-hover')
		for (let i = 0; i < cursorHoverItems.length; i++) {
			cursorHoverItems[i].addEventListener('mouseover', () => {
				cursor.enter()
			});
			cursorHoverItems[i].addEventListener('mouseleave', () => {
				cursor.leave()
			});
		}
	
	}


	//inwiev + svg animations
	function inviewCore() {
		heroInwiev()
		if(window.innerWidth > 1024) {
			processInwiev()
			ensuringInwiev()
			productInwiev()
			protocolInwiev()
			faqInwiev()
		}
	}

	let backgroundSvg = document.querySelector('.back')

	function heroInwiev() {
		let enablingSection = document.querySelector('.enabling')
		let heroLines = document.querySelectorAll('.enabling .line')
		let animItems = enablingSection.querySelectorAll('.anim-items')
		let headerItems = document.querySelectorAll('header .anim-items')
		for (let i = 0; i < heroLines.length; i++) {
			heroLines[i].classList.add('visible')
		}
		header.classList.add('visible')
		gsap.to(backgroundSvg, { autoAlpha: 1, duration: 1 })
		gsap.to(animItems, { y: 0, autoAlpha: 1, stagger: 0.07 });
		gsap.to(headerItems, { y: 0, autoAlpha: 1, stagger: 0.07 });

	}

	function processInwiev() {
		ScrollTrigger.create({
			trigger: '.process',
			start: 'top center',
			// end: 'bottom ',
			// markers: true,
			onEnter: () => {
				gsap.to('#one-hero', { duration: .2, x: 0, y: 0, fill: "#8349FF", morphSVG: '#one-process', ease: 'power1' })
				gsap.to('#two-hero', { duration: .2, x: '5rem', y: '1rem', fill: "#FF0095", morphSVG: '#two-process', ease: 'power1' })
				gsap.to('#three-hero', { duration: .2, x: 0, y: '2.5rem', fill: "#0013FF", morphSVG: '#three-process', ease: 'power1' })
				gsap.to('#four-hero', { duration: .2, x: 0, y: '2.5rem', fill: "#00FFFF", morphSVG: '#four-process', ease: 'power1' })
				// gsap.to(animItems, { y: 0, autoAlpha: 1, stagger: 0.07 });
				backgroundSvg.classList.add('process')
			},
			onLeave: () => {
				backgroundSvg.classList.remove('process')
			},
			onEnterBack: () => {
				backgroundSvg.classList.add('process')
			},
			onLeaveBack: () => {
				gsap.to('#one-hero', { duration: .2, x: '-.3rem', y: '-.5rem', fill: "#280075", morphSVG: '#one-hero', ease: 'power1' })
				gsap.to('#two-hero', { duration: .2, x: 0, y: '.2rem', fill: "#CF00A3", morphSVG: '#two-hero', ease: 'power1' })
				gsap.to('#three-hero', { duration: .2, x: 0, y: '1.5rem', fill: "#FF8993", morphSVG: '#three-hero', ease: 'power1' })
				gsap.to('#four-hero', { duration: .2, x: 0, y: 0, fill: "#FF0095", morphSVG: '#four-hero', ease: 'power1' })
				backgroundSvg.classList.remove('process')
			}
		})
	}

	function ensuringInwiev() {
		ScrollTrigger.create({
			trigger: '.ensuring',
			start: 'top center',
			// end: 'bottom ',
			// markers: true,
			onEnter: () => {
				gsap.to('#one-hero', { duration: .2, x: '-4rem', y: '-.5rem', fill: "#280075", morphSVG: '#one-hero', ease: 'power1' })
				gsap.to('#two-hero', { duration: .2, x: '-1rem', y: '.2rem', fill: "#CF00A3", morphSVG: '#two-hero', ease: 'power1' })
				gsap.to('#three-hero', { duration: .2, x: 0, y: '1.5rem', fill: "#FF00F5", morphSVG: '#three-hero', ease: 'power1' })
				gsap.to('#four-hero', { duration: .2, x: 0, y: 0, fill: "#00DD81", morphSVG: '#four-hero', ease: 'power1' })
				// gsap.to(animItems, { y: 0, autoAlpha: 1, stagger: 0.07 });
				backgroundSvg.classList.add('ensuring')
			},
			onLeave: () => {

				backgroundSvg.classList.remove('ensuring')
			},
			onEnterBack: () => {
				backgroundSvg.classList.add('ensuring')
			},
			onLeaveBack: () => {
				gsap.to('#one-hero', { duration: .2, x: 0, y: 0, fill: "#8349FF", morphSVG: '#one-process', ease: 'power1' })
				gsap.to('#two-hero', { duration: .2, x: '5rem', y: '1rem', fill: "#FF0095", morphSVG: '#two-process', ease: 'power1' })
				gsap.to('#three-hero', { duration: .2, x: 0, y: '2.5rem', fill: "#0013FF", morphSVG: '#three-process', ease: 'power1' })
				gsap.to('#four-hero', { duration: .2, x: 0, y: '2.5rem', fill: "#00FFFF", morphSVG: '#four-process', ease: 'power1' })
				backgroundSvg.classList.remove('ensuring')
			}
		})
	}

	function productInwiev() {
		ScrollTrigger.create({
			trigger: '.products',
			start: 'top center',
			// end: 'bottom ',
			// markers: true,
			onEnter: () => {
				gsap.to('#one-hero', { duration: .2, x: '7rem', y: '2rem', fill: "#FFF181", morphSVG: '#one-product', ease: 'power1' }) //yellow
				gsap.to('#two-hero', { duration: .2, x: 0, y: '1rem', fill: "#34F1BB", morphSVG: '#two-product', ease: 'power1' })
				gsap.to('#three-hero', { duration: .2, x: 0, y: 0, fill: "#0038FF", morphSVG: '#three-product', ease: 'power1' })
				gsap.to('#four-hero', { duration: .2, x: 0, y: '.5rem', fill: "#FF00F5", morphSVG: '#four-product', ease: 'power1' })
				// gsap.to(animItems, { y: 0, autoAlpha: 1, stagger: 0.07 });
				backgroundSvg.classList.add('products-back')
			},
			onLeave: () => {

				backgroundSvg.classList.remove('products-back')
			},
			onEnterBack: () => {
				backgroundSvg.classList.add('products-back')
			},
			onLeaveBack: () => {
				gsap.to('#one-hero', { duration: .2, x: '-4rem', y: '-.5rem', fill: "#280075", morphSVG: '#one-hero', ease: 'power1' })
				gsap.to('#two-hero', { duration: .2, x: '-1rem', y: '.2rem', fill: "#CF00A3", morphSVG: '#two-hero', ease: 'power1' })
				gsap.to('#three-hero', { duration: .2, x: 0, y: '1.5rem', fill: "#FF00F5", morphSVG: '#three-hero', ease: 'power1' })
				gsap.to('#four-hero', { duration: .2, x: 0, y: 0, fill: "#00DD81", morphSVG: '#four-hero', ease: 'power1' })
				backgroundSvg.classList.remove('products-back')
			}
		})
	}

	// function processInwiev() {
	// 	ScrollTrigger.create({
	// 		trigger: '.privacy',
	// 		start: 'top center',
	// 		// end: 'bottom ',
	// 		// markers: true,
	// 		onEnter: () => {
	// 			gsap.to('#one-hero', { duration: .2, x: 0, y: 0, fill: "#8349FF", morphSVG: '#one-process', ease: 'power1' })
	// 			gsap.to('#two-hero', { duration: .2, x: '5rem', y: '1rem', fill: "#FF0095", morphSVG: '#two-process', ease: 'power1' })
	// 			gsap.to('#three-hero', { duration: .2, x: 0, y: '2.5rem', fill: "#0013FF", morphSVG: '#three-process', ease: 'power1' })
	// 			gsap.to('#four-hero', { duration: .2, x: 0, y: '2.5rem', fill: "#00FFFF", morphSVG: '#four-process', ease: 'power1' })
	// 			// gsap.to(animItems, { y: 0, autoAlpha: 1, stagger: 0.07 });
	// 			backgroundSvg.classList.add('privacy-back')
	// 		},
	// 		onLeave: () => {
	// 			backgroundSvg.classList.remove('privacy-back')
	// 		},
	// 		onEnterBack: () => {
	// 			backgroundSvg.classList.add('privacy-back')
	// 		},
	// 		onLeaveBack: () => {
	// 			gsap.to('#one-hero', { duration: .2, x: '-.3rem', y: '-.5rem', fill: "#280075", morphSVG: '#one-hero', ease: 'power1' })
	// 			gsap.to('#two-hero', { duration: .2, x: 0, y: '.2rem', fill: "#CF00A3", morphSVG: '#two-hero', ease: 'power1' })
	// 			gsap.to('#three-hero', { duration: .2, x: 0, y: '1.5rem', fill: "#FF8993", morphSVG: '#three-hero', ease: 'power1' })
	// 			gsap.to('#four-hero', { duration: .2, x: 0, y: 0, fill: "#FF0095", morphSVG: '#four-hero', ease: 'power1' })
	// 			backgroundSvg.classList.remove('privacy-back')
	// 		}
	// 	})
	// }

	function protocolInwiev() {
		ScrollTrigger.create({
			trigger: '.cross',
			start: 'top bottom',
			// end: 'bottom ',
			// markers: true,
			onEnter: () => {
				gsap.to('#one-hero', { duration: .2,  autoAlpha: 0, x: '7rem', y: '2rem', fill: "#FFF181", morphSVG: '#one-product', ease: 'power1' }) //yellow
				gsap.to('#two-hero', { duration: .2,  autoAlpha: 0, x: 0, y: '1rem', fill: "#34F1BB", morphSVG: '#two-product', ease: 'power1' })
				gsap.to('#three-hero', { duration: .2,  autoAlpha: 0, x: 0, y: 0, fill: "#0038FF", morphSVG: '#three-product', ease: 'power1' })
				gsap.to('#four-hero', { duration: .2,  autoAlpha: 0, x: 0, y: '.5rem', fill: "#FF00F5", morphSVG: '#four-product', ease: 'power1' })
				gsap.to('.planet-image', {duration: 2, autoAlpha: 1, ease: 'power1', delay: .2})
				gsap.to('.planet-line', {duration: 1, width: '100%', ease: 'power1', delay: .2})
				backgroundSvg.classList.add('cross-back')
			},
			onLeave: () => {

				backgroundSvg.classList.remove('cross-back')
			},
			onEnterBack: () => {
				backgroundSvg.classList.add('cross-back')
			},
			onLeaveBack: () => {
				gsap.to('#one-hero', { duration: .2, autoAlpha: 1, x: '7rem', y: '2rem', fill: "#FFF181", morphSVG: '#one-product', ease: 'power1' }) //yellow
				gsap.to('#two-hero', { duration: .2, autoAlpha: 1, x: 0, y: '1rem', fill: "#34F1BB", morphSVG: '#two-product', ease: 'power1' })
				gsap.to('#three-hero', { duration: .2, autoAlpha: 1, x: 0, y: 0, fill: "#0038FF", morphSVG: '#three-product', ease: 'power1' })
				gsap.to('#four-hero', { duration: .2, autoAlpha: 1, x: 0, y: '.5rem', fill: "#FF00F5", morphSVG: '#four-product', ease: 'power1' })
				backgroundSvg.classList.remove('cross-back')
			}
		})
		ScrollTrigger.create({
			trigger: '.cross-background',
			start: 'top center',
			// markers: true,
			onEnter: () => {
				gsap.to('.cross-background', {duration: .3, height: '3.11rem', ease: 'power1'})
			}
		})
	}

	function faqInwiev() {
		ScrollTrigger.create({
			trigger: '.faq',
			start: 'top center',
			// end: 'bottom ',
			// markers: true,
			onEnter: () => {
				gsap.to('#one-hero', { duration: .2, autoAlpha: 1, x: '-.3rem', y: '-.5rem', fill: "#280075", morphSVG: '#one-hero', ease: 'power1' })
				gsap.to('#two-hero', { duration: .2, autoAlpha: 1, x: 0, y: '.2rem', fill: "#CF00A3", morphSVG: '#two-hero', ease: 'power1' })
				gsap.to('#three-hero', { duration: .2, autoAlpha: 1, x: 0, y: '1.5rem', fill: "#FF8993", morphSVG: '#three-hero', ease: 'power1' })
				gsap.to('#four-hero', { duration: .2, autoAlpha: 1, x: 0, y: 0, fill: "#FF0095", morphSVG: '#four-hero', ease: 'power1' })
				backgroundSvg.classList.add('faq-back')
			},
			onLeave: () => {

				backgroundSvg.classList.remove('faq-back')
			},
			onEnterBack: () => {
				backgroundSvg.classList.add('faq-back')
			},
			onLeaveBack: () => {
				gsap.to('#one-hero', { duration: .2, autoAlpha: 0, ease: 'power1' }) //yellow
				gsap.to('#two-hero', { duration: .2, autoAlpha: 0, ease: 'power1' })
				gsap.to('#three-hero', { duration: .2, autoAlpha: 0, ease: 'power1' })
				gsap.to('#four-hero', { duration: .2, autoAlpha: 0, ease: 'power1' })
				backgroundSvg.classList.remove('faq-back')
			}
		})
	}

	setTimeout(() => {
		inviewCore()
	}, 4000);
})
