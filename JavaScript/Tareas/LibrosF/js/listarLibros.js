$(document).ready(function() {
    let libros = [];

    // Se carga la funcion cargarLibeos
    
    cargarLibros();
    
    // Se llaman a las funciones para 
    $(document).on('click', '#btnOrdenarID', function() {
        ordenarID();
    });
    
    $(document).on('click', '#btnOrdenarNombre', function() {
        ordenarNombre();
    });
    $(document).on('click', '#btnRestablecer', function() {
        restablecerLibros();
    });
     $(window).on('storage', function(e) {
        if (e.originalEvent.key === 'libros') {
            cargarLibros(); 
        }
    });
    
    function cargarLibros() {

        // Se llama al array
        libros = JSON.parse(localStorage.getItem('libros')) || [];

        // Se hace una "Copia" del archivo original para restablecer la lista

        localStorage.setItem('libros_original', JSON.stringify(libros));

        // Se llama a la funcion de mostrarLibros
        mostrarLibros();
    }
    
    // La funcion mostrarLibros añade a un div una lista hecha en html 
    function mostrarLibros() {
        const contenedor = $('#contenedorLibros');
        
        if (libros.length === 0) {
            contenedor.html(`
                <div style="text-align: center; padding: 40px; color: #666;">
                    <h3>No hay libros registrados</h3>
                    <p>Agrega tu primer libro desde la página principal</p>
                </div>
            `);
            return;
        }
        // Se muestra un html con los bonotes para ordenar
        
        let html = `
            <div class="botones-ordenar" style="margin-bottom: 20px;">
                <button id="btnOrdenarID" style="padding: 10px; margin: 5px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                     Ordenar por ID
                </button>
                <button id="btnOrdenarNombre" style="padding: 10px; margin: 5px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">
                     Ordenar por Nombre
                </button>
                <button id="btnRestablecer" style="padding: 10px; margin: 5px; background: #c3272aff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Restablecer
                </button>
                <button onclick=window.location.href="/index.html" style="padding: 10px; margin: 5px; background: #27c397ff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Volver
                </button>
            </div>
        `;


        // Posteriormente se muestra la listas de libros
        
        libros.forEach(libro => {
            html += `
                <div class="libro-item" style="border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px;">
                    <h3>${libro.titulo}</h3>
                    <p><strong>Autor:</strong> ${libro.autor}</p>
                    <p><strong>Año de publicación:</strong> ${libro.anio || 'No especificado'}</p>
                    <p><strong>Editorial:</strong> ${libro.editorial}</p>
                    <p><strong>NºEdicion:</strong> ${libro.nEdicion}</p>
                    <p><strong>Web:</strong> ${libro.web}</p>
                    <p><strong>ID:</strong> ${libro.id}</p>
                    
                </div>
            `;
        });
        
        contenedor.html(html);

        // Aqui están todos los botones
    }
    function restablecerLibros() {
        const librosActualizados = JSON.parse(localStorage.getItem('libros_original')) || [];
        localStorage.setItem('libros', JSON.stringify(librosActualizados));
        libros = librosActualizados;
        mostrarLibros();
        alert('✅ Orden restablecido');
    }
    
    function ordenarID() {
        console.log('Ordenando por ID...');
        libros.sort((a, b) => {
        const idA = parseInt(a.id) ;
        const idB = parseInt(b.id) ;
        return idA - idB;
        });
        localStorage.setItem('libros', JSON.stringify(libros));
        mostrarLibros();
        alert('Libros ordenados por ID');
    }
    
    function ordenarNombre() {
        console.log('Ordenando por Nombre...');
        libros.sort((a, b) => a.titulo.localeCompare(b.titulo));
        localStorage.setItem('libros', JSON.stringify(libros));
        mostrarLibros();
        alert('Libros ordenados por Nombre');
    }
});