import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link
      to={url}
      className="flex h-full flex-col items-center justify-center gap-5 mt-4 bg-teal-500 p-5 rounded-lg shadow-md text-white font-semibold text-2xl"
    >
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtn;
