import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="py-1 px-2 text-sm rounded-md bg-gray-200 text-black cursor-pointer">
      {skill.name}
    </div>
  );
};

export default Skill;
