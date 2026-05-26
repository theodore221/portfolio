import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ease = [0.25, 1, 0.5, 1];

const ProofRow = ({ label, headline, detail }) => (
  <div className="flex flex-col gap-3">
    <span className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em]">
      {label}
    </span>
    <span className="font-clash font-semibold text-ink text-[22px] sm:text-[26px] leading-[1.1] tracking-[-0.015em]">
      {headline}
    </span>
    {detail && (
      <span className="font-satoshi font-normal text-secondary text-[14px] leading-[1.5] text-pretty">
        {detail}
      </span>
    )}
  </div>
);

const focusedServices = [
  {
    eyebrow: "Build",
    title: "End-to-End Product Engineering",
    body:
      "I take a brief and ship a working system. Specs, schema, UI, deploy. The Holy Cross Centre portal is the current proof: four user portals, dynamic pricing, GST invoicing, catering with allergy safety, staff rostering — all behind one codebase, all in daily production use.",
    stack: ["Next.js", "TypeScript", "React", "Supabase", "Tailwind"],
  },
  {
    eyebrow: "Architect",
    title: "Cloud-Native Architecture & Security",
    body:
      "Multi-role authentication, OTP magic links, Postgres Row Level Security at the database layer. AWS infrastructure tuned for cost (20% reduction on a prior platform) and deployment velocity (35% faster). Zero security incidents since the HCC portal went live.",
    stack: ["AWS", "Vercel", "Postgres + RLS", "OAuth 2.0", "PWA"],
  },
  {
    eyebrow: "Lead",
    title: "Stakeholder & Delivery Engineering",
    body:
      "Specs before code. PRDs, architecture decision records, walkthroughs with the people who'll actually use the thing. I sit with kitchen staff and map their paper run sheets before I open a code editor. The result is software that gets adopted instead of mandated.",
    stack: ["PRDs", "ADRs", "Discovery", "Training"],
  },
];

