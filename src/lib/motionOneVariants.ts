export const display = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.8,
    },
  },
};

export const slideUp = {
  hidden: {
    y: "30vh",
  },
  visible: {
    y: "0vh",

    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
