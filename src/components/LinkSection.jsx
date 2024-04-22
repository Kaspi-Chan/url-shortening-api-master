import React from "react";
import PrimaryButton from "./PrimaryButton";
import ShortenedLinkCard from "./ShortenedLinkCard";

const LinkSection = () => {
  return (
    <section className="container mx-auto md:px-7 2xl:px-20 px-5 bg-stone-100 pb-10">
      <div className="mt-20 mb-10 px-5 py-6 lg:px-12 lg:py-12 rounded-lg gap-4 flex flex-col lg:flex-row justify-center lg:justify-stretch items-stretch bg-primary-violet bg-shorten-mobile lg:bg-shorten-desktop bg-no-repeat bg-right-top lg:bg-cover">
        <input type="text" className="w-full rounded-md p-3 focus:outline-primary-cyan" placeholder="Shorten a link here..." />
        <PrimaryButton size="rectangularBig" text="Shorten it!" />
      </div>
      <div>
        <ShortenedLinkCard
          defaultLink={"https://tailwindui.com/components/application-ui/forms/input-groups"}
          shortLink={"https://tailwindui.com"}
        />
      </div>
    </section>
  );
};

export default LinkSection;
