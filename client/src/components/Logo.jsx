/* Wordmark tile: the initials in a solid black square with an accent dot.
   Minimal, prints well, and reads at any size. */
export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="Shirza Jamil logo">
      <rect width="40" height="40" rx="6" fill="#0a0a0a" />
      <text
        x="19"
        y="21.5"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontSize="15"
        fontWeight="500"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        SJ
      </text>
      <circle cx="32" cy="9" r="3" fill="var(--accent, #ff2d2d)" />
    </svg>
  );
}
