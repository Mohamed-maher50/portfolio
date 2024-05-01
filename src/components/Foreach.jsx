import React from "react";

const Foreach = ({ Component, sourceName = "", data, props }) => {
  console.log(props);
  return data.map((item, index) => {
    console.log(item);
    if (sourceName.trim() === "")
      return (
        <Component {...data} key={item.id || index} className="bg-black" />
      );
    return (
      <Component
        {...props}
        key={item.id || index}
        {...{
          [sourceName]: item,
        }}
      />
    );
  });
};

export default Foreach;
