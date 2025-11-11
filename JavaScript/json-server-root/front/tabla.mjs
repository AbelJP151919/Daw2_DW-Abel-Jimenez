export class Tabla {
    #url_recursos;
    #elementoObjetivo;

    constructor(url_recursos, elementoObjetivo) {
        this.#url_recursos = url_recursos;
        this.#elementoObjetivo = elementoObjetivo;
        this.renderizarTabla();
    }

    renderizarTabla() {
        const elemento = document.getElementById(this.#elementoObjetivo);
        if (!elemento) {
            console.error('Elemento no encontrado:', this.#elementoObjetivo);
            return;
        }

        elemento.innerHTML = '<div class="loading">Cargando contactos...</div>';

        fetch(this.#url_recursos)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Datos recibidos:', data);
                
                if (!data || data.length === 0) {
                    elemento.innerHTML = '<div class="empty">No hay contactos disponibles</div>';
                    return;
                }

                // Generar tabla manualmente
                const html = this.#generarTablaHTML(data);
                elemento.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
                elemento.innerHTML = `
                    <div class="error">
                        Error al cargar los contactos: ${error.message}
                    </div>
                `;
            });
    }

    #generarTablaHTML(data) {
        if (!data || data.length === 0) return '<div class="empty">No hay datos</div>';

        // Obtener las columnas de los primeros datos
        const columnas = Object.keys(data[0]);
        
        let html = `
            <table>
                <thead>
                    <tr>
                        ${columnas.map(col => `<th>${this.#capitalize(col)}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
        `;

        // Agregar filas
        data.forEach(item => {
            html += '<tr>';
            columnas.forEach(col => {
                html += `<td>${item[col] || ''}</td>`;
            });
            html += '</tr>';
        });

        html += `
                </tbody>
            </table>
            <div style="margin-top: 10px; color: #666;">
                Total: ${data.length} contactos
            </div>
        `;

        return html;
    }

    #capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    actualizar() {
        this.renderizarTabla();
    }
}