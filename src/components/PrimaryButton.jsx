import React from "react";

const buttonStyles = {
  roundedSmall: "py-2 px-4 rounded-full",
  roundedBig: "py-4 px-10 rounded-full text-base",
  rectangularSmall: "py-2 px-6 rounded-md",
  rectangularBig: "py-2 px-8 rounded-md text-base",
};

const PrimaryButton = ({ size = "roundedSmall", text, onClick, href, type = "button", ...props }) => {
  const Component = href ? 'a' : 'button';
  const className = `text-white text-center bg-primary-cyan hover:bg-primary-cyan-light font-bold whitespace-nowrap block ${buttonStyles[size]}`;

  const specificProps = href ? { href, onClick } : {onClick, type}
  return (
    <Component
      {...props}
      {...specificProps}
      className={className}>
      {text}
    </Component>
  );
};

export default PrimaryButton;
