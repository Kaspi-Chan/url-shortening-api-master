import React from "react";
import FooterLogo from "../assets/images/logo.svg?react";
import SocialsMenu from "./SocialsMenu";

const Footer = () => {
  return (
    <footer className="bg-neutral-dark-violet pt-16 pb-20">
      <div className="container mx-auto px-5 md:px-7 2xl:px-20 flex flex-col justify-between lg:flex-row gap-10 text-center lg:text-left">
        <FooterLogo style={{ color: "#FFFFFF" }} className="mx-auto lg:mx-0 basis-1/3"/>
        <div className="text-white">
          <h5 className="font-semibold mb-4">Features</h5>
          <ul className="text-neutral-grayish-violet flex flex-col justify-center  gap-2">
            <li className="hover:text-primary-cyan"><a href="#">Link Shortening</a></li>
            <li className="hover:text-primary-cyan"><a href="#">Branded Links</a></li>
            <li className="hover:text-primary-cyan"><a href="#">Analytics</a></li>
          </ul>
        </div>
        <div className="text-white">
          <h5 className="font-semibold mb-4">Resources</h5>
          <ul className="text-neutral-grayish-violet flex flex-col justify-center  gap-2">
            <li className="hover:text-primary-cyan"><a href="#">Blog</a></li>
            <li className="hover:text-primary-cyan"><a href="#">Developers</a></li>
            <li className="hover:text-primary-cyan"><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="text-white">
          <h5 className="font-semibold mb-4">Company</h5>
          <ul className="text-neutral-grayish-violet flex flex-col justify-center  gap-2">
            <li className="hover:text-primary-cyan"><a href="#">About</a></li>
            <li className="hover:text-primary-cyan"><a href="#">Our Team</a></li>
            <li className="hover:text-primary-cyan"><a href="#">Careers</a></li>
            <li className="hover:text-primary-cyan"><a href="#">Contact</a></li>
          </ul>
        </div>
        <SocialsMenu />
      </div>
    </footer>
  );
};

export default Footer;
