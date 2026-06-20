/* ─────────────────────────────────────────
   DATA  —  Información real del perfil
───────────────────────────────────────── */
const DATA = {
  // ── Perfil general ──────────────────────────────────────────────────────
  name: "Bruno Marcos Ferreira",
  initials: "BF",
  role: "Analista de Sistemas & Desarrollador Full Stack Java",
  tagline:
    " Analista de Sistemas y Desarrollador Web Full Stack Java. Apasionado por la arquitectura de software y el desarrollo de soluciones escalables.",
  available: true,

  // ── Sobre mí ────────────────────────────────────────────────────────────
  about: [
    "Analista de Sistemas. Apasionado por la arquitectura de software y el desarrollo de soluciones escalables.",
    "Cuento con experiencia práctica construyendo aplicaciones completas desde cero, implementando seguridad con Spring Security y JWT, y consumiendo APIs con Vue.js y Axios. Busco mi primera experiencia profesional para aportar mi capacidad analítica y dominio de tecnologías modernas.",
  ],

  // ── Stats rápidas ────────────────────────────────────────────────────────
  stats: [
    { value: "3+", label: "Años estudiando" },
    { value: "4+", label: "Proyectos completados" },
    { value: "100%", label: "Comprometido" },
  ],

  // ── Skills (flat list para las tarjetas del hero) ──────────────────────
  // Agrupadas por categoría para el panel de skills
  skillCategories: [
    {
      category: "Frontend",
      icon: "🖥️",
      skills: [
        { icon: "🌐", name: "HTML" },
        { icon: "🎨", name: "CSS" },
        { icon: "⚡", name: "JavaScript" },
        { icon: "🅱️", name: "Bootstrap" },
        { icon: "💨", name: "Tailwind CSS" },
        { icon: "💚", name: "Vue.js" },
        { icon: "🪟", name: "Java Swing" },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { icon: "☕", name: "Java" },
        { icon: "🍃", name: "Spring Boot" },
        { icon: "☁️", name: "Spring Cloud" },
        { icon: "🔐", name: "Spring Security" },
        { icon: "🔑", name: "JWT" },
        { icon: "🔓", name: "OAuth 2.0" },
      ],
    },
    {
      category: "Base de Datos",
      icon: "🗄️",
      skills: [
        { icon: "🐬", name: "MySQL" },
        { icon: "🔵", name: "H2 Database" },
        { icon: "🐘", name: "PostgreSQL" },
      ],
    },
    {
      category: "Análisis Funcional",
      icon: "📐",
      skills: [
        { icon: "📋", name: "Relevamiento de Requerimientos" },
        { icon: "🔀", name: "Diagramas de Flujo de Datos" },
        { icon: "🗺️", name: "Modelo Entidad-Relación" },
        { icon: "📊", name: "UML" },
        { icon: "🧩", name: "DFD de Diseño" },
      ],
    },
  ],

  // Lista plana usada por las tarjetas de skill en la sección visual
  skills: [
    { icon: "☕", name: "Java" },
    { icon: "🍃", name: "Spring Boot" },
    { icon: "☁️", name: "Spring Cloud" },
    { icon: "🔐", name: "Spring Security" },
    { icon: "🔑", name: "JWT / OAuth2" },
    { icon: "🐘", name: "PostgreSQL" },
    { icon: "🗺️", name: "JPA / Hibernate" },
    { icon: "💚", name: "Vue.js" },
    { icon: "💨", name: "Tailwind CSS" },
    { icon: "⚡", name: "JavaScript" },
    { icon: "🐙", name: "Git / GitHub" },
    { icon: "🔀", name: "Microservicios" },
  ],

  // ── Educación ───────────────────────────────────────────────────────────
  education: [
    {
      icon: "🎓",
      period: "2020 — 2025",
      title: "Tecnicatura Superior en Análisis de Sistemas",
      institution: "C.E.P 62 Superior",
      desc: "Formación superior en análisis, diseño e implementación de sistemas informáticos. Misiones, Argentina.",
    },
    {
      icon: "🍃",
      period: "Jun 2025 — Dic 2025",
      title: "Spring Security y JWT",
      institution: "TodoCode Academy",
      desc: "Curso intensivo: seguridad con Spring Security, autenticación JWT y OAuth2.",
    },
    {
      icon: "☁️",
      period: "Dic 2024 — Feb 2025",
      title: "Microservicios con Spring Cloud",
      institution: "TodoCode Academy",
      desc: "Microservicios, Eureka, Config Server y Spring Cloud Gateway.",
    },
    {
      icon: "🚀",
      period: "Jul 2023 — Oct 2023",
      title: "Desarrollo Web FullStack Java",
      institution: "Mindhub",
      desc: "Bootcamp intensivo: Java, Spring Boot y desarrollo web full stack con Vue.js.",
    },
  ],

  // ── Proyectos ───────────────────────────────────────────────────────────
  projects: [
    {
      id: 1,
      emoji: "⚽",
      gradient: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)",
      title: "Sistema de Gestión de Ligas de Fútbol",
      role: "Full-Stack Developer",
      type: "Proyecto Final de Carrera",
      date: "Octubre 2025 - Abril 2026",
      img: "",
      desc: "Plataforma integral para la administración de ligas de fútbol, diseñada para optimizar el registro de jugadores y la auditoría de encuentros mediante un seguimiento detallado y en tiempo real.",
      tags: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "JWT",
        "Vue.js",
        "Spring Security",
        "Tailwind CSS",
      ],
      github: "https://github.com/tu-usuario/mattoffe",
      demo: null,
    },
    {
      id: 2,
      emoji: "🧉",
      gradient: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)",
      title: "MattOffe",
      img: "https://res.cloudinary.com/dqzhz18xh/image/upload/v1772491640/matoffe_qymxsx.png",
      role: "Back-End Developer",
      type: "Proyecto Grupal",
      date: "Septiembre 2023",
      desc: "E-commerce de productos de mate y café. Desarrollo de lógica de negocio backend, gestión de tickets y persistencia de datos relacionales.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA"],
      github: "https://github.com/tu-usuario/mattoffe",
      demo: null,
    },
    {
      id: 3,
      emoji: "🏦",
      gradient: "linear-gradient(135deg,#0f2a1e 0%,#1a5f3a 100%)",
      title: "HomeBanking",
      img: "https://res.cloudinary.com/dqzhz18xh/image/upload/v1772491640/bank_jb4mxm.png",
      role: "Full-Stack Developer",
      type: "Proyecto Personal",
      date: "Septiembre 2023",
      desc: "Sistema bancario completo: gestión de cuentas, transferencias y préstamos. Seguridad con Spring Security y JWT. Frontend en Vue.js con Axios.",
      tags: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Vue.js",
        "Bootstrap",
      ],
      github: "https://github.com/tu-usuario/homebanking",
      demo: null,
    },
    {
      id: 4,
      emoji: "🐾",
      gradient: "linear-gradient(135deg,#1f0f2a 0%,#3a1a5f 100%)",
      title: "DoLittle PetShop",
      role: "Front-End Developer",
      type: "Proyecto Grupal",
      date: "Agosto 2023",
      desc: "SPA para veterinaria. Consumo de APIs para renderizado dinámico de productos y filtros avanzados.",
      tags: ["Vue.js", "JavaScript", "Axios", "Tailwind CSS", "HTML"],
      github: "https://github.com/tu-usuario/dolittle",
      demo: null,
    },
  ],

  // ── Idiomas ─────────────────────────────────────────────────────────────
  languages: [
    { language: "Español", fluency: "Nativo" },
    { language: "Inglés", fluency: "A1 — Lectura técnica y documentación" },
  ],

  // ── Contacto ─────────────────────────────────────────────────────────────
  contact: {
    email: "fbrunomarcos@gmail.com",
    location: "Misiones, Argentina (Remote Friendly)",
    github: "https://github.com/BrunoFerreDev",
    linkedin: "https://www.linkedin.com/in/bruno-marcos-ferreira/",
  },
};

export default DATA;
