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

document.addEventListener('DOMContentLoaded', () => {
	gsap.to(window, { duration: 0.1, scrollTo: 0, ease: 'power2', delay: 0 });

	//preolader
	let body = document.querySelector('body')
	let preloader = document.querySelector('.preloader')
	let preloaderIcon = document.querySelector('.preloader_icon')
	let logo = document.querySelector('.logo')
	let counter = document.querySelector('.counter')
	let seconds = document.querySelector('.seconds')
	function count() {
		let number = 100
		let secondNumber = 100
		setInterval(() => {

			if (number > 0) {
				number = number - 1
				counter.innerHTML = `${number}`
				secondNumber = 100

				// secondNumber = secondNumber-1
				// seconds.innerHTML = `${secondNumber}`
				setInterval(() => {
					if (secondNumber > 0) {
						secondNumber = secondNumber - 1
						seconds.innerHTML = `${secondNumber}`
					} else {
						return
					}

				}, 3);
			} else {
				return
			}
		}, 25);
	}
	count()
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

	gsap.to(counterWrapper, {
		autoAlpha: 0,
		duration: 0.3,
		delay: 3,
	})

	gsap.to(logo, {
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
	ScrollTrigger.create({
		trigger: '.products',
		start: "top top",
		end: "bottom bottom",
		pin: '.products-right'
	})

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
		window.addEventListener('scroll', () => {
			faqOffsetBottom = faq.getBoundingClientRect().y + faq.getBoundingClientRect().height - window.innerHeight
			if (faqOffsetBottom < 20) {
				footer.classList.add('active')
			} else if (faqOffsetBottom > 20 && footer.classList.contains('active')) {
				footer.classList.remove('active')
			}
		})
	}

	footerAnimation()

	//buttons & cursor
	let cursor = new Cursor(document.querySelector('.cursor'));
	let button = new ButtonCtrl(document.querySelector('.binance'));
	let buttonTwo = new ButtonCtrl(document.querySelector('.testnet'));

	let cursorHoverItems = document.querySelectorAll('.cursor-hover')
	for (let i = 0; i < cursorHoverItems.length; i++) {
		cursorHoverItems[i].addEventListener('mouseover', () => {
			cursor.enter()
		});
		cursorHoverItems[i].addEventListener('mouseleave', () => {
			cursor.leave()
		});
	}

	//inwiev + svg animations
	function inviewCore() {
		heroInwiev()
		processInwiev()
		ensuringInwiev()
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
		let animItems = document.querySelectorAll('.process .anim-items')

		ScrollTrigger.create({
			trigger: '.process',
			start: 'top center',
			// end: 'bottom ',
			// markers: true,
			onEnter: () => {
				gsap.to('#one-hero', { duration: 1, x: 0, y: 0, fill: "#8349FF", morphSVG: '#one-process', ease: 'power1' })
				gsap.to('#two-hero', { duration: 1, x: '5rem', y: '1rem', fill: "#FF0095", morphSVG: '#two-process', ease: 'power1' })
				gsap.to('#three-hero', { duration: 1, x: 0, y: '2.5rem', fill: "#0013FF", morphSVG: '#three-process', ease: 'power1' })
				gsap.to('#four-hero', { duration: 1, x: 0, y: '2.5rem', fill: "#00FFFF", morphSVG: '#four-process', ease: 'power1' })
				gsap.to(animItems, { y: 0, autoAlpha: 1, stagger: 0.07 });
				backgroundSvg.classList.add('process')
			},
			onLeave: () => {
				backgroundSvg.classList.remove('process')
			},
			onEnterBack: () => {
				gsap.to('#one-hero', { duration: 1, x: 0, y: 0, fill: "#8349FF", morphSVG: '#one-process', ease: 'power1' })
				gsap.to('#two-hero', { duration: 1, x: '5rem', y: '1rem', fill: "#FF0095", morphSVG: '#two-process', ease: 'power1' })
				gsap.to('#three-hero', { duration: 1, x: 0, y: '2.5rem', fill: "#0013FF", morphSVG: '#three-process', ease: 'power1' })
				gsap.to('#four-hero', { duration: 1, x: 0, y: '2.5rem', fill: "#00FFFF", morphSVG: '#four-process', ease: 'power1' })
				backgroundSvg.classList.add('process')
			},
			onLeaveBack: () => {
				gsap.to('#one-hero', { duration: 1, x: '-.3rem', y: '-.5rem', fill: "#280075", morphSVG: '#one-hero', ease: 'power1' })
				gsap.to('#two-hero', { duration: 1, x: 0, y: '.2rem', fill: "#CF00A3", morphSVG: '#two-hero', ease: 'power1' })
				gsap.to('#three-hero', { duration: 1, x: 0, y: '1.5rem', fill: "#FF8993", morphSVG: '#three-hero', ease: 'power1' })
				gsap.to('#four-hero', { duration: 1, x: 0, y: 0, fill: "#FF0095", morphSVG: '#four-hero', ease: 'power1' })
				backgroundSvg.classList.remove('process')
			}
		})
	}

	function ensuringInwiev() {
		let animItems = document.querySelectorAll('.ensuring .anim-items')
		ScrollTrigger.create({
			trigger: '.ensuring',
			start: 'top center',
			// end: 'bottom ',
			// markers: true,
			onEnter: () => {
				// gsap.to('#one-hero', { duration: 1, x: 0, y: 0, fill: "#8349FF", morphSVG: '#one-process', ease: 'power1' })
				// gsap.to('#two-hero', { duration: 1, x: '5rem', y: '1rem', fill: "#FF0095", morphSVG: '#two-process', ease: 'power1' })
				// gsap.to('#three-hero', { duration: 1, x: 0, y: '2.5rem', fill: "#0013FF", morphSVG: '#three-process', ease: 'power1' })
				// gsap.to('#four-hero', { duration: 1, x: 0, y: '2.5rem', fill: "#00FFFF", morphSVG: '#four-process', ease: 'power1' })
				gsap.to(animItems, { y: 0, autoAlpha: 1, stagger: 0.07 });
				backgroundSvg.classList.add('ensuring')
			},
			onLeave: () => {
				backgroundSvg.classList.remove('ensuring')
			},
			onEnterBack: () => {
				// gsap.to('#one-hero', { duration: 1, x: 0, y: 0, fill: "#8349FF", morphSVG: '#one-process', ease: 'power1' })
				// gsap.to('#two-hero', { duration: 1, x: '5rem', y: '1rem', fill: "#FF0095", morphSVG: '#two-process', ease: 'power1' })
				// gsap.to('#three-hero', { duration: 1, x: 0, y: '2.5rem', fill: "#0013FF", morphSVG: '#three-process', ease: 'power1' })
				// gsap.to('#four-hero', { duration: 1, x: 0, y: '2.5rem', fill: "#00FFFF", morphSVG: '#four-process', ease: 'power1' })
				backgroundSvg.classList.add('ensuring')
			},
			onLeaveBack: () => {
				backgroundSvg.classList.remove('ensuring')
			}
		})
	}


	setTimeout(() => {
		inviewCore()
	}, 4000);

	//window on top, after page is loaded
	gsap.to(window, { duration: 0.1, scrollTo: 0, ease: 'power2', delay: 1 });

	// let lang

	// // language.js
	// lang = {
	// 	'en': {
	// 		':heading': 'Javascript Language Selector',
	// 		':h2': 'This is the sub heading',
	// 		':first:p': "Hey! this is the javascript language selector",
	// 		':english': 'English',
	// 		':russian': 'RU',
	// 		':portuguese': 'Portuguese',
	// 		':choose': 'Choose the language',
	// 	},

	// 	// 'pt': {
	// 	// ':heading': 'Seletor de Idiomas Javascript',
	// 	// ':h2': 'Este é o subtítulo',
	// 	// ':first:p': "Ei! este é o seletor de idioma javascript",
	// 	// ':english': 'English',
	// 	// ':urdu': 'Urdu',
	// 	// ':portuguese': 'Portuguese',
	// 	// ':choose': 'Escolha o idioma'
	// 	// },

	// 	'ru': {
	// 		':heading': 'Селектор языка Javascript',
	// 		':h2': 'Включение',
	// 		':first:p': "Привет! это селектор языка javascript",
	// 		':english': 'EN',
	// 		':russian': 'RU',
	// 		':portuguese': 'Portuguese',
	// 		':choose': 'Выберите язык'
	// 	}
	// };
	// var l = new LanguageSelector();
	// $(document).on("change", "#langSelector", function () {
	// 	var s = $(this).children("option:selected").val();
	// 	l.setLang(s);
	// 	window.location = "index.html";
	// });
	// l.parse();

})
