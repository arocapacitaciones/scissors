/* =========================================================
   DATA.JS
   CONTENIDO IMG PARA ARTÍCULOS, INVESTIGACIONES Y CONCURSOS
   ========================================================= */

/* -------------------------------------------
                DATA ARTÍCULOS
 -------------------------------------------- */
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

/* -------------------------------------------
                DATA INVESTIGACIONES
 -------------------------------------------- */

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
    status: "curso",
    title: "Uso de plasma rico en plaquetas en tendinopatía rotuliana crónica",
    meta: "Ensayo clínico · Inicio 2025 · Fase de reclutamiento",
    excerpt:
      "Evaluación comparativa frente a manejo conservador estándar en deportistas amateur.",
    link: "#",
  },
];

/* -------------------------------------------
                DATA CURSOS
 -------------------------------------------- */
const COURSES = [
  {
    label: "Curso taller",
    title: "SKILL LAB TRAUMA",
    subtitle: "Principios básicos en osteosíntesis",
    organizer: "Traumatología Hospital Santa Bárbara",
    location: "Auditorio DEI HSB",
    date: "24 al 27 de septiembre de 2026",
    time: "16:30 a 19:30",
    description:
      "Una introducción práctica al mundo de la reducción y fijación para quienes quieren fortalecer sus bases en traumatología y ortopedia.",
    audience:
      "Residentes, médicos generales, internos del área de salud y estudiantes.",
    certification: "Certificación avalada por 25 horas académicas",
    pricing: [
      "Bs 70 · Residentes y médicos generales",
      "Bs 40 · Internos y estudiantes",
    ],
    phones: "75436375 o 63759145",
    whatsapp: "59175436375",
    images: [
      {
        src: "img/cursos/img-01.jpg",
        alt: "Afiche promocional del curso Skill Lab Trauma",
      },
      {
        src: "img/cursos/img-02.jpg",
        alt: "Cronograma de los días 1 y 2 del curso Skill Lab Trauma",
      },
      {
        src: "img/cursos/img-03.jpg",
        alt: "Cronograma de los días 3 y 4 del curso Skill Lab Trauma",
      },
    ],
  },
];

/* -------------------------------------------
                DATA CONCURSOS
 -------------------------------------------- */
const GALLERY = [
  {
    title: "Congreso Nacional de Ortopedia",
    year: "2025",
    size: "wide",
    image: "img/concursos/img4.jpg",
    description: "Evento realizado en la ciudad de México - Centro de Ortopedia abc",
  },
  {
    title: "Concurso de Casos Clínicos",
    year: "2025",
    size: "tall",
    image: "img/concursos/img3.jpg",
    description: "Evento realizado en ... 1",
  },
  {
    title: "Jornada de Cirugía de Columna",
    year: "2024",
    size: "normal",
    image: "img/concursos/img1.jpg",
    description: "Evento realizado en ... 2",
  },
  {
    title: "Encuentro Latinoamericano SLAOT",
    year: "2024",
    size: "normal",
    image: "img/concursos/img2.jpg",
    description: "Evento realizado en ... 3",
  },
  {
    title: "Premio a la Mejor Investigación",
    year: "2024",
    size: "normal",
    image: "img/concursos/img0.jpg",
    description: "Evento realizado en ... 4",
  },
  {
    title: "Taller de Artroscopía de Rodilla",
    year: "2023",
    size: "wide",
    image: "img/concursos/img0.jpg",
    description: "Evento realizado en ... 5",
  },
];
