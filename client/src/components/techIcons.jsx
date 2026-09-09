/* Inline SVG marks for the technologies used on the site.
   Everything is drawn with currentColor so an icon takes the colour of
   whatever it sits in. No icon font, no external requests. */

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

/* ---------- core stack ---------- */

export const ReactIcon = svg(
  <>
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="3.9" />
    <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(120 12 12)" />
  </>,
  { strokeWidth: 1.1 }
);

export const NodeIcon = svg(
  <>
    <path d="M12 2.2 20.5 7v10L12 21.8 3.5 17V7z" />
    <path d="M9.6 14.4c0 .9.8 1.5 2.2 1.5 1.4 0 2.3-.5 2.3-1.5 0-1-.7-1.3-2.2-1.5-1.6-.2-2.3-.5-2.3-1.5 0-.9.8-1.4 2.2-1.4 1.3 0 2.1.5 2.2 1.3" />
  </>
);

export const MongoIcon = svg(
  <>
    <path d="M12 2.5c2.9 3.9 4.6 7 4.6 9.9 0 3.4-2 5.9-4.6 6.9-2.6-1-4.6-3.5-4.6-6.9 0-2.9 1.7-6 4.6-9.9z" />
    <path d="M12 6.5v11.5" strokeWidth="1.1" />
    <path d="M11.8 19.4h.5l-.15 2.1h-.2z" fill="currentColor" />
  </>
);

export const ExpressIcon = svg(
  <>
    <rect x="2.2" y="4.2" width="19.6" height="15.6" rx="3.4" />
    <text
      x="12"
      y="15.6"
      textAnchor="middle"
      fontSize="9"
      fontWeight="700"
      fontFamily="JetBrains Mono, monospace"
      fill="currentColor"
      stroke="none"
    >
      ex
    </text>
  </>
);

export const JsIcon = svg(
  <>
    <rect x="2.5" y="2.5" width="19" height="19" rx="3.2" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="9.5"
      fontWeight="700"
      fontFamily="JetBrains Mono, monospace"
      fill="currentColor"
      stroke="none"
    >
      JS
    </text>
  </>
);

export const CssIcon = svg(
  <>
    <path d="M4 2.6h16l-1.5 16.8L12 21.4l-6.5-2V2.6z" />
    <path d="M8.2 7.2h7.6M8.6 11.2h6.8l-.4 4.2-3 .9-3-.9-.1-1.3" strokeWidth="1.2" />
  </>
);

export const HtmlIcon = svg(
  <>
    <path d="M4 2.6h16l-1.5 16.8L12 21.4l-6.5-2V2.6z" />
    <path d="M15.9 7.4H8.4l.3 3.4h6.9l-.4 4.4-3.2.9-3.2-.9-.15-1.6" strokeWidth="1.2" />
  </>
);

export const BootstrapIcon = svg(
  <>
    <rect x="2.5" y="2.5" width="19" height="19" rx="4.4" />
    <path d="M9.4 7.4h3.9c1.5 0 2.4.7 2.4 1.9 0 1-.6 1.7-1.6 1.8v.1c1.3.1 2 .8 2 2 0 1.4-1 2.2-2.7 2.2H9.4z" strokeWidth="1.3" />
  </>
);

/* ---------- tooling ---------- */

export const GitIcon = svg(
  <>
    <circle cx="6.5" cy="6" r="2.2" />
    <circle cx="6.5" cy="18" r="2.2" />
    <circle cx="17.5" cy="9.5" r="2.2" />
    <path d="M6.5 8.2v7.6M8.6 7.3c3 1 5.6.7 7.2 1.1" />
  </>
);

export const ViteIcon = svg(
  <>
    <path d="M2.6 4.6 12 21.4l9.4-16.8L12 7z" />
    <path d="M12.9 6.2 9.6 12.6l2.7-.4-.9 4.9 3.3-6.6-2.7.4z" strokeWidth="1.2" />
  </>
);

