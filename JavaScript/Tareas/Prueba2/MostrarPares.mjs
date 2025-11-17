$(document).ready(function() {
$("#botonMostrarPares").on("click", mostrarPares);
$("#botonLimpiar").on("click", () => $('#textoResultado').val(''));
    function mostrarPares() {
    const numero = $("#inputNumero").val();

    for(let n = 1; n <= numero; n++) {
        if(n % 2 == 0) {
            $("#textoResultado").text($("#textoResultado").val()+','+n);
        }
    }
}
});