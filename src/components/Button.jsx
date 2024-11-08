import React from "react";

const Button = ({ text, className, props }) => {
  return (
    <button
      className={`text-white bg-sky-500 px-5 py-3 rounded-lg font-semibold ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
