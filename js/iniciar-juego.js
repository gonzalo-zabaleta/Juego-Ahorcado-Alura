//Declaración de los div que contienen los botones.
var contenedorBotonesInicio = document.getElementById("contenedor-botones-inicio");
var contenedorJuego = document.getElementById("contenedor-juego");

//Declaración de los botones que dan inicio al juego.
var botonInicar = document.getElementById("boton-iniciar");
var botonNuevoJuego = document.getElementById("boton-nuevoJuego");

//Boton con su respectivo evento para esconder el menu inicial e iniciar el juego.
botonInicar.addEventListener("click", function(evt){

    evt.preventDefault();

    contenedorBotonesInicio.classList.add("esconder");
    contenedorJuego.classList.add("mostrar");

    juego();
});

//Boton para poder jugar nuevamente.
botonNuevoJuego.addEventListener("click", function(evt){

    evt.preventDefault();
    
    limpiarCanvas();
    juego();
});