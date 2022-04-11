//Declaración de las variables a usar para el funcionamiento del juego.
const palabrasSecretas = ["MANZANA", "ORACLE", "ALURA", "MONITOR", "CASCADA"];

var palabraElejida = "";
var errores = 0;
var aciertos = 0;
var letrasCorrectas = [];
var letrasIncorrectas = [];
var terminarJuego = false;

//Función para elejir una palabra aleatoria entre las que se encuentran.
function palabraAleatoria(){

    return palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)];
}

//Función para dibujar todos los guiones de las letras que la palabra contenga.
function crearGuiones(palabraSecreta){

    for(let i=0; i < palabraSecreta.length; i++) {
        dibujarGuion(i);
    } 
}

//Función para saber si la tecla presionada fue una letra.
function verificarTeclaPresionada(letra){

    if(letra.length == 1){
        if(/[A-Z]/.test(letra)  || letra == "Ñ"){

            return true;
        }
    } else {

        return false;
    }
}

//Función para saber si la letra ingresada ya lo fue anteriormente.
function letraRepetida(letra){

    let mayor = 0;

    if(letrasCorrectas < letrasIncorrectas){

        mayor = letrasIncorrectas.length;
        
    } else {

        mayor = letrasCorrectas.length;
    }

    for(let k=0; k < mayor; k++){

        if(letra == letrasCorrectas[k] || letra == letrasIncorrectas[k]){

            return true;
        }
    }

    return false;
}

//Función para verificar si la letra ingresada es incorrecta o correcta.
function verificarLetra(letra, palabraElejida){

    let correcta = false;

    for(let j=0; j < palabraElejida.length; j++){

        if(letra == palabraElejida[j]){

            dibujarLetraCorrecta(letra, j);
            aciertos++;
            correcta = true;
        }
    }

    if(correcta){

        letrasCorrectas.push(letra);

    } else {

        letrasIncorrectas.push(letra);
        dibujarLetraIncorrecta(letra, errores);
        errores++;
        dibujarErrores();
    }
}

//Función para dibujar las partes del cuerpo y horca segun los errores cometidos.
function dibujarErrores(){

    pincel.fillStyle = "#0A3871";
    pincel.strokeStyle = "#0A3871";

    if (errores == 1){

        horca();
    } else if (errores == 2){

        cabeza();
    } else if (errores == 3){

        cuerpo();
    } else if (errores == 4){
        
        brazoIzquierdo();
    } else if (errores == 5){
        
        brazoDerecho();
    } else if (errores == 6){
     
        piernaIzquierda();
    } else if (errores == 7){
     
        piernaDerecha();
    } 
}

//Función para saber si adivino la palabra o cometio todos los errores validos.
function verificarFinal(){

    if(aciertos == palabraElejida.length){

        borrarMensaje();
        dibujarMensaje("green", "Haz ganado ¡Felicitaciones!");
        return true;
    }

    if(errores == 7){

        borrarMensaje();
        dibujarMensaje("red", "Haz perdido, lo siento...");
        return true;
    }

    return false;
}

//Función para ir verificando la letra ingresada y completar los campos necesarios.
function verificarLetraPresionada(event){

    if (!terminarJuego){

        let letraIngresada = event.key.toUpperCase();

        if (verificarTeclaPresionada(letraIngresada)){

            if(!letraRepetida(letraIngresada)){
        
                borrarMensaje();
                verificarLetra(letraIngresada, palabraElejida);
        
            } else {
        
                borrarMensaje();
                dibujarMensaje("red", "Ya ingresaste esa letra.");
            }
        } else {

            borrarMensaje();
            dibujarMensaje("red", "Por favor, ingrese una letra.");
        }

        if(verificarFinal()){
            document.removeEventListener("keydown", verificarLetraPresionada);
        }
    } else {

        document.removeEventListener("keydown", verificarLetraPresionada);
    }
}

//Declarando input y boton para celular.
const inputCelular = document.getElementById("input-letra-celular");
const botonEnviarCelular = document.getElementById("boton_enviar-celular");

//Función para verificar la letra ingresadas por celular.
function verificarLetraPresionadaCelular(evento){

    evento.preventDefault();

    let letra = inputCelular.value.toUpperCase(); 
    inputCelular.value = "";

    if (!terminarJuego){

        if (verificarTeclaPresionada(letra)){

            if(!letraRepetida(letra)){
        
                borrarMensaje();
                verificarLetra(letra, palabraElejida);
        
            } else {
        
                borrarMensaje();
                dibujarMensaje("red", "Ya ingresaste esa letra.");
            }
        } else {

            borrarMensaje();
            dibujarMensaje("red", "Por favor, ingrese una letra.");
        }

        if(verificarFinal()){
            
            botonEnviarCelular.disabled = true;
        } 
    }else {

        botonEnviarCelular.disabled = true;
    }
}

//Función para según el tamaño de la pantalla se aplica la acción correspondiente.
function elejirSegunLaPantalla(){

    if (screen.width < 376){

        contenedorJuegoCelular.classList.remove("esconder");
        contenedorJuegoCelular.classList.add("mostrar");
        botonEnviarCelular.disabled = false;
        botonEnviarCelular.addEventListener("click", verificarLetraPresionadaCelular);
    } else {

        document.addEventListener("keydown", verificarLetraPresionada);
    }
}


//Función del juego completo.
function juego(){

    terminarJuego = false;

    errores = 0;
    aciertos = 0;
    letrasCorrectas = [];
    letrasIncorrectas = [];

    palabraElejida = palabraAleatoria();
    crearGuiones(palabraElejida);

    elejirSegunLaPantalla();
}