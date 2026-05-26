import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const ease = [0.25, 0.1, 0.25, 1];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease, delay },
});

const fadeIn = (delay) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.0, ease, delay },
});

const LocationWidget = () => {
  const getTime = () => {
    const now = new Date();
    const opts = { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Australia/Melbourne" };
    return new Intl.DateTimeFormat("en-AU", opts).format(now);
  };
  const getOffset = () => {
    const parts = new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Melbourne",
      timeZoneName: "shortOffset",
    }).formatToParts(new Date());
    const tz = parts.find((p) => p.type === "timeZoneName")?.value || "GMT+10";
    return tz.replace("GMT", "GMT");
  };

  const [time, setTime] = useState(() => getTime());
  const [offset, setOffset] = useState(() => getOffset());

  useEffect(() => {
    const tick = () => {
      setTime(getTime());
      setOffset(getOffset());
    };
    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    const timeout = setTimeout(() => {
      tick();
      const interval = setInterval(tick, 60000);
      return () => clearInterval(interval);
    }, msToNextMinute);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="font-satoshi font-medium text-cedar uppercase tracking-[0.25em] tabular-nums" style={{ fontSize: "10px" }}>
      Melbourne, AU · {offset} · {time}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Location widget — anchored to the page grid */}
      <div className={`${styles.paddingX} absolute top-24 inset-x-0 max-w-7xl mx-auto hidden sm:flex justify-end`}>
        <motion.div {...fadeIn(1.20)}>
          <LocationWidget />
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex items-end pb-20 sm:pb-28`}
      >
        <div className="flex-1">
          {/* Single bold positioning line — no rotation */}
          <motion.p
            {...fadeIn(0.15)}
            className="font-satoshi font-medium text-cedar uppercase tracking-[0.28em] text-[11px] mb-6"
          >
            Building end-to-end production platforms · Melbourne
          </motion.p>

          {/* Name — XAVIER as electric gradient */}
          <motion.div
            {...fadeUp(0.30)}
            className={`${styles.heroHeadText}`}
          >
            THEODORE
          </motion.div>
          <motion.div
            {...fadeUp(0.45)}
            className={`${styles.heroHeadText} text-outline-flame`}
          >
            XAVIER
          </motion.div>

          <motion.hr
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "3rem", opacity: 1 }}
            transition={{ duration: 1.0, ease, delay: 0.60 }}
            className="section-rule"
          />

          <motion.p
            {...fadeUp(0.75)}
            className="font-satoshi font-normal text-secondary text-[16px] max-w-xl leading-[1.6] mb-8 text-pretty"
          >
            Full-stack engineer shipping production systems end-to-end —
            multi-portal booking platforms, dynamic pricing, secure cloud
            architecture. The kind of software that quietly runs operations
            every day.
          </motion.p>

          <motion.div
            {...fadeIn(0.90)}
            className="flex flex-wrap gap-x-8 gap-y-4 items-center"
          >
            <a
              href="#work"
              className="font-satoshi font-medium text-ink text-[14px] uppercase tracking-[0.2em] border-b border-ink pb-0.5 hover:text-flame hover:border-flame transition-colors duration-300"
            >
              View Work
            </a>
            <a
              href="#about"
              className="font-satoshi font-medium text-cedar text-[14px] uppercase tracking-[0.2em] border-b border-cedar pb-0.5 hover:text-ink hover:border-ink transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-satoshi font-medium text-cedar text-[14px] uppercase tracking-[0.2em] border-b border-cedar pb-0.5 hover:text-ink hover:border-ink transition-colors duration-300"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            {...fadeIn(1.05)}
            className="flex items-center gap-2 mt-6"
          >
            <div className="availability-dot w-1.5 h-1.5 rounded-full bg-flame flex-shrink-0" />
            <span
              className="font-satoshi font-medium text-cedar uppercase tracking-[0.25em]"
              style={{ fontSize: "10px" }}
            >
              Available · Full-time or contract
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
