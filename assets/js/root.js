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
// review silder
new Swiper(".review-swiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 14,
    },
    640: {
      slidesPerView: 2.5,
    },

    1024: {
      slidesPerView: 3,
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// here add product details swiper js
new Swiper(".product-siwper", {
	spaceBetween: 10,
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
      spaceBetween: 20,
		},
		375: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		640: {
			slidesPerView: 3.5,
		},

		1024: {
			slidesPerView: 4,
		},
		1260: {
			slidesPerView: 4.5,
			spaceBetween: 40,
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



// price range
function priceslider(sliderId, minId, maxId) {
  let sliderElement = document.getElementById(sliderId);

  if (sliderElement) {
    let formatForSlider = {
      from: function (formattedValue) {
        return Number(formattedValue);
      },
      to: function (numericValue) {
        return Math.round(numericValue);
      },
    };

    noUiSlider.create(sliderElement, {
      start: [0, 100.0],
      connect: true,
      format: formatForSlider,
      range: {
        min: 0.0,
        max: 100.0,
      },
    });

    let formatValues = [
      document.getElementById(minId),
      document.getElementById(maxId)
    ];

    sliderElement.noUiSlider.on("update", function (values, handle, unencoded) {
      formatValues[0].innerHTML = "Price: " + "$" + values[0];
      formatValues[1].innerHTML = "$" + values[1];
    });
  }
}
priceslider("slider-tooltips-1", "slider-margin-value-min-1", "slider-margin-value-max-1");
priceslider("slider-tooltips-2", "slider-margin-value-min-2", "slider-margin-value-max-2");


// here incriment and dicriment counter 


function initializeCounter(counterElement) {
  let count = 0;
  const counterDisplay = counterElement.querySelector('.counter-display');
  const plusButton = counterElement.querySelector('.plus');
  const minusButton = counterElement.querySelector('.minus');

  plusButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
  });

  minusButton.addEventListener('click', () => {
    count--;
    counterDisplay.textContent = count;
  });
}

document.querySelectorAll('.counter-increment').forEach(initializeCounter);







function createModal(id) {
  const template = document.getElementById('modal-template').content.cloneNode(true);
  const modal = template.querySelector('.modal-main');
  modal.id = id;
  
  modal.querySelector('.hideModal').addEventListener('click', () => {
    modal.classList.remove('open');
  });



  return modal;
}



function initializeModals() {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.appendChild(createModal('modal1'));
  modalContainer.appendChild(createModal('modal2'));
  modalContainer.appendChild(createModal('modal3'));
  modalContainer.appendChild(createModal('modal4'));
  modalContainer.appendChild(createModal('modal5'));// Add more modals as needed
  


  document.querySelectorAll('.showModal').forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-target');
      const modal = document.getElementById(modalId);
      modal.classList.add('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeModals);




// here design filter
