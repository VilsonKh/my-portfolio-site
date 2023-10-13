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
});

typed.stop();

let typing = false;
const assistantToggler = () => {
	if (window.scrollY > window.innerHeight) {
		assistant.classList.add("active");
		if (!typing) {
			typed.start();
			console.log("start");
		}
		typing = true;
	} else {
		assistant.classList.remove("active");
		typing = false;
		typed.stop();
		console.log("stop");
	}
};
window.addEventListener("scroll", assistantToggler);

//diagonal rotate degrees
// const headerDiagonal = document.querySelector(".aside-header-diagonal");

// if (window.screen.width <= 500 && window.screen.width > 374) {
// 	let calcDegree = null;
// 	if (window.screen.height < 700) {
// 		calcDegree = 24.4 + 7.4 * ((window.screen.width - 375) / (375 - 500));
// 	} else if (window.screen.height <= 812) {
// 		calcDegree = 29.4 + 8.4 * ((window.screen.width - 375) / (375 - 500));
// 	} else if (window.screen.height <= 896) {
// 		calcDegree = 32.4 + 7.4 * ((window.screen.width - 375) / (375 - 500));
// 	} else if (window.screen.height <= 926) {
// 		calcDegree = 33.4 + 7.4 * ((window.screen.width - 375) / (375 - 500));
// 	}
// 	headerDiagonal.style.transform = `rotate(${calcDegree}deg)`;
// }

// if (window.screen.width > 500 && window.screen.width <= 643) {
// 	const calcDegree = 25 + 4 * ((window.screen.width - 500) / (500 - 643));
// 	headerDiagonal.style.transform = `rotate(${calcDegree}deg)`;
// }

// if (window.screen.width > 643 && window.screen.width < 768) {
// 	const calcDegree = 21 + 3 * ((window.screen.width - 643) / (643 - 768));
// 	headerDiagonal.style.transform = `rotate(${calcDegree}deg)`;
// }

// const aboutDiagonal = document.querySelector(".aside-about-diagonal");

// if (window.screen.width > 767 && window.screen.width < 1024) {
// 	const calcDegree = 220.7 + 13.75 * ((window.screen.width - 767) / (1024 - 767));
// 	aboutDiagonal.style.transform = `rotate(${calcDegree}deg)`;
// }

const aboutHorizontalDiagonal = document.querySelector(".aside-about-diagonal");
const aboutAdditionalLine = document.querySelector(".aside-about__additional");
const mainContainer = document.querySelector("main");
const aboutSection = document.querySelector(".about");
const aboutSectionPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
const aboutHorizontalPosition = aboutAdditionalLine.getBoundingClientRect().top + window.scrollY;
const aboutHorizontalInitialHeight = aboutAdditionalLine.getBoundingClientRect().height;
console.log(aboutSectionPosition, aboutHorizontalPosition, aboutHorizontalInitialHeight);
const aboutHorizontalHeight = aboutHorizontalPosition + aboutHorizontalInitialHeight * 4 - aboutSectionPosition;
aboutAdditionalLine.style.height = aboutHorizontalHeight + "px";

if (window.screen.width > 767 && window.screen.width < 1439) {
	aboutHorizontalDiagonal.style.width = `${aboutHorizontalDiagonal.getBoundingClientRect().x + aboutHorizontalDiagonal.getBoundingClientRect().width}px`;
} else {
	const getHorizontalLineWidth = `${aboutHorizontalDiagonal.getBoundingClientRect().x - mainContainer.getBoundingClientRect().x + aboutHorizontalDiagonal.getBoundingClientRect().width}`;
	aboutHorizontalDiagonal.style.width = getHorizontalLineWidth + "px";
}

const currentYear = document.querySelector(".currentYear");

currentYear.textContent = new Date().getFullYear();

new Swiper(".swiper", {
	slidesPerView: 2,
	autoplay: {
		delay: 2000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},

	breakpoints: {
		375: {
			sledesPerView: 2,
		},
		600: {
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

const disableAssistant = document.querySelector(".burger__removeAssist");
disableAssistant.addEventListener("click", () => {
	disableAssistant.classList.toggle("disabled");
	if (disableAssistant.classList.contains("disabled")) {
		window.removeEventListener("scroll", assistantToggler);
	} else {
		window.addEventListener("scroll", assistantToggler);
	}
});

// const changeLang = document.querySelector(".changeLang__buttons");

// changeLang.addEventListener("click", (e) => {
// 	if (e.target.nodeName === "BUTTON") {
// 		const buttons = changeLang.querySelectorAll("button");
// 		buttons.forEach((button) => {
// 			button.classList.remove("active");
// 		});

// 		e.target.classList.add("active");
// 	}
// });
