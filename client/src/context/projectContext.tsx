// context/ProjectContext.tsx
import React, { createContext, useState } from "react";
import { Project } from "../types/project";

type ProjectContextType = {
  projects: Project[];
  addProject: (project: Project) => void;
};

export const ProjectContext = createContext<ProjectContextType | undefined > (undefined);
{/*export ProjectContext*/}

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects(prev => [...prev, project]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
