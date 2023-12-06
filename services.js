// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  var botonDerecha1 = document.getElementById("botonDerecha1");
  var imagenIzquierda1 = document.getElementById("imagenIzquierda1");
  var leftValue = 0;

  // Función para animar el movimiento de la imagen
  function animateImage() {
    leftValue += 1; // Velocidad de movimiento
    imagenIzquierda1.style.left = leftValue + "%";

    // Si no ha alcanzado el final, sigue animando
    if (leftValue < 100) {
      requestAnimationFrame(animateImage);
    }
  }

  // Agregamos un evento de clic al boton
  botonDerecha1.addEventListener("click", function () {
    // Reiniciamos el valor de la posición antes de comenzar la animación
    leftValue = 0;

    animateImage();
  });
  //Función para hacer que la imagen se desvanezca
  // Agregamos un evento de clic al boton
  var imagen = document.getElementById("imagenIzquierda2");
  var boton = document.getElementById("botonDerecha2");

  boton.addEventListener("click", function () {
    if (imagen.style.opacity === "0") {
      // Si la opacidad es 0, pasarla a 1 para mostrar la imagen
      imagen.style.opacity = "1";
    } else {
      // Si la opacidad no es 0, pasarla a 0 para desvanecer la imagen
      imagen.style.opacity = "0";
    }
  });
  const botonRedireccionar = document.getElementById("botonVolverAlInicio");

  botonRedireccionar.addEventListener("click", function () {
    window.location.href = "./index.html";
  });
});
