// hooks/useProjects.ts
import { useContext } from "react";
import { ProjectContext } from "../context/projectContext";

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
