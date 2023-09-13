// interact('.draggable')
//   .draggable({
//     // enable inertial throwing
//     inertia: true,
//     autoScroll: true,
import anime from "../node_modules/animejs/lib/anime.es.js";
import { greetings } from "./const.js";

//     listeners: {
//       // call this function on every dragmove event
//       move: dragMoveListener,

//       // call this function on every dragend event
//       end (event) {
//         var textEl = event.target.querySelector('p')

//         textEl && (textEl.textContent =
//           'moved a distance of ' +
//           (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
//                      Math.pow(event.pageY - event.y0, 2) | 0))
//             .toFixed(2) + 'px')
//       }
//     }
//   })

function dragMoveListener(event) {
	var target = event.target;
	// keep the dragged position in the data-x/data-y attributes
	var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
	var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

	// translate the element
	target.style.transform = "translate(" + x + "px, " + y + "px)";

	// update the posiion attributes
	target.setAttribute("data-x", x);
	target.setAttribute("data-y", y);
}

let burgerButton = document.querySelector(".burger-header");
let burgerMenu = document.querySelector(".burger-menu__container");
let burgerClose = document.querySelector(".burger-menu__close");
const burgerIcon = document.querySelector(".burger-menu");

burgerIcon.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
});

burgerClose.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
});

const greetingTag = document.querySelector(".greeting__difLang");

function changeGreeting() {
	let i = 0;
	if (i === 0) {
		greetingTag.textContent = greetings[i];
		greetingTag.classList.add("animate-greeting");
	}

	setInterval(() => {
		greetingTag.textContent = greetings[i];
		const lettersHtml = greetingTag.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
		greetingTag.innerHTML = `<div class='letters'>${lettersHtml}</div><span class='cursor'></span>`;

		anime.timeline({ loop: false }).add({
			targets: ".greeting__difLang div > span",
			opacity: [{ value: [0, 0] }, { value: [1, 1] }],
			easing: "easeInOutQuad",
			duration: 1000,
			delay: (el, i) => 100 * (i + 1),
		});

		// greetingTag.style.width = `${greetings[i].length}ch`;
		// greetingTag.classList.add("animate-greeting");

		if (i < greetings.length - 1) {
			i++;
		} else {
			i = 0;
		}
	}, 4000);
	// greetingTag.classList.add("animate-greeting");
}

window.addEventListener("load", changeGreeting);

//diagonal rotate degrees
const headerDiagonal = document.querySelector(".aside-header-diagonal");

if (window.screen.width < 643) {
	const calcDegree = 31.4 + 13.4 * ((window.screen.width - 375) / (375 - 643));
	headerDiagonal.style.transform = `rotate(${calcDegree}deg)`;
}

if (window.screen.width > 643 && window.screen.width < 768) {
	const calcDegree = 18 + 2 * ((window.screen.width - 643) / (643 - 768));
	headerDiagonal.style.transform = `rotate(${calcDegree}deg)`;
}

const aboutDiagonal = document.querySelector(".aside-about-diagonal");

if (window.screen.width > 767 && window.screen.width < 1024) {
	const calcDegree = 220 + 14 * ((window.screen.width - 767) / (1024 - 767));
	aboutDiagonal.style.transform = `rotate(${calcDegree}deg)`;
}

greetingTag.addEventListener("animationend", () => {
	greetingTag.classList.remove("animate-greeting");
});

//canvas
let canvas = document.getElementById("noisy-canvas"),
	ctx = canvas.getContext("2d");
function main() {
	window.addEventListener("resize", updateCanvasSize);
	updateCanvasSize();
	render();
}
function getRandom() {
	return Math.random() * 255 - 140;
}

function render() {
	let imageData = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
	for (let i = 0; i < imageData.data.length; i += 4) {
		const color = getRandom();
		imageData.data[i] = color;
		imageData.data[i + 1] = color;
		imageData.data[i + 2] = color;
		imageData.data[i + 3] = 255;
	}
	ctx.putImageData(imageData, 0, 0);
	requestAnimationFrame(render);
}
function updateCanvasSize() {
	ctx.canvas.height = canvas.offsetHeight;
	ctx.canvas.width = canvas.offsetWidth;
}
main();

function animateGreetings() {
	// anime({
	// 	targets: ".greeting__difLang .letter",
	// 	opacity: [0, 1],
	// 	duration: 2000,
	// 	delay: (el, i) => 45 * i,
	// 	// loop: true,
	// });
	// anime({
	// 	targets: ".greeting__difLang",
	// 	width: [0, 100],
	// 	duration: 2000,
	// });
}

const currentYear = document.querySelector(".currentYear");

currentYear.textContent = new Date().getFullYear();

new Swiper(".swiper", {
	slidesPerView: 2,
	breakpoints: {
		375: {
			sledesPerView: 2,
		},
		690: {
			slidesPerView: 3,
		},
		956: {
			slidesPerView: 5,
		},
	},
});
