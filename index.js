// Obtiene las referencias a los elementos del DOM
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const navegacion = document.getElementById("navegacion");

// Función para abrir el menú
menuToggle.addEventListener("click", () => {
    navegacion.classList.add("show"); // Muestra el menú añadiendo la clase 'show'
    closeMenu.style.display = "block"; // Muestra el botón de cerrar
});

// Función para cerrar el menú
closeMenu.addEventListener("click", () => {
    navegacion.classList.remove("show"); // Oculta el menú quitando la clase 'show'
    closeMenu.style.display = "none"; // Oculta el botón de cerrar
});



document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    // Mueve el carrusel a la siguiente diapositiva
    function moveToNext() {
      if (currentIndex < items.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Vuelve al principio
      }
      updateCarouselPosition();
    }
  
    // Mueve el carrusel a la diapositiva anterior
    function moveToPrev() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = items.length - 1; // Va al final
      }
      updateCarouselPosition();
    }
  
    // Actualiza la posición del carrusel para que se desplace
    function updateCarouselPosition() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Mueve el carrusel 100% por cada diapositiva
    }
  
    // Agregar eventos a los botones de navegación
    nextButton.addEventListener('click', moveToNext);
    prevButton.addEventListener('click', moveToPrev);
  });

  let currentIndex = 0;
  const carousel = document.querySelector('.testimonial-carousel');
  const items = document.querySelectorAll('.testimonial-carousel-item');
  const totalItems = items.length;
  
  // Función para mover el carrusel
  function moveCarousel() {
    currentIndex = (currentIndex + 1) % totalItems; // Cicla los índices de los testimonios
    const offset = -currentIndex * 100;  // Mueve el carrusel al siguiente item
    carousel.style.transform = `translateX(${offset}%)`; // Desplazamiento suave
  }
  
  // Iniciar el carrusel automático cada 4 segundos
  setInterval(moveCarousel, 6000); // Cambia de testimonio cada 4 segundos