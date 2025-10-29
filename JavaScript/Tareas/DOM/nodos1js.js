document.addEventListener('DOMContentLoaded', function() {
    // Elementos principales
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const num3 = document.getElementById('num3');
    const resultado = document.getElementById('resultado');
    const btnCalcular = document.getElementById('calcular');

    // Botones de ocultar/mostrar
    const botonesOcultar = document.querySelectorAll('.btn-ocultar');
    
    // Botones de activar/desactivar
    const botonesActivar = document.querySelectorAll('.btn-activar');

    // Función para ocultar/mostrar campos
    botonesOcultar.forEach(boton => {
        boton.addEventListener('click', function() {
            const campoId = this.getAttribute('data-campo');
            const campo = document.getElementById(campoId);
            
            if (campo.style.display === 'none') {
                campo.style.display = 'inline-block';
                this.textContent = 'Ocultar';
            } else {
                campo.style.display = 'none';
                this.textContent = 'Mostrar';
            }
        });
    });

    // Función para activar/desactivar campos
    botonesActivar.forEach(boton => {
        boton.addEventListener('click', function() {
            const campoId = this.getAttribute('data-campo');
            const campo = document.getElementById(campoId);
            
            if (campo.disabled) {
                campo.disabled = false;
                this.textContent = 'Desactivar';
            } else {
                campo.disabled = true;
                this.textContent = 'Activar';
            }
        });
    });

    // Función para calcular la suma
    btnCalcular.addEventListener('click', function() {
        // Obtener valores y convertir a números (0 si está vacío)
        const valor1 = parseFloat(num1.value) || 0;
        const valor2 = parseFloat(num2.value) || 0;
        const valor3 = parseFloat(num3.value) || 0;
        
        // Calcular suma
        const suma = valor1 + valor2 + valor3;
        
        // Mostrar resultado
        resultado.value = suma;
        
        console.log('Suma calculada:', suma);
    });
});