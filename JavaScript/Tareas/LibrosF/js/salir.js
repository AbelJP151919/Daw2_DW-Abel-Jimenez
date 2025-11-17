$(document).ready(function(){

    // Esta es la funcion de salir 

    $("#salir").on("click", function(){

        // Se remplaza el html principal por uno de salida

        if(confirm("¿Estás seguro de que deseas salir de la aplicación?")){
            console.log("Saliendo de la aplicación...");
            $("#areaPrincipal").html(`
                <div class="contenido">
                    <h2>¡Hasta pronto!</h2>
                    <p>Gracias por usar el Gestor de Libros.</p>
                    <p>Puedes cerrar esta pestaña cuando quieras.</p>
                </div>
            `);
            // Sino se vuelve al menu principal
        } else {
            console.log("Volviendo al menú principal...");
            window.location.href = "/index.html";
        }
    });
});