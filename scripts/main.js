document.getElementById('contactForm') .addEventListener('submit', function(event) {
    event.preventDefault();

    //basic validation form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Gracias por contactarnos, ' + name + '. Nos pondremos en contacto contigo pronto');

        //Aqui se agrega codigo para enviar el formulario aun servidor 
    } else {
        alert('Por favor llena todos los campos');
    }
    });

    // seleccionar elementos del carrusel 

    const carruselSlide = document.querySelector('.carrusel-slide');
    const imagenes = document.querySelectorAll('.carrusel-slide img');

    //Contador 
    let contador = 0;
    const tamaño = imagenes[0].clientWidth;

    //Funcion para mover las imagenes o el carrusel
    function moverCarrusel() {
        carruselSlide.style.transform = 'translateX(${-tamaño * contador}px)';
    }

    // Funcion para cambiar automaticamente las imagenes
    function cambiarImagenAutomaticamente() {
        if (contador < imagenes.length - 1) {
            contador++; // Avanzar a la siguiente imagen
        } else {
            // Reiniciar suavemente 
            carruselSlide.style.transition = 'none'; // Desactivar transicion
            contador = 0; // Regresar a la primera imagen
            moverCarrusel(); // mover carrusel sin animacion
            setTimeout(() => {
                carruselSlide.style.transition = 'transform 0.5s ease-in-out'; // Activar transicion
        },0);
        }
        moverCarrusel();
    }

    // Cambiar automaticamente las imaagenes cada 3 segundos (3000 ms)
    setInterval(cambiarImagenAutomaticamente, 3000);





