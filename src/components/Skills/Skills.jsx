import React from "react";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    { name: "React.js" },
    { name: "Express" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Golang" },
    { name: "Web Socket" },
    { name: "REST APIs" },
    { name: "Figma" },
    { name: "Git" },
    { name: "Docker" },
    { name: "Redis" },
    { name: "AWS" },
    { name: "Spring Boot" },
    { name: "React Native" },
  ];

  return (
    <section>
      <p className="text-lg font-medium uppercase text-gray-100 mt-5">SKILLS</p>
      <ul className="py-5 text-lg flex flex-row flex-wrap gap-2">
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
