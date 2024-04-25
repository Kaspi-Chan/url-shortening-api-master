import { useState } from "react";
import Header from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LinkSection from "./components/LinkSection";
import StatisticsSection from "./components/StatisticsSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-x-hidden relative">
      <Header />
      <HeroSection />
      <div className="bg-stone-100">
        <LinkSection />
        <StatisticsSection />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
