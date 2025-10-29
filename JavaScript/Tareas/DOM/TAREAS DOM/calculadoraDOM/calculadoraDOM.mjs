const pantalla = document.getElementById("input");
const numeros = document.getElementsByName("numeros");
const arrayNumeros = Array.from(numeros);
const operadores = document.getElementsByName("operadores"); 
const arrayOperadores = Array.from(operadores);
const reinicio = document.getElementById("reinicio");
const igual = document.getElementById("igual");

function agregarValor(numerosArray) {
    numerosArray.forEach(function(numero) {
        numero.addEventListener("click", function() {
            pantalla.value += numero.textContent;
        });
    });
}

function agregarOperador(operadoresArray) {
    operadoresArray.forEach(function(operador) {
        operador.addEventListener("click", function() {
            pantalla.value += " " + operador.textContent + " ";
        });
    });
}

agregarValor(arrayNumeros);
agregarOperador(arrayOperadores);

reinicio.addEventListener("click", function() {
    pantalla.value = "";
});

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
        default:
            pantalla.value = "Operador no válido";
            return;
    }
    
    pantalla.value = resultado;
});