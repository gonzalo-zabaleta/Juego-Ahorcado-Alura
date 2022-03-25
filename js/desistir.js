//Declaración del boton desistir con su respectiva función.
var botonDesistir = document.getElementById("boton-desistir");
botonDesistir.addEventListener("click", terminar);

//Función para terminar el juego y dar a conocer la palabra en caso de que no se haya adivinado.
function terminar(evt){

    if(aciertos != palabraElejida.length){

            evt.preventDefault();
            terminarJuego = true;
            completarPalabra();
            borrarMensaje();
            dibujarMensaje("red", "Lo siento, la palabra era:");
    }
}

//Función para en caso de darse por vencido completar la palabra.
function completarPalabra(){

    let letrasSeparada = palabraElejida.split("");

    for (let p=0; p < letrasSeparada.length; p++){

        let l = 0;
        
        while (l <= letrasCorrectas.length){

            if(letrasSeparada[p] != letrasCorrectas[l]){

                dibujarLetraCorrecta(letrasSeparada[p], p);
            }

            l++;
        }
    }
}