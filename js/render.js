/* =========================================================
   RENDER.JS
   Convierte los datos de data.js en marcado HTML dentro de
   cada sección. Mantener la lógica de render separada de los
   datos facilita añadir contenido nuevo sin tocar este archivo.
   ========================================================= */

const Render = (() => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate + "T00:00:00");
    return date.toLocaleDateString("es-BO", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const initials = (fullName) =>
    fullName
      .replace(/^(Dra?\.)\s*/i, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();

  /* ---------- Artículos ---------- */
  const articleCard = (item) => `
    <article class="article-card reveal" data-category="${item.category}"
             data-detail-type="article" data-detail-index="${ARTICLES.indexOf(item)}" tabindex="0" role="button"
             aria-label="Ver detalle: ${item.title}">
      <div class="article-card__top">
        <span class="tag">${item.category}</span>
        <time class="article-card__date" datetime="${item.date}">${formatDate(item.date)}</time>
      </div>
      <div class="article-card__body">
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <div class="article-card__foot">
          <div class="article-card__author">
            <span class="article-card__author-dot">${initials(item.author)}</span>
            ${item.author}
          </div>
          <a class="article-card__link" href="#">Leer &rarr;</a>
        </div>
      </div>
    </article>
  `;

  const renderArticles = (list, filter = "Todos") => {
    const grid = document.querySelector("[data-articles-grid]");
    if (!grid) return;
    const selectedFilter = String(filter).trim();
    const filtered = selectedFilter === "Todos"
      ? list
      : list.filter((article) => article.category.trim() === selectedFilter);
    grid.innerHTML = filtered.length
      ? filtered.map(articleCard).join("")
      : `<p class="articles__empty">No hay artículos disponibles para esta categoría.</p>`;
    grid.querySelectorAll(".reveal").forEach((card) => card.classList.add("is-visible"));
    if (window.ScrollReveal) window.ScrollReveal.observeAll();
  };

  const renderFilters = (list) => {
    const bar = document.querySelector("[data-filter-bar]");
    if (!bar) return;
    const categories = ["Todos", ...new Set(list.map((a) => a.category))];
    bar.innerHTML = categories
      .map(
        (cat, i) =>
          `<button class="filter-btn${i === 0 ? " is-active" : ""}" data-filter="${cat}">${cat}</button>`
      )
      .join("");
  };

  /* ---------- Investigaciones ---------- */
  const researchItem = (item) => `
    <div class="research-item reveal" data-detail-type="research" data-detail-index="${RESEARCH.indexOf(item)}"
         tabindex="0" role="button" aria-label="Ver detalle: ${item.title}">
      <span class="research-item__status research-item__status--${item.status}">
        ${item.status === "curso" ? "En curso" : "Publicado"}
      </span>
      <div class="research-item__body">
        <h3>${item.title}</h3>
        <p class="research-item__meta">${item.meta}</p>
        <p class="research-item__excerpt">${item.excerpt}</p>
      </div>
      <a class="research-item__link" href="${item.link}">Ver resultados &rarr;</a>
    </div>
  `;

  const renderResearch = (list) => {
    const container = document.querySelector("[data-research-list]");
    if (!container) return;
    container.innerHTML = list.map(researchItem).join("");
    if (window.ScrollReveal) window.ScrollReveal.observeAll();
  };

  /* ---------- Cursos y talleres ---------- */
  const courseCard = (item) => `
    <article class="course-card reveal">
      <div class="course-card__intro">
        <span class="course-card__label">${item.label}</span>
        <h3>${item.title}</h3>
        <p class="course-card__subtitle">${item.subtitle}</p>
        <p class="course-card__description">${item.description}</p>
        <p class="course-card__organizer">Organiza: <strong>${item.organizer}</strong></p>
        <div class="course-card__media">
          ${item.images.map((image, imageIndex) => `
            <a href="${image.src}" data-detail-type="course-image" data-detail-index="${imageIndex}" tabindex="0" aria-label="Ver imagen completa: ${image.alt}">
              <img src="${image.src}" alt="${image.alt}" loading="lazy">
            </a>
          `).join("")}
        </div>
      </div>
      <div class="course-card__details">
        <div class="course-detail"><span>Fecha</span><strong>${item.date}</strong></div>
        <div class="course-detail"><span>Horario</span><strong>${item.time}</strong></div>
        <div class="course-detail"><span>Lugar</span><strong>${item.location}</strong></div>
        <div class="course-detail"><span>Dirigido a</span><strong>${item.audience}</strong></div>
        <div class="course-detail course-detail--pricing"><span>Inversión</span>${item.pricing.map((price) => `<strong>${price}</strong>`).join("")}</div>
        <div class="course-card__certification">${item.certification}</div>
        <div class="course-card__actions">
          <a class="btn btn-primary" href="https://wa.me/${item.whatsapp}?text=Hola%2C%20quiero%20informaci%C3%B3n%20e%20inscribirme%20al%20${encodeURIComponent(item.title)}" target="_blank" rel="noopener">Inscribirme</a>
          <span>Informes: ${item.phones}</span>
        </div>
      </div>
    </article>
  `;

  const renderCourses = (list) => {
    const container = document.querySelector("[data-courses-list]");
    if (!container) return;
    container.innerHTML = list.map(courseCard).join("");
    if (window.ScrollReveal) window.ScrollReveal.observeAll();
  };

  /* ---------- Galería de concursos ---------- */
  const placeholderIcon = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <circle cx="8.5" cy="10" r="1.6"/>
      <path d="M21 15l-5.5-5-4 4-2-2L3 17"/>
    </svg>
  `;

  const galleryItem = (item, index) => `
    <figure class="gallery-item${item.size === "wide" ? " gallery-item--wide" : ""}${item.size === "tall" ? " gallery-item--tall" : ""}"
            data-gallery-index="${index}" tabindex="0" role="button"
            aria-label="Ver detalle: ${item.title}, ${item.year}">
      ${item.image
      ? `<img src="${item.image}" alt="${item.title}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">`
      : `<div class="gallery-item__placeholder">${placeholderIcon}</div>`
    }
      <figcaption class="gallery-item__caption">
        <strong>${item.title}</strong>
        <span>${item.year}</span>
      </figcaption>
    </figure>
  `;

  const renderGallery = (list) => {
    const grid = document.querySelector("[data-gallery-grid]");
    if (!grid) return;
    grid.innerHTML = list.map(galleryItem).join("");
  };

  return { renderArticles, renderFilters, renderResearch, renderCourses, renderGallery };
})();
