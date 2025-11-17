$(document).ready(function() {

    //Linea para crear una mini base de datos de los libros, que se guardan en un array
        let libros = JSON.parse(localStorage.getItem('libros')) || [];

        // Funcion para añadir los libros 
        $('#formAgregarLibros').on('submit', function(e) {
            e.preventDefault();
            const id = libros.length + 1;
            const titulo = $('#titulo').val();
            const autor = $('#autor').val();
            const anio = $('#anio').val();
            const editorial = $('#editorial').val();
            const nEdicion = $('#nEdicion').val();
            const web = $('#web').val();

            const nuevoLibro = { id, titulo, autor, anio, editorial, nEdicion, web };

            //Se añade al array con push
            libros.push(nuevoLibro);
            localStorage.setItem('libros', JSON.stringify(libros));
            alert('Libro agregado exitosamente');
            reset();         
        });

        //Funcion para volver a la pagina principal (Esta en todas las paginas menos en la principal)

        $("#volver").on("click", function(){
                window.location.href = "/index.html"
            })

        //Funcion para quedar en blanco el formulario
             
        function reset(){
            titulo.value = "";
            autor.value = "";
            anio.value = "";
            editorial.value = "";
            nEdicion.value = "";
            web.value = "";
        }
});