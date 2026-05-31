import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ease = [0.25, 0.1, 0.25, 1];

const FeaturedProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", ease, duration: 1.0 }}
      className="solid-card-media cursor-pointer grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
      onClick={() => navigate(`/work/${project.slug}`)}
    >
      {/* Image */}
      <div className="relative w-full h-[280px] lg:h-[400px] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="font-satoshi font-medium text-primary text-[10px] uppercase tracking-[0.3em] bg-ink/80 backdrop-blur-sm px-3 py-1.5">
            Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10 flex flex-col justify-center">
        {(project.year || project.type) && (
          <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] mb-2">
            {[project.year, project.type].filter(Boolean).join(" \u00B7 ")}
          </p>
        )}
        <h3 className="font-clash font-bold text-ink text-[36px] lg:text-[48px] leading-[0.95] tracking-[-0.02em] mb-4 text-balance">
          {project.name}
        </h3>
        <p className="font-satoshi font-normal text-secondary text-[15px] leading-[1.65] mb-6 text-pretty max-w-[58ch]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em]"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <span className="font-satoshi font-medium text-ink text-[12px] uppercase tracking-[0.2em] border-b border-ink pb-0.5 self-start hover:text-cedar hover:border-cedar transition-colors duration-500">
          View Case Study &rarr;
        </span>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({
  name,
  slug,
  description,
  tags,
  image,
  index,
  source_code_link,
  demo_link,
  year,
  type,
}) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="solid-card-media w-full cursor-pointer h-full flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/work/${slug}`)}
    >
      <div className="relative w-full h-[230px] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center gap-6 transition-opacity duration-500"
          style={{ background: "rgba(26,22,20,0.6)", opacity: hovered ? 1 : 0 }}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            className="font-satoshi font-medium text-primary text-[13px] uppercase tracking-[0.25em] border-b border-primary pb-0.5 cursor-pointer hover:text-cedar hover:border-cedar transition-colors duration-300"
          >
            Code
          </a>
          <span className="text-primary opacity-40">&middot;</span>
          <a
            onClick={(e) => {
              e.stopPropagation();
              window.open(demo_link, "_blank");
            }}
            className="font-satoshi font-medium text-primary text-[13px] uppercase tracking-[0.25em] border-b border-primary pb-0.5 cursor-pointer hover:text-cedar hover:border-cedar transition-colors duration-300"
          >
            Live
          </a>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {(year || type) && (
          <p className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] mb-1">
            {[year, type].filter(Boolean).join(" \u00B7 ")}
          </p>
        )}
        <h3 className="font-clash font-semibold text-ink text-[30px] leading-[1.05] tracking-tight mb-2 text-balance">
          {name}
        </h3>
        <p className="font-satoshi font-normal text-secondary text-[15px] leading-[1.6] text-pretty">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em]"
            >
              {tag.name}
            </p>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <span className="font-satoshi font-medium text-cedar text-[11px] uppercase tracking-[0.25em] border-b border-cedar pb-0.5">
            View Case Study &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTypes = useMemo(() => {
    const types = [...new Set(projects.map((p) => p.type))];
    return ["All", ...types];
  }, []);

  const featuredProject = projects.find((p) => p.featured);

  const showFeatured =
    featuredProject &&
    (activeFilter === "All" || featuredProject.type === activeFilter);

  const filteredProjects = useMemo(() => {
    const nonFeatured = projects.filter((p) => !p.featured);
    if (activeFilter === "All") return nonFeatured;
    return nonFeatured.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <hr className="section-rule" />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="font-satoshi font-normal text-secondary text-[16px] max-w-[62ch] leading-[1.65] text-pretty"
        >
          A selection of work spanning production applications, client projects,
          and personal explorations. Each reflects a commitment to clarity,
          performance, and considered design.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="mt-12 flex flex-wrap gap-6 items-center">
        {filterTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            className={`font-satoshi font-medium text-[12px] uppercase tracking-[0.25em] pb-1 transition-colors duration-300 border-b ${
              activeFilter === type
                ? "text-ink border-cedar"
                : "text-secondary border-transparent hover:text-ink"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Featured Project */}
      <AnimatePresence mode="popLayout">
        {showFeatured && (
          <motion.div
            key="featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "tween", ease, duration: 0.6 }}
            className="mt-10"
          >
            <FeaturedProjectCard project={featuredProject} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                type: "tween",
                ease,
                duration: 0.6,
                delay: index * 0.1,
              }}
              layout
              className="h-full"
            >
              <ProjectCard index={index} {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && !showFeatured && (
        <p className="mt-12 font-satoshi font-normal text-secondary text-[15px]">
          No projects match this filter yet.
        </p>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
