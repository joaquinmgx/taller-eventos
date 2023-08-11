function Saludo() {
    alert('Hola!');
}

document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('boton');
    boton.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});