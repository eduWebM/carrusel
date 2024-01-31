document.querySelector(".arrow-left").addEventListener('click', function() {
    document.querySelector(".carousel-container").scrollBy({ left: -500, behavior: 'smooth' });
});

document.querySelector(".arrow-right").addEventListener('click', function() {
    document.querySelector(".carousel-container").scrollBy({ left: 500, behavior: 'smooth' });
});

// Variable para almacenar la posición actual del scroll

let currentPosition = 0;

// Función para realizar el scroll hacia la derecha
function scrollRight() {
    const container = document.querySelector(".carousel-container");
    currentPosition += 500; // O el valor que desees
    container.scrollBy({ left: 500, behavior: 'smooth' });

    // Verificar si hemos llegado al final y reiniciar si es necesario
    if (currentPosition >= container.scrollWidth - container.clientWidth) {
        currentPosition = 0;
        container.scrollTo({ left: 0, behavior: 'smooth' });
    }
}

// Establecer intervalo para el scroll automático cada 5 segundos
const scrollInterval = setInterval(scrollRight, 5000);

// Detener el intervalo si es necesario (por ejemplo, al hacer clic en algún botón)
// clearInterval(scrollInterval);
