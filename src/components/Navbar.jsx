import React from "react";
import logoSrc from "../assets/images/logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-5 px-7 sm:py-10 sm:px-14 flex items-center gap-12 justify-between">
      <img src={logoSrc} alt="Shortly logo" />
      <Nav />
    </header>
  );
};

export default Header;
