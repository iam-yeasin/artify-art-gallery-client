import React from "react";
import HeroSlider from "../components/HeroSlider";
import FeaturedArtworks from "../components/FeaturedArtworks";

const HomePage = () => {
  return (
    <div>
      {/* Hero Slider Section */}
      <HeroSlider />
      {/* FeaturedArtworks Section */}
      <FeaturedArtworks/>
    </div>
  );
};

export default HomePage;
