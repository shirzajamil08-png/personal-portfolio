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
    title: "Career Goal",
    text: "Grow into a full-stack engineer shipping production apps, and bring my AI studies into the products I build."
  },
  {
    title: "Education",
    text: "BS Computer Science from GC University Faisalabad, now studying MS Artificial Intelligence at FAST Islamabad."
  },
  {
    title: "Interests",
    text: "Full-stack architecture, REST APIs, responsive layouts, and clean component-driven React front ends."
  },
  {
    title: "Strengths",
    text: "Problem solving, clean readable code, fast learning, and communicating clearly in a team."
  }
];

export const capabilities = [
  "MERN Stack Development",
  "Frontend Development",
  "Backend & REST APIs",
  "Responsive Web Design",
  "Database Modelling",
  "Deployment & Hosting"
];

/* grouped tools, rendered as cards in the Stack block.
   `span` is how many of the 12 grid columns the card takes on desktop
   (pairs sum to 12 so rows line up: 7+5, then 4+8) — bigger groups get
   more room, so the grid reads as tiles rather than uniform rows.
   `tileMin` is the flex-basis (px) each tool tile starts from: it caps a
   full row at roughly the count noted below, and — because the tiles are
   flex items, not grid cells — lets a short last row's tiles grow to
   fill the width instead of leaving empty space. */
export const stackGroups = [
  {
    title: "Frontend",
    mark: "frontend",
    span: 7,
    tileMin: 65, // 5 per row
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js"]
  },
  {
    title: "Backend & Database",
    mark: "backend",
    span: 5,
    tileMin: 75, // 3 per row
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose"]
  },
  {
    title: "AI & Productivity",
    mark: "ai",
    span: 4,
    tileMin: 85, // 2 per row
    items: ["ChatGPT", "Claude"]
  },
  {
    title: "Tools & Deploy",
    mark: "tools",
    span: 8,
    tileMin: 78, // all 5 fit on one row — no lone tile left dangling on its own line
    items: ["Git & GitHub", "VS Code", "Postman", "Vercel", "Render"]
  }
];

/* Placeholder entry — swap in your real certificate (title, issuer, link)
   once you have one to show. */
export const certificates = [
  {
    title: "Add Your Certificate Name",
    org: "Issuing Platform",
    mark: "cert",
    link: ""
  }
];

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
    org: "Punjab Group of Colleges Faisalabad",
    text: "Intermediate in Pre-Medical, before moving into computer science."
  }
];

export const experience = [
  {
    date: "2026",
    title: "Web Development Intern",
    org: "SQROCK IT · India (Remote)",
    logo: "/assets/sqrock.png",
    text: "Completed a remote internship working on web development tasks with a distributed team."
  },
  {
    date: "2025 - Present",
    title: "Self-directed Projects",
    org: "Personal work",
    text: "Designed, built and deployed five React and MERN applications, all live, each with its own GitHub repository."
  }
];

/* Shown in the Languages card next to Education. Placeholder levels —
   correct these to your own. */
export const languages = [
  { code: "Ur", name: "Urdu", level: "Native" },
  { code: "En", name: "English", level: "Intermediate" }
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
