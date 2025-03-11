let velocidad = 5; // Velocidad inicial en segundos

function aumentarVelocidad() {
    velocidad = Math.max(1, velocidad - 1); // Reduce el tiempo de animación hasta un mínimo de 1s
    actualizarAnimacion();
}

function reducirVelocidad() {
    velocidad = Math.min(10, velocidad + 1); // Aumenta el tiempo de animación hasta un máximo de 10s
    actualizarAnimacion();
}

function actualizarAnimacion() {
    document.getElementById('cuadrado').style.animation = `zigzag ${velocidad}s infinite linear`;
}


