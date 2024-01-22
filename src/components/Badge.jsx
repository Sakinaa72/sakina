import React from "react";

const Badge = ({ children }) => {
  return (
    <span className="bg-black text-white py-1 px-2 text-xs ml-2 rounded-full font-mono uppercase dark:bg-gray-100 dark:text-gray-900">
      {children}
    </span>
  );
};

export default Badge;
