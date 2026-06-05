import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import AnimatedStat from "./projects/AnimatedStat";

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

const Section = ({ eyebrow, title, intro, children, className = "" }) => (
  <div className={`${styles.paddingX} max-w-7xl mx-auto mt-20 sm:mt-28 ${className}`}>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "tween", ease, duration: 0.9 }}
      className="w-full h-px bg-paper-border origin-left mb-10 sm:mb-14"
    />
    {(eyebrow || title) && (
      <div className="flex flex-col gap-3 mb-10 sm:mb-14 max-w-[68ch]">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "tween", ease, duration: 0.7 }}
            className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em]"
          >
            {eyebrow}
          </motion.p>
        )}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "tween", ease, duration: 0.9, delay: 0.05 }}
            className="font-clash font-bold text-ink text-[36px] sm:text-[52px] lg:text-[64px] leading-[0.95] tracking-[-0.025em] text-balance"
          >
            {title}
          </motion.h2>
        )}
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "tween", ease, duration: 0.9, delay: 0.15 }}
            className="font-satoshi font-normal text-secondary text-[15px] sm:text-[16px] leading-[1.65] text-pretty mt-2"
          >
            {intro}
          </motion.p>
        )}
      </div>
    )}
    {children}
  </div>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  const others = projects.filter((_, i) => i !== projectIndex);
  const prevProject = others.length > 0 ? projects[(projectIndex - 1 + projects.length) % projects.length] : null;
  const nextProject = others.length > 0 ? projects[(projectIndex + 1) % projects.length] : null;
  const hasOtherProjects = others.length > 0;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  useEffect(() => {
    const prev = document.title;
    if (project) {
      document.title = `${project.name} | Theodore Xavier`;
    } else {
      document.title = "Not found | Theodore Xavier";
    }
    return () => {
      document.title = prev;
    };
  }, [project]);

  if (!project) {
    return (
      <div className={`${styles.paddingX} max-w-7xl mx-auto pt-40 pb-20 min-h-screen`}>
        <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em] mb-4">
          Untitled
        </p>
        <h1 className="font-clash font-bold text-ink text-[36px] sm:text-[56px] leading-[0.95] tracking-[-0.025em] mb-6">
          The project you&apos;re looking for doesn&apos;t exist — yet.
        </h1>
        <Link
          to="/"
          className="font-satoshi font-medium text-cedar text-[12px] uppercase tracking-[0.3em] border-b border-cedar pb-0.5 hover:text-ink hover:border-ink transition-colors duration-300"
        >
          &larr; Back to work
        </Link>
      </div>
    );
  }

  const {
    name,
    eyebrow,
    year,
    type,
    tagline,
    description,
    brief,
    architectureDecisions,
    modules,
    roles,
    distinctiveChoices,
    metrics,
    techStack,
    screenshots,
    liveDemoUrl,
    demo_link,
    source_code_link,
    problem,
    process,
    solution,
    image,
  } = project;

  const hasLegacyCase = problem || process || solution;
  const liveUrl = liveDemoUrl || demo_link;

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
            Back to work
          </Link>
        </motion.div>
      </div>

      {/* ── Hero ── */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        {eyebrow && (
          <motion.p
            {...fade(0.1)}
            className="font-satoshi font-medium text-flame text-[11px] uppercase tracking-[0.3em] mb-5"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          {...fade(0.15)}
          className="font-clash font-bold text-ink text-[64px] sm:text-[96px] lg:text-[140px] leading-[0.88] tracking-[-0.04em]"
        >
          {name}
        </motion.h1>

        {tagline && (
          <motion.p
            {...fade(0.25)}
            className="font-clash font-semibold italic text-flame text-[24px] sm:text-[32px] lg:text-[40px] leading-[1.15] tracking-[-0.015em] mt-6 max-w-[28ch] text-balance"
          >
            {tagline}
          </motion.p>
        )}

        <motion.p
          {...fade(0.32)}
          className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em] mt-8"
        >
          {[year, type].filter(Boolean).join(" · ")}
        </motion.p>

        <motion.div
          {...lineDraw(0.4)}
          className="w-12 h-px bg-paper-border mt-6 mb-8 origin-left"
        />

        <motion.p
          {...fade(0.45)}
          className="font-satoshi font-normal text-secondary text-[17px] sm:text-[19px] leading-[1.55] text-pretty max-w-[60ch]"
        >
          {description}
        </motion.p>

        {/* Primary CTAs */}
        <motion.div {...fade(0.55)} className="mt-10 flex flex-wrap items-center gap-5">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-satoshi font-medium text-ink text-[13px] uppercase tracking-[0.25em] border border-paper-border px-5 py-3 rounded-full hover:border-flame hover:text-flame transition-colors duration-300"
            >
              Try the live demo →
            </a>
          )}
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noreferrer"
              className="font-satoshi font-medium text-cedar text-[13px] uppercase tracking-[0.25em] border-b border-cedar/40 pb-0.5 hover:text-ink hover:border-ink transition-colors duration-300"
            >
              View source
            </a>
          )}
        </motion.div>

        {/* Hero screenshot */}
        <motion.div
          {...fade(0.6)}
          className="atrium-screenshot-frame w-full mt-16 sm:mt-20"
        >
          <img
            src={image}
            alt={name}
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="w-full h-auto block"
          />
        </motion.div>
      </div>

      {/* ── Brief ── */}
      {brief && brief.length > 0 && (
        <Section eyebrow="The brief" title="A spreadsheet operation in need of a system.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {brief.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: "tween", ease, duration: 0.9, delay: 0.05 + i * 0.1 }}
                className="font-satoshi font-normal text-secondary text-[16px] sm:text-[17px] leading-[1.65] text-pretty"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </Section>
      )}

      {/* ── Architecture decisions ── */}
      {architectureDecisions && architectureDecisions.length > 0 && (
        <Section
          eyebrow="Architecture decisions"
          title="Five calls that shape the rest."
          intro="Five decisions made up-front that the rest of the system inherits. Quoted from the project's ADRs."
        >
          <div className="flex flex-col">
            {architectureDecisions.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "tween", ease, duration: 0.8, delay: i * 0.08 }}
                className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-3 lg:gap-10 py-8 sm:py-10 border-t border-paper-border last:border-b last:border-paper-border"
              >
                <span className="font-clash font-bold text-paper-border text-[28px] sm:text-[36px] leading-none tabular-nums select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-clash font-semibold text-ink text-[22px] sm:text-[26px] leading-[1.15] tracking-[-0.015em] text-balance">
                    {d.title}
                  </h3>
                  <p className="font-satoshi font-normal text-secondary text-[15px] sm:text-[16px] leading-[1.65] text-pretty italic max-w-[68ch]">
                    &ldquo;{d.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Modules ── */}
      {modules && modules.length > 0 && (
        <Section
          eyebrow="What's inside"
          title="Six modules, one platform."
          intro="A working directory of the system. Every module is live in daily production with pre-populated demo data on the public site."
        >
          <div className="flex flex-col">
            {modules.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: "tween", ease, duration: 0.7, delay: i * 0.05 }}
                className="module-row"
              >
                <span className="module-number">{m.number}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-clash font-semibold text-ink text-[22px] sm:text-[28px] leading-[1.1] tracking-[-0.015em]">
                    {m.name}
                  </h3>
                  <p className="font-satoshi font-normal text-secondary text-[15px] leading-[1.6] text-pretty max-w-[68ch]">
                    {m.blurb}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Roles ── */}
      {roles && roles.length > 0 && (
        <Section
          eyebrow="One codebase, four lenses"
          title="Choose a role."
          intro="Each role sees a different interface — all powered by the same codebase and enforced by Row Level Security at the database."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {roles.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "tween", ease, duration: 0.8, delay: i * 0.08 }}
                className="solid-card flex flex-col gap-4 p-6 sm:p-7"
              >
                <span className="font-clash font-bold text-flame text-[20px] sm:text-[22px] tracking-[-0.015em]">
                  {r.name}
                </span>
                <p className="font-satoshi font-normal text-secondary text-[14px] sm:text-[15px] leading-[1.6] text-pretty">
                  {r.blurb}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Distinctive technical choices ── */}
      {distinctiveChoices && distinctiveChoices.length > 0 && (
        <Section
          eyebrow="Under the hood"
          title="Calls that didn't make the demo page."
          intro="The technical choices the public demo doesn't have room to mention."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 sm:gap-y-14">
            {distinctiveChoices.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "tween", ease, duration: 0.8, delay: i * 0.08 }}
                className="flex flex-col gap-3"
              >
                <h3 className="font-clash font-semibold text-ink text-[22px] sm:text-[24px] leading-[1.15] tracking-[-0.015em] text-balance max-w-[20ch]">
                  {c.title}
                </h3>
                <p className="font-satoshi font-normal text-secondary text-[15px] leading-[1.65] text-pretty max-w-[58ch]">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Metrics ── */}
      {metrics && metrics.length > 0 && (
        <Section
          eyebrow="By the numbers"
          title="At the current commit."
          intro="A snapshot of the codebase as it stands. Counts climb as the system grows."
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-10">
            {metrics.map((m) => (
              <AnimatedStat key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
            ))}
          </div>
        </Section>
      )}

      {/* ── Tech stack ── */}
      {techStack && techStack.length > 0 && (
        <Section eyebrow="Built with" title="A modern, type-safe stack.">
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-satoshi font-medium text-cedar text-[12px] uppercase tracking-[0.2em] border border-paper-border px-4 py-2 rounded-full transition-colors duration-300 hover:border-flame hover:text-flame"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* ── Additional screenshots ── */}
      {screenshots && screenshots.length > 1 && (
        <Section eyebrow="Selected screens" title="What you can poke at on the live site.">
          <div className="flex flex-col gap-10 sm:gap-14">
            {screenshots.slice(1).map((shot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "tween", ease, duration: 1.0, delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="atrium-screenshot-frame">
                  <img
                    src={shot.src}
                    alt={shot.caption || `${name} screenshot ${i + 2}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block"
                  />
                </div>
                {shot.caption && (
                  <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em]">
                    {shot.caption}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Live demo CTA ── */}
      {liveUrl && (
        <Section eyebrow="Hands-on">
          <div className="surface-card p-8 sm:p-12 lg:p-16 w-full flex flex-col gap-6 items-start">
            <h3 className="font-clash font-bold text-ink text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.0] tracking-[-0.025em] text-balance max-w-[18ch]">
              Walk through the {name} platform yourself.
            </h3>
            <p className="font-satoshi font-normal text-secondary text-[16px] leading-[1.65] text-pretty max-w-[58ch]">
              The public demo runs the same codebase as production with
              pre-populated data. Switch between Admin, Staff, Caterer, and
              Customer to see how each role's view differs.
            </p>
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-satoshi font-medium text-ink text-[13px] uppercase tracking-[0.25em] border border-paper-border px-6 py-3 rounded-full hover:border-flame hover:text-flame transition-colors duration-300"
            >
              Open the live demo →
            </a>
          </div>
        </Section>
      )}

      {/* ── Legacy Problem/Process/Solution (kept for older projects) ── */}
      {hasLegacyCase && !brief && (
        <Section eyebrow="The work" title="Problem / process / solution.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {[
              { key: "problem", label: "Problem", number: "01" },
              { key: "process", label: "Process", number: "02" },
              { key: "solution", label: "Solution", number: "03" },
            ].map((s, i) => {
              const content = project[s.key];
              if (!content) return null;
              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "tween", ease, duration: 0.8, delay: i * 0.1 }}
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-clash font-bold text-paper-border text-[32px] sm:text-[40px] leading-none select-none">
                      {s.number}
                    </span>
                    <span className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em]">
                      {s.label}
                    </span>
                  </div>
                  <p className="font-satoshi font-normal text-secondary text-[15px] leading-[1.65] text-pretty">
                    {content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Section>
      )}

      {/* ── Prev / Next Navigation ── */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto mt-24 sm:mt-32 mb-16`}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "tween", ease, duration: 0.9 }}
          className="w-full h-px bg-paper-border mb-8 origin-left"
        />

        {hasOtherProjects ? (
          <div className="grid grid-cols-2 gap-4">
            {prevProject && (
              <Link to={`/work/${prevProject.slug}`} className="group text-left">
                <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] mb-2">
                  Previous
                </p>
                <p className="font-clash font-semibold text-ink text-[18px] sm:text-[22px] leading-tight group-hover:text-flame transition-colors duration-300">
                  {prevProject.name}
                </p>
              </Link>
            )}
            {nextProject && (
              <Link to={`/work/${nextProject.slug}`} className="group text-right ml-auto">
                <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] mb-2">
                  Next
                </p>
                <p className="font-clash font-semibold text-ink text-[18px] sm:text-[22px] leading-tight group-hover:text-flame transition-colors duration-300">
                  {nextProject.name}
                </p>
              </Link>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between gap-6">
            <p className="font-satoshi font-normal text-secondary text-[14px] leading-[1.5] text-pretty max-w-[42ch]">
              More projects ship as they reach the same depth. In the meantime, this is the centrepiece.
            </p>
            <Link
              to="/"
              className="font-satoshi font-medium text-cedar text-[12px] uppercase tracking-[0.3em] border-b border-cedar pb-0.5 hover:text-ink hover:border-ink transition-colors duration-300 shrink-0"
            >
              Back to home
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
