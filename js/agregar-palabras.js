//Declaración del primer boton que aparece.
var agregarPalabra = document.getElementById("boton-agregar");

//Declaración de los botones que deben aparecer a continuación.
var contenedorBotonesAgregar = document.getElementById("contenedor-agregar-palabra");
var botonGuardarPalabra = document.getElementById("boton-guardar");
var botonCancelarAgregar = document.getElementById("boton-cancelar-agregar");

//Declaración del input.
var textoIngresado = document.getElementById("palabra-ingresada");

//Declaración para mostrar un mensaje en caso de bien o mal.
var mensajeAMostrar = document.getElementById("mensaje-a-mostrar");

//Evento del primer boton que aparece para que muestre los otros.
agregarPalabra.addEventListener("click", function(){

    contenedorBotonesInicio.classList.add("esconder");
    contenedorBotonesAgregar.classList.remove("esconder")
    contenedorBotonesAgregar.classList.add("mostrar");
});

//Evento para agregar la palabra nueva.
botonGuardarPalabra.addEventListener("click", function(){

    var palabraIngresada = textoIngresado.value.toUpperCase();
    agregarNuevaPalabra(palabraIngresada);
});

//Evento para volver al inicio.
botonCancelarAgregar.addEventListener("click", function(){

    mensajeAMostrar.classList.add("esconder");
    contenedorBotonesAgregar.classList.add("esconder");
    contenedorBotonesInicio.classList.remove("esconder");
    contenedorBotonesInicio.classList.add("mostrar");
})


//Función para verificar si la palabra ya está registrada.
function palabraRepetida(palabraNueva){

    for(let i=0; i < palabrasSecretas.length; i++){

        if(palabraNueva == palabrasSecretas[i]){

            return true;
        }
    }

    return false;
}

//Función para saber si la nueva palabra contiene números.
function tieneNumeros(palabraNueva){

    if(/[A-Z]/.test(palabraNueva)){
        return false;
    } else {

        return true;
    }
}

//Función para agregar la nueva palabra.
function agregarNuevaPalabra(palabraNueva){

    if (tieneNumeros(palabraNueva)){

        mensajePorMostrar("red", "Ingrese solo las letras, sin números.");

    } else {
        if(palabraRepetida(palabraNueva)){

            mensajePorMostrar("red", "Esa palabra ya está agregada. Pruebe otra.")
        } else {

            palabrasSecretas.push(palabraNueva);
            mensajePorMostrar("green", "La palabra se agrego exitosamente.");
        }
    }
}

//Función para mostrar los mensajes en pantalla en caso de bien o mal.
function mensajePorMostrar(color, mensaje){

    mensajeAMostrar.style.color = color;
    mensajeAMostrar.textContent = mensaje;
    mensajeAMostrar.classList.remove("esconder");
    mensajeAMostrar.classList.add("mostrar");
}