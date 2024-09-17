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
