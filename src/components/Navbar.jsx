import React from "react";
import HeaderLogo from "../assets/images/logo.svg?react";
import Nav from "./Nav";
import Container from "./Container";

const Header = () => {
  return (
    <Container tag="header" className="py-5 sm:py-10 flex items-center gap-12 justify-between relative">
      <a href="#">
        <HeaderLogo style={{ color: "#34313D", overflow: 'initial' }} />
      </a>
      <Nav />
    </Container>
  );
};

export default Header;
