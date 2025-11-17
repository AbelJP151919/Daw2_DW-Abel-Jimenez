$(document).ready(function(){

    //Linea que llama al array de los libros
    let libros = JSON.parse(localStorage.getItem('libros')) || [];

    //Funcion que hace que puedas buscarLibros
    $('#formBuscarLibros').on('submit', function(e){
        e.preventDefault();

        //Se buscan o por Titulo o por Nombre de autor, donde en el terminoBuscar se pone una de esas dos cosas
        const terminoBusqueda = $('#busquedaPor').val().toLowerCase();
        const resultados = libros.filter(libro => 
            libro.titulo.toLowerCase().includes(terminoBusqueda) || 
            libro.autor.toLowerCase().includes(terminoBusqueda)
        );

        // Se hace una listapara mostrar los libros
        let resultadosHTML = '';
        if(resultados.length > 0){
            resultados.forEach(libro => {
                resultadosHTML += `<li>ID: ${libro.id}, Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anio}, Editorial: ${libro.editorial}, N° Edición: ${libro.nEdicion}, Web: ${libro.web}</li>`;
            });
            // Si no se encuentran libros Se muestra un mensaje
        } else {
            resultadosHTML = '<li>No se encontraron libros que coincidan con la búsqueda.</li>';
        }
        $('#resultadosBusqueda').html(resultadosHTML);
    });

    
    $("#volver").on("click", function(){
        window.location.href = "/index.html"
    })
})