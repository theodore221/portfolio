import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const ease = (t) => 1 - Math.pow(1 - t, 4);

const AnimatedStat = ({ value, suffix = "", label, duration = 1600 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setCurrent(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const target = Math.max(0, Number(value) || 0);
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setCurrent(Math.round(target * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reducedMotion]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 sm:gap-3 py-6 sm:py-8 border-t border-paper-border"
    >
      <span className="metric-value font-clash font-bold tabular-nums leading-[0.85] tracking-[-0.04em] text-outline-flame select-none">
        {current.toLocaleString()}
        {suffix}
      </span>
      <span className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em]">
        {label}
      </span>
    </div>
  );
};

export default AnimatedStat;
