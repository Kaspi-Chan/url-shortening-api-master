import { useState } from "react";
import Header from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LinkSection from "./components/LinkSection";

function App() {
  return (
    <main className="overflow-x-hidden relative">
      <Header />
      <HeroSection />
      <div className="bg-stone-100">
        <LinkSection />
      </div>
    </main>
  );
}

export default App;
