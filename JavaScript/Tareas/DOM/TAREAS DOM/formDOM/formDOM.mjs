let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let dni = document.getElementById("dni");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let enviarD = document.getElementById("boton1");
let reset = document.getElementById("boton2");


enviarD.addEventListener("click", () => {
    if (nombre.value === "" || apellido.value === "" || dni.value === "" || email.value === "" || password.value === "" || password2.value === "") {
        window.alert("Por favor, completa todos los campos.");
    } 
    else if (dni.value.length !== 8) {
        window.alert("Por favor, ingresa un DNI válido (8 dígitos numéricos).");
        return;
    }
    else if (password.value !== password2.value) {
        window.alert("Las contraseñas no coinciden. Por favor, verifica.");
        return;
    }
    else if(!email.value.includes("@")) {
        window.alert("Por favor, ingresa un correo electrónico válido.");
        return;
    } else{
        window.alert("Datos enviados:\n"
        + "Nombre: " + nombre.value + "\n"
        + "Apellido: " + apellido.value + "\n"
        + "DNI: " + dni.value + "\n"
        + "Email: " + email.value + "\n"
        + "Password: " + password.value + "\n"
        + "Confirmación de Password: " + password2.value
    );

    }
});

reset.addEventListener("click", resetearForm); 

function resetearForm() {
    nombre.value = "";
    apellido.value = "";
    dni.value = "";
    email.value = "";
    password.value = "";
    password2.value = "";
}