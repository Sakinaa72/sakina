import React from "react";
import Project from "./Project";
import { blimeLogo, shellLogo } from "../../assets";

const Projects = () => {
  const projects = [
    {
      logo: shellLogo,
      name: "shell",
      description:
        "a social media hub fostering connections among users to share passions.",
      link: "https://github.com/yasinbhojani/major-project",
      badges: [],
    },
    {
      logo: blimeLogo,
      name: "blime",
      description:
        "an app for managing your tasks and enhancing your productivity.",
      link: "https://blime.vercel.app/",
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
