document.addEventListener('DOMContentLoaded', function () {
    // Elementos del DOM
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const gameImage = document.getElementById('gameImage');
    const gotoPage2Button = document.getElementById('gotoPage2');
    const gotoPage1Button = document.getElementById('gotoPage1');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Variables de estado
    let currentIndex = 0;
    const gameImages = [
        'images/game1.jpg',
        'images/game2.jpg',
        'images/game3.jpg',
        'images/game4.jpg'
    ];

    // Función para mostrar una página y ocultar la otra
    function showPage(pageToShow, pageToHide) {
        pageToHide.classList.remove('active');
        pageToShow.classList.add('active');
    }

    // Función para mostrar la imagen actual
    function showImage(index) {
        gameImage.src = gameImages[index];
    }

    // Mostrar la primera imagen al cargar la página de carrusel
    showImage(currentIndex);

    // Evento para mostrar la página principal
    gotoPage1Button.addEventListener('click', function () {
        showPage(page1, page2);
    });

    // Evento para mostrar la página del carrusel
    gotoPage2Button.addEventListener('click', function () {
        showPage(page2, page1);
    });

    // Evento para cambiar a la imagen anterior
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + gameImages.length) % gameImages.length;
        showImage(currentIndex);
    });

    // Evento para cambiar a la siguiente imagen
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % gameImages.length;
        showImage(currentIndex);
    });
});
