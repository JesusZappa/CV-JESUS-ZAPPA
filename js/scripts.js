document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      document.body.style.opacity = 0; // Establecer opacidad a 0
      setTimeout(function() {
        window.location.href = href; // Cambiar a la nueva página después de la transición
      }, 100); // Tiempo de transición (0.5 segundos en este caso)
    });
  });
});