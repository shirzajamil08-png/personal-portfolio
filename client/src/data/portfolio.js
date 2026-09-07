/* Static content for the site. Projects also live in MongoDB — this copy is the
   fallback the app renders when the API is unreachable (or before it responds). */

export const profile = {
  name: "Shirza Jamil",
  initials: "SJ",
  role: "MERN Stack Developer",
  email: "shirzajamil08@gmail.com",
  phone: "+92 000 0000000",
  location: "Pakistan · Remote friendly",
  resume: "/assets/resume.pdf",
  socials: {
    github: "https://github.com/shirza",
    linkedin: "https://linkedin.com/in/shirza",
    twitter: "https://twitter.com/shirza",
    instagram: "https://instagram.com/shirza"
  }
};

export const roles = [
  "MERN Stack Developer",
  "React.js Enthusiast",
  "Node & Express Backend Dev",
  "UI/UX Focused Coder"
];

export const stats = [
  { value: 15, label: "Projects built" },
  { value: 12, label: "Technologies" },
  { value: 2, label: "Years coding" }
];

export const aboutCards = [
  {
    icon: "\u{1F3AF}",
    title: "Career Goal",
    text: "Grow into a full-stack engineer shipping production apps at scale, and contribute to open source along the way."
  },
  {
    icon: "\u{1F393}",
    title: "Education",
    text: "Bachelor degree in Computer Science, backed by self-driven MERN and UI/UX training."
  },
  {
    icon: "\u{1F4A1}",
    title: "Interests",
    text: "Full-stack architecture, REST APIs, 3D on the web, design systems and performance tuning."
  },
  {
    icon: "\u{26A1}",
    title: "Strengths",
    text: "Problem solving, clean readable code, fast learning, and communicating clearly in a team."
  }
];

export const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3 / Bootstrap", level: 92 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "React.js", level: 88 },
  { name: "Node.js & Express", level: 85 },
  { name: "MongoDB / Mongoose", level: 82 },
  { name: "UI/UX Design", level: 75 },
  { name: "Git & GitHub", level: 70 }
];

export const chips = [
  "HTML5", "CSS3", "JavaScript", "React.js", "Next.js",
  "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs",
  "JWT Auth", "Bootstrap", "Tailwind CSS", "Nodemon", "Socket.io",
  "Git & GitHub", "Figma", "Postman", "Three.js", "Responsive Design"
];

export const cubeFaces = {
  front: "React",
  back: "Node",
  right: "Mongo",
  left: "Express",
  top: "JS",
  bottom: "CSS"
};

/* Fallback copy of the projects that seed.js loads into MongoDB. */
export const fallbackProjects = [
  {
    _id: "local-1",
    title: "ShopSphere — E-Commerce Platform",
    description:
      "A full MERN store with product search, cart, checkout flow, order history and an admin dashboard for inventory.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    tags: ["mern", "react", "api"],
    emoji: "\u{1F6D2}",
    thumb: 1,
    github: "https://github.com/shirza/shopsphere",
    demo: "",
    featured: true
  },
  {
    _id: "local-2",
    title: "TaskFlow — Team Task Manager",
    description:
      "Kanban-style project tracker with drag-and-drop boards, role-based access, JWT authentication and activity logging.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    tags: ["mern", "react", "api"],
    emoji: "\u{1F5C3}",
    thumb: 2,
    github: "https://github.com/shirza/taskflow",
    demo: ""
  },
  {
    _id: "local-3",
    title: "ChatterBox — Realtime Chat App",
    description:
      "Socket.io powered messaging with private rooms, typing indicators, online presence and persisted message history.",
    tech: ["Socket.io", "Node.js", "React", "MongoDB"],
    tags: ["mern", "api"],
    emoji: "\u{1F4AC}",
    thumb: 3,
    github: "https://github.com/shirza/chatterbox",
    demo: ""
  },
  {
    _id: "local-4",
    title: "DevBlog CMS",
    description:
      "Markdown-based blogging platform with a rich editor, image uploads, tags, comments and an SEO-friendly public site.",
    tech: ["Express", "MongoDB", "React", "Multer"],
    tags: ["mern", "api"],
    emoji: "\u{270D}",
    thumb: 4,
    github: "https://github.com/shirza/devblog",
    demo: ""
  },
  {
    _id: "local-5",
    title: "WeatherScope Dashboard",
    description:
      "Responsive React dashboard consuming a live weather API — geolocation search, 7-day forecast charts and saved cities.",
    tech: ["React", "REST API", "Chart.js", "Bootstrap"],
    tags: ["react", "api"],
    emoji: "\u{1F305}",
    thumb: 5,
    github: "https://github.com/shirza/weatherscope",
    demo: ""
  },
  {
    _id: "local-6",
    title: "This MERN Portfolio",
    description:
      "The site you are on: React front end with a Three.js scene, an Express API and MongoDB storing projects and contact messages.",
    tech: ["React", "Three.js", "Express", "MongoDB"],
    tags: ["mern", "react"],
    emoji: "\u{1F3A8}",
    thumb: 6,
    github: "https://github.com/shirza/personal-portfolio",
    demo: ""
  }
];

export const education = [
  {
    date: "2023 — Present",
    title: "BS Computer Science",
    org: "University · Pakistan",
    text: "Core coursework in data structures, databases, OOP, operating systems and web engineering."
  },
  {
    date: "2021 — 2023",
    title: "Intermediate — Pre-Engineering",
    org: "College",
    text: "Graduated with distinction; started self-teaching HTML, CSS and JavaScript in the same period."
  },
  {
    date: "2024",
    title: "Certifications",
    org: "Online",
    text: "MERN Stack Development · Responsive Web Design · JavaScript Algorithms & Data Structures · UI/UX Fundamentals."
  }
];

export const experience = [
  {
    date: "2025 — Present",
    title: "Freelance Web Developer",
    org: "Remote",
    text: "Build responsive marketing sites and MERN dashboards for small businesses — from Figma handoff to deployment."
  },
  {
    date: "2025",
    title: "Web Development Intern",
    org: "Software House",
    text: "Shipped React components against a live Express/MongoDB API, wrote reusable UI, and fixed cross-browser bugs."
  },
  {
    date: "2024",
    title: "Workshops & Achievements",
    org: "University & community",
    text: "Front-end bootcamp participant, university hackathon finalist, and active open-source contributor."
  }
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];
