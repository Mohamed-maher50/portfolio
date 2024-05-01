import React from "react";

const FormInput = React.forwardRef(({ type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      {...props}
    />
  );
});

export default FormInput;