export const RouterIcon = svg(
  <>
    <circle cx="5.5" cy="5.8" r="2.3" />
    <circle cx="18.5" cy="18.2" r="2.3" />
    <path d="M5.5 8.1v4.4a3.5 3.5 0 0 0 3.5 3.5h6" />
    <path d="M13.4 13.6 16.2 16l-2.8 2.4" />
  </>
);

export const ApiIcon = svg(
  <>
    <path d="M9 4.5H7.6A2.1 2.1 0 0 0 5.5 6.6v3.1c0 1.2-1 2.3-2.3 2.3 1.3 0 2.3 1 2.3 2.3v3.1a2.1 2.1 0 0 0 2.1 2.1H9" />
    <path d="M15 4.5h1.4a2.1 2.1 0 0 1 2.1 2.1v3.1c0 1.2 1 2.3 2.3 2.3-1.3 0-2.3 1-2.3 2.3v3.1a2.1 2.1 0 0 1-2.1 2.1H15" />
  </>
);

export const AxiosIcon = svg(
  <>
    <path d="M3.5 8.5h13.2M13.4 5.2l3.3 3.3-3.3 3.3" />
    <path d="M20.5 15.5H7.3M10.6 12.2 7.3 15.5l3.3 3.3" />
  </>
);

export const NodemonIcon = svg(
  <>
    <path d="M20.4 12a8.4 8.4 0 1 1-2.5-6" />
    <path d="M20.6 3.6v4.6H16" />
  </>
);

export const ResponsiveIcon = svg(
  <>
    <rect x="2.4" y="4.2" width="13" height="10" rx="1.7" />
    <path d="M5.6 17.6h6" />
    <rect x="17" y="9.4" width="4.6" height="10.4" rx="1.5" />
  </>
);

export const VscodeIcon = svg(
  <>
    <path d="M17.6 2.8 8.4 12l9.2 9.2 3.4-1.6V4.4z" />
    <path d="m3 8.8 3-1.6 5.2 4.8L6 16.8l-3-1.6z" strokeWidth="1.2" />
  </>
);

export const AosIcon = svg(
  <>
    <path d="M12 20.5V4.2" />
    <path d="m6.6 9.6 5.4-5.4 5.4 5.4" />
    <path d="M4.5 21.4h15" strokeWidth="1.2" />
  </>
);

export const CodeIcon = svg(
  <>
    <path d="m8.6 8.4-4 3.6 4 3.6M15.4 8.4l4 3.6-4 3.6" />
    <path d="m13.4 5.6-2.8 12.8" strokeWidth="1.2" />
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

export const ArrowUpIcon = svg(
  <>
    <path d="M12 19.5V5" />
    <path d="m6 11 6-6 6 6" />
  </>
);

/* Look-up used by the skill tags. Anything missing falls back to CodeIcon. */
export const ICONS = {
  "HTML5": HtmlIcon,
  "CSS3": CssIcon,
  "Bootstrap": BootstrapIcon,
  "Responsive Design": ResponsiveIcon,
  "React.js": ReactIcon,
  "React Router": RouterIcon,
  "Vite": ViteIcon,
  "AOS": AosIcon,
  "JavaScript": JsIcon,
  "Node.js": NodeIcon,
  "Express.js": ExpressIcon,
  "MongoDB": MongoIcon,
  "Mongoose": MongoIcon,
  "REST APIs": ApiIcon,
  "Axios": AxiosIcon,
  "Nodemon": NodemonIcon,
  "Git & GitHub": GitIcon,
  "VS Code": VscodeIcon,

  /* the skill bars spell some of these out differently */
  "Responsive Web Design": ResponsiveIcon,
  "Node.js & Express": NodeIcon,
  "MongoDB & Mongoose": MongoIcon,
  "JavaScript (ES6+)": JsIcon
};

export const iconFor = (name) => ICONS[name] || CodeIcon;
