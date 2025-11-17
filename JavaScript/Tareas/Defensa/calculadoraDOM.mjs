// Variables que he utilizado para la realiacion de la tarea

const pantalla = document.getElementById("input");
const numeros = document.getElementsByName("numeros");
const arrayNumeros = Array.from(numeros);
const operadores = document.getElementsByName("operadores"); 
const arrayOperadores = Array.from(operadores);
const reinicio = document.getElementById("reinicio");
const igual = document.getElementById("igual");

// Esta funcion sirver para agregar numeros a la pantalla de la calculadora
function agregarValor(numerosArray) {
    numerosArray.forEach(function(numero) {
        numero.addEventListener("click", function() {
            pantalla.value += numero.textContent;
        });
    });
}



// Esta funcion sirver para agregar operarios a la pantalla de la calculadora
function agregarOperador(operadoresArray) {
    operadoresArray.forEach(function(operador) {
        operador.addEventListener("click", function() {
            pantalla.value += " " + operador.textContent + " ";
        });
    });
}

// se hace las funciones con los arrays
agregarValor(arrayNumeros);
agregarOperador(arrayOperadores);

//Sirve para poner la pantalla a 0
reinicio.addEventListener("click", function() {
    pantalla.value = "";
});

/*
Este codigo sirve para hacer todas las operaciones de la calculadora
Explicacion:
1. Primero se crea una variable que va a recoger los datos que se introducen en la calculadora
2. Posteriormente se introducen los datos en un array de 3 partes, 2 para los numeros que hay que sumar o hacer cualquier otra operacion y otro para el operador que se quiera utilizar
3. se hace un switch con los diferentes operadores, añadiendo tambien la opcion de numero no valido en el default por si no se introduce un numero y se introduce una letra
4. Por ultimo se muestra el resultado por pantalla
*/
igual.addEventListener("click", function() {
    const expresion = pantalla.value.trim();
    const partes = expresion.split(" ");
    
    if (partes.length !== 3) {
        pantalla.value = "Formato incorrecto";
        return;
    }
    
    const number1 = parseFloat(partes[0]);
    const operador = partes[1];
    const number2 = parseFloat(partes[2]);
    
    let resultado;
    
    switch (operador) {
        case "+":
            resultado = number1 + number2;
            break;
        case "-":
            resultado = number1 - number2;
            break;
        case "x": 
            resultado = number1 * number2;
            break;
        case "÷": 
            if (number2 === 0) {
                pantalla.value = "Error: División por 0";
                return;
            }
            resultado = number1 / number2;
            break;
        case "%":
            resultado = number1 % number2;
            break;
        case "&":
            resultado = number1 & number2;
            break
        default:
            pantalla.value = "Operador no válido";
            return;
    }
    
    pantalla.value = resultado;
});