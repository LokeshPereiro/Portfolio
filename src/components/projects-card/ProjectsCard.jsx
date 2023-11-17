import { fadeIn } from "../../utils/motion";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import github from "../../assets/github.png";
import "./projectsCardStyles.scss";

export const ProjectsCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="projectCard"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        {/* Image */}
        <div className="imgContainer">
          <img src={image} alt="project_image" />

          <div className="projectSources">
            <div
              className="projectSources__links"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt="source code" />
            </div>
          </div>
        </div>

        {/* Desc */}
        <div className="descriptionContainer">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        {/* Tags */}
        <div className="tagsContainer">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} style={{ color: `${tag.color}` }}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
