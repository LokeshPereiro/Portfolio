/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../../components/hoc/SectionWrapper";
import { ProjectsCard } from "../../components/projects-card/ProjectsCard";

import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils/motion";
import { projects } from "../../constants";
import "./projectsStyles.scss";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="subtitle">My work</p>
        <h2 className="title">Projects.</h2>
      </motion.div>

      <motion.p className="description" variants={fadeIn("", "", 0.1, 1)}>
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className="projectsWrapperDiv">
        {projects.map((project, index) => (
          <ProjectsCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
