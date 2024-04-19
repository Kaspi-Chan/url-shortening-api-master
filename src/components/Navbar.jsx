import React from "react";
import logoSrc from "../assets/images/logo.svg";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  return (
    <nav className="py-10 px-14 max-sm:py-2 max-sm:px-4 flex items-center justify-between">
      <div className="flex items-start gap-12 ">
        <img src={logoSrc} alt="Shortly logo" />
        <ul className="flex items-center gap-4 text-neutral-grayish-violet font-bold">
          <li className="cursor-pointer hover:text-neutral-dark-violet">Features</li>
          <li className="cursor-pointer hover:text-neutral-dark-violet">Pricing</li>
          <li className="cursor-pointer hover:text-neutral-dark-violet">Resources</li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <button className="cursor-pointer text-neutral-grayish-violet font-bold">Login</button>
        <PrimaryButton size="roundedSmall" text="Sign up" />
      </div>
    </nav>
  );
};

export default Navbar;
