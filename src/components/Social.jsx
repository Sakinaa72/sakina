import React from "react";

const Social = ({ social }) => {
  return (
    <li key={social.name}>
      <a
        href={social.link}
        target="_blank"
        className="block cursor-pointer rounded-md p-1"
      >
        <img
          src={social.icon}
          alt={social.name}
          className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]"
        />
      </a>
    </li>
  );
};

export default Social;
