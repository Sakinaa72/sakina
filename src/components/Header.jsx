import React from "react";

import twitterDarkIcon from "../assets/dark/twitter.svg";
import githubDarkIcon from "../assets/dark/github.svg";
import linkedinDarkIcon from "../assets/dark/linkedin.svg";
import twitterLightIcon from "../assets/light/twitter.svg";
import githubLightIcon from "../assets/light/github.svg";
import linkedinLightIcon from "../assets/light/linkedin.svg";
import Social from "./Social";

const Header = () => {
  const links = [
    {
      name: "Github",
      darkIcon: githubDarkIcon,
      lightIcon: githubLightIcon,
      link: "https://github.com/yasinbhojani",
    },
    {
      name: "Linkedin",
      darkIcon: linkedinDarkIcon,
      lightIcon: linkedinLightIcon,
      link: "https://www.linkedin.com/in/yasinbhojani/",
    },
    {
      name: "X",
      darkIcon: twitterDarkIcon,
      lightIcon: twitterLightIcon,
      link: "https://twitter.com/yasin_bhojani",
    },
  ];

  return (
    <header className="pt-5 pb-8 flex justify-between gap-1">
      <div className="flex flex-col items-start">
        <h1 className="font-semibold text-2xl dark:text-gray-100">
          Yasin Bhojani
        </h1>
        <p className="my-1 text-lg dark:text-gray-300">
          a full-stack developer, tech enthusiast, and investor.
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
