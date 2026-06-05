export const textVariant = (delay) => {
  return {
    hidden: {
      y: -20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: [0.25, 0.1, 0.25, 1],
        duration: 1.75,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration * 1.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration * 1.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration * 1.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const staggerReveal = (delay = 0, stagger = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const revealItem = {
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.9,
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.5,
  },
};
