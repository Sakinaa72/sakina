import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="py-1 px-2 text-sm rounded-md bg-slate-700 text-gray-200 hover:bg-slate-500 cursor-pointer transition-color">
      {skill.name}
    </div>
  );
};

export default Skill;
