import { useRef } from "react";

/**
 * 3D tilt-on-hover wrapper. Skipped on touch devices, narrow screens and when
 * the visitor prefers reduced motion.
 */
export default function TiltCard({ children, max = 10, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const frame = useRef(null);

  const enabled = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.innerWidth > 640;

  const onMouseMove = (e) => {
    if (!enabled() || frame.current) return;

    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      const el = ref.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const px = (clientX - r.left) / r.width - 0.5;
      const py = (clientY - r.top) / r.height - 0.5;

      el.style.transform =
        `perspective(900px) rotateY(${px * max * 2}deg) rotateX(${-py * max * 2}deg) ` +
        `translateY(-6px) scale(1.015)`;
    });
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <Tag
      ref={ref}
      className={`tilt ${className}`.trim()}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
