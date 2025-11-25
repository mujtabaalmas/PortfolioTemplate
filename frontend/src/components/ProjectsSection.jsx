import { memo } from 'react'

const ProjectsSection = memo(({ projects }) => (
  <section id="projects" className="section-padding">
    <div className="section-header">
      <h2 className="section-title">Backends built for real-world scale</h2>
    </div>
    <div id="projects-grid" className="grid grid-2 mt-12">
      {projects.map((project, index) => (
        <div
          key={project.name}
          className="project-card glass-panel fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="project-header">
            <div className="project-info">
              <span className="project-eyebrow">Project</span>
              <h3 className="project-title">{project.name}</h3>
            </div>
            <span className="project-badge">{project.live ? 'Live' : 'Case study'}</span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
))

export default ProjectsSection
