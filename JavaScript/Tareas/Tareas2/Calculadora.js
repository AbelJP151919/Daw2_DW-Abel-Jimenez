"use strict"

const prompt = require('prompt-sync')();

let pantalla =0;
let memoria = 0;
let fin = false;

while(!fin){

    mostrarMenu();
    switch(){






    }
}


function mostrarMenu(){
    console.log("C -> Pone la pantalla a 0");
    console.log("M -> Guarda el valor en la pantalla de memoria");
    console.log("R -> Pone el valor en memoria en pantalla");
    console.log("S -> Salir de la calculadora");
}

/**@param {} operacion;*/

function ejecutarOperacion(pantalla, operacion){

    switch(operacion) {
        case "C":
            resultado = 0;
            break;
        case "M":
            memoria = pantalla;
            break;
        case "R":
            resultado=memoria
            break;
        case "S":
            break;





    }





}