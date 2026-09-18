/* =========================================================
   GALLERY.JS
   Filtro de artículos, ventana modal (lightbox) para la
   galería de concursos y botón "volver arriba".
   ========================================================= */

/*----------------------------
        FILTRO ARTICLE
 ----------------------------*/
const Filters = (() => {
  const init = () => {
    const bar = document.querySelector("[data-filter-bar]");
    if (!bar) return;

    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      Render.renderArticles(ARTICLES, btn.getAttribute("data-filter"));
    });
  };

  return { init };
})();

/*----------------------------
          MODAL DETAIL
 ----------------------------*/
const Lightbox = (() => {
  const lightbox = document.querySelector("[data-lightbox]");
  const titleEl = lightbox?.querySelector("[data-lightbox-title]");
  const yearEl = lightbox?.querySelector("[data-lightbox-year]");
  const imageEl = lightbox?.querySelector("[data-lightbox-image]");
  const detailEl = lightbox?.querySelector("[data-lightbox-detail]");
  const closeBtn = lightbox?.querySelector("[data-lightbox-close]");
  const previousBtn = lightbox?.querySelector("[data-lightbox-prev]");
  const nextBtn = lightbox?.querySelector("[data-lightbox-next]");
  let courseImageIndex = 0;

  const open = (item, type, index = 0) => {
    if (!lightbox) return;
    courseImageIndex = index;
    titleEl.textContent = item.title || item.alt;
    lightbox.classList.toggle("lightbox--image-only", type === "course-image");
    previousBtn?.classList.toggle("is-visible", type === "course-image");
    nextBtn?.classList.toggle("is-visible", type === "course-image");

    // CASO ARTICULOS
    if (type === "article") {
      yearEl.textContent = `${item.category} · ${formatDate(item.date)}`;
      imageEl.hidden = true;
      detailEl.textContent = `${item.excerpt} Autoría: ${item.author}.`;
    } else {

      // CASO CONCURSOS Y MATERIAL DEL CURSO
      if (type === "gallery" || type === "course-image") {
        const imageSource = item.image || item.src;
        const imageTitle = item.title || item.alt;
        yearEl.textContent = type === "course-image" ? "SKILL LAB TRAUMA" : `Edición ${item.year}`;
        imageEl.src = imageSource || "";
        imageEl.alt = imageTitle;
        imageEl.hidden = !imageSource;
        detailEl.textContent = item.description || item.alt;
      } else {

        // CASO INVESTIGACIONES
        yearEl.textContent = item.meta;
        imageEl.hidden = true;
        detailEl.textContent = item.excerpt;
      }
    }
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    lightbox?.classList.remove("is-open");
    lightbox?.classList.remove("lightbox--image-only");
    previousBtn?.classList.remove("is-visible");
    nextBtn?.classList.remove("is-visible");
    lightbox?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const showCourseImage = (index) => {
    const images = COURSES[0]?.images || [];
    if (!images.length) return;
    const nextIndex = (index + images.length) % images.length;
    open(images[nextIndex], "course-image", nextIndex);
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate + "T00:00:00");
    return date.toLocaleDateString("es-BO", { day: "2-digit", month: "short", year: "numeric" });
  };

  const init = () => {
    const grid = document.querySelector("[data-gallery-grid]");
    const articles = document.querySelector("[data-articles-grid]");
    const research = document.querySelector("[data-research-list]");
    const courses = document.querySelector("[data-courses-list]");
    if (!lightbox) return;

    const openDetail = (element) => {
      const type = element.dataset.detailType;
      const index = Number(element.dataset.detailIndex);
      const item = type === "article"
        ? ARTICLES[index]
        : type === "course-image"
          ? COURSES[0]?.images[index]
          : RESEARCH[index];
      if (item) open(item, type, index);
    };

    [articles, research, courses].forEach((container) => {
      container?.addEventListener("click", (e) => {
        const item = e.target.closest("[data-detail-type]");
        if (!item) return;
        if (e.target.closest("a")) e.preventDefault();
        openDetail(item);
      });

      container?.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        const item = e.target.closest("[data-detail-type]");
        if (!item) return;
        e.preventDefault();
        openDetail(item);
      });
    });

    if (!grid) return;

    grid.addEventListener("click", (e) => {
      const item = e.target.closest("[data-gallery-index]");
      if (!item) return;
      open(GALLERY[Number(item.dataset.galleryIndex)], "gallery");
    });

    grid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const item = e.target.closest("[data-gallery-index]");
      if (!item) return;
      e.preventDefault();
      open(GALLERY[Number(item.dataset.galleryIndex)], "gallery");
    });

    closeBtn?.addEventListener("click", close);
    previousBtn?.addEventListener("click", () => showCourseImage(courseImageIndex - 1));
    nextBtn?.addEventListener("click", () => showCourseImage(courseImageIndex + 1));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
      if (!lightbox.classList.contains("lightbox--image-only")) return;
      if (e.key === "ArrowLeft") showCourseImage(courseImageIndex - 1);
      if (e.key === "ArrowRight") showCourseImage(courseImageIndex + 1);
    });
  };

  return { init };
})();

/*----------------------------
        BUTTON HOME
 ----------------------------*/
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

/*----------------------------
        CONTÁCTANOS
 ----------------------------*/
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
