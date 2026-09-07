import { motion } from "framer-motion";

/**
 * Fades and lifts children into view once, when they scroll in.
 * `amount: 0` matters: tall blocks (the hero copy on a phone) only ever peek a
 * few percent into the viewport, so any visible pixel has to count.
 */
export default function Reveal({ children, delay = 0, className = "", as = "div", ...rest }) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
