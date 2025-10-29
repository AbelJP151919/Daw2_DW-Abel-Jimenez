//.................................................

//inicializacion

//.................................................

const titulo = document.getElementById("Titulo");
titulo.textContent = "Otro titulo";

const parrafos = document.getElementsByTagName("parrafo");
let n = 1;

for( let parrafo of parrafos){
    parrafo.textContent = "Parrafo " + n++
}

const botones = document.getElementsByName("boton");
for(let b of botones){
    b.value = "Boton " +n++
}
//Eventos

//.................................................

//Funciones

//.................................................