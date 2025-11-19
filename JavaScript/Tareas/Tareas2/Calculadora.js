"use strict"

const prompt = require('prompt-sync')();

let pantalla =0;
let memoria = 0;
let fin = false;
let numero1 = 0;
let numero2 = 0;
let operacion = "";
let operando2 = "";

while(!fin){
    console.log("Pantalla: " + pantalla);
    operacionesBasicas(numero1, numero2)
    mostrarMenu();
    operacion = prompt("Ingrese la operacion a realizar: ").toUpperCase();
    ejecutarOperacion(pantalla, operacion);
    
}


function mostrarMenu(){
    console.log("C -> Pone la pantalla a 0");
    console.log("M -> Guarda el valor en la pantalla de memoria");
    console.log("R -> Pone el valor en memoria en pantalla");
    console.log("S -> Salir de la calculadora");
}

function operacionesBasicas(numero1, numero2){
    console.log("+ -> Sumar");
    console.log("- -> Restar");
    console.log("* -> Multiplicar");
    console.log("/ -> Dividir");
    console.log("% -> Modulo");
    console.log("^ -> Potencia");
    console.log("fact -> Factorial");

    console.log("Elige el primer numero: ");
    numero1 = parseFloat(prompt());
    console.log("Elige el segundo numero: ");
    numero2 = parseFloat(prompt());
    console.log("Elige la operacion a realizar: ");
    operando2 = prompt();

    switch(operando2) {
        case "+":
            pantalla = numero1 + numero2;

            break;
        case "-":
            pantalla = numero1 - numero2;            
            break;
        case "*":
            pantalla = numero1 * numero2;
            break;
        case "/":
            pantalla = numero1 / numero2;
            break;
        case "%":
            pantalla = numero1 % numero2;
            break;
        case "^":
            pantalla = numero1 ^ numero2;
            break;
        case "fact":
            for(let i = numero1 -1; i > 0; i--){
                numero1 = numero1 * i;
            }
            break;

        default:
            console.log("Operacion no valida");
}
}




function ejecutarOperacion(pantalla, operacion){

    switch(operacion) {
        case "C":
            pantalla = 0;
            memoria = 0;
            console.log("Pantalla y memoria reseteadas a 0");
            break;
        case "M":
            memoria = pantalla;
            console.log("Memoria:" + memoria);
            break;
        case "R":
            pantalla = memoria
            console.log("Pantalla:" + pantalla);
            break;
        case "S":
            console.log("Saliendo de la calculadora...");
            fin = true;
            break;
        default:
            console.log("Operacion no valida");





    }





}