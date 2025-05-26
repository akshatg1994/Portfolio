import React from "react";
import projects from "../data/projects.json";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section>
      Projects section
      {projects.map((project, index) => (
        <RenderProject project={project} isFlipped={index % 2} />
      ))}
    </section>
  );
};

const RenderProject = (props) => {
  const { project, isFlipped } = props;
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectTitle}>{project.name}</div>
      <div
        className={`${styles.projectDataHolder} ${
          isFlipped ? styles.isFlipped : ""
        }`}
      >
        <div className={styles.projectDetails}>
          {project.description.map((desc, index) => (
            <div>{desc}</div>
          ))}
          <div className={styles.projectImageWrapper}></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
