import React from "react";
import FooterLogo from "../assets/images/logo.svg?react";

const Footer = () => {
  return (
    <footer className="w-full h-[300px] bg-black py-20 px-20">
      <FooterLogo style={{ color: "#FFFFFF" }} />
    </footer>
  );
};

export default Footer;
