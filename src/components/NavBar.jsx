import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navigationHolder}>
      <div>Akshat Gupta</div>
      <div className={styles.navigators}>
        <div className={styles.navigationItem}>About</div>
        <div className={styles.navigationItem}>Skills</div>
        <div className={styles.navigationItem}>Experience</div>
        <div className={styles.navigationItem}>Projects</div>
      </div>
    </nav>
  );
};

export default NavBar;
