/* Logo mark: a rounded tile drawn with a gradient stroke and the initials
   inside it. Outlined rather than filled, so it reads as a designed mark
   instead of a default avatar tile, and it keeps the site's own colours. */
export default function Logo({ size = 38, id = "logo" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      role="img"
      aria-label="Shirza Jamil logo"
    >
      <defs>
        <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c5cff" />
          <stop offset="55%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>

      <rect
        x="1.1"
        y="1.1"
        width="37.8"
        height="37.8"
        rx="11.5"
        fill="rgba(255,255,255,.05)"
        stroke={`url(#${id}-stroke)`}
        strokeWidth="1.7"
      />

      <text
        x="20"
        y="21"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Sora, system-ui, sans-serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#eef0ff"
      >
        SJ
      </text>
    </svg>
  );
}
