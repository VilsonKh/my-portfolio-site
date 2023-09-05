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
	console.log("start");
	let i = 1;
	setInterval(() => {
		greetingTag.textContent = greetings[i];
		greetingTag.innerHTML = greetingTag.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
		animateGreetings();
		if (i < greetings.length - 1) {
			i++;
		} else {
			i = 0;
		}
	}, 2000);
}

window.addEventListener("load", changeGreeting);

function animateGreetings() {
	anime({
		targets: ".greeting__difLang .letter",
		rotateY: [-90, 0],
		duration: 2000,
		delay: (el, i) => 45 * i,
		// loop: true,
	});
	// anime({
	// 	targets: ".greeting__difLand",
	// 	opacity: 0,
	// 	duration: 2000,
	// 	easing: "easeOutExpo",
	// 	delay: 1000,
	// });
}

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
