let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item-4');
const content2 = document.querySelector('.content2');
const span2 = document.getElementById('span2');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlides() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  changeSlide();
}

function changeSlide() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[slideIndex].style.display = 'block';

  const currentSlide = slides[slideIndex];
  const backgroundColor = currentSlide.dataset.background;
  const textColor = currentSlide.dataset.color;

  content2.style.background = backgroundColor;
  content2.style.color = textColor;
  span2.style.color = textColor;
}

function navigateSlide(direction) {
  if (direction === 'prev') {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  } else if (direction === 'next') {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  }
  changeSlide();
}

function openImageModal(imgElement) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('img');
  modalContent.src = imgElement.src;
  modalContent.alt = imgElement.alt;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  modal.addEventListener('click', () => {
    modal.remove();
  });
}

// Iniciar o carrossel
showSlides();
setInterval(showSlides, 4000); // Troca de slide a cada 4 segundos (4000 milissegundos)

// Event listeners para mudança de slide
prevButton.addEventListener('click', () => navigateSlide('prev'));
nextButton.addEventListener('click', () => navigateSlide('next'));
