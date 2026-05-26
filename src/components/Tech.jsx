import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const TechCard = ({ name, icon, category }) => (
  <div className="solid-card flex items-center gap-4 px-5 py-4 min-w-[200px] flex-shrink-0">
    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
      <img src={icon} alt={name} className="w-full h-full object-contain" />
    </div>
    <div className="flex flex-col">
      <span className="font-clash font-semibold text-ink text-[15px] leading-tight uppercase tracking-tight">
        {name}
      </span>
      <span className="font-satoshi font-medium text-secondary text-[10px] uppercase tracking-[0.2em] mt-0.5">
        {category}
      </span>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 30 }) => {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex gap-5 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  );
};

const Tech = () => {
  const mid = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, mid);
  const row2 = technologies.slice(mid);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Inventory</p>
        <h2 className={styles.sectionHeadText}>
          The <span className="text-cedar">Tech Stack.</span>
        </h2>
      </motion.div>

      <hr className="section-rule" />

      <div className="mt-10 flex flex-col gap-6">
        <MarqueeRow items={row1} direction="left" speed={35} />
        <MarqueeRow items={row2} direction="right" speed={40} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
