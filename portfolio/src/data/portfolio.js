// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Haridas Bargire",
  role: "Java Full Stack Developer",
  email: "haridasbargire001@gmail.com",
  phone: "7499148475",
  linkedin: "https://www.linkedin.com/in/haridas-bargire/",
  github: "https://github.com/Haridas-Bargire",
  resume: "/Haridas_Bargire_Resume.pdf",
  photo: "/profile.jpg",
  intro:
    "I build web and mobile applications with React, Spring Boot, MySQL and Flutter. I am looking for an entry-level role where I can work on real systems and keep growing as a software engineer.",
  about: [
    "I am a Java full stack developer with hands-on experience building complete applications using React JS, Spring Boot, MySQL, and Flutter with Dart.",
    "My work covers designing REST APIs, JWT-based authentication, pagination, validation, DTO mapping, and global exception handling. I prefer clean, well-organised code and care about secure application design.",
    "I am currently an intern at Leometric Technology Pvt Ltd, where I work on backend services and a cross-platform mobile application.",
  ],
  highlights: [
    { label: "MCA CGPA", value: "8.36" },
    { label: "BCA CGPA", value: "8.86" },
    { label: "Projects", value: "3" },
  ],
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    role: "Java Full Stack Intern",
    company: "Leometric Technology Pvt Ltd",
    period: "Jun 2026 – Present",
    points: [
      "Developed and maintained backend REST APIs using Java and Spring Boot.",
      "Designed database tables and optimised queries in MySQL.",
      "Implemented JWT-based authentication and authorization.",
      "Currently building the Health Tracker Application, a cross-platform mobile app using Flutter and Dart with a Spring Boot backend, which lets users log health metrics, track progress, and view activity history.",
      "Worked with frontend and backend team members using Git and GitHub.",
    ],
  },
];

export const projects = [
  {
    title: "Health Tracker Application",
    period: "2026",
    status: "Ongoing",
    stack: ["Flutter", "Dart", "Spring Boot", "MySQL", "REST APIs"],
    points: [
      "Building a cross-platform health tracking app with Flutter and Dart for Android and iOS.",
      "Designing Spring Boot REST APIs for health metrics, activity history, and user profiles.",
      "Connecting the Flutter app to the backend APIs for real-time data sync and progress tracking.",
      "Using MySQL to store user health records and activity logs.",
    ],
  },
  {
    title: "Bus Booking System",
    period: "2025",
    status: "Full stack",
    stack: ["React JS", "Spring Boot", "MySQL", "JWT", "REST APIs"],
    points: [
      "Built a full stack bus booking application with a React JS frontend and a Spring Boot backend.",
      "Designed REST APIs for bus search, seat selection, and booking management.",
      "Implemented JWT-based authentication with role-based access for users and admins.",
      "Built React components for bus search, seat layout, and booking history.",
      "Connected the frontend to the backend with Axios and managed application state across multiple views.",
    ],
  },
  {
    title: "FlashRide – Online Cab Booking System",
    period: "",
    status: "Full stack",
    stack: ["Spring Boot", "Spring MVC", "Spring Data JPA", "MySQL"],
    points: [
      "Built a cab booking application using Spring Boot, Spring MVC, JPA, and MySQL.",
      "Implemented user registration, login, ride booking, fare calculation, and booking history.",
      "Designed 15+ REST endpoints for ride and booking operations, using MVC architecture and database relationships for maintainable code.",
    ],
  },
];

export const skillGroups = [
  { title: "Programming Languages", icon: "code", items: ["Java", "JavaScript", "Dart", "SQL"] },
  { title: "Mobile Development", icon: "mobile", items: ["Flutter", "Dart"] },
  { title: "Frontend", icon: "browser", items: ["HTML5", "CSS", "React JS", "Bootstrap"] },
  {
    title: "Backend",
    icon: "server",
    items: ["Spring", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "JSP", "JDBC", "REST APIs"],
  },
  { title: "Database", icon: "database", items: ["MySQL", "PostgreSQL"] },
  {
    title: "Tools and Platforms",
    icon: "tools",
    items: ["Git", "GitHub", "Maven", "VS Code", "Eclipse", "Postman", "SQL Plus"],
  },
  { title: "Concepts", icon: "bulb", items: ["OOP", "DSA", "SDLC", "Agile", "Scrum", "CRUD Operations"] },
];

export const education = [
  {
    level: "Master of Computer Application",
    institution: "Dr D Y Patil School Of MCA",
    period: "2024 – 2026",
    score: "CGPA 8.36",
  },
  {
    level: "Bachelor of Computer Application",
    institution: "Swami Ramanand Teerth Marathwada University",
    period: "2021 – 2024",
    score: "CGPA 8.86",
  },
  {
    level: "HSC",
    institution: "Mamta Secondary Vidyalaya, Gangakhed, Parbhani",
    period: "2021",
    score: "87.83%",
  },
  {
    level: "SSC",
    institution: "Mamta Secondary Vidyalaya, Gangakhed, Parbhani",
    period: "2019",
    score: "76%",
  },
];

export const certifications = [
  { title: "Java Full Stack Development", issuer: "Skills IT Academy" },
];
