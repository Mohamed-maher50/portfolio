import React from "react";

const SubTitle = ({ subtitle }) => {
  return (
    <h1 className="w-fit text-accent text-2xl font-bold uppercase mx-auto border-y-4 px-4 border-secondary">
      {subtitle}
    </h1>
  );
};

export default SubTitle;
