import React from "react";
import PrimaryButton from "./PrimaryButton";

const ShortenedLinkCard = ({ url, shortUrl }) => {
  const overflowStyle = "whitespace-nowrap text-ellipsis overflow-hidden";
  return (
    <li className="bg-white rounded-md lg:flex lg:items-center lg:justify-between lg:gap-6">
      <div className={`p-3 lg:p-5 font-medium ${overflowStyle}`}>{url}</div>
      <hr className="bg-stone-400 w-full lg:hidden" />
      <div className="p-3 lg:p-5 flex flex-col lg:flex-row gap-3 lg:gap-6 justify-stretch lg:items-center">
        <div className={`text-primary-cyan font-bold ${overflowStyle}`}>{shortUrl}</div>
        <PrimaryButton size="rectangularBig" text={"Copy"} />
      </div>
    </li>
  );
};

export default ShortenedLinkCard;
