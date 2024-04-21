import { useState } from "react";
import Header from "./components/Navbar";
import PrimaryButton from './components/PrimaryButton';
import bgImg from './assets/images/illustration-working.svg';

function App() {
  return (
    <main className="container mx-auto xl:px-10 lg:px-5 overflow-x-hidden relative">
      <Header />
      <section className="flex flex-col-reverse md:flex md:flex-row items-center justify-between gap-10 md:gap-20 mt-10 px-5 md:px-0">
        <div className="text-center md:text-left xl:w-[70%]">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl lg:leading-tight xl:leading-tight text-primary-violet font-bold mb-3">More than just shorter links</h1>
          <p className="text-neutral-gray text-lg font-normal mb-6 xl:mr-12">Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <PrimaryButton size="roundedBig" text={'Get Started'}/>
        </div>
        <div className="">
          <img src={bgImg} alt="Background image" className="object-contain"/>
        </div>
      </section>
    </main>
  );
}

export default App;
