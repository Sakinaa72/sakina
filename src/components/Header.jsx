import React from "react";

import { githubIconSVG, linkedinIconSVG, xIconSVG, yLogo } from "../assets";

import Social from "./Social";

const Header = () => {
  const links = [
    {
      name: "Github",
      icon: githubIconSVG,
      link: "https://github.com/Sakinaa72/",
    },
    {
      name: "Linkedin",
      icon: linkedinIconSVG,
      link: "https://www.linkedin.com/in/sakinaarupanii/",
    },
    {
      name: "LeetCode",
      icon: xIconSVG,
      link: "https://leetcode.com/u/sakiname72/",
    },
  ];

  return (
    <header className="pt-5 ">
      <h1 className="font-semibold text-2xl">Sakina Rupani</h1>
      <p className="text-lg text-gray-500">Software Engineer</p>
      <ul className="flex items-start justify-start gap-3 select-none mt-3">
        {links.map((link) => (
          <Social social={link} key={link.name} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
