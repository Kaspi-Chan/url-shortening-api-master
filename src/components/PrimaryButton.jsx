import React from "react";

const buttonStyles = {
  roundedSmall: "py-2 px-4 rounded-full",
  roundedBig: "py-3 px-8 rounded-full",
  rectangularSmall: "py-2 px-4 rounded-md",
  rectangularBig: "py-2 px-6 rounded-md",
};

const PrimaryButton = ({ size = 'roundedSmall', text, onClick }) => {
  return (
    <button onClick={onClick} className={`text-white bg-primary-cyan hover:bg-primary-cyan-light font-bold ${buttonStyles[size]}`}>
      {text}
    </button>
  );
};

export default PrimaryButton;
