import { greetings } from "./const.js";

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
	const typed = new Typed(".greeting__difLang", {
		strings: [...greetings],
		stringElement: null,
		loop: true,
		loopCount: Infinity,
		typeSpeed: 200,
		backSpeed: 100,
		smartBackspace: true,
		backDelay: 4000,
		startDelay: 500,
		attr: null,
		contentType: "html",
	});
}

window.addEventListener("load", changeGreeting);

const assistant = document.querySelector(".assistant");

const typed = new Typed(".assistant__text", {
	strings: ["Здесь будут шутки и подсказки", "Здесь будут еще подсказки", "Здесь будут подсказки и шутки", "Здесь будут еще другие шутки и подсказки"],
	stringElement: null,
	contentType: "html",
	loop: true,
	loopCounter: Infinity,
	typeSpeed: 50,
	backSpeed: 20,
	smartBackspace: true,
	onStringTyped: () => (typing ? typed.start() : typed.stop()),
});

typed.stop();

let typing = false;
window.addEventListener("scroll", function (e) {
	if (this.window.scrollY > this.window.innerHeight) {
		assistant.classList.add("active");
		typed.start();
		typing = true;
	} else {
		assistant.classList.remove("active");
		typing = false;
	}
});

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
		767: {
			slidesPerView: 4,
		},
		956: {
			slidesPerView: 5,
		},
	},
});
