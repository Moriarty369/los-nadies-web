//------------------------------------------ HEADER ANIMATIONS -----------------------------------------------------//

const video = document.getElementById('parallax-video');
let playRequested = false; // Variable para rastrear si se solicitó la reproducción
let allowScroll = false; // Variable para habilitar/deshabilitar el scroll

// Añade un evento para asegurarte de que el video esté cargado antes de ejecutar el código
video.addEventListener('loadedmetadata', function () {
    // Establece el video en pausa y con zoom máximo
    video.pause();
    video.style.transform = 'scale(10)';

    // Habilita el scroll solo cuando la escala vuelva a 1
    video.addEventListener('transitionend', () => {
        if (video.style.transform === 'scale(1)') {
            allowScroll = true;
        }
    });

    // Añade un evento de scroll
    window.addEventListener('scroll', () => {
        if (!allowScroll) {
            window.scrollTo(0, 0); // Mantén la posición del scroll en la parte superior
        }

        const scrollValue = window.scrollY;
        const maxScroll = 5000; // Puedes ajustar la cantidad de scroll necesaria
        const easing = 0.01; // Ajusta el valor de easing para controlar la velocidad (0.01 es más lento)

        // Calcula la escala utilizando la función de easing
        const targetScale = 1 + (scrollValue / maxScroll) * 2;
        const scale = 1 + (targetScale - 1) * easing;

        // Si el video ha alcanzado su tamaño original y no se ha solicitado la reproducción, inicia la reproducción
        if (scale >= 1 && !playRequested) {
            video.play();
            playRequested = true; // Marcar que se ha solicitado la reproducción
        }

        // Aplica el zoom al video
        video.style.transform = `scale(${scale})`;
    });
});
