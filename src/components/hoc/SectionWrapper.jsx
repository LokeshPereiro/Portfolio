import { motion } from "framer-motion";
// import { styles } from "../styles";
import { staggerContainer } from "../../utils/motion";
import "./wrapperStyles.scss";

export const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <>
        <div className="overlay"></div>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="sectionContainer"
        >
          <span className="" id={idName} />
          <Component className="sectionContainer" />
        </motion.section>
      </>
    );
  }
  return HOC;
};
