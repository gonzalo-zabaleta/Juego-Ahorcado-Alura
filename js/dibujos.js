//Declaración del canvas y para poder dibujar en él.
const canvas = document.getElementById("canvas");
const pincel = canvas.getContext("2d");

//Dibujo de la horca.
function horca(){

    pincel.fillStyle = "#0A3871";
    pincel.lineWidth = 5;
    pincel.beginPath();

    //Base de la horca
    pincel.fillRect(152.5, 400, 294, 5);

    //Palo subiendo
    pincel.fillRect((152.5+294)/2, 400, 4.5, -360);

    //Palo a la derecha
    pincel.fillRect((152.5+294)/2, 40, 177.75, 4.5);
   
    //Palo hacia abajo
    pincel.fillRect((152.5+294)/2 + 177.75, 40, 4.5, 89.5);
}

//Dibujo de la cabeza.
function cabeza(){

    pincel.arc((152.5+294)/2 + 177.75, 155, 25, 0, (2*Math.PI));
    pincel.stroke();
}

//Dibujo del cuerpo.
function cuerpo(){

    pincel.fillRect((152.5+294)/2 + 177.75, 180, 4.5, 135);
}

//Dibujo brazo izquierdo.
function brazoIzquierdo(){

    pincel.moveTo((152.5+294)/2 + 177.75, 235);
    pincel.lineTo((152.5+294)/2 + 177.75 - 60, 175);
    pincel.stroke();
}    

//Dibujo brazo derecho.
function brazoDerecho(){

    pincel.moveTo((152.5+294)/2 + 177.75, 235);
    pincel.lineTo((152.5+294)/2 + 177.75 + 60, 175);
    pincel.stroke();
}

//Dibujo pierna izquierdo.
function piernaIzquierda(){

    pincel.moveTo((152.5+294)/2 + 177.75 + 5, 315);
    pincel.lineTo((152.5+294)/2 + 177.75 - 60, 387);
    pincel.stroke();
}

//Dibujo pierna derecha.
function piernaDerecha(){

    pincel.moveTo((152.5+294)/2 + 177.75, 315);
    pincel.lineTo((152.5+294)/2 + 177.75 + 60, 387);
    pincel.stroke();
}    

//Función para dibujar los guiones.
function dibujarGuion(x){

    pincel.fillStyle = "#0A3871";
    pincel.fillRect((40 + 70*x) , 600, 50, 4)
}

//Función para dibujar las letras correctas.
function dibujarLetraCorrecta(letra, x){

    pincel.fillStyle = "green";
    pincel.font = "40pt Inter";
    pincel.fillText(letra, (47.5 + 70*x), 590);
}

//Función para dibujar las letras incorrectas.
function dibujarLetraIncorrecta(letra, x){

    pincel.fillStyle = "red";
    pincel.font = "30pt Inter";
    pincel.fillText(letra, (90 + 60*x), 670);
}

//Función para dibujar mensajes de errores o de si gano o perdio.
function dibujarMensaje(color, frase){

    pincel.fillStyle = color;
    pincel.font = "30pt Inter";
    pincel.fillText(frase, 50, 490);
}

//Función para borrar los mensajes dibujados.
function borrarMensaje(){

    pincel.clearRect(0, 460, 600, 50);
}

//Función para limpiar el canvas completo.
function limpiarCanvas(){

    pincel.clearRect(0, 0, 600, 700);
}