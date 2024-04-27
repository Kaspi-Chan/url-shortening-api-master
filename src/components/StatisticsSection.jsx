import React from "react";
import StatisticsCard from "./StatisticsCard";
import brandRecognitionSvg from "../assets/images/icon-brand-recognition.svg";
import detailedRecordsSvg from "../assets/images/icon-detailed-records.svg";
import fullyCustomizableSvg from "../assets/images/icon-fully-customizable.svg";
import { data } from "autoprefixer";
import Container from "./Container";

const cardInfo = [
  {
    image: brandRecognitionSvg,
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    image: detailedRecordsSvg,
    title: "Detailed Recordings",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    image: fullyCustomizableSvg,
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const StatisticsSection = () => {
  return (
    <Container tag="section">
      <h3 className="text-primary-violet font-bold text-2xl lg:text-4xl mb-4 text-center">Advanced Statistics</h3>
      <p className="text-neutral-gray text-base font-normal mb-20 text-center">
        Track how your links are performing across the web with
        <br className="hidden lg:inline-block" />
        our advanced statistics dashboard
      </p>
      <div className="cards-container flex flex-col lg:flex-row items-center gap-12 lg:gap-6 pb-36">
        {cardInfo.map((card, index) => (
          <StatisticsCard key={card.title} img={card.image} text={card.text} title={card.title} style={{ top: `${index * 40}px` }} />
        ))}
      </div>
    </Container>
  );
};

export default StatisticsSection;
