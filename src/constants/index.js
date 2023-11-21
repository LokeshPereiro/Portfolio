export const navLinks = [
  { title: "About", id: "about" },
  { title: "Tech", id: "tech" },
  { title: "Experience", id: "work" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

import {
  frontend,
  backend,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  express,
  mongodb,
  git,
  motion,
  sass,
  mysql,
  styled_components,
  jest,
  coke,
  ait,
  firebase,
  carrent,
  tripguide,
  threejs,
  programmer,
  mern,
} from "../assets";

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
    description:
      "I focus on creating intuitive, functional and accessible websites, while keeping in mind user experience and code reusability.",
  },

  {
    title: "Backend Developer",
    icon: backend,
    description:
      "I am a devoted Backend Developer who loves working in server arcitecture, database and Rest Apis callings making sure that the critical path of our website works well and providing optimised and valuable data to frontend.",
  },

  {
    title: "MERN Stack Developer",
    icon: mern,
    description:
      "When it comes to fullstack apps, I enjoy working mainly with MERN Stack to build robust and sustainable web apps takeing into account best practices and scalable code.",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Styled-Components",
    icon: styled_components,
  },
  {
    name: "Jest",
    icon: jest,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },

  {
    name: "Framer-Motion",
    icon: motion,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "AIT",
    icon: ait,
    // iconBg: "#383E56",
    date: "June 2022 - May 2023",
    points: [
      "Had opportunity to boost my basic frontend skills mainly HTML & CSS for layouts and JavaScript for user interactivity. In addition, gained good knowledge on other styling techs like Bootstrap, Styled-Components and SCSS.",
      "Deep focus on Reactjs, React Hooks and Redux to manage global state while takeing into account best practices and code reusabilitiy.",
      "Experience of building robust Single Page Applications using backend technologies like Nodejs, Expressjs, Mongodb as well as Firebase for google authentication, databse services and CRUD operations. ",
      "Moreover, gained advanced experience using Github as version controller and Postman to test own API Rest or third-party endpoints.",
    ],
  },
  {
    title: "Self-taught Developer",
    company_name: "Youtube - Udemy",
    icon: programmer,
    // iconBg: "#E6DEDD",
    date: "June 2021 - June 2022",
    points: [
      "Essential understandings of website foundation and how it is actually created. I learnt about layouts, responsive designs, stylings and web animations with JavaScript.",
    ],
  },
  {
    title: "WEBU Marketing Graduated",
    company_name: "The Coca-Cola Company",
    icon: coke,
    // iconBg: "#383E56",
    date: "Feb 2020 - May 2021",
    points: [
      "Worked on large-scale projects from scratch, meaning from brainstorms of ideas for advertising campaigns and their final delivery to production.",
      "Experience of working with maketing tool named Nielsen to study purshase and products consumption to generate charts in Excel for power point presentations.",
    ],
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
        color: "var(--blue)",
      },
      {
        name: "mongodb",
        color: "var(--greenLime)",
      },
      {
        name: "tailwind",
        color: "var(--lightBlue)",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },

  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "var(--red)",
      },
      {
        name: "supabase",
        color: "var(--greenLime)",
      },
      {
        name: "css",
        color: "var(--yellow)",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const trabajos = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    image: carrent,
    project_demo: "https://github.com/",
    github_link: "https://github.com/",
    tags: ["UI/UX", "All"],
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: ["Web App", "All"],
    image: tripguide,
    projectDemo: "https://github.com/",
    githubLink: "https://github.com/",
  },
];
export { services, technologies, experiences, projects, trabajos };
