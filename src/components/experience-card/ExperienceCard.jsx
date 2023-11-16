import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experienceCardStyles.scss";

export const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="verticalTimeLine"
      contentStyle={{
        background: "var(--darkBlue)",
        color: "var(--primaryColor)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="icons">
          <img src={experience.icon} alt={experience.company_name} />
        </div>
      }
    >
      <div className="info">
        <h3>{experience.title}</h3>
        <p>{experience.company_name}</p>
      </div>

      <ul>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
