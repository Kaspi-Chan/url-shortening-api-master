import { useState } from "react";
import Header from "./components/Navbar";
import PrimaryButton from './components/PrimaryButton';
import bgImg from './assets/images/illustration-working.svg';

function App() {
  return (
    <main className="container mx-auto xl:px-10 overflow-x-hidden">
      <Header />
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-20 mt-10 px-5 md:px-0 h-[800px] md:h-[450px]">
        <div className="text-center md:text-left md:w-1/2 h-1/2 md:h-full">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl lg:leading-tight text-primary-violet font-bold mb-3">More than just shorter links</h1>
          <p className="text-neutral-gray text-lg font-normal mb-6 xl:mr-12">Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <PrimaryButton size="roundedBig" text={'Get Started'}/>
        </div>
        <div className="absolute w-[120%] md:w-full top-[10%] -right-[25%] md:-right-[55%]">
          <img src={bgImg} alt="Background image" className="object-fit"/>
        </div>
      </section>
    </main>
  );
}

export default App;
