document.addEventListener('DOMContentLoaded', function() {
    var midiv = document.getElementById('midiv');
    var button = document.getElementById('boton');

   
button.addEventListener('click', function(event){
    event.stopPropagation();
});


    midiv.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});



