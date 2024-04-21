import React from 'react'
import PrimaryButton from './PrimaryButton';
import bgImg from '../assets/images/illustration-working.svg';

const HeroSection = () => {
  return (
    <section className="container mx-auto md:px-7 2xl:px-20 flex flex-col-reverse md:flex lg:flex-row items-center justify-between gap-4 mt-10 px-5">
        <div className="text-center lg:text-left xl:mb-12">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl lg:leading-tight xl:leading-tight text-primary-violet font-bold mb-3">More than just shorter links</h1>
          <p className="text-neutral-gray text-lg font-normal mb-6 xl:mr-12">Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <PrimaryButton size="roundedBig" text={'Get Started'}/>
        </div>
        <div>
          <img src={bgImg} alt="Background image" className="max-w-none w-[140%] sm:w-[130%] sm:ml-[5%] md:w-[110%] lg:w-[130%] xl:w-[150%]"/>
        </div>
    </section>
  )
}

export default HeroSection