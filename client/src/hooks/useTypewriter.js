import { useEffect, useRef, useState } from "react";

/** Types each phrase out, pauses, deletes it, moves to the next. */
export default function useTypewriter(phrases, { typeMs = 85, deleteMs = 45, holdMs = 1600 } = {}) {
  const [text, setText] = useState("");
  const state = useRef({ phrase: 0, chars: 0, deleting: false });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(phrases[0]);
      return;
    }

    let timer;

    const tick = () => {
      const s = state.current;
      const word = phrases[s.phrase];
      s.chars += s.deleting ? -1 : 1;
      setText(word.slice(0, s.chars));

      let delay = s.deleting ? deleteMs : typeMs;

      if (!s.deleting && s.chars === word.length) {
        s.deleting = true;
        delay = holdMs;
      } else if (s.deleting && s.chars === 0) {
        s.deleting = false;
        s.phrase = (s.phrase + 1) % phrases.length;
        delay = 350;
      }

      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, typeMs);
    return () => clearTimeout(timer);
  }, [phrases, typeMs, deleteMs, holdMs]);

  return text;
}
