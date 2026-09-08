# Shirza Jamil — MERN Stack 3D Portfolio

A personal portfolio built on the full **MERN stack** with a live **Three.js** WebGL
background and CSS 3D interactions.

- **M**ongoDB — stores the projects shown on the site and every contact-form message
- **E**xpress — REST API with routes, controllers, middleware and error handling
- **R**eact — the entire front end, built with Vite and animated with Framer Motion
- **N**ode.js — runs the API server

## Project structure

```
personal-portfolio/
├── client/                    React front end (Vite)
│   ├── index.html
│   ├── vite.config.js         dev server + /api proxy + build chunking
│   ├── public/assets/
│   │   └── resume.pdf         placeholder CV — replace with your own
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── api.js             fetch wrapper for the Express API
│       ├── index.css          design tokens, layout, 3D transforms, responsive rules
│       ├── data/portfolio.js  your content + offline fallback for projects
│       ├── hooks/             useTypewriter, useCountUp
│       └── components/        Navbar, Hero, About, Skills, Projects, Journey,
│                              Resume, Contact, Footer, ThreeBackground,
│                              TiltCard, Reveal, Loader, ScrollProgress, icons
│
├── server/                    Express + MongoDB API
│   ├── server.js              app entry, middleware, route mounting
│   ├── seed.js                loads the starter projects into MongoDB
│   ├── .env.example           copy to .env and fill in
│   ├── config/db.js           Mongoose connection
│   ├── models/                Message.js, Project.js  (schemas + validation)
│   ├── controllers/           request handlers
│   ├── routes/                /api/messages, /api/projects
│   └── middleware/            adminAuth, notFound, errorHandler
│
└── static-version/            the original plain HTML/CSS/JS build, still runnable
```

## Setup

### 1. Install dependencies

```bash
npm install --prefix server
```

```bash
npm install --prefix client
```

### 2. Connect the database

`server/.env` is already set up to use the **local MongoDB** running on this PC:

```
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
```

Nothing else to do locally — the MongoDB Windows service starts with the computer.
The database is named `portfolio`, with two collections: `projects` and `messages`.

**Switching to MongoDB Atlas** (needed only when you deploy, since a hosted site cannot
reach a database on your PC):

1. Create a free account at [mongodb.com/atlas](https://www.mongodb.com/atlas) and make an
   **M0 free cluster**.
2. **Database Access** → Add New Database User → username + password → *Read and write to
   any database*.
3. **Network Access** → Add IP Address → `0.0.0.0/0` (allow from anywhere) so your host can
   connect.
4. **Database** → Connect → **Drivers** → copy the connection string.
5. Paste it into `server/.env` as `MONGODB_URI`, replacing `<password>` with the password
   from step 2 and adding the database name before the `?`:

```
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

6. Re-run the seed so the cloud database has your projects.

`server/.env` is git-ignored. Never commit it, and never paste a connection string
containing a password into a chat, screenshot, or issue.

### 3. Load the starter projects

```bash
npm run seed --prefix server
```

### 4. Run it

Two terminals:

```bash
npm run dev --prefix server
```

```bash
npm run dev --prefix client
```

Then open **http://localhost:5173**. The Projects section shows
`● Loaded live from MongoDB` when the database is connected.

### 5. Read the messages people send you

```bash
curl -H "x-admin-key: PASTE_YOUR_ADMIN_KEY" http://localhost:5000/api/messages
```

Your key is the `ADMIN_KEY` line in `server/.env`. You can also browse the data with
MongoDB Compass — connect to `mongodb://127.0.0.1:27017` and open the `portfolio` database.

## API reference

| Method | Route | Access | Purpose |
|--------|-------|--------|---------|
| GET | `/api/health` | public | Is the API up? Is the database connected? |
| GET | `/api/projects` | public | List projects |
| POST | `/api/projects` | admin | Add a project |
| PUT | `/api/projects/:id` | admin | Update a project |
| DELETE | `/api/projects/:id` | admin | Remove a project |
| POST | `/api/messages` | public | Contact form submission |
| GET | `/api/messages` | admin | Read the inbox |
| DELETE | `/api/messages/:id` | admin | Delete a message |

Admin routes need an `x-admin-key` header matching `ADMIN_KEY` in `.env`:

```bash
curl -H "x-admin-key: your-key" http://localhost:5000/api/messages
```

Validation runs in two places: the React form gives instant feedback, and the Mongoose
schemas reject bad data on the server, returning a `{ field: message }` map the form
displays. The server is the one that actually decides.

## Features

Hero with typing animation and animated counters · About · Skills with a draggable 3D
MERN cube and animated bars · Projects loaded from MongoDB with filters · Education and
experience timelines · Resume view/download · Validated contact form that saves to
MongoDB · Sticky navbar with scroll spy · Scroll progress bar · Mobile menu · Footer.

The Three.js scene renders ~1800 particles and four wireframe solids that react to the
pointer and to scroll.

## Make it yours

1. **Your details** — everything lives in `client/src/data/portfolio.js`: name, role,
   email, phone, location, social links, skills, timeline entries.
2. **Profile photo** — in `client/src/components/Hero.jsx`, swap the inline `<svg>` for
   `<img src="/assets/profile.jpg" alt="Your Name" />` and drop the file into
   `client/public/assets/`.
3. **Projects** — edit `server/seed.js` and re-run `npm run seed --prefix server -- --force`,
   or POST to `/api/projects` with your admin key. Keep
   `client/src/data/portfolio.js` in sync so the offline fallback matches.
4. **Resume** — the CV is written as HTML in `resume/resume.html`. To change it:
   edit that file, open it in Chrome, press **Ctrl+P** → *Save as PDF*, set
   **Margins: None** and tick **Background graphics**, then save over
   `client/public/assets/resume.pdf`. The image shown in the Resume section is
   `client/public/assets/resume-preview.jpg` — a screenshot of the same page.
5. **Colors** — the `:root` block at the top of `client/src/index.css`.

## Deploying to GitHub + Vercel

The site and the API deploy together as **one Vercel project**, on one link.
`vercel.json` builds the React app, and `api/index.js` runs the Express API as a
serverless function at `/api/*`.

### Step 1 — Put your projects in MongoDB Atlas

A website on the internet cannot reach the MongoDB on your PC, so the live site needs a
cloud database.

1. Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas), create a free **M0** cluster.
2. **Database Access** → Add New Database User → username + password →
   *Read and write to any database*. Write the password down.
