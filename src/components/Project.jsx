import React from "react";
import Badge from "./Badge";

const Project = ({ project }) => {
  return (
    <li key={project.name}>
      <a
        href={project.link}
        target="_blank"
        className="underline underline-offset-2 decoration-1 text-lg font-medium transition-colors hover:text-gray-700"
      >
        {project.name}
      </a>
      {project.badges.map((badge) => (
        <Badge key={badge}>{badge}</Badge>
      ))}
      <p className="text-slate-600">{project.description}</p>
    </li>
  );
};

export default Project;
