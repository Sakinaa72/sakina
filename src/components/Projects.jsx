import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "shell",
      description:
        "a social media hub fostering connections among users to share passions from food, travel, gaming, and more.",
      link: "https://github.com/yasinbhojani/major-project",
    },
  ];

  return (
    <section>
      <p className="font-mono text-lg tracking-tighter font-medium">Projects</p>
      <div className="py-5">
        {projects.map((project) => (
          <div>
            <a
              href={project.link}
              target="_blank"
              className="underline underline-offset-2 decoration-1 text-lg font-medium transition-colors hover:text-gray-700"
            >
              {project.name}
            </a>
            <p className="text-slate-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
