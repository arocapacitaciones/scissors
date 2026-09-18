/* =========================================================
   NAV.JS
   Comportamiento de la cabecera: menú móvil, estado al hacer
   scroll y resaltado del enlace activo según la sección visible.
   ========================================================= */

const Nav = (() => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-main-nav]");
  const links = document.querySelectorAll("[data-main-nav] .nav-list a");

  const closeMenu = () => {
    nav?.classList.remove("is-open");
    toggle?.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const bindToggle = () => {
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    links.forEach((link) => link.addEventListener("click", closeMenu));
  };

  const bindScrollState = () => {
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  };

  const bindActiveLink = () => {
    const sections = document.querySelectorAll("main section[id]");
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  };

  const init = () => {
    bindToggle();
    bindScrollState();
    bindActiveLink();
  };

  return { init };
})();
