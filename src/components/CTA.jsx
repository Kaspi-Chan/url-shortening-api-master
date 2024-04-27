import React from "react";
import PrimaryButton from "./PrimaryButton";

const CTA = () => {
  return (
    <section className={`w-full py-14 px-5 bg-boost-mobile lg:bg-boost-desktop bg-primary-violet bg-no-repeat bg-cover bg-center text-center`}>
      <h3 className="text-white font-bold text-2xl lg:text-4xl mb-6 text-center">Boost your links today</h3>
      <PrimaryButton style={{ display: 'inline-block' }} size="roundedBig" text={"Get Started"} href='#' />
    </section>
  );
};

export default CTA;
