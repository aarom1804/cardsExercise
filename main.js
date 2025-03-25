const element1 = document.getElementById("back1");
const element2 = document.getElementById("back2");

const imagenOriginal = "img/card-back.png";
const imagenCambio = "img/card-front.png";

element1.onmouseover = function() {
    element1.src = imagenCambio;
}

element1.onmouseout = function() {
    element1.src = imagenOriginal;
}

element2.onmouseover = function() {
    element2.src = imagenCambio;
}

element2.onmouseout = function() {
    element2.src = imagenOriginal;
}