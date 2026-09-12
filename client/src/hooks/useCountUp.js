import { useEffect, useRef, useState } from "react";

/** Counts 0 -> target with an ease-out curve once `active` flips true. */
export default function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!active || done.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      done.current = true;
      return;
    }

    const start = performance.now();
    let frame;

    /* `done` is only set once the count actually finishes. Setting it up
       front meant a cancelled run (a remount, or a hot reload in dev) left
       the number frozen partway, often at 0, and refused to restart. */
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(step);
      else done.current = true;
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}
