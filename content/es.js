// Spanish texts of the site. The English version lives in ./en.js with the same shape.
// When something changes (a project, a job, a skill), edit both files.

const es = {
  lang: "es",
  meta: {
    title: "David Escalante | Portafolio",
    description:
      "Portafolio de David Escalante - Desarrollador de software | Ing. en Ciencias de la Computación",
  },

  nav: [
    { name: "home", label: "Inicio", path: "/" },
    { name: "services", label: "Lo que hago", path: "/services/" },
    { name: "resume", label: "CV", path: "/resume/" },
    { name: "work", label: "Proyectos", path: "/work/" },
    { name: "contact", label: "Contacto", path: "/contact/" },
  ],
  contactMe: "Contáctame",

  home: {
    role: "Software Engineer",
    greeting: "Hola, soy",
    intro:
      "Me destaco en la creación de experiencias digitales elegantes a través de diversos lenguajes y tecnologías de programación.",
    downloadCv: "Descargar CV",
    cvFile: "assets/docs/David_Escalante_CV.pdf",
    cvDownloadName: "David_Escalante_CV.pdf",
    stats: {
      years: "Años de experiencia",
      projects: "Proyectos completados",
      countries: "Países con mi software en producción",
      companies: "Empresas de software",
    },
  },

  services: [
    {
      num: "01",
      title: "Desarrollo Web",
      slug: "web-dev",
      icon: "/assets/services/web-dev.png",
      iconAlt: "web-dev",
      summary:
        "Construyo aplicaciones web de principio a fin, desde la interfaz hasta la API y la base de datos.",
      paragraphs: [
        "He desarrollado sistemas de gestión, plataformas SaaS y aplicaciones a medida que hoy usan empresas en 4 países. Trabajo con React, Angular, Vue y TypeScript en el frontend, y Node.js con bases de datos SQL en el backend.",
        "Pruebo cada entrega en los principales navegadores y dispositivos antes de salir a producción.",
      ],
    },
    {
      num: "02",
      title: "Diseño de interfaces",
      slug: "web-design",
      icon: "/assets/services/ui-ux.png",
      iconAlt: "ui-ux",
      summary:
        "Valoro una estructura de contenido simple, patrones de diseño limpios e interacciones bien pensadas.",
      paragraphs: [
        "Diseño interfaces claras y responsive que funcionan igual de bien en escritorio y móvil. Paso de un diseño en Figma a componentes reutilizables y fáciles de mantener.",
      ],
    },
    {
      num: "03",
      title: "Desarrollo Móvil",
      slug: "app-dev",
      icon: "/assets/services/phone.png",
      iconAlt: "phone",
      summary:
        "Desarrollo aplicaciones móviles rápidas, fáciles de usar y con un diseño elegante.",
      paragraphs: [
        "Desarrollo apps móviles con Flutter que acceden a funciones nativas del dispositivo, como la cámara o el GPS, y que siguen funcionando sin conexión.",
      ],
    },
  ],

  resume: {
    tabs: {
      experience: "Experiencia",
      education: "Formación",
      skills: "Habilidades",
      about: "Acerca de",
    },
    about: {
      title: "Acerca de mi",
      descriptions: (years) => [
        `Soy ingeniero de software fullstack con ${years} años desarrollando aplicaciones web y móviles en producción. Fui el desarrollador principal de la web de un SaaS usado en 4 países, donde lideré su migración a TypeScript sin detener el servicio, y coordiné un equipo frontend como líder técnico y Scrum Master. Trabajo con React, Angular, Vue y TypeScript en el frontend, Node.js, NestJS y PostgreSQL en el backend, y Flutter en móvil. También diseño en Figma las interfaces que construyo.`,
        `Me gusta construir productos claros, mantenibles y fáciles de usar. Trabajo en remoto y uso IA a diario, revisando lo que genera.`,
      ],
      info: (years) => [
        { fieldName: "Nombre", fieldValue: "David Escalante" },
        { fieldName: "Teléfono", fieldValue: "(+591) 72874083" },
        { fieldName: "Experiencia", fieldValue: `${years} años` },
        { fieldName: "Correo", fieldValue: "davidthbsossa@gmail.com" },
        { fieldName: "Nacionalidad", fieldValue: "Boliviana" },
        { fieldName: "Freelance", fieldValue: "Disponible" },
        { fieldName: "Idiomas", fieldValue: "Español (nativo), Inglés" },
      ],
    },
    experience: {
      title: "Mi experiencia",
      description: "",
      items: [
        {
          company: "Tekov",
          description:
            "SaaS de RR. HH., control de asistencia y planillas usado en 4 países. Fui el desarrollador principal de la web.",
          position: "Desarrollador Frontend & Móvil",
          duration: "Noviembre 2022 - Octubre 2026",
          subtitle: "Mi función",
          job: [
            "Migración del frontend a TypeScript sin detener el servicio",
            "Frontend con: React | TypeScript | Redux Toolkit | Material UI",
            "Diseño de pantallas en Figma, despliegues y marcaje con huella en la app (Flutter)",
          ],
        },
        {
          company: "IO Software",
          description:
            "Modernización de un punto de venta para restaurantes: comandas en tiempo real, cobro, caja y facturación electrónica.",
          position: "Lead Frontend",
          duration: "Octubre 2024 - Junio 2025",
          subtitle: "Mi función",
          job: [
            "Líder técnico del frontend y Scrum Master",
            "Diseño y desarrollo del núcleo del punto de venta",
            "Frontend con: Vue 3 | TypeScript | Pinia | TanStack Query | WebSocket",
          ],
        },
        {
          company: "Clan Bolivia",
          description:
            "Software a medida para distintos clientes (bajo confidencialidad). Trabajé con el dueño de la empresa, que llevaba el backend.",
          position: "Desarrollador Frontend Jr",
          duration: "Diciembre 2022 - Abril 2024",
          subtitle: "Proyectos",
          job: [
            "SaaS para clínicas dentales con: Angular | PrimeNG | Supabase",
            "Sistemas a medida para logística, servicios de limpieza y un lubricentro con: Angular | PrimeNG | NgRx",
            "Prototipos de apps móviles con: FlutterFlow",
          ],
        },
        {
          company: "Proyectos freelance",
          description: "Proyectos web para clientes y colaboradores.",
          position: "Desarrollador Web Freelance",
          duration: "Octubre 2023 - Febrero 2025",
          subtitle: "Proyectos",
          job: [
            "Marketplace agropecuario (2025): módulo de administración de punta a punta con: NestJS | TypeORM | PostgreSQL | Angular | Socket.io",
            "Sitio web corporativo para una consultora de salud (2023) con: HTML | CSS | JavaScript",
          ],
        },
      ],
    },
    education: {
      title: "Mi educación",
      description: "",
      items: [
        {
          institution: "UMRPSFXCH | Sucre, Bolivia",
          degree: "Ingeniería en Ciencias de la Computación",
          duration: "Julio 2021",
          descriptions: [
            "Excelencia Académica (R.A: 81,37)",
            "Beca Estudio por rendimiento académico (2016 – 2018)",
          ],
        },
        {
          institution: "UMRPSFXCH | Sucre, Bolivia",
          degree: "Diplomado en Docencia para Educación Superior",
          duration: "Noviembre 2022",
        },
      ],
    },
    skills: {
      title: "Mis habilidades principales",
      description: "",
    },
  },

  work: {
    filters: { dev: "Aplicaciones", design: "Páginas Web", phone: "Móvil" },
    tooltips: {
      live: "Aplicación",
      github: "Repositorio Github",
      website: "Página web",
    },
    projects: [
      {
        num: "01",
        title: "Tekov",
        description:
          "Plataforma SaaS de RR. HH., control de asistencia y planillas usada en 4 países. Fui el desarrollador principal de la web: lideré su migración a TypeScript sin detener el servicio, diseñé en Figma la mayoría de sus pantallas y desarrollé el panel interno de administración.",
        stack: [
          { name: "React" },
          { name: "TypeScript" },
          { name: "Redux Toolkit" },
          { name: "Material UI" },
        ],
        image: "/assets/work/tekov.png",
        live: "https://app.tekovhr.com",
        github: "",
        website: "https://tekovhr.com",
        category: "dev",
      },
      {
        num: "02",
        title: "Punto de venta para restaurantes",
        description:
          "Desarrollado en IO Software como líder técnico del frontend. Modernización de un punto de venta en producción: venta rápida, mesas, comandas en tiempo real con cocina, cobro, caja y facturación electrónica.",
        stack: [
          { name: "Vue 3" },
          { name: "TypeScript" },
          { name: "Pinia" },
          { name: "WebSocket" },
        ],
        image: "/assets/work/io-system.JPG",
        live: "",
        github: "",
        website: "",
        category: "dev",
      },
      {
        num: "03",
        title: "Marketplace agropecuario",
        description:
          "Plataforma para que productores de Tarabuco vendan directamente a los consumidores. Sobre la base de un colaborador, desarrollé el módulo de administración de punta a punta: endpoints y consultas del dashboard, panel, productos con varias imágenes y notificaciones en tiempo real.",
        stack: [
          { name: "NestJS" },
          { name: "TypeORM" },
          { name: "PostgreSQL" },
          { name: "Angular" },
          { name: "Socket.io" },
        ],
        image: "/assets/work/campo-conectado-banner.png",
        live: "",
        github: "",
        category: "dev",
      },
      {
        num: "04",
        title: "Eventbrite Clone · Base de datos",
        description:
          "Proyecto personal en desarrollo. Diseño en PostgreSQL de la capa de datos de una plataforma de venta de entradas a partir de reglas de negocio: restricciones y triggers, reserva con bloqueo de filas para evitar la sobreventa y pruebas por cada regla.",
        stack: [{ name: "PostgreSQL" }, { name: "SQL" }],
        image: "/assets/work/Eventbrite-clone-screenshoot.png",
        imageClassName: "block mx-auto",
        live: "",
        github: "https://github.com/dav24github/event-brite-clone",
        category: "dev",
      },
      {
        num: "05",
        title: "SaaS para clínicas dentales",
        description:
          "Desarrollado en Clan Bolivia (cliente bajo confidencialidad). Reconstruí el frontend de un SaaS para clínicas dentales: pacientes, odontograma, tratamientos, agenda, laboratorios y membresías.",
        stack: [{ name: "Angular" }, { name: "PrimeNG" }, { name: "Supabase" }],
        image: "/assets/work/clinicapp.png",
        live: "",
        github: "",
        category: "dev",
      },
      {
        num: "06",
        title: "Sistema para servicios de limpieza",
        description:
          "Desarrollado en Clan Bolivia (cliente bajo confidencialidad). Frontend de un sistema de gestión para una empresa de limpieza: paquetes, solicitudes, ventas, asignación de trabajos y calendario.",
        stack: [{ name: "Angular" }, { name: "PrimeNG" }],
        image: "/assets/work/jelpi.png",
        live: "",
        github: "",
        category: "dev",
      },
      {
        num: "07",
        title: "Sistema para un lubricentro",
        description:
          "Desarrollado en Clan Bolivia (cliente bajo confidencialidad). Frontend de un sistema de gestión para un lubricentro con tienda: servicios por vehículo, ventas, compras y presupuestos.",
        stack: [{ name: "Angular" }, { name: "PrimeNG" }, { name: "NgRx" }],
        image: "/assets/work/espino.png",
        live: "",
        github: "",
        category: "dev",
      },
      {
        num: "01",
        title: "AM Consultoría de salud",
        description:
          "Sitio web corporativo y responsive para una consultora de asesoría en salud.",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: "/assets/work/am.png",
        live: "",
        github: "",
        category: "design",
      },
      {
        num: "02",
        title: "Catálogo web",
        description:
          "Sitio web para negocio de scrapbook y manualidades donde se pueda ofrecer productos y contactar con los clientes (blog incluido).",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: "/assets/work/rossel.png",
        live: "",
        github: "",
        category: "design",
      },
      {
        num: "03",
        title: "Blog de programación",
        description:
          "Sitio web de blog con SEO optimizado y desarrollado con SSG (Static Site Generation) que simplifica su desarrollo y mantenimiento.",
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
        image: "/assets/work/code-blog.png",
        live: "",
        github: "https://github.com/dav24github/blog",
        category: "design",
      },
      {
        num: "01",
        title: "Tekov App",
        description:
          "App de los trabajadores de Tekov: marcaje de asistencia con geolocalización y huella, horarios, solicitudes de permiso y boletas de pago. Colaboré en su desarrollo.",
        stack: [{ name: "Flutter" }, { name: "Provider" }],
        image: "/assets/work/tekov-movil.png",
        live: "",
        github: "",
        category: "phone",
      },
      {
        num: "02",
        title: "Tekov Tablet",
        description:
          "App de kiosco para marcar asistencia desde una tablet fija en la empresa: el trabajador ingresa su documento, elige su turno del día y marca. La creé desde cero.",
        stack: [{ name: "Flutter" }],
        image: "/assets/work/tekov-tablet.jpg",
        imageClassName: "block mx-auto",
        live: "",
        github: "",
        category: "phone",
      },
      {
        num: "03",
        title: "App para clínicas dentales",
        description:
          "Desarrollada en Clan Bolivia (cliente bajo confidencialidad). Prototipo de app para los pacientes de una clínica dental: conocer a los doctores y reservar una cita.",
        stack: [{ name: "FlutterFlow" }],
        image: "/assets/work/clinicapp-movil.png",
        live: "",
        github: "",
        category: "phone",
      },
      {
        num: "04",
        title: "App para un lubricentro",
        description:
          "Desarrollada en Clan Bolivia (cliente bajo confidencialidad). Prototipo de app para los clientes de un lubricentro: registrar sus vehículos, controlar el mantenimiento, agendar visitas y comprar productos.",
        stack: [{ name: "FlutterFlow" }],
        image: "/assets/work/espino-movil.png",
        live: "",
        github: "",
        category: "phone",
      },
    ],
  },

  contact: {
    title: "Ponte en contacto",
    intro:
      "Si tienes una oferta de trabajo, un proyecto o simplemente quieres saludar, te responderé lo antes posible.",
    placeholders: {
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electrónico",
      phone: "Número de teléfono (opcional)",
      message: "Escribe tu mensaje aquí.",
    },
    topicPlaceholder: "¿Sobre qué quieres hablar?",
    // slug: what the "Contáctame" buttons in "Lo que hago" preselect (?q=slug)
    topics: [
      { slug: "job", label: "Oferta de empleo" },
      { slug: "web-dev", label: "Desarrollo Web" },
      { slug: "web-design", label: "Diseño de interfaces" },
      { slug: "app-dev", label: "Desarrollo Móvil" },
      { slug: "other", label: "Otro" },
    ],
    send: "Enviar",
    sending: "Enviando...",
    sent: "Mensaje correctamente enviado",
    missingFields: "¡Completa los campos obligatorios!",
    sendFailed: "No se pudo enviar. Escríbeme a davidthbsossa@gmail.com",
    emailSubject: "Mensaje Portfolio",
    info: [
      {
        type: "phone",
        title: "Teléfono",
        description: "(+591) 72874083",
        href: "https://wa.me/59172874083",
      },
      {
        type: "email",
        title: "Correo",
        description: "davidthbsossa@gmail.com",
        href: "mailto:davidthbsossa@gmail.com",
      },
      {
        type: "location",
        title: "Ubicación",
        description: "Sucre, Bolivia · Remoto",
      },
    ],
  },
};

export default es;
