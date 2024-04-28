import React from "react";
import PrimaryButton from "./PrimaryButton";
import bgImg from "../assets/images/illustration-working.svg";
import Container from "./Container";

const HeroSection = () => {
  return (
    <Container tag="section" className="flex flex-col-reverse md:flex lg:flex-row items-center justify-between gap-4 mt-10">
      <div className="text-center lg:text-left xl:mb-12 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl lg:leading-tight xl:leading-tight text-primary-violet font-bold mb-3">
          More than just shorter links
        </h1>
        <p className="text-neutral-gray text-lg font-normal mb-6 xl:mr-52">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <PrimaryButton size="roundedBig" text={"Get Started"} href='#'/>
      </div>
      <div>
        <img
          src={bgImg}
          alt="Background image"
          className="max-w-none w-[140%] sm:w-[130%] sm:ml-[5%] md:w-[110%] lg:w-[130%] xl:w-[150%]"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
