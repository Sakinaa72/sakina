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
    <header className="pt-5 pb-8 flex justify-between gap-1">
      <div className="flex flex-col items-start">
        <h1 className="font-semibold text-2xl text-gray-100">Yasin Bhojani</h1>
        <p className="my-1 text-lg text-gray-300">
          {/* a full-stack developer, tech enthusiast, and investor. */}
          Software Engineer
        </p>
      </div>
      <ul className="flex items-center justify-center gap-2 select-none">
        {links.map((link) => (
          <Social social={link} key={link.name} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
