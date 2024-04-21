import { useState } from "react";
import Header from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <main className="overflow-x-hidden relative">
      <Header />
      <HeroSection />
    </main>
  );
}

export default App;
