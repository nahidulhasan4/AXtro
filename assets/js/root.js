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
// new Swiper(".hero-swiper", {
// 	spaceBetween: 24,
// 	slidesPerView: 1,
// 	loop: true,
// 	speed: 1000,
// 	autoplay: {
// 		delay: 2500,
// 		disableOnInteraction: false,
// 	},
// 	navigation: {
// 		nextEl: ".btn-next2",
// 		prevEl: ".btn-prev2",
// 	},


// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 		},
// 		425: {
// 			slidesPerView: 1,
// 		},
// 		640: {
// 			slidesPerView: 1,
// 		},

// 		1024: {
// 			slidesPerView: 1,
// 		},
// 		1200: {
// 			slidesPerView: 1,
// 		},
// 	},
// });

window.onscroll = function () {
	var header = document.querySelector(".header");
	if (window.scrollY > 0) {
	  header.classList.add("sticky");
	 
	} else {
	  header.classList.remove("sticky");
	
	}
  };
  // here input filed js code
  document.querySelectorAll(".hero-date").forEach((item) => {
	item.addEventListener("focus", function () {
	  this.showPicker();
	});
  });


  