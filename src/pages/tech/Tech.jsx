/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../../components/hoc/SectionWrapper";
import { TechStack } from "../../components/tech-stack/TechStack";
import { technologies } from "../../constants";
import { motion } from "framer-motion";

import "./techStyles.scss";
import { textVariant } from "../../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="subtitle">Technologies I work with</p>
        <h2 className="title">Tech Stack</h2>
      </motion.div>

      <div className="techStackContainer">
        {technologies.map((technology) => (
          <div key={technology.name}>
            <TechStack icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
