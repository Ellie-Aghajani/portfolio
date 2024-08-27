import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Munchie Master</h3>
        <p>
          A single-page web application designed for toddler moms to find
          healthy and delicious recipes.
        </p>
        <a
          href="https://github.com/Ellie-Aghajani/munchieMaster"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
}

export default Projects;
