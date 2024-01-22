import React from "react";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      name: "shell",
      description:
        "a social media hub fostering connections among users to share passions.",
      link: "https://github.com/yasinbhojani/major-project",
      badges: [],
    },
    {
      name: "blime",
      description: "an app for managing your tasks",
      link: "https://github.com/yasinbhojani/blime-client",
      badges: ["in progress"],
    },
  ];

  return (
    <section>
      <p className="font-mono text-lg tracking-tighter font-medium dark:text-gray-200">projects</p>
      <ul className="py-5 space-y-6">
        {projects.map((project) => (
          <Project project={project} key={project.name}/>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
