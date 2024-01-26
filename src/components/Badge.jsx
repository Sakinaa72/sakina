import React from "react";

const Badge = ({ children }) => {
  return (
    <span className="py-1 px-2 text-xs font-medium ml-2 rounded-full font-mono uppercase bg-gray-100 text-gray-900">
      {children}
    </span>
  );
};

export default Badge;
