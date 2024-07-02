import React from "react";

const Foreach = ({ render, data }) => {
  return data.map((e, index, array) => {
    return render;
  });
};

export default Foreach;
