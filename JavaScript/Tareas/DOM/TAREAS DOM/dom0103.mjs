const botonVerde = document.getElementById("button");
const botonAzul = document.getElementById("button1");
const botonRojo = document.getElementById("button2");
const botonAmarillo = document.getElementById("button3");
const texto = document.getElementById("text");

botonVerde.addEventListener("click", () => texto.replaceChild("Texto 1"));
botonAzul.addEventListener("click", () => texto.replaceChild());
botonRojo.addEventListener("click", () => texto.replaceChild());
botonAmarillo.addEventListener("click", () => texto.replaceChild());