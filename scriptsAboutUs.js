const botonRedireccionar = document.getElementById("botonVolverAlInicio");

botonRedireccionar.addEventListener("click", function () {
  window.location.href = "./index.html";
});

//E nesta animaciòn, se cambia cada 3 segundos, la palabra "Nosotros" por "Nosotras"
function cambiarPalabra() {
  var title = document.getElementById("titleAboutUs");
  var currentText = title.textContent;

  var newText = currentText.includes("NOSOTRAS")
    ? "SOBRE NOSOTROS"
    : "SOBRE NOSOTRAS";

  title.textContent = newText;
}
setInterval(cambiarPalabra, 2000);

//Script para la animación de las imagenes
//Cuando se pasa el cursor por encima, se invierten sobre el plano horizontal
//Se han usado los eventos onmouseover y onmouseout

function invertImage(imageId) {
    var image = document.getElementById(imageId).getElementsByTagName('img')[0];
    image.classList.add('img-hover-effect');
}

function resetImage(imageId) {
    var image = document.getElementById(imageId).getElementsByTagName('img')[0];
    image.classList.remove('img-hover-effect');
}
