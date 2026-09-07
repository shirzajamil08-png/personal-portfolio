/* =========================================================
   seed.js — load the starter projects into MongoDB
     npm run seed          insert (skips if the collection already has data)
     npm run seed -- --force   wipe the projects collection and re-insert
   ========================================================= */
require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const mongoose = require("mongoose");
const { connectDB } = require("./config/db");
const Project = require("./models/Project");

const projects = [
  {
    title: "ShopSphere — E-Commerce Platform",
    description:
      "A full MERN store with product search, cart, checkout flow, order history and an admin dashboard for inventory.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    tags: ["mern", "react", "api"],
    emoji: "\u{1F6D2}",
    thumb: 1,
    github: "https://github.com/shirza/shopsphere",
    demo: "",
    featured: true,
    order: 1
  },
  {
    title: "TaskFlow — Team Task Manager",
    description:
      "Kanban-style project tracker with drag-and-drop boards, role-based access, JWT authentication and activity logging.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    tags: ["mern", "react", "api"],
    emoji: "\u{1F5C3}",
    thumb: 2,
    github: "https://github.com/shirza/taskflow",
    demo: "",
    order: 2
  },
  {
    title: "ChatterBox — Realtime Chat App",
    description:
      "Socket.io powered messaging with private rooms, typing indicators, online presence and persisted message history.",
    tech: ["Socket.io", "Node.js", "React", "MongoDB"],
    tags: ["mern", "api"],
    emoji: "\u{1F4AC}",
    thumb: 3,
    github: "https://github.com/shirza/chatterbox",
    demo: "",
    order: 3
  },
  {
    title: "DevBlog CMS",
    description:
      "Markdown-based blogging platform with a rich editor, image uploads, tags, comments and an SEO-friendly public site.",
    tech: ["Express", "MongoDB", "React", "Multer"],
    tags: ["mern", "api"],
    emoji: "\u{270D}",
    thumb: 4,
    github: "https://github.com/shirza/devblog",
    demo: "",
    order: 4
  },
  {
    title: "WeatherScope Dashboard",
    description:
      "Responsive React dashboard consuming a live weather API — geolocation search, 7-day forecast charts and saved cities.",
    tech: ["React", "REST API", "Chart.js", "Bootstrap"],
    tags: ["react", "api"],
    emoji: "\u{1F305}",
    thumb: 5,
    github: "https://github.com/shirza/weatherscope",
    demo: "",
    order: 5
  },
  {
    title: "This MERN Portfolio",
    description:
      "The site you are on: React front end with a Three.js scene, an Express API and MongoDB storing projects and contact messages.",
    tech: ["React", "Three.js", "Express", "MongoDB"],
    tags: ["mern", "react"],
    emoji: "\u{1F3A8}",
    thumb: 6,
    github: "https://github.com/shirza/personal-portfolio",
    demo: "",
    order: 6
  }
];

async function seed() {
  const conn = await connectDB();

  if (!conn) {
    console.error("Cannot seed without a database connection. Set MONGODB_URI in server/.env.");
    process.exit(1);
  }

  const force = process.argv.includes("--force");
  const existing = await Project.countDocuments();

  if (existing > 0 && !force) {
    console.log(`Projects collection already has ${existing} documents. Nothing to do.`);
    console.log("Run `npm run seed -- --force` to wipe and re-insert.");
    await mongoose.connection.close();
    return;
  }

  if (force) {
    await Project.deleteMany({});
    console.log("Cleared the projects collection.");
  }

  const inserted = await Project.insertMany(projects);
  console.log(`Inserted ${inserted.length} projects.`);

  await mongoose.connection.close();
}

seed().catch(async (err) => {
  console.error("Seed failed:", err.message);
  await mongoose.connection.close();
  process.exit(1);
});
