import React from "react";

const FormLabel = ({ children, ...props }) => {
  return (
    <label
      className="block mb-2 label font-medium  text-gray-700 text-lg"
      {...props}
    >
      {children}
    </label>
  );
};

export default FormLabel;
