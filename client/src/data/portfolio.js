/* Static content for the site. Projects also live in MongoDB. This copy is the
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
  "React.js Developer",
  "Node & Express Backend Dev",
  "Responsive Web Designer"
];

export const stats = [
  { value: 5, label: "Projects deployed" },
  { value: 18, label: "Technologies" },
  { value: 2, label: "Years in web dev" }
];

export const aboutCards = [
  {
    icon: "\u{1F3AF}",
    title: "Career Goal",
    text: "Grow into a full-stack engineer shipping production apps, and bring my AI studies into the products I build."
  },
  {
    icon: "\u{1F393}",
    title: "Education",
    text: "BS Computer Science from GC University Faisalabad, now studying MS Artificial Intelligence at FAST Islamabad."
  },
  {
    icon: "\u{1F4A1}",
    title: "Interests",
    text: "Full-stack architecture, REST APIs, responsive layouts, and clean component-driven React front ends."
  },
  {
    icon: "\u{26A1}",
    title: "Strengths",
    text: "Problem solving, clean readable code, fast learning, and communicating clearly in a team."
  }
];

export const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "Bootstrap", level: 90 },
  { name: "Responsive Web Design", level: 90 },
  { name: "React.js", level: 88 },
  { name: "Node.js & Express", level: 85 },
  { name: "MongoDB & Mongoose", level: 82 },
  { name: "JavaScript (ES6+)", level: 70 },
  { name: "Git & GitHub", level: 70 }
];

export const chips = [
  "HTML5", "CSS3", "Bootstrap", "Responsive Design", "React.js",
  "React Router", "Vite", "AOS", "JavaScript", "Node.js",
  "Express.js", "MongoDB", "Mongoose", "REST APIs", "Axios",
  "Nodemon", "Git & GitHub", "VS Code"
];

export const cubeFaces = {
  front: "React",
  back: "Node",
  right: "Mongo",
  left: "Express",
  top: "JS",
  bottom: "CSS"
};

/* Fallback copy of the projects that seed.js loads into MongoDB.
   Keep this in sync with server/seed.js. */
export const fallbackProjects = [
  {
    _id: "local-1",
    title: "Toast & Brew: Coffee House",
    description:
      "Warm, image-led site for a coffee shop with an about section, full menu, photo gallery and a table reservation call to action, animated as you scroll.",
    tech: ["React", "Bootstrap", "AOS", "Vite"],
    tags: ["frontend", "react"],
    featured: true,
    image: "/assets/projects/coffee.jpg",
    thumb: 4,
    github: "https://github.com/shirzajamil08-png/coffee-website",
    demo: "https://coffee-website-navy-five.vercel.app/"
  },
  {
    _id: "local-2",
    title: "Car Rental Website",
    description:
      "Rental booking front end where visitors browse the fleet, choose a pickup location with pickup and return dates, and search available cars. Responsive layout with scroll-triggered animations.",
    tech: ["React", "Bootstrap", "AOS", "Vite"],
    tags: ["frontend", "react"],
    image: "/assets/projects/car-rental.jpg",
    thumb: 3,
    github: "https://github.com/shirzajamil08-png/car-rental-website",
    demo: "https://car-rental-website-snowy.vercel.app/"
  },
  {
    _id: "local-3",
    title: "This MERN Portfolio",
    description:
      "The site you are on. React front end, an Express REST API, and MongoDB Atlas storing these projects and every message sent through the contact form.",
    tech: ["React", "Express", "MongoDB", "Framer Motion", "Vite"],
    tags: ["fullstack", "mern", "react"],
    image: "/assets/projects/portfolio.jpg",
    emoji: "\u{1F3A8}",
    thumb: 6,
    github: "https://github.com/shirzajamil08-png/personal-portfolio",
    demo: "https://personal-portfolio-theta-beige-99.vercel.app/"
  },
  {
    _id: "local-4",
    title: "FoodExpress: Food Delivery System",
    description:
      "Full MERN application for ordering food online: browse restaurants and menus, add items to a wishlist or cart, and place an order behind a login. React front end talking to an Express and MongoDB API.",
    tech: ["React", "Express", "MongoDB", "Mongoose", "Axios", "Bootstrap"],
    tags: ["fullstack", "mern", "react"],
    image: "/assets/projects/food-delivery.jpg",
    thumb: 1,
    github: "https://github.com/shirzajamil08-png/food-_elivery_system",
    demo: "https://food-eliverysystem.vercel.app/"
  },
  {
    _id: "local-5",
    title: "EventBook: Event Booking Platform",
    description:
      "Discover concerts, seminars and workshops, filter them by category, search by name and book a seat. Multi-page React app with client-side routing and a light/dark theme toggle.",
    tech: ["React", "React Router", "React Bootstrap", "Vite"],
    tags: ["frontend", "react"],
    image: "/assets/projects/event-booking.jpg",
    thumb: 2,
    github: "https://github.com/shirzajamil08-png/event-booking-website",
    demo: "https://event-booking-website-liard.vercel.app/"
  }
];

export const education = [
  {
    date: "2026 - Present",
    title: "MS Artificial Intelligence",
    org: "FAST NUCES · Islamabad Campus",
    text: "Currently pursuing a master's in AI, building on a full-stack development background."
  },
  {
    date: "2022 - 2026",
    title: "BS Computer Science",
    org: "GC University Faisalabad",
    text: "Completed. Core coursework in data structures, databases, OOP, operating systems and web engineering."
  },
  {
    date: "2020 - 2022",
    title: "FSc Pre-Medical",
    org: "College",
    text: "Intermediate in Pre-Medical, before moving into computer science."
  }
];

export const experience = [
  {
    date: "2026",
    title: "Web Development Intern",
    org: "SQROCK IT · India (Remote)",
    text: "Completed a remote internship working on web development tasks with a distributed team."
  },
  {
    date: "2025 - Present",
    title: "Self-directed Projects",
    org: "Personal work",
    text: "Designed, built and deployed five React and MERN applications, all live, each with its own GitHub repository."
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
