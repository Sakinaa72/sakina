import React from "react";
import Badge from "./Badge";

const Project = ({ project }) => {
  return (
    <li key={project.name}>
      <a
        href={project.link}
        target="_blank"
        className="font-medium transition-colors hover:text-gray-700 dark:text-gray-100"
      >
        {project.name}
      </a>
      {project.badges.map((badge) => (
        <Badge key={badge}>{badge}</Badge>
      ))}
      <p className="text-slate-700 dark:text-gray-400">{project.description}</p>
    </li>
  );
};

export default Project;
