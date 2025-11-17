$(document).ready(function () {
  let jugadorActual = "X";
  let tablero = ["", "", "", "", "", "", "", "", ""];
  let juegoAcabado = false;
  let contadorX = 0;
  let contadorO = 0;

  $(".celda").on("click", function () {
    let posicion = $(this).data("pos");

    if (tablero[posicion] === "" && !juegoAcabado) {
      tablero[posicion] = jugadorActual;
      $(this).text(jugadorActual);

      if (verificarGanador(jugadorActual)) {
        juegoAcabado = true;
        $("#mensaje").text(
          "¡Ganaron las " + (jugadorActual === "X" ? "X" : "O") + "!"
          
        );
        if (jugadorActual === "X") {
            contadorX+=1
           $("#contadorJugadasO").text("X:"+ contadorO)
        } else {
            contadorO+=1
         
          $("#contadorJugadasX").text("O:" + contadorX)

        }
      } else if (tablero.every(celda => celda !=="")) {
        juegoAcabado = true;
        $("#mensaje").text("Habeis quedado empate!");
      } else {
        jugadorActual = jugadorActual === "X" ? "O" : "X";
        if (jugadorActual === "X") {
            $("#turno-actual").text("X");
            contadorX+=1
           $("#contadorJugadasX").text("O:" + contadorX)


        } else {
           $("#turno-actual").text("O");
            contadorO+=1
          $("#contadorJugadasO").text("X:"+ contadorO)

        }
        return;
      }
    }
  });

  function verificarGanador(jugador) {
    //Para las filas
    if (
      tablero[0] === jugador &&
      tablero[1] === jugador &&
      tablero[2] === jugador
    )
      return true;
    if (
      tablero[3] === jugador &&
      tablero[4] === jugador &&
      tablero[5] === jugador
    )
      return true;
    if (
      tablero[6] === jugador &&
      tablero[7] === jugador &&
      tablero[8] === jugador
    )
      return true;
    //Para las Columnas
    if (
      tablero[0] === jugador &&
      tablero[3] === jugador &&
      tablero[6] === jugador
    )
      return true;
    if (
      tablero[1] === jugador &&
      tablero[4] === jugador &&
      tablero[7] === jugador
    )
      return true;
    if (
      tablero[2] === jugador &&
      tablero[5] === jugador &&
      tablero[8] === jugador
    )
      return true;
    //Para las diagonales
    if (
      tablero[0] === jugador &&
      tablero[4] === jugador &&
      tablero[8] === jugador
    )
      return true;
    if (
      tablero[2] === jugador &&
      tablero[4] === jugador &&
      tablero[6] === jugador
    )
      return true;
  }

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