3. **Network Access** → Add IP Address → **Allow access from anywhere** (`0.0.0.0/0`).
   Vercel's servers change IP, so this is required.
4. **Database** → **Connect** → **Drivers** → copy the connection string.
5. Open `server/.env` and replace the `MONGODB_URI` line with the Atlas string —
   put your password in place of `<password>` and add `/portfolio` before the `?`:

```
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

6. Load your projects into the cloud database:

```bash
npm run seed --prefix server
```

### Step 2 — Push to GitHub

```bash
git add -A
```

```bash
git commit -m "MERN portfolio ready to deploy"
```

```bash
git remote add origin https://github.com/YOUR-USERNAME/personal-portfolio.git
```

```bash
git push -u origin master
```

`server/.env` is git-ignored, so your password never reaches GitHub.

### Step 3 — Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and pick the repository.
2. Leave every build setting on the default — `vercel.json` already has them.
3. Open **Environment Variables** and add two:

| Name | Value |
|------|-------|
| `MONGODB_URI` | your Atlas string, the same one from Step 1 |
| `ADMIN_KEY` | the `ADMIN_KEY` line from `server/.env` |

4. Click **Deploy**.

### Step 4 — Check the live site

Open `https://your-project.vercel.app/api/health` — it should say
`"database": "connected"`. Then open the site itself: the Projects section reads
`● Loaded live from MongoDB`, and the contact form saves into Atlas.

If it says `disconnected`, the cause is almost always one of: a typo in `MONGODB_URI`,
`<password>` not replaced, or Network Access not set to `0.0.0.0/0`.

### Updating the live site later

```bash
git add -A && git commit -m "update" && git push
```

Vercel rebuilds and redeploys automatically on every push.

## Notes

- If the API or database is unreachable, the Projects section falls back to the bundled
  copy of the data, so the site never renders broken.
- The WebGL scene pauses when the tab is hidden, uses ~900 particles on phones, and hides
  itself entirely if WebGL is unavailable.
- `prefers-reduced-motion` is respected throughout: no typing, tilt, or animation, and the
  3D scene renders a single static frame.
- The build splits Three.js, React and Framer Motion into separate chunks so the page
  shell paints before the 3D scene finishes loading.

## Tech used

React 18 · Vite · Framer Motion · Three.js · Node.js · Express · MongoDB · Mongoose ·
HTML5 · CSS3 · JavaScript (ES6+) · Nodemon

Nothing outside the allowed stack is used — no Python, no other languages or runtimes.
