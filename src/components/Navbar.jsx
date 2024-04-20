import React from "react";
import logoSrc from "../assets/images/logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-5 sm:py-10 px-7 md:px-0 flex items-center gap-12 justify-between relative">
      <img src={logoSrc} alt="Shortly logo" />
      <Nav />
    </header>
  );
};

export default Header;
