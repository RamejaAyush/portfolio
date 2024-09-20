const COMMON_DURATION: number = 0.5;
const COMMON_Y_OFFSET: number = 5;

export const navVariants = {
  hidden: { opacity: 0, y: COMMON_Y_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: COMMON_DURATION, staggerChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: COMMON_DURATION, ease: "easeOut" },
  },
};

export const wrapperVariants = {
  hidden: { opacity: 0, y: COMMON_Y_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: COMMON_DURATION,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const linkVariants = {
  hidden: { opacity: 0.5 },
  visible: { opacity: 1 },
  exit: { opacity: 0.5, transition: { duration: COMMON_DURATION } },
};
