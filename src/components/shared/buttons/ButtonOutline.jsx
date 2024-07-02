import React from "react";

const ButtonOutline = ({ children, WrapElement = React.Fragment }) => {
  return (
    <WrapElement>
      <button className="flex  w-fit px-10 my-3 max-md:mx-auto  text-secondary hover:bg-secondary hover:text-accent btn hover:border-accent bg-accent  items-center gap-2">
        {children}
      </button>
    </WrapElement>
  );
};

export default ButtonOutline;
