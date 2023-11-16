/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { textVariant } from "../../utils/motion";
import { experiences } from "../../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "../../components/experience-card/ExperienceCard";
import { SectionWrapper } from "../../components/hoc/SectionWrapper";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="subtitle">What I have done so far</p>
        <h2 className="title">Work Experience.</h2>
      </motion.div>

      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
