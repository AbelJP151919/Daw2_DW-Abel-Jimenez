    import { Tabla } from './tabla.mjs';

    let tablaContactos;

    document.addEventListener('DOMContentLoaded', function() {
        // Más simple - no necesita plantilla
        tablaContactos = new Tabla(
            'http://localhost:3000/contactos',
            'tabla-contactos'
        );
    });

    window.actualizarTabla = function() {
        if (tablaContactos) {
            tablaContactos.actualizar();
        }
    };
