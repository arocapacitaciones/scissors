/* =========================================================
   DATA.JS
   Fuente de contenido del portal. Edita estos arreglos para
   publicar nuevos artículos, investigaciones o fotos de
   concursos sin tocar el HTML ni la lógica de renderizado.
   ========================================================= */

/**
 * Artículos y publicaciones.
 * category se usa también para el filtro de la sección.
 */
const ARTICLES = [
  {
    category: "Clínica",
    title: "Manejo actual de la fractura de cadera en el adulto mayor",
    excerpt:
      "Protocolo institucional para reducir el tiempo puerta-quirófano y mejorar la recuperación funcional temprana.",
    author: "Dra. M. Fernández",
    date: "2026-06-02",
  },
  {
    category: "Técnica quirúrgica",
    title: "Abordaje mínimamente invasivo en artroplastia de cadera",
    excerpt:
      "Comparación de resultados perioperatorios entre abordaje anterior directo y posterolateral en 120 casos.",
    author: "Dr. J. Rocabado",
    date: "2026-05-18",
  },
  {
    category: "Columna",
    title: "Estabilización posterior en fracturas toracolumbares",
    excerpt:
      "Revisión de indicaciones quirúrgicas y no quirúrgicas según la clasificación TLICS en nuestro medio.",
    author: "Dr. A. Quispe",
    date: "2026-05-04",
  },
  {
    category: "Pediatría",
    title: "Displasia del desarrollo de cadera: diagnóstico temprano",
    excerpt:
      "Actualización de criterios ecográficos y clínicos para el tamizaje neonatal en consulta ambulatoria.",
    author: "Dra. C. Vargas",
    date: "2026-04-21",
  },
  {
    category: "Trauma",
    title: "Fijación externa en fracturas expuestas de tibia",
    excerpt:
      "Serie de casos y algoritmo de decisión para conversión a osteosíntesis definitiva.",
    author: "Dr. L. Montaño",
    date: "2026-04-09",
  },
  {
    category: "Técnica quirúrgica",
    title: "Reconstrucción ligamentaria de rodilla guiada por artroscopía",
    excerpt:
      "Puntos técnicos clave para el posicionamiento de túneles en plastía de LCA con injerto autólogo.",
    author: "Dr. R. Salinas",
    date: "2026-03-27",
  },
];

/**
 * Resultados de investigaciones realizadas o en curso por la sociedad.
 * status admite: "curso" | "publicado"
 */
const RESEARCH = [
  {
    status: "publicado",
    title: "Prevalencia de osteoartrosis de rodilla en altura sobre 3500 msnm",
    meta: "Estudio observacional · 2025 · Revista Boliviana de Ortopedia",
    excerpt:
      "Cohorte de 340 pacientes evaluados clínica y radiográficamente en tres centros de la sociedad.",
    link: "#",
  },
  {
    status: "curso",
    title: "Resultados funcionales a 5 años de la prótesis total de cadera no cementada",
    meta: "Estudio de seguimiento · Inicio 2023 · Multicéntrico",
    excerpt:
      "Seguimiento clínico-funcional mediante escala Harris Hip Score en cohorte prospectiva.",
    link: "#",
  },
  {
    status: "publicado",
    title: "Complicaciones tempranas en cirugía de columna en pacientes mayores de 70 años",
    meta: "Estudio retrospectivo · 2024 · Congreso Nacional SCISSORS",
    excerpt:
      "Análisis de 96 procedimientos con enfoque en factores de riesgo perioperatorio modificables.",
    link: "#",
  },
  {
    status: "curso",
    title: "Uso de plasma rico en plaquetas en tendinopatía rotuliana crónica",
    meta: "Ensayo clínico · Inicio 2025 · Fase de reclutamiento",
    excerpt:
      "Evaluación comparativa frente a manejo conservador estándar en deportistas amateur.",
    link: "#",
  },
];

/**
 * Fotos de congresos y concursos en los que la sociedad ha participado.
 * Coloca las imágenes reales en /img/concursos/ y reemplaza `image: null`
 * por la ruta correspondiente, por ejemplo:
 *   image: "img/concursos/congreso-nacional-2025.jpg"
 * Mientras no exista la imagen, se muestra un marcador visual de la
 * misma paleta del sitio para que el diseño quede listo para producción.
 */
const GALLERY = [
  {
    title: "Congreso Nacional de Ortopedia",
    year: "2025",
    size: "wide",
    image: "img/concursos/congreso-nacional-2025.svg",
  },
  {
    title: "Concurso de Casos Clínicos",
    year: "2025",
    size: "tall",
    image: "img/concursos/concurso-casos-2025.svg",
  },
  {
    title: "Jornada de Cirugía de Columna",
    year: "2024",
    size: "normal",
    image: "img/concursos/jornada-columna-2024.svg",
  },
  {
    title: "Encuentro Latinoamericano SLAOT",
    year: "2024",
    size: "normal",
    image: "img/concursos/encuentro-slaot-2024.svg",
  },
  {
    title: "Premio a la Mejor Investigación",
    year: "2024",
    size: "normal",
    image: "img/concursos/premio-investigacion-2024.svg",
  },
  {
    title: "Taller de Artroscopía de Rodilla",
    year: "2023",
    size: "wide",
    image: "img/concursos/taller-artroscopia-2023.svg",
  },
];
