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
  Render.renderCourses(COURSES);
  Render.renderGallery(GALLERY);

  const courseNotice = document.querySelector("[data-course-notice]");
  const courseNoticeClose = courseNotice?.querySelector("[data-course-notice-close]");
  const courseNoticeLink = courseNotice?.querySelector("[data-course-notice-link]");
  const closeCourseNotice = () => {
    courseNotice?.classList.remove("is-open");
    courseNotice?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (courseNotice) {
    courseNotice.classList.add("is-open");
    courseNotice.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    courseNoticeClose?.addEventListener("click", closeCourseNotice);
    courseNoticeLink?.addEventListener("click", closeCourseNotice);
    courseNotice.addEventListener("click", (event) => {
      if (event.target === courseNotice) closeCourseNotice();
    });
  }

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
