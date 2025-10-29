"use strict";

//--------------------------------------------------------------------------
// Programa principal
//--------------------------------------------------------------------------

// Importante. Debe invocarse en el onloads
console.log("Secuencia de inicialización iniciada");

// Inicializa la página
window.addEventListener('load', function (evento) {

    // Asigna el gestor de evento de nuestro teclado
    document.getElementById('frm').addEventListener('submit', frmOnSubmit);
});

console.log("Secuencia de inicialización finalizada");


//--------------------------------------------------------------------------
// Funciones 
//--------------------------------------------------------------------------

/**
 * Gestiona el envío del formulario
 * 
 * @param {*} e 
 */
 function frmOnSubmit(e) {

    // Obtiene el nif    
    let nif = document.frm.nif.value;
    
    // Valido el nif
    if(!validaNIF(nif)) {
        
        // Cambia el color a rojo
        document.frm.nif.style.backgroundColor = "red";
        
        // Evita el comportamiento por omisión
        e.preventDefault();
    }
}


/** 
 * Comprueba si un NIF introducido es correcto
 */ 
function validaNIF(nif) {
    // Si el dni tiene longitud 0 se considera un campo vacío. Retorna true
    if(nif.lenght == 0) {
        return true;
    }
    
    // Letras para el cálculo
    const letras = [ 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E' ];

    // La letra actual
    const letraNif = nif[nif.length-1];

    // Elimina la letra al final del dni
    nif = nif.substring(0, nif.length-1);

    // Calcula el resto
    const resto = nif % 23;

    // Obtiene la letra
    const letraCalculada = letras[resto];

    return letraCalculada == letraNif;
}