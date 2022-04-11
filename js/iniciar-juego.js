//Declaración de los div que contienen los botones.
const contenedorBotonesInicio = document.getElementById("contenedor-botones-inicio");
const contenedorJuego = document.getElementById("contenedor-juego");
const contenedorJuegoCelular = document.getElementById("contenedor-celular");

//Declaración de los botones que dan inicio al juego.
const botonInicar = document.getElementById("boton-iniciar");
const botonNuevoJuego = document.getElementById("boton-nuevoJuego");

//Escondiendo el contenedor que no se debe mostrar.
contenedorJuego.classList.add("esconder");
contenedorJuegoCelular.classList.add("esconder");

//Boton con su respectivo evento para esconder el menu inicial e iniciar el juego.
botonInicar.addEventListener("click", function(evt){

    evt.preventDefault();

    contenedorBotonesInicio.classList.add("esconder");
    contenedorJuego.classList.remove("esconder");
    contenedorJuego.classList.add("mostrar");

    juego();
});

//Boton para poder jugar nuevamente.
botonNuevoJuego.addEventListener("click", function(evt){

    evt.preventDefault();
    
    limpiarCanvas();
    juego();
});