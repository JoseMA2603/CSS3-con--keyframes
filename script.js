let velocidad = 5; // Velocidad inicial en segundos
let contadorCambios = 0;
let rotacion = 0;

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

function actualizarRotacion() {
    rotacion += 2; // Incrementa la rotación en 2 grados
    if (rotacion >= 360) rotacion = 0; // Reinicia la rotación al completar una vuelta
    document.getElementById('cuadrado').style.transform = `rotate(${rotacion}deg)`;
    requestAnimationFrame(actualizarRotacion);
}

// Inicializar el historial con la velocidad inicial y comenzar la rotación
window.onload = function() {
    registrarCambio('inicial');
    actualizarRotacion();
}

function cambiarTema() {
    document.body.classList.toggle('modo-claro');
    const botonTema = document.getElementById('botonTema');
    if (document.body.classList.contains('modo-claro')) {
        botonTema.textContent = 'Modo oscuro';
    } else {
        botonTema.textContent = 'Modo claro';
    }
}







