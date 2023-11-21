/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../../components/hoc/SectionWrapper";

import { services } from "../../constants";
import "./aboutStyles.scss";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";

const About = () => {
  return (
    <div className="unselectable">
      <motion.div variants={textVariant()}>
        <p className="subtitle">What I Do</p>
        <h2 className="title">About Me</h2>
      </motion.div>

      <div className="about__desciption d_flex">
        <motion.p variants={fadeIn("", "", 0.3, 2)} className="description">
          Hello to all👋, I'm Lokesh Pereiro and please welcome to my portfolio.
          I'm a MERN Fullstack Developer with a year of self-taught experience
          in frontend technologies, complemented by a rigorous 7-month intensive
          master's course that significantly enhanced my software development
          skills💻.
        </motion.p>
        <motion.p variants={fadeIn("", "", 0.3, 2)} className="description">
          I'm a quick learner and capable of continous learing from senior
          developers👨‍💻 while enriching my team with my skills. I love creating
          efficient, scalable, and user-friendly solutions thats solve
          real-world problems.
        </motion.p>
        <motion.p variants={fadeIn("", "", 0.3, 2)} className="description">
          A part from coding, I enjoy playing tennis🎾 and I'm a passionate
          horse rider🏇. As I was born at the foot of Mount Everest, I also love
          hiking and trekking.
        </motion.p>
      </div>

      <div className="about">
        {services.map((service, index) => (
          <Tilt key={service.title + index}>
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="about__profile-item"
            >
              <img src={service.icon} alt={service.title} />
              <div className="about__profile-item-text">
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {service.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
