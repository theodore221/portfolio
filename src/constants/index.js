import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  itsmy,
  yrts,
  skinsaver,
  toshiba,
  nike,
  login,
  forkify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Engineering",
    tag: "CORE",
    icon: web,
    description:
      "End-to-end application development from database design through deployment, with a bias toward clean architecture and maintainable code.",
    bulletPoints: [
      "React & Next.js SPAs",
      "Node.js / Express APIs",
      "PostgreSQL & MongoDB",
      "CI/CD & Cloud (AWS, Vercel)",
    ],
  },
  {
    title: "Mobile Development",
    tag: "NATIVE",
    icon: mobile,
    description:
      "Cross-platform mobile applications built with React Native, delivering native performance with shared business logic.",
    bulletPoints: [
      "React Native (iOS & Android)",
      "Expo & EAS workflows",
      "Push notifications & deep links",
      "App Store deployment",
    ],
  },
  {
    title: "Backend & Infrastructure",
    tag: "INFRA",
    icon: backend,
    description:
      "Scalable server-side systems and cloud infrastructure designed for reliability, security, and straightforward observability.",
    bulletPoints: [
      "REST & GraphQL APIs",
      "AWS (S3, Lambda, EC2)",
      "Docker & containerisation",
      "Database optimisation",
    ],
  },
  {
    title: "Automation & AI",
    tag: "AGENTS",
    icon: creator,
    description:
      "Streamlining workflows with custom automation pipelines, agentic systems, and AI-powered tooling that saves time and reduces manual overhead.",
    bulletPoints: [
      "Agentic workflows & LLM tooling",
      "Browser & data automation",
      "CI/CD pipeline design",
      "Workflow scripting & bots",
    ],
  },
  {
    title: "Technical Consulting",
    tag: "STRATEGY",
    icon: creator,
    description:
      "Architecture reviews, technical due diligence, and hands-on guidance for teams scaling their engineering practices.",
    bulletPoints: [
      "Code & architecture audits",
      "Tech stack selection",
      "Team mentoring & pairing",
      "STEM education delivery",
    ],
  },
];

