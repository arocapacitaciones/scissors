/* =========================================================
   MAIN.JS
   Punto de entrada. Inicializa cada módulo cuando el DOM está
   listo. El orden importa: primero se pinta el contenido
   (Render) y luego se activan las interacciones que dependen
   de él (filtros, lightbox, animaciones).
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Pintar contenido dinámico desde data.js
  Render.renderFilters(ARTICLES);
  Render.renderArticles(ARTICLES);
  Render.renderResearch(RESEARCH);
  Render.renderGallery(GALLERY);

  // 2. Activar interacciones
  Nav.init();
  Filters.init();
  Lightbox.init();
  BackToTop.init();
  ContactForm.init();
  Counters.init();

  // 3. Animaciones de entrada
  ScrollReveal.observeAll();

  // Año dinámico en el pie de página
  const yearEl = document.querySelector("[data-current-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
