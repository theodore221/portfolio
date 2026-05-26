import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";

const ease = [0.25, 0.1, 0.25, 1];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "tween", ease, duration: 1.0, delay },
});

const lineDraw = (delay = 0) => ({
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { type: "tween", ease, duration: 0.8, delay },
});

const caseSections = [
  { key: "problem", label: "Problem", number: "01" },
  { key: "process", label: "Process", number: "02" },
  { key: "solution", label: "Solution", number: "03" },
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  const prevProject =
    projectIndex > 0
      ? projects[projectIndex - 1]
      : projects[projects.length - 1];
  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!project) return;
    const prev = document.title;
    document.title = `${project.name} | Theodore Xavier`;
    return () => {
      document.title = prev;
    };
  }, [project]);

  if (!project) {
    return (
      <div className={`${styles.paddingX} max-w-7xl mx-auto pt-40 pb-20 min-h-screen`}>
        <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] mb-4">
          404
        </p>
        <h1 className="font-clash font-bold text-ink text-[36px] sm:text-[56px] leading-[0.95] mb-6">
          Project not found.
        </h1>
        <Link
          to="/"
          className="font-satoshi font-medium text-cedar text-[12px] uppercase tracking-[0.3em] border-b border-cedar pb-0.5 hover:text-ink hover:border-ink transition-colors duration-300"
        >
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  const hasCase = project.problem || project.process || project.solution;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", ease, duration: 0.5 }}
      className="min-h-screen"
    >
      {/* ── Back Navigation ── */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto pt-28 pb-6`}>
        <motion.div {...fade(0.05)}>
          <Link
            to="/"
            className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em] hover:text-ink transition-colors duration-300 inline-flex items-center gap-2"
          >
            <span className="text-[14px] leading-none">&larr;</span>
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* ── Hero Banner ── */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div
          {...fade(0.1)}
          className="w-full h-[300px] sm:h-[450px] lg:h-[550px] overflow-hidden bg-paper border border-paper-border"
        >
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", ease, duration: 1.2, delay: 0.2 }}
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* ── Title Block ── */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto mt-12 sm:mt-16`}>
        <motion.p
          {...fade(0.2)}
          className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] mb-3"
        >
          {[project.year, project.type].filter(Boolean).join(" \u00B7 ")}
        </motion.p>

        <motion.h1
          {...fade(0.25)}
          className={styles.sectionHeadText}
        >
          {project.name}
        </motion.h1>

        <motion.div
          {...lineDraw(0.35)}
          className="w-12 h-px bg-paper-border mt-6 mb-8 origin-left"
        />

        <motion.p
          {...fade(0.35)}
          className="font-satoshi font-normal text-secondary text-[16px] max-w-[62ch] leading-[1.65] text-pretty"
        >
          {project.description}
        </motion.p>
      </div>

      {/* ── Problem / Process / Solution ── */}
      {hasCase && (
        <div className={`${styles.paddingX} max-w-7xl mx-auto mt-20 sm:mt-24`}>
          <motion.div
            {...lineDraw(0.4)}
            className="w-full h-px bg-paper-border mb-12 sm:mb-16 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {caseSections.map((section, i) => {
              const content = project[section.key];
              if (!content) return null;

              return (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    ease,
                    duration: 1.0,
                    delay: 0.45 + i * 0.15,
                  }}
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-clash font-bold text-paper-border text-[32px] sm:text-[40px] leading-none select-none">
                      {section.number}
                    </span>
                    <span className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em]">
                      {section.label}
                    </span>
                  </div>
                  <p className="font-satoshi font-normal text-secondary text-[15px] leading-[1.65] text-pretty">
                    {content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Tech Stack ── */}
      {project.techStack && project.techStack.length > 0 && (
        <div className={`${styles.paddingX} max-w-7xl mx-auto mt-20 sm:mt-24`}>
          <motion.div
            {...lineDraw(0.7)}
            className="w-full h-px bg-paper-border mb-10 origin-left"
          />

          <motion.p
            {...fade(0.75)}
            className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] mb-5"
          >
            Tech Stack
          </motion.p>

          <motion.div
            {...fade(0.8)}
            className="flex flex-wrap gap-3"
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-satoshi font-medium text-ink text-[12px] bg-paper border border-paper-border px-4 py-2.5 uppercase tracking-[0.15em]"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      )}

      {/* ── External Links ── */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto mt-16 sm:mt-20`}>
        <motion.div {...fade(0.85)} className="flex items-center gap-8">
          {project.source_code_link && (
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noreferrer"
              className="font-satoshi font-medium text-ink text-[13px] uppercase tracking-[0.2em] border-b border-ink pb-0.5 hover:text-cedar hover:border-cedar transition-colors duration-500"
            >
              View Code
            </a>
          )}
          {project.source_code_link && project.demo_link && (
            <span className="text-paper-border select-none">&middot;</span>
          )}
          {project.demo_link && (
            <a
              href={project.demo_link}
              target="_blank"
              rel="noreferrer"
              className="font-satoshi font-medium text-cedar text-[13px] uppercase tracking-[0.2em] border-b border-cedar pb-0.5 hover:text-ink hover:border-ink transition-colors duration-500"
            >
              Live Demo
            </a>
          )}
        </motion.div>
      </div>

      {/* ── Prev / Next Navigation ── */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto mt-24 sm:mt-32 mb-16`}>
        <motion.div
          {...lineDraw(0.9)}
          className="w-full h-px bg-paper-border mb-8 origin-left"
        />

        <div className="grid grid-cols-2 gap-4">
          {prevProject && prevProject.slug !== project.slug && (
            <Link
              to={`/work/${prevProject.slug}`}
              className="group text-left"
            >
              <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] mb-2">
                Previous
              </p>
              <p className="font-clash font-semibold text-ink text-[18px] sm:text-[22px] leading-tight group-hover:text-cedar transition-colors duration-300">
                {prevProject.name}
              </p>
            </Link>
          )}

          {nextProject && nextProject.slug !== project.slug && (
            <Link
              to={`/work/${nextProject.slug}`}
              className="group text-right ml-auto"
            >
              <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] mb-2">
                Next
              </p>
              <p className="font-clash font-semibold text-ink text-[18px] sm:text-[22px] leading-tight group-hover:text-cedar transition-colors duration-300">
                {nextProject.name}
              </p>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
