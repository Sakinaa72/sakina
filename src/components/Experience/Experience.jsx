import React from "react";
import Badge from "../Badge";

const Experience = ({ experience }) => {
  return (
    <li
      key={experience.name}
      className="flex flex-row justify-start items-stretch basis-1/2"
    >
      <div>
        {/* <img src={project.logo} className="w-8 h-8" /> */}
        <a
          href={experience.link}
          target="_blank"
          className="font-medium hover:text-gray-600 transition-color text-md"
        >
          {experience.name}
        </a>
        {experience.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
        <p className="text-gray-500 text-[14px] leading-6">{experience.description}</p>
      </div>
    </li>
  );
};

export default Experience;
