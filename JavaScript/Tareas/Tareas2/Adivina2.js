const prompt = require('prompt-sync')();
let arrayA = [];
let numeroAciertos = 0
let numeros;
for ( i = 0; i < 10; i++){
    let valorAleatorio = Math.floor(Math.random() * 20);
    arrayA.push(valorAleatorio)
}

for(j = 0; j < 5; j++){
    numeros = Number(prompt ("Introduce un numero del 0 al 20 "));
    if(arrayA.includes(numeros)){
        console.log(arrayA.indexOf(numeros))
        numeroAciertos++;
    }
    
}
console.log("Numero de aciertos: " ,numeroAciertos);
console.log(arrayA)
