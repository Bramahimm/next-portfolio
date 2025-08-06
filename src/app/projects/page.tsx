import type { FC } from "react";
import Project from "@/features/Projects";

export const metadata = {
  title: "Projects | Bram Ahimsa",
  description: "Projects page of Bram Ahimsa portfolio website",
};

const ProjectPage: FC = () => {
  return <Project />;
};

export default ProjectPage;
