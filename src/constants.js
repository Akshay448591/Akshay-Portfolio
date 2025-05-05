// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import itslogo from "./assets/education_logo/ITS_Logo.webp";
import collegelogo from "./assets/education_logo/shardalogo.jpg";
import schoollogo from "./assets/education_logo/School.jpg";

// Project Section Logo's
import coffeelogo from "./assets/work_logo/coffee_logo.png";
import artlogo from "./assets/work_logo/artlogo.png";
import hoodielogo from "./assets/work_logo/hoodielogo.png";
import notelogo from "./assets/work_logo/notelogo.png";
import photologo from "./assets/work_logo/photologo.png";
import golflogo from "./assets/work_logo/golflogo.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";
//Project in progress logo
import progress from "./assets/work_logo/workinprogress.webp";
//other project logo
import blinkit from "./assets/work_logo/blinkitlogo.png"
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: itslogo,
    school: "ITS Engineering College",
    date: "April 2023 - July 2027",
    grade: "6.18 CGPA",
    desc: "Currently pursuing my B.Tech in Computer Science and Engineering with a focus on software development and modern web technologies. Coursework includes Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Web Development. I actively engage in technical events, hackathons, and coding competitions to strengthen my practical skills and industry readiness.",
    degree:
      "Bachelor of Technology in Computer Science and Engineering - B.Tech-CSE",
  },
  {
    id: 1,
    img: collegelogo,
    school: "Sri Sharada Pu College, Koppal,Karnataka",
    date: "Apr 2017 - March 2018",
    grade: "84%",
    desc: "I completed my class 12 education from Sri Sharada Pu College, Koppal, under the Karnataka board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "Class(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: schoollogo,
    school: "Swamy Vivekananda English medium school",
    date: "Apr 2020 - March 2021",
    grade: "79.8%",
    desc: "I completed my class 10 education from Swamy Vivekananda English Medium School, Koppal, under the Karnataka board, where I studied Science with Computer.",
    degree: "Class(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Responsive Coffee Shop Landing Page",
    image: coffeelogo,
    description:
      "A modern and visually appealing landing page for a fictional coffee shop, built with HTML and CSS. The design is fully responsive, adapting seamlessly to mobile (480px) and tablet (768px) screen sizes. This project demonstrates my ability to create clean layouts, maintain responsive design principles, and style engaging UI components.",
    tags: ["HTML", "CSS", "Frontend Development"],
    webapp: "https://akshay448591.github.io/Coffee-Project/",
  },
  {
    id: 1,
    title: "Informative Art Showcase Website",
    description:
      "An elegant and informative website dedicated to the world of art, designed using pure HTML and CSS. This static site showcases various art forms, artists, and movements through clean layouts and structured content. It highlights my ability to create content-focused web pages with aesthetic styling and semantic HTML structure.",
    image: artlogo,
    tags: [
      "HTML",
      "CSS",
      "Informative Website",
      "Art",
      "Frontend development ",
      "Web design",
    ],
    github: "https://akshay448591.github.io/The-Art-Project/",
  },
  {
    id: 2,
    title: "Responsive Hoodie Product Website",
    description:
      "A stylish and responsive product website focused on showcasing hoodies, built using HTML and CSS. Designed with a clean layout and optimized for tablet-sized screens (up to 768px), this project reflects my ability to present products visually while ensuring a smooth user experience across devices.",
    image: hoodielogo,
    tags: ["Responsive Design", "Web design", "HTML", "CSS", "E-commerce"],
    github: "https://akshay448591.github.io/hoodie-website/",
  },
  {
    id: 3,
    title: "Photography Agency Website",
    description:
      "An informative and visually rich website for a fictional photography agency, created using HTML and SASS. The site showcases the agency’s services, portfolio, and contact details with a clean, structured layout and enhanced styling through modular SASS architecture. This project demonstrates my ability to organize and scale CSS using modern preprocessor tools.",
    image: photologo,
    tags: ["SASS", "SCSS", "Responsive Design", "Web design"],
    github: "https://akshay448591.github.io/Photo-Agency/",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Minimal Note-Taking App for Fast Writing",
    description:
      "A lightweight, distraction-free note-taking application designed for speed and simplicity. The interface is intentionally minimal to support focused writing and fast typing, making it ideal for jotting down quick thoughts or to-dos. This project reflects my focus on clean UI/UX principles and building functional tools that prioritize user efficiency.",
    image: notelogo,
    tags: ["JavaScript", "Note-Taking", "HTML", "CSS"],
    github: "https://akshay448591.github.io/Simple-Note-Taking-App/",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Family Golf Facility Website with GSAP",
    description:
      "It is a dynamic and engaging landing page concept for a family-friendly golf facility, brought to life with smooth, scroll-triggered animations using GSAP. The site highlights key services and experiences in a visually appealing way, offering an interactive journey through animated elements. This project showcases my ability to use motion design to enhance storytelling and user engagement in web interfaces.",
    image: golflogo,
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://akshay448591.github.io/Family-Golf/",
    webapp: "https://webversedigital.com/",
  },
];
export const currentlyworkingprojects = [
  {
    id: 0,
    title: "Task Manager with Admin Dashboard (In Progress)",
    image: progress,
    description:
      "TaskMaster is an ongoing project where I'm building a full-stack task management application using the MERN stack (MongoDB, Express, React, Node.js). The application will feature a user-friendly admin dashboard for managing tasks, users, and generating performance insights. I am integrating Chart.js for data visualization and adding advanced features like user authentication and role-based access control. This project is a work-in-progress and demonstrates my ability to design, build, and scale full-stack web applications with real-time features.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "MERN Stack",
      "Admin Dashboard",
      "Chart.js",
      "Task Management",
      "Work-in-Progress",
      "User Authentication",
      "Role-based Access",
    ],
    github: "https://github.com/Akshay448591/Task-Manager",
  },
  {
    id: 1,
    title: " Movie Recommendation Platform with Admin Control(In Progress)",
    image: progress,
    description:
      "it is a full-stack movie recommendation web app built with the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, personalized recommendations, review posting, and account management. Admins have full access to manage users, moderate reviews, block/unblock accounts, and update movie details through a secure dashboard. This project showcases my skills in building scalable, feature-rich web applications with robust user and admin functionality.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "MERN Stack",
      "Movie Recommendation",
      "Admin Dashboard",
      "Full-Stack Development",
      "User Authentication",
      "Review Moderation",
      "CRUD Operations",
      "Web App",
    ],
    github: "https://github.com/Akshay448591/Movie-Recommendation-Project",
  },
  {
    id: 1,
    title: " Movie Recommendation Platform with Admin Control(In Progress)",
    image: progress,
    description:
      "it is a full-stack movie recommendation web app built with the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, personalized recommendations, review posting, and account management. Admins have full access to manage users, moderate reviews, block/unblock accounts, and update movie details through a secure dashboard. This project showcases my skills in building scalable, feature-rich web applications with robust user and admin functionality.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "MERN Stack",
      "Movie Recommendation",
      "Admin Dashboard",
      "Full-Stack Development",
      "User Authentication",
      "Review Moderation",
      "CRUD Operations",
      "Web App",
    ],
    github: "https://github.com/Akshay448591/Food-Recipe-Project",
  },
  {
    id: 2,
    title: " MERN Stack Food Recipe Sharing project(In Progress)",
    image: progress,
    description:
      "it is a full-stack food recipe web application built with the MERN stack (MongoDB, Express, React, Node.js). It includes user authentication and authorization, allowing users to securely register, log in, and manage their own recipes. Core features include creating, reading, updating, and deleting (CRUD) recipes, with a clean user interface for browsing and contributing food ideas. This project demonstrates my understanding of RESTful APIs, secure authentication, and full-stack development workflows.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "MERN Stack",
      "Food Recipe App",
      "Authentication",
      "Authorization",
      "CRUD Operations",
      "Full-Stack Project",
      "Web Development",
    ],
    github: "https://github.com/Akshay448591/Food-Recipe-Project",
  },
];

export const otherproject = [
  {
    id: 0,
    title:
      " Blinkit – Sales & Customer Insights Dashboard (Excel Data Analysis)",
    image: blinkit,
    description:
      "This Excel-based data analysis project focuses on evaluating Blinkit's sales, customer satisfaction, and inventory performance using key business metrics. I used Excel functions, pivot tables, and dynamic charts to uncover patterns and insights from the dataset. The analysis includes KPIs like total sales, average rating, and item performance, supported by visualizations such as donut charts, bar charts, line graphs, and funnel charts to present findings clearly and effectively.",
    tags: [
      "Excel",
      "Data Analysis",
      "Sales Dashboard",
      "Business Intelligence",
      "Blinkit",
      "KPIs",
      "Customer Insights",
      "Inventory Management",
      "Charts",
      "Donut Chart",
      "Bar Chart",
      "Line Chart",
      "Funnel Chart",
    ],
    github: "https://github.com/Akshay448591/Blinkit-Data-Analysis",
  },
];
