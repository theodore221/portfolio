import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a driven software engineer with comprehensive development experience,
        I bring a wealth of technical expertise and project management skills.
        My proven track record in developing and optimizing data-driven
        applications using JavaScript, Python, and frameworks like React.js,
        Django, and AngularJS is complemented by proficiency in AWS
        infrastructure and Agile methodologies. With a solid foundation in
        software engineering and recognition through awards and scholarships, I
        am eager to contribute to dynamic organizations and drive technological
        advancement.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
