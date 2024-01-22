import React, { useEffect, useState } from "react";

const Social = ({ social }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = localStorage.getItem("theme");

      if (currentTheme) {
        setTheme(currentTheme);
      } else {
        setTheme("light");
      }
    };

    window.addEventListener("storage", checkTheme);

    return () => {
      window.removeEventListener("storage", checkTheme);
    };
  }, []);

  return (
    <li key={social.name}>
      <a
        href={social.link}
        target="_blank"
        className="block cursor-pointer rounded-md hover:bg-gray-100 p-2 transition-colors"
      >
        {theme === "light" ? (
          <img
            src={social.lightIcon}
            alt={social.name}
            className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]"
          />
        ) : (
          <img
            src={social.darkIcon}
            alt={social.name}
            className="w-[18px] h-[18px] min-w-[18px] min-h-[18px]"
          />
        )}
      </a>
    </li>
  );
};

export default Social;
