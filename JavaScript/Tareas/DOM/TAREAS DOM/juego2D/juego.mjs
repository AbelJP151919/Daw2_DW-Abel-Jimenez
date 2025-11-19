let nivel = "";
let temporizador = 0;
let tamaño = 0;
let juegoActivo = false;

export function iniciarJuego() {
    $("#facil").click(function () {
        nivel = "facil";
        temporizador = 4000;
        tamaño = 100;
        comenzarJuego();
    });

    $("#medio").click(function () {
        nivel = "medio";
        temporizador = 3000;
        tamaño = 200;
        comenzarJuego();
    });

    $("#dificil").click(function () {
        nivel = "dificil";
        temporizador = 2000;
        tamaño = 300;
        comenzarJuego();
    });
}

function comenzarJuego() {
    alert("Iniciando juego con dificultad: " + nivel);
    juegoActivo = true;
    
    if ($(".cuadrado").length === 0) {
        $("body").append('<div class="cuadrado"></div>');
    }
    
    $(".cuadrado").css({
        "width": tamaño + "px",
        "height": tamaño + "px",
        "background-color": "blue",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
        "cursor": "pointer"
    });

    $(".cuadrado").off("click").on("click", function() {
        if (!juegoActivo) return;
        
        if (nivel === "facil") {
            tamaño -= 10;
        } else if (nivel === "medio") {
            tamaño -= 15;
        } else if (nivel === "dificil") {
            tamaño -= 20;
        }
        
        $(this).css({
            "width": tamaño + "px",
            "height": tamaño + "px",
            "background-color": "red"
        });
        
        if (tamaño <= 0) {
            juegoActivo = false;
            alert("¡Ganaste! El cuadrado desapareció.");
            $(".cuadrado").remove();
        }
    });

    let intervalo = setInterval(function() {
        if (!juegoActivo) {
            clearInterval(intervalo);
            return;
        }
        
        temporizador -= 100;
        
        if (temporizador <= 0) {
            juegoActivo = false;
            alert("¡Se acabó el tiempo!");
            $(".cuadrado").remove();
            clearInterval(intervalo);
        }
    }, 100);
}