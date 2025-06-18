import React from "react";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      name: "TeamTasker",
      description:
        "A full-featured task and project management system using React and Django microservices. Includes authentication, task assignments...",
      link: "",
      badges: [],
    },

    {
      name: "Let's Work",
      description: "A MERN stack project inspired by LinkedIn. Enables professional networking, posting updates, and engaging with other...",
      link: "",
      badges: [],
    },

  ];

  return (
    <section>
      <p className="text-lg font-medium">Projects</p>
      <ul className="py-5 text-lg flex justify-evenly items-start gap-4">
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
