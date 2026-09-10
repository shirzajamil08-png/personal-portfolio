/* Inline SVG marks for the technologies used on the site.
   Everything is drawn with currentColor so an icon takes the colour of
   whatever it sits in. Real, full-colour brand logos (for anything
   simple-icons ships) live in brandIcons.jsx instead. */
import {
  ReactBrand,
  NodeBrand,
  ExpressBrand,
  MongoBrand,
  MongooseBrand,
  GitHubBrand,
  Html5Brand,
  BootstrapBrand,
  JsBrand,
  TailwindBrand,
  ClaudeBrand,
  PostmanBrand,
  VercelBrand,
  RenderBrand,
  OpenAiBrand,
  VscodeBrand,
  Css3Badge
} from "./brandIcons";

const svg = (children, extra = {}) => (props) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...extra}
    {...props}
  >
    {children}
  </svg>
);

/* ---------- Stack group marks: one per category, not per tool ----------
   Geometry taken from the Lucide icon set (ISC licensed) and inlined the
   same way the brand logos are, so these are properly drawn rather than
   traced by hand. Lucide is drawn for a 24 box at stroke-width 2. */

/* app-window */
export const FrontendIcon = svg(
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M10 4v4" />
    <path d="M2 8h20" />
    <path d="M6 4v4" />
  </>,
  { strokeWidth: 2 }
);

/* database */
export const DatabaseIcon = svg(
  <>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </>,
  { strokeWidth: 2 }
);

/* sparkles */
export const AiIcon = svg(
  <>
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    <path d="M20 2v4" />
    <path d="M22 4h-4" />
    <circle cx="4" cy="20" r="2" />
  </>,
  { strokeWidth: 2 }
);

/* rocket */
export const ToolsIcon = svg(
  <>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
  </>,
  { strokeWidth: 2 }
);

/* ---------- tooling ---------- */

export const ApiIcon = svg(
  <>
    <path d="M9 4.5H7.6A2.1 2.1 0 0 0 5.5 6.6v3.1c0 1.2-1 2.3-2.3 2.3 1.3 0 2.3 1 2.3 2.3v3.1a2.1 2.1 0 0 0 2.1 2.1H9" />
    <path d="M15 4.5h1.4a2.1 2.1 0 0 1 2.1 2.1v3.1c0 1.2 1 2.3 2.3 2.3-1.3 0-2.3 1-2.3 2.3v3.1a2.1 2.1 0 0 1-2.1 2.1H15" />
  </>
);

export const CodeIcon = svg(
  <>
    <path d="m8.6 8.4-4 3.6 4 3.6M15.4 8.4l4 3.6-4 3.6" />
    <path d="m13.4 5.6-2.8 12.8" strokeWidth="1.2" />
  </>
);

export const PhoneIcon = svg(
  <path d="M21.2 16.6v2.6a1.9 1.9 0 0 1-2.1 1.9 18.6 18.6 0 0 1-8.1-2.9 18.3 18.3 0 0 1-5.6-5.6A18.6 18.6 0 0 1 2.5 4.4 1.9 1.9 0 0 1 4.4 2.3H7a1.9 1.9 0 0 1 1.9 1.6c.12.9.35 1.8.67 2.6a1.9 1.9 0 0 1-.43 2L8.1 9.6a15 15 0 0 0 5.6 5.6l1.1-1.05a1.9 1.9 0 0 1 2-.43c.84.32 1.72.55 2.6.67a1.9 1.9 0 0 1 1.6 1.9z" />
);

export const PinIcon = svg(
  <>
    <path d="M20 10.4c0 5.6-8 12-8 12s-8-6.4-8-12a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10.2" r="2.8" />
  </>
);


export const CertificateIcon = svg(
  <>
    <circle cx="12" cy="9" r="6.2" />
    <path d="m9 14.4-1.6 6.4 4.6-2.6 4.6 2.6-1.6-6.4" />
    <path d="M9.4 9.2 11 10.8l3.6-3.6" strokeWidth="1.3" />
  </>
);

/* ---------- section marks ---------- */

export const CapIcon = svg(
  <>
    <path d="M2.6 8.8 12 4.4l9.4 4.4L12 13.2z" />
    <path d="M6.4 10.6v5.1c0 1.6 2.5 2.9 5.6 2.9s5.6-1.3 5.6-2.9v-5.1" />
    <path d="M20.4 9.6v4.8" strokeWidth="1.2" />
  </>
);

export const BriefcaseIcon = svg(
  <>
    <rect x="2.6" y="7.4" width="18.8" height="12.4" rx="2.4" />
    <path d="M8.6 7.4V5.8a2 2 0 0 1 2-2h2.8a2 2 0 0 1 2 2v1.6" />
    <path d="M2.6 12.6c2.9 1.3 6 2 9.4 2s6.5-.7 9.4-2" strokeWidth="1.2" />
  </>
);

export const BankIcon = svg(
  <>
    <path d="M3.2 9.4 12 4.4l8.8 5" />
    <path d="M5.4 9.8v8.4M9.8 9.8v8.4M14.2 9.8v8.4M18.6 9.8v8.4" />
    <path d="M2.8 20.4h18.4" />
  </>
);

export const SchoolIcon = svg(
  <>
    <path d="M4.2 20.4V7.6l7.8-3.2 7.8 3.2v12.8" />
    <path d="M2.6 20.4h18.8" />
    <path d="M9.6 20.4v-4.2h4.8v4.2" />
    <path d="M9.8 10.4h4.4" strokeWidth="1.2" />
  </>
);

/* the emphasis mark off a block heading: three strokes converging at the
   bottom-right of the box and fanning up and out to the left, so the box
   can be hung on the heading's top-left corner */
export const SparkIcon = svg(
  <>
    <path d="M19.7 16.8 15.5 8.9" />
    <path d="M17.3 19 9.9 13.8" />
    <path d="M16.1 22 7.2 20.8" />
  </>,
  { strokeWidth: 2.2 }
);

export const GlobeIcon = svg(
  <>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M2.9 12h18.2" />
    <path d="M12 2.8c2.3 2.5 3.5 5.6 3.5 9.2s-1.2 6.7-3.5 9.2c-2.3-2.5-3.5-5.6-3.5-9.2s1.2-6.7 3.5-9.2z" />
  </>
);

export const ArrowUpIcon = svg(
  <>
    <path d="M12 19.5V5" />
    <path d="m6 11 6-6 6 6" />
  </>
);

/* Look-up used by the Stack tiles. Real logos everywhere except the
   generic REST glyph, which isn't a brand. Anything missing falls back
   to CodeIcon. */
export const ICONS = {
  "HTML5": Html5Brand,
  "CSS3": Css3Badge,
  "JavaScript": JsBrand,
  "Bootstrap": BootstrapBrand,
  "Tailwind CSS": TailwindBrand,
  "React.js": ReactBrand,
  "Node.js": NodeBrand,
  "Express.js": ExpressBrand,
  "MongoDB": MongoBrand,
  "Mongoose": MongooseBrand,
  "REST APIs": ApiIcon,
  "Git & GitHub": GitHubBrand,
  "VS Code": VscodeBrand,

  "ChatGPT": OpenAiBrand,
  "Claude": ClaudeBrand,
  "Postman": PostmanBrand,
  "Vercel": VercelBrand,
  "Render": RenderBrand
};

export const iconFor = (name) => ICONS[name] || CodeIcon;

/* a colour for the one tile still drawn by hand (real logos carry their
   own official colour already, so they don't need this) */
const TINTS = {
  "REST APIs": "#0a0a0a"
};

export const tintFor = (name) => TINTS[name];
