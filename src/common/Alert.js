import React from "react";

const Alert = ({ message, error }) => {
  return (
    <div
      className={
        error
          ? "border border-red-400 p-5 rounded-md"
          : "border border-light-blue-500 p-5 rounded-md"
      }
    >
      {message}
    </div>
  );
};

export default Alert;
