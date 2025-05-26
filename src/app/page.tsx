import React from "react";
import HeroSection from "./components/HeroSection";

import ProductPage from "./components/Productpage";

const Home = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <ProductPage />
    </div>
  );
};

export default Home;
