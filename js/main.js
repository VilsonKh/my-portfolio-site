// interact('.draggable')
//   .draggable({
//     // enable inertial throwing
//     inertia: true,
//     autoScroll: true,

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
let BurgerClose = document.querySelector(".burger-menu__close");

// document.addEventListener("click", () => {
// 	burgerMenu.classList.toggle("active");
// });

new Swiper(".swiper", {
	slidesPerView: 2,
	breakpoints: {
		767: {
			slidesPerView: 3,
			grid: {
				rows: 2,
			},
		},
		1440: {
			slidesPerView: 4,
			grid: {
				rows: 2,
			},
		},
		1920: {
			slidesPerView: 5,
			grid: {
				rows: 2,
			},
		},
	},
	spaceBetween: 20,
	grid: {
		rows: 2,
	},
});
