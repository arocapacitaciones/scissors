/* =========================================================
   ANIMATIONS.JS
   Revelado progresivo al hacer scroll y conteo animado de las
   cifras de la sociedad. Respeta prefers-reduced-motion.
   ========================================================= */

const ScrollReveal = (() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let observer;

  const getObserver = () => {
    if (observer) return observer;
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    return observer;
  };

  const observeAll = () => {
    const targets = document.querySelectorAll(".reveal, .reveal-stagger");
    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const obs = getObserver();
    targets.forEach((el) => {
      if (!el.classList.contains("is-visible")) obs.observe(el);
    });
  };

  return { observeAll };
})();

const Counters = (() => {
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const init = () => {
    const nodes = document.querySelectorAll("[data-count]");
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-counting");
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    nodes.forEach((node) => observer.observe(node));
  };

  return { init };
})();
