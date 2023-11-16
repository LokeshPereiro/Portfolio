/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../../components/hoc/SectionWrapper";
import { ServiceCard } from "../../components/service-card/ServiceCard";

import { services } from "../../constants";
import "./aboutStyles.scss";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="subtitle">Introduction</p>
        <h2 className="title">Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.3, 2)} className="description">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Threee.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions thats solve
        real-world problems. Let's work togather to bring your ideas to life!
      </motion.p>

      <div className="serviceWrapperDiv">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
