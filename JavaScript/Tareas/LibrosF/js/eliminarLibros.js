$(document).ready(function() {
    let libros = JSON.parse(localStorage.getItem('libros')) || [];

    // Funcion para eliminar libros
    
    $('#formEliminarLibros').on('submit', function(e) {
        e.preventDefault();
        
        const nombreEliminar = $('#titulo').val().trim();
        
        if (!nombreEliminar) {
            alert(' Por favor, ingresa el título del libro a eliminar');
            return;
        }
        
        if (libros.length === 0) {
            alert(' No hay libros registrados para eliminar');
            return;
        }

        // Se encuentra el libro para liminar
        
        const libroEncontrado = libros.find(libro => 
            libro.titulo.toLowerCase() === nombreEliminar.toLowerCase()
        );
        
        if (!libroEncontrado) {
            alert(` No se encontró ningún libro con el título: "${nombreEliminar}"`);
            return;
        }
        
        // Confirmar eliminación
        const confirmar = confirm(
            `¿Estás seguro de que quieres eliminar el libro?\n\n` +
            `Título: ${libroEncontrado.titulo}\n` +
            `Autor: ${libroEncontrado.autor}`
        );
        
        if (!confirmar) {
            return; 
        }

        // Se elimina el libro introducido
        
        libros = libros.filter(libro => 
            libro.titulo.toLowerCase() !== nombreEliminar.toLowerCase()
        );
        // Se guarda el array actualizado
        
        localStorage.setItem('libros', JSON.stringify(libros));

        localStorage.setItem('libros_original', JSON.stringify(libros));

        
        alert(` Libro eliminado exitosamente:\n"${libroEncontrado.titulo}"`);
        $('#formEliminarLibros')[0].reset();
    });

    $("#volver").on("click", function(){
        window.location.href = "index.html";
    }); 
});