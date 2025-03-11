
let velocidad = 3; // Velocidad inicial en segundos
function aumentarVelocidad() {
    velocidad = Math.max(0.5, velocidad - 0.5); // Reduce el tiempo de animación hasta un mínimo
    document.getElementById('cuadrado').style.animation = `mover ${velocidad}s infinite ease-in-out`;
}