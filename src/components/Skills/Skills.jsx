import React from "react";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    { name: "React.js" },
    { name: "Express" },
    { name: "Node.js" },
    { name: "Next.js" },
    { name: "Nest.js" },
    { name: "Django" },
    { name: "AI/ML" },
    { name: "Java" },
    { name: "REST APIs" },
    { name: "Git" },
    { name: "Docker" },
    { name: "Jenkins" },
    { name: "Azure" },
    { name: "Redis" },
    { name: "RabbitMQ" },
    { name: "PostgreSQL" },
  ];

  return (
    <section>
      <p className="text-lg font-medium mt-5">Skills</p>
      <ul className="pt-5 text-lg flex flex-row flex-wrap gap-2">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
