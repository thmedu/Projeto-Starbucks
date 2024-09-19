let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');
const totalItems = items.length;

function setActive(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        } else {
            item.style.opacity = '0.1';
            item.style.transform = 'scale(0.8)';
        }
    });

    const sliderInner = document.querySelector('.slider-inner');
    const offset = index * (items[index].clientWidth + 20) - (sliderInner.clientWidth / 2 - items[index].clientWidth / 2);
    sliderInner.style.transform = `translateX(-${offset}px)`;
}

function moveSlider(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    setActive(currentIndex);
}

items.forEach((item, index) => {
    item.onclick = () => {
        if (index !== currentIndex) {
            currentIndex = index;
            setActive(currentIndex);
        } else {
            moveSlider(1);
        }
    };
});

// Inicializa o primeiro item como ativo
setActive(currentIndex);

// Navegação por teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveSlider(1);
    } else if (event.key === 'ArrowLeft') {
        moveSlider(-1);
    }
});
