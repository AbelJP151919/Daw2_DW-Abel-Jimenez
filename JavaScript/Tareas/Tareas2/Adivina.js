const prompt = require('prompt-sync')();

let valor_Maximo = 10;
let valor_adivinar = Math.floor(Math.random() * 10);
let intentos = 0;
let acabar = false
while (acabar != true){
    let numeroIntroducido = prompt("Introduce un numero: ");
    if(numeroIntroducido > valor_adivinar){
        console.log("Tu numero es mas grande");
        intentos++;
    }

    if(numeroIntroducido < valor_adivinar) {
        console.log("Tu numero es mas pequeño");
        intentos++
    }
    if(intentos == valor_Maximo){
        console.log("Has agotado todas tus oportunidades. ")
        acabar = true;
    }

    if(numeroIntroducido == valor_adivinar){
        console.log("Has acertado el numero. El numero de intentos es: ", intentos);
        acabar = true;
    }
}
