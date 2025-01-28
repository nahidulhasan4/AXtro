

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
  
     initializeCounter(modal.querySelector('.counter-increment'));
  
    return modal;
  }
  
  
  
  function initializeModals() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.appendChild(createModal('modal1'));
    modalContainer.appendChild(createModal('modal2'));
    modalContainer.appendChild(createModal('modal3'));
    modalContainer.appendChild(createModal('modal4'));
    modalContainer.appendChild(createModal('modal5'));
    modalContainer.appendChild(createModal('modal6')); 
    modalContainer.appendChild(createModal('modal7'));// Add more modals as needed
    
  
  
    document.querySelectorAll('.showModal').forEach(button => {
      button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        modal.classList.add('open');
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', initializeModals);