import React from "react";
import Experience from "./Experience";

const Experiences = () => {
  const experiences = [
    {
      name: "Tata Consultancy Services - Full Stack Engineer (Aug 2024 - Present) ",
      description:" Built and scaled full-stack applications using Next.js, Nest.js, and Azure, integrating REST APIs and optimizing database performance. Developed and maintained CI/CD pipelines using Docker and Jenkins across multiple microservice-based projects.",
      link: "",
      badges: [],
    },
  ];

  return (
    <section>
      <p className="text-lg font-medium">Experiences</p>
      <ul className="py-5 text-lg ">
        {experiences.map((experience) => (
          <Experience experience={experience} key={experience.name} />
        ))}
      </ul>
    </section>
  );
};

export default Experiences;
