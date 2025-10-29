"use strict"


/**Hacer Import de funciones
 */
import * as validacion from "validacion.mjs";


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

function onInputChange(eventos){


    const nombrevalidacion = listaValidaciones[n];
    const campo = eventos.target;
    let errores = 0
    const listaValidaciones = campo.dataset.validacion.splitI(",")
    for(let n = 0;n < listaValidaciones.length; n++){
        const funcionalidades = eval("validaciones.val_" + nombrevalidacion);
        if(!funcionValidacion(campo.value)){
            errores++;
            console.log("error " + nombreValidacion)
        }
    }}