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

AOS.init({
	duration: 400,
});

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
	strings: [
		"Здесь будут шутки и подсказки",
		"Здесь будут еще подсказки",
		"Здесь будут подсказки и шутки",
		"Здесь будут еще другие шутки и подсказки",
	],
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
		}
		typing = true;
	} else {
		assistant.classList.remove("active");
		typing = false;
		typed.stop();
	}
};
window.addEventListener("scroll", assistantToggler);
const aboutHorizontalDiagonal = document.querySelector(".aside-about-diagonal");
const aboutAdditionalLine = document.querySelector(".aside-about__additional");
const mainContainer = document.querySelector("main");
const aboutSection = document.querySelector(".about");
const aboutSectionPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
const aboutHorizontalPosition = aboutAdditionalLine.getBoundingClientRect().top + window.scrollY;
const aboutHorizontalInitialHeight = aboutAdditionalLine.getBoundingClientRect().height;
const asideAbout = document.querySelector(".aside-about");
const aboutSectionHeight = aboutSection.clientHeight;

asideAbout.style.height = aboutSectionHeight + 100 + "px";
const firstSectionHeight = document.querySelector(".page").clientHeight;
const headerDiagonal = document.querySelector(".aside-header-diagonal");

headerDiagonal.style.top = firstSectionHeight - 30 + "px";

const aboutHorizontalHeight = aboutHorizontalPosition + aboutHorizontalInitialHeight * 4 - aboutSectionPosition;
aboutAdditionalLine.style.height = aboutHorizontalHeight + "px";

if (window.screen.width > 767 && window.screen.width < 1439) {
	aboutHorizontalDiagonal.style.width = `${
		aboutHorizontalDiagonal.getBoundingClientRect().x + aboutHorizontalDiagonal.getBoundingClientRect().width
	}px`;
} else {
	const getHorizontalLineWidth = `${
		aboutHorizontalDiagonal.getBoundingClientRect().x -
		mainContainer.getBoundingClientRect().x +
		aboutHorizontalDiagonal.getBoundingClientRect().width
	}`;
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

const interactiveButton = document.querySelector("#interactive");
const underConstructionPopup = document.querySelector(".first-screen__underConstruction");
interactiveButton.addEventListener("mouseover", () => {
	underConstructionPopup.classList.add("active");
});

interactiveButton.addEventListener("mouseout", () => {
	underConstructionPopup.classList.remove("active");
});

interactiveButton.addEventListener("click", () => {
	underConstructionPopup.classList.toggle("active");
});
