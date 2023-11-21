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
      date={experience.date}
      iconStyle={{ background: "#1d1836" }}
      icon={<img src={experience.icon} alt={experience.company_name} />}
    >
      <div className="info">
        <h3>{experience.title}</h3>
        <p>{experience.company_name}</p>
      </div>

      <ul>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>
            <span>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-check"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
