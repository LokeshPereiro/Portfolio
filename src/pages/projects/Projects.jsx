/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { projects } from "../../constants";
import "./projectsStyles.scss";
import { SectionWrapper } from "../../components/hoc/SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motion";

const Projects = () => {
  const [works, setWorks] = useState(projects);
  const [filterWork, setFilterWork] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id="projects unselectable">
      <motion.div variants={textVariant()}>
        <p className="subtitle">My latest apps</p>
        <h2 className="title">Projects</h2>
      </motion.div>
      <motion.p className="description" variants={fadeIn("", "", 0.1, 1)}>
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className="app__work-filter">
        {["JS", "Fullstack", "Frontend", "React", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="browser">
              <p className="http">{"https://www.lokeshpereiro.com"}</p>

              <div className="circles">
                <div className="circles__items"></div>
                <div className="circles__items"></div>
                <div className="circles__items"></div>
              </div>
            </div>

            <div className="app__work-img app__flex">
              <img src={work.image} alt={work.name} className="movingImg" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover"
              >
                <a href={work.projectDemo} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.githubLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content">
              <h4>{work.title}</h4>
              <p className="projectDesc">{work.description}</p>

              <div className="app__work-tag">
                <p>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
