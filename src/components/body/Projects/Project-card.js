import React from "react";
import "./Project-card.css";
import LanguageIcon from '@material-ui/icons/Language';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                {/* <i className="fi fi-rr-globe"></i> */}
                <LanguageIcon fontSize='small' className='demo-icon' />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                <i className="devicon-github-original github-icon" ></i>
                Github
              </div>
            </a>
          )}
        </div>
        <p className="project-about">{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return (
              <label className="tag" key={tag}>
                {tag}
              </label>
            );
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt="" />
    </div>
  );
}

export default ProjectCard;
