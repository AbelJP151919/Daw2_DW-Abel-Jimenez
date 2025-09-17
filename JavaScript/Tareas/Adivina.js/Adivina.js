const prompt = require('prompt-sync')();

let valor_Maximo = 10;
let valor_adivinar = Math.floor(Math.random() * 10);

for ( i = 0; i < valor_Maximo; i++){
    
    let numeroIntroducido = prompt("Introduce el un numero ")
    
    if(numeroIntroducido > valor_adivinar){
        console.log("Tu numero es mas grande")
    }

    if(numeroIntroducido < valor_adivinar) {
        console.log("Tu numero es mas pequeño")
    }

    if(numeroIntroducido = valor_adivinar){
        console.log("Has acertado el numero. El numero de intentos es: ", i)
        break;
    }
}
