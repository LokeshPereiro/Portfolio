/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../../components/hoc/SectionWrapper";
import { TechStack } from "../../components/tech-stack/TechStack";
import { technologies } from "../../constants";
const Tech = () => {
  return (
    <div>
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <TechStack icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
