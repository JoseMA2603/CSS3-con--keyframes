let velocidad = 3; // Velocidad inicial en segundos

function aumentarVelocidad() {
    velocidad = Math.max(0.5, velocidad - 0.5); // Reduce el tiempo de animación hasta un mínimo de 0.5s
    actualizarAnimacion();
}

function reducirVelocidad() {
    velocidad = Math.min(10, velocidad + 0.5); // Aumenta el tiempo de animación hasta un máximo de 10s
    actualizarAnimacion();
}

function actualizarAnimacion() {
    document.getElementById('cuadrado').style.animation = `mover ${velocidad}s infinite ease-in-out`;
}
