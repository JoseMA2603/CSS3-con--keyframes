let velocidad = 5; // Velocidad inicial en segundos
let contadorCambios = 0;

function aumentarVelocidad() {
    velocidad = Math.max(1, velocidad - 1); // Reduce el tiempo de animación hasta un mínimo de 1s
    actualizarAnimacion();
    registrarCambio('aumentado');
}

function reducirVelocidad() {
    velocidad = Math.min(10, velocidad + 1); // Aumenta el tiempo de animación hasta un máximo de 10s
    actualizarAnimacion();
    registrarCambio('reducido');
}

function actualizarAnimacion() {
    document.getElementById('cuadrado').style.animation = `zigzag ${velocidad}s infinite linear`;
}

function registrarCambio(tipo) {
    contadorCambios++;
    const lista = document.getElementById('listaVelocidades');
    const nuevoItem = document.createElement('li');
    nuevoItem.innerHTML = `${contadorCambios}. Velocidad ${tipo} a ${velocidad}s`;
    lista.insertBefore(nuevoItem, lista.firstChild);

    // Limitar el historial a los últimos 10 cambios
    if (lista.children.length > 10) {
        lista.removeChild(lista.lastChild);
    }
}

// Inicializar el historial con la velocidad inicial
window.onload = function() {
    registrarCambio('inicial');
}



