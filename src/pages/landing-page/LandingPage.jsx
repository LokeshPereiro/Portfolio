import { motion } from "framer-motion";
import "./landing.scss";
import { fadeIn } from "../../utils/motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__wrapper">
        <motion.div
          className="landing__wrapper-textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            <span>Hi👋 I'm,</span> LOKESH PEREIRO
          </motion.h2>
          <motion.h1 variants={textVariants}>Fullstack Developer</motion.h1>
          {/* BUttons */}

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scrolling img"
          />
        </motion.div>
      </div>

      {/* Text-Slider */}
      <motion.div
        className="landing__slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        MERN Frontend & Backend Developer
      </motion.div>

      {/* Image */}
      <motion.div
        className="landing__imageContainer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 10,
        }}
      >
        <motion.img src="/lok.png" alt="landing image" />
      </motion.div>
    </div>
  );
};
