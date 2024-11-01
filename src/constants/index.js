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
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nike",
    description:
      "A Nike online shop landing page clone. Main aim of this project was to learn Tailwind CSS and apply it to create a professional website design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/theodore221/Nike",
    demo_link: "https://theodore221.github.io/Nike/",
  },
  {
    name: "Login UI",
    description:
      "Login Form UI built to set up a login system using FireBase Auth. Main aim of this project was to learn how to set up and connect a back-end system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: login,
    source_code_link: "https://github.com/theodore221/login-form",
    demo_link: "https://theodore221.github.io/login-form/",
  },
  {
    name: "Forkify",
    description:
      "A recipe application that allows users to search and favourite cooking recipes. Main aim of this project was learning to build a complex application in vanilla javascript.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: forkify,
    source_code_link: "https://github.com/theodore221/Forkify",
    demo_link: "https://curious-cascaron-7a8ab7.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