const stats = [
  { value: "5+", label: "Years Exp" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Clients" },
  { value: "4", label: "Industries" },
];

const skills = [
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "React Native", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Git", level: "Advanced" },
];

const technologies = [
  { name: "JavaScript", icon: javascript, category: "Language" },
  { name: "TypeScript", icon: typescript, category: "Language" },
  { name: "React", icon: reactjs, category: "Frontend" },
  { name: "Redux", icon: redux, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
  { name: "HTML 5", icon: html, category: "Frontend" },
  { name: "CSS 3", icon: css, category: "Frontend" },
  { name: "Node.js", icon: nodejs, category: "Backend" },
  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "Three.js", icon: threejs, category: "Library" },
  { name: "Git", icon: git, category: "Tooling" },
  { name: "Figma", icon: figma, category: "Design" },
  { name: "Docker", icon: docker, category: "DevOps" },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "The ItsMy Group",
    icon: itsmy,
    iconBg: "#6DBC8D",
    date: "Sep 2022 - Sep 2023",
    points: [
      "Spearheaded the development and upkeep of a robust AngularJS / Django data driven application supporting Australian private health funds",
      "Elevated website functionality and improved UX by leveraging React.js to revamp the application's frontend. Designed custom themed components for individual health fund organizations, leading to a 20% increase in conversions.",
    ],
  },
  {
    title: "Technical Facilitator / Programmer",
    company_name: "Yarra Ranges Tech School",
    icon: yrts,
    iconBg: "#FFF",
    date: "Feb 2022 - Sep 2022",
    points: [
      "Facilitated the development and enhancement of technology stack to develop effective STEM based learning programs with cutting-edge technology",
      "Leveraged C++ programming skills to create engaging Arduino projects, fostering hands-on learning experiences.",
    ],
  },
  {
    title: "Co-founder",
    company_name: "Skin Saver",
    icon: skinsaver,
    iconBg: "#EC7F60",
    date: "Jun 2019 - Jul 2020",
    points: [
      "A startup developing an application that could allow for AI-based detection and tracking of various skin lesions (i.e. Melanoma, Acne, and Eczema).",
      "Developed a marketable MVP using React Native, Express.js, PostgresSQL and AWS (S3, Route 53).",
    ],
  },
  {
    title: "Systems Support Officer",
    company_name: "Toshiba International Corporation",
    icon: toshiba,
    iconBg: "#FFFF",
    date: "May 2018 - Jul 2021",
    points: [
      "Improved workflow efficiency by designing customized auto-generating templates for essential documentation using Excel Visual Basic programming.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Nike",
    slug: "nike",
    featured: true,
    description:
      "A Nike online shop landing page clone. Main aim of this project was to learn Tailwind CSS and apply it to create a professional website design.",
    year: "2023",
    type: "Frontend",
    tags: [
      { name: "react" },
      { name: "javascript" },
      { name: "tailwind" },
    ],
    image: nike,
    source_code_link: "https://github.com/theodore221/Nike",
    demo_link: "https://theodore221.github.io/Nike/",
    problem:
      "Needed a hands-on project to develop proficiency with utility-first CSS and responsive component architecture in React, while producing a polished, production-quality result.",
    process:
      "Studied the original Nike landing page for layout structure and visual hierarchy. Broke the design into atomic React components, established a consistent Tailwind token system, and iterated across five breakpoints to ensure pixel-perfect responsiveness.",
    solution:
      "Delivered a fully responsive Nike landing page featuring smooth scroll interactions, optimized image loading, and a modular component structure ready to extend into a full e-commerce flow.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Vite"],
  },
  {
    name: "Login UI",
    slug: "login-ui",
    featured: false,
    description:
      "Login Form UI built to set up a login system using FireBase Auth. Main aim of this project was to learn how to set up and connect a back-end system.",
    year: "2023",
    type: "Frontend",
    tags: [
      { name: "react" },
      { name: "firebase" },
      { name: "css" },
    ],
    image: login,
    source_code_link: "https://github.com/theodore221/login-form",
    demo_link: "https://theodore221.github.io/login-form/",
    problem:
      "Wanted to understand the full authentication lifecycle — from UI form handling through secure backend verification — without relying on third-party auth wrappers.",
    process:
      "Designed a clean login/signup interface in React, then integrated Firebase Authentication for email/password flows. Implemented form validation, error handling, and session persistence with Firebase SDK.",
    solution:
      "Produced a working authentication system with sign-up, login, and session management. The project solidified understanding of client-server auth patterns and Firebase's real-time capabilities.",
    techStack: ["React", "Firebase Auth", "CSS", "JavaScript"],
  },
  {
    name: "Forkify",
    slug: "forkify",
    featured: false,
    description:
      "A recipe application that allows users to search and favourite cooking recipes. Main aim of this project was learning to build a complex application in vanilla javascript.",
    year: "2022",
    type: "Full-Stack",
    tags: [
      { name: "javascript" },
      { name: "rest-api" },
      { name: "css" },
    ],
    image: forkify,
    source_code_link: "https://github.com/theodore221/Forkify",
    demo_link: "https://curious-cascaron-7a8ab7.netlify.app/",
    problem:
      "Needed to build a non-trivial application in vanilla JavaScript to master DOM manipulation, async data fetching, and MVC architecture without framework abstractions.",
    process:
      "Architected the app using an MVC pattern with a publisher-subscriber model for state management. Integrated the Forkify API for recipe search, implemented bookmarking with localStorage, and built a custom pagination system.",
    solution:
      "Delivered a feature-rich recipe app with search, bookmarking, pagination, and serving-size adjustment — all in vanilla JS. The project demonstrated that complex interactive UIs can be built with solid architectural patterns alone.",
    techStack: ["JavaScript", "REST API", "HTML", "CSS", "Parcel"],
  },
];

export { services, technologies, experiences, testimonials, projects, stats, skills };
