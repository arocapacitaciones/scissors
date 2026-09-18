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
    <article class="article-card reveal" data-category="${item.category}">
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
    const filtered = filter === "Todos" ? list : list.filter((a) => a.category === filter);
    grid.innerHTML = filtered.map(articleCard).join("");
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
    <div class="research-item reveal">
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
      ${
        item.image
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

  return { renderArticles, renderFilters, renderResearch, renderGallery };
})();
