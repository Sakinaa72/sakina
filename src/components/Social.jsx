import React from "react";

const Social = ({ social }) => {
  return (
    <li key={social.name}>
      <a
        href={social.link}
        target="_blank"
        className="block cursor-pointer rounded-md hover:bg-gray-100 p-2 transition-colors"
      >
        <img src={social.icon} alt={social.name} className="w-5 h-5" />
      </a>
    </li>
  );
};

export default Social;
