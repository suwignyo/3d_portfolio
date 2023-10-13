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
  carrent,
  jobit,
  tripguide,
  threejs,
  varicent,
  flipgive,
  fourseasons,
  grapqhl,
  storybook,
  ruby,
  resume,
  linkedin
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

const contacts = [
  {
    title: "Resume",
    icon: resume,
    link: "https://drive.google.com/file/d/16BEKE56LgWcSC3LccjiDzAOvc6C28S5l/view?usp=sharing"
  },
  {
    title: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/gerry-suwignyo-85a0b3a3/"
  },
  {
    title: "Github",
    icon: git,
    link: "https://github.com/suwignyo"
  }
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "GraphQL",
    icon: grapqhl,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Varicent",
    icon: varicent,
    iconBg: "#2B4DED",
    date: "June 2021 - July 2023",
    points: [
      "Build multi-page forms with complex interactions and validations","Setup front-end apollo types workflow to ensure typings are up to date",
      "Refactor and componentize front-end components for better readability",
      "Use linters to check for unit testing flaws and update it to use best practices",
      "Setup multi select on a data grid  to allow bulk operation of tree structured data",
      "Standardize file upload UI across the app"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Flipgive",
    icon: flipgive,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - June 202",
    points: [
      "Developed an alpha product for FlipGive Budget app in NextJs, TypeScript, GraphQL"
      ,"Responsible for most the front-end of new features of the web app in React and Ruby"
      ,"Converted server side Ruby views to React for smoother client-side interactions"
      ,"Proficient in GraphQL queries and mutation to interact with the back-end"
      ,"Completed an external contract project using their styling standards"
      ,"Built a new checkout process for gift card purchases that is responsible for 30% of company revenue"
      ,"Setup front-end components in Storybook following atomic design methodology to split up components"
      ,"Implement a beneficiary validation process that allows user to get cheque directly to their bank account rather than physical mailed cheques"
    ],
  },
  {
    title: "Desktop Support Analyst",
    company_name: "Four Seasons Hotels and Resorts",
    icon: fourseasons,
    iconBg: "#000",
    date: "Aug 2017 - June 2018",
    points: [
      "Responsible for supporting ~600 on site and remote users"
      ,"Update testing and patching for Windows 7 and 10 Managed corporate software and hardware assets throughout the yearly technology lifecycle"
      ,"Provided initial support for LAN / WAN / WLAN infrastructure connectivity"
      ,"Identified and escalated critical hardware issue with company's Dell representative"
      ,"Provisioned laptop/desktop for corporate employees"
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

const about = "Developer with 5+ years of experience in React, Typescript, GraphQL front-end stack. Passionate in creating consistent UI built using modular components with aim towards best practices in a design system and improve developer experience."
export { services, technologies, experiences, testimonials, projects, about, contacts };