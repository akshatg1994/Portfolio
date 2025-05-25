import React from "react";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import NavBar from "../components/NavBar";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
