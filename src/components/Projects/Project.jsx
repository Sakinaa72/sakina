import React from "react";
import Badge from "../Badge";

const Project = ({ project }) => {
  return (
    <li key={project.name}>
      <a
        href={project.link}
        target="_blank"
        className="font-medium text-gray-100 hover:text-gray-200 transition-color"
      >
        {project.name}
      </a>
      {project.badges.map((badge) => (
        <Badge key={badge}>{badge}</Badge>
      ))}
      <p className="text-gray-400">{project.description}</p>
    </li>
  );
};

export default Project;
