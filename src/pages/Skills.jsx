import React from "react";
import skillSet from "../data/skills.json";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section>
      Skills Section
      <div className={styles.skillsSets}>
        {skillSet.map((skillType, index) => (
          <SkillSection skillType={skillType} />
        ))}
      </div>
    </section>
  );
};

const SkillSection = (props) => {
  const { skillType: type } = props;
  return (
    <div className={styles.skillSetHolder}>
      <p>{type.skillType}</p>
      <div className={styles.skillList}>
      {type.skillList.map((skillSet, index) => (
          <SkillItem skillSet={skillSet} />
        ))}
    </div>
        </div>
  );
};

const SkillItem = (props) => {
  const { skillSet: skill } = props;
  return <p className={styles.skillItem}>{skill.name}</p>;
};

export default Skills;
