
// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import dockerLogo from './assets/tech_logo/dockerLogo.png';
import j2EELogo from './assets/tech_logo/j2EELogo.png';
import hibernateLogo from './assets/tech_logo/hibernateLogo.png';
import springLogo from './assets/tech_logo/springLogo.png';
import restapiLogo from './assets/tech_logo/restapiLogo.png';
import dsLogo from './assets/tech_logo/dsLogo.png';
import microLogo from './assets/tech_logo/microLogo.png';
import kubernetesLogo from './assets/tech_logo/kubernetesLogo.png';
import mavenLogo from './assets/tech_logo/mavenLogo.png';
import tomcatLogo from './assets/tech_logo/tomcatLogo.png';
import awsLogo from './assets/tech_logo/awsLogo.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import phpLogo from './assets/tech_logo/phpLogo.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import Codept from './assets/company_logo/Codept.jpeg';
import visionImpect from './assets/company_logo/visionImpect.jpeg';

// Education Section Logo's  madhavUniversityLogo
import JNVULogo from './assets/education_logo/JNVULogo.jpeg';
import madhavUniversityLogo from './assets/education_logo/madhavUniversityLogo.jpeg';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's

import docSlotLogo from './assets/work_logo/docSlotLogo.png';



export const SkillsInfo = [

    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'C-Sharp', logo: csharpLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: "PhpLogo", logo: phpLogo }

        ],
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML5', logo: htmlLogo },
            { name: 'CSS3', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Next JS', logo: nextjsLogo },
            { name: 'Material UI', logo: materialuiLogo },

        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: "J2EE", logo: j2EELogo },
            { name: "Hibernate", logo: hibernateLogo },
            { name: "Spring", logo: springLogo },
            { name: 'Springboot', logo: springbootLogo },
            { name: "restapi", logo: restapiLogo },
            { name: "Microservices", logo: microLogo },
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: "Data Structure", logo: dsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'PostgreSQL', logo: postgreLogo },
        ],
    },

    {
        title: 'DevTools',
        skills: [
            { name: "docker", logo: dockerLogo },
            { name: "kubernetes", logo: kubernetesLogo },
            { name: "AWS", logo: awsLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: "Tomcat", logo: tomcatLogo },
            { name: "Maven", logo: mavenLogo },
            { name: "netlifyLogo", logo: netlifyLogo },
            { name: "VercelLogo", logo: vercelLogo }




        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: Codept,
        role: "Backend Developer",
        company: "CADOpt Technologies Pvt Ltd, Bengaluru, Karnataka",
        date: "Septmber-2022 to  April-2023",
        desc: `Project: Finance_Transaction_Management_System     Role: Backend Developer
               Developed secure banking backend services using Spring Boot, creating RESTful APIs for accounts, transactions, authentication, and role-based access with JWT.
Designed MySQL database with Hibernate/JPA, implementing complete CRUD operations and optimized performance using indexing and pagination.
Integrated frontend ensured smooth API communication, fixed bugs, and maintained data consistency through Spring Boot transactional management.`,
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Spring Boot",
            "Hibernate/JPA",
            "RestAPI",
            "PostMan",
            "MySQL"
        ],
    },
    {
        id: 1,
        img: visionImpect,
        role: "Backend Developer Intern",
        company: "Vision Impect Pvt Ltd, Bengaluru, Karnataka",
        date: "January-2019  July 2019",
        desc: "During my internship, I worked as a Backend Developer where I focused on building server-side logic and integrating the application with the database. I developed RESTful APIs using Java, JSP/Servlets, Spring, and Spring Boot to handle user registration, login, policy creation, premium calculations, and admin operations. I also designed and optimized MySQL database schemas, queries, and entity relationships to improve performance. Along with this, I integrated backend APIs with frontend components built using HTML, CSS, and JavaScript. I collaborated closely with my team using Git for version control and smooth project coordination.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "J2EE",
            "Hibernate",
            "Spring Boot",
            "MYSQL",
        ],
    },

];

export const education = [
    {
        id: 0,
        img: madhavUniversityLogo,
        school: "Madhav University,Pindwada, Dist. - Sirohi, Rajasthan 307026 ",
        date: "Aug-2016 - July 2019",
        grade: "79.5%",
        desc: "I have completed my Master's degree (MCA) in Computer Applications from Madhav University,UGC approved Rajasthan, India. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Master of Computer Applications - MCA",
    },
    {
        id: 1,
        img: JNVULogo,
        school: "Sajjan Internation College, JNVU University, Manoura Bhakri, Pali, Rajasthan",
        date: "Aug 2013 - July 2016",
        grade: "69.2%",
        desc: "I completed my Bachelor's degree in Bachelor of Computer Application (BCA.) from JNVU(Jai Narayan Viyash University), Ajmer, Rajasthan. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelor of Computer Application (BCA)",
    },
    {
        id: 2,
        img: vpsLogo,
        school: " Shree Vishwa Deep Gurukul Maheshwaranand Ashram village Jadan, district Pali, Rajasthan, India",
        date: "Apr 2012 - March 2013",
        grade: "59.41%",
        desc: "I completed my class 12 in Commerce in Computer Science education from Shree Vishwa Deep Gurukul Maheshwaranand Ashram village Jadan, district Pali, Rajasthan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
        degree: "CBSE(XII) - Commerce with Computer Science",
    },
    {
        id: 3,
        img: vpsLogo,
        school: "Gayatri School, D.P.S. Colony, Marwar Junction, Pali, Rajasthan, India ",
        date: "Apr 2009 - March 2010",
        grade: "53.45%",
        desc: "I completed my class 10 education from Gayatri School, D.P.S. Colony, Marwar Junction, Pali, Rajasthan, India  under the CBSE board, where I studied Science with Computer.",
        degree: "CBSE(X)",
    },
];

export const projects = [
    {
        id: 0,
        title: "DocSlot - Online Doctor Appointment Booking System",
        description:
            "This project involved developing secure and scalable backend services for a multi-panel healthcare appointment platform. Core responsibilities included building authentication workflows, doctor onboarding processes, appointment scheduling logic, and payment integrations. Backend architecture was designed to ensure efficient data flow between patient, doctor, and admin panels while maintaining high performance and data accuracy. Collaboration with the frontend team ensured seamless API integration and smooth feature delivery across all modules. The work emphasized clean code practices, optimized database design, and reliable system performance throughout the development cycle",
        image: docSlotLogo,
        tags: ["HTML", "CSS", "JavaScript", "React JS", "Axios", "Node.js", "Express", "Mongodb", "Rozerpay"],
        github: "https://github.com/deepakdagdi/DocSlot-MERN-App",
        webapp: "https://doc-slot-app.vercel.app",
    },

];  