//Declaración de los div que contienen los botones.
const contenedorBotonesInicio = document.getElementById("contenedor-botones-inicio");
const contenedorJuego = document.getElementById("contenedor-juego");

//Declaración de los botones que dan inicio al juego.
const botonInicar = document.getElementById("boton-iniciar");
const botonNuevoJuego = document.getElementById("boton-nuevoJuego");

//Declarando input para celular.
const inputCelular = document.getElementById("input-letra-celular");

//Escondiendo el contenedor que no se debe mostrar.
contenedorJuego.classList.add("esconder");
inputCelular.classList.add("esconder");


//Boton con su respectivo evento para esconder el menu inicial e iniciar el juego.
botonInicar.addEventListener("click", function(evt){

    evt.preventDefault();

    contenedorBotonesInicio.classList.add("esconder");
    contenedorJuego.classList.remove("esconder");
    contenedorJuego.classList.add("mostrar");
    pantallaParaCelular();

    juego();
});

//Boton para poder jugar nuevamente.
botonNuevoJuego.addEventListener("click", function(evt){

    evt.preventDefault();
    
    inputCelular.value = "";
    limpiarCanvas();
    juego();
});


//Detectando si la pantalla es para celular o no y mostrando lo correspondiente.
function pantallaParaCelular(){

    if(screen.width < 376){

        inputCelular.classList.remove("esconder");
        inputCelular.classList.add("mostrar");
        
    } else {

        inputCelular.classList.remove("mostrar");
        inputCelular.classList.add("esconder");
    }
}