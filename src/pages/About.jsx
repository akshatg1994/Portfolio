import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section>
      About Section
      <div className={styles.aboutHolder}>
        <p className={styles.summary}>
          Highly adaptable and analytical Android & React Native Developer with
          3+ years of experience delivering scalable cross-platform mobile
          solutions. Specialized in API integration, performance optimization,
          and asynchronous data handling. Frequently entrusted with R&D
          responsibilities—exploring and implementing solutions across POS
          devices and system hardware. Proven ability to debug complex issues,
          collaborate across teams, and drive features from concept to release.
          Contributed to mobile apps with 10,000+ total downloads across Play
          Store and App Store.
        </p>
        <div className={styles.aboutImageWrapper}>
          <img className={styles.profileImg} src="/images/profile.jpg" />
        </div>
      </div>
    </section>
  );
};

export default About;
