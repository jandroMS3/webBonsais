//script para que cada vez que se pulse el título, una letra cambie de color
//cuando todas las letras han cambiado de color, se vuelve a empezar el bucle

const titulo = document.getElementById('logoTitle');
  const estadosLetras = Array.from(titulo.textContent).map(() => false);

//Se usa el evento addEventListener
//Queda pendiente hacer que en el espacio entre palabras, no contabilice click
  titulo.addEventListener('click', () => {
    const index = estadosLetras.findIndex(estado => !estado);

    if (index === -1) {
      estadosLetras.fill(false);
    } else {
      estadosLetras[index] = true;
    }

    titulo.innerHTML = titulo.textContent
      .split('')
      .map((letra, i) => `<span style="color: ${estadosLetras[i] ? 'green' : 'black'}">${letra}</span>`)
      .join('');
  });


  //script para cambiar los iconos de tamaño y color cuando se pasa el cursos por encima
  //se usan los eventos mouseenter y mouseleave
  
  const iconos = document.querySelectorAll('.social-icons a i');

  function getIconColor(icono) {
    if (icono.classList.contains('la-instagram')) return '#ff69b4';
    if (icono.classList.contains('la-facebook')) return '#0766ff';
    if (icono.classList.contains('la-whatsapp')) return '#4caf50';
    if (icono.classList.contains('la-twitter')) return '#1da1f2'; 
    return '';
  }

  iconos.forEach(icono => {
    icono.addEventListener('mouseenter', () => {
      icono.style.transform = 'scale(1.5)';
      icono.style.color = getIconColor(icono);
    });

    icono.addEventListener('mouseleave', () => {
      icono.style.transform = 'scale(1)';
      icono.style.color = 'white';
    });
  });

