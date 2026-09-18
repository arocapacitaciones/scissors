/* =========================================================
   GALLERY.JS
   Filtro de artículos, ventana modal (lightbox) para la
   galería de concursos y botón "volver arriba".
   ========================================================= */

const Filters = (() => {
  const init = () => {
    const bar = document.querySelector("[data-filter-bar]");
    if (!bar) return;

    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      Render.renderArticles(ARTICLES, btn.dataset.filter);
    });
  };

  return { init };
})();

const Lightbox = (() => {
  const lightbox = document.querySelector("[data-lightbox]");
  const titleEl = lightbox?.querySelector("[data-lightbox-title]");
  const yearEl = lightbox?.querySelector("[data-lightbox-year]");
  const closeBtn = lightbox?.querySelector("[data-lightbox-close]");

  const open = (item) => {
    if (!lightbox) return;
    titleEl.textContent = item.title;
    yearEl.textContent = `Edición ${item.year}`;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    lightbox?.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const init = () => {
    const grid = document.querySelector("[data-gallery-grid]");
    if (!grid || !lightbox) return;

    grid.addEventListener("click", (e) => {
      const item = e.target.closest("[data-gallery-index]");
      if (!item) return;
      open(GALLERY[Number(item.dataset.galleryIndex)]);
    });

    grid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const item = e.target.closest("[data-gallery-index]");
      if (!item) return;
      e.preventDefault();
      open(GALLERY[Number(item.dataset.galleryIndex)]);
    });

    closeBtn?.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  };

  return { init };
})();

const BackToTop = (() => {
  const init = () => {
    const btn = document.querySelector("[data-back-to-top]");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      () => btn.classList.toggle("is-visible", window.scrollY > 600),
      { passive: true }
    );

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return { init };
})();

const ContactForm = (() => {
  const init = () => {
    const form = document.querySelector("[data-contact-form]");
    const status = document.querySelector("[data-form-status]");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Este formulario es una maqueta funcional en el frontend.
      // Conecta aquí tu endpoint (fetch/POST) o servicio de correo.
      if (status) {
        status.textContent = "Gracias — tu mensaje quedó registrado. Te contactaremos pronto.";
      }
      form.reset();
    });
  };

  return { init };
})();
