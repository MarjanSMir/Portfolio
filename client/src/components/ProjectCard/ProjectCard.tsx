// components/Card.tsx
import { Project } from "../../types/project";

type CardProps = {
  project: Project;
};

function Card({ project }: CardProps) {
  return (
    <div className="card">
      <h2 className="title">{project.title}</h2>
      <div className="tech">
        {project.tech.map((tech, idx) => (
          <span key={idx}>{tech}</span>
        ))}
      </div>
      <div className="des">{project.description}</div>
      <div className="link">
        <a href={project.link} target="_blank">View Project</a>
      </div>
    </div>
  );
}

export default Card;
