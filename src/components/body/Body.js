import React from "react";
import About from "./About/About";
import "./Body.css";
import Contact from "./Contact/Contact";
import Info from "./Info/Info";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section id="info">
        <Info />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
