import React from "react";
import "../App.css";
import Cards from "../components/cards/Cards";
import HeroSection from "../components/hero/HeroSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;
