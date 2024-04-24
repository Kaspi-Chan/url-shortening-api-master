import React from "react";

const StatisticsCard = ({ img, title, text, style }) => {
  return (
    <article
      style={style}
      className="rounded-lg shadow-sm shadow-stone-900/10 px-6 pb-8 pt-0 bg-white lg:w-[33%] text-center lg:text-left relative z-10"
    >
      <div className="rounded-full bg-primary-violet w-20 h-20 grid place-content-center mx-auto lg:mx-0 relative bottom-10">
        <img src={img} alt={`${title} card icon`} />
      </div>
      <div className="-mt-2">
        <h4 className="text-primary-violet font-bold text-xl lg:text-2xl mb-4">{title}</h4>
        <p className="text-neutral-gray text-base font-normal">{text}</p>
      </div>
    </article>
  );
};

export default StatisticsCard;
