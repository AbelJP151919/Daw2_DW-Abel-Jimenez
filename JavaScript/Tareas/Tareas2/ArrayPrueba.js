const footballPlayers = new Map();
const prompt = require('prompt-sync')();
    let nombre;
    let numeroIntroducido;
while (numeroIntroducido!=0){


    numeroIntroducido = prompt("Introduce el numero del futbolista ");
    nombre = prompt("Introduce el nombre del futbolista ");
    footballPlayers.set(numeroIntroducido, nombre);

}

preguntarFutbolista()



function preguntarFutbolista(){
    let numeros = prompt("Introduce el numero del jugador a consultar: ");


    let futbolista = footballPlayers.get(numeros);

    console.log(futbolista);
}
