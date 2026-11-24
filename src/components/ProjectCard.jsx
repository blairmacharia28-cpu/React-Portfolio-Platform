
function ProjectCard({ project }) {
  return (
    <div className="project-card">
    <img
      src={project.image}
      alt={project.title}
    />

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <p>{project.technologies}</p>

        <a href={project.link}>
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
