import SectionLayout from "../sectionLayout";
import ProjectCard from "./projectCard";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { projects } from "@/utils/projects";

export default function ProjectsSection() {
  return (
    <SectionLayout id="projects" title="projects">
      <p className="hidden md:flex absolute top-0 right-0 translate-y-[25%] text-gray-600 items-center justify-start gap-x-1 text-sm hover:text-gray-400 cursor-pointer">
        View all <ArrowRight size={16} />
      </p>
      <div className="w-full flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:items-start md:justify-between">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tools={project.tools}
            link={project.link}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
