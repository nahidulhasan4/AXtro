// Siwper JS
new Swiper(".offer-swiper", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

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
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
    1260: {
      slidesPerView: 4,
      spaceBetween: 43,
    },
  },
});

//
new Swiper(".offer-swiper1", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

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
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
    1260: {
      slidesPerView: 4,
      spaceBetween: 43,
    },
  },
});
// hero benner slider
new Swiper(".hero-swiper", {
  spaceBetween: 24,
  slidesPerView: 1,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".btn-next2",
    prevEl: ".btn-prev2",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
  },
});

// here add product details swiper js
new Swiper(".product-siwper", {
	spaceBetween: 0,
	slidesPerView: 4,
	loop: true,
	speed: 1000,

	// navigation: {
	// 	nextEl: ".btn-next1",
	// 	prevEl: ".btn-prev1",
	// },

	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		375: {
			slidesPerView: 2,
			spaceBetween: 0,
		},
		640: {
			slidesPerView: 3.5,
		},

		1024: {
			slidesPerView: 4,
		},
		1260: {
			slidesPerView: 4.5,
			spaceBetween: 10,
		},
	},
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const counterBox = document.querySelector(".counter-box");

  const options = {
    root: null,
    threshold: 0.5, // 50% of the element is visible
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  observer.observe(counterBox);

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          const target = +counter.getAttribute("data-target");
          const duration = 2000; // Animation duration in milliseconds (2 seconds)
          counterUp(counter, target, duration);
        });
        observer.unobserve(counterBox); // Stop observing after the animation runs
      }
    });
  }

  function counterUp(element, target, duration) {
    let start = 0;
    let current = start;
    const increment = target / (duration / 50); // 50ms interval for smoother animation

    function updateCounter() {
      current += increment;
      if (current < target) {
        element.innerText = Math.floor(current);
        setTimeout(updateCounter, 50);
      } else {
        element.innerText = target;
      }
    }

    updateCounter();
  }
});

window.onscroll = function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// price range
function priceslider() {
  if ($("#slider-tooltips").length > 0) {
      var tooltipSlider = document.getElementById("slider-tooltips");

      var formatForSlider = {
          from: function (formattedValue) {
              return Number(formattedValue);
          },
          to: function (numericValue) {
              return Math.round(numericValue);
          },
      };

      noUiSlider.create(tooltipSlider, {
          start: [18000, 50000.0],
          connect: true,
          format: formatForSlider,
          range: {
              min: 0.0,
              max: 60000.0,
          },
      });
      var formatValues = [document.getElementById("slider-margin-value-min"), document.getElementById("slider-margin-value-max")];
      tooltipSlider.noUiSlider.on("update", function (values, handle, unencoded) {
          formatValues[0].innerHTML = "Price: " + "$" + values[0];
          formatValues[1].innerHTML = "$" + values[1];
      });
  }
}
priceslider();

// here all product sclect dropDown menu js
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropdown button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};




// here input filed js code
//   function myFunction() {
// 	 let dropdownMenu = document.getElementById("dropdownMenu");
// 	 dropdownMenu.style.opacity = "1";
//       dropdownMenu.style.visibility = "visible";
// 	 console.log(dropdownMenu)

// 	}

//   menu.addEventListener("click", ()=>{

// 	 console.log("hello Nahid")
//   });
