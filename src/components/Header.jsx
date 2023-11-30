import React from "react";

import twitterIcon from "../assets/twitter.svg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import Social from "./Social";

const Header = () => {
  const links = [
    {
      name: "Github",
      icon: githubIcon,
      link: "https://github.com/yasinbhojani",
    },
    {
      name: "Linkedin",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/yasinbhojani/",
    },
    {
      name: "X",
      icon: twitterIcon,
      link: "https://twitter.com/yasin_bhojani",
    },
  ];

  return (
    <section className="py-10 flex justify-between">
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-lg">yasinbhojani</h1>
        <p className="my-2">
          a full-stack developer, tech enthusiast, and investor.
        </p>
      </div>
      <ul className="flex items-center justify-center gap-2 select-none">
        {links.map((link) => (
          <Social social={link} />
        ))}
      </ul>
    </section>
  );
};

export default Header;
