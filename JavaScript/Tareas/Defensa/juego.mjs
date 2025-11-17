$(document).ready(function () { 
  let juegoAcabado = false;
  const cuadrado = $("#cuadrado").val()

  $("#facil").on("click", function () {
    cuadrado.style.width=1;
    cuadrado.style.height=1;

  });
  $("#medio").on("click", function () {
  });
  $("#dificil").on("click", function () {
  });




  function limpiarJuego() {
    tablero = ["", "", "", "", "", "", "", "", ""];
    $(".celda").text("");
    juegoAcabado = false;
    jugadorActual = "X";
    $("#mensaje").text("");
  }

  $("#reseteo").on("click", function () {
    limpiarJuego();
  });
});
