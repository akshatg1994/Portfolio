import React from "react";
import projects from "../data/projects.json";
import styles from './projects.module.css'

const Projects = () => {
  return (
    <div>
      Projects section
      {projects.map((project, index) => (
        <RenderProject project={project} isFlipped={index % 2} />
      ))}
    </div>
  );
};

const RenderProject = (props) => {
  const { project, isFlipped } = props;
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectTitle}>

      </div>
      <div></div>
    </div>
  );
};

export default Projects;
