import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import "./serviceCardStyles.scss";

export const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div
        className="serviceCard"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div className="serviceCard__div">
          <img src={icon} alt={title} />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
