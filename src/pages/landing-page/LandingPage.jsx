import { motion } from "framer-motion";
import "./landing.scss";
import scrollImg from "../../assets/scroll.png";
import lok from "../../assets/lok.png";
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
    <div className="landing unselectable" id="landing">
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
            <motion.a href="#projects" variants={textVariants}>
              Latest Projects
            </motion.a>

            <motion.a href="#contact" variants={textVariants}>
              Contact Me
            </motion.a>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scrollImg}
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
        <motion.img src={lok} alt="lokesh pereiro" />
      </motion.div>
    </div>
  );
};
