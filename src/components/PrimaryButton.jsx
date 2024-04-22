import React from "react";

const buttonStyles = {
  roundedSmall: "py-2 px-4 rounded-full",
  roundedBig: "py-4 px-10 rounded-full text-base",
  rectangularSmall: "py-2 px-4 rounded-md",
  rectangularBig: "py-2 px-6 rounded-md text-base",
};

const PrimaryButton = ({ size = "roundedSmall", text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-primary-cyan hover:bg-primary-cyan-light font-bold whitespace-nowrap ${buttonStyles[size]}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
