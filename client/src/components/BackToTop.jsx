import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./techIcons";

/* Floating button, bottom right. Hidden at the top of the page and fades in
   once the visitor has scrolled far enough to want it. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });

  return (
    <button
      className={`to-top-fab ${show ? "is-visible" : ""}`}
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  );
}
