import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ease = [0.25, 0.1, 0.25, 1];
const AUTOPLAY_MS = 6000;

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "Previous project" : "Next project"}
    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${
      disabled
        ? "border-paper-border/40 text-secondary/40 cursor-not-allowed"
        : "border-paper-border text-ink hover:border-flame hover:text-flame cursor-pointer"
    }`}
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === "prev" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  </button>
);

const ProjectCard = ({ project, index, total }) => {
  const navigate = useNavigate();
  const onOpen = () => navigate(`/work/${project.slug}`);

  return (
    <article
      className="solid-card-media shrink-0 snap-start w-[calc(100vw-104px)] sm:w-[calc(100vw-240px)] max-w-[1040px] cursor-pointer group"
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}: ${project.name}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      tabIndex={0}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr]">
        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[520px] overflow-hidden bg-paper-border/30">
          <img
            src={project.image}
            alt={project.name}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={index === 0 ? "high" : "auto"}
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
          />
          {project.eyebrow && (
            <div className="absolute top-5 left-5">
              <span className="font-satoshi font-medium text-ink text-[10px] uppercase tracking-[0.3em] bg-primary/85 backdrop-blur-sm px-3 py-1.5 rounded-full border border-paper-border">
                {project.eyebrow}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10 gap-6">
          <div className="flex flex-col gap-5">
            {(project.year || project.type) && (
              <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em]">
                {[project.year, project.type].filter(Boolean).join(" · ")}
              </p>
            )}
            <h3 className="font-clash font-bold text-ink text-[34px] sm:text-[44px] lg:text-[52px] leading-[0.98] tracking-[-0.025em] text-balance">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="font-clash font-semibold italic text-flame text-[18px] sm:text-[20px] leading-[1.3] tracking-[-0.01em] text-balance max-w-[28ch]">
                {project.tagline}
              </p>
            )}
            <p className="font-satoshi font-normal text-secondary text-[15px] sm:text-[16px] leading-[1.6] text-pretty max-w-[42ch]">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="font-satoshi font-medium text-cedar text-[10px] uppercase tracking-[0.22em] border border-paper-border px-2.5 py-1 rounded-full"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
            <span className="font-satoshi font-medium text-ink text-[12px] uppercase tracking-[0.25em] border-b border-ink pb-0.5 self-start transition-colors duration-300 group-hover:text-flame group-hover:border-flame">
              Read the case study →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

const ProjectsScroller = ({ items }) => {
  const containerRef = useRef(null);
  const railRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const userInteractedRef = useRef(false);
  const programmaticScrollRef = useRef(false);
  const reducedMotion = useReducedMotion();
  const single = items.length <= 1;

  const scrollToIndex = (i, smooth = true) => {
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    setIndex(clamped);
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-card]");
    const target = cards[clamped];
    if (!target) return;
    const rail = container.parentElement;
    programmaticScrollRef.current = true;
    rail.scrollTo({
      left: target.offsetLeft,
      behavior: smooth && !reducedMotion ? "smooth" : "instant",
    });
    setTimeout(() => {
      programmaticScrollRef.current = false;
    }, 800);
  };

  const stopAutoPlay = () => {
    userInteractedRef.current = true;
  };

  const handleArrow = (delta) => {
    stopAutoPlay();
    scrollToIndex(index + delta);
  };

  const handleTick = (i) => {
    stopAutoPlay();
    scrollToIndex(i);
  };

  useEffect(() => {
    if (reducedMotion || single) return;
    if (isHovered) return;
    if (userInteractedRef.current) return;
    const id = setInterval(() => {
      setIndex((prev) => {
        const next = prev >= items.length - 1 ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, reducedMotion, items.length, single]);

  const handleScroll = (e) => {
    if (!programmaticScrollRef.current) stopAutoPlay();
    const parent = e.currentTarget;
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-card]");
    if (!cards.length) return;
    const stride =
      cards[0].getBoundingClientRect().width +
      parseFloat(getComputedStyle(container).columnGap || "0");
    const newIndex = Math.round(parent.scrollLeft / stride);
    if (newIndex !== index) setIndex(newIndex);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      stopAutoPlay();
      scrollToIndex(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      stopAutoPlay();
      scrollToIndex(index + 1);
    }
  };

  const showProgress = !reducedMotion && !single && !userInteractedRef.current && !isHovered;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={fadeIn("", "", 0.05, 0.6)}
        className="flex items-end justify-between gap-6 mb-8"
      >
        <div className="flex items-baseline gap-4 flex-1 min-w-0">
          <span className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em] shrink-0">
            Selected work
          </span>
          <span className="h-px flex-1 bg-paper-border" />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ArrowButton
            direction="prev"
            onClick={() => handleArrow(-1)}
            disabled={single || index <= 0}
          />
          <ArrowButton
            direction="next"
            onClick={() => handleArrow(1)}
            disabled={single || index >= items.length - 1}
          />
        </div>
      </motion.div>

      <div
        className="relative -mx-6 sm:-mx-20"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected work"
        aria-live="polite"
      >
        <div
          ref={railRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-none px-6 sm:px-20 pb-2 [scroll-snap-type:x_mandatory]"
          style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
          onScroll={handleScroll}
          onWheel={stopAutoPlay}
          onTouchStart={stopAutoPlay}
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <div ref={containerRef} className="flex gap-6 sm:gap-8 cursor-grab active:cursor-grabbing">
            {items.map((project, i) => (
              <div data-card key={project.slug}>
                <ProjectCard project={project} index={i} total={items.length} />
              </div>
            ))}
            <div className="shrink-0 w-2 sm:w-12" aria-hidden="true" />
          </div>
        </div>

        <div
          className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 sm:w-24"
          style={{ background: "linear-gradient(to left, var(--color-primary), transparent)" }}
          aria-hidden="true"
        />
      </div>

      <div className="mt-8 flex items-center gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleTick(i)}
            aria-label={`Go to project ${i + 1}`}
            aria-current={index === i ? "true" : undefined}
            disabled={single}
            className={`group flex items-center gap-3 ${single ? "cursor-default" : ""}`}
          >
            <span
              className={`font-satoshi font-medium text-[11px] uppercase tracking-[0.25em] tabular-nums transition-colors duration-300 ${
                index === i ? "text-flame" : "text-secondary group-hover:text-ink"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < items.length - 1 && (
              <span
                className={`relative h-px overflow-hidden transition-all duration-300 ${
                  index === i ? "w-12 bg-paper-border" : "w-6 bg-paper-border"
                }`}
              >
                {index === i && showProgress && (
                  <span
                    key={`progress-${i}-${index}`}
                    className="absolute inset-y-0 left-0 w-full bg-flame origin-left autoplay-progress"
                  />
                )}
                {index === i && !showProgress && (
                  <span className="absolute inset-0 bg-flame" />
                )}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <hr className="section-rule" />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="font-satoshi font-normal text-secondary text-[16px] max-w-[62ch] leading-[1.65] text-pretty"
        >
          One platform, four interfaces, sixteen months in daily production —
          here&apos;s the current centrepiece, with deeper case studies as more
          projects ship.
        </motion.p>
      </div>

      <div className="mt-12">
        <ProjectsScroller items={projects} />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
