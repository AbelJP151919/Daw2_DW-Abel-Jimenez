const botonVerde = document.getElementById("button");
const botonAzul = document.getElementById("button1");
const botonRojo = document.getElementById("button2");
const botonAmarillo = document.getElementById("button3");
const texto = document.getElementById("text");

botonVerde.addEventListener("click", () => texto.style.color = "green");
botonAzul.addEventListener("click", () => texto.style.color = "blue");
botonRojo.addEventListener("click", () => texto.style.color = "red");
botonAmarillo.addEventListener("click", () => texto.style.color = "yellow");