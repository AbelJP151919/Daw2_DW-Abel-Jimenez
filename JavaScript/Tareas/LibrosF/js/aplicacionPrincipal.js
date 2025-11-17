// Ready para cargar la pagina con el javascript
$(document).ready(function() {

    //Funcion para todos los botones para la gestion del CRUD que redirige a las diferentes paginas de la webs
    $("#agregarLibros").on("click", function(){
        window.location.href = "/agregarLibros.html"
    });
     $("#listarLibros").on("click", function(){
        window.location.href = "/listarLibros.html"

    });
    $("#eliminarLibros").on("click", function(){
        window.location.href = "/eliminarLibros.html"
    });
    $("#editarLibros").on("click", function(){
        window.location.href = "/editarLibro.html"
    });
     $("#buscarLibros").on("click", function(){
        window.location.href = "/buscar.html"
    });





});