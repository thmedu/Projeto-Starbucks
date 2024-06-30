// Função para alterar a imagem principal e a cor do círculo
const changeImageAndCircleColor = (imgSrc, bgColor) => {
  document.querySelector('.starbucks').src = imgSrc;
  document.querySelector('.circle').style.background = bgColor;
}

// Funções para manipular as cores e imagens ao clicar nas miniaturas
const thumbnailClickHandler = (elementId, textColor, socialBgColor, learnMoreBgColor, imgSrc, circleBgColor) => {
  document.getElementById("output").style.color = textColor;
  document.getElementById("social").style.background = socialBgColor;
  document.getElementById("learnmore").style.background = learnMoreBgColor;
  changeImageAndCircleColor(imgSrc, circleBgColor);
}

document.getElementById("changeCreme").addEventListener('click', function() {
  thumbnailClickHandler('changeCreme', '#e2ba48', '#b36b23', '#b36b23', "./assets/img/cafe-canudo-reto/cafe-laranja.png", '#b36b23');
});

document.getElementById("changeGrozelia").addEventListener('click', function() {
  thumbnailClickHandler('changeGrozelia', '#ce4326', '#661c17', '#661c17', "./assets/img/cafe-canudo-reto/café groselha.png", '#661c17');
});

document.getElementById("changeRosa").addEventListener('click', function() {
  thumbnailClickHandler('changeRosa', '#e78185', '#901f1b', '#e78185', "./assets/img/cafe-canudo-reto/cafe-rosa.png", '#901f1b');
});

document.getElementById("changeAcai").addEventListener('click', function() {
  thumbnailClickHandler('changeAcai', '#eab052', '#b0bea4', '#eab052', "./assets/img/cafe-canudo-reto/cafe-verde3.png", '#b0bea4');
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

// Seleciona os elementos do carrossel
const carousel = document.querySelector('.carousel');
const list = document.querySelector('.carousel-list');
const items = document.querySelectorAll('.carousel-item');

// Configurações do carrossel
const interval = 5000; // Intervalo em milissegundos (5 segundos)

let currentIndex = 0;
let timer; // Variável para armazenar o timer do setInterval

// Função para avançar para o próximo slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Função para mostrar o slide atual
function showSlide(index) {
  // Remove a classe 'active' de todos os itens
  items.forEach(item => {
    item.classList.remove('active');
  });

  // Adiciona a classe 'active' ao item atual
  items[index].classList.add('active');

  // Calcula o deslocamento para exibir o slide atual
  const offset = -index * items[0].offsetWidth;
  list.style.transform = `translateX(${offset}px)`;
}

// Função para iniciar o carrossel automático
function startCarousel() {
  timer = setInterval(nextSlide, interval);
}

// Função para parar o carrossel automático
function stopCarousel() {
  clearInterval(timer);
}

// Inicia o carrossel automaticamente
startCarousel();

// Event listener para parar o carrossel quando o mouse estiver sobre ele
carousel.addEventListener('mouseenter', stopCarousel);

// Event listener para reiniciar o carrossel quando o mouse sair dele
carousel.addEventListener('mouseleave', startCarousel);

// Função para alternar o menu
function toggleMenu() {
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}

// Função para verificar a posição da página
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
document.addEventListener('DOMContentLoaded', function() {
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
