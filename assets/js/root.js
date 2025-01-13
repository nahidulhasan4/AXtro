// Siwper JS
new Swiper(".offer-swiper", {
	spaceBetween: 30,
	slidesPerView: 4,
	loop: true,
	speed: 1000,

	navigation: {
		nextEl: ".btn-next",
		prevEl: ".btn-pav",
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		375: {
			slidesPerView: 1,
			spaceBetween: 14,
		},
		640: {
			slidesPerView: 2,
		},

		1024: {
			slidesPerView: 3.5,
		},
		1260: {
			slidesPerView: 4,
			spaceBetween: 43,
		},
	},
});
new Swiper(".offer-swiper1", {
	spaceBetween: 30,
	slidesPerView: 4,
	loop: true,
	speed: 1000,

	navigation: {
		nextEl: ".btn-next1",
		prevEl: ".btn-pav1",
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		375: {
			slidesPerView: 1,
			spaceBetween: 14,
		},
		640: {
			slidesPerView: 2,
		},

		1024: {
			slidesPerView: 3.5,
		},
		1260: {
			slidesPerView: 4,
			spaceBetween: 43,
		},
	},
});

//   const swiper = new Swiper('.swiper', {
//     slidesPerView: 4,
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'fraction',
//     },
//     navigation: {
//       nextEl: ".btn-next",
//       prevEl: ".btn-prev",
//     },
//     virtual: {
//       slides: (function () {
//         const slides = [];
//         for (var i = 0; i < 600; i += 1) {
//           slides.push('Slide ' + (i + 1));
//         }
//         return slides;
//       })(),
//     },
//   });