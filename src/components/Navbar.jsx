import React from "react";
import logoSrc from "../assets/images/logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container mx-auto md:px-7 2xl:px-20 py-5 sm:py-10 px-7 flex items-center gap-12 justify-between relative">
      <img src={logoSrc} alt="Shortly logo" />
      <Nav />
    </header>
  );
};

export default Header;
