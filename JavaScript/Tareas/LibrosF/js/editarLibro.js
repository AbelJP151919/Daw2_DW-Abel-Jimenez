$(document).ready(function() {
    let libros = JSON.parse(localStorage.getItem('libros')) || [];

    //Funcion para Editar libros
    
    $('#formEditarLibros').on('submit', function(e) {
        e.preventDefault();
        const nuevoTitulo = $("#titulo").val().trim();
        const nuevoAutor = $("#autor").val().trim();
        const nuevoAnio = $("#anio").val().trim();
        const nuevaEditorial = $("#editorial").val().trim();
        const nuevanEdicion = $('#nEditorial').val();
        const nuevaweb = $('#web').val();
        const idEditar = parseInt($("#idEditar").val().trim());

        // Se busca el id en el array
        const libroIndex = libros.findIndex(libro => libro.id === idEditar);

        // Si no lo encuentra se muestra un mensaje
        if (libroIndex === -1) {
            alert(` No se encontró ningún libro con el ID: "${idEditar}"`);
            return;
        }
        // Si el id introducido se encuentra, se edita el libro con el index que se ha introducido
        libros[libroIndex] = {
            id: idEditar,
            titulo: nuevoTitulo,
            autor: nuevoAutor,
            anio: nuevoAnio,
            editorial: nuevaEditorial,
            nEditorial: nuevanEdicion,
            web: nuevaweb

        };

        // Se guarda el nuevo array de libros con el libro editado
        localStorage.setItem('libros', JSON.stringify(libros));
        alert(' Libro editado exitosamente');
        $('#formEditarLibros')[0].reset();
    });

    $("#volver").on("click", function(){
        window.location.href = "index.html";
    }); 
});