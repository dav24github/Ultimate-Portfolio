// English texts of the site. Same shape as ./es.js.
// When something changes (a project, a job, a skill), edit both files.

const en = {
  lang: "en",
  meta: {
    title: "David Escalante | Portfolio",
    description:
      "Portfolio of David Escalante - Software Engineer | Computer Science Engineer",
  },

  nav: [
    { name: "home", label: "Home", path: "/" },
    { name: "services", label: "What I do", path: "/services/" },
    { name: "resume", label: "Resume", path: "/resume/" },
    { name: "work", label: "Projects", path: "/work/" },
    { name: "contact", label: "Contact", path: "/contact/" },
  ],
  contactMe: "Contact me",

  home: {
    role: "Software Engineer",
    greeting: "Hi, I'm",
    intro:
      "I build elegant digital experiences across a variety of programming languages and technologies.",
    downloadCv: "Download resume",
    cvFile: "assets/docs/David_Escalante_CV_eng.pdf",
    cvDownloadName: "David_Escalante_CV_eng.pdf",
    stats: {
      years: "Years of experience",
      projects: "Completed projects",
      countries: "Countries using my software in production",
      companies: "Software companies",
    },
  },

  services: [
    {
      num: "01",
      title: "Web Development",
      slug: "web-dev",
      icon: "/assets/services/web-dev.png",
      iconAlt: "web-dev",
      summary:
        "I build web applications end to end, from the interface to the API and the database.",
      paragraphs: [
        "I've built management systems, SaaS platforms and custom applications used today by companies in 4 countries. I work with React, Angular, Vue and TypeScript on the frontend, and Node.js with SQL databases on the backend.",
        "I test every release on the main browsers and devices before it goes to production.",
      ],
    },
    {
      num: "02",
      title: "Interface Design",
      slug: "web-design",
      icon: "/assets/services/ui-ux.png",
      iconAlt: "ui-ux",
      summary:
        "I value simple content structure, clean design patterns and well-thought-out interactions.",
      paragraphs: [
        "I design clear, responsive interfaces that work just as well on desktop and mobile. I turn Figma designs into reusable, easy-to-maintain components.",
      ],
    },
    {
      num: "03",
      title: "Mobile Development",
      slug: "app-dev",
      icon: "/assets/services/phone.png",
      iconAlt: "phone",
      summary:
        "I build fast, easy-to-use mobile apps with an elegant design.",
      paragraphs: [
        "I build mobile apps with Flutter that use native device features, such as the camera or GPS, and keep working offline.",
      ],
    },
  ],

  resume: {
    tabs: {
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      about: "About me",
    },
    about: {
      title: "About me",
      descriptions: (years) => [
        `I'm a full stack software engineer with ${years} years building web and mobile applications in production. I was the main developer of a SaaS web app used in 4 countries, where I led its migration to TypeScript with zero downtime, and I led a frontend team as tech lead and Scrum Master. I work with React, Angular, Vue and TypeScript on the frontend, Node.js, NestJS and PostgreSQL on the backend, and Flutter on mobile. I also design in Figma the interfaces I build.`,
        `I like building clear, maintainable and easy-to-use products. I work remotely and use AI tools daily, always reviewing their output.`,
      ],
      info: (years) => [
        { fieldName: "Name", fieldValue: "David Escalante" },
        { fieldName: "Phone", fieldValue: "(+591) 72874083" },
        { fieldName: "Experience", fieldValue: `${years} years` },
        { fieldName: "Email", fieldValue: "davidthbsossa@gmail.com" },
        { fieldName: "Nationality", fieldValue: "Bolivian" },
        { fieldName: "Freelance", fieldValue: "Available" },
        { fieldName: "Languages", fieldValue: "Spanish (native), English" },
      ],
    },
    experience: {
      title: "My experience",
      description: "",
      items: [
        {
          company: "Tekov",
          description:
            "HR, attendance and payroll SaaS used in 4 countries. I was the main developer of the web app.",
          position: "Frontend & Mobile Developer",
          duration: "November 2022 - October 2026",
          subtitle: "My role",
          job: [
            "Zero-downtime frontend migration to TypeScript",
            "Frontend with: React | TypeScript | Redux Toolkit | Material UI",
            "Screen design in Figma, deployments and fingerprint clock-in in the app (Flutter)",
          ],
        },
        {
          company: "IO Software",
          description:
            "Modernization of a restaurant point-of-sale system: real-time kitchen orders, payments, cash register and electronic invoicing.",
          position: "Frontend Lead",
          duration: "October 2024 - June 2025",
          subtitle: "My role",
          job: [
            "Frontend tech lead and Scrum Master",
            "Design and development of the core of the point of sale",
            "Frontend with: Vue 3 | TypeScript | Pinia | TanStack Query | WebSocket",
          ],
        },
        {
          company: "Clan Bolivia",
          description:
            "Custom software for various clients (under NDA). I worked with the company owner, who handled the backend.",
          position: "Junior Frontend Developer",
          duration: "December 2022 - April 2024",
          subtitle: "Projects",
          job: [
            "SaaS for dental clinics with: Angular | PrimeNG | Supabase",
            "Custom systems for logistics, cleaning services and an oil change shop with: Angular | PrimeNG | NgRx",
            "Mobile app prototypes with: FlutterFlow",
          ],
        },
        {
          company: "Freelance projects",
          description: "Web projects for clients and collaborators.",
          position: "Freelance Web Developer",
          duration: "October 2023 - February 2025",
          subtitle: "Projects",
          job: [
            "Agricultural marketplace (2025): end-to-end admin module with: NestJS | TypeORM | PostgreSQL | Angular | Socket.io",
            "Corporate website for a health consulting firm (2023) with: HTML | CSS | JavaScript",
          ],
        },
      ],
    },
    education: {
      title: "My education",
      description: "",
      items: [
        {
          institution: "UMRPSFXCH | Sucre, Bolivia",
          degree: "Computer Science Engineering (5-year degree)",
          duration: "July 2021",
          descriptions: [
            "Degree awarded for academic excellence (academic record: 81.37/100)",
            "Academic merit scholarship (2016 – 2018)",
          ],
        },
        {
          institution: "UMRPSFXCH | Sucre, Bolivia",
          degree: "Postgraduate Diploma in Higher Education Teaching",
          duration: "November 2022",
        },
      ],
    },
    skills: {
      title: "My core skills",
      description: "",
    },
  },

  work: {
    filters: { dev: "Applications", design: "Websites", phone: "Mobile" },
    tooltips: {
      live: "Live app",
      github: "GitHub repository",
      website: "Website",
    },
    projects: [
      {
        num: "01",
        title: "Tekov",
        description:
          "HR, attendance and payroll SaaS platform used in 4 countries. I was the main developer of the web app: I led its zero-downtime migration to TypeScript, designed most of its screens in Figma and built the internal admin panel.",
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
        title: "Restaurant point of sale",
        description:
          "Built at IO Software as frontend tech lead. Modernization of a point-of-sale system in production: quick sales, tables, real-time kitchen orders, payments, cash register and electronic invoicing.",
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
        title: "Agricultural marketplace",
        description:
          "Platform for farmers in Tarabuco to sell directly to consumers. On top of a collaborator's codebase, I built the admin module end to end: dashboard endpoints and queries, admin panel, products with multiple images and real-time notifications.",
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
        title: "Eventbrite Clone · Database",
        description:
          "Personal project, in progress. PostgreSQL design of the data layer for a ticketing platform, based on business rules: constraints and triggers, row-level locking on reservations to prevent overselling, and tests for every rule.",
        stack: [{ name: "PostgreSQL" }, { name: "SQL" }],
        image: "/assets/work/Eventbrite-clone-screenshoot.png",
        imageClassName: "block mx-auto",
        live: "",
        github: "https://github.com/dav24github/event-brite-clone",
        category: "dev",
      },
      {
        num: "05",
        title: "SaaS for dental clinics",
        description:
          "Built at Clan Bolivia (client under NDA). I rebuilt the frontend of a SaaS for dental clinics: patients, dental charting, treatments, scheduling, labs and memberships.",
        stack: [{ name: "Angular" }, { name: "PrimeNG" }, { name: "Supabase" }],
        image: "/assets/work/clinicapp.png",
        live: "",
        github: "",
        category: "dev",
      },
      {
        num: "06",
        title: "Cleaning services system",
        description:
          "Built at Clan Bolivia (client under NDA). Frontend of a management system for a cleaning company: service packages, requests, sales, job assignment and calendar.",
        stack: [{ name: "Angular" }, { name: "PrimeNG" }],
        image: "/assets/work/jelpi.png",
        live: "",
        github: "",
        category: "dev",
      },
      {
        num: "07",
        title: "Oil change shop system",
        description:
          "Built at Clan Bolivia (client under NDA). Frontend of a management system for an oil change shop with a store: services by vehicle, sales, purchases and quotes.",
        stack: [{ name: "Angular" }, { name: "PrimeNG" }, { name: "NgRx" }],
        image: "/assets/work/espino.png",
        live: "",
        github: "",
        category: "dev",
      },
      {
        num: "01",
        title: "AM Health Consulting",
        description:
          "Corporate, responsive website for a health consulting firm.",
        stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
        image: "/assets/work/am.png",
        live: "",
        github: "",
        category: "design",
      },
      {
        num: "02",
        title: "Web catalog",
        description:
          "Website for a scrapbooking and crafts business to showcase products and reach customers (blog included).",
        stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
        image: "/assets/work/rossel.png",
        live: "",
        github: "",
        category: "design",
      },
      {
        num: "03",
        title: "Programming blog",
        description:
          "SEO-optimized blog built with SSG (Static Site Generation), which keeps it simple to develop and maintain.",
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
          "App for Tekov's employees: clock-in with geolocation and fingerprint, schedules, leave requests and payslips. I contributed to its development.",
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
          "Kiosk app to clock in from a tablet fixed at the workplace: the employee enters their ID number, picks the shift of the day and clocks in. I built it from scratch.",
        stack: [{ name: "Flutter" }],
        image: "/assets/work/tekov-tablet.jpg",
        imageClassName: "block mx-auto",
        live: "",
        github: "",
        category: "phone",
      },
      {
        num: "03",
        title: "Dental clinic app",
        description:
          "Built at Clan Bolivia (client under NDA). App prototype for a dental clinic's patients: meet the doctors and book an appointment.",
        stack: [{ name: "FlutterFlow" }],
        image: "/assets/work/clinicapp-movil.png",
        live: "",
        github: "",
        category: "phone",
      },
      {
        num: "04",
        title: "Oil change shop app",
        description:
          "Built at Clan Bolivia (client under NDA). App prototype for an oil change shop's customers: register their vehicles, track maintenance, schedule visits and buy products.",
        stack: [{ name: "FlutterFlow" }],
        image: "/assets/work/espino-movil.png",
        live: "",
        github: "",
        category: "phone",
      },
    ],
  },
  contact: {
    title: "Get in touch",
    intro:
      "Whether you have a job offer, a project or just want to say hi, I'll get back to you as soon as I can.",
    placeholders: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email address",
      phone: "Phone number (optional)",
      message: "Write your message here.",
    },
    topicPlaceholder: "What would you like to talk about?",
    topics: [
      { slug: "job", label: "Job offer" },
      { slug: "web-dev", label: "Web Development" },
      { slug: "web-design", label: "Interface Design" },
      { slug: "app-dev", label: "Mobile Development" },
      { slug: "other", label: "Other" },
    ],
    send: "Send",
    sending: "Sending...",
    sent: "Message sent successfully",
    missingFields: "Please fill in all required fields.",
    sendFailed: "Couldn't send it. Email me at davidthbsossa@gmail.com",
    emailSubject: "Mensaje Portfolio (EN)",
    info: [
      {
        type: "phone",
        title: "Phone",
        description: "(+591) 72874083",
        href: "https://wa.me/59172874083",
      },
      {
        type: "email",
        title: "Email",
        description: "davidthbsossa@gmail.com",
        href: "mailto:davidthbsossa@gmail.com",
      },
      {
        type: "location",
        title: "Location",
        description: "Sucre, Bolivia · Remote",
      },
    ],
  },
};

export default en;
