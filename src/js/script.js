document.addEventListener('DOMContentLoaded', function() {
        const items = document.querySelectorAll('.flash-sales__item');
        let currentIndex = 0;

        function showNextItem() {

            items[currentIndex].classList.remove('active');

            // Move para o próximo item
            currentIndex = (currentIndex + 1) % items.length;


            items[currentIndex].classList.add('active');
        }

   
        if (items.length > 0) {
            items[0].classList.add('active');
        }

        // Altera a cada 3 minutos (180000 ms)
        setInterval(showNextItem, 3000);
    });





let index = 0;

function showSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }
    const offset = -index * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    index++;
    showSlide();
}

function prevSlide() {
    index--;
    showSlide();
}


setInterval(nextSlide, 15000); // Change slide every 3 seconds


document.addEventListener('DOMContentLoaded', () => {
    const inner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let index = 0;

    function updateCarousel() {
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        if (index >= totalItems) index = 0;
        if (index < 0) index = totalItems - 1;
        inner.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        index--;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index++;
        updateCarousel();
    });

    // Automatic slide every 5 seconds
    setInterval(() => {
        index++;
        updateCarousel();
    }, 5000);
});
let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');
const totalItems = items.length;

function setActive(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        item.style.opacity = '0.5'; // Opacidade padrão para não ativos
    });

    items[index].classList.add('active');
    items[index].style.opacity = '1'; // Opacidade total para o item ativo

    // Scroll para o item ativo
    const sliderInner = document.querySelector('.slider-inner');
    const offset = items[index].offsetLeft - (sliderInner.clientWidth / 2) + (items[index].clientWidth / 2);
    sliderInner.style.transform = `translateX(-${offset}px)`; // Translada o carrossel
}

function moveSlider(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems; // Calcula o novo índice
    setActive(currentIndex); // Atualiza o item ativo
}

// Função para mover para frente ou para trás ao clicar na imagem
function handleItemClick(index) {
    if (index === currentIndex) {
        moveSlider(1); // Move para o próximo item se a imagem ativa for clicada
    } else {
        currentIndex = index; // Define o índice atual para o clicado
        setActive(currentIndex); // Atualiza o item ativo
    }
}

// Inicializa o primeiro item como ativo
setActive(currentIndex);

// Adiciona eventos de clique em cada item
items.forEach((item, index) => {
    item.onclick = () => handleItemClick(index);
});

