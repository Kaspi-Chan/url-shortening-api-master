import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenu = (
    <nav className={`nav-responsive md:hidden absolute top-16 sm:top-24 bg-primary-violet py-6 px-4 rounded-lg`}>
      <ul className="flex flex-col items-stretch gap-3 text-center text-white font-bold">
        <li className="cursor-pointer py-2">Features</li>
        <li className="cursor-pointer py-2">Pricing</li>
        <li className="cursor-pointer py-2">Resources</li>
      </ul>
      <div className="flex flex-col items-stretch gap-3 pt-4  mt-4 border-t border-solid border-stone-500">
        <button className="cursor-pointer text-white font-bold py-2">Login</button>
        <PrimaryButton size="roundedSmall" text="Sign up" />
      </div>
    </nav>
  );
  return (
    <>
      {isOpen && mobileMenu}
      <nav className="hidden md:flex items-start justify-between md:w-full w-3/4">
        <ul className="flex items-center gap-4 text-neutral-grayish-violet font-bold">
          <li className="cursor-pointer hover:text-neutral-dark-violet">Features</li>
          <li className="cursor-pointer hover:text-neutral-dark-violet">Pricing</li>
          <li className="cursor-pointer hover:text-neutral-dark-violet">Resources</li>
        </ul>
        <div className="flex items-center gap-8">
          <button className="cursor-pointer text-neutral-grayish-violet font-bold">Login</button>
          <PrimaryButton size="roundedSmall" text="Sign up" />
        </div>
      </nav>
      <HamburgerMenu isOpen={isOpen} onClick={() => setIsOpen((isOpen) => !isOpen)} />
    </>
  );
};

export default Nav;
