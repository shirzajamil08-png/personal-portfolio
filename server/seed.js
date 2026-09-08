/* =========================================================
   seed.js loads the projects into MongoDB
     npm run seed              insert (skips if the collection already has data)
     npm run seed -- --force   wipe the projects collection and re-insert

   Screenshots live in client/public/assets/projects/ and are served from
   /assets/projects/<name>.jpg
   ========================================================= */
require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const mongoose = require("mongoose");
const { connectDB } = require("./config/db");
const Project = require("./models/Project");

const projects = [
  {
    title: "FoodExpress: Food Delivery System",
    description:
      "Full MERN application for ordering food online: browse restaurants and menus, add items to a wishlist or cart, and place an order behind a login. React front end talking to an Express and MongoDB API.",
    tech: ["React", "Express", "MongoDB", "Mongoose", "Axios", "Bootstrap"],
    tags: ["fullstack", "mern", "react"],
    image: "/assets/projects/food-delivery.jpg",
    thumb: 1,
    github: "https://github.com/shirzajamil08-png/food-_elivery_system",
    demo: "https://food-eliverysystem.vercel.app/",
    featured: true,
    order: 1
  },
  {
    title: "EventBook: Event Booking Platform",
    description:
      "Discover concerts, seminars and workshops, filter them by category, search by name and book a seat. Multi-page React app with client-side routing and a light/dark theme toggle.",
    tech: ["React", "React Router", "React Bootstrap", "Vite"],
    tags: ["frontend", "react"],
    image: "/assets/projects/event-booking.jpg",
    thumb: 2,
    github: "https://github.com/shirzajamil08-png/event-booking-website",
    demo: "https://event-booking-website-liard.vercel.app/",
    order: 2
  },
  {
    title: "Car Rental Website",
    description:
      "Rental booking front end where visitors browse the fleet, choose a pickup location with pickup and return dates, and search available cars. Responsive layout with scroll-triggered animations.",
    tech: ["React", "Bootstrap", "AOS", "Vite"],
    tags: ["frontend", "react"],
    image: "/assets/projects/car-rental.jpg",
    thumb: 3,
    github: "https://github.com/shirzajamil08-png/car-rental-website",
    demo: "https://car-rental-website-snowy.vercel.app/",
    order: 3
  },
  {
    title: "Toast & Brew: Coffee House",
    description:
      "Warm, image-led site for a coffee shop with an about section, full menu, photo gallery and a table reservation call to action, animated as you scroll.",
    tech: ["React", "Bootstrap", "AOS", "Vite"],
    tags: ["frontend", "react"],
    image: "/assets/projects/coffee.jpg",
    thumb: 4,
    github: "https://github.com/shirzajamil08-png/coffee-website",
    demo: "https://coffee-website-navy-five.vercel.app/",
    order: 4
  },
  {
    title: "This MERN Portfolio",
    description:
      "The site you are on. React front end with a Three.js particle scene and CSS 3D cards, an Express REST API, and MongoDB Atlas storing these projects and every contact message.",
    tech: ["React", "Three.js", "Express", "MongoDB", "Framer Motion"],
    tags: ["fullstack", "mern", "react"],
    image: "/assets/projects/portfolio.jpg",
    thumb: 6,
    emoji: "\u{1F3A8}",
    github: "https://github.com/shirzajamil08-png/personal-portfolio",
    demo: "https://personal-portfolio-theta-beige-99.vercel.app/",
    order: 5
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
  inserted.forEach((p) => console.log(`  - ${p.title}`));

  await mongoose.connection.close();
}

seed().catch(async (err) => {
  console.error("Seed failed:", err.message);
  await mongoose.connection.close();
  process.exit(1);
});
