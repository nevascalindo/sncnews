    let currentIndex = 0;

    function showImage(index) {
        const images = document.querySelectorAll('.carousel-images img');
        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => showImage(currentIndex + 1));
    document.querySelector('.prev').addEventListener('click', () => showImage(currentIndex - 1));

    // Inicializa o carrossel
    showImage(currentIndex);

