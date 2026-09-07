import { useEffect, useState } from "react";

/** The gradient bar across the top that tracks reading progress. */
export default function ScrollProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPercent(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-bar" style={{ width: `${percent}%` }} aria-hidden="true" />;
}