const ServiceCard = ({ service, index, total }) => (
  <article
    className="service-card shrink-0 snap-start w-[calc(100vw-104px)] sm:w-[calc(100vw-240px)] max-w-[1040px] flex flex-col gap-7 p-8 sm:p-10 lg:p-12"
    role="group"
    aria-roledescription="slide"
    aria-label={`${index + 1} of ${total}`}
  >
    {/* Numeric mark + eyebrow */}
    <div className="flex items-baseline justify-between gap-6">
      <span
        className="font-clash font-bold text-outline-flame select-none tabular-nums leading-[0.85] tracking-[-0.04em]"
        style={{ fontSize: "clamp(72px, 9vw, 112px)" }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em] pt-3">
        {service.eyebrow}
      </span>
    </div>

    <h3 className="font-clash font-bold text-ink text-[30px] sm:text-[40px] lg:text-[44px] leading-[1.02] tracking-[-0.025em] text-balance max-w-[16ch]">
      {service.title}
    </h3>

    <p className="font-satoshi font-normal text-secondary text-[15px] sm:text-[16px] leading-[1.65] text-pretty">
      {service.body}
    </p>

    <div className="flex flex-wrap gap-2 mt-auto pt-2">
      {service.stack.map((s) => (
        <span
          key={s}
          className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.22em] border border-paper-border px-3 py-1.5 rounded-full"
        >
          {s}
        </span>
      ))}
    </div>
  </article>
);

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "Previous service" : "Next service"}
    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${
      disabled
        ? "border-paper-border/40 text-secondary/40 cursor-not-allowed"
        : "border-paper-border text-ink hover:border-flame hover:text-flame cursor-pointer"
    }`}
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === "prev" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  </button>
);

const AUTOPLAY_MS = 6000;

const ServicesScroller = ({ services }) => {
  const containerRef = useRef(null);
  const railRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const userInteractedRef = useRef(false);
  const programmaticScrollRef = useRef(false);
  const reducedMotion = useReducedMotion();

  const scrollToIndex = (i, smooth = true) => {
    const clamped = Math.max(0, Math.min(services.length - 1, i));
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

  // Auto-advance: loops back to 0 after the last card. Pauses while hovered.
  // Permanently stops once the user touches anything (button, scroll, key, wheel).
  useEffect(() => {
    if (reducedMotion) return;
    if (isHovered) return;
    if (userInteractedRef.current) return;
    const id = setInterval(() => {
      setIndex((prev) => {
        const next = prev >= services.length - 1 ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, reducedMotion, services.length]);

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

  const showProgress = !reducedMotion && !userInteractedRef.current && !isHovered;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header — eyebrow + arrows */}
      <motion.div
        variants={fadeIn("", "", 0.05, 0.6)}
        className="flex items-end justify-between gap-6 mb-8"
      >
        <div className="flex items-baseline gap-4 flex-1 min-w-0">
          <span className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.3em] shrink-0">
            How I work
          </span>
          <span className="h-px flex-1 bg-paper-border" />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ArrowButton
            direction="prev"
            onClick={() => handleArrow(-1)}
            disabled={index <= 0}
          />
          <ArrowButton
            direction="next"
            onClick={() => handleArrow(1)}
            disabled={index >= services.length - 1}
          />
        </div>
      </motion.div>

      {/* Scrollable rail */}
      <div
        className="relative -mx-6 sm:-mx-20"
        role="region"
        aria-roledescription="carousel"
        aria-label="How I work — services"
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
          <div
            ref={containerRef}
            className="flex gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
          >
            {services.map((service, i) => (
              <div data-card key={service.title}>
                <ServiceCard service={service} index={i} total={services.length} />
              </div>
            ))}
            {/* Spacer so the last card has breathing room on its right */}
            <div className="shrink-0 w-2 sm:w-12" aria-hidden="true" />
          </div>
        </div>

        {/* Right-edge fade */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 sm:w-24"
          style={{
            background:
              "linear-gradient(to left, var(--color-primary), transparent)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Pagination ticks — 01 — 02 — 03 with autoplay progress fill */}
      <div className="mt-8 flex items-center gap-3">
        {services.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleTick(i)}
            aria-label={`Go to service ${i + 1}`}
            aria-current={index === i ? "true" : undefined}
            className="group flex items-center gap-3"
          >
            <span
              className={`font-satoshi font-medium text-[11px] uppercase tracking-[0.25em] tabular-nums transition-colors duration-300 ${
                index === i ? "text-flame" : "text-secondary group-hover:text-ink"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < services.length - 1 && (
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

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <hr className="section-rule" />

      {/* Overview Detail Card — gradient-border surface */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="surface-card p-8 sm:p-10 lg:p-12 w-full"
      >
        <p className="font-clash font-bold text-ink text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.05] tracking-[-0.025em] text-balance">
          Software that <span className="text-flame italic">runs the operation</span>{" "}
          — every day, for real users.
        </p>

        <p className="mt-6 font-satoshi font-normal text-secondary text-[16px] leading-[1.65] text-pretty max-w-[62ch]">
          I build production web platforms end-to-end &mdash; the kind of systems
          that quietly handle real operations for real users, every day. I write
          specs before I write code. Right now I&apos;m leading development of
          the <strong className="font-medium text-ink">Holy Cross Centre portal</strong>:
          a multi-module booking and operations platform with four user portals,
          dynamic pricing, GST-compliant invoicing, catering with dietary safety
          tracking, and staff rostering. Live in production. Stack:{" "}
          <span className="text-cedar font-medium">TypeScript</span> across{" "}
          <span className="text-cedar font-medium">Next.js</span>,{" "}
          <span className="text-cedar font-medium">React</span>, and{" "}
          <span className="text-cedar font-medium">Supabase</span>, on{" "}
          <span className="text-cedar font-medium">AWS</span> and{" "}
          <span className="text-cedar font-medium">Vercel</span>.
        </p>

        <div className="w-12 h-px bg-paper-border my-12 sm:my-14" />

        {/* Real proof, not decorative stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12 lg:gap-x-16">
          <ProofRow
            label="Live client"
            headline="Holy Cross Centre"
            detail="4 user portals · live in daily production since April 2025"
          />
          <ProofRow
            label="Track record"
            headline="Zero security incidents"
            detail="Zero pricing errors since the HCC portal launched"
          />
          <ProofRow
            label="Background"
            headline="BEng (Hons), UTS"
            detail="6 years shipping software · Melbourne, Australia"
          />
        </div>

        <div className="mt-12 sm:mt-14 flex flex-wrap items-center gap-6">
          <a
            href="/Theodore_Xavier_CV.pdf"
            download
            className="font-satoshi font-medium text-ink text-[13px] uppercase tracking-[0.25em] border border-paper-border px-5 py-3 rounded-full hover:border-flame hover:text-flame transition-colors duration-300"
          >
            Download CV →
          </a>
          <a
            href="https://www.linkedin.com/in/theodorexavier"
            target="_blank"
            rel="noreferrer"
            className="font-satoshi font-medium text-cedar text-[13px] uppercase tracking-[0.25em] border-b border-cedar/40 pb-0.5 hover:text-ink hover:border-ink transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Services — horizontal scroller */}
      <div className="mt-20 sm:mt-24">
        <ServicesScroller services={focusedServices} />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
