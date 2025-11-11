$(document).ready(function() {
    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        
        // Estas son las variables que hacen falta para el ejercicio
        const nombre = $('#nombre').val();
        const apellido = $('#apellido').val();
        const DNI = $('#DNI').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const password2 = $('#password2').val();

        /**
         (Es la misma explicacion que en el formDOM.mjs, ya que he reciclado el codigo, simplemente he sustituido las variables por variables del jquery)
        Explicacion del codigo:
        A la hora de pulsar el boton de enviar el formulario, antes de enviarlo "pasa" la informacion por varios if-else para validar que todos los
        campos se han rellenado correctamente. Si un campo no se ha rellenado correctamente se le indica con un windows.alert(Fallo que ha cometido el usuario).
        Si esta todo bien, se envia todos los datos y se le muestra al usuario que se ha enviado correctamente.
        Ademas hay un boton de resetear formulario que pone el formulario vacio nuevamente
        */

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