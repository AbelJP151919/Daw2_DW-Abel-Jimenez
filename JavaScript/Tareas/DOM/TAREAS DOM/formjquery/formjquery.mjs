$(document).ready(function() {
    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        
        const nombre = $('#nombre').val();
        const apellido = $('#apellido').val();
        const DNI = $('#DNI').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const password2 = $('#password2').val();

        if (nombre === '' || email === '' || apellido === '' || DNI === '' || password === '' || password2 === '') {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Por favor, ingresa un email válido');
            return;
        }
        
        if (!isSamePassword(password, password2)) {
            alert('Las contraseñas no coinciden');
            return;
        }
        if (!isValidDNI(DNI)) {
            alert('Por favor, ingresa un DNI válido (8 dígitos numéricos)');
            return;
        }
        
        procesarFormulario(nombre, apellido, DNI, email, password);
    });

     $('#boton1').on('click', function() {
        limpiarFormulario();
    });
    
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    function isSamePassword(password, password2) {
        return password === password2;
    }
    function isValidDNI(dni) {
    return /^\d{8}$/.test(dni); 
    }
    
    function procesarFormulario(nombre, apellido, DNI, email, password) {
        console.log('Datos del formulario:');
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('DNI:', DNI);
        console.log('Email:', email);
        console.log('Password:', password);
        
        alert(`¡Gracias ${nombre}! Tu formulario se ha enviado correctamente.`);
        
        limpiarFormulario();
    }
    function limpiarFormulario() {
        $('#formulario')[0].reset();
    }
});