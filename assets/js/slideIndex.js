// Seleciona os elementos do carrossel
const slides = document.querySelectorAll('.carousel-item-4');
const carouselList = document.querySelector('.carousel-list');
const thumbnailsList = document.querySelector('.thumbnails');
const content2 = document.querySelector('.content2'); // Elemento onde será aplicado o background
const span2 = document.getElementById('span2'); // Span para mudar a cor do texto
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const modalContainer = document.querySelector('.modal-container');

let slideIndex = 0;
let intervalId = null;

// Função para avançar para o próximo slide
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length; // Avança para o próximo slide circularmente
  changeSlide();
}

// Função para retroceder para o slide anterior
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Retrocede para o slide anterior circularmente
  changeSlide();
}

// Função para mostrar o slide atual
function changeSlide() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
      content2.style.background = slide.dataset.color; // Define o background com base no atributo data-color
      span2.style.color = slide.dataset.textColor; // Define a cor do texto com base no atributo data-textColor
    } else {
      slide.style.display = 'none';
    }
  });
}

// Inicia o carrossel automaticamente
// Função para iniciar o carrossel automaticamente
function startCarousel() {
  intervalId = setInterval(() => {
    nextSlide();
    if (currentSlideIndex >= slides.length - 3) {
      currentSlideIndex = 0; // Reinicia o carrossel quando atinge o último slide
    }
  }, 7000); // Intervalo de troca de slides ajustado para 7 segundos (7000 milissegundos)
}

// Pausa o carrossel quando o usuário interagir com ele diretamente
function stopCarousel() {
  clearInterval(intervalId);
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
    prevSlide();
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
  const modalContent = document.createElement('img');
  modalContent.src = imgElement.src;
  modalContent.alt = imgElement.alt;

  modalContainer.innerHTML = ''; // Limpa o conteúdo anterior do modal
  modalContainer.appendChild(modalContent);

  modalContainer.style.display = 'block'; // Exibe o modal
}

// Event listener para fechar o modal ao clicar fora da imagem
modalContainer.addEventListener('click', () => {
  modalContainer.style.display = 'none'; // Esconde o modal ao clicar fora da imagem
});

// Função para animar o scroll das miniaturas de acordo com o scroll da página
function animateThumbnailsScroll() {
  const thumbnails = document.querySelector('.thumbnails');
  const scrollPosition = window.scrollY;
  thumbnails.scrollLeft = scrollPosition / 5; // Ajuste a sensibilidade de acordo com a velocidade desejada
}

// Adiciona um listener de scroll à página
window.addEventListener('scroll', animateThumbnailsScroll);

// Chama a função uma vez ao carregar a página para ajustar as miniaturas
document.addEventListener('DOMContentLoaded', animateThumbnailsScroll);

// Chama a função para iniciar o carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  changeSlide(); // Mostra o primeiro slide
  startCarousel(); // Inicia o carrossel
});

// Exemplo de integração com API de localização para mostrar a loja mais próxima
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showNearestStore);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showNearestStore(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  // Integração com API de mapas para mostrar a loja mais próxima
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  // Exemplo: chamar uma função para calcular a loja mais próxima com base nas coordenadas
}

// Exemplo de uso do GSAP para animar elementos
gsap.from('.textBox', { duration: 1, opacity: 0, y: 50, ease: 'power2.inOut' });

// Exemplo simplificado para integração de AR.js (Realidade Aumentada)
// Este trecho requer configuração adicional e um ambiente compatível com AR.js

// Importando AR.js
import 'https://cdn.jsdelivr.net/npm/@ijsto/vue-ar@0.0.0/dist/vue-ar.min.js';

// Configuração básica de AR.js
const ARjs = new Vue({
  el: '#AR-container',
  data: {
    ARjsOptions: {
      sourceType: 'video',
      sourceUrl: './assets/videos/AR-video.mp4',
      sourceSize: 500,
      markerType: 'pattern',
      markerUrl: './assets/pattern-marker/pattern-marker.patt',
    },
  },
});

// Chamada para iniciar a função de AR.js
ARjs.start();
