// Seleciona os elementos do carrossel
// Certifique-se de usar let ou const para evitar redeclaração
let slides = document.querySelectorAll('.carousel-item-4');
const carouselList = document.querySelector('.carousel-list');
const thumbnailsList = document.querySelector('.thumbnails');
const span2 = document.getElementById('span2');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;
let intervalId = null;

// Função para avançar para o próximo slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  changeSlide();
}

// Função para mostrar o slide atual
function changeSlide() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
      const backgroundColor = slide.dataset.color;
      content2.style.background = backgroundColor;
      span2.style.color = slide.dataset.textColor;
    } else {
      slide.style.display = 'none';
    }
  });
}

// Inicia o carrossel automaticamente
function startCarousel() {
  intervalId = setInterval(nextSlide, 1100); // Troca de slide a cada 4 segundos (4000 milissegundos)
}

// Pausa o carrossel
function stopCarousel() {
  clearInterval(intervalId);
}

// Event listeners para controlar o carrossel
carouselList.addEventListener('mouseenter', stopCarousel);
carouselList.addEventListener('mouseleave', startCarousel);

// Navegação manual pelos slides
if (prevButton && nextButton) {
  prevButton.addEventListener('click', () => {
    stopCarousel();
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    changeSlide();
  });
  nextButton.addEventListener('click', () => {
    stopCarousel();
    nextSlide();
  });
}

// Event listener para abrir o modal com a imagem
thumbnailsList.addEventListener('click', (event) => {
  const imgElement = event.target.closest('img');
  if (imgElement) {
    openImageModal(imgElement);
  }
});

// Função para abrir o modal com a imagem
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

// Função para animar o scroll das miniaturas de acordo com o scroll da página
function animateThumbnailsScroll() {
  const thumbnails = document.querySelector('.thumbnails');
  const scrollPosition = window.scrollY;
  const thumbnailsScrollLeft = scrollPosition / 5; // Ajuste a sensibilidade de acordo com a velocidade desejada

  requestAnimationFrame(() => {
    thumbnails.scrollLeft = thumbnailsScrollLeft;
  });
}

// Adiciona um listener de scroll à página
window.addEventListener('scroll', animateThumbnailsScroll);

// Chama a função uma vez ao carregar a página para ajustar as miniaturas
document.addEventListener('DOMContentLoaded', animateThumbnailsScroll);

// Chama a função para iniciar o carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', startCarousel);
// Função para mostrar o slide atual
function changeSlide() {
  // Verifica se há apenas um slide
  if (slides.length === 1) {
    const clonedSlide = slides[0].cloneNode(true); // Clona o slide existente
    carouselList.appendChild(clonedSlide); // Adiciona o clone ao final da lista
  }

  // Itera sobre os slides para mostrar ou ocultar conforme necessário
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
      const backgroundColor = slide.dataset.color;
      content2.style.background = backgroundColor;
      span2.style.color = slide.dataset.textColor;
    } else {
      slide.style.display = 'none';
    }
  });
}

// Chama a função para iniciar o carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  changeSlide(); // Chamada inicial para mostrar o primeiro slide
  startCarousel(); // Inicia o carrossel
});
