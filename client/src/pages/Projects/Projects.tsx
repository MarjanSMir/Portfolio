// pages/ProjectsPage.tsx
import { useProjects } from "../../hooks/useProjects";
import Card from "../../components/ProjectCard/ProjectCard";

const ProjectsPage = () => {
  const { projects } = useProjects();

  return (
    <div>
      {projects.map((proj) => (
        <Card key={proj.id} project={proj} />
      ))}
    </div>
  );
};

export default ProjectsPage;
