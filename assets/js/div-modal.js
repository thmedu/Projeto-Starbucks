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

// Função para rolar suavemente para o topo da página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Seleciona os elementos do carrossel
const slides = document.querySelectorAll('.carousel-item-4');
const content2 = document.querySelector('.content2');
const span2 = document.getElementById('span2');

let slideIndex = 0;

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

// Função para navegar pelos slides
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

// Inicia o carrossel automaticamente
function startCarousel() {
  setInterval(nextSlide, 4000); // Troca de slide a cada 4 segundos (4000 milissegundos)
}

// Pausa o carrossel
function stopCarousel() {
  clearInterval(intervalId);
}

// Event listeners para controlar o carrossel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (prevButton && nextButton) {
  prevButton.addEventListener('click', () => {
    stopCarousel();
    navigateSlide('prev');
  });
  nextButton.addEventListener('click', () => {
    stopCarousel();
    navigateSlide('next');
  });
}

// Inicia o carrossel automaticamente ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  startCarousel();
});

// Seleciona os elementos da galeria de miniaturas e adiciona listeners
const thumbnails = document.querySelectorAll('.thumbnails li');
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imgElement = thumbnail.querySelector('img');
    openImageModal(imgElement);
  });
});

// Mostrar o botão de voltar ao topo quando o usuário rolar a página
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll suave para o topo do documento quando o botão for clicado
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Função para alternar o menu responsivo
function toggleMenu() {
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}

// Função para verificar a posição da página e mostrar/ocultar o rodapé
function checkScrollPosition() {
  const footer = document.querySelector('.footer');
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  if (scrollPosition >= pageHeight) {
    footer.classList.add('active');
  } else {
    footer.classList.remove('active');
  }
}

// Adicionar evento de scroll para verificar a posição da página
window.addEventListener('scroll', checkScrollPosition);

// Verificar a visibilidade do rodapé assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');

  // Função para verificar se o usuário está no final da página
  function isUserAtBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - footer.offsetHeight;
  }

  // Função para exibir ou ocultar o rodapé baseado na posição do scroll
  function toggleFooterVisibility() {
    if (isUserAtBottom()) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  }

  // Adicionar um listener de scroll para verificar a posição do scroll
  window.addEventListener('scroll', toggleFooterVisibility);

  // Verificar a visibilidade do rodapé assim que a página carregar
  toggleFooterVisibility();
});
