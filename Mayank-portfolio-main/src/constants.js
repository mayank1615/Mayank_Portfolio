// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import radiansysLogo from './assets/company_logo/radiansys_inc_logo.jpeg';
import kreativanLogo from './assets/company_logo/KTLogo.png'
import dsclLogo from './assets/company_logo/logo_logo1.png'

// Education Section Logo's
import shivalikLogo from './assets/education_logo/shivalikcollegeofficial_logo.jpeg';
import polyLogo from './assets/education_logo/government_polytechnic_college_logo.jpeg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo }, ,
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: radiansysLogo,
    role: "Software Engineer",
    company: "RADIANSYS TECHNOLOGIES PRIVATE LIMITED",
    date: "June 2024 - Present",
    desc: "Developed dynamic and scalable web applications, handling frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Next JS",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
      "Material UI",
    ],
  },
  {
    id: 1,
    img: kreativanLogo,
    role: "Web Developer",
    company: "Kreativan Technologies",
    date: "January 2024 - May 2024",
    desc: "Developed dynamic and scalable web applications using MERN stack, handling frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Next JS",
      "Tailwind CSS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Redux",
      "Material UI",
    ],
  },
  {
    id: 2,
    img: dsclLogo,
    role: "Frontend Intern",
    company: "Dehradun Skill City Limited",
    date: "July 2022 - September 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: shivalikLogo,
    school: "Shivalik College of Engineering and Technology, Dehradun",
    date: "July 2021 - June 2024",
    grade: "8 CGPA",
    desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from Shivalik College of Engineering and Technology, Dehradun. During my time at Shivalik, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Shivalik College of Engineering and Technology has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: polyLogo,
    school: "Government Polytechnic College, Kashipur",
    date: "July 2020 - June 2023",
    grade: "71%",
    desc: "I completed my Diploma in Computer Science and Engineering from Government Polytechnic College, Kashipur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Government Polytechnic College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Diploma in Electronics and Communication Engineering",
  },
];
