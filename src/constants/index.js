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
      "Refined the deployment process and optimized AWS infrastructure by collaborating with DevOps consultants; which resulted in a 35% increase in the frequency of successful deployments and reduced cloud related resource costs by 20% annually.",
      "Demonstrated adept project management in Agile methodology, actively engaging in Sprint retrospective discussions. This resulted in higher quality project outcomes and increased team engagement by 25%.",
      "Fortified future development and maintenance by meticulously documenting crucial codebase modules.",
    ],
  },
  {
    title: "Technical Facilitator / Programmer",
    company_name: "Yarra Ranges Tech School",
    icon: yrts,
    iconBg: "#FFF",
    date: "Feb 2022 - Sep 2022",
    points: [
      "Spearheaded the development and enhancement of the technology stack to facilitate effective STEM learning programs.",
      "Led game development initiatives utilizing Unreal Engine 5, resulting in immersive and interactive educational experiences for students.",
      "Conducted extensive research to identify and implement innovative teaching and learning methodologies, integrating augmented reality (AR) and virtual reality (VR) experiences.",
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
      "Assisted in the development of a robust Image Classification model utilizing Convolutional Neural Networks built on TensorFlow.",
      "Successfully pitched our product and business venture to UTS earning the award for “Most Technically Feasible Prototype”.",
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
      "Heightened team performance by facilitating the execution and administration tasks of the Parts & Procurement team within the Operations division.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
