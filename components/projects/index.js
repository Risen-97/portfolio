import { projectsInfo } from "../../data";
import ProjectDetails from "./ProjectDetails";
import ProjectThumbnail from "./ProjectThumbnail";

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <h2 className="title">projects</h2>
      {projectsInfo.map((project, idx) => {
        const justify = idx % 2 !== 0 ? true : false;
        return (
          <div key={project.title} className="project-grid">
            <ProjectThumbnail image={project.image} justify={justify} />
            <ProjectDetails project={project} justify={justify} />
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
