import React from "react";
import HeaderLogo from "../assets/images/logo.svg?react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container mx-auto md:px-7 2xl:px-20 py-5 sm:py-10 px-7 flex items-center gap-12 justify-between relative">
      <HeaderLogo style={{ color: "#34313D", overflow: 'initial' }} />
      <Nav />
    </header>
  );
};

export default Header;
