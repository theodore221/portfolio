import { motion } from "framer-motion";

import { styles } from "../styles";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TestimonialCard = ({ testimonial, name, designation, company, index }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.2, 0.75)}
      className="solid-card p-8 w-full sm:w-[340px] flex flex-col gap-6"
    >
      <p className="font-clash font-bold text-cedar text-[56px] leading-none select-none">"</p>
      <p className="font-satoshi italic text-ink text-[20px] leading-[1.4] -mt-8 text-pretty">
        {testimonial}
      </p>
      <div className="flex items-center gap-3 mt-2">
        <div className="w-10 h-10 bg-cedar flex items-center justify-center flex-shrink-0">
          <span className="font-satoshi font-medium text-primary text-[14px] leading-none">
            {initials}
          </span>
        </div>
        <div>
          <p className="font-satoshi font-medium text-ink text-[13px] uppercase tracking-[0.2em]">
            {name}
          </p>
          <p className="font-satoshi font-normal text-cedar text-[13px]">
            {designation}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Kind words</p>
        <h2 className={styles.sectionHeadText}>What clients say.</h2>
      </motion.div>

      <hr className="section-rule" />

      {testimonials.length === 0 ? (
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-10 max-w-md flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="availability-dot w-1.5 h-1.5 rounded-full bg-cedar flex-shrink-0" />
            <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em]">
              Reserved
            </p>
          </div>
          <p className="font-clash font-semibold italic text-ink text-[22px] leading-[1.3] tracking-[-0.01em]">
            Testimonials coming soon.
          </p>
          <p className="font-satoshi font-normal text-secondary text-[14px] leading-[1.6] text-pretty">
            Selected client and colleague references will land here as
            current engagements wrap up.
          </p>
        </motion.div>
      ) : (
        <div className="mt-12 flex flex-wrap gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-${index}`}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
